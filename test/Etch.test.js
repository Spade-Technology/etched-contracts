const { expect } = require("chai");

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

async function etchMainTests({ teamContract, orgContract, etchContract, signers }) {
  let totalSupply = 0;
  let totalSupplyTeam = 0;
  let totalSupplyOrg = 0;

  console.log(signers.map((el) => el.address));

  it("Get the amount of Etches minted", async () => {
    totalSupply = await etchContract.getTotalSupply();

    totalSupplyTeam = await teamContract.getNumberOfTeamsCreated();

    totalSupplyOrg = await orgContract.getNumberOfOrganisationsCreated();
  });

  describe("User Owner Etch tests", () => {
    it("Should be able to safeMint a new etch", async () => {
      await etchContract.safeMint(signers[0].address, DocName, IPFSCid);
      const owner = await etchContract.ownerOf(1 + totalSupply); // etchId = 1
      await expect(owner).to.equal(signers[0].address);
    });
  });

  describe("Team Owner Etch tests for creation and transfer (onlyowner)", () => {
    it("Should not be able to safeMint a new etch if doesn't have write access on team.", async () => {
      // Specify teamId (using 0 for now)
      await expect(etchContract.safeMintForTeam(0, DocName, IPFSCid)).to.be.reverted;
    });

    it("Should be able to create teams", async () => {
      await teamContract.createTeam(signers[0].address);
      const team = await teamContract.ownerOf(1 + totalSupplyTeam); // teamId = 1
      await expect(team).to.equal(signers[0].address);

      await teamContract.createTeam(signers[1].address);
      const team2 = await teamContract.ownerOf(2 + totalSupplyTeam); // teamId = 2
      await expect(team2).to.equal(signers[1].address);
    });

    it("Should be able to safeMint a new etch if has write access on team.", async () => {
      await etchContract.safeMintForTeam(1, DocName, IPFSCid); // for teamId = 1
      const owner = await etchContract.ownerOf(2 + totalSupply); // etchId = 2
      await expect(owner).to.equal(signers[0].address);
    });

    it("Should be able to transfer the team to another user, making the underlying Etch change ownership aswell.", async () => {
      const bOwnerOfEtch = await etchContract.ownerOf(2 + totalSupply); // etchId = 2
      const bOwnerOfTeam = await teamContract.ownerOf(1 + totalSupplyTeam); // teamId = 1
      await expect(bOwnerOfEtch).to.equal(signers[0].address);
      await expect(bOwnerOfTeam).to.equal(signers[0].address);

      // You have to pass a string, as there are two safeTransferFrom functions (one contains the data parameter)
      await teamContract["safeTransferFrom(address,address,uint256)"](
        signers[0].address,
        signers[1].address,
        1 + totalSupplyTeam
      );

      const ownerOfEtch = await etchContract.ownerOf(2 + totalSupply); // etchId = 2
      const ownerOfTeam = await teamContract.ownerOf(1 + totalSupplyTeam); // teamId = 1
      await expect(ownerOfEtch).to.equal(signers[1].address);
      await expect(ownerOfTeam).to.equal(signers[1].address);
      // State: Team 1 is Owner by Signer 1, so Etch 2 is owned by Signer 1

      await teamContract
        .connect(signers[1])
        ["safeTransferFrom(address,address,uint256)"](signers[1].address, signers[0].address, 1 + totalSupplyTeam);

      await expect(await etchContract.ownerOf(2)).to.equal(signers[0].address);
      await expect(await teamContract.ownerOf(1)).to.equal(signers[0].address);
      // State: Team 1 is Owner by Signer 0, so Etch 2 is owned by Signer 0
    });

    it("Should be able to transfer the etch to another team if it is the owner of the etch.", async () => {
      await etchContract.connect(signers[0]).transferToTeam(2 + totalSupply, 2 + totalSupplyTeam); // etchId = 2, teamId = 2
      const ownerOfEtch = await etchContract.ownerOf(2 + totalSupply); // etchId = 2
      const ownerOfTeam = await teamContract.ownerOf(2 + totalSupplyTeam); // teamId = 2
      await expect(ownerOfEtch).to.equal(signers[1].address);
      await expect(ownerOfTeam).to.equal(signers[1].address);

      // State: Team 2 is Owner by Signer 1, so Etch 2 is owned by Signer 2
    });

    it("Should not be able to transfer the etch to another team if it is not the owner of the etch.", async () => {
      await expect(etchContract.connect(signers[0]).transferToTeam(2 + totalSupply, 1 + totalSupplyTeam)).to.be.reverted; // etchId = 2, teamId = 1
    });
  });

  describe("Team Permission (Read & Write, no transfer) Etch tests", () => {
    it("Should be able to create a new Team using wallet 0", async () => {
      await teamContract.createTeam(signers[0].address);
      const team = await teamContract.ownerOf(3 + totalSupplyTeam); // teamId = 3
      await expect(team).to.equal(signers[0].address);
    });

    it("Should set Wallet 1 as read and write access for Team 3", async () => {
      await teamContract.setPermission(3 + totalSupplyTeam, signers[1].address, ETeamPermissions.READWRITE);

      const access = await teamContract.hasPermission(3 + totalSupplyTeam, signers[1].address, ETeamPermissions.READWRITE);

      await expect(access).to.equal(true);
    });

    it("Should set Wallet 2 as read access for Team 3", async () => {
      await teamContract.setPermission(3 + totalSupplyTeam, signers[2].address, ETeamPermissions.READ);

      const access = await teamContract.hasPermission(3 + totalSupplyTeam, signers[2].address, ETeamPermissions.READ);

      await expect(access).to.equal(true);
    });

    it("Both Wallet 2 and wallet 3 should not be able to set Permissions to wallet 4", async () => {
      await expect(teamContract.connect(signers[2]).setPermission(3 + totalSupplyTeam, signers[3].address, ETeamPermissions.READ))
        .to.be.reverted;

      await expect(teamContract.connect(signers[3]).setPermission(3 + totalSupplyTeam, signers[3].address, ETeamPermissions.READ))
        .to.be.reverted;
    });

    it("Wallet 1 should be able to mint a new Etch, but not Wallet 2 or 3", async () => {
      await etchContract.connect(signers[1]).safeMintForTeam(3 + totalSupplyTeam, DocName, IPFSCid);

      await expect(etchContract.connect(signers[2]).safeMintForTeam(3 + totalSupplyTeam, DocName, IPFSCid)).to.be.reverted;

      await expect(etchContract.connect(signers[3]).safeMintForTeam(3 + totalSupplyTeam, DocName, IPFSCid)).to.be.reverted;
    });

    it("Wallet 2 and Wallet 3 should not be able to transfer the Etch to another team, or another user", async () => {
      await expect(etchContract.connect(signers[2]).transferToTeam(3 + totalSupply, 2 + totalSupplyTeam)).to.be.reverted;

      await expect(etchContract.connect(signers[3]).transferToTeam(3 + totalSupply, 2 + totalSupplyTeam)).to.be.reverted;

      await expect(etchContract.connect(signers[2]).transferFrom(signers[2].address, signers[3].address, 3 + totalSupply)).to.be
        .reverted;

      await expect(etchContract.connect(signers[3]).transferFrom(signers[3].address, signers[2].address, 3 + totalSupply)).to.be
        .reverted;
    });

    it("Both Wallet 1 and Wallet 2 should be able to read the Etch", async () => {
      const etch = await etchContract.connect(signers[1]).hasReadPermission(signers[1].address, 3 + totalSupply);

      const etch2 = await etchContract.connect(signers[2]).hasReadPermission(signers[2].address, 3 + totalSupply);

      await expect(etch).to.equal(etch2).to.equal(true);
    });

    it("Wallet 3 should not be able to read the Etch", async () => {
      const etch = await etchContract.connect(signers[3]).hasReadPermission(signers[3].address, 3 + totalSupply);

      await expect(etch).to.equal(false);
    });
  });

  describe("Organisation Permission on Team", () => {
    it("Should be able to create a new Team & Etch using wallet 0", async () => {
      await expect(teamContract.ownerOf(4 + totalSupplyTeam)).to.be.reverted; // check that teamId = 4 doesn't exist yet
      await teamContract.connect(signers[0]).createTeam(signers[0].address);
      const team = await teamContract.ownerOf(4 + totalSupplyTeam); // teamId = 4
      await expect(team).to.equal(signers[0].address);

      await etchContract.connect(signers[0]).safeMintForTeam(4 + totalSupplyTeam, DocName, IPFSCid);
      const owner = await etchContract.ownerOf(4 + totalSupply); // etchId = 4
      await expect(owner).to.equal(signers[0].address);
    });

    it("Should be able to create Organisation", async () => {
      await orgContract.connect(signers[0]).createOrganisation(signers[0].address);
      const org = await orgContract.ownerOf(1 + totalSupplyOrg); // orgId = 1
      await expect(org).to.equal(signers[0].address);
    });

    it("Should be able to transfer the team to the organisation using wallet 0", async () => {
      await teamContract.connect(signers[0]).transferToOrganisation(4 + totalSupplyTeam, 1 + totalSupplyOrg); // teamId = 4, orgId = 1
      const ownerOfTeam = await teamContract.ownerOf(4 + totalSupplyTeam); // teamId = 4
      await expect(ownerOfTeam).to.equal(signers[0].address);
    });

    it("Should be able to transfer the organisation to another user, making the underlying Team and Etch change ownership aswell.", async () => {
      const bOwnerOfEtch = await etchContract.ownerOf(4 + totalSupply); // etchId = 4
      const bOwnerOfTeam = await teamContract.ownerOf(4 + totalSupplyTeam); // teamId = 4
      const bOwnerOfOrg = await orgContract.ownerOf(1 + totalSupplyOrg); // orgId = 1
      await expect(bOwnerOfEtch).to.equal(signers[0].address);
      await expect(bOwnerOfTeam).to.equal(signers[0].address);
      await expect(bOwnerOfOrg).to.equal(signers[0].address);

      // You have to pass a string, as there are two safeTransferFrom functions (one contains the data parameter)
      await orgContract["safeTransferFrom(address,address,uint256)"](signers[0].address, signers[1].address, 1 + totalSupplyOrg);

      const ownerOfEtch = await etchContract.ownerOf(4 + totalSupply); // etchId = 4
      const ownerOfTeam = await teamContract.ownerOf(4 + totalSupplyTeam); // teamId = 4
      const ownerOfOrg = await orgContract.ownerOf(1 + totalSupplyOrg); // orgId = 1
      await expect(ownerOfEtch).to.equal(signers[1].address);
      await expect(ownerOfTeam).to.equal(signers[1].address);
      await expect(ownerOfOrg).to.equal(signers[1].address);
      // State: Team 4 is Owner by Signer 1, so Etch 4 is owned by Signer 1

      await orgContract
        .connect(signers[1])
        ["safeTransferFrom(address,address,uint256)"](signers[1].address, signers[0].address, 1 + totalSupplyOrg);

      await expect(await etchContract.ownerOf(4 + totalSupply)).to.equal(signers[0].address);
      await expect(await teamContract.ownerOf(4 + totalSupplyTeam)).to.equal(signers[0].address);
      await expect(await orgContract.ownerOf(1 + totalSupplyOrg)).to.equal(signers[0].address);
      // State: Team 4 is Owner by Signer 0, so Etch 4 is owned by Signer 0
    });

    it("Set Wallet 1 as Admin access for Organisation 1", async () => {
      await orgContract.setPermission(1 + totalSupplyOrg, signers[1].address, EOrgPermissions.ADMIN);

      const access = await orgContract.isAdmin(1 + totalSupplyOrg, signers[1].address);

      await expect(access).to.equal(true);
    });

    it("Set Wallet 2 as Member access for Organisation 1 using Wallet 1", async () => {
      await orgContract.connect(signers[1]).setPermission(1 + totalSupplyOrg, signers[2].address, EOrgPermissions.MEMBER);

      const access = await orgContract.isMember(1 + totalSupplyOrg, signers[2].address);

      await expect(access).to.equal(true);
    });

    it("Wallet 2 should not be able to set Permissions to wallet 2", async () => {
      await expect(orgContract.connect(signers[2]).setPermission(1 + totalSupplyOrg, signers[2].address, EOrgPermissions.MEMBER))
        .to.be.reverted;
    });

    it("Wallet 1 (admin) should be able to set team permissions for team 4", async () => {
      await expect(await orgContract.ownerOf(1 + totalSupplyOrg)).to.equal(signers[0].address);
      await expect(await teamContract.ownerOf(4 + totalSupplyTeam)).to.equal(signers[0].address);

      await teamContract.connect(signers[1]).setPermission(4 + totalSupplyTeam, signers[1].address, ETeamPermissions.READWRITE);

      await teamContract.connect(signers[1]).setPermission(4 + totalSupplyTeam, signers[2].address, ETeamPermissions.READ);
    });

    it("Wallet 2 should not be able to set team permissions for team 4", async () => {
      await expect(
        teamContract.connect(signers[2]).setPermission(4 + totalSupplyTeam, signers[1].address, ETeamPermissions.READWRITE)
      ).to.be.reverted;
    });

    it("Wallet 2 should be able to read the Etch, since Wallet 1 (admin) set the permissions to READ, but not READWRITE", async () => {
      await expect(await etchContract.connect(signers[2]).hasReadPermission(signers[2].address, 4 + totalSupply)).to.equal(true);

      await expect(await etchContract.connect(signers[2]).hasWritePermission(signers[2].address, 4 + totalSupply)).to.equal(
        false
      );
    });
  });
}

module.exports = {
  etchMainTests,
};
