const { expect } = require("chai");
const { etchMainTests } = require("./Etch.test");
const { etchSigTests } = require("./Signature.test");

describe("Etch", () => {
  let teamContract;
  let orgContract;
  let etchContract;
  let ensContract;
  let signers;

  describe("Deployment", () => {
    it("Should get signers", async () => {
      signers = await ethers.getSigners();
    });

    it("Should deploy Organisation contract", async () => {
      const Org = await ethers.getContractFactory("Organisations");
      orgContract = await Org.deploy();
      await orgContract.deployed();
      await orgContract.addNode(signers[0].address);
    });

    it("Should deploy ENS contract", async () => {
      const EtchENS = await ethers.getContractFactory("EtchENS");
      ensContract = await EtchENS.deploy(orgContract.address);
      await ensContract.deployed();
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

    // it("Running external tests on deployed contracts", async () => {
    //   etchMainTests({
    //     signers,
    //     orgContract,
    //     teamContract,
    //     etchContract,
    //     ensContract
    //   });
    // });

    it("Running external signature tests on deployed contracts", async () => {
      etchSigTests({
        signers,
        orgContract,
        teamContract,
        etchContract,
        ensContract
      });
      
    })
  });
});
