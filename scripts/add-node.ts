import { ethers, tenderly, run } from "hardhat";
const fs = require("fs");
const path = require("path");

async function main () {
  const signers = await ethers.getSigners();

  console.log("Adding node to contract:", signers[0].address);

  const Org = await ethers.getContractFactory("Organisations");
  const orgContract = await Org.attach('0x092F3F73C466badF2437f516F378D0e3c63F1bB8')
  const res = await orgContract.addNode(signers[0].address)
  // await orgContract.addNode("0x138b743c7176C51CBd8694A0e8764b93325D4041") // Obirijah

  console.log('FINISHED:')
  console.dir(res)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
