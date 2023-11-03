/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: any; output: any };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any };
};

export type BlockChangedFilter = {
  number_gte: Scalars["Int"]["input"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_gte?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Etch = {
  __typename?: "Etch";
  approvals?: Maybe<Array<EtchApproval>>;
  comments?: Maybe<Array<EtchCommentAdded>>;
  createdAt?: Scalars["BigInt"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  documentName?: Scalars["String"]["output"];
  id?: Scalars["ID"]["output"];
  ipfsCid?: Scalars["String"]["output"];
  ownership?: EtchOwnership;
  permissions?: Maybe<Array<EtchPermission>>;
  tokenId?: Scalars["BigInt"]["output"];
  transfers?: Maybe<Array<EtchTransfer>>;
};

export type EtchApprovalsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EtchApproval_Filter>;
};

export type EtchCommentsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchCommentAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EtchCommentAdded_Filter>;
};

export type EtchPermissionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EtchPermission_Filter>;
};

export type EtchTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EtchTransfer_Filter>;
};

export type EtchApproval = {
  __typename?: "EtchApproval";
  approved: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  etch: Etch;
  id: Scalars["Bytes"]["output"];
  owner: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchApprovalForAll = {
  __typename?: "EtchApprovalForAll";
  approved: Scalars["Boolean"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  etch: Etch;
  id: Scalars["Bytes"]["output"];
  operator: Scalars["Bytes"]["output"];
  owner: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars["Boolean"]["input"]>;
  approved_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  approved_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  etch?: InputMaybe<Scalars["String"]["input"]>;
  etch_?: InputMaybe<Etch_Filter>;
  etch_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_gt?: InputMaybe<Scalars["String"]["input"]>;
  etch_gte?: InputMaybe<Scalars["String"]["input"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_lt?: InputMaybe<Scalars["String"]["input"]>;
  etch_lte?: InputMaybe<Scalars["String"]["input"]>;
  etch_not?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  operator?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  operator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchApprovalForAll_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchApprovalForAll_OrderBy {
  Approved = "approved",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Etch = "etch",
  EtchCreatedAt = "etch__createdAt",
  EtchDescription = "etch__description",
  EtchDocumentName = "etch__documentName",
  EtchId = "etch__id",
  EtchIpfsCid = "etch__ipfsCid",
  EtchTokenId = "etch__tokenId",
  Id = "id",
  Operator = "operator",
  Owner = "owner",
  TransactionHash = "transactionHash",
}

export type EtchApproval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchApproval_Filter>>>;
  approved?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  approved_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  etch?: InputMaybe<Scalars["String"]["input"]>;
  etch_?: InputMaybe<Etch_Filter>;
  etch_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_gt?: InputMaybe<Scalars["String"]["input"]>;
  etch_gte?: InputMaybe<Scalars["String"]["input"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_lt?: InputMaybe<Scalars["String"]["input"]>;
  etch_lte?: InputMaybe<Scalars["String"]["input"]>;
  etch_not?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchApproval_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchApproval_OrderBy {
  Approved = "approved",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Etch = "etch",
  EtchCreatedAt = "etch__createdAt",
  EtchDescription = "etch__description",
  EtchDocumentName = "etch__documentName",
  EtchId = "etch__id",
  EtchIpfsCid = "etch__ipfsCid",
  EtchTokenId = "etch__tokenId",
  Id = "id",
  Owner = "owner",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type EtchCommentAdded = {
  __typename?: "EtchCommentAdded";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  commentId: Scalars["BigInt"]["output"];
  comment_commentIpfsCid: Scalars["String"]["output"];
  comment_timestamp: Scalars["BigInt"]["output"];
  etch: Etch;
  id: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchCommentAdded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchCommentAdded_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  commentId?: InputMaybe<Scalars["BigInt"]["input"]>;
  commentId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  commentId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  commentId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  commentId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  commentId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  commentId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  commentId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  comment_commentIpfsCid?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_contains?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_gt?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_gte?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  comment_commentIpfsCid_lt?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_lte?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_not?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  comment_commentIpfsCid_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  comment_commentIpfsCid_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  comment_timestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  comment_timestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  comment_timestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  comment_timestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  comment_timestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  comment_timestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  comment_timestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  comment_timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  etch?: InputMaybe<Scalars["String"]["input"]>;
  etch_?: InputMaybe<Etch_Filter>;
  etch_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_gt?: InputMaybe<Scalars["String"]["input"]>;
  etch_gte?: InputMaybe<Scalars["String"]["input"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_lt?: InputMaybe<Scalars["String"]["input"]>;
  etch_lte?: InputMaybe<Scalars["String"]["input"]>;
  etch_not?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchCommentAdded_Filter>>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchCommentAdded_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  CommentId = "commentId",
  CommentCommentIpfsCid = "comment_commentIpfsCid",
  CommentTimestamp = "comment_timestamp",
  Etch = "etch",
  EtchCreatedAt = "etch__createdAt",
  EtchDescription = "etch__description",
  EtchDocumentName = "etch__documentName",
  EtchId = "etch__id",
  EtchIpfsCid = "etch__ipfsCid",
  EtchTokenId = "etch__tokenId",
  Id = "id",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type EtchCreated = {
  __typename?: "EtchCreated";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  to: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchCreated_Filter>>>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchCreated_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  To = "to",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type EtchEns = {
  __typename?: "EtchENS";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  owner: Wallet;
  tokenId: Scalars["BigInt"]["output"];
};

export type EtchEnsCreated = {
  __typename?: "EtchENSCreated";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  name: Scalars["String"]["output"];
  to: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchEnsCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchEnsCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<EtchEnsCreated_Filter>>>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchEnsCreated_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  Name = "name",
  To = "to",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type EtchEnsTransfer = {
  __typename?: "EtchENSTransfer";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  from: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  to: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchEnsTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchEnsTransfer_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  from?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchEnsTransfer_Filter>>>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchEnsTransfer_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  From = "from",
  Id = "id",
  To = "to",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type EtchEns_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchEns_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<EtchEns_Filter>>>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
  owner_?: InputMaybe<Wallet_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_gt?: InputMaybe<Scalars["String"]["input"]>;
  owner_gte?: InputMaybe<Scalars["String"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["String"]["input"]>;
  owner_lte?: InputMaybe<Scalars["String"]["input"]>;
  owner_not?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum EtchEns_OrderBy {
  Id = "id",
  Name = "name",
  Owner = "owner",
  OwnerId = "owner__id",
  TokenId = "tokenId",
}

export type EtchOwnership = {
  __typename?: "EtchOwnership";
  etch: Etch;
  id: Scalars["ID"]["output"];
  owner?: Maybe<Wallet>;
  team?: Maybe<Team>;
};

export type EtchOwnershipTransferred = {
  __typename?: "EtchOwnershipTransferred";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  newOwner: Scalars["Bytes"]["output"];
  previousOwner: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchOwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchOwnershipTransferred_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newOwner?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newOwner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchOwnershipTransferred_Filter>>>;
  previousOwner?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  previousOwner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchOwnershipTransferred_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  NewOwner = "newOwner",
  PreviousOwner = "previousOwner",
  TransactionHash = "transactionHash",
}

export type EtchOwnership_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchOwnership_Filter>>>;
  etch?: InputMaybe<Scalars["String"]["input"]>;
  etch_?: InputMaybe<Etch_Filter>;
  etch_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_gt?: InputMaybe<Scalars["String"]["input"]>;
  etch_gte?: InputMaybe<Scalars["String"]["input"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_lt?: InputMaybe<Scalars["String"]["input"]>;
  etch_lte?: InputMaybe<Scalars["String"]["input"]>;
  etch_not?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchOwnership_Filter>>>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
  owner_?: InputMaybe<Wallet_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_gt?: InputMaybe<Scalars["String"]["input"]>;
  owner_gte?: InputMaybe<Scalars["String"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["String"]["input"]>;
  owner_lte?: InputMaybe<Scalars["String"]["input"]>;
  owner_not?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum EtchOwnership_OrderBy {
  Etch = "etch",
  EtchCreatedAt = "etch__createdAt",
  EtchDescription = "etch__description",
  EtchDocumentName = "etch__documentName",
  EtchId = "etch__id",
  EtchIpfsCid = "etch__ipfsCid",
  EtchTokenId = "etch__tokenId",
  Id = "id",
  Owner = "owner",
  OwnerId = "owner__id",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
}

export type EtchPermission = {
  __typename?: "EtchPermission";
  etch: Etch;
  id: Scalars["ID"]["output"];
  permissionLevel: Scalars["Int"]["output"];
  team?: Maybe<Team>;
  wallet?: Maybe<Wallet>;
};

export type EtchPermission_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchPermission_Filter>>>;
  etch?: InputMaybe<Scalars["String"]["input"]>;
  etch_?: InputMaybe<Etch_Filter>;
  etch_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_gt?: InputMaybe<Scalars["String"]["input"]>;
  etch_gte?: InputMaybe<Scalars["String"]["input"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_lt?: InputMaybe<Scalars["String"]["input"]>;
  etch_lte?: InputMaybe<Scalars["String"]["input"]>;
  etch_not?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchPermission_Filter>>>;
  permissionLevel?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_gt?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_gte?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  permissionLevel_lt?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_lte?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_not?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet?: InputMaybe<Scalars["String"]["input"]>;
  wallet_?: InputMaybe<Wallet_Filter>;
  wallet_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_lte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum EtchPermission_OrderBy {
  Etch = "etch",
  EtchCreatedAt = "etch__createdAt",
  EtchDescription = "etch__description",
  EtchDocumentName = "etch__documentName",
  EtchId = "etch__id",
  EtchIpfsCid = "etch__ipfsCid",
  EtchTokenId = "etch__tokenId",
  Id = "id",
  PermissionLevel = "permissionLevel",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
  Wallet = "wallet",
  WalletId = "wallet__id",
}

export type EtchPermissionsUpdated = {
  __typename?: "EtchPermissionsUpdated";
  account: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  newPermission: Scalars["Int"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchPermissionsUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<EtchPermissionsUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newPermission?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_gt?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_gte?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  newPermission_lt?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_lte?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_not?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchPermissionsUpdated_Filter>>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchPermissionsUpdated_OrderBy {
  Account = "account",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  NewPermission = "newPermission",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type EtchTeamPermissionsUpdated = {
  __typename?: "EtchTeamPermissionsUpdated";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  newPermission: Scalars["Int"]["output"];
  teamId: Scalars["BigInt"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchTeamPermissionsUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchTeamPermissionsUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newPermission?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_gt?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_gte?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  newPermission_lt?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_lte?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_not?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchTeamPermissionsUpdated_Filter>>>;
  teamId?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  teamId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchTeamPermissionsUpdated_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  NewPermission = "newPermission",
  TeamId = "teamId",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type EtchTransfer = {
  __typename?: "EtchTransfer";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  etch: Etch;
  from: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  to: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchTransfer_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  etch?: InputMaybe<Scalars["String"]["input"]>;
  etch_?: InputMaybe<Etch_Filter>;
  etch_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_gt?: InputMaybe<Scalars["String"]["input"]>;
  etch_gte?: InputMaybe<Scalars["String"]["input"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_lt?: InputMaybe<Scalars["String"]["input"]>;
  etch_lte?: InputMaybe<Scalars["String"]["input"]>;
  etch_not?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  from?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchTransfer_Filter>>>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchTransfer_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Etch = "etch",
  EtchCreatedAt = "etch__createdAt",
  EtchDescription = "etch__description",
  EtchDocumentName = "etch__documentName",
  EtchId = "etch__id",
  EtchIpfsCid = "etch__ipfsCid",
  EtchTokenId = "etch__tokenId",
  From = "from",
  Id = "id",
  To = "to",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type EtchTransferedToTeam = {
  __typename?: "EtchTransferedToTeam";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  from: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  to: Scalars["BigInt"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type EtchTransferedToTeam_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchTransferedToTeam_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  from?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchTransferedToTeam_Filter>>>;
  to?: InputMaybe<Scalars["BigInt"]["input"]>;
  to_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  to_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  to_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  to_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  to_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum EtchTransferedToTeam_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  From = "from",
  Id = "id",
  To = "to",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type Etch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Etch_Filter>>>;
  approvals_?: InputMaybe<EtchApproval_Filter>;
  comments_?: InputMaybe<EtchCommentAdded_Filter>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_gt?: InputMaybe<Scalars["String"]["input"]>;
  description_gte?: InputMaybe<Scalars["String"]["input"]>;
  description_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_lt?: InputMaybe<Scalars["String"]["input"]>;
  description_lte?: InputMaybe<Scalars["String"]["input"]>;
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  documentName?: InputMaybe<Scalars["String"]["input"]>;
  documentName_contains?: InputMaybe<Scalars["String"]["input"]>;
  documentName_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  documentName_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  documentName_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  documentName_gt?: InputMaybe<Scalars["String"]["input"]>;
  documentName_gte?: InputMaybe<Scalars["String"]["input"]>;
  documentName_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  documentName_lt?: InputMaybe<Scalars["String"]["input"]>;
  documentName_lte?: InputMaybe<Scalars["String"]["input"]>;
  documentName_not?: InputMaybe<Scalars["String"]["input"]>;
  documentName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  documentName_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  documentName_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  documentName_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  documentName_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  documentName_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  documentName_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  documentName_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  documentName_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  ipfsCid?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_contains?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_gt?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_gte?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ipfsCid_lt?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_lte?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_not?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ipfsCid_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  ipfsCid_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Etch_Filter>>>;
  ownership_?: InputMaybe<EtchOwnership_Filter>;
  permissions_?: InputMaybe<EtchPermission_Filter>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transfers_?: InputMaybe<EtchTransfer_Filter>;
};

export enum Etch_OrderBy {
  Approvals = "approvals",
  Comments = "comments",
  CreatedAt = "createdAt",
  Description = "description",
  DocumentName = "documentName",
  Id = "id",
  IpfsCid = "ipfsCid",
  Ownership = "ownership",
  OwnershipId = "ownership__id",
  Permissions = "permissions",
  TokenId = "tokenId",
  Transfers = "transfers",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Organisation = {
  __typename?: "Organisation";
  approvals?: Maybe<Array<OrganisationApproval>>;
  createdAt: Scalars["BigInt"]["output"];
  id: Scalars["ID"]["output"];
  managedTeams?: Maybe<Array<TeamOwnership>>;
  name?: Maybe<Scalars["String"]["output"]>;
  orgId: Scalars["BigInt"]["output"];
  ownership: OrganisationOwnership;
  permissions?: Maybe<Array<OrganisationPermission>>;
  transfers?: Maybe<Array<OrganisationTransfer>>;
};

export type OrganisationApprovalsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganisationApproval_Filter>;
};

export type OrganisationManagedTeamsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TeamOwnership_Filter>;
};

export type OrganisationPermissionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganisationPermission_Filter>;
};

export type OrganisationTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganisationTransfer_Filter>;
};

export type OrganisationApproval = {
  __typename?: "OrganisationApproval";
  approved: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  organisation: Organisation;
  owner: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  wallet: Wallet;
};

export type OrganisationApprovalForAll = {
  __typename?: "OrganisationApprovalForAll";
  approved: Scalars["Boolean"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  operator: Scalars["Bytes"]["output"];
  organisation: Organisation;
  owner: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type OrganisationApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars["Boolean"]["input"]>;
  approved_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  approved_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  operator?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  operator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationApprovalForAll_Filter>>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OrganisationApprovalForAll_OrderBy {
  Approved = "approved",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  Operator = "operator",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  Owner = "owner",
  TransactionHash = "transactionHash",
}

export type OrganisationApproval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationApproval_Filter>>>;
  approved?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  approved_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationApproval_Filter>>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  wallet?: InputMaybe<Scalars["String"]["input"]>;
  wallet_?: InputMaybe<Wallet_Filter>;
  wallet_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_lte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum OrganisationApproval_OrderBy {
  Approved = "approved",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  Owner = "owner",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
  Wallet = "wallet",
  WalletId = "wallet__id",
}

export type OrganisationContractOwnershipTransferred = {
  __typename?: "OrganisationContractOwnershipTransferred";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  newOwner: Scalars["Bytes"]["output"];
  previousOwner: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type OrganisationContractOwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationContractOwnershipTransferred_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newOwner?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newOwner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationContractOwnershipTransferred_Filter>>>;
  previousOwner?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  previousOwner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OrganisationContractOwnershipTransferred_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  NewOwner = "newOwner",
  PreviousOwner = "previousOwner",
  TransactionHash = "transactionHash",
}

export type OrganisationCreated = {
  __typename?: "OrganisationCreated";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  orgId: Scalars["BigInt"]["output"];
  organisation: Organisation;
  to: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type OrganisationCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationCreated_Filter>>>;
  orgId?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orgId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OrganisationCreated_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  OrgId = "orgId",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  To = "to",
  TransactionHash = "transactionHash",
}

export type OrganisationOwnership = {
  __typename?: "OrganisationOwnership";
  id: Scalars["ID"]["output"];
  organisation: Organisation;
  owner?: Maybe<Wallet>;
};

export type OrganisationOwnership_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationOwnership_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationOwnership_Filter>>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
  owner_?: InputMaybe<Wallet_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_gt?: InputMaybe<Scalars["String"]["input"]>;
  owner_gte?: InputMaybe<Scalars["String"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["String"]["input"]>;
  owner_lte?: InputMaybe<Scalars["String"]["input"]>;
  owner_not?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum OrganisationOwnership_OrderBy {
  Id = "id",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  Owner = "owner",
  OwnerId = "owner__id",
}

export type OrganisationPermission = {
  __typename?: "OrganisationPermission";
  id: Scalars["ID"]["output"];
  organisation: Organisation;
  permissionLevel: Scalars["Int"]["output"];
  wallet: Wallet;
};

export type OrganisationPermission_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationPermission_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationPermission_Filter>>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  permissionLevel?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_gt?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_gte?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  permissionLevel_lt?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_lte?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_not?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  wallet?: InputMaybe<Scalars["String"]["input"]>;
  wallet_?: InputMaybe<Wallet_Filter>;
  wallet_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_lte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum OrganisationPermission_OrderBy {
  Id = "id",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  PermissionLevel = "permissionLevel",
  Wallet = "wallet",
  WalletId = "wallet__id",
}

export type OrganisationPermissionsUpdated = {
  __typename?: "OrganisationPermissionsUpdated";
  account: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  newPermission: Scalars["Int"]["output"];
  orgId: Scalars["BigInt"]["output"];
  organisation: Organisation;
  transactionHash: Scalars["Bytes"]["output"];
};

export type OrganisationPermissionsUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<OrganisationPermissionsUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newPermission?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_gt?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_gte?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  newPermission_lt?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_lte?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_not?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationPermissionsUpdated_Filter>>>;
  orgId?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orgId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OrganisationPermissionsUpdated_OrderBy {
  Account = "account",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  NewPermission = "newPermission",
  OrgId = "orgId",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  TransactionHash = "transactionHash",
}

export type OrganisationRenamed = {
  __typename?: "OrganisationRenamed";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  newName: Scalars["String"]["output"];
  organisation: Organisation;
  transactionHash: Scalars["Bytes"]["output"];
};

export type OrganisationRenamed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationRenamed_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newName?: InputMaybe<Scalars["String"]["input"]>;
  newName_contains?: InputMaybe<Scalars["String"]["input"]>;
  newName_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  newName_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_gt?: InputMaybe<Scalars["String"]["input"]>;
  newName_gte?: InputMaybe<Scalars["String"]["input"]>;
  newName_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  newName_lt?: InputMaybe<Scalars["String"]["input"]>;
  newName_lte?: InputMaybe<Scalars["String"]["input"]>;
  newName_not?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  newName_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  newName_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<OrganisationRenamed_Filter>>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OrganisationRenamed_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  NewName = "newName",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  TransactionHash = "transactionHash",
}

export type OrganisationTransfer = {
  __typename?: "OrganisationTransfer";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  from: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  organisation: Organisation;
  to: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type OrganisationTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationTransfer_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  from?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationTransfer_Filter>>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum OrganisationTransfer_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  From = "from",
  Id = "id",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  To = "to",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type Organisation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Organisation_Filter>>>;
  approvals_?: InputMaybe<OrganisationApproval_Filter>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  managedTeams_?: InputMaybe<TeamOwnership_Filter>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Organisation_Filter>>>;
  orgId?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orgId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  ownership_?: InputMaybe<OrganisationOwnership_Filter>;
  permissions_?: InputMaybe<OrganisationPermission_Filter>;
  transfers_?: InputMaybe<OrganisationTransfer_Filter>;
};

export enum Organisation_OrderBy {
  Approvals = "approvals",
  CreatedAt = "createdAt",
  Id = "id",
  ManagedTeams = "managedTeams",
  Name = "name",
  OrgId = "orgId",
  Ownership = "ownership",
  OwnershipId = "ownership__id",
  Permissions = "permissions",
  Transfers = "transfers",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  etch?: Maybe<Etch>;
  etchApproval?: Maybe<EtchApproval>;
  etchApprovalForAll?: Maybe<EtchApprovalForAll>;
  etchApprovalForAlls: Array<EtchApprovalForAll>;
  etchApprovals: Array<EtchApproval>;
  etchCommentAdded?: Maybe<EtchCommentAdded>;
  etchCommentAddeds: Array<EtchCommentAdded>;
  etchCreated?: Maybe<EtchCreated>;
  etchCreateds: Array<EtchCreated>;
  etchENS?: Maybe<EtchEns>;
  etchENSCreated?: Maybe<EtchEnsCreated>;
  etchENSCreateds: Array<EtchEnsCreated>;
  etchENSTransfer?: Maybe<EtchEnsTransfer>;
  etchENSTransfers: Array<EtchEnsTransfer>;
  etchENSs: Array<EtchEns>;
  etchOwnership?: Maybe<EtchOwnership>;
  etchOwnershipTransferred?: Maybe<EtchOwnershipTransferred>;
  etchOwnershipTransferreds: Array<EtchOwnershipTransferred>;
  etchOwnerships: Array<EtchOwnership>;
  etchPermission?: Maybe<EtchPermission>;
  etchPermissions: Array<EtchPermission>;
  etchPermissionsUpdated?: Maybe<EtchPermissionsUpdated>;
  etchPermissionsUpdateds: Array<EtchPermissionsUpdated>;
  etchTeamPermissionsUpdated?: Maybe<EtchTeamPermissionsUpdated>;
  etchTeamPermissionsUpdateds: Array<EtchTeamPermissionsUpdated>;
  etchTransfer?: Maybe<EtchTransfer>;
  etchTransferedToTeam?: Maybe<EtchTransferedToTeam>;
  etchTransferedToTeams: Array<EtchTransferedToTeam>;
  etchTransfers: Array<EtchTransfer>;
  etches: Array<Etch>;
  organisation?: Maybe<Organisation>;
  organisationApproval?: Maybe<OrganisationApproval>;
  organisationApprovalForAll?: Maybe<OrganisationApprovalForAll>;
  organisationApprovalForAlls: Array<OrganisationApprovalForAll>;
  organisationApprovals: Array<OrganisationApproval>;
  organisationContractOwnershipTransferred?: Maybe<OrganisationContractOwnershipTransferred>;
  organisationContractOwnershipTransferreds: Array<OrganisationContractOwnershipTransferred>;
  organisationCreated?: Maybe<OrganisationCreated>;
  organisationCreateds: Array<OrganisationCreated>;
  organisationOwnership?: Maybe<OrganisationOwnership>;
  organisationOwnerships: Array<OrganisationOwnership>;
  organisationPermission?: Maybe<OrganisationPermission>;
  organisationPermissions: Array<OrganisationPermission>;
  organisationPermissionsUpdated?: Maybe<OrganisationPermissionsUpdated>;
  organisationPermissionsUpdateds: Array<OrganisationPermissionsUpdated>;
  organisationRenamed?: Maybe<OrganisationRenamed>;
  organisationRenameds: Array<OrganisationRenamed>;
  organisationTransfer?: Maybe<OrganisationTransfer>;
  organisationTransfers: Array<OrganisationTransfer>;
  organisations: Array<Organisation>;
  team?: Maybe<Team>;
  teamApproval?: Maybe<TeamApproval>;
  teamApprovalForAll?: Maybe<TeamApprovalForAll>;
  teamApprovalForAlls: Array<TeamApprovalForAll>;
  teamApprovals: Array<TeamApproval>;
  teamCreated?: Maybe<TeamCreated>;
  teamCreateds: Array<TeamCreated>;
  teamOwnership?: Maybe<TeamOwnership>;
  teamOwnershipTransferred?: Maybe<TeamOwnershipTransferred>;
  teamOwnershipTransferreds: Array<TeamOwnershipTransferred>;
  teamOwnerships: Array<TeamOwnership>;
  teamPermission?: Maybe<TeamPermission>;
  teamPermissions: Array<TeamPermission>;
  teamPermissionsUpdated?: Maybe<TeamPermissionsUpdated>;
  teamPermissionsUpdateds: Array<TeamPermissionsUpdated>;
  teamRenamed?: Maybe<TeamRenamed>;
  teamRenameds: Array<TeamRenamed>;
  teamTransfer?: Maybe<TeamTransfer>;
  teamTransferToOrganisation?: Maybe<TeamTransferToOrganisation>;
  teamTransferToOrganisations: Array<TeamTransferToOrganisation>;
  teamTransfers: Array<TeamTransfer>;
  teams: Array<Team>;
  wallet?: Maybe<Wallet>;
  wallets: Array<Wallet>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryEtchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchApprovalForAll_Filter>;
};

export type QueryEtchApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchApproval_Filter>;
};

export type QueryEtchCommentAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchCommentAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchCommentAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchCommentAdded_Filter>;
};

export type QueryEtchCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchCreated_Filter>;
};

export type QueryEtchEnsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchEnsCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchEnsCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchEnsCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchEnsCreated_Filter>;
};

export type QueryEtchEnsTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchEnsTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchEnsTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchEnsTransfer_Filter>;
};

export type QueryEtchEnSsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchEns_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchEns_Filter>;
};

export type QueryEtchOwnershipArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchOwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchOwnershipTransferred_Filter>;
};

export type QueryEtchOwnershipsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchOwnership_Filter>;
};

export type QueryEtchPermissionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchPermissionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchPermission_Filter>;
};

export type QueryEtchPermissionsUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchPermissionsUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchPermissionsUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchPermissionsUpdated_Filter>;
};

export type QueryEtchTeamPermissionsUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchTeamPermissionsUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchTeamPermissionsUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchTeamPermissionsUpdated_Filter>;
};

export type QueryEtchTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchTransferedToTeamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryEtchTransferedToTeamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchTransferedToTeam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchTransferedToTeam_Filter>;
};

export type QueryEtchTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchTransfer_Filter>;
};

export type QueryEtchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Etch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Etch_Filter>;
};

export type QueryOrganisationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationApprovalForAll_Filter>;
};

export type QueryOrganisationApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationApproval_Filter>;
};

export type QueryOrganisationContractOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationContractOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationContractOwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationContractOwnershipTransferred_Filter>;
};

export type QueryOrganisationCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationCreated_Filter>;
};

export type QueryOrganisationOwnershipArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationOwnershipsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationOwnership_Filter>;
};

export type QueryOrganisationPermissionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationPermissionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationPermission_Filter>;
};

export type QueryOrganisationPermissionsUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationPermissionsUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationPermissionsUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationPermissionsUpdated_Filter>;
};

export type QueryOrganisationRenamedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationRenamedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationRenamed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationRenamed_Filter>;
};

