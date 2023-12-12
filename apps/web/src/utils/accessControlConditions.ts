import { camelCaseNetwork, contracts } from "@/contracts";
import EtchABI from "@abis/Etches.json";

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

export const defaultAccessControlConditionsUsingReadableID = ({ etchId }: { etchId: string }): any[] => {
  const fn = "hasReadPermission";
  return [
    {
      conditionType: "evmContract",

      contractAddress: contracts.Etch,

      functionName: fn,
      method: fn,
      functionParams: [":userAddress", etchId],
      params: [":userAddress", etchId],
      parameters: [":userAddress", etchId],
      functionAbi: EtchABI.find((abi) => abi.name === fn) as FunctionABI,

      chain: camelCaseNetwork,
      returnValueTest: {
        key: "",
        comparator: "=",
        value: "true",
      },
    },
  ];
};

export const defaultAccessControlConditions = ({ etchUID }: { etchUID: string }): any[] => {
  const fn = "hasReadPermissionUID";
  return [
    {
      conditionType: "evmContract",

      contractAddress: contracts.Etch,

      functionName: fn,
      method: fn,
      functionParams: [":userAddress", etchUID],
      params: [":userAddress", etchUID],
      parameters: [":userAddress", etchUID],
      functionAbi: EtchABI.find((abi) => abi.name === fn) as FunctionABI,

      chain: camelCaseNetwork,
      returnValueTest: {
        key: "",
        comparator: "=",
        value: "true",
      },
    },
  ];
};
