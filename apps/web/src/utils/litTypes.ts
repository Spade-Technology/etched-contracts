interface ABIParams {
  name: string;
  type: string;
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
type ConditionType = "solRpc" | "evmBasic" | "evmContract" | "cosmos";
interface AccsRegularParams {
  conditionType?: ConditionType;
  returnValueTest: {
    key?: string;
    comparator: string;
    value: string;
  };
  method?: string;
  params?: any[];
  chain: string;
}
interface AccsEVMParams extends AccsRegularParams {
  functionAbi: FunctionABI;
  contractAddress: string;
  functionName: string;
  functionParams: any[];
}
type EvmContractConditions = AccsEVMParams[];

interface AccsDefaultParams extends AccsRegularParams {
  contractAddress?: string;
  standardContractType?: string;
  parameters?: any;
}

type AccessControlConditions = AccsRegularParams[] | AccsDefaultParams[];

interface AuthSig {
  sig: any;
  derivedVia: string;
  signedMessage: string;
  address: string;
}
interface AccsSOLV2Params extends AccsRegularParams {
  pdaKey: string;
  pdaInterface: {
    offset: string | number;
    fields: string | object;
  };
  pdaParams: [];
}
type SolRpcConditions = AccsSOLV2Params[];

interface AccsCOSMOSParams extends AccsRegularParams {
  path: string;
  method?: string;
  parameters?: string[];
}
interface AccsOperatorParams {
  operator: string;
}
type UnifiedAccessControlConditions = (
  | AccsRegularParams
  | AccsDefaultParams
  | AccsEVMParams
  | AccsSOLV2Params
  | AccsCOSMOSParams
  | AccsOperatorParams
)[];

type AcceptedFileType = File | Blob;
interface Metadata {
  type: string;
}

export interface EncryptToIpfsProps {
  authSig?: AuthSig;
  sessionSigs?: any;
  accessControlConditions?: AccessControlConditions;
  evmContractConditions?: EvmContractConditions;
  solRpcConditions?: SolRpcConditions;
  unifiedAccessControlConditions?: UnifiedAccessControlConditions;
  chain: string;
  string?: string;
  file?: AcceptedFileType;
  infuraId?: string;
  infuraSecretKey?: string;
  metadata?: Metadata;
}

export interface decryptToIpfsProps {
  authSig?: AuthSig;
  sessionSigs?: any;
  ipfsCid: string;
}
export type SymmetricKey = Uint8Array | string | CryptoKey | BufferSource;