export type QueryOrganisationTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrganisationTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationTransfer_Filter>;
};

export type QueryOrganisationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Organisation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Organisation_Filter>;
};

export type QueryTeamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamApprovalForAll_Filter>;
};

export type QueryTeamApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamApproval_Filter>;
};

export type QueryTeamCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamCreated_Filter>;
};

export type QueryTeamOwnershipArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamOwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamOwnershipTransferred_Filter>;
};

export type QueryTeamOwnershipsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamOwnership_Filter>;
};

export type QueryTeamPermissionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamPermissionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamPermission_Filter>;
};

export type QueryTeamPermissionsUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamPermissionsUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamPermissionsUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamPermissionsUpdated_Filter>;
};

export type QueryTeamRenamedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamRenamedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamRenamed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamRenamed_Filter>;
};

export type QueryTeamTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamTransferToOrganisationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTeamTransferToOrganisationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamTransferToOrganisation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamTransferToOrganisation_Filter>;
};

export type QueryTeamTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamTransfer_Filter>;
};

export type QueryTeamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Team_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Team_Filter>;
};

export type QueryWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Wallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wallet_Filter>;
};

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  etch?: Maybe<Etch>;
  etchApproval?: Maybe<EtchApproval>;
  etchApprovalForAll?: Maybe<EtchApprovalForAll>;
  etchApprovalForAlls: Array<EtchApprovalForAll>;
  etchApprovals: Array<EtchApproval>;
  etchCommentAdded?: Maybe<EtchCommentAdded>;
  etchCommentAddeds: Array<EtchCommentAdded>;
  etchCreated?: Maybe<EtchCreated>;
  etchCreateds: Array<EtchCreated>;
  etchENS?: Maybe<EtchEns>;
  etchENSCreated?: Maybe<EtchEnsCreated>;
  etchENSCreateds: Array<EtchEnsCreated>;
  etchENSTransfer?: Maybe<EtchEnsTransfer>;
  etchENSTransfers: Array<EtchEnsTransfer>;
  etchENSs: Array<EtchEns>;
  etchOwnership?: Maybe<EtchOwnership>;
  etchOwnershipTransferred?: Maybe<EtchOwnershipTransferred>;
  etchOwnershipTransferreds: Array<EtchOwnershipTransferred>;
  etchOwnerships: Array<EtchOwnership>;
  etchPermission?: Maybe<EtchPermission>;
  etchPermissions: Array<EtchPermission>;
  etchPermissionsUpdated?: Maybe<EtchPermissionsUpdated>;
  etchPermissionsUpdateds: Array<EtchPermissionsUpdated>;
  etchTeamPermissionsUpdated?: Maybe<EtchTeamPermissionsUpdated>;
  etchTeamPermissionsUpdateds: Array<EtchTeamPermissionsUpdated>;
  etchTransfer?: Maybe<EtchTransfer>;
  etchTransferedToTeam?: Maybe<EtchTransferedToTeam>;
  etchTransferedToTeams: Array<EtchTransferedToTeam>;
  etchTransfers: Array<EtchTransfer>;
  etches: Array<Etch>;
  organisation?: Maybe<Organisation>;
  organisationApproval?: Maybe<OrganisationApproval>;
  organisationApprovalForAll?: Maybe<OrganisationApprovalForAll>;
  organisationApprovalForAlls: Array<OrganisationApprovalForAll>;
  organisationApprovals: Array<OrganisationApproval>;
  organisationContractOwnershipTransferred?: Maybe<OrganisationContractOwnershipTransferred>;
  organisationContractOwnershipTransferreds: Array<OrganisationContractOwnershipTransferred>;
  organisationCreated?: Maybe<OrganisationCreated>;
  organisationCreateds: Array<OrganisationCreated>;
  organisationOwnership?: Maybe<OrganisationOwnership>;
  organisationOwnerships: Array<OrganisationOwnership>;
  organisationPermission?: Maybe<OrganisationPermission>;
  organisationPermissions: Array<OrganisationPermission>;
  organisationPermissionsUpdated?: Maybe<OrganisationPermissionsUpdated>;
  organisationPermissionsUpdateds: Array<OrganisationPermissionsUpdated>;
  organisationRenamed?: Maybe<OrganisationRenamed>;
  organisationRenameds: Array<OrganisationRenamed>;
  organisationTransfer?: Maybe<OrganisationTransfer>;
  organisationTransfers: Array<OrganisationTransfer>;
  organisations: Array<Organisation>;
  team?: Maybe<Team>;
  teamApproval?: Maybe<TeamApproval>;
  teamApprovalForAll?: Maybe<TeamApprovalForAll>;
  teamApprovalForAlls: Array<TeamApprovalForAll>;
  teamApprovals: Array<TeamApproval>;
  teamCreated?: Maybe<TeamCreated>;
  teamCreateds: Array<TeamCreated>;
  teamOwnership?: Maybe<TeamOwnership>;
  teamOwnershipTransferred?: Maybe<TeamOwnershipTransferred>;
  teamOwnershipTransferreds: Array<TeamOwnershipTransferred>;
  teamOwnerships: Array<TeamOwnership>;
  teamPermission?: Maybe<TeamPermission>;
  teamPermissions: Array<TeamPermission>;
  teamPermissionsUpdated?: Maybe<TeamPermissionsUpdated>;
  teamPermissionsUpdateds: Array<TeamPermissionsUpdated>;
  teamRenamed?: Maybe<TeamRenamed>;
  teamRenameds: Array<TeamRenamed>;
  teamTransfer?: Maybe<TeamTransfer>;
  teamTransferToOrganisation?: Maybe<TeamTransferToOrganisation>;
  teamTransferToOrganisations: Array<TeamTransferToOrganisation>;
  teamTransfers: Array<TeamTransfer>;
  teams: Array<Team>;
  wallet?: Maybe<Wallet>;
  wallets: Array<Wallet>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionEtchArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchApprovalForAll_Filter>;
};

