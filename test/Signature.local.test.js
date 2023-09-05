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

async function etchSigTests({ teamContract, orgContract, etchContract, signers, ensContract }) {

  let message;
  let messageHash;
  let signature;

  describe("Testing Signatures", async () => {
  it("should be able to create a signature", async () => {
     message = encodeAbiParameters([{name: "blockNumber", type:"uint256"}, {name: "nodeAddress", type:"address"}], [100000000, signers[0].address]);
     console.log(message)
     messageHash = ethers.utils.keccak256(message);
     
     signature = await signers[0].signMessage(ethers.utils.arrayify(messageHash))
     signatyre2 = await wallet
  });

  it("should be able to send transaction to signature verified using Node (account 0)", async () => {

    const _signature = encodePacked(["bytes", "bytes32", "bytes", "address"], [message, messageHash, signature, signers[0].address]);

    const signatureData = {
      encodedMessage: message,
      messageHash: messageHash,
      signature: signature,
      signer: signers[0].address
    };

    const encodedMessage = await etchContract.checkSignature(signatureData);
    const artifact = await artifacts.readArtifact("Etches")

    const functionData = encodeFunctionData({
      abi: artifact.abi,
      functionName: 'safeMint',
      args: [signers[0].address, "", ""]
    });

    const calldata = [functionData];

    await etchContract.delegateCallsToSelf(signatureData, calldata);
  })
})

}

module.exports = {
  etchSigTests,
};
