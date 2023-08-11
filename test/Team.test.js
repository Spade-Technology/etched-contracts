const { expect } = require("chai");
const { ethers } = require('hardhat');
const { BigNumber } = ethers;

// const { keccak256, signMessage, arrayify } = require("ethers/lib/utils");

describe("Team and Etches Tests", function () {
    let Team, Etches, team, admin, paymaster, user1, user2, other;

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
        Team = await ethers.getContractFactory("Team");
        Etches = await ethers.getContractFactory("Etches");

        [admin, paymaster, user1, user2, other] = await ethers.getSigners();

        team = await Team.deploy(admin.address, paymaster.address, 0);
        await team.deployed();
    });

    describe("Team Contract", function () {
        it("should set correct initial roles", async () => {
            const isOwner = (await team.owner()).toString();
            const isPaymaster = (await team.PayMaster()).toString();
            const isOrganizationOwned = (await team.isOrganizationOwned()).toString();
            expect(isOwner).to.equal(admin.address.toString());
            expect(isPaymaster).to.equal(paymaster.address.toString());
            expect(isOrganizationOwned).to.equal("false");
        });

        it("Team admin should be able to set default permissions for the deployed team", async () => {
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(admin, team.address);
            await team.connect(paymaster).setDefaultPermission(signature, user1.address, perm);
            const newPerm = await team.defaultPermissions(user1.address);
            expect(newPerm.toString()).to.equal(perm.toString());
        });

        it("Team non-admin should not be able to set default permissions for the deployed team", async () => {
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(user1, team.address);
            await expect(team.connect(paymaster).setDefaultPermission(signature, user2.address, perm)).to.be.revertedWith("Caller is not the owner");
        });

        it("Team admin should be able to set specific permissions for the deployed team", async () => {
            const tokenId = new BigNumber.from(1000);
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(admin, team.address);
            await team.connect(paymaster).setPermission(signature, user1.address, tokenId, perm);
            const newPerm = await team.permissions(user1.address, tokenId);
            expect(newPerm.toString()).to.equal(perm.toString());
        });

        it("Team non-admin should not be able to set default permissions for the deployed team", async () => {
            const tokenId = new BigNumber.from(1000);
            const perm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(user1, team.address);
            await expect(team.connect(paymaster).setPermission(signature, user2.address, tokenId, perm)).to.be.revertedWith("Caller is not the owner");
        });

        it("should get correct higher effective permissions from specific permissions", async () => {
            const tokenId = new BigNumber.from(1000);
            const specificPerm = new BigNumber.from(2);
            const defaultPerm = new BigNumber.from(1); // Permission.Write
            let signature = await generateSignature(admin, team.address);
            await team.connect(paymaster).setDefaultPermission(signature, user1.address, defaultPerm);
            await team.connect(paymaster).setPermission(signature, user1.address, tokenId, specificPerm);
            const newPerm = await team.getEffectivePermission(user1.address, tokenId);
            expect(newPerm.toString()).to.equal(specificPerm.toString());
        })

        it("should get correct lower effective permissions from specific permissions", async () => {
            const tokenId = new BigNumber.from(1000);
            const specificPerm = new BigNumber.from(1);
            const defaultPerm = new BigNumber.from(2); // Permission.Write
            let signature = await generateSignature(admin, team.address);
            await team.connect(paymaster).setDefaultPermission(signature, user1.address, defaultPerm);
            await team.connect(paymaster).setPermission(signature, user1.address, tokenId, specificPerm);
            const newPerm = await team.getEffectivePermission(user1.address, tokenId);
            expect(newPerm.toString()).to.equal(specificPerm.toString());
        })

        it("Should be able to set new paymaster", async () => {
            let signature = await generateSignature(paymaster, team.address);
            await team.connect(paymaster).setPayMaster(signature, user1.address);
            const isPaymaster = (await team.PayMaster()).toString();
            expect(isPaymaster).to.equal(user1.address.toString());
        });

        it("Deployed etch should have correct initial roles", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const name = (await etch.name()).toString();
            const symbol = (await etch.symbol()).toString();
            const isOwner = (await etch.owner()).toString();
            const isPaymaster = (await etch.PayMaster()).toString();
            expect(isOwner).to.equal(team.address.toString());
            expect(isPaymaster).to.equal(paymaster.address.toString());
            expect(name).to.equal("Etches");
            expect(symbol).to.equal("ETCH");
        });

        it("Team admin should be able mint new etch for the deployed etch", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const ipfsId = "ipfs://random";
            let signature = await generateSignature(admin, etch.address);
            await etch.connect(paymaster).mint(signature, ipfsId);

            const etchCount = await etch.totalEtches();
            expect(await etchCount.toString()).to.equal("1");

            const etchIPSFId = await etch.etches(0);
            expect(await etchIPSFId.toString()).to.equal(ipfsId);
        });

        it("Etches contract can read the permisisions set by the team contract", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const tokenId = new BigNumber.from(0);
            const perm = new BigNumber.from(1); // Permission.Write
            let signature = await generateSignature(admin, team.address);
            await team.connect(admin).setPermission(signature, user1.address, tokenId, perm);

            const readPerm = await etch.canRead(user1.address, tokenId);
            expect(readPerm).to.equal(true);

            const writePerm = await etch.canWrite(user1.address, tokenId);
            expect(writePerm).to.equal(false);
        });

        it("Team non-admin should not be able burn new etch for the deployed etch", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            let signature = await generateSignature(user1, etch.address);
            await expect(etch.connect(paymaster).burn(signature, "0")).to.be.revertedWith("Caller is not the owner");
        });

        it("Team admin should be able burn etch for the deployed etch", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            let signature = await generateSignature(admin, etch.address);
            await etch.connect(paymaster).burn(signature, "0");

            // totalEtches should not change
            const etchCount = await etch.totalEtches();
            expect(await etchCount.toString()).to.equal("1");

            const etchIPSFId = await etch.etches(0);
            expect(await etchIPSFId.toString()).to.equal("");
        });

        it("Team non-admin should not be able mint new etch for the deployed etch", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const ipfsId = "ipfs://random";
            let signature = await generateSignature(user1, etch.address);
            await expect(etch.connect(paymaster).mint(signature, ipfsId)).to.be.revertedWith("Caller is not the owner");
        });


        it("Team admin should be able transfer team's etch for the deployed etch", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const ipfsId = "ipfs://random";
            let signature = await generateSignature(admin, etch.address);
            await etch.connect(paymaster).mint(signature, ipfsId);

            await etch.connect(paymaster).transferEtch(signature, user1.address, "1");

            const owner = await etch.ownerOf("1");
            expect(await owner.toString()).to.equal(user1.address.toString());

        });

        it("Team non-admin should not be able transfer team's etch for the deployed etch", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const ipfsId = "ipfs://random";
            let signature = await generateSignature(admin, etch.address);
            await etch.connect(paymaster).mint(signature, ipfsId);

            signature = await generateSignature(user1, etch.address);

            await expect(etch.connect(paymaster).transferEtch(signature, user1.address, "2")).to.be.revertedWith("Caller is not the owner");

        });

        it("Team admin should not be able transfer non-team's etch for the deployed etch", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const ipfsId = "ipfs://random";
            let signature = await generateSignature(admin, etch.address);

            await expect(etch.connect(paymaster).transferEtch(signature, user2.address, "1")).to.be.revertedWith("ERC721: transfer from incorrect owner");


        });

        it("Account with write permission should be able to write to etch for the deployed", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const tokenId = new BigNumber.from(3);
            const perm = new BigNumber.from(2); // Permission.Write
            const ipfsId = "ipfs://random";
            let signature = await generateSignature(admin, etch.address);
            await etch.connect(paymaster).mint(signature, ipfsId);

            signature = await generateSignature(admin, team.address);
            await team.connect(admin).setPermission(signature, user2.address, tokenId, perm);

            signature = await generateSignature(user2, etch.address);
            await etch.connect(paymaster).writeToEtch(signature, tokenId, "Hello World");


            // const etchContent = await etch.etches(tokenId);
            // console.log(etchContent);
            // expect(await etchContent[1][0].toString()).to.equal(user2.address.toString());
            // expect(await etchContent[1][1].toString()).to.equal("Hello World");
        })


        it("Account with read permission should be able to write to etch for the deployed", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const tokenId = new BigNumber.from(2);
            const perm = new BigNumber.from(1); // Permission.Write
            let signature = await generateSignature(admin, team.address);
            await team.connect(admin).setPermission(signature, user1.address, tokenId, perm);

            signature = await generateSignature(user1, etch.address);
            await expect(etch.connect(paymaster).writeToEtch(signature, tokenId, "Hello World")).to.be.revertedWith("Caller does not have write permission");


            // const etchContent = await etch.etches(tokenId);
            // console.log(etchContent);
            // expect(await etchContent[1][0].toString()).to.equal(user2.address.toString());
            // expect(await etchContent[1][1].toString()).to.equal("Hello World");
        })

        it("Owner of a particular etch should be able to write to etch for the deployed etch", async () => {
            const etchAddress = await team.etch();
            const etch = await Etches.attach(etchAddress);
            const tokenId = new BigNumber.from(1);

            let signature = await generateSignature(user1, etch.address);
            await etch.connect(paymaster).writeToEtch(signature, tokenId, "Hello World");
        });


    });

});