export type SubscriptionEtchApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchApproval_Filter>;
};

export type SubscriptionEtchCommentAddedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchCommentAddedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchCommentAdded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchCommentAdded_Filter>;
};

export type SubscriptionEtchCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchCreated_Filter>;
};

export type SubscriptionEtchEnsArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchEnsCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchEnsCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchEnsCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchEnsCreated_Filter>;
};

export type SubscriptionEtchEnsTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchEnsTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchEnsTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchEnsTransfer_Filter>;
};

export type SubscriptionEtchEnSsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchEns_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchEns_Filter>;
};

export type SubscriptionEtchOwnershipArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchOwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchOwnershipTransferred_Filter>;
};

export type SubscriptionEtchOwnershipsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchOwnership_Filter>;
};

export type SubscriptionEtchPermissionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchPermissionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchPermission_Filter>;
};

export type SubscriptionEtchPermissionsUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchPermissionsUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchPermissionsUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchPermissionsUpdated_Filter>;
};

export type SubscriptionEtchTeamPermissionsUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchTeamPermissionsUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchTeamPermissionsUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchTeamPermissionsUpdated_Filter>;
};

export type SubscriptionEtchTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchTransferedToTeamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionEtchTransferedToTeamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchTransferedToTeam_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchTransferedToTeam_Filter>;
};

