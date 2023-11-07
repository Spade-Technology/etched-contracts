import { faker } from '@faker-js/faker';
const { BigNumber } = require("ethers");
const util = require('util')


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
  let team1Owner;
  let team1User;
  let team2Owner;
  let team2User;
  let arrOrgs: Array<Number> = [];
  let arrTeams: Array<Number> = [];
  let arrFolders: Array<Number> = [];
  //not worried about files right now

  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.
  beforeEach(async () => {
    // Get the ContractFactory and Signers here.

    signers = await ethers.getSigners();
    team1Owner = signers[0];
    team1User = signers[1];
    team2Owner = signers[2];
    team2User = signers[3];


    Entity = await ethers.getContractFactory("EntityManager");
    entityContract = await Entity.deploy();
    await entityContract.deployed();

    const org1 = await buildOrg(entityContract, team1Owner, team1User);
    const org2 = await buildOrg(entityContract, team1Owner, team1User);

    console.log(util.inspect(org1, { showHidden: false, depth: null, colors: true }))
    console.log(util.inspect(org2, { showHidden: false, depth: null, colors: true }))

    // console.log(await entityContract.walkUpPermissionsTreeAndToggle(7, team1Owner.address, { _curPerms: 0, _totalChecks: 0 }));
    // console.log(await entityContract.walkUpPermissionsTreeAndToggle(17, team1User.address, { _curPerms: 0, _totalChecks: 0 }));



    // const ownerOfOrg = await entityContract.connect(signers[0]).ownerOf(getCount)
    // console.dir(ownerOfOrg);

    // const getPerms = await entityContract.connect(signers[0]).walkUpPermissionsTree(getCount, ownerOfOrg, [2,2,2,2,2,2,2,2,2,2,2]);
    // const getPerms = await entityContract.connect(signers[0]).walkUpPermissionsTreeAndToggle(getCount, ownerOfOrg, { _curPerms: 0 });
    // console.dir(getPerms);

  });

  // DEPLOYMENT SECTION
  describe("Deployment", () => {
    it("Just a generic test...", async () => {
      console.log('...test stuff here...')
    });

  });

  //ADMIN ONLY FUNCTIONS
  describe("Owner Only", () => {
  });


  //REUSABLE FUNCTION(S)
  const buildOrg = async (entityContract: typeof ethers.Contract, signOwner, signUser, perms={}) => {
    let org = { name: `Org: ${faker.company.name()}` };
    await entityContract.connect(signOwner).createOrganization(org.name, 0);
    org.id = parseInt((await entityContract.getTotalSupply()).toString());
    org.teams = [await buildTeam(entityContract, signOwner, signUser, org.id)];
    //walk perms
    return org;
  }

  const buildTeam = async (entityContract: typeof ethers.Contract, signOwner, signUser, orgId, perms = {}) => {
    let team = { name: `Team: ${faker.company.name()}` };
    await entityContract.connect(signOwner).createTeam(orgId, team.name, 0);
    team.id = parseInt((await entityContract.getTotalSupply()).toString());
    team.folders = await buildFolders(entityContract, signOwner, signUser, team.id, 10);
    //walk perms
    return team;
  }

  const buildFolders = async (entityContract: typeof ethers.Contract, signOwner, signUser, teamId, numFolders, perms = {}) => {
    let folders = [];
    const availablePerms = [0, 1, 2, 4, 8, 16];
    let permPosition;
    let prevParentId;
    prevParentId = teamId;
    entityContract.connect(signOwner);
    for (let i = 0; i < numFolders; i++) {
      const curFolder = { name: `Folder: ${faker.company.name()}` };
      await entityContract.createFolder(prevParentId, curFolder.name, 0);
      curFolder.id = parseInt((await entityContract.getTotalSupply()).toString());
      permPosition = Math.floor(Math.random() * availablePerms.length);
      curFolder.permissions = { [signUser.address]: availablePerms[permPosition] }
      console.log('CUR PERM: ', curFolder.permissions)
      await entityContract.setUserPermissionsForEntity(prevParentId, signUser.address, availablePerms[permPosition]);
      //walk perms
      folders.push(curFolder);
      prevParentId = await entityContract.getTotalSupply();
    }

    return folders;
  }
});
