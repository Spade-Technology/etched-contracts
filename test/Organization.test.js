const { expect } = require("chai");
const { ethers } = require("hardhat");
const { keccak256, signMessage, arrayify } = require("ethers/lib/utils");

describe("Organization and OrganizationFactory Contracts", function () {
  let Organization, OrganizationFactory, organization, organizationFactory, admin, user1, user2, other;
  
//   const ADMIN_ROLE = ethers.utils.soliditySha3("ADMIN_ROLE");
//   console.log("Admin Role: ", ADMIN_ROLE);
  
//   const TRANSFER_ROLE = ethers.utils.soliditySha3("TRANSFER_ROLE");
//   console.log("Transfer Role: ", TRANSFER_ROLE);

//   const DEFAULT_ADMIN_ROLE = ethers.constants.HashZero;
//   console.log("Default Admin Role: ", DEFAULT_ADMIN_ROLE);
  
  const fakeSignature = "0x";
  let signature;

  before(async function () {
    // Deploy contracts
    Organization = await ethers.getContractFactory("Organization");
    OrganizationFactory = await ethers.getContractFactory("OrganizationFactory");

    [admin, user1, user2, other] = await ethers.getSigners();
    organizationFactory = await OrganizationFactory.deploy();
    await organizationFactory.deployed();

    const tx = await organizationFactory.createOrganization(admin.address, fakeSignature, 0);
    const receipt = await tx.wait();
    const organizationAddress = receipt.events[0].args.organization;
    organization = await Organization.attach(organizationAddress);
  });

  describe("Organization Contract", function () {
    // setDefaultPermission Tests
    it("Should set default permission with role", async function () {
        await organization.setDefaultPermission(user1.address, 1, fakeSignature, 0);
        expect(await organization.defaultPermissions(user1.address)).to.equal(1);
    });
  
    // it("Should set default permission with signature", async function () {

    //     const blockNumber = await ethers.provider.getBlockNumber() + 50; // Some block number in the future
    //     const functionSelector = "setDefaultPermission";
    //     const params = ethers.utils.defaultAbiCoder.encode(
    //     ["address", "uint8"],
    //     [user1.address, 1]
    //     );

    //     const dataHash = ethers.utils.keccak256(
    //         ethers.utils.solidityPack(
    //         ["address", "uint256", "string", "bytes"],
    //         [organization.address, blockNumber, functionSelector, params]
    //     )
    //     );

    //     signature = await admin.signMessage(ethers.utils.arrayify(dataHash));


    //     await organization.setDefaultPermission(user2.address, 2, signature, blockNumber);
    //     expect(await organization.defaultPermissions(user2.address)).to.equal(2);
    // });
    
    it("Should revert setting default permission by unauthorized user", async function () {
      await expect(organization.connect(user2).setDefaultPermission(user1.address, 1, fakeSignature, 0)).to.be.revertedWith("Unauthorized");
    });

    // setPermission Tests
    it("Should set specific permission with role", async function () {
        await organization.setPermission(user1.address, 1001, 2, "0x", 0);
        expect((await organization.permissions(user1.address, 1001)).toString()).to.equal("2");
    });
  
    // it("Should set specific permission with signature", async function () {

    //     const blockNumber = await ethers.provider.getBlockNumber() + 50; // Some block number in the future
    //     const functionSelector = organization.interface.getSighash("setPermission");
    //     const params = ethers.utils.defaultAbiCoder.encode(
    //     ["address", "uint256", "uint8"],
    //     [user2.address, 1000, 3]
    //     );

    //     const dataHash = ethers.utils.keccak256(
    //         ethers.utils.solidityPack(
    //         ["address", "uint256", "string", "bytes"],
    //         [organization.address, blockNumber, functionSelector, params]
    //     )
    //     );

    //     signature = await admin.signMessage(ethers.utils.arrayify(dataHash));

    //     await organization.setPermission(user2.address, 1000, 3, signature, blockNumber);
    //     expect((await organization.permissions(user2.address, 1000)).toString()).to.equal("3");
    // });
  
    it("Should revert setting permission by unauthorized user", async function () {
        await expect(organization.connect(user2).setPermission(other.address, 1001, 2, "0x", 0)).to.be.revertedWith("Unauthorized");
    });

    it("Should get effective permission", async function () {
      expect((await organization.getEffectivePermission(user1.address, 1001)).toString()).to.equal("2");
    });

    it("Should revert transfer NFTs by unauthorized user", async function () {
      await expect(organization.connect(user2).transferNFT(other.address, user1.address, user2.address, 1001, 1, fakeSignature, 0)).to.be.revertedWith("Unauthorized");
    });

    // grantRole Tests
    it("Should grant role with role", async function () {
        await organization.grantRole(TRANSFER_ROLE, user1.address, "0x", 0);
        expect(await organization.hasRole(TRANSFER_ROLE, user1.address)).to.equal(true);
    });
  
    // it("Should grant role with signature", async function () {
    //     await organization.grantRole(TRANSFER_ROLE, user2.address, signature, 0);
    //     expect(await organization.hasRole(TRANSFER_ROLE, user2.address)).to.equal(true);
    // });
  
    it("Should revert granting role by unauthorized user", async function () {
        await expect(organization.connect(user2).grantRole(TRANSFER_ROLE, other.address, "0x", 0)).to.be.revertedWith("AccessControl: caller is not an admin");
    });
  
    // revokeRole Tests
    it("Should revoke role with role", async function () {
        await organization.revokeRole(TRANSFER_ROLE, user1.address, "0x", 0);
        expect(await organization.hasRole(TRANSFER_ROLE, user1.address)).to.equal(false);
    });
  
    // it("Should revoke role with signature", async function () {
    //     await organization.revokeRole(TRANSFER_ROLE, user2.address, signature, 0);
    //     expect(await organization.hasRole(TRANSFER_ROLE, user2.address)).to.equal(false);
    // });
  
    it("Should revert revoking role by unauthorized user", async function () {
        await expect(organization.connect(user2).revokeRole(TRANSFER_ROLE, other.address, "0x", 0)).to.be.revertedWith("AccessControl: caller is not an admin");
    });
  
  });

  describe("OrganizationFactory Contract", function () {
    it("Should create new Organization", async function () {
      const tx = await organizationFactory.createOrganization(user1.address, fakeSignature, 0);
      await expect(tx).to.emit(organizationFactory, "OrganizationCreated");
    });

    // it("Should create new Organization with signature", async function () {
    //     const tx = await organizationFactory.createOrganization(user2.address, signature, 0);
    //     await expect(tx).to.emit(organizationFactory, "OrganizationCreated");
    // });

    it("Should revert creating Organization by unauthorized user", async function () {
      await expect(organizationFactory.connect(user2).createOrganization(user1.address, fakeSignature, 0)).to.be.revertedWith("AccessControl: caller is not an admin");
    });

    it("Should get the total number of deployed Organization contracts", async function () {
      expect((await organizationFactory.getOrganizationCount()).toString()).to.equal("1");
    });

    it("Should revert getting Organization with an out-of-bounds index", async function () {
      await expect(organizationFactory.getOrganization(10)).to.be.revertedWith("Index out of bounds");
    });

    // Additional tests for roles, permissions, and other functions
  });
});
