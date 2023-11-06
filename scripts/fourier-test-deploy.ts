import { ethers, tenderly, run } from "hardhat";
const fs = require("fs");
const path = require("path");

async function main () {
  const signers = await ethers.getSigners();

  console.log("Deploying contracts with the account:", signers[0].address);

  const Entity = await ethers.getContractFactory("EntityManager");
  const entityContract = await Entity.deploy();
  await entityContract.deployed();


  console.log("EntityManager deployed to:", entityContract.address);

  console.log(process.env.EXPORTED_CONTRACT_FILE);

  const network = process.env.HARDHAT_NETWORK || "";
  const exportedContractFile = process.env.EXPORTED_CONTRACT_FILE || "";
  const exportedContractPath = path.join(__dirname, "..", exportedContractFile + network + ".json");

  console.log("exportedContractPath", exportedContractPath);
  const exportedContract = {
    EntityManager: entityContract.address
  };

  fs.writeFileSync(exportedContractPath, JSON.stringify(exportedContract));

  console.log("exportedContract", exportedContract);

  // await tenderly.verify({
  //   name: "EntityManager",
  //   address: entityContract.address,
  // });

  // await run("verify:verify", {
  //   address: entityContract.address,
  //   constructorArguments: [],
  // });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