export type SubscriptionEtchTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<EtchTransfer_Filter>;
};

export type SubscriptionEtchesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Etch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Etch_Filter>;
};

export type SubscriptionOrganisationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationApprovalForAll_Filter>;
};

export type SubscriptionOrganisationApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationApproval_Filter>;
};

export type SubscriptionOrganisationContractOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationContractOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationContractOwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationContractOwnershipTransferred_Filter>;
};

export type SubscriptionOrganisationCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationCreated_Filter>;
};

export type SubscriptionOrganisationOwnershipArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationOwnershipsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationOwnership_Filter>;
};

export type SubscriptionOrganisationPermissionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationPermissionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationPermission_Filter>;
};

export type SubscriptionOrganisationPermissionsUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationPermissionsUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationPermissionsUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationPermissionsUpdated_Filter>;
};

export type SubscriptionOrganisationRenamedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationRenamedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationRenamed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationRenamed_Filter>;
};

export type SubscriptionOrganisationTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrganisationTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrganisationTransfer_Filter>;
};

export type SubscriptionOrganisationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Organisation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Organisation_Filter>;
};

export type SubscriptionTeamArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamApprovalArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamApprovalForAllArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamApprovalForAllsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamApprovalForAll_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamApprovalForAll_Filter>;
};

export type SubscriptionTeamApprovalsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamApproval_Filter>;
};

export type SubscriptionTeamCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamCreated_Filter>;
};

export type SubscriptionTeamOwnershipArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamOwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamOwnershipTransferred_Filter>;
};

export type SubscriptionTeamOwnershipsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamOwnership_Filter>;
};

export type SubscriptionTeamPermissionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamPermissionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamPermission_Filter>;
};

export type SubscriptionTeamPermissionsUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamPermissionsUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamPermissionsUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamPermissionsUpdated_Filter>;
};

export type SubscriptionTeamRenamedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamRenamedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamRenamed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamRenamed_Filter>;
};

export type SubscriptionTeamTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamTransferToOrganisationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTeamTransferToOrganisationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamTransferToOrganisation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamTransferToOrganisation_Filter>;
};

export type SubscriptionTeamTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TeamTransfer_Filter>;
};

export type SubscriptionTeamsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Team_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Team_Filter>;
};

export type SubscriptionWalletArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWalletsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Wallet_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Wallet_Filter>;
};

export type Team = {
  __typename?: "Team";
  approvals?: Maybe<Array<TeamApproval>>;
  createdAt: Scalars["BigInt"]["output"];
  externalEtches?: Maybe<Array<EtchPermission>>;
  id: Scalars["ID"]["output"];
  managedEtches?: Maybe<Array<EtchOwnership>>;
  name?: Maybe<Scalars["String"]["output"]>;
  ownership: TeamOwnership;
  permissions?: Maybe<Array<TeamPermission>>;
  teamId: Scalars["BigInt"]["output"];
  transfers?: Maybe<Array<TeamTransfer>>;
};

export type TeamApprovalsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TeamApproval_Filter>;
};

export type TeamExternalEtchesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EtchPermission_Filter>;
};

export type TeamManagedEtchesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EtchOwnership_Filter>;
};

export type TeamPermissionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TeamPermission_Filter>;
};

export type TeamTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TeamTransfer_Filter>;
};

export type TeamApproval = {
  __typename?: "TeamApproval";
  approved: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  owner: Scalars["Bytes"]["output"];
  team: Team;
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  wallet: Wallet;
};

