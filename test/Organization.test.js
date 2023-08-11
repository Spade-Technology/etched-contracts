const { expect } = require("chai");
const { ethers } = require('hardhat');
const { BigNumber } = ethers;

// const { keccak256, signMessage, arrayify } = require("ethers/lib/utils");

describe("Organization and Team Tests", function () {
    let Organization, Team, organization, admin, paymaster, user1, user2, other;

    // const ADMIN_ROLE = "0xa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775";
    // // console.log("Admin Role: ", ADMIN_ROLE);

    // const TRANSFER_ROLE = "0x8502233096d909befbda0999bb8ea2f3a6be3c138b9fbf003752a4c8bce86f6c";
    // // console.log("Transfer Role: ", TRANSFER_ROLE);

    // const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";
    // // console.log("Default Admin Role: ", DEFAULT_ADMIN_ROLE);

    let signature;

    const generateSignature = async (signer, target, blocklimit = 50) => {
        let encodedParams = ethers.utils.defaultAbiCoder.encode(["address", "uint256"], [target, await ethers.provider.getBlockNumber() + blocklimit]);
        let hashedParams = ethers.utils.keccak256(encodedParams);
        const signature = await signer.signMessage(ethers.utils.arrayify(hashedParams));
        return [encodedParams, hashedParams, signature, signer.address];
    }

    before(async function () {
        // Deploy contracts
        Organization = await ethers.getContractFactory("Organization");
        Team = await ethers.getContractFactory("Team");

        [admin, paymaster, user1, user2, other] = await ethers.getSigners();

        organization = await Organization.deploy(admin.address, paymaster.address);
        await organization.deployed();
    });

    describe("Organization Contract", function () {
        it("should set correct initial roles", async () => {
            const isOwner = (await organization.owner()).toString();
            const isPaymaster = (await organization.PayMaster()).toString();
            expect(isOwner).to.equal(admin.address.toString());
            expect(isPaymaster).to.equal(paymaster.address.toString());
        });

        it("should allow admin to create a team", async () => {
            let signature = await generateSignature(admin, organization.address);
            const teamAddress = await organization.connect(paymaster).createTeam(signature);
            const teamCount = await organization.getTeamCount();
            expect(await teamCount.toString()).to.equal("1");
            // expect((await organization.getTeam("0")).toString()).to.equal(teamAddress);
        });

        it("should allow non-admin to create a team", async () => {
            let signature = await generateSignature(user1, organization.address);
            await expect(organization.connect(paymaster).createTeam(signature)).to.be.revertedWith("Caller is not the owner");
        });

        it("should allow admin to create multiple teams", async () => {
            let signature = await generateSignature(admin, organization.address);

            await organization.connect(paymaster).createTeam(signature);
            await organization.connect(paymaster).createTeam(signature);
            await organization.connect(paymaster).createTeam(signature);

            const teamCount = await organization.getTeamCount();
            expect(await teamCount.toString()).to.equal("4");
        });

        it("should allow admin to create a team from admin account", async () => {
            let signature = await generateSignature(admin, organization.address);
            const teamAddress = await organization.connect(admin).createTeam(signature);
            const teamCount = await organization.getTeamCount();
            expect(await teamCount.toString()).to.equal("5");
        });

        it("should not allow admin to create a team from non-admin account", async () => {
            let signature = await generateSignature(admin, organization.address);
            await expect(organization.connect(user1).createTeam(signature)).to.be.revertedWith("Invalid sender");
        });

        it("Deployed team should have correct initial roles", async () => {
            const teamAddress = await organization.getTeam("0");
            const team = await Team.attach(teamAddress);
            const isOwner = (await team.owner()).toString();
            const isPaymaster = (await team.PayMaster()).toString();
            const isOrganizationOwned = (await team.isOrganizationOwned()).toString();
            expect(isOwner).to.equal(organization.address.toString());
            expect(isPaymaster).to.equal(paymaster.address.toString());
            expect(isOrganizationOwned).to.equal("true");
        });

        it("Should be able to set new paymaster", async () => {
            let signature = await generateSignature(paymaster, organization.address);
            await organization.connect(paymaster).setPayMaster(signature, user1.address);
            const isPaymaster = (await organization.PayMaster()).toString();
            expect(isPaymaster).to.equal(user1.address.toString());
        });

        it("Should not be able to set new paymaster from non-paymaster account", async () => {
            let signature = await generateSignature(admin, organization.address);
            await expect(organization.connect(admin).setPayMaster(signature, user1.address)).to.be.revertedWith("Can only be called by the paymaster");
        });

        it("Organization admin should be able to set default permissions for the deployed team", async () => {
            const perm = new BigNumber.from(2); // Permission.Write
            const teamAddress = await organization.getTeam("0");
            const team = await Team.attach(teamAddress);
            let signature = await generateSignature(admin, teamAddress);
            await team.connect(paymaster).setDefaultPermission(signature, user1.address, perm);
            const newPerm = await team.defaultPermissions(user1.address);
            expect(newPerm.toString()).to.equal(perm.toString());
        });

        it("Organization non-admin should not be able to set default permissions for the deployed team", async () => {
            const perm = new BigNumber.from(2); // Permission.Write
            const teamAddress = await organization.getTeam("0");
            const team = await Team.attach(teamAddress);
            let signature = await generateSignature(user1, teamAddress);
            await expect(team.connect(paymaster).setDefaultPermission(signature, user2.address, perm)).to.be.revertedWith("Caller is not the owner");
        });

        it("Organization admin should be able to set specific permissions for the deployed team", async () => {
            const tokenId = new BigNumber.from(1000);
            const perm = new BigNumber.from(2); // Permission.Write
            const teamAddress = await organization.getTeam("0");
            const team = await Team.attach(teamAddress);
            let signature = await generateSignature(admin, teamAddress);
            await team.connect(paymaster).setPermission(signature, user1.address, tokenId, perm);
            const newPerm = await team.permissions(user1.address, tokenId);
            expect(newPerm.toString()).to.equal(perm.toString());
        });

        it("Organization non-admin should not be able to set default permissions for the deployed team", async () => {
            const tokenId = new BigNumber.from(1000);
            const perm = new BigNumber.from(2); // Permission.Write
            const teamAddress = await organization.getTeam("0");
            const team = await Team.attach(teamAddress);
            let signature = await generateSignature(user1, teamAddress);
            await expect(team.connect(paymaster).setPermission(signature, user2.address, tokenId, perm)).to.be.revertedWith("Caller is not the owner");
        });
    });

});
