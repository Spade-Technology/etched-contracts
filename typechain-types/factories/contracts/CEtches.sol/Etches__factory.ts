/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Etches,
  EtchesInterface,
} from "../../../contracts/CEtches.sol/Etches";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "teamsContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "EtchCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "node",
        type: "address",
      },
    ],
    name: "_nodes",
    outputs: [
      {
        internalType: "bool",
        name: "isNode",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "node",
        type: "address",
      },
    ],
    name: "addNode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "commentIpfsCid",
        type: "string",
      },
    ],
    name: "commentOnEtch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_calldata",
        type: "bytes[]",
      },
    ],
    name: "delegateCallsToSelf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getParent",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "hasReadPermission",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "hasWritePermission",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "etch",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "individualPermissionsOf",
    outputs: [
      {
        internalType: "enum ITeams.EPermissions",
        name: "permission",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "node",
        type: "address",
      },
    ],
    name: "isNode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "etch",
        type: "uint256",
      },
    ],
    name: "metadataOf",
    outputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "string",
        name: "documentName",
        type: "string",
      },
      {
        internalType: "string",
        name: "ipfsCid",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "commentsCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "documentName",
        type: "string",
      },
      {
        internalType: "string",
        name: "ipfsCid",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "teamId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "documentName",
        type: "string",
      },
      {
        internalType: "string",
        name: "ipfsCid",
        type: "string",
      },
    ],
    name: "safeMintForTeam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "enum ITeams.EPermissions",
        name: "permission",
        type: "uint8",
      },
    ],
    name: "setIndividualPermissions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "etch",
        type: "uint256",
      },
    ],
    name: "teamOf",
    outputs: [
      {
        internalType: "uint256",
        name: "team",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "teams",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "teamId",
        type: "uint256",
      },
    ],
    name: "transferToTeam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200298038038062002980833981016040819052620000349162000139565b806040518060400160405280600681526020016545746368657360d01b8152506040518060400160405280600481526020016308aa886960e31b815250816000908162000082919062000210565b50600162000091828262000210565b505050620000ae620000a8620000e360201b60201c565b620000e7565b600780546001600160a01b039283166001600160a01b031991821617909155600a8054939092169216919091179055620002dc565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6000602082840312156200014c57600080fd5b81516001600160a01b03811681146200016457600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200019657607f821691505b602082108103620001b757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200020b57600081815260208120601f850160051c81016020861015620001e65750805b601f850160051c820191505b818110156200020757828155600101620001f2565b5050505b505050565b81516001600160401b038111156200022c576200022c6200016b565b62000244816200023d845462000181565b84620001bd565b602080601f8311600181146200027c5760008415620002635750858301515b600019600386901b1c1916600185901b17855562000207565b600085815260208120601f198616915b82811015620002ad578886015182559484019460019091019084016200028c565b5085821015620002cc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61269480620002ec6000396000f3fe608060405234801561001057600080fd5b50600436106101f05760003560e01c806380f760211161010f578063b88d4fde116100a2578063eca81d4211610071578063eca81d42146104a0578063f21e7d74146104b3578063f2fde38b146104c6578063fbc3a097146104d957600080fd5b8063b88d4fde1461042b578063c87b56dd1461043e578063ce0895e114610451578063e985e9c51461046457600080fd5b80639d079cd5116100de5780639d079cd5146103b75780639d95f1cc146103ca578063a22cb465146103dd578063aaed1bee146103f057600080fd5b806380f760211461036a57806381fb5d4b1461037b5780638da5cb5b1461039e57806395d89b41146103af57600080fd5b806323b872dd116101875780635cc5b4da116101565780635cc5b4da1461031b5780636352211e1461032e57806370a0823114610341578063715018a61461036257600080fd5b806323b872dd146102cf57806338982096146102e25780633d8386d4146102f557806342842e0e1461030857600080fd5b806306fdde03116101c357806306fdde0314610270578063081812fc14610285578063095ea7b3146102985780630ef7cc8e146102ab57600080fd5b806301750152146101f557806301ffc9a71461021d5780630397fde01461023057806303de3ad714610245575b600080fd5b610208610203366004611cd0565b6104f9565b60405190151581526020015b60405180910390f35b61020861022b366004611d03565b610597565b61024361023e366004611dbf565b6105e7565b005b600a54610258906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b6102786106b3565b6040516102149190611e6a565b610258610293366004611e7d565b610745565b6102436102a6366004611e96565b61076c565b6102be6102b9366004611e7d565b610881565b604051610214959493929190611ec2565b6102436102dd366004611f0d565b6109ca565b6102436102f0366004611f6e565b6109fb565b610243610303366004612031565b610b0f565b610243610316366004611f0d565b610bd3565b610208610329366004611e96565b610bee565b61025861033c366004611e7d565b610cf8565b61035461034f366004611cd0565b610d57565b604051908152602001610214565b610243610ddd565b6007546001600160a01b0316610258565b610208610389366004611cd0565b60086020526000908152604090205460ff1681565b6006546001600160a01b0316610258565b610278610df1565b6102086103c5366004611e96565b610e00565b6102436103d8366004611cd0565b610ec2565b6102436103eb366004612085565b610eee565b61041e6103fe3660046120be565b600c60209081526000928352604080842090915290825290205460ff1681565b604051610214919061211b565b610243610439366004612129565b610ef9565b61027861044c366004611e7d565b610f31565b61024361045f3660046121de565b610fa4565b610208610472366004612258565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6102436104ae366004612286565b6110cf565b6102436104c13660046122c6565b611238565b6102436104d4366004611cd0565b61131d565b6103546104e7366004611e7d565b600b6020526000908152604090205481565b6007546000906001600160a01b031661057f5760075460405162ba80a960e11b81526001600160a01b03848116600483015290911690630175015290602401602060405180830381865afa158015610555573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057991906122e8565b92915050565b50503360009081526008602052604090205460ff1690565b60006001600160e01b031982166380ac58cd60e01b14806105c857506001600160e01b03198216635b5e139f60e01b145b8061057957506301ffc9a760e01b6001600160e01b0319831614610579565b6105f13383610e00565b61064e5760405162461bcd60e51b815260206004820152602360248201527f455443483a204e6f7420616c6c6f77656420746f2072656164207468697320456044820152620e8c6d60eb1b60648201526084015b60405180910390fd5b604080518082018252828152426020808301919091526000858152600e9091529190912081518190610680908261237f565b506020918201516001909101556000838152600d909152604081206003018054916106aa8361243f565b91905055505050565b6060600080546106c290612305565b80601f01602080910402602001604051908101604052809291908181526020018280546106ee90612305565b801561073b5780601f106107105761010080835404028352916020019161073b565b820191906000526020600020905b81548152906001019060200180831161071e57829003601f168201915b5050505050905090565b600061075082611396565b506000908152600460205260409020546001600160a01b031690565b600061077782610cf8565b9050806001600160a01b0316836001600160a01b0316036107e45760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610645565b336001600160a01b038216148061080057506108008133610472565b6108725760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610645565b61087c83836113e6565b505050565b600d60205260009081526040902080546001820180546001600160a01b0390921692916108ad90612305565b80601f01602080910402602001604051908101604052809291908181526020018280546108d990612305565b80156109265780601f106108fb57610100808354040283529160200191610926565b820191906000526020600020905b81548152906001019060200180831161090957829003601f168201915b50505050509080600201805461093b90612305565b80601f016020809104026020016040519081016040528092919081815260200182805461096790612305565b80156109b45780601f10610989576101008083540402835291602001916109b4565b820191906000526020600020905b81548152906001019060200180831161099757829003601f168201915b5050505050908060030154908060040154905085565b6109d43382611454565b6109f05760405162461bcd60e51b815260040161064590612466565b61087c8383836114d3565b610a04336104f9565b610a505760405162461bcd60e51b815260206004820152601e60248201527f4e4f444548414e444c45523a205045524d495353494f4e5f44454e49454400006044820152606401610645565b60005b8151811015610b0b57600080306001600160a01b0316848481518110610a7b57610a7b6124b3565b6020026020010151604051610a9091906124c9565b600060405180830381855af49150503d8060008114610acb576040519150601f19603f3d011682016040523d82523d6000602084013e610ad0565b606091505b5091509150818190610af55760405162461bcd60e51b81526004016106459190611e6a565b5050508080610b039061243f565b915050610a53565b5050565b33610b1984610cf8565b6001600160a01b031614610b8a5760405162461bcd60e51b815260206004820152603260248201527f455443483a204e6f7420616c6c6f77656420746f20736574207065726d6973736044820152710d2dedce640ccdee440e8d0d2e6408ae8c6d60731b6064820152608401610645565b6000838152600c602090815260408083206001600160a01b03861684529091529020805482919060ff19166001836002811115610bc957610bc96120e3565b0217905550505050565b61087c83838360405180602001604052806000815250610ef9565b6000610bf982610cf8565b6001600160a01b0316836001600160a01b03161480610c4f575060016000838152600c602090815260408083206001600160a01b038816845290915290205460ff166002811115610c4c57610c4c6120e3565b10155b80610cf157506000828152600b602052604090205415801590610cf15750600a546000838152600b60205260409081902054905163823abfd960e01b81526001600160a01b039092169163823abfd991610cb09187906001906004016124e5565b602060405180830381865afa158015610ccd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf191906122e8565b9392505050565b600080610d0483611637565b90506001600160a01b0381166105795760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610645565b60006001600160a01b038216610dc15760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610645565b506001600160a01b031660009081526003602052604090205490565b610de56116e5565b610def600061173f565b565b6060600180546106c290612305565b6000610e0b82610cf8565b6001600160a01b0316836001600160a01b03161480610e61575060026000838152600c602090815260408083206001600160a01b038816845290915290205460ff166002811115610e5e57610e5e6120e3565b10155b80610cf157506000828152600b602052604090205415801590610cf15750600a546000838152600b60205260409081902054905163823abfd960e01b81526001600160a01b039092169163823abfd991610cb09187906002906004016124e5565b610eca6116e5565b6001600160a01b03166000908152600860205260409020805460ff19166001179055565b610b0b338383611791565b610f033383611454565b610f1f5760405162461bcd60e51b815260040161064590612466565b610f2b8484848461185f565b50505050565b6060610f3c82611396565b6000610f5360408051602081019091526000815290565b90506000815111610f735760405180602001604052806000815250610cf1565b80610f7d84611892565b604051602001610f8e929190612508565b6040516020818303038152906040529392505050565b610fb2600980546001019055565b6000610fbd60095490565b600a5460405163823abfd960e01b81529192506001600160a01b03169063823abfd990610ff390899033906002906004016124e5565b602060405180830381865afa158015611010573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103491906122e8565b6110905760405162461bcd60e51b815260206004820152602760248201527f455443483a204e6f7420616c6c6f77656420746f206d696e7420666f722074686044820152666973207465616d60c81b6064820152608401610645565b6000818152600b60209081526040808320899055600a5481519283019091529181526110c7916001600160a01b0316908390611925565b505050505050565b6110dd600980546001019055565b60006110e860095490565b9050611104868260405180602001604052806000815250611925565b6040518060a00160405280336001600160a01b0316815260200186868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f8701819004810282018101909252858152918101919086908690819084018382808284376000920182905250938552505050602080830182905242604093840152848252600d8152919020825181546001600160a01b0319166001600160a01b039091161781559082015160018201906111d9908261237f565b50604082015160028201906111ee908261237f565b506060820151600382015560809091015160049091015560405181907f1c993dbb5c4ecaec374d0b51eb95a70ccdf859dd75dee68a4b7f24ea1fb59ba690600090a2505050505050565b600a54604080516325d92e6560e11b8152905183926001600160a01b031691634bb25cca9160048083019260209291908290030181865afa158015611281573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a59190612537565b10156112f35760405162461bcd60e51b815260206004820152601960248201527f455443483a205465616d20646f6573206e6f74206578697374000000000000006044820152606401610645565b600a5461130b9033906001600160a01b0316846114d3565b6000918252600b602052604090912055565b6113256116e5565b6001600160a01b03811661138a5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610645565b6113938161173f565b50565b61139f81611958565b6113935760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610645565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061141b82610cf8565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061146083610cf8565b9050806001600160a01b0316846001600160a01b031614806114a757506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806114cb5750836001600160a01b03166114c084610745565b6001600160a01b0316145b949350505050565b826001600160a01b03166114e682610cf8565b6001600160a01b03161461150c5760405162461bcd60e51b815260040161064590612550565b6001600160a01b03821661156e5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610645565b826001600160a01b031661158182610cf8565b6001600160a01b0316146115a75760405162461bcd60e51b815260040161064590612550565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600081815260026020526040812054600a546001600160a01b039182169116810361057957600a546000848152600b6020526040908190205490516331a9108f60e11b81526001600160a01b0390921691636352211e9161169e9160040190815260200190565b602060405180830381865afa1580156116bb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf19190612595565b50919050565b6006546001600160a01b03163314610def5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610645565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b0316036117f25760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610645565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61186a8484846114d3565b61187684848484611975565b610f2b5760405162461bcd60e51b8152600401610645906125b2565b6060600061189f83611a76565b600101905060008167ffffffffffffffff8111156118bf576118bf611d20565b6040519080825280601f01601f1916602001820160405280156118e9576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846118f357509392505050565b61192f8383611b4e565b61193c6000848484611975565b61087c5760405162461bcd60e51b8152600401610645906125b2565b60008061196483611637565b6001600160a01b0316141592915050565b60006001600160a01b0384163b15611a6b57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906119b9903390899088908890600401612604565b6020604051808303816000875af19250505080156119f4575060408051601f3d908101601f191682019092526119f191810190612641565b60015b611a51573d808015611a22576040519150601f19603f3d011682016040523d82523d6000602084013e611a27565b606091505b508051600003611a495760405162461bcd60e51b8152600401610645906125b2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506114cb565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310611ab55772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310611ae1576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310611aff57662386f26fc10000830492506010015b6305f5e1008310611b17576305f5e100830492506008015b6127108310611b2b57612710830492506004015b60648310611b3d576064830492506002015b600a83106105795760010192915050565b6001600160a01b038216611ba45760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610645565b611bad81611958565b15611bfa5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610645565b611c0381611958565b15611c505760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610645565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6001600160a01b038116811461139357600080fd5b600060208284031215611ce257600080fd5b8135610cf181611cbb565b6001600160e01b03198116811461139357600080fd5b600060208284031215611d1557600080fd5b8135610cf181611ced565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611d5f57611d5f611d20565b604052919050565b600067ffffffffffffffff831115611d8157611d81611d20565b611d94601f8401601f1916602001611d36565b9050828152838383011115611da857600080fd5b828260208301376000602084830101529392505050565b60008060408385031215611dd257600080fd5b82359150602083013567ffffffffffffffff811115611df057600080fd5b8301601f81018513611e0157600080fd5b611e1085823560208401611d67565b9150509250929050565b60005b83811015611e35578181015183820152602001611e1d565b50506000910152565b60008151808452611e56816020860160208601611e1a565b601f01601f19169290920160200192915050565b602081526000610cf16020830184611e3e565b600060208284031215611e8f57600080fd5b5035919050565b60008060408385031215611ea957600080fd5b8235611eb481611cbb565b946020939093013593505050565b6001600160a01b038616815260a060208201819052600090611ee690830187611e3e565b8281036040840152611ef88187611e3e565b60608401959095525050608001529392505050565b600080600060608486031215611f2257600080fd5b8335611f2d81611cbb565b92506020840135611f3d81611cbb565b929592945050506040919091013590565b600082601f830112611f5f57600080fd5b610cf183833560208501611d67565b60006020808385031215611f8157600080fd5b823567ffffffffffffffff80821115611f9957600080fd5b818501915085601f830112611fad57600080fd5b813581811115611fbf57611fbf611d20565b8060051b611fce858201611d36565b9182528381018501918581019089841115611fe857600080fd5b86860192505b83831015612024578235858111156120065760008081fd5b6120148b89838a0101611f4e565b8352509186019190860190611fee565b9998505050505050505050565b60008060006060848603121561204657600080fd5b83359250602084013561205881611cbb565b915060408401356003811061206c57600080fd5b809150509250925092565b801515811461139357600080fd5b6000806040838503121561209857600080fd5b82356120a381611cbb565b915060208301356120b381612077565b809150509250929050565b600080604083850312156120d157600080fd5b8235915060208301356120b381611cbb565b634e487b7160e01b600052602160045260246000fd5b6003811061211757634e487b7160e01b600052602160045260246000fd5b9052565b6020810161057982846120f9565b6000806000806080858703121561213f57600080fd5b843561214a81611cbb565b9350602085013561215a81611cbb565b925060408501359150606085013567ffffffffffffffff81111561217d57600080fd5b61218987828801611f4e565b91505092959194509250565b60008083601f8401126121a757600080fd5b50813567ffffffffffffffff8111156121bf57600080fd5b6020830191508360208285010111156121d757600080fd5b9250929050565b6000806000806000606086880312156121f657600080fd5b85359450602086013567ffffffffffffffff8082111561221557600080fd5b61222189838a01612195565b9096509450604088013591508082111561223a57600080fd5b5061224788828901612195565b969995985093965092949392505050565b6000806040838503121561226b57600080fd5b823561227681611cbb565b915060208301356120b381611cbb565b60008060008060006060868803121561229e57600080fd5b85356122a981611cbb565b9450602086013567ffffffffffffffff8082111561221557600080fd5b600080604083850312156122d957600080fd5b50508035926020909101359150565b6000602082840312156122fa57600080fd5b8151610cf181612077565b600181811c9082168061231957607f821691505b6020821081036116df57634e487b7160e01b600052602260045260246000fd5b601f82111561087c57600081815260208120601f850160051c810160208610156123605750805b601f850160051c820191505b818110156110c75782815560010161236c565b815167ffffffffffffffff81111561239957612399611d20565b6123ad816123a78454612305565b84612339565b602080601f8311600181146123e257600084156123ca5750858301515b600019600386901b1c1916600185901b1785556110c7565b600085815260208120601f198616915b82811015612411578886015182559484019460019091019084016123f2565b508582101561242f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006001820161245f57634e487b7160e01b600052601160045260246000fd5b5060010190565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600082516124db818460208701611e1a565b9190910192915050565b8381526001600160a01b0383166020820152606081016114cb60408301846120f9565b6000835161251a818460208801611e1a565b83519083019061252e818360208801611e1a565b01949350505050565b60006020828403121561254957600080fd5b5051919050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b6000602082840312156125a757600080fd5b8151610cf181611cbb565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061263790830184611e3e565b9695505050505050565b60006020828403121561265357600080fd5b8151610cf181611ced56fea26469706673582212202957681ed3c4e415430c8906026dc9d8f952eebea1d888f0ae1ebb9c8bfa5da464736f6c63430008130033";

type EtchesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EtchesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Etches__factory extends ContractFactory {
  constructor(...args: EtchesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    teamsContract: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(teamsContract, overrides || {});
  }
  override deploy(
    teamsContract: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(teamsContract, overrides || {}) as Promise<
      Etches & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Etches__factory {
    return super.connect(runner) as Etches__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EtchesInterface {
    return new Interface(_abi) as EtchesInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Etches {
    return new Contract(address, _abi, runner) as unknown as Etches;
  }
}
