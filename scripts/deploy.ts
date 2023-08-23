import { ethers, tenderly } from "hardhat";
const fs = require("fs");
const path = require("path");

async function main() {
  const signers = await ethers.getSigners();

  const Org = await ethers.getContractFactory("Organisations");
  const orgContract = await Org.deploy();
  await orgContract.deployed();

  tenderly.verify({
    name: "Organisations",
    address: orgContract.address,
  });

  console.log("Organisations deployed to:", orgContract.address);

  const Team = await ethers.getContractFactory("Teams");
  const teamContract = await Team.deploy(orgContract.address);
  await teamContract.deployed();

  tenderly.verify({
    name: "Teams",
    address: teamContract.address,
  });

  console.log("Teams deployed to:", teamContract.address);

  const Etch = await ethers.getContractFactory("Etches");
  const etchContract = await Etch.deploy(teamContract.address);
  await etchContract.deployed();

  tenderly.verify({
    name: "Etches",
    address: etchContract.address,
  });

  console.log("Etches deployed to:", etchContract.address);

  console.log(process.env.EXPORTED_CONTRACT_FILE);
  // export addresses to process.env.EXPORTED_CONTRACT_FILE + hardhatNetwork + .json

  const network = process.env.HARDHAT_NETWORK || "";
  const exportedContractFile = process.env.EXPORTED_CONTRACT_FILE || "";
  const exportedContractPath = path.join(
    __dirname,
    "..",
    exportedContractFile + network + ".json"
  );

  console.log("exportedContractPath", exportedContractPath);
  const exportedContract = {
    Org: orgContract.address,
    Team: teamContract.address,
    Etch: etchContract.address,
  };

  fs.writeFileSync(exportedContractPath, JSON.stringify(exportedContract));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