export type TeamApprovalForAll = {
  __typename?: "TeamApprovalForAll";
  approved: Scalars["Boolean"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  operator: Scalars["Bytes"]["output"];
  owner: Scalars["Bytes"]["output"];
  team: Team;
  transactionHash: Scalars["Bytes"]["output"];
};

export type TeamApprovalForAll_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamApprovalForAll_Filter>>>;
  approved?: InputMaybe<Scalars["Boolean"]["input"]>;
  approved_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  approved_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  operator?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  operator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  operator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamApprovalForAll_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum TeamApprovalForAll_OrderBy {
  Approved = "approved",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  Operator = "operator",
  Owner = "owner",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
  TransactionHash = "transactionHash",
}

export type TeamApproval_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamApproval_Filter>>>;
  approved?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  approved_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamApproval_Filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  wallet?: InputMaybe<Scalars["String"]["input"]>;
  wallet_?: InputMaybe<Wallet_Filter>;
  wallet_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_lte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum TeamApproval_OrderBy {
  Approved = "approved",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  Owner = "owner",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
  Wallet = "wallet",
  WalletId = "wallet__id",
}

export type TeamCreated = {
  __typename?: "TeamCreated";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  team: Team;
  to: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type TeamCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamCreated_Filter>>>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum TeamCreated_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
  To = "to",
  TransactionHash = "transactionHash",
}

export type TeamOwnership = {
  __typename?: "TeamOwnership";
  id: Scalars["ID"]["output"];
  organisation?: Maybe<Organisation>;
  owner?: Maybe<Wallet>;
  team: Team;
};

export type TeamOwnershipTransferred = {
  __typename?: "TeamOwnershipTransferred";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  newOwner: Scalars["Bytes"]["output"];
  previousOwner: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type TeamOwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamOwnershipTransferred_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newOwner?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newOwner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamOwnershipTransferred_Filter>>>;
  previousOwner?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  previousOwner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  previousOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum TeamOwnershipTransferred_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  NewOwner = "newOwner",
  PreviousOwner = "previousOwner",
  TransactionHash = "transactionHash",
}

export type TeamOwnership_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamOwnership_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamOwnership_Filter>>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner?: InputMaybe<Scalars["String"]["input"]>;
  owner_?: InputMaybe<Wallet_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_gt?: InputMaybe<Scalars["String"]["input"]>;
  owner_gte?: InputMaybe<Scalars["String"]["input"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_lt?: InputMaybe<Scalars["String"]["input"]>;
  owner_lte?: InputMaybe<Scalars["String"]["input"]>;
  owner_not?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum TeamOwnership_OrderBy {
  Id = "id",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  Owner = "owner",
  OwnerId = "owner__id",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
}

export type TeamPermission = {
  __typename?: "TeamPermission";
  id: Scalars["ID"]["output"];
  permissionLevel: Scalars["Int"]["output"];
  team: Team;
  wallet: Wallet;
};

export type TeamPermission_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamPermission_Filter>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamPermission_Filter>>>;
  permissionLevel?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_gt?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_gte?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  permissionLevel_lt?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_lte?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_not?: InputMaybe<Scalars["Int"]["input"]>;
  permissionLevel_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet?: InputMaybe<Scalars["String"]["input"]>;
  wallet_?: InputMaybe<Wallet_Filter>;
  wallet_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_gte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]["input"]>;
  wallet_lte?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum TeamPermission_OrderBy {
  Id = "id",
  PermissionLevel = "permissionLevel",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
  Wallet = "wallet",
  WalletId = "wallet__id",
}

export type TeamPermissionsUpdated = {
  __typename?: "TeamPermissionsUpdated";
  account: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  newPermission: Scalars["Int"]["output"];
  team: Team;
  transactionHash: Scalars["Bytes"]["output"];
};

export type TeamPermissionsUpdated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<TeamPermissionsUpdated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newPermission?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_gt?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_gte?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  newPermission_lt?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_lte?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_not?: InputMaybe<Scalars["Int"]["input"]>;
  newPermission_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamPermissionsUpdated_Filter>>>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum TeamPermissionsUpdated_OrderBy {
  Account = "account",
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  NewPermission = "newPermission",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
  TransactionHash = "transactionHash",
}

export type TeamRenamed = {
  __typename?: "TeamRenamed";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  newName: Scalars["String"]["output"];
  team: Team;
  transactionHash: Scalars["Bytes"]["output"];
};

export type TeamRenamed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamRenamed_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newName?: InputMaybe<Scalars["String"]["input"]>;
  newName_contains?: InputMaybe<Scalars["String"]["input"]>;
  newName_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  newName_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_gt?: InputMaybe<Scalars["String"]["input"]>;
  newName_gte?: InputMaybe<Scalars["String"]["input"]>;
  newName_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  newName_lt?: InputMaybe<Scalars["String"]["input"]>;
  newName_lte?: InputMaybe<Scalars["String"]["input"]>;
  newName_not?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  newName_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  newName_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  newName_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  newName_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<TeamRenamed_Filter>>>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum TeamRenamed_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  NewName = "newName",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
  TransactionHash = "transactionHash",
}

export type TeamTransfer = {
  __typename?: "TeamTransfer";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  from: Scalars["Bytes"]["output"];
  id: Scalars["Bytes"]["output"];
  team: Team;
  to: Scalars["Bytes"]["output"];
  tokenId: Scalars["BigInt"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type TeamTransferToOrganisation = {
  __typename?: "TeamTransferToOrganisation";
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  orgId: Scalars["BigInt"]["output"];
  organisation: Organisation;
  team: Team;
  transactionHash: Scalars["Bytes"]["output"];
};

export type TeamTransferToOrganisation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamTransferToOrganisation_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamTransferToOrganisation_Filter>>>;
  orgId?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  orgId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  orgId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  organisation?: InputMaybe<Scalars["String"]["input"]>;
  organisation_?: InputMaybe<Organisation_Filter>;
  organisation_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_gte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]["input"]>;
  organisation_lte?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum TeamTransferToOrganisation_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  Id = "id",
  OrgId = "orgId",
  Organisation = "organisation",
  OrganisationCreatedAt = "organisation__createdAt",
  OrganisationId = "organisation__id",
  OrganisationName = "organisation__name",
  OrganisationOrgId = "organisation__orgId",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
  TransactionHash = "transactionHash",
}

export type TeamTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamTransfer_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  from?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamTransfer_Filter>>>;
  team?: InputMaybe<Scalars["String"]["input"]>;
  team_?: InputMaybe<Team_Filter>;
  team_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_gt?: InputMaybe<Scalars["String"]["input"]>;
  team_gte?: InputMaybe<Scalars["String"]["input"]>;
  team_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_lt?: InputMaybe<Scalars["String"]["input"]>;
  team_lte?: InputMaybe<Scalars["String"]["input"]>;
  team_not?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum TeamTransfer_OrderBy {
  BlockNumber = "blockNumber",
  BlockTimestamp = "blockTimestamp",
  From = "from",
  Id = "id",
  Team = "team",
  TeamCreatedAt = "team__createdAt",
  TeamId = "team__id",
  TeamName = "team__name",
  TeamTeamId = "team__teamId",
  To = "to",
  TokenId = "tokenId",
  TransactionHash = "transactionHash",
}

export type Team_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  approvals_?: InputMaybe<TeamApproval_Filter>;
  createdAt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  externalEtches_?: InputMaybe<EtchPermission_Filter>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  id_gt?: InputMaybe<Scalars["ID"]["input"]>;
  id_gte?: InputMaybe<Scalars["ID"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  id_lt?: InputMaybe<Scalars["ID"]["input"]>;
  id_lte?: InputMaybe<Scalars["ID"]["input"]>;
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  managedEtches_?: InputMaybe<EtchOwnership_Filter>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Team_Filter>>>;
  ownership_?: InputMaybe<TeamOwnership_Filter>;
  permissions_?: InputMaybe<TeamPermission_Filter>;
  teamId?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  teamId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  teamId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  transfers_?: InputMaybe<TeamTransfer_Filter>;
};

export enum Team_OrderBy {
  Approvals = "approvals",
  CreatedAt = "createdAt",
  ExternalEtches = "externalEtches",
  Id = "id",
  ManagedEtches = "managedEtches",
  Name = "name",
  Ownership = "ownership",
  OwnershipId = "ownership__id",
  Permissions = "permissions",
  TeamId = "teamId",
  Transfers = "transfers",
}

export type Wallet = {
  __typename?: "Wallet";
  OrganisationApprovals?: Maybe<Array<OrganisationApproval>>;
  OrganisationPermissions?: Maybe<Array<OrganisationPermission>>;
  etchENS: Array<EtchEns>;
  etchPermissions?: Maybe<Array<EtchPermission>>;
  id: Scalars["Bytes"]["output"];
  ownedEtches?: Maybe<Array<EtchOwnership>>;
  ownedTeams?: Maybe<Array<TeamOwnership>>;
  ownedorganisations?: Maybe<Array<OrganisationOwnership>>;
  teamApprovals?: Maybe<Array<TeamApproval>>;
  teamPermissions?: Maybe<Array<TeamPermission>>;
};

export type WalletOrganisationApprovalsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganisationApproval_Filter>;
};

export type WalletOrganisationPermissionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganisationPermission_Filter>;
};

export type WalletEtchEnsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchEns_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EtchEns_Filter>;
};

export type WalletEtchPermissionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EtchPermission_Filter>;
};

export type WalletOwnedEtchesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<EtchOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EtchOwnership_Filter>;
};

export type WalletOwnedTeamsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TeamOwnership_Filter>;
};

export type WalletOwnedorganisationsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrganisationOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrganisationOwnership_Filter>;
};

export type WalletTeamApprovalsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamApproval_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TeamApproval_Filter>;
};

export type WalletTeamPermissionsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<TeamPermission_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TeamPermission_Filter>;
};

