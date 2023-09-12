export const SEAPORT_ABI = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "considerationToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "considerationIdentifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "considerationAmount",
            type: "uint256",
          },
          { internalType: "address payable", name: "offerer", type: "address" },
          { internalType: "address", name: "zone", type: "address" },
          { internalType: "address", name: "offerToken", type: "address" },
          { internalType: "uint256", name: "offerIdentifier", type: "uint256" },
          { internalType: "uint256", name: "offerAmount", type: "uint256" },
          {
            internalType: "enum BasicOrderType",
            name: "basicOrderType",
            type: "uint8",
          },
          { internalType: "uint256", name: "startTime", type: "uint256" },
          { internalType: "uint256", name: "endTime", type: "uint256" },
          { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
          { internalType: "uint256", name: "salt", type: "uint256" },
          {
            internalType: "bytes32",
            name: "offererConduitKey",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "fulfillerConduitKey",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "totalOriginalAdditionalRecipients",
            type: "uint256",
          },
          {
            components: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct AdditionalRecipient[]",
            name: "additionalRecipients",
            type: "tuple[]",
          },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        internalType: "struct BasicOrderParameters",
        name: "parameters",
        type: "tuple",
      },
    ],
    name: "fulfillBasicOrder",
    outputs: [{ internalType: "bool", name: "fulfilled", type: "bool" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "considerationToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "considerationIdentifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "considerationAmount",
            type: "uint256",
          },
          { internalType: "address payable", name: "offerer", type: "address" },
          { internalType: "address", name: "zone", type: "address" },
          { internalType: "address", name: "offerToken", type: "address" },
          { internalType: "uint256", name: "offerIdentifier", type: "uint256" },
          { internalType: "uint256", name: "offerAmount", type: "uint256" },
          {
            internalType: "enum BasicOrderType",
            name: "basicOrderType",
            type: "uint8",
          },
          { internalType: "uint256", name: "startTime", type: "uint256" },
          { internalType: "uint256", name: "endTime", type: "uint256" },
          { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
          { internalType: "uint256", name: "salt", type: "uint256" },
          {
            internalType: "bytes32",
            name: "offererConduitKey",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "fulfillerConduitKey",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "totalOriginalAdditionalRecipients",
            type: "uint256",
          },
          {
            components: [
              { internalType: "uint256", name: "amount", type: "uint256" },
              {
                internalType: "address payable",
                name: "recipient",
                type: "address",
              },
            ],
            internalType: "struct AdditionalRecipient[]",
            name: "additionalRecipients",
            type: "tuple[]",
          },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        internalType: "struct BasicOrderParameters",
        name: "parameters",
        type: "tuple",
      },
    ],
    name: "fulfillBasicOrder_efficient_6GL6yc",
    outputs: [{ internalType: "bool", name: "fulfilled", type: "bool" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: "address", name: "offerer", type: "address" },
              { internalType: "address", name: "zone", type: "address" },
              {
                components: [
                  {
                    internalType: "enum ItemType",
                    name: "itemType",
                    type: "uint8",
                  },
                  { internalType: "address", name: "token", type: "address" },
                  {
                    internalType: "uint256",
                    name: "identifierOrCriteria",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "endAmount",
                    type: "uint256",
                  },
                ],
                internalType: "struct OfferItem[]",
                name: "offer",
                type: "tuple[]",
              },
              {
                components: [
                  {
                    internalType: "enum ItemType",
                    name: "itemType",
                    type: "uint8",
                  },
                  { internalType: "address", name: "token", type: "address" },
                  {
                    internalType: "uint256",
                    name: "identifierOrCriteria",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "startAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "endAmount",
                    type: "uint256",
                  },
                  {
                    internalType: "address payable",
                    name: "recipient",
                    type: "address",
                  },
                ],
                internalType: "struct ConsiderationItem[]",
                name: "consideration",
                type: "tuple[]",
              },
              {
                internalType: "enum OrderType",
                name: "orderType",
                type: "uint8",
              },
              { internalType: "uint256", name: "startTime", type: "uint256" },
              { internalType: "uint256", name: "endTime", type: "uint256" },
              { internalType: "bytes32", name: "zoneHash", type: "bytes32" },
              { internalType: "uint256", name: "salt", type: "uint256" },
              { internalType: "bytes32", name: "conduitKey", type: "bytes32" },
              {
                internalType: "uint256",
                name: "totalOriginalConsiderationItems",
                type: "uint256",
              },
            ],
            internalType: "struct OrderParameters",
            name: "parameters",
            type: "tuple",
          },
          { internalType: "bytes", name: "signature", type: "bytes" },
        ],
        internalType: "struct Order",
        name: "",
        type: "tuple",
      },
      { internalType: "bytes32", name: "fulfillerConduitKey", type: "bytes32" },
    ],
    name: "fulfillOrder",
    outputs: [{ internalType: "bool", name: "fulfilled", type: "bool" }],
    stateMutability: "payable",
    type: "function",
  },
];

export default SEAPORT_ABI;
