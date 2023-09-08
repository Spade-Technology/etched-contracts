const { expect } = require("chai");
const { encodePacked, etherUnits, encodeFunctionData, encodeAbiParameters } = require("viem");

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
const IPFSCid = "";

// Function to generate signature for gasless operations
const generateSignature = async (signer, nodeAddress, blocklimit = 50) => {
  let message = encodeAbiParameters([{ name: "blockNumber", type: "uint256" }, { name: "nodeAddress", type: "address" }], [await ethers.provider.getBlockNumber() + blocklimit, nodeAddress]);
  let messageHash = ethers.utils.keccak256(message);
  const signature = await signer.signMessage(ethers.utils.arrayify(messageHash));
  return [message, messageHash, signature, signer.address];
}

async function etchSigTests({ teamContract, orgContract, etchContract, signers, ensContract }) {

  let signature;

  let totalSupply = 0;
  let totalSupplyTeam = 0;
  let totalSupplyOrg = 0;
  let totalSupplyENS = 0;

  describe("", async () => {

  it("Get the amount of Etches minted", async () => {
    totalSupply = parseInt(await etchContract.getTotalSupply());

    totalSupplyTeam = parseInt(await teamContract.getNumberOfTeamsCreated());

    totalSupplyOrg = parseInt(await orgContract.getNumberOfOrganisationsCreated());

    totalSupplyENS = parseInt(await ensContract.getTotalSupply());
  });
});

  describe("Signatures' transactions to etch contract", async () => {

    it("should be able to send transaction to etch contract from signature verified using Node (account 0)", async () => {

      signature = await generateSignature(signers[1], signers[0].address);
      const artifact = await artifacts.readArtifact("Etches");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'safeMint',
        args: [signers[1].address, DocName, IPFSCid]
      });

      const calldata = [functionData];
      await etchContract.delegateCallsToSelf(signature, calldata);
      const owner1 = await etchContract.ownerOf(1 + totalSupply); // etchId = 1
      await expect(owner1).to.equal(signers[1].address);
    })

    it("should be able to send mutiple transactions to etch contract from signature verified using Node (account 0)", async () => {

      signature = await generateSignature(signers[1], signers[0].address);
      const artifact = await artifacts.readArtifact("Etches");

      const functionData1 = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'safeMint',
        args: [signers[2].address, DocName, IPFSCid]
      });

      const functionData2 = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'safeMint',
        args: [signers[3].address, DocName, IPFSCid]
      });

      const calldata = [functionData1, functionData2];
      await etchContract.delegateCallsToSelf(signature, calldata);
      const owner2 = await etchContract.ownerOf(2 + totalSupply); // etchId = 2
      await expect(owner2).to.equal(signers[2].address);

      const owner3 = await etchContract.ownerOf(3 + totalSupply); // etchId = 3
      await expect(owner3).to.equal(signers[3].address);
    })

    it("should not be able to send transaction to etch contract from signature verified using Node (account 1)", async () => {
      signature = await generateSignature(signers[1], signers[1].address);
      const artifact = await artifacts.readArtifact("Etches");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'safeMint',
        args: [signers[1].address, DocName, IPFSCid]
      });

      const calldata = [functionData];
      await expect(etchContract.delegateCallsToSelf(signature, calldata)).to.be.revertedWith("NODEHANDLER: PERMISSION_DENIED");
    });

    it("should be able to send transaction to etch contract from signature verified using self", async () => {

      signature = await generateSignature(signers[1], signers[0].address);
      const artifact = await artifacts.readArtifact("Etches");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'safeMint',
        args: [signers[1].address, DocName, IPFSCid]
      });

      const calldata = [functionData];
      await etchContract.delegateCallsToSelf(signature, calldata);
      const owner1 = await etchContract.connect(signers[1]).ownerOf(4 + totalSupply); // etchId = 4
      await expect(owner1).to.equal(signers[1].address);
    })

  });

  describe("Signatures' transactions to team contract", async () => {

    it("should be able to send transaction to team contract from signature verified using Node (account 0)", async () => {

      signature = await generateSignature(signers[1], signers[0].address);
      const artifact = await artifacts.readArtifact("Teams");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createTeam',
        args: [signers[1].address]
      });


      const calldata = [functionData];
      await teamContract.delegateCallsToSelf(signature, calldata);

      const team = await teamContract.ownerOf(1 + totalSupplyTeam); // teamId = 1
      await expect(team).to.equal(signers[1].address);

    });

    it("should not be able to send transaction to team contract from signature verified using Node (account 1)", async () => {
      signature = await generateSignature(signers[1], signers[1].address);
      const artifact = await artifacts.readArtifact("Teams");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createTeam',
        args: [signers[3].address]
      });

      const calldata = [functionData];
      await expect(teamContract.delegateCallsToSelf(signature, calldata)).to.be.revertedWith("NODEHANDLER: PERMISSION_DENIED");
    });

    it("should be able to send multiple transactions to team contract from signature verified using Node (account 0)", async () => {

      signature = await generateSignature(signers[1], signers[0].address);
      const artifact = await artifacts.readArtifact("Teams");

      const functionData1 = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createTeam',
        args: [signers[2].address]
      });

      const functionData2 = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createTeam',
        args: [signers[3].address]
      });

      const calldata = [functionData1, functionData2];
      await teamContract.delegateCallsToSelf(signature, calldata);

      const team2 = await teamContract.ownerOf(2 + totalSupplyTeam); // teamId = 2
      await expect(team2).to.equal(signers[2].address);

      const team3 = await teamContract.ownerOf(3 + totalSupplyTeam); // teamId = 3
      await expect(team3).to.equal(signers[3].address);
    });

    it("should be able to send transaction to team contract from signature verified using self", async () => {

      signature = await generateSignature(signers[1], signers[0].address);
      const artifact = await artifacts.readArtifact("Teams");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createTeam',
        args: [signers[1].address]
      });


      const calldata = [functionData];
      await teamContract.delegateCallsToSelf(signature, calldata);

      const team = await teamContract.connect(signers[1]).ownerOf(4 + totalSupplyTeam); // teamId = 4
      await expect(team).to.equal(signers[1].address);

    });
  })

  describe("Node handler operations", async () => {

    it("Account 0 should be able to add a node to org contract", async () => {
      await orgContract.addNode(signers[1].address);
      const node = await orgContract.isNode(signers[1].address);
      await expect(node).to.equal(true);
    });
  });

  describe("Signatures' transactions to org contract", async () => {

    it("should be able to send transaction to org contract from signature verified using Node (account 1)", async () => {

      signature = await generateSignature(signers[2], signers[1].address);
      const artifact = await artifacts.readArtifact("Organisations");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createOrganisation',
        args: [signers[2].address]
      });


      const calldata = [functionData];
      await orgContract.connect(signers[1]).delegateCallsToSelf(signature, calldata);

      const team = await orgContract.ownerOf(1 + totalSupplyOrg); // orgId = 1
      await expect(team).to.equal(signers[2].address);

    });

    it("should not be able to send transaction to org contract from signature verified using Node (account 2)", async () => {
      signature = await generateSignature(signers[3], signers[2].address);
      const artifact = await artifacts.readArtifact("Organisations");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createOrganisation',
        args: [signers[3].address]
      });

      const calldata = [functionData];
      await expect(orgContract.delegateCallsToSelf(signature, calldata)).to.be.reverted;
    });

    it("should not be able to send transaction to org contract from signature verified using Node (account 1) from different Node (account 0)", async () => {
      signature = await generateSignature(signers[3], signers[2].address);
      const artifact = await artifacts.readArtifact("Organisations");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createOrganisation',
        args: [signers[3].address]
      });

      const calldata = [functionData];
      await expect(orgContract.connect(signers[0]).delegateCallsToSelf(signature, calldata)).to.be.reverted;
    });

    it("should be able to send multiple transactions to org contract from signature verified using Node (account 0) by setting node as zero address", async () => {

      signature = await generateSignature(signers[2], "0x0000000000000000000000000000000000000000");
      const artifact = await artifacts.readArtifact("Organisations");

      const functionData1 = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createOrganisation',
        args: [signers[2].address]
      });

      const functionData2 = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createOrganisation',
        args: [signers[3].address]
      });

      const calldata = [functionData1, functionData2];
      await orgContract.connect(signers[0]).delegateCallsToSelf(signature, calldata);

      const org2 = await orgContract.ownerOf(2 + totalSupplyOrg); // orgId = 2
      await expect(org2).to.equal(signers[2].address);

      const org3 = await orgContract.ownerOf(3 + totalSupplyOrg); // orgId = 3
      await expect(org3).to.equal(signers[3].address);
    });

    it("should be able to send transaction to org contract from signature verified using self", async () => {

      signature = await generateSignature(signers[3], "0x0000000000000000000000000000000000000000");
      const artifact = await artifacts.readArtifact("Organisations");

      const functionData = encodeFunctionData({
        abi: artifact.abi,
        functionName: 'createOrganisation',
        args: [signers[3].address]
      });


      const calldata = [functionData];
      await orgContract.delegateCallsToSelf(signature, calldata);

      const org = await orgContract.connect(signers[3]).ownerOf(4 + totalSupplyOrg); // orgId = 4
      await expect(org).to.equal(signers[3].address);

    });
  })

}

module.exports = {
  etchSigTests,
};