export type Wallet_Filter = {
  OrganisationApprovals_?: InputMaybe<OrganisationApproval_Filter>;
  OrganisationPermissions_?: InputMaybe<OrganisationPermission_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Wallet_Filter>>>;
  etchENS_?: InputMaybe<EtchEns_Filter>;
  etchPermissions_?: InputMaybe<EtchPermission_Filter>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<Wallet_Filter>>>;
  ownedEtches_?: InputMaybe<EtchOwnership_Filter>;
  ownedTeams_?: InputMaybe<TeamOwnership_Filter>;
  ownedorganisations_?: InputMaybe<OrganisationOwnership_Filter>;
  teamApprovals_?: InputMaybe<TeamApproval_Filter>;
  teamPermissions_?: InputMaybe<TeamPermission_Filter>;
};

export enum Wallet_OrderBy {
  OrganisationApprovals = "OrganisationApprovals",
  OrganisationPermissions = "OrganisationPermissions",
  EtchEns = "etchENS",
  EtchPermissions = "etchPermissions",
  Id = "id",
  OwnedEtches = "ownedEtches",
  OwnedTeams = "ownedTeams",
  Ownedorganisations = "ownedorganisations",
  TeamApprovals = "teamApprovals",
  TeamPermissions = "teamPermissions",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]["output"]>;
  /** The block number */
  number: Scalars["Int"]["output"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]["output"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"]["output"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]["output"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type OrganisationsQueryVariables = Exact<{
  address: Scalars["String"]["input"];
}>;

export type OrganisationsQuery = {
  __typename?: "Query";
  organisations: Array<{ __typename?: "Organisation"; orgId: any; id: string; name?: string | null; createdAt: any }>;
};

export type FullEtchFragmentFragment = {
  __typename?: "Etch";
  id: string;
  tokenId: any;
  createdAt: any;
  documentName: string;
  description?: string | null;
  ipfsCid: string;
  ownership: {
    __typename?: "EtchOwnership";
    id: string;
    etch: { __typename?: "Etch"; id: string; tokenId: any; createdAt: any; documentName: string; ipfsCid: string };
    owner?: { __typename?: "Wallet"; id: any; etchENS: Array<{ __typename?: "EtchENS"; id: string; name: string }> } | null;
    team?: { __typename?: "Team"; id: string; teamId: any; name?: string | null } | null;
  };
  permissions?: Array<{
    __typename?: "EtchPermission";
    id: string;
    permissionLevel: number;
    etch: { __typename?: "Etch"; id: string; tokenId: any; createdAt: any; documentName: string; ipfsCid: string };
    wallet?: { __typename?: "Wallet"; id: any } | null;
    team?: { __typename?: "Team"; id: string } | null;
  }> | null;
  comments?: Array<{
    __typename?: "EtchCommentAdded";
    id: any;
    tokenId: any;
    commentId: any;
    comment_commentIpfsCid: string;
    comment_timestamp: any;
  }> | null;
  transfers?: Array<{ __typename?: "EtchTransfer"; id: any; from: any; to: any; tokenId: any }> | null;
  approvals?: Array<{ __typename?: "EtchApproval"; id: any; owner: any; approved: any; tokenId: any }> | null;
} & { " $fragmentName"?: "FullEtchFragmentFragment" };

export type EtchQueryVariables = Exact<{
  etchId: Scalars["BigInt"]["input"];
}>;

export type EtchQuery = {
  __typename?: "Query";
  etches: Array<{ __typename?: "Etch" } & { " $fragmentRefs"?: { FullEtchFragmentFragment: FullEtchFragmentFragment } }>;
};

export type TeamEtchesQueryVariables = Exact<{
  teamId: Scalars["BigInt"]["input"];
}>;

export type TeamEtchesQuery = {
  __typename?: "Query";
  teams: Array<{
    __typename?: "Team";
    id: string;
    ownership: {
      __typename?: "TeamOwnership";
      owner?: { __typename?: "Wallet"; id: any; etchENS: Array<{ __typename?: "EtchENS"; id: string; name: string }> } | null;
      organisation?: { __typename?: "Organisation"; id: string; orgId: any; name?: string | null } | null;
    };
    permissions?: Array<{ __typename?: "TeamPermission"; id: string; wallet: { __typename?: "Wallet"; id: any } }> | null;
    managedEtches?: Array<{
      __typename?: "EtchOwnership";
      id: string;
      etch: {
        __typename?: "Etch";
        id: string;
        tokenId: any;
        createdAt: any;
        documentName: string;
        ownership: {
          __typename?: "EtchOwnership";
          id: string;
          owner?: { __typename?: "Wallet"; id: any; etchENS: Array<{ __typename?: "EtchENS"; id: string; name: string }> } | null;
          team?: { __typename?: "Team"; id: string; name?: string | null } | null;
        };
      };
    }> | null;
  }>;
};

export type EtchFragmentFragment = {
  __typename?: "Etch";
  id: string;
  tokenId: any;
  createdAt: any;
  documentName: string;
  description?: string | null;
  ownership: {
    __typename?: "EtchOwnership";
    id: string;
    owner?: { __typename?: "Wallet"; id: any; etchENS: Array<{ __typename?: "EtchENS"; id: string; name: string }> } | null;
    team?: { __typename?: "Team"; id: string; teamId: any; name?: string | null } | null;
  };
} & { " $fragmentName"?: "EtchFragmentFragment" };

export type EtchesQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type EtchesQuery = {
  __typename?: "Query";
  etches: Array<{ __typename?: "Etch"; id: string } & { " $fragmentRefs"?: { EtchFragmentFragment: EtchFragmentFragment } }>;
  teams: Array<{
    __typename?: "Team";
    id: string;
    managedEtches?: Array<{
      __typename?: "EtchOwnership";
      id: string;
      etch: { __typename?: "Etch" } & { " $fragmentRefs"?: { EtchFragmentFragment: EtchFragmentFragment } };
    }> | null;
  }>;
  organisations: Array<{
    __typename?: "Organisation";
    id: string;
    managedTeams?: Array<{
      __typename?: "TeamOwnership";
      id: string;
      team: {
        __typename?: "Team";
        id: string;
        managedEtches?: Array<{
          __typename?: "EtchOwnership";
          id: string;
          etch: { __typename?: "Etch" } & { " $fragmentRefs"?: { EtchFragmentFragment: EtchFragmentFragment } };
        }> | null;
      };
    }> | null;
  }>;
};

export type OrgQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type OrgQuery = {
  __typename?: "Query";
  organisation?: {
    __typename?: "Organisation";
    permissions?: Array<{
      __typename?: "OrganisationPermission";
      permissionLevel: number;
      wallet: { __typename?: "Wallet"; id: any; etchENS: Array<{ __typename?: "EtchENS"; name: string }> };
    }> | null;
  } | null;
};

export type TeamFragmentFragment = {
  __typename?: "Team";
  id: string;
  teamId: any;
  name?: string | null;
  createdAt: any;
  ownership: {
    __typename?: "TeamOwnership";
    id: string;
    organisation?: { __typename?: "Organisation"; id: string; name?: string | null; orgId: any } | null;
  };
  permissions?: Array<{
    __typename?: "TeamPermission";
    permissionLevel: number;
    wallet: { __typename?: "Wallet"; id: any; etchENS: Array<{ __typename?: "EtchENS"; name: string }> };
  }> | null;
} & { " $fragmentName"?: "TeamFragmentFragment" };

export type TeamsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type TeamsQuery = {
  __typename?: "Query";
  teams: Array<{ __typename?: "Team" } & { " $fragmentRefs"?: { TeamFragmentFragment: TeamFragmentFragment } }>;
  organisations: Array<{
    __typename?: "Organisation";
    id: string;
    managedTeams?: Array<{
      __typename?: "TeamOwnership";
      id: string;
      team: { __typename?: "Team" } & { " $fragmentRefs"?: { TeamFragmentFragment: TeamFragmentFragment } };
    }> | null;
  }>;
};

