import { faker } from '@faker-js/faker';
const { BigNumber } = require("ethers");

// We import Chai to use its asserting functions here.
const { expect, assert } = require("chai");

// `describe` is a Mocha function that allows you to organize your tests. It's
// not actually needed, but having your tests organized makes debugging them
// easier. All Mocha functions are available in the global scope.

// `describe` receives the name of a section of your test suite, and a callback.
// The callback must define the tests of that section. This callback can't be
// an async function.
describe("Entity Manager ...", () => {
  // Mocha has four functions that let you hook into the the test runner's
  // lifecyle. These are: `before`, `beforeEach`, `after`, `afterEach`.

  // They're very useful to setup the environment for tests, and to clean it
  // up after they run.

  // A common pattern is to declare some variables, and assign them in the
  // `before` and `beforeEach` callbacks.

  let Entity;
  let entityContract;
  let signers;
  let owner;
  let juniorUser;
  let baseOrgId;
  let baseTeamId;

  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async () => {
    // Get the ContractFactory and Signers here.

    signers = await ethers.getSigners();
    owner = signers[0];
    juniorUser = signers[1];
    Entity = await ethers.getContractFactory("EntityManager");
    entityContract = await Entity.deploy();
    await entityContract.deployed();

    const createOrg = await entityContract.createOrganization(`Org: ${faker.company.name()}`, 0);
    // console.dir(createOrg);
    let getCount = await entityContract.getTotalSupply();
    baseOrgId = parseInt(getCount.toString());

    const createTeam = await entityContract.createTeam(baseOrgId, `Team: ${faker.company.name()}`, 0);
    getCount = await entityContract.getTotalSupply();
    baseTeamId = parseInt(getCount.toString());

    //Nest folders with random permissions
    let prevParentId = baseTeamId;
    const availablePerms = [0, 1, 2, 4, 8, 16]
    let permPosition;
    for (let i = 0; i < 10; i++) {
      await entityContract.createFolder(prevParentId, `Team: ${faker.company.name()}`, 0);
      permPosition = Math.floor(Math.random() * availablePerms.length);
      console.log('CUR PERM: ', availablePerms[permPosition])
      await entityContract.setUserPermissionsForEntity(prevParentId, juniorUser.address, availablePerms[permPosition]);
      prevParentId = await entityContract.getTotalSupply();
    }

    // console.log(await entityContract.getUserPermissionsForEntity(4, juniorUser.address));
    // console.log(await entityContract.getUserPermissionsForEntity(5, juniorUser.address));
    // console.log(await entityContract.getUserPermissionsForEntity(6, juniorUser.address));
    // console.log(await entityContract.getUserPermissionsForEntity(7, juniorUser.address));
    console.log(await entityContract.walkUpPermissionsTreeAndToggle(7, juniorUser.address, { _curPerms: 0, _totalChecks: 0, _maxWalk: -1 }));
    console.log(await entityContract.walkUpPermissionsTreeAndToggle(7, owner.address, { _curPerms: 0, _totalChecks: 0, _maxWalk: -1 }));


    // const ownerOfOrg = await entityContract.connect(signers[0]).ownerOf(getCount)
    // console.dir(ownerOfOrg);

    // const getPerms = await entityContract.connect(signers[0]).walkUpPermissionsTree(getCount, ownerOfOrg, [2,2,2,2,2,2,2,2,2,2,2]);
    // const getPerms = await entityContract.connect(signers[0]).walkUpPermissionsTreeAndToggle(getCount, ownerOfOrg, { _curPerms: 0 });
    // console.dir(getPerms);

  });

  // DEPLOYMENT SECTION
  describe("Deployment", () => {
    it("Deployer should equal owner", async () => {
      console.dir(`BaseOrg: ${baseOrgId}`);
      console.dir(`BaseTeam: ${baseTeamId}`);
    });

  });

  //ADMIN ONLY FUNCTIONS
  describe("Owner Only", () => {
  });
});
