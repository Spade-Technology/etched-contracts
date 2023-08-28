import { ethers, tenderly, run } from "hardhat";
const fs = require("fs");
const path = require("path");

const ETeamPermissions = {
  NONE: 0,
  READ: 1,
  READWRITE: 2,
};

const EOrgPermissions = {
  NONE: 0,
  MEMBER: 1,
  ADMIN: 2,
};

const DocName = "Fake Doc Name";
const IPFSCid = "Fake IPFSCid";

async function main() {
  const signers = await ethers.getSigners();

  console.log("Deploying contracts with the account:", signers[0].address);

  const Org = await ethers.getContractFactory("Organisations");
  const orgContract = await Org.deploy();
  await orgContract.deployed();

  console.log("Org deployed to:", orgContract.address);

  console.log("Organisations deployed to:", orgContract.address);

  const Team = await ethers.getContractFactory("Teams");
  const teamContract = await Team.deploy(orgContract.address);
  await teamContract.deployed();

  console.log("Teams deployed to:", teamContract.address);

  const Etch = await ethers.getContractFactory("Etches");
  const etchContract = await Etch.deploy(teamContract.address);
  await etchContract.deployed();

  console.log("Etches deployed to:", etchContract.address);

  console.log(process.env.EXPORTED_CONTRACT_FILE);

  const network = process.env.HARDHAT_NETWORK || "";
  const exportedContractFile = process.env.EXPORTED_CONTRACT_FILE || "";
  const exportedContractPath = path.join(__dirname, "..", exportedContractFile + network + ".json");

  console.log("exportedContractPath", exportedContractPath);
  const exportedContract = {
    Org: orgContract.address,
    Team: teamContract.address,
    Etch: etchContract.address,
  };

  fs.writeFileSync(exportedContractPath, JSON.stringify(exportedContract));

  // await tenderly.verify({
  //   name: "Organisations",
  //   address: orgContract.address,
  // });

  // await tenderly.verify({
  //   name: "Teams",
  //   address: teamContract.address,
  // });

  // await tenderly.verify({
  //   name: "Etches",
  //   address: etchContract.address,
  // });

  // await run("verify:verify", {
  //   address: orgContract.address,
  //   constructorArguments: [],
  // });

  // await run("verify:verify", {
  //   address: teamContract.address,
  //   constructorArguments: [orgContract.address],
  // });

  // await run("verify:verify", {
  //   address: etchContract.address,
  //   constructorArguments: [teamContract.address],
  // });

  const totalSupply = Number(await etchContract.getTotalSupply());
  const totalSupplyTeam = Number(await teamContract.getNumberOfTeamsCreated());
  const totalSupplyOrg = Number(await orgContract.getNumberOfOrganisationsCreated());

  await etchContract.safeMint(signers[0].address, DocName, IPFSCid);
  console.log("1: created etchId");

  let tx = await teamContract.createTeam(signers[0].address);
  await tx.wait(1);
  console.log("2: created teamId");

  await etchContract.safeMintForTeam(1, DocName, IPFSCid); // for teamId = 1
  console.log("3: created etchId for team");

  tx = await teamContract.createTeam(signers[1].address);
  await tx.wait(1);
  console.log("4: created teamId");

  tx = await teamContract["safeTransferFrom(address,address,uint256)"](
    signers[0].address,
    signers[1].address,
    1 + totalSupplyTeam
  );
  await tx.wait(1);
  console.log("5: transferred teamId");

  tx = await teamContract
    .connect(signers[1])
    ["safeTransferFrom(address,address,uint256)"](signers[1].address, signers[0].address, 1 + totalSupplyTeam);
  await tx.wait(1);
  console.log("6: transferred teamId");

  await etchContract.connect(signers[0]).transferToTeam(2 + totalSupply, 2 + totalSupplyTeam); // etchId = 2, teamId = 2
  console.log("7: transferred etchId to team");

  tx = await teamContract.createTeam(signers[0].address);
  await tx.wait(1);
  console.log("8: created teamId");

  tx = await teamContract.setPermission(3 + totalSupplyTeam, signers[1].address, ETeamPermissions.READWRITE);
  await tx.wait(1);
  console.log("9: set permission");

  await etchContract.connect(signers[1]).safeMintForTeam(3 + totalSupplyTeam, DocName, IPFSCid);
  console.log("10: created etchId for team");

  tx = await teamContract.connect(signers[0]).createTeam(signers[0].address);
  await tx.wait(1);
  console.log("11: created teamId");

  await etchContract.connect(signers[0]).safeMintForTeam(4 + totalSupplyTeam, DocName, IPFSCid);
  console.log("12: created etchId for team");

  await orgContract.connect(signers[0]).createOrganisation(signers[0].address);
  tx = await teamContract.connect(signers[0]).transferToOrganisation(4 + totalSupplyTeam, 1 + totalSupplyOrg); // teamId = 4, orgId = 1
  await tx.wait(1);
  console.log("13: transferred teamId to org");

  tx = await orgContract["safeTransferFrom(address,address,uint256)"](signers[0].address, signers[1].address, 1 + totalSupplyOrg);
  await tx.wait(1);
  console.log("14: transferred orgId");

  tx = await orgContract
    .connect(signers[1])
    ["safeTransferFrom(address,address,uint256)"](signers[1].address, signers[0].address, 1 + totalSupplyOrg);
  await tx.wait(1);
  console.log("15: transferred orgId");

  tx = await orgContract.setPermission(1 + totalSupplyOrg, signers[1].address, EOrgPermissions.ADMIN);
  await tx.wait(1);
  console.log("16: set permission");

  await orgContract.connect(signers[1]).setPermission(1 + totalSupplyOrg, signers[2].address, EOrgPermissions.MEMBER);
  console.log("17: set permission");

  await teamContract.connect(signers[1]).setPermission(4 + totalSupplyTeam, signers[1].address, ETeamPermissions.READWRITE);
  console.log("18: set permission");

  await teamContract.connect(signers[1]).setPermission(4 + totalSupplyTeam, signers[2].address, ETeamPermissions.READ);
  console.log("19: set permission");

  console.log("done.");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