export type UsersQueryVariables = Exact<{
  input?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UsersQuery = {
  __typename?: "Query";
  wallets: Array<{ __typename?: "Wallet"; id: any; etchENS: Array<{ __typename?: "EtchENS"; name: string }> }>;
};

export type SearchQueryVariables = Exact<{
  input?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type SearchQuery = {
  __typename?: "Query";
  etches: Array<{
    __typename?: "Etch";
    id: string;
    tokenId: any;
    documentName: string;
    ownership: {
      __typename?: "EtchOwnership";
      owner?: { __typename?: "Wallet"; etchENS: Array<{ __typename?: "EtchENS"; name: string }> } | null;
    };
  }>;
  wallets: Array<{ __typename?: "Wallet"; id: any; etchENS: Array<{ __typename?: "EtchENS"; name: string }> }>;
  teams: Array<{ __typename?: "Team"; id: string; teamId: any; name?: string | null }>;
  organisations: Array<{ __typename?: "Organisation"; id: string; orgId: any; name?: string | null }>;
};

export const FullEtchFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FullEtchFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Etch" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "tokenId" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "documentName" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "ipfsCid" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ownership" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "etch" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "documentName" } },
                      { kind: "Field", name: { kind: "Name", value: "ipfsCid" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "owner" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "etchENS" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "teamId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "permissions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "etch" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "documentName" } },
                      { kind: "Field", name: { kind: "Name", value: "ipfsCid" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "wallet" },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }] },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }] },
                },
                { kind: "Field", name: { kind: "Name", value: "permissionLevel" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "comments" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "commentId" } },
                { kind: "Field", name: { kind: "Name", value: "comment_commentIpfsCid" } },
                { kind: "Field", name: { kind: "Name", value: "comment_timestamp" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "transfers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "from" } },
                { kind: "Field", name: { kind: "Name", value: "to" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "approvals" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "owner" } },
                { kind: "Field", name: { kind: "Name", value: "approved" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FullEtchFragmentFragment, unknown>;
export const EtchFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EtchFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Etch" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "tokenId" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "documentName" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ownership" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "owner" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "etchENS" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "teamId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EtchFragmentFragment, unknown>;
export const TeamFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Team" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "teamId" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ownership" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "organisation" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "orgId" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "permissions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "permissionLevel" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "wallet" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "etchENS" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeamFragmentFragment, unknown>;
export const OrganisationsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Organisations" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "address" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organisations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "ownership_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "owner" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "address" } },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "permissions_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "wallet" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "address" } },
                                    },
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "permissionLevel_gt" },
                                      value: { kind: "IntValue", value: "0" },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "orgId" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OrganisationsQuery, OrganisationsQueryVariables>;
export const EtchDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Etch" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "etchId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "etches" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tokenId" },
                      value: { kind: "Variable", name: { kind: "Name", value: "etchId" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "FullEtchFragment" } }],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "FullEtchFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Etch" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "tokenId" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "documentName" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "ipfsCid" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ownership" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "etch" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "documentName" } },
                      { kind: "Field", name: { kind: "Name", value: "ipfsCid" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "owner" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "etchENS" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "teamId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "permissions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "etch" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                      { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                      { kind: "Field", name: { kind: "Name", value: "documentName" } },
                      { kind: "Field", name: { kind: "Name", value: "ipfsCid" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "wallet" },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }] },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }] },
                },
                { kind: "Field", name: { kind: "Name", value: "permissionLevel" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "comments" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "commentId" } },
                { kind: "Field", name: { kind: "Name", value: "comment_commentIpfsCid" } },
                { kind: "Field", name: { kind: "Name", value: "comment_timestamp" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "transfers" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "from" } },
                { kind: "Field", name: { kind: "Name", value: "to" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "approvals" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "owner" } },
                { kind: "Field", name: { kind: "Name", value: "approved" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EtchQuery, EtchQueryVariables>;
export const TeamEtchesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "TeamEtches" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "BigInt" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teams" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "teamId" },
                      value: { kind: "Variable", name: { kind: "Name", value: "teamId" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "ownership" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "etchENS" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  { kind: "Field", name: { kind: "Name", value: "name" } },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "organisation" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "orgId" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "permissions" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "permissionLevel_gt" },
                            value: { kind: "IntValue", value: "0" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "wallet" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "id" } }],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "managedEtches" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "etch" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                            { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                            { kind: "Field", name: { kind: "Name", value: "documentName" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "ownership" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "owner" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "etchENS" },
                                          selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [
                                              { kind: "Field", name: { kind: "Name", value: "id" } },
                                              { kind: "Field", name: { kind: "Name", value: "name" } },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "team" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        { kind: "Field", name: { kind: "Name", value: "id" } },
                                        { kind: "Field", name: { kind: "Name", value: "name" } },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeamEtchesQuery, TeamEtchesQueryVariables>;
export const EtchesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Etches" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "userId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "etches" },
            arguments: [
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "100" } },
              { kind: "Argument", name: { kind: "Name", value: "orderBy" }, value: { kind: "EnumValue", value: "createdAt" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "ownership_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "owner" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "permissions_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "wallet" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "FragmentSpread", name: { kind: "Name", value: "EtchFragment" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "teams" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "ownership_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "owner" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "permissions_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "wallet" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                                    },
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "permissionLevel_gt" },
                                      value: { kind: "IntValue", value: "0" },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "managedEtches" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "etch" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "EtchFragment" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "organisations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "ownership_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "owner" },
                            value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "managedTeams" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "team" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "managedEtches" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  { kind: "Field", name: { kind: "Name", value: "id" } },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "etch" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "EtchFragment" } }],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "EtchFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Etch" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "tokenId" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "documentName" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ownership" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "owner" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "etchENS" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "name" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "team" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "teamId" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EtchesQuery, EtchesQueryVariables>;
export const OrgDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Org" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "organisation" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: { kind: "Variable", name: { kind: "Name", value: "id" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "permissions" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "wallet" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "etchENS" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                              },
                            },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "permissionLevel" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OrgQuery, OrgQueryVariables>;
export const TeamsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Teams" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "userId" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teams" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "ownership_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "owner" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "permissions_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "wallet" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                                    },
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "permissionLevel_gt" },
                                      value: { kind: "IntValue", value: "0" },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamFragment" } }],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "organisations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "or" },
                      value: {
                        kind: "ListValue",
                        values: [
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "ownership_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "owner" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                          {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "permissions_" },
                                value: {
                                  kind: "ObjectValue",
                                  fields: [
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "wallet" },
                                      value: { kind: "Variable", name: { kind: "Name", value: "userId" } },
                                    },
                                    {
                                      kind: "ObjectField",
                                      name: { kind: "Name", value: "permissionLevel_gt" },
                                      value: { kind: "IntValue", value: "0" },
                                    },
                                  ],
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "managedTeams" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "team" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "FragmentSpread", name: { kind: "Name", value: "TeamFragment" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "TeamFragment" },
      typeCondition: { kind: "NamedType", name: { kind: "Name", value: "Team" } },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "teamId" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ownership" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "organisation" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "orgId" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "permissions" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "permissionLevel" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "wallet" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "etchENS" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TeamsQuery, TeamsQueryVariables>;
export const UsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Users" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "wallets" },
            arguments: [
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "15" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "etchENS_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name_contains_nocase" },
                            value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "etchENS" },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }] },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const SearchDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Search" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "input" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "etches" },
            arguments: [
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "2" } },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "documentName_contains_nocase" },
                      value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                    },
                  ],
                },
              },
              { kind: "Argument", name: { kind: "Name", value: "orderDirection" }, value: { kind: "EnumValue", value: "desc" } },
              { kind: "Argument", name: { kind: "Name", value: "orderBy" }, value: { kind: "EnumValue", value: "createdAt" } },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "tokenId" } },
                { kind: "Field", name: { kind: "Name", value: "documentName" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "ownership" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "owner" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "etchENS" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "wallets" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "etchENS_" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "name_contains_nocase" },
                            value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "2" } },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "etchENS" },
                  selectionSet: { kind: "SelectionSet", selections: [{ kind: "Field", name: { kind: "Name", value: "name" } }] },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "teams" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name_contains_nocase" },
                      value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                    },
                  ],
                },
              },
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "2" } },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "teamId" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "organisations" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name_contains_nocase" },
                      value: { kind: "Variable", name: { kind: "Name", value: "input" } },
                    },
                  ],
                },
              },
              { kind: "Argument", name: { kind: "Name", value: "first" }, value: { kind: "IntValue", value: "2" } },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "orgId" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SearchQuery, SearchQueryVariables>;
