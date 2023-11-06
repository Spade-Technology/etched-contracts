import { ethers, tenderly, run } from "hardhat";
import { faker } from '@faker-js/faker';
const fs = require("fs");
const path = require("path");

async function main () {
  const signers = await ethers.getSigners();

  const Entity = await ethers.getContractFactory("EntityManager");
  const entityContract = await Entity.attach('0xa5e4b73bd179f378EFbb13AF303C6AAb9A951390');
  const createOrg = await entityContract.connect(signers[0]).createOrganization(`Org: ${faker.company.name}`);
  // console.dir(createOrg);

  const getCount = await entityContract.connect(signers[0]).getTotalSupply();
  console.dir("COUNT:" + getCount.toString());

  const ownerOfOrg = await entityContract.connect(signers[0]).ownerOf(getCount)
  console.dir(ownerOfOrg);

  // const getPerms = await entityContract.connect(signers[0]).walkUpPermissionsTree(getCount, ownerOfOrg, [2,2,2,2,2,2,2,2,2,2,2]);
  const getPerms = await entityContract.connect(signers[0]).walkUpPermissionsTreeAndToggle(getCount, ownerOfOrg, { _curPerms: 0 });
  console.dir(getPerms);

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
