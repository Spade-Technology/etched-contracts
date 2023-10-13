import EtchABI from "@abis/Etches.json";
import { camelCaseNetwork, contracts, currentNetwork } from "@/contracts";

declare type ConditionType = "solRpc" | "evmBasic" | "evmContract" | "cosmos";
declare type Chain = string;

interface AccsRegularParams {
  conditionType: ConditionType;
  returnValueTest: {
    key?: string;
    comparator: string;
    value: string;
  };
  method?: string;
  params?: any[];
  chain: Chain;
}

interface AccsEVMParams extends AccsRegularParams {
  functionAbi: FunctionABI;
  contractAddress: string;
  functionName: string;
  functionParams: any[];
}

interface FunctionABI {
  name: string;
  type?: string;
  stateMutability: string;
  inputs: Array<ABIParams | any>;
  outputs: Array<ABIParams | any>;
  constant?: string | boolean;
  payable?: boolean;
}

interface ABIParams {
  name: string;
  type: string;
}

export const defaultAccessControlConditions = ({ etchId }: { etchId: string }): any[] => {
  return [
    {
      conditionType: "evmContract",

      contractAddress: contracts.Etch,

      functionName: "hasReadPermission",
      method: "hasReadPermission",
      functionParams: [":userAddress", etchId],
      params: [":userAddress", etchId],
      parameters: [":userAddress", etchId],
      functionAbi: EtchABI.find((abi) => abi.name === "hasReadPermission") as FunctionABI,

      chain: camelCaseNetwork,
      returnValueTest: {
        key: "",
        comparator: "=",
        value: "true",
      },
    },
  ];
};
