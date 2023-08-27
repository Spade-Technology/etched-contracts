const { expect } = require("chai");
const { etchMainTests } = require("./Etch.test");
const { cp } = require("fs");

const generatedAddesses = {
  Org: "0x7b84A4100689E73ec2488E272FB132aD02aE51ee",
  Team: "0xb8460aa794Bb3585ebf2A5823c8d838547F514eB",
  Etch: "0x88c34ED120c7F9E5a1FD78502C1b59ECAE45fBbf",
};

const [teamContractAddress, orgContractAddress, etchContractAddress] = [
  generatedAddesses["Team"],
  generatedAddesses["Org"],
  generatedAddesses["Etch"],
];

describe("Etch", () => {
  let teamContract;
  let orgContract;
  let etchContract;
  let signers;

  describe("Deployment", () => {
    it("Should get signers", async () => {
      signers = await ethers.getSigners();
    });

    it("Attach to deployed contracts", async () => {
      orgContract = await ethers.getContractAt("Organisations", orgContractAddress);
      teamContract = await ethers.getContractAt("Teams", teamContractAddress);
      etchContract = await ethers.getContractAt("Etches", etchContractAddress);
    });

    it("Running external tests on deployed contracts", async () => {
      await etchMainTests({
        signers,
        orgContract,
        teamContract,
        etchContract,
      });
    });
  });
});
