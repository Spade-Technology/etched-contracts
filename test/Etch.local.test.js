const { expect } = require("chai");
const { etchMainTests } = require("./Etch.test");

describe("Etch", () => {
  let teamContract;
  let orgContract;
  let etchContract;
  let signers;

  describe("Deployment", () => {
    it("Should get signers", async () => {
      signers = await ethers.getSigners();
    });

    it("Should deploy Organisation contract", async () => {
      const Org = await ethers.getContractFactory("Organisations");
      orgContract = await Org.deploy();
      await orgContract.deployed();
    });

    it("Should deploy Team contract", async () => {
      const Team = await ethers.getContractFactory("Teams");
      teamContract = await Team.deploy(orgContract.address);
      await teamContract.deployed();
      await expect(await teamContract.organisations()).to.equal(orgContract.address);
    });

    it("Should deploy Etch contract", async () => {
      const Etch = await ethers.getContractFactory("Etches");
      etchContract = await Etch.deploy(teamContract.address);
      await etchContract.deployed();
      await expect(await etchContract.teams()).to.equal(teamContract.address);
    });

    it("Running external tests on deployed contracts", async () => {
      etchMainTests({
        signers,
        orgContract,
        teamContract,
        etchContract,
      });
    });
  });
});
