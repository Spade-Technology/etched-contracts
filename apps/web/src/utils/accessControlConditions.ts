import EtchABI from "@abis/Etches.json";
import { contracts, currentNetwork } from "@/contracts";

declare type ConditionType = "solRpc" | "evmBasic" | "evmContract" | "cosmos";
declare type Chain = string;

interface AccsRegularParams {
  conditionType?: ConditionType;
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

export const defaultAccessControlConditions = ({ etchId }: { etchId: string }): AccsEVMParams[] => {
  return [
    {
      contractAddress: contracts.Etch,
      functionName: "hasReadPermission",
      functionParams: [":userAddress", etchId],
      chain: currentNetwork,
      functionAbi: EtchABI.find((abi) => abi.name === "hasReadPermission") as FunctionABI,

      returnValueTest: {
        key: "",
        comparator: "==",
        value: "true",
      },
    },
  ];
};
