const { expect } = require("chai");
const { ethers } = require('hardhat');
const { BigNumber } = ethers;

// const { keccak256, signMessage, arrayify } = require("ethers/lib/utils");

describe("Organization and OrganizationFactory Contracts", function () {
    let Organization, organization, admin, paymaster, user1, user2, other;

    const ADMIN_ROLE = "0xa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775";
    // console.log("Admin Role: ", ADMIN_ROLE);

    const TRANSFER_ROLE = "0x8502233096d909befbda0999bb8ea2f3a6be3c138b9fbf003752a4c8bce86f6c";
    // console.log("Transfer Role: ", TRANSFER_ROLE);

    const DEFAULT_ADMIN_ROLE = "0x0000000000000000000000000000000000000000000000000000000000000000";
    // console.log("Default Admin Role: ", DEFAULT_ADMIN_ROLE);

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

        [admin, paymaster, user1, user2, other] = await ethers.getSigners();        

        organization = await Organization.deploy(paymaster.address, admin.address);
        await organization.deployed();
    });

    describe("Organization Contract", function () {
        it("should set correct initial roles", async () => {
            const isAdmin = await organization.hasRole(ADMIN_ROLE, admin.address);
            const isDefaultAdmin = await organization.hasRole(DEFAULT_ADMIN_ROLE, admin.address);
            const isTransferRole = await organization.hasRole(TRANSFER_ROLE, admin.address);
            const isPaymaster = (await organization.PayMaster()).toString();
            expect(isAdmin).to.be.true;
            expect(isDefaultAdmin).to.be.true;
            expect(isTransferRole).to.be.true;
            expect(isPaymaster).to.equal(paymaster.address.toString());
        });

        it("should allow default admin to add new admin", async () => {
            let signature = await generateSignature(admin, organization.address);
            await organization.connect(paymaster).grantRole(signature, ADMIN_ROLE, user1.address);
            const isAdmin = await organization.hasRole(await organization.ADMIN_ROLE(), user1.address);
            expect(isAdmin).to.be.true;
        });

        it("should not allow non-admin to add new admin", async () => {
            let signature = await generateSignature(user1, organization.address);
            await expect(organization.connect(paymaster).grantRole(signature, ADMIN_ROLE, user2.address)).to.be.revertedWith("Unauthorized");
        });

        it("should allow the admin to set default permissions", async () => {
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(admin, organization.address);
            await organization.setDefaultPermission(signature, user1.address, perm);
            const newPerm = await organization.connect(admin).defaultPermissions(user1.address);
            expect(newPerm.toString()).to.equal(perm.toString());
        });

        it("should not allow non-admin to set default permissions", async () => {
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(user1, organization.address);
            await expect(organization.connect(user1).setDefaultPermission(signature, user2.address, perm)).to.be.revertedWith("Unauthorized");
        });

        it("should not allow third person to call contract to set default permissions", async () => {
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(admin, organization.address);
            await expect(organization.connect(user2).setDefaultPermission(signature, user2.address, perm)).to.be.revertedWith("Invalid sender");
        });

        it("should allow the admin to set default permissions from paymaster", async () => {
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(admin, organization.address);
            await organization.connect(paymaster).setDefaultPermission(signature, user2.address, perm);
            const newPerm = await organization.defaultPermissions(user2.address);
            expect(newPerm.toString()).to.equal(perm.toString());
        });

        it("should allow the admin to set specific permissions", async () => {
            const tokenId = new BigNumber.from(1000);
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(admin, organization.address);
            await organization.connect(paymaster).setPermission(signature, user1.address, tokenId, perm);
            const newPerm = await organization.permissions(user1.address, tokenId);
            expect(newPerm.toString()).to.equal(perm.toString());
        });

        it("should not allow non-admin to set specific permissions", async () => {
            const tokenId = new BigNumber.from(1000);
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(user1, organization.address);
            await expect(organization.connect(paymaster).setPermission(signature, user1.address, tokenId, perm)).to.be.revertedWith("Unauthorized");
        });

        it("should allow secondary-admin to set specific permissions", async () => {
            let signature = await generateSignature(admin, organization.address);
            await organization.connect(paymaster).grantRole(signature, ADMIN_ROLE, user1.address);
            const isAdmin = await organization.hasRole(await organization.ADMIN_ROLE(), user1.address);
            expect(isAdmin).to.be.true;

            const tokenId = new BigNumber.from(1000);
            const perm = new BigNumber.from(2); // Permission.Write
            signature = await generateSignature(user1, organization.address);
            await organization.connect(paymaster).setPermission(signature, user2.address, tokenId, perm);
            const newPerm = await organization.permissions(user2.address, tokenId);
            expect(newPerm.toString()).to.equal(perm.toString());
        });

        it("should get correct effective permissions from default permissions", async () => {
            const tokenId = new BigNumber.from(1000);
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(admin, organization.address);
            await organization.connect(paymaster).setDefaultPermission(signature, user2.address, perm);
            const newPerm = await organization.getEffectivePermission(user1.address, tokenId);
            expect(newPerm.toString()).to.equal(perm.toString());
        })

        it("should get correct higher effective permissions from specific permissions", async () => {
            const tokenId = new BigNumber.from(1000);
            const specificPerm = new BigNumber.from(2);
            const defaultPerm = new BigNumber.from(1); // Permission.Write
            let signature = await generateSignature(admin, organization.address);
            await organization.connect(paymaster).setDefaultPermission(signature, user1.address, defaultPerm);
            await organization.connect(paymaster).setPermission(signature, user1.address, tokenId, specificPerm);
            const newPerm = await organization.getEffectivePermission(user1.address, tokenId);
            expect(newPerm.toString()).to.equal(specificPerm.toString());
        })

        it("should get correct lower effective permissions from specific permissions", async () => {
            const tokenId = new BigNumber.from(1000);
            const specificPerm = new BigNumber.from(1);
            const defaultPerm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(admin, organization.address);
            await organization.connect(paymaster).setDefaultPermission(signature, user1.address, defaultPerm);
            await organization.connect(paymaster).setPermission(signature, user1.address, tokenId, specificPerm);
            const newPerm = await organization.getEffectivePermission(user1.address, tokenId);
            expect(newPerm.toString()).to.equal(specificPerm.toString());
        })
    });

});
