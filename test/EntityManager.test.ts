import { faker } from '@faker-js/faker';
const { BigNumber } = require("ethers");
const util = require('util')


// We import Chai to use its asserting functions here.
const { expect, assert } = require("chai");

describe("Entity Manager ...", () => {
  // A common pattern is to declare some variables, and assign them in the
  // `before` and `beforeEach` callbacks.

  let Entity;
  let entityContract: typeof ethers.Contract;
  let signers: Array<ethers.Signer>;
  let deployer: typeof ethers.Signer;
  let team1Owner: typeof ethers.Signer;
  let team1User: typeof ethers.Signer;
  let team1ShareRecipient: typeof ethers.Signer;
  let team2Owner: typeof ethers.Signer;
  let team2User: typeof ethers.Signer;
  let team2ShareRecipient: typeof ethers.Signer;
  // `beforeEach` will run before each test, re-deploying the contract every
  // time. It receives a callback, which can be async.

  //NOTE: This `beforeEach` will trigger before every test in each section
  beforeEach(async () => {
    // Get the ContractFactory and Signers here.

    signers = await ethers.getSigners();
    deployer = signers[0];
    team1Owner = signers[1];
    team1User = signers[2];
    team1ShareRecipient = signers[3];
    team2Owner = signers[4];
    team2User = signers[5];
    team2ShareRecipient = signers[6];


    Entity = await ethers.getContractFactory("EntityManager");
    entityContract = await Entity.deploy();
    await entityContract.deployed();
  });

  // DEPLOYMENT SECTION
  describe("Generate Orgs -> Teams -> Folders...", () => {
    it("Walk up folder tree permissions", async () => {
      console.log(`CONTRACT ADDR: ${entityContract.address}`)
      const org1 = await buildOrg(entityContract, team1Owner, team1User);
      const org2 = await buildOrg(entityContract, team2Owner, team2User);

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

  });

  //ADMIN ONLY FUNCTIONS
  describe("Owner Only", () => {
    it("Does nonsense in the next section...", async () => {
      console.log(`CONTRACT ADDR: ${entityContract.address}`)
    })
  });
});





//****************************************** REUSABLE FUNCTION(S) ******************************************//
const buildOrg = async (entityContract: typeof ethers.Contract, signOwner: typeof ethers.Signer, signUser: typeof ethers.Signer, perms = {}) => {
  let org = { name: `Org: ${faker.company.name()}` };
  await entityContract.connect(signOwner).createOrganization(org.name, 0);
  org.id = parseInt((await entityContract.getTotalSupply()).toString());
  org.teams = [await buildTeam(entityContract, signOwner, signUser, org.id)];
  //walk perms
  return org;
}

const buildTeam = async (entityContract: typeof ethers.Contract, signOwner: typeof ethers.Signer, signUser: typeof ethers.Signer, orgId, perms = {}) => {
  let team = { name: `Team: ${faker.company.name()}` };
  await entityContract.connect(signOwner).createTeam(orgId, team.name, 0);
  team.id = parseInt((await entityContract.getTotalSupply()).toString());
  team.folders = await buildFolders(entityContract, signOwner, signUser, team.id, 10);
  //walk perms
  return team;
}

const buildFolders = async (entityContract: typeof ethers.Contract, signOwner: typeof ethers.Signer, signUser: typeof ethers.Signer, teamId, numFolders, perms = {}) => {
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
    // console.log('CUR PERM: ', curFolder.permissions)
    await entityContract.setUserPermissionsForEntity(prevParentId, signUser.address, availablePerms[permPosition]);
    //walk perms
    folders.push(curFolder);
    prevParentId = await entityContract.getTotalSupply();
  }

  return folders;
}

const sharesFromFolders = async (entityContract: typeof ethers.Contract, signOwner: typeof ethers.Signer, signUser: typeof ethers.Signer, teamId, folders: Array<Object>, perms = {}) => { }