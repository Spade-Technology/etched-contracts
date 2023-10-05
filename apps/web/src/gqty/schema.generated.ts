/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
  /** 8 bytes signed integer */
  Int8: any;
}

export interface BlockChangedFilter {
  number_gte: Scalars["Int"];
}

export interface Block_height {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
}

export interface EtchApprovalForAll_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchApprovalForAll_filter>>>;
  approved?: InputMaybe<Scalars["Boolean"]>;
  approved_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  approved_not?: InputMaybe<Scalars["Boolean"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  etch?: InputMaybe<Scalars["String"]>;
  etch_?: InputMaybe<Etch_filter>;
  etch_contains?: InputMaybe<Scalars["String"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_gt?: InputMaybe<Scalars["String"]>;
  etch_gte?: InputMaybe<Scalars["String"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_lt?: InputMaybe<Scalars["String"]>;
  etch_lte?: InputMaybe<Scalars["String"]>;
  etch_not?: InputMaybe<Scalars["String"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  operator?: InputMaybe<Scalars["Bytes"]>;
  operator_contains?: InputMaybe<Scalars["Bytes"]>;
  operator_gt?: InputMaybe<Scalars["Bytes"]>;
  operator_gte?: InputMaybe<Scalars["Bytes"]>;
  operator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  operator_lt?: InputMaybe<Scalars["Bytes"]>;
  operator_lte?: InputMaybe<Scalars["Bytes"]>;
  operator_not?: InputMaybe<Scalars["Bytes"]>;
  operator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  operator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchApprovalForAll_filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchApprovalForAll_orderBy {
  approved = "approved",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  etch = "etch",
  etch__createdAt = "etch__createdAt",
  etch__documentName = "etch__documentName",
  etch__id = "etch__id",
  etch__ipfsCid = "etch__ipfsCid",
  etch__tokenId = "etch__tokenId",
  id = "id",
  operator = "operator",
  owner = "owner",
  transactionHash = "transactionHash",
}

export interface EtchApproval_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchApproval_filter>>>;
  approved?: InputMaybe<Scalars["Bytes"]>;
  approved_contains?: InputMaybe<Scalars["Bytes"]>;
  approved_gt?: InputMaybe<Scalars["Bytes"]>;
  approved_gte?: InputMaybe<Scalars["Bytes"]>;
  approved_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  approved_lt?: InputMaybe<Scalars["Bytes"]>;
  approved_lte?: InputMaybe<Scalars["Bytes"]>;
  approved_not?: InputMaybe<Scalars["Bytes"]>;
  approved_not_contains?: InputMaybe<Scalars["Bytes"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  etch?: InputMaybe<Scalars["String"]>;
  etch_?: InputMaybe<Etch_filter>;
  etch_contains?: InputMaybe<Scalars["String"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_gt?: InputMaybe<Scalars["String"]>;
  etch_gte?: InputMaybe<Scalars["String"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_lt?: InputMaybe<Scalars["String"]>;
  etch_lte?: InputMaybe<Scalars["String"]>;
  etch_not?: InputMaybe<Scalars["String"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchApproval_filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchApproval_orderBy {
  approved = "approved",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  etch = "etch",
  etch__createdAt = "etch__createdAt",
  etch__documentName = "etch__documentName",
  etch__id = "etch__id",
  etch__ipfsCid = "etch__ipfsCid",
  etch__tokenId = "etch__tokenId",
  id = "id",
  owner = "owner",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface EtchCommentAdded_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchCommentAdded_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  commentId?: InputMaybe<Scalars["BigInt"]>;
  commentId_gt?: InputMaybe<Scalars["BigInt"]>;
  commentId_gte?: InputMaybe<Scalars["BigInt"]>;
  commentId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  commentId_lt?: InputMaybe<Scalars["BigInt"]>;
  commentId_lte?: InputMaybe<Scalars["BigInt"]>;
  commentId_not?: InputMaybe<Scalars["BigInt"]>;
  commentId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  comment_commentIpfsCid?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_contains?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_contains_nocase?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_ends_with?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_gt?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_gte?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_in?: InputMaybe<Array<Scalars["String"]>>;
  comment_commentIpfsCid_lt?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_lte?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_not?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_not_contains?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_not_ends_with?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_not_in?: InputMaybe<Array<Scalars["String"]>>;
  comment_commentIpfsCid_not_starts_with?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_starts_with?: InputMaybe<Scalars["String"]>;
  comment_commentIpfsCid_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  comment_timestamp?: InputMaybe<Scalars["BigInt"]>;
  comment_timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  comment_timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  comment_timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  comment_timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  comment_timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  comment_timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  comment_timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  etch?: InputMaybe<Scalars["String"]>;
  etch_?: InputMaybe<Etch_filter>;
  etch_contains?: InputMaybe<Scalars["String"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_gt?: InputMaybe<Scalars["String"]>;
  etch_gte?: InputMaybe<Scalars["String"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_lt?: InputMaybe<Scalars["String"]>;
  etch_lte?: InputMaybe<Scalars["String"]>;
  etch_not?: InputMaybe<Scalars["String"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchCommentAdded_filter>>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchCommentAdded_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  commentId = "commentId",
  comment_commentIpfsCid = "comment_commentIpfsCid",
  comment_timestamp = "comment_timestamp",
  etch = "etch",
  etch__createdAt = "etch__createdAt",
  etch__documentName = "etch__documentName",
  etch__id = "etch__id",
  etch__ipfsCid = "etch__ipfsCid",
  etch__tokenId = "etch__tokenId",
  id = "id",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface EtchCreated_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchCreated_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchCreated_filter>>>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchCreated_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  to = "to",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface EtchENSCreated_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchENSCreated_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<EtchENSCreated_filter>>>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchENSCreated_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  name = "name",
  to = "to",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface EtchENSTransfer_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchENSTransfer_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  from?: InputMaybe<Scalars["Bytes"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]>;
  from_not?: InputMaybe<Scalars["Bytes"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchENSTransfer_filter>>>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchENSTransfer_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  from = "from",
  id = "id",
  to = "to",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface EtchENS_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchENS_filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<EtchENS_filter>>>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_?: InputMaybe<Wallet_filter>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
}

export enum EtchENS_orderBy {
  id = "id",
  name = "name",
  owner = "owner",
  owner__id = "owner__id",
  tokenId = "tokenId",
}

export interface EtchOwnershipTransferred_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchOwnershipTransferred_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newOwner?: InputMaybe<Scalars["Bytes"]>;
  newOwner_contains?: InputMaybe<Scalars["Bytes"]>;
  newOwner_gt?: InputMaybe<Scalars["Bytes"]>;
  newOwner_gte?: InputMaybe<Scalars["Bytes"]>;
  newOwner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newOwner_lt?: InputMaybe<Scalars["Bytes"]>;
  newOwner_lte?: InputMaybe<Scalars["Bytes"]>;
  newOwner_not?: InputMaybe<Scalars["Bytes"]>;
  newOwner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  newOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchOwnershipTransferred_filter>>>;
  previousOwner?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_contains?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_gt?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_gte?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  previousOwner_lt?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_lte?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_not?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchOwnershipTransferred_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  newOwner = "newOwner",
  previousOwner = "previousOwner",
  transactionHash = "transactionHash",
}

export interface EtchOwnership_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchOwnership_filter>>>;
  etch?: InputMaybe<Scalars["String"]>;
  etch_?: InputMaybe<Etch_filter>;
  etch_contains?: InputMaybe<Scalars["String"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_gt?: InputMaybe<Scalars["String"]>;
  etch_gte?: InputMaybe<Scalars["String"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_lt?: InputMaybe<Scalars["String"]>;
  etch_lte?: InputMaybe<Scalars["String"]>;
  etch_not?: InputMaybe<Scalars["String"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchOwnership_filter>>>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_?: InputMaybe<Wallet_filter>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<Scalars["String"]>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum EtchOwnership_orderBy {
  etch = "etch",
  etch__createdAt = "etch__createdAt",
  etch__documentName = "etch__documentName",
  etch__id = "etch__id",
  etch__ipfsCid = "etch__ipfsCid",
  etch__tokenId = "etch__tokenId",
  id = "id",
  owner = "owner",
  owner__id = "owner__id",
  team = "team",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
}

export interface EtchPermission_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchPermission_filter>>>;
  etch?: InputMaybe<Scalars["String"]>;
  etch_?: InputMaybe<Etch_filter>;
  etch_contains?: InputMaybe<Scalars["String"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_gt?: InputMaybe<Scalars["String"]>;
  etch_gte?: InputMaybe<Scalars["String"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_lt?: InputMaybe<Scalars["String"]>;
  etch_lte?: InputMaybe<Scalars["String"]>;
  etch_not?: InputMaybe<Scalars["String"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchPermission_filter>>>;
  permissionLevel?: InputMaybe<Scalars["Int"]>;
  permissionLevel_gt?: InputMaybe<Scalars["Int"]>;
  permissionLevel_gte?: InputMaybe<Scalars["Int"]>;
  permissionLevel_in?: InputMaybe<Array<Scalars["Int"]>>;
  permissionLevel_lt?: InputMaybe<Scalars["Int"]>;
  permissionLevel_lte?: InputMaybe<Scalars["Int"]>;
  permissionLevel_not?: InputMaybe<Scalars["Int"]>;
  permissionLevel_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  team?: InputMaybe<Scalars["String"]>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet?: InputMaybe<Scalars["String"]>;
  wallet_?: InputMaybe<Wallet_filter>;
  wallet_contains?: InputMaybe<Scalars["String"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_gt?: InputMaybe<Scalars["String"]>;
  wallet_gte?: InputMaybe<Scalars["String"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]>;
  wallet_lte?: InputMaybe<Scalars["String"]>;
  wallet_not?: InputMaybe<Scalars["String"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum EtchPermission_orderBy {
  etch = "etch",
  etch__createdAt = "etch__createdAt",
  etch__documentName = "etch__documentName",
  etch__id = "etch__id",
  etch__ipfsCid = "etch__ipfsCid",
  etch__tokenId = "etch__tokenId",
  id = "id",
  permissionLevel = "permissionLevel",
  team = "team",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
  wallet = "wallet",
  wallet__id = "wallet__id",
}

export interface EtchPermissionsUpdated_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]>;
  account_not?: InputMaybe<Scalars["Bytes"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<EtchPermissionsUpdated_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newPermission?: InputMaybe<Scalars["Int"]>;
  newPermission_gt?: InputMaybe<Scalars["Int"]>;
  newPermission_gte?: InputMaybe<Scalars["Int"]>;
  newPermission_in?: InputMaybe<Array<Scalars["Int"]>>;
  newPermission_lt?: InputMaybe<Scalars["Int"]>;
  newPermission_lte?: InputMaybe<Scalars["Int"]>;
  newPermission_not?: InputMaybe<Scalars["Int"]>;
  newPermission_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchPermissionsUpdated_filter>>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchPermissionsUpdated_orderBy {
  account = "account",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  newPermission = "newPermission",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface EtchTeamPermissionsUpdated_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchTeamPermissionsUpdated_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newPermission?: InputMaybe<Scalars["Int"]>;
  newPermission_gt?: InputMaybe<Scalars["Int"]>;
  newPermission_gte?: InputMaybe<Scalars["Int"]>;
  newPermission_in?: InputMaybe<Array<Scalars["Int"]>>;
  newPermission_lt?: InputMaybe<Scalars["Int"]>;
  newPermission_lte?: InputMaybe<Scalars["Int"]>;
  newPermission_not?: InputMaybe<Scalars["Int"]>;
  newPermission_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchTeamPermissionsUpdated_filter>>>;
  teamId?: InputMaybe<Scalars["BigInt"]>;
  teamId_gt?: InputMaybe<Scalars["BigInt"]>;
  teamId_gte?: InputMaybe<Scalars["BigInt"]>;
  teamId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  teamId_lt?: InputMaybe<Scalars["BigInt"]>;
  teamId_lte?: InputMaybe<Scalars["BigInt"]>;
  teamId_not?: InputMaybe<Scalars["BigInt"]>;
  teamId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchTeamPermissionsUpdated_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  newPermission = "newPermission",
  teamId = "teamId",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface EtchTransfer_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchTransfer_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  etch?: InputMaybe<Scalars["String"]>;
  etch_?: InputMaybe<Etch_filter>;
  etch_contains?: InputMaybe<Scalars["String"]>;
  etch_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_ends_with?: InputMaybe<Scalars["String"]>;
  etch_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_gt?: InputMaybe<Scalars["String"]>;
  etch_gte?: InputMaybe<Scalars["String"]>;
  etch_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_lt?: InputMaybe<Scalars["String"]>;
  etch_lte?: InputMaybe<Scalars["String"]>;
  etch_not?: InputMaybe<Scalars["String"]>;
  etch_not_contains?: InputMaybe<Scalars["String"]>;
  etch_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with?: InputMaybe<Scalars["String"]>;
  etch_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_not_in?: InputMaybe<Array<Scalars["String"]>>;
  etch_not_starts_with?: InputMaybe<Scalars["String"]>;
  etch_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  etch_starts_with?: InputMaybe<Scalars["String"]>;
  etch_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from?: InputMaybe<Scalars["Bytes"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]>;
  from_not?: InputMaybe<Scalars["Bytes"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchTransfer_filter>>>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchTransfer_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  etch = "etch",
  etch__createdAt = "etch__createdAt",
  etch__documentName = "etch__documentName",
  etch__id = "etch__id",
  etch__ipfsCid = "etch__ipfsCid",
  etch__tokenId = "etch__tokenId",
  from = "from",
  id = "id",
  to = "to",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface EtchTransferedToTeam_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<EtchTransferedToTeam_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  from?: InputMaybe<Scalars["Bytes"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]>;
  from_not?: InputMaybe<Scalars["Bytes"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<EtchTransferedToTeam_filter>>>;
  to?: InputMaybe<Scalars["BigInt"]>;
  to_gt?: InputMaybe<Scalars["BigInt"]>;
  to_gte?: InputMaybe<Scalars["BigInt"]>;
  to_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to_lt?: InputMaybe<Scalars["BigInt"]>;
  to_lte?: InputMaybe<Scalars["BigInt"]>;
  to_not?: InputMaybe<Scalars["BigInt"]>;
  to_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum EtchTransferedToTeam_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  from = "from",
  id = "id",
  to = "to",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface Etch_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Etch_filter>>>;
  approvals_?: InputMaybe<EtchApproval_filter>;
  comments_?: InputMaybe<EtchCommentAdded_filter>;
  createdAt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  documentName?: InputMaybe<Scalars["String"]>;
  documentName_contains?: InputMaybe<Scalars["String"]>;
  documentName_contains_nocase?: InputMaybe<Scalars["String"]>;
  documentName_ends_with?: InputMaybe<Scalars["String"]>;
  documentName_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  documentName_gt?: InputMaybe<Scalars["String"]>;
  documentName_gte?: InputMaybe<Scalars["String"]>;
  documentName_in?: InputMaybe<Array<Scalars["String"]>>;
  documentName_lt?: InputMaybe<Scalars["String"]>;
  documentName_lte?: InputMaybe<Scalars["String"]>;
  documentName_not?: InputMaybe<Scalars["String"]>;
  documentName_not_contains?: InputMaybe<Scalars["String"]>;
  documentName_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  documentName_not_ends_with?: InputMaybe<Scalars["String"]>;
  documentName_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  documentName_not_in?: InputMaybe<Array<Scalars["String"]>>;
  documentName_not_starts_with?: InputMaybe<Scalars["String"]>;
  documentName_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  documentName_starts_with?: InputMaybe<Scalars["String"]>;
  documentName_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  ipfsCid?: InputMaybe<Scalars["String"]>;
  ipfsCid_contains?: InputMaybe<Scalars["String"]>;
  ipfsCid_contains_nocase?: InputMaybe<Scalars["String"]>;
  ipfsCid_ends_with?: InputMaybe<Scalars["String"]>;
  ipfsCid_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  ipfsCid_gt?: InputMaybe<Scalars["String"]>;
  ipfsCid_gte?: InputMaybe<Scalars["String"]>;
  ipfsCid_in?: InputMaybe<Array<Scalars["String"]>>;
  ipfsCid_lt?: InputMaybe<Scalars["String"]>;
  ipfsCid_lte?: InputMaybe<Scalars["String"]>;
  ipfsCid_not?: InputMaybe<Scalars["String"]>;
  ipfsCid_not_contains?: InputMaybe<Scalars["String"]>;
  ipfsCid_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  ipfsCid_not_ends_with?: InputMaybe<Scalars["String"]>;
  ipfsCid_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  ipfsCid_not_in?: InputMaybe<Array<Scalars["String"]>>;
  ipfsCid_not_starts_with?: InputMaybe<Scalars["String"]>;
  ipfsCid_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  ipfsCid_starts_with?: InputMaybe<Scalars["String"]>;
  ipfsCid_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Etch_filter>>>;
  ownership_?: InputMaybe<EtchOwnership_filter>;
  permissions_?: InputMaybe<EtchPermission_filter>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transfers_?: InputMaybe<EtchTransfer_filter>;
}

export enum Etch_orderBy {
  approvals = "approvals",
  comments = "comments",
  createdAt = "createdAt",
  documentName = "documentName",
  id = "id",
  ipfsCid = "ipfsCid",
  ownership = "ownership",
  ownership__id = "ownership__id",
  permissions = "permissions",
  tokenId = "tokenId",
  transfers = "transfers",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  asc = "asc",
  desc = "desc",
}

export interface OrganisationApprovalForAll_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationApprovalForAll_filter>>>;
  approved?: InputMaybe<Scalars["Boolean"]>;
  approved_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  approved_not?: InputMaybe<Scalars["Boolean"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  operator?: InputMaybe<Scalars["Bytes"]>;
  operator_contains?: InputMaybe<Scalars["Bytes"]>;
  operator_gt?: InputMaybe<Scalars["Bytes"]>;
  operator_gte?: InputMaybe<Scalars["Bytes"]>;
  operator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  operator_lt?: InputMaybe<Scalars["Bytes"]>;
  operator_lte?: InputMaybe<Scalars["Bytes"]>;
  operator_not?: InputMaybe<Scalars["Bytes"]>;
  operator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  operator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationApprovalForAll_filter>>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum OrganisationApprovalForAll_orderBy {
  approved = "approved",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  operator = "operator",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  owner = "owner",
  transactionHash = "transactionHash",
}

export interface OrganisationApproval_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationApproval_filter>>>;
  approved?: InputMaybe<Scalars["Bytes"]>;
  approved_contains?: InputMaybe<Scalars["Bytes"]>;
  approved_gt?: InputMaybe<Scalars["Bytes"]>;
  approved_gte?: InputMaybe<Scalars["Bytes"]>;
  approved_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  approved_lt?: InputMaybe<Scalars["Bytes"]>;
  approved_lte?: InputMaybe<Scalars["Bytes"]>;
  approved_not?: InputMaybe<Scalars["Bytes"]>;
  approved_not_contains?: InputMaybe<Scalars["Bytes"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationApproval_filter>>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  wallet?: InputMaybe<Scalars["String"]>;
  wallet_?: InputMaybe<Wallet_filter>;
  wallet_contains?: InputMaybe<Scalars["String"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_gt?: InputMaybe<Scalars["String"]>;
  wallet_gte?: InputMaybe<Scalars["String"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]>;
  wallet_lte?: InputMaybe<Scalars["String"]>;
  wallet_not?: InputMaybe<Scalars["String"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum OrganisationApproval_orderBy {
  approved = "approved",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  owner = "owner",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
  wallet = "wallet",
  wallet__id = "wallet__id",
}

export interface OrganisationContractOwnershipTransferred_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationContractOwnershipTransferred_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newOwner?: InputMaybe<Scalars["Bytes"]>;
  newOwner_contains?: InputMaybe<Scalars["Bytes"]>;
  newOwner_gt?: InputMaybe<Scalars["Bytes"]>;
  newOwner_gte?: InputMaybe<Scalars["Bytes"]>;
  newOwner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newOwner_lt?: InputMaybe<Scalars["Bytes"]>;
  newOwner_lte?: InputMaybe<Scalars["Bytes"]>;
  newOwner_not?: InputMaybe<Scalars["Bytes"]>;
  newOwner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  newOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationContractOwnershipTransferred_filter>>>;
  previousOwner?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_contains?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_gt?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_gte?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  previousOwner_lt?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_lte?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_not?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum OrganisationContractOwnershipTransferred_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  newOwner = "newOwner",
  previousOwner = "previousOwner",
  transactionHash = "transactionHash",
}

export interface OrganisationCreated_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationCreated_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationCreated_filter>>>;
  orgId?: InputMaybe<Scalars["BigInt"]>;
  orgId_gt?: InputMaybe<Scalars["BigInt"]>;
  orgId_gte?: InputMaybe<Scalars["BigInt"]>;
  orgId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  orgId_lt?: InputMaybe<Scalars["BigInt"]>;
  orgId_lte?: InputMaybe<Scalars["BigInt"]>;
  orgId_not?: InputMaybe<Scalars["BigInt"]>;
  orgId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum OrganisationCreated_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  orgId = "orgId",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  to = "to",
  transactionHash = "transactionHash",
}

export interface OrganisationOwnership_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationOwnership_filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationOwnership_filter>>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_?: InputMaybe<Wallet_filter>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum OrganisationOwnership_orderBy {
  id = "id",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  owner = "owner",
  owner__id = "owner__id",
}

export interface OrganisationPermission_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationPermission_filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationPermission_filter>>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  permissionLevel?: InputMaybe<Scalars["Int"]>;
  permissionLevel_gt?: InputMaybe<Scalars["Int"]>;
  permissionLevel_gte?: InputMaybe<Scalars["Int"]>;
  permissionLevel_in?: InputMaybe<Array<Scalars["Int"]>>;
  permissionLevel_lt?: InputMaybe<Scalars["Int"]>;
  permissionLevel_lte?: InputMaybe<Scalars["Int"]>;
  permissionLevel_not?: InputMaybe<Scalars["Int"]>;
  permissionLevel_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  wallet?: InputMaybe<Scalars["String"]>;
  wallet_?: InputMaybe<Wallet_filter>;
  wallet_contains?: InputMaybe<Scalars["String"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_gt?: InputMaybe<Scalars["String"]>;
  wallet_gte?: InputMaybe<Scalars["String"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]>;
  wallet_lte?: InputMaybe<Scalars["String"]>;
  wallet_not?: InputMaybe<Scalars["String"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum OrganisationPermission_orderBy {
  id = "id",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  permissionLevel = "permissionLevel",
  wallet = "wallet",
  wallet__id = "wallet__id",
}

export interface OrganisationPermissionsUpdated_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]>;
  account_not?: InputMaybe<Scalars["Bytes"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<OrganisationPermissionsUpdated_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newPermission?: InputMaybe<Scalars["Int"]>;
  newPermission_gt?: InputMaybe<Scalars["Int"]>;
  newPermission_gte?: InputMaybe<Scalars["Int"]>;
  newPermission_in?: InputMaybe<Array<Scalars["Int"]>>;
  newPermission_lt?: InputMaybe<Scalars["Int"]>;
  newPermission_lte?: InputMaybe<Scalars["Int"]>;
  newPermission_not?: InputMaybe<Scalars["Int"]>;
  newPermission_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationPermissionsUpdated_filter>>>;
  orgId?: InputMaybe<Scalars["BigInt"]>;
  orgId_gt?: InputMaybe<Scalars["BigInt"]>;
  orgId_gte?: InputMaybe<Scalars["BigInt"]>;
  orgId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  orgId_lt?: InputMaybe<Scalars["BigInt"]>;
  orgId_lte?: InputMaybe<Scalars["BigInt"]>;
  orgId_not?: InputMaybe<Scalars["BigInt"]>;
  orgId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum OrganisationPermissionsUpdated_orderBy {
  account = "account",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  newPermission = "newPermission",
  orgId = "orgId",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  transactionHash = "transactionHash",
}

export interface OrganisationRenamed_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationRenamed_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newName?: InputMaybe<Scalars["String"]>;
  newName_contains?: InputMaybe<Scalars["String"]>;
  newName_contains_nocase?: InputMaybe<Scalars["String"]>;
  newName_ends_with?: InputMaybe<Scalars["String"]>;
  newName_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  newName_gt?: InputMaybe<Scalars["String"]>;
  newName_gte?: InputMaybe<Scalars["String"]>;
  newName_in?: InputMaybe<Array<Scalars["String"]>>;
  newName_lt?: InputMaybe<Scalars["String"]>;
  newName_lte?: InputMaybe<Scalars["String"]>;
  newName_not?: InputMaybe<Scalars["String"]>;
  newName_not_contains?: InputMaybe<Scalars["String"]>;
  newName_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  newName_not_ends_with?: InputMaybe<Scalars["String"]>;
  newName_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  newName_not_in?: InputMaybe<Array<Scalars["String"]>>;
  newName_not_starts_with?: InputMaybe<Scalars["String"]>;
  newName_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  newName_starts_with?: InputMaybe<Scalars["String"]>;
  newName_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<OrganisationRenamed_filter>>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum OrganisationRenamed_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  newName = "newName",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  transactionHash = "transactionHash",
}

export interface OrganisationTransfer_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrganisationTransfer_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  from?: InputMaybe<Scalars["Bytes"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]>;
  from_not?: InputMaybe<Scalars["Bytes"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<OrganisationTransfer_filter>>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum OrganisationTransfer_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  from = "from",
  id = "id",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  to = "to",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface Organisation_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Organisation_filter>>>;
  approvals_?: InputMaybe<OrganisationApproval_filter>;
  createdAt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  managedTeams_?: InputMaybe<TeamOwnership_filter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Organisation_filter>>>;
  orgId?: InputMaybe<Scalars["BigInt"]>;
  orgId_gt?: InputMaybe<Scalars["BigInt"]>;
  orgId_gte?: InputMaybe<Scalars["BigInt"]>;
  orgId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  orgId_lt?: InputMaybe<Scalars["BigInt"]>;
  orgId_lte?: InputMaybe<Scalars["BigInt"]>;
  orgId_not?: InputMaybe<Scalars["BigInt"]>;
  orgId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  ownership_?: InputMaybe<OrganisationOwnership_filter>;
  permissions_?: InputMaybe<OrganisationPermission_filter>;
  transfers_?: InputMaybe<OrganisationTransfer_filter>;
}

export enum Organisation_orderBy {
  approvals = "approvals",
  createdAt = "createdAt",
  id = "id",
  managedTeams = "managedTeams",
  name = "name",
  orgId = "orgId",
  ownership = "ownership",
  ownership__id = "ownership__id",
  permissions = "permissions",
  transfers = "transfers",
}

export interface TeamApprovalForAll_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamApprovalForAll_filter>>>;
  approved?: InputMaybe<Scalars["Boolean"]>;
  approved_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  approved_not?: InputMaybe<Scalars["Boolean"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Boolean"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  operator?: InputMaybe<Scalars["Bytes"]>;
  operator_contains?: InputMaybe<Scalars["Bytes"]>;
  operator_gt?: InputMaybe<Scalars["Bytes"]>;
  operator_gte?: InputMaybe<Scalars["Bytes"]>;
  operator_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  operator_lt?: InputMaybe<Scalars["Bytes"]>;
  operator_lte?: InputMaybe<Scalars["Bytes"]>;
  operator_not?: InputMaybe<Scalars["Bytes"]>;
  operator_not_contains?: InputMaybe<Scalars["Bytes"]>;
  operator_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamApprovalForAll_filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  team?: InputMaybe<Scalars["String"]>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum TeamApprovalForAll_orderBy {
  approved = "approved",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  operator = "operator",
  owner = "owner",
  team = "team",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
  transactionHash = "transactionHash",
}

export interface TeamApproval_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamApproval_filter>>>;
  approved?: InputMaybe<Scalars["Bytes"]>;
  approved_contains?: InputMaybe<Scalars["Bytes"]>;
  approved_gt?: InputMaybe<Scalars["Bytes"]>;
  approved_gte?: InputMaybe<Scalars["Bytes"]>;
  approved_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  approved_lt?: InputMaybe<Scalars["Bytes"]>;
  approved_lte?: InputMaybe<Scalars["Bytes"]>;
  approved_not?: InputMaybe<Scalars["Bytes"]>;
  approved_not_contains?: InputMaybe<Scalars["Bytes"]>;
  approved_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamApproval_filter>>>;
  owner?: InputMaybe<Scalars["Bytes"]>;
  owner_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_gt?: InputMaybe<Scalars["Bytes"]>;
  owner_gte?: InputMaybe<Scalars["Bytes"]>;
  owner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  owner_lt?: InputMaybe<Scalars["Bytes"]>;
  owner_lte?: InputMaybe<Scalars["Bytes"]>;
  owner_not?: InputMaybe<Scalars["Bytes"]>;
  owner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  owner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  team?: InputMaybe<Scalars["String"]>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  wallet?: InputMaybe<Scalars["String"]>;
  wallet_?: InputMaybe<Wallet_filter>;
  wallet_contains?: InputMaybe<Scalars["String"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_gt?: InputMaybe<Scalars["String"]>;
  wallet_gte?: InputMaybe<Scalars["String"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]>;
  wallet_lte?: InputMaybe<Scalars["String"]>;
  wallet_not?: InputMaybe<Scalars["String"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum TeamApproval_orderBy {
  approved = "approved",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  owner = "owner",
  team = "team",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
  wallet = "wallet",
  wallet__id = "wallet__id",
}

export interface TeamCreated_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamCreated_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamCreated_filter>>>;
  team?: InputMaybe<Scalars["String"]>;
  teamId?: InputMaybe<Scalars["BigInt"]>;
  teamId_gt?: InputMaybe<Scalars["BigInt"]>;
  teamId_gte?: InputMaybe<Scalars["BigInt"]>;
  teamId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  teamId_lt?: InputMaybe<Scalars["BigInt"]>;
  teamId_lte?: InputMaybe<Scalars["BigInt"]>;
  teamId_not?: InputMaybe<Scalars["BigInt"]>;
  teamId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum TeamCreated_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  team = "team",
  teamId = "teamId",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
  to = "to",
  transactionHash = "transactionHash",
}

export interface TeamOwnershipTransferred_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamOwnershipTransferred_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newOwner?: InputMaybe<Scalars["Bytes"]>;
  newOwner_contains?: InputMaybe<Scalars["Bytes"]>;
  newOwner_gt?: InputMaybe<Scalars["Bytes"]>;
  newOwner_gte?: InputMaybe<Scalars["Bytes"]>;
  newOwner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newOwner_lt?: InputMaybe<Scalars["Bytes"]>;
  newOwner_lte?: InputMaybe<Scalars["Bytes"]>;
  newOwner_not?: InputMaybe<Scalars["Bytes"]>;
  newOwner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  newOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamOwnershipTransferred_filter>>>;
  previousOwner?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_contains?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_gt?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_gte?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  previousOwner_lt?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_lte?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_not?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_not_contains?: InputMaybe<Scalars["Bytes"]>;
  previousOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum TeamOwnershipTransferred_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  newOwner = "newOwner",
  previousOwner = "previousOwner",
  transactionHash = "transactionHash",
}

export interface TeamOwnership_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamOwnership_filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamOwnership_filter>>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_?: InputMaybe<Wallet_filter>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<Scalars["String"]>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum TeamOwnership_orderBy {
  id = "id",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  owner = "owner",
  owner__id = "owner__id",
  team = "team",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
}

export interface TeamPermission_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamPermission_filter>>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamPermission_filter>>>;
  permissionLevel?: InputMaybe<Scalars["Int"]>;
  permissionLevel_gt?: InputMaybe<Scalars["Int"]>;
  permissionLevel_gte?: InputMaybe<Scalars["Int"]>;
  permissionLevel_in?: InputMaybe<Array<Scalars["Int"]>>;
  permissionLevel_lt?: InputMaybe<Scalars["Int"]>;
  permissionLevel_lte?: InputMaybe<Scalars["Int"]>;
  permissionLevel_not?: InputMaybe<Scalars["Int"]>;
  permissionLevel_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  team?: InputMaybe<Scalars["String"]>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet?: InputMaybe<Scalars["String"]>;
  wallet_?: InputMaybe<Wallet_filter>;
  wallet_contains?: InputMaybe<Scalars["String"]>;
  wallet_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_gt?: InputMaybe<Scalars["String"]>;
  wallet_gte?: InputMaybe<Scalars["String"]>;
  wallet_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_lt?: InputMaybe<Scalars["String"]>;
  wallet_lte?: InputMaybe<Scalars["String"]>;
  wallet_not?: InputMaybe<Scalars["String"]>;
  wallet_not_contains?: InputMaybe<Scalars["String"]>;
  wallet_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with?: InputMaybe<Scalars["String"]>;
  wallet_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_not_in?: InputMaybe<Array<Scalars["String"]>>;
  wallet_not_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  wallet_starts_with?: InputMaybe<Scalars["String"]>;
  wallet_starts_with_nocase?: InputMaybe<Scalars["String"]>;
}

export enum TeamPermission_orderBy {
  id = "id",
  permissionLevel = "permissionLevel",
  team = "team",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
  wallet = "wallet",
  wallet__id = "wallet__id",
}

export interface TeamPermissionsUpdated_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["Bytes"]>;
  account_contains?: InputMaybe<Scalars["Bytes"]>;
  account_gt?: InputMaybe<Scalars["Bytes"]>;
  account_gte?: InputMaybe<Scalars["Bytes"]>;
  account_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  account_lt?: InputMaybe<Scalars["Bytes"]>;
  account_lte?: InputMaybe<Scalars["Bytes"]>;
  account_not?: InputMaybe<Scalars["Bytes"]>;
  account_not_contains?: InputMaybe<Scalars["Bytes"]>;
  account_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  and?: InputMaybe<Array<InputMaybe<TeamPermissionsUpdated_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newPermission?: InputMaybe<Scalars["Int"]>;
  newPermission_gt?: InputMaybe<Scalars["Int"]>;
  newPermission_gte?: InputMaybe<Scalars["Int"]>;
  newPermission_in?: InputMaybe<Array<Scalars["Int"]>>;
  newPermission_lt?: InputMaybe<Scalars["Int"]>;
  newPermission_lte?: InputMaybe<Scalars["Int"]>;
  newPermission_not?: InputMaybe<Scalars["Int"]>;
  newPermission_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamPermissionsUpdated_filter>>>;
  team?: InputMaybe<Scalars["String"]>;
  teamId?: InputMaybe<Scalars["BigInt"]>;
  teamId_gt?: InputMaybe<Scalars["BigInt"]>;
  teamId_gte?: InputMaybe<Scalars["BigInt"]>;
  teamId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  teamId_lt?: InputMaybe<Scalars["BigInt"]>;
  teamId_lte?: InputMaybe<Scalars["BigInt"]>;
  teamId_not?: InputMaybe<Scalars["BigInt"]>;
  teamId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum TeamPermissionsUpdated_orderBy {
  account = "account",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  newPermission = "newPermission",
  team = "team",
  teamId = "teamId",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
  transactionHash = "transactionHash",
}

export interface TeamRenamed_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamRenamed_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  newName?: InputMaybe<Scalars["String"]>;
  newName_contains?: InputMaybe<Scalars["String"]>;
  newName_contains_nocase?: InputMaybe<Scalars["String"]>;
  newName_ends_with?: InputMaybe<Scalars["String"]>;
  newName_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  newName_gt?: InputMaybe<Scalars["String"]>;
  newName_gte?: InputMaybe<Scalars["String"]>;
  newName_in?: InputMaybe<Array<Scalars["String"]>>;
  newName_lt?: InputMaybe<Scalars["String"]>;
  newName_lte?: InputMaybe<Scalars["String"]>;
  newName_not?: InputMaybe<Scalars["String"]>;
  newName_not_contains?: InputMaybe<Scalars["String"]>;
  newName_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  newName_not_ends_with?: InputMaybe<Scalars["String"]>;
  newName_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  newName_not_in?: InputMaybe<Array<Scalars["String"]>>;
  newName_not_starts_with?: InputMaybe<Scalars["String"]>;
  newName_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  newName_starts_with?: InputMaybe<Scalars["String"]>;
  newName_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<TeamRenamed_filter>>>;
  team?: InputMaybe<Scalars["String"]>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum TeamRenamed_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  newName = "newName",
  team = "team",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
  transactionHash = "transactionHash",
}

export interface TeamTransferToOrganisation_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamTransferToOrganisation_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamTransferToOrganisation_filter>>>;
  orgId?: InputMaybe<Scalars["BigInt"]>;
  orgId_gt?: InputMaybe<Scalars["BigInt"]>;
  orgId_gte?: InputMaybe<Scalars["BigInt"]>;
  orgId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  orgId_lt?: InputMaybe<Scalars["BigInt"]>;
  orgId_lte?: InputMaybe<Scalars["BigInt"]>;
  orgId_not?: InputMaybe<Scalars["BigInt"]>;
  orgId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  organisation?: InputMaybe<Scalars["String"]>;
  organisation_?: InputMaybe<Organisation_filter>;
  organisation_contains?: InputMaybe<Scalars["String"]>;
  organisation_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_gt?: InputMaybe<Scalars["String"]>;
  organisation_gte?: InputMaybe<Scalars["String"]>;
  organisation_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_lt?: InputMaybe<Scalars["String"]>;
  organisation_lte?: InputMaybe<Scalars["String"]>;
  organisation_not?: InputMaybe<Scalars["String"]>;
  organisation_not_contains?: InputMaybe<Scalars["String"]>;
  organisation_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with?: InputMaybe<Scalars["String"]>;
  organisation_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_not_in?: InputMaybe<Array<Scalars["String"]>>;
  organisation_not_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  organisation_starts_with?: InputMaybe<Scalars["String"]>;
  organisation_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team?: InputMaybe<Scalars["String"]>;
  teamId?: InputMaybe<Scalars["BigInt"]>;
  teamId_gt?: InputMaybe<Scalars["BigInt"]>;
  teamId_gte?: InputMaybe<Scalars["BigInt"]>;
  teamId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  teamId_lt?: InputMaybe<Scalars["BigInt"]>;
  teamId_lte?: InputMaybe<Scalars["BigInt"]>;
  teamId_not?: InputMaybe<Scalars["BigInt"]>;
  teamId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum TeamTransferToOrganisation_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id",
  orgId = "orgId",
  organisation = "organisation",
  organisation__createdAt = "organisation__createdAt",
  organisation__id = "organisation__id",
  organisation__name = "organisation__name",
  organisation__orgId = "organisation__orgId",
  team = "team",
  teamId = "teamId",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
  transactionHash = "transactionHash",
}

export interface TeamTransfer_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TeamTransfer_filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  from?: InputMaybe<Scalars["Bytes"]>;
  from_contains?: InputMaybe<Scalars["Bytes"]>;
  from_gt?: InputMaybe<Scalars["Bytes"]>;
  from_gte?: InputMaybe<Scalars["Bytes"]>;
  from_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  from_lt?: InputMaybe<Scalars["Bytes"]>;
  from_lte?: InputMaybe<Scalars["Bytes"]>;
  from_not?: InputMaybe<Scalars["Bytes"]>;
  from_not_contains?: InputMaybe<Scalars["Bytes"]>;
  from_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<TeamTransfer_filter>>>;
  team?: InputMaybe<Scalars["String"]>;
  team_?: InputMaybe<Team_filter>;
  team_contains?: InputMaybe<Scalars["String"]>;
  team_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_ends_with?: InputMaybe<Scalars["String"]>;
  team_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_gt?: InputMaybe<Scalars["String"]>;
  team_gte?: InputMaybe<Scalars["String"]>;
  team_in?: InputMaybe<Array<Scalars["String"]>>;
  team_lt?: InputMaybe<Scalars["String"]>;
  team_lte?: InputMaybe<Scalars["String"]>;
  team_not?: InputMaybe<Scalars["String"]>;
  team_not_contains?: InputMaybe<Scalars["String"]>;
  team_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  team_not_ends_with?: InputMaybe<Scalars["String"]>;
  team_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  team_not_in?: InputMaybe<Array<Scalars["String"]>>;
  team_not_starts_with?: InputMaybe<Scalars["String"]>;
  team_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  team_starts_with?: InputMaybe<Scalars["String"]>;
  team_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to?: InputMaybe<Scalars["Bytes"]>;
  to_contains?: InputMaybe<Scalars["Bytes"]>;
  to_gt?: InputMaybe<Scalars["Bytes"]>;
  to_gte?: InputMaybe<Scalars["Bytes"]>;
  to_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  to_lt?: InputMaybe<Scalars["Bytes"]>;
  to_lte?: InputMaybe<Scalars["Bytes"]>;
  to_not?: InputMaybe<Scalars["Bytes"]>;
  to_not_contains?: InputMaybe<Scalars["Bytes"]>;
  to_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tokenId?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_gte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tokenId_lt?: InputMaybe<Scalars["BigInt"]>;
  tokenId_lte?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not?: InputMaybe<Scalars["BigInt"]>;
  tokenId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
}

export enum TeamTransfer_orderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  from = "from",
  id = "id",
  team = "team",
  team__createdAt = "team__createdAt",
  team__id = "team__id",
  team__name = "team__name",
  team__teamId = "team__teamId",
  to = "to",
  tokenId = "tokenId",
  transactionHash = "transactionHash",
}

export interface Team_filter {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Team_filter>>>;
  approvals_?: InputMaybe<TeamApproval_filter>;
  createdAt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_gte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  createdAt_lt?: InputMaybe<Scalars["BigInt"]>;
  createdAt_lte?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not?: InputMaybe<Scalars["BigInt"]>;
  createdAt_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  externalEtches_?: InputMaybe<EtchPermission_filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  managedEtches_?: InputMaybe<EtchOwnership_filter>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  or?: InputMaybe<Array<InputMaybe<Team_filter>>>;
  ownership_?: InputMaybe<TeamOwnership_filter>;
  permissions_?: InputMaybe<TeamPermission_filter>;
  teamId?: InputMaybe<Scalars["BigInt"]>;
  teamId_gt?: InputMaybe<Scalars["BigInt"]>;
  teamId_gte?: InputMaybe<Scalars["BigInt"]>;
  teamId_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  teamId_lt?: InputMaybe<Scalars["BigInt"]>;
  teamId_lte?: InputMaybe<Scalars["BigInt"]>;
  teamId_not?: InputMaybe<Scalars["BigInt"]>;
  teamId_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transfers_?: InputMaybe<TeamTransfer_filter>;
}

export enum Team_orderBy {
  approvals = "approvals",
  createdAt = "createdAt",
  externalEtches = "externalEtches",
  id = "id",
  managedEtches = "managedEtches",
  name = "name",
  ownership = "ownership",
  ownership__id = "ownership__id",
  permissions = "permissions",
  teamId = "teamId",
  transfers = "transfers",
}

export interface Wallet_filter {
  OrganisationApprovals_?: InputMaybe<OrganisationApproval_filter>;
  OrganisationPermissions_?: InputMaybe<OrganisationPermission_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Wallet_filter>>>;
  etchENS_?: InputMaybe<EtchENS_filter>;
  etchPermissions_?: InputMaybe<EtchPermission_filter>;
  id?: InputMaybe<Scalars["Bytes"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]>;
  id_not?: InputMaybe<Scalars["Bytes"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  or?: InputMaybe<Array<InputMaybe<Wallet_filter>>>;
  ownedEtches_?: InputMaybe<EtchOwnership_filter>;
  ownedTeams_?: InputMaybe<TeamOwnership_filter>;
  ownedorganisations_?: InputMaybe<OrganisationOwnership_filter>;
  teamApprovals_?: InputMaybe<TeamApproval_filter>;
  teamPermissions_?: InputMaybe<TeamPermission_filter>;
}

export enum Wallet_orderBy {
  OrganisationApprovals = "OrganisationApprovals",
  OrganisationPermissions = "OrganisationPermissions",
  etchENS = "etchENS",
  etchPermissions = "etchPermissions",
  id = "id",
  ownedEtches = "ownedEtches",
  ownedTeams = "ownedTeams",
  ownedorganisations = "ownedorganisations",
  teamApprovals = "teamApprovals",
  teamPermissions = "teamPermissions",
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  deny = "deny",
}

export const scalarsEnumsHash: import("gqty").ScalarsEnumsHash = {
  BigDecimal: true,
  BigInt: true,
  Boolean: true,
  Bytes: true,
  EtchApprovalForAll_orderBy: true,
  EtchApproval_orderBy: true,
  EtchCommentAdded_orderBy: true,
  EtchCreated_orderBy: true,
  EtchENSCreated_orderBy: true,
  EtchENSTransfer_orderBy: true,
  EtchENS_orderBy: true,
  EtchOwnershipTransferred_orderBy: true,
  EtchOwnership_orderBy: true,
  EtchPermission_orderBy: true,
  EtchPermissionsUpdated_orderBy: true,
  EtchTeamPermissionsUpdated_orderBy: true,
  EtchTransfer_orderBy: true,
  EtchTransferedToTeam_orderBy: true,
  Etch_orderBy: true,
  ID: true,
  Int: true,
  Int8: true,
  OrderDirection: true,
  OrganisationApprovalForAll_orderBy: true,
  OrganisationApproval_orderBy: true,
  OrganisationContractOwnershipTransferred_orderBy: true,
  OrganisationCreated_orderBy: true,
  OrganisationOwnership_orderBy: true,
  OrganisationPermission_orderBy: true,
  OrganisationPermissionsUpdated_orderBy: true,
  OrganisationRenamed_orderBy: true,
  OrganisationTransfer_orderBy: true,
  Organisation_orderBy: true,
  String: true,
  TeamApprovalForAll_orderBy: true,
  TeamApproval_orderBy: true,
  TeamCreated_orderBy: true,
  TeamOwnershipTransferred_orderBy: true,
  TeamOwnership_orderBy: true,
  TeamPermission_orderBy: true,
  TeamPermissionsUpdated_orderBy: true,
  TeamRenamed_orderBy: true,
  TeamTransferToOrganisation_orderBy: true,
  TeamTransfer_orderBy: true,
  Team_orderBy: true,
  Wallet_orderBy: true,
  _SubgraphErrorPolicy_: true,
};
export const generatedSchema = {
  BlockChangedFilter: { number_gte: { __type: "Int!" } },
  Block_height: { hash: { __type: "Bytes" }, number: { __type: "Int" }, number_gte: { __type: "Int" } },
  Etch: {
    __typename: { __type: "String!" },
    approvals: {
      __type: "[EtchApproval!]",
      __args: {
        first: "Int",
        orderBy: "EtchApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "EtchApproval_filter",
      },
    },
    comments: {
      __type: "[EtchCommentAdded!]",
      __args: {
        first: "Int",
        orderBy: "EtchCommentAdded_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "EtchCommentAdded_filter",
      },
    },
    createdAt: { __type: "BigInt!" },
    documentName: { __type: "String!" },
    id: { __type: "ID!" },
    ipfsCid: { __type: "String!" },
    ownership: { __type: "EtchOwnership!" },
    permissions: {
      __type: "[EtchPermission!]",
      __args: {
        first: "Int",
        orderBy: "EtchPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "EtchPermission_filter",
      },
    },
    tokenId: { __type: "BigInt!" },
    transfers: {
      __type: "[EtchTransfer!]",
      __args: {
        first: "Int",
        orderBy: "EtchTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "EtchTransfer_filter",
      },
    },
  },
  EtchApproval: {
    __typename: { __type: "String!" },
    approved: { __type: "Bytes!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    etch: { __type: "Etch!" },
    id: { __type: "Bytes!" },
    owner: { __type: "Bytes!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchApprovalForAll: {
    __typename: { __type: "String!" },
    approved: { __type: "Boolean!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    etch: { __type: "Etch!" },
    id: { __type: "Bytes!" },
    operator: { __type: "Bytes!" },
    owner: { __type: "Bytes!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchApprovalForAll_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchApprovalForAll_filter]" },
    approved: { __type: "Boolean" },
    approved_in: { __type: "[Boolean!]" },
    approved_not: { __type: "Boolean" },
    approved_not_in: { __type: "[Boolean!]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    etch: { __type: "String" },
    etch_: { __type: "Etch_filter" },
    etch_contains: { __type: "String" },
    etch_contains_nocase: { __type: "String" },
    etch_ends_with: { __type: "String" },
    etch_ends_with_nocase: { __type: "String" },
    etch_gt: { __type: "String" },
    etch_gte: { __type: "String" },
    etch_in: { __type: "[String!]" },
    etch_lt: { __type: "String" },
    etch_lte: { __type: "String" },
    etch_not: { __type: "String" },
    etch_not_contains: { __type: "String" },
    etch_not_contains_nocase: { __type: "String" },
    etch_not_ends_with: { __type: "String" },
    etch_not_ends_with_nocase: { __type: "String" },
    etch_not_in: { __type: "[String!]" },
    etch_not_starts_with: { __type: "String" },
    etch_not_starts_with_nocase: { __type: "String" },
    etch_starts_with: { __type: "String" },
    etch_starts_with_nocase: { __type: "String" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    operator: { __type: "Bytes" },
    operator_contains: { __type: "Bytes" },
    operator_gt: { __type: "Bytes" },
    operator_gte: { __type: "Bytes" },
    operator_in: { __type: "[Bytes!]" },
    operator_lt: { __type: "Bytes" },
    operator_lte: { __type: "Bytes" },
    operator_not: { __type: "Bytes" },
    operator_not_contains: { __type: "Bytes" },
    operator_not_in: { __type: "[Bytes!]" },
    or: { __type: "[EtchApprovalForAll_filter]" },
    owner: { __type: "Bytes" },
    owner_contains: { __type: "Bytes" },
    owner_gt: { __type: "Bytes" },
    owner_gte: { __type: "Bytes" },
    owner_in: { __type: "[Bytes!]" },
    owner_lt: { __type: "Bytes" },
    owner_lte: { __type: "Bytes" },
    owner_not: { __type: "Bytes" },
    owner_not_contains: { __type: "Bytes" },
    owner_not_in: { __type: "[Bytes!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchApproval_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchApproval_filter]" },
    approved: { __type: "Bytes" },
    approved_contains: { __type: "Bytes" },
    approved_gt: { __type: "Bytes" },
    approved_gte: { __type: "Bytes" },
    approved_in: { __type: "[Bytes!]" },
    approved_lt: { __type: "Bytes" },
    approved_lte: { __type: "Bytes" },
    approved_not: { __type: "Bytes" },
    approved_not_contains: { __type: "Bytes" },
    approved_not_in: { __type: "[Bytes!]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    etch: { __type: "String" },
    etch_: { __type: "Etch_filter" },
    etch_contains: { __type: "String" },
    etch_contains_nocase: { __type: "String" },
    etch_ends_with: { __type: "String" },
    etch_ends_with_nocase: { __type: "String" },
    etch_gt: { __type: "String" },
    etch_gte: { __type: "String" },
    etch_in: { __type: "[String!]" },
    etch_lt: { __type: "String" },
    etch_lte: { __type: "String" },
    etch_not: { __type: "String" },
    etch_not_contains: { __type: "String" },
    etch_not_contains_nocase: { __type: "String" },
    etch_not_ends_with: { __type: "String" },
    etch_not_ends_with_nocase: { __type: "String" },
    etch_not_in: { __type: "[String!]" },
    etch_not_starts_with: { __type: "String" },
    etch_not_starts_with_nocase: { __type: "String" },
    etch_starts_with: { __type: "String" },
    etch_starts_with_nocase: { __type: "String" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[EtchApproval_filter]" },
    owner: { __type: "Bytes" },
    owner_contains: { __type: "Bytes" },
    owner_gt: { __type: "Bytes" },
    owner_gte: { __type: "Bytes" },
    owner_in: { __type: "[Bytes!]" },
    owner_lt: { __type: "Bytes" },
    owner_lte: { __type: "Bytes" },
    owner_not: { __type: "Bytes" },
    owner_not_contains: { __type: "Bytes" },
    owner_not_in: { __type: "[Bytes!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchCommentAdded: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    commentId: { __type: "BigInt!" },
    comment_commentIpfsCid: { __type: "String!" },
    comment_timestamp: { __type: "BigInt!" },
    etch: { __type: "Etch!" },
    id: { __type: "Bytes!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchCommentAdded_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchCommentAdded_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    commentId: { __type: "BigInt" },
    commentId_gt: { __type: "BigInt" },
    commentId_gte: { __type: "BigInt" },
    commentId_in: { __type: "[BigInt!]" },
    commentId_lt: { __type: "BigInt" },
    commentId_lte: { __type: "BigInt" },
    commentId_not: { __type: "BigInt" },
    commentId_not_in: { __type: "[BigInt!]" },
    comment_commentIpfsCid: { __type: "String" },
    comment_commentIpfsCid_contains: { __type: "String" },
    comment_commentIpfsCid_contains_nocase: { __type: "String" },
    comment_commentIpfsCid_ends_with: { __type: "String" },
    comment_commentIpfsCid_ends_with_nocase: { __type: "String" },
    comment_commentIpfsCid_gt: { __type: "String" },
    comment_commentIpfsCid_gte: { __type: "String" },
    comment_commentIpfsCid_in: { __type: "[String!]" },
    comment_commentIpfsCid_lt: { __type: "String" },
    comment_commentIpfsCid_lte: { __type: "String" },
    comment_commentIpfsCid_not: { __type: "String" },
    comment_commentIpfsCid_not_contains: { __type: "String" },
    comment_commentIpfsCid_not_contains_nocase: { __type: "String" },
    comment_commentIpfsCid_not_ends_with: { __type: "String" },
    comment_commentIpfsCid_not_ends_with_nocase: { __type: "String" },
    comment_commentIpfsCid_not_in: { __type: "[String!]" },
    comment_commentIpfsCid_not_starts_with: { __type: "String" },
    comment_commentIpfsCid_not_starts_with_nocase: { __type: "String" },
    comment_commentIpfsCid_starts_with: { __type: "String" },
    comment_commentIpfsCid_starts_with_nocase: { __type: "String" },
    comment_timestamp: { __type: "BigInt" },
    comment_timestamp_gt: { __type: "BigInt" },
    comment_timestamp_gte: { __type: "BigInt" },
    comment_timestamp_in: { __type: "[BigInt!]" },
    comment_timestamp_lt: { __type: "BigInt" },
    comment_timestamp_lte: { __type: "BigInt" },
    comment_timestamp_not: { __type: "BigInt" },
    comment_timestamp_not_in: { __type: "[BigInt!]" },
    etch: { __type: "String" },
    etch_: { __type: "Etch_filter" },
    etch_contains: { __type: "String" },
    etch_contains_nocase: { __type: "String" },
    etch_ends_with: { __type: "String" },
    etch_ends_with_nocase: { __type: "String" },
    etch_gt: { __type: "String" },
    etch_gte: { __type: "String" },
    etch_in: { __type: "[String!]" },
    etch_lt: { __type: "String" },
    etch_lte: { __type: "String" },
    etch_not: { __type: "String" },
    etch_not_contains: { __type: "String" },
    etch_not_contains_nocase: { __type: "String" },
    etch_not_ends_with: { __type: "String" },
    etch_not_ends_with_nocase: { __type: "String" },
    etch_not_in: { __type: "[String!]" },
    etch_not_starts_with: { __type: "String" },
    etch_not_starts_with_nocase: { __type: "String" },
    etch_starts_with: { __type: "String" },
    etch_starts_with_nocase: { __type: "String" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[EtchCommentAdded_filter]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchCreated: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    to: { __type: "Bytes!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchCreated_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchCreated_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[EtchCreated_filter]" },
    to: { __type: "Bytes" },
    to_contains: { __type: "Bytes" },
    to_gt: { __type: "Bytes" },
    to_gte: { __type: "Bytes" },
    to_in: { __type: "[Bytes!]" },
    to_lt: { __type: "Bytes" },
    to_lte: { __type: "Bytes" },
    to_not: { __type: "Bytes" },
    to_not_contains: { __type: "Bytes" },
    to_not_in: { __type: "[Bytes!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchENS: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    name: { __type: "String!" },
    owner: { __type: "Wallet!" },
    tokenId: { __type: "BigInt!" },
  },
  EtchENSCreated: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    name: { __type: "String!" },
    to: { __type: "Bytes!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchENSCreated_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchENSCreated_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_contains_nocase: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_ends_with_nocase: { __type: "String" },
    name_gt: { __type: "String" },
    name_gte: { __type: "String" },
    name_in: { __type: "[String!]" },
    name_lt: { __type: "String" },
    name_lte: { __type: "String" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_contains_nocase: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_ends_with_nocase: { __type: "String" },
    name_not_in: { __type: "[String!]" },
    name_not_starts_with: { __type: "String" },
    name_not_starts_with_nocase: { __type: "String" },
    name_starts_with: { __type: "String" },
    name_starts_with_nocase: { __type: "String" },
    or: { __type: "[EtchENSCreated_filter]" },
    to: { __type: "Bytes" },
    to_contains: { __type: "Bytes" },
    to_gt: { __type: "Bytes" },
    to_gte: { __type: "Bytes" },
    to_in: { __type: "[Bytes!]" },
    to_lt: { __type: "Bytes" },
    to_lte: { __type: "Bytes" },
    to_not: { __type: "Bytes" },
    to_not_contains: { __type: "Bytes" },
    to_not_in: { __type: "[Bytes!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchENSTransfer: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    from: { __type: "Bytes!" },
    id: { __type: "Bytes!" },
    to: { __type: "Bytes!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchENSTransfer_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchENSTransfer_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    from: { __type: "Bytes" },
    from_contains: { __type: "Bytes" },
    from_gt: { __type: "Bytes" },
    from_gte: { __type: "Bytes" },
    from_in: { __type: "[Bytes!]" },
    from_lt: { __type: "Bytes" },
    from_lte: { __type: "Bytes" },
    from_not: { __type: "Bytes" },
    from_not_contains: { __type: "Bytes" },
    from_not_in: { __type: "[Bytes!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[EtchENSTransfer_filter]" },
    to: { __type: "Bytes" },
    to_contains: { __type: "Bytes" },
    to_gt: { __type: "Bytes" },
    to_gte: { __type: "Bytes" },
    to_in: { __type: "[Bytes!]" },
    to_lt: { __type: "Bytes" },
    to_lte: { __type: "Bytes" },
    to_not: { __type: "Bytes" },
    to_not_contains: { __type: "Bytes" },
    to_not_in: { __type: "[Bytes!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchENS_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchENS_filter]" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_contains_nocase: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_ends_with_nocase: { __type: "String" },
    name_gt: { __type: "String" },
    name_gte: { __type: "String" },
    name_in: { __type: "[String!]" },
    name_lt: { __type: "String" },
    name_lte: { __type: "String" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_contains_nocase: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_ends_with_nocase: { __type: "String" },
    name_not_in: { __type: "[String!]" },
    name_not_starts_with: { __type: "String" },
    name_not_starts_with_nocase: { __type: "String" },
    name_starts_with: { __type: "String" },
    name_starts_with_nocase: { __type: "String" },
    or: { __type: "[EtchENS_filter]" },
    owner: { __type: "String" },
    owner_: { __type: "Wallet_filter" },
    owner_contains: { __type: "String" },
    owner_contains_nocase: { __type: "String" },
    owner_ends_with: { __type: "String" },
    owner_ends_with_nocase: { __type: "String" },
    owner_gt: { __type: "String" },
    owner_gte: { __type: "String" },
    owner_in: { __type: "[String!]" },
    owner_lt: { __type: "String" },
    owner_lte: { __type: "String" },
    owner_not: { __type: "String" },
    owner_not_contains: { __type: "String" },
    owner_not_contains_nocase: { __type: "String" },
    owner_not_ends_with: { __type: "String" },
    owner_not_ends_with_nocase: { __type: "String" },
    owner_not_in: { __type: "[String!]" },
    owner_not_starts_with: { __type: "String" },
    owner_not_starts_with_nocase: { __type: "String" },
    owner_starts_with: { __type: "String" },
    owner_starts_with_nocase: { __type: "String" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
  },
  EtchOwnership: {
    __typename: { __type: "String!" },
    etch: { __type: "Etch!" },
    id: { __type: "ID!" },
    owner: { __type: "Wallet" },
    team: { __type: "Team" },
  },
  EtchOwnershipTransferred: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    newOwner: { __type: "Bytes!" },
    previousOwner: { __type: "Bytes!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchOwnershipTransferred_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchOwnershipTransferred_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    newOwner: { __type: "Bytes" },
    newOwner_contains: { __type: "Bytes" },
    newOwner_gt: { __type: "Bytes" },
    newOwner_gte: { __type: "Bytes" },
    newOwner_in: { __type: "[Bytes!]" },
    newOwner_lt: { __type: "Bytes" },
    newOwner_lte: { __type: "Bytes" },
    newOwner_not: { __type: "Bytes" },
    newOwner_not_contains: { __type: "Bytes" },
    newOwner_not_in: { __type: "[Bytes!]" },
    or: { __type: "[EtchOwnershipTransferred_filter]" },
    previousOwner: { __type: "Bytes" },
    previousOwner_contains: { __type: "Bytes" },
    previousOwner_gt: { __type: "Bytes" },
    previousOwner_gte: { __type: "Bytes" },
    previousOwner_in: { __type: "[Bytes!]" },
    previousOwner_lt: { __type: "Bytes" },
    previousOwner_lte: { __type: "Bytes" },
    previousOwner_not: { __type: "Bytes" },
    previousOwner_not_contains: { __type: "Bytes" },
    previousOwner_not_in: { __type: "[Bytes!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchOwnership_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchOwnership_filter]" },
    etch: { __type: "String" },
    etch_: { __type: "Etch_filter" },
    etch_contains: { __type: "String" },
    etch_contains_nocase: { __type: "String" },
    etch_ends_with: { __type: "String" },
    etch_ends_with_nocase: { __type: "String" },
    etch_gt: { __type: "String" },
    etch_gte: { __type: "String" },
    etch_in: { __type: "[String!]" },
    etch_lt: { __type: "String" },
    etch_lte: { __type: "String" },
    etch_not: { __type: "String" },
    etch_not_contains: { __type: "String" },
    etch_not_contains_nocase: { __type: "String" },
    etch_not_ends_with: { __type: "String" },
    etch_not_ends_with_nocase: { __type: "String" },
    etch_not_in: { __type: "[String!]" },
    etch_not_starts_with: { __type: "String" },
    etch_not_starts_with_nocase: { __type: "String" },
    etch_starts_with: { __type: "String" },
    etch_starts_with_nocase: { __type: "String" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    or: { __type: "[EtchOwnership_filter]" },
    owner: { __type: "String" },
    owner_: { __type: "Wallet_filter" },
    owner_contains: { __type: "String" },
    owner_contains_nocase: { __type: "String" },
    owner_ends_with: { __type: "String" },
    owner_ends_with_nocase: { __type: "String" },
    owner_gt: { __type: "String" },
    owner_gte: { __type: "String" },
    owner_in: { __type: "[String!]" },
    owner_lt: { __type: "String" },
    owner_lte: { __type: "String" },
    owner_not: { __type: "String" },
    owner_not_contains: { __type: "String" },
    owner_not_contains_nocase: { __type: "String" },
    owner_not_ends_with: { __type: "String" },
    owner_not_ends_with_nocase: { __type: "String" },
    owner_not_in: { __type: "[String!]" },
    owner_not_starts_with: { __type: "String" },
    owner_not_starts_with_nocase: { __type: "String" },
    owner_starts_with: { __type: "String" },
    owner_starts_with_nocase: { __type: "String" },
    team: { __type: "String" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
  },
  EtchPermission: {
    __typename: { __type: "String!" },
    etch: { __type: "Etch!" },
    id: { __type: "ID!" },
    permissionLevel: { __type: "Int!" },
    team: { __type: "Team" },
    wallet: { __type: "Wallet" },
  },
  EtchPermission_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchPermission_filter]" },
    etch: { __type: "String" },
    etch_: { __type: "Etch_filter" },
    etch_contains: { __type: "String" },
    etch_contains_nocase: { __type: "String" },
    etch_ends_with: { __type: "String" },
    etch_ends_with_nocase: { __type: "String" },
    etch_gt: { __type: "String" },
    etch_gte: { __type: "String" },
    etch_in: { __type: "[String!]" },
    etch_lt: { __type: "String" },
    etch_lte: { __type: "String" },
    etch_not: { __type: "String" },
    etch_not_contains: { __type: "String" },
    etch_not_contains_nocase: { __type: "String" },
    etch_not_ends_with: { __type: "String" },
    etch_not_ends_with_nocase: { __type: "String" },
    etch_not_in: { __type: "[String!]" },
    etch_not_starts_with: { __type: "String" },
    etch_not_starts_with_nocase: { __type: "String" },
    etch_starts_with: { __type: "String" },
    etch_starts_with_nocase: { __type: "String" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    or: { __type: "[EtchPermission_filter]" },
    permissionLevel: { __type: "Int" },
    permissionLevel_gt: { __type: "Int" },
    permissionLevel_gte: { __type: "Int" },
    permissionLevel_in: { __type: "[Int!]" },
    permissionLevel_lt: { __type: "Int" },
    permissionLevel_lte: { __type: "Int" },
    permissionLevel_not: { __type: "Int" },
    permissionLevel_not_in: { __type: "[Int!]" },
    team: { __type: "String" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
    wallet: { __type: "String" },
    wallet_: { __type: "Wallet_filter" },
    wallet_contains: { __type: "String" },
    wallet_contains_nocase: { __type: "String" },
    wallet_ends_with: { __type: "String" },
    wallet_ends_with_nocase: { __type: "String" },
    wallet_gt: { __type: "String" },
    wallet_gte: { __type: "String" },
    wallet_in: { __type: "[String!]" },
    wallet_lt: { __type: "String" },
    wallet_lte: { __type: "String" },
    wallet_not: { __type: "String" },
    wallet_not_contains: { __type: "String" },
    wallet_not_contains_nocase: { __type: "String" },
    wallet_not_ends_with: { __type: "String" },
    wallet_not_ends_with_nocase: { __type: "String" },
    wallet_not_in: { __type: "[String!]" },
    wallet_not_starts_with: { __type: "String" },
    wallet_not_starts_with_nocase: { __type: "String" },
    wallet_starts_with: { __type: "String" },
    wallet_starts_with_nocase: { __type: "String" },
  },
  EtchPermissionsUpdated: {
    __typename: { __type: "String!" },
    account: { __type: "Bytes!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    newPermission: { __type: "Int!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchPermissionsUpdated_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    account: { __type: "Bytes" },
    account_contains: { __type: "Bytes" },
    account_gt: { __type: "Bytes" },
    account_gte: { __type: "Bytes" },
    account_in: { __type: "[Bytes!]" },
    account_lt: { __type: "Bytes" },
    account_lte: { __type: "Bytes" },
    account_not: { __type: "Bytes" },
    account_not_contains: { __type: "Bytes" },
    account_not_in: { __type: "[Bytes!]" },
    and: { __type: "[EtchPermissionsUpdated_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    newPermission: { __type: "Int" },
    newPermission_gt: { __type: "Int" },
    newPermission_gte: { __type: "Int" },
    newPermission_in: { __type: "[Int!]" },
    newPermission_lt: { __type: "Int" },
    newPermission_lte: { __type: "Int" },
    newPermission_not: { __type: "Int" },
    newPermission_not_in: { __type: "[Int!]" },
    or: { __type: "[EtchPermissionsUpdated_filter]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchTeamPermissionsUpdated: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    newPermission: { __type: "Int!" },
    teamId: { __type: "BigInt!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchTeamPermissionsUpdated_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchTeamPermissionsUpdated_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    newPermission: { __type: "Int" },
    newPermission_gt: { __type: "Int" },
    newPermission_gte: { __type: "Int" },
    newPermission_in: { __type: "[Int!]" },
    newPermission_lt: { __type: "Int" },
    newPermission_lte: { __type: "Int" },
    newPermission_not: { __type: "Int" },
    newPermission_not_in: { __type: "[Int!]" },
    or: { __type: "[EtchTeamPermissionsUpdated_filter]" },
    teamId: { __type: "BigInt" },
    teamId_gt: { __type: "BigInt" },
    teamId_gte: { __type: "BigInt" },
    teamId_in: { __type: "[BigInt!]" },
    teamId_lt: { __type: "BigInt" },
    teamId_lte: { __type: "BigInt" },
    teamId_not: { __type: "BigInt" },
    teamId_not_in: { __type: "[BigInt!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchTransfer: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    etch: { __type: "Etch!" },
    from: { __type: "Bytes!" },
    id: { __type: "Bytes!" },
    to: { __type: "Bytes!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchTransfer_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchTransfer_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    etch: { __type: "String" },
    etch_: { __type: "Etch_filter" },
    etch_contains: { __type: "String" },
    etch_contains_nocase: { __type: "String" },
    etch_ends_with: { __type: "String" },
    etch_ends_with_nocase: { __type: "String" },
    etch_gt: { __type: "String" },
    etch_gte: { __type: "String" },
    etch_in: { __type: "[String!]" },
    etch_lt: { __type: "String" },
    etch_lte: { __type: "String" },
    etch_not: { __type: "String" },
    etch_not_contains: { __type: "String" },
    etch_not_contains_nocase: { __type: "String" },
    etch_not_ends_with: { __type: "String" },
    etch_not_ends_with_nocase: { __type: "String" },
    etch_not_in: { __type: "[String!]" },
    etch_not_starts_with: { __type: "String" },
    etch_not_starts_with_nocase: { __type: "String" },
    etch_starts_with: { __type: "String" },
    etch_starts_with_nocase: { __type: "String" },
    from: { __type: "Bytes" },
    from_contains: { __type: "Bytes" },
    from_gt: { __type: "Bytes" },
    from_gte: { __type: "Bytes" },
    from_in: { __type: "[Bytes!]" },
    from_lt: { __type: "Bytes" },
    from_lte: { __type: "Bytes" },
    from_not: { __type: "Bytes" },
    from_not_contains: { __type: "Bytes" },
    from_not_in: { __type: "[Bytes!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[EtchTransfer_filter]" },
    to: { __type: "Bytes" },
    to_contains: { __type: "Bytes" },
    to_gt: { __type: "Bytes" },
    to_gte: { __type: "Bytes" },
    to_in: { __type: "[Bytes!]" },
    to_lt: { __type: "Bytes" },
    to_lte: { __type: "Bytes" },
    to_not: { __type: "Bytes" },
    to_not_contains: { __type: "Bytes" },
    to_not_in: { __type: "[Bytes!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  EtchTransferedToTeam: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    from: { __type: "Bytes!" },
    id: { __type: "Bytes!" },
    to: { __type: "BigInt!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  EtchTransferedToTeam_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[EtchTransferedToTeam_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    from: { __type: "Bytes" },
    from_contains: { __type: "Bytes" },
    from_gt: { __type: "Bytes" },
    from_gte: { __type: "Bytes" },
    from_in: { __type: "[Bytes!]" },
    from_lt: { __type: "Bytes" },
    from_lte: { __type: "Bytes" },
    from_not: { __type: "Bytes" },
    from_not_contains: { __type: "Bytes" },
    from_not_in: { __type: "[Bytes!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[EtchTransferedToTeam_filter]" },
    to: { __type: "BigInt" },
    to_gt: { __type: "BigInt" },
    to_gte: { __type: "BigInt" },
    to_in: { __type: "[BigInt!]" },
    to_lt: { __type: "BigInt" },
    to_lte: { __type: "BigInt" },
    to_not: { __type: "BigInt" },
    to_not_in: { __type: "[BigInt!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  Etch_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[Etch_filter]" },
    approvals_: { __type: "EtchApproval_filter" },
    comments_: { __type: "EtchCommentAdded_filter" },
    createdAt: { __type: "BigInt" },
    createdAt_gt: { __type: "BigInt" },
    createdAt_gte: { __type: "BigInt" },
    createdAt_in: { __type: "[BigInt!]" },
    createdAt_lt: { __type: "BigInt" },
    createdAt_lte: { __type: "BigInt" },
    createdAt_not: { __type: "BigInt" },
    createdAt_not_in: { __type: "[BigInt!]" },
    documentName: { __type: "String" },
    documentName_contains: { __type: "String" },
    documentName_contains_nocase: { __type: "String" },
    documentName_ends_with: { __type: "String" },
    documentName_ends_with_nocase: { __type: "String" },
    documentName_gt: { __type: "String" },
    documentName_gte: { __type: "String" },
    documentName_in: { __type: "[String!]" },
    documentName_lt: { __type: "String" },
    documentName_lte: { __type: "String" },
    documentName_not: { __type: "String" },
    documentName_not_contains: { __type: "String" },
    documentName_not_contains_nocase: { __type: "String" },
    documentName_not_ends_with: { __type: "String" },
    documentName_not_ends_with_nocase: { __type: "String" },
    documentName_not_in: { __type: "[String!]" },
    documentName_not_starts_with: { __type: "String" },
    documentName_not_starts_with_nocase: { __type: "String" },
    documentName_starts_with: { __type: "String" },
    documentName_starts_with_nocase: { __type: "String" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    ipfsCid: { __type: "String" },
    ipfsCid_contains: { __type: "String" },
    ipfsCid_contains_nocase: { __type: "String" },
    ipfsCid_ends_with: { __type: "String" },
    ipfsCid_ends_with_nocase: { __type: "String" },
    ipfsCid_gt: { __type: "String" },
    ipfsCid_gte: { __type: "String" },
    ipfsCid_in: { __type: "[String!]" },
    ipfsCid_lt: { __type: "String" },
    ipfsCid_lte: { __type: "String" },
    ipfsCid_not: { __type: "String" },
    ipfsCid_not_contains: { __type: "String" },
    ipfsCid_not_contains_nocase: { __type: "String" },
    ipfsCid_not_ends_with: { __type: "String" },
    ipfsCid_not_ends_with_nocase: { __type: "String" },
    ipfsCid_not_in: { __type: "[String!]" },
    ipfsCid_not_starts_with: { __type: "String" },
    ipfsCid_not_starts_with_nocase: { __type: "String" },
    ipfsCid_starts_with: { __type: "String" },
    ipfsCid_starts_with_nocase: { __type: "String" },
    or: { __type: "[Etch_filter]" },
    ownership_: { __type: "EtchOwnership_filter" },
    permissions_: { __type: "EtchPermission_filter" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transfers_: { __type: "EtchTransfer_filter" },
  },
  Organisation: {
    __typename: { __type: "String!" },
    approvals: {
      __type: "[OrganisationApproval!]",
      __args: {
        first: "Int",
        orderBy: "OrganisationApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "OrganisationApproval_filter",
      },
    },
    createdAt: { __type: "BigInt!" },
    id: { __type: "ID!" },
    managedTeams: {
      __type: "[TeamOwnership!]",
      __args: {
        first: "Int",
        orderBy: "TeamOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "TeamOwnership_filter",
      },
    },
    name: { __type: "String" },
    orgId: { __type: "BigInt!" },
    ownership: { __type: "OrganisationOwnership!" },
    permissions: {
      __type: "[OrganisationPermission!]",
      __args: {
        first: "Int",
        orderBy: "OrganisationPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "OrganisationPermission_filter",
      },
    },
    transfers: {
      __type: "[OrganisationTransfer!]",
      __args: {
        first: "Int",
        orderBy: "OrganisationTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "OrganisationTransfer_filter",
      },
    },
  },
  OrganisationApproval: {
    __typename: { __type: "String!" },
    approved: { __type: "Bytes!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    organisation: { __type: "Organisation!" },
    owner: { __type: "Bytes!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
    wallet: { __type: "Wallet!" },
  },
  OrganisationApprovalForAll: {
    __typename: { __type: "String!" },
    approved: { __type: "Boolean!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    operator: { __type: "Bytes!" },
    organisation: { __type: "Organisation!" },
    owner: { __type: "Bytes!" },
    transactionHash: { __type: "Bytes!" },
  },
  OrganisationApprovalForAll_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[OrganisationApprovalForAll_filter]" },
    approved: { __type: "Boolean" },
    approved_in: { __type: "[Boolean!]" },
    approved_not: { __type: "Boolean" },
    approved_not_in: { __type: "[Boolean!]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    operator: { __type: "Bytes" },
    operator_contains: { __type: "Bytes" },
    operator_gt: { __type: "Bytes" },
    operator_gte: { __type: "Bytes" },
    operator_in: { __type: "[Bytes!]" },
    operator_lt: { __type: "Bytes" },
    operator_lte: { __type: "Bytes" },
    operator_not: { __type: "Bytes" },
    operator_not_contains: { __type: "Bytes" },
    operator_not_in: { __type: "[Bytes!]" },
    or: { __type: "[OrganisationApprovalForAll_filter]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    owner: { __type: "Bytes" },
    owner_contains: { __type: "Bytes" },
    owner_gt: { __type: "Bytes" },
    owner_gte: { __type: "Bytes" },
    owner_in: { __type: "[Bytes!]" },
    owner_lt: { __type: "Bytes" },
    owner_lte: { __type: "Bytes" },
    owner_not: { __type: "Bytes" },
    owner_not_contains: { __type: "Bytes" },
    owner_not_in: { __type: "[Bytes!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  OrganisationApproval_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[OrganisationApproval_filter]" },
    approved: { __type: "Bytes" },
    approved_contains: { __type: "Bytes" },
    approved_gt: { __type: "Bytes" },
    approved_gte: { __type: "Bytes" },
    approved_in: { __type: "[Bytes!]" },
    approved_lt: { __type: "Bytes" },
    approved_lte: { __type: "Bytes" },
    approved_not: { __type: "Bytes" },
    approved_not_contains: { __type: "Bytes" },
    approved_not_in: { __type: "[Bytes!]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[OrganisationApproval_filter]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    owner: { __type: "Bytes" },
    owner_contains: { __type: "Bytes" },
    owner_gt: { __type: "Bytes" },
    owner_gte: { __type: "Bytes" },
    owner_in: { __type: "[Bytes!]" },
    owner_lt: { __type: "Bytes" },
    owner_lte: { __type: "Bytes" },
    owner_not: { __type: "Bytes" },
    owner_not_contains: { __type: "Bytes" },
    owner_not_in: { __type: "[Bytes!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
    wallet: { __type: "String" },
    wallet_: { __type: "Wallet_filter" },
    wallet_contains: { __type: "String" },
    wallet_contains_nocase: { __type: "String" },
    wallet_ends_with: { __type: "String" },
    wallet_ends_with_nocase: { __type: "String" },
    wallet_gt: { __type: "String" },
    wallet_gte: { __type: "String" },
    wallet_in: { __type: "[String!]" },
    wallet_lt: { __type: "String" },
    wallet_lte: { __type: "String" },
    wallet_not: { __type: "String" },
    wallet_not_contains: { __type: "String" },
    wallet_not_contains_nocase: { __type: "String" },
    wallet_not_ends_with: { __type: "String" },
    wallet_not_ends_with_nocase: { __type: "String" },
    wallet_not_in: { __type: "[String!]" },
    wallet_not_starts_with: { __type: "String" },
    wallet_not_starts_with_nocase: { __type: "String" },
    wallet_starts_with: { __type: "String" },
    wallet_starts_with_nocase: { __type: "String" },
  },
  OrganisationContractOwnershipTransferred: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    newOwner: { __type: "Bytes!" },
    previousOwner: { __type: "Bytes!" },
    transactionHash: { __type: "Bytes!" },
  },
  OrganisationContractOwnershipTransferred_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[OrganisationContractOwnershipTransferred_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    newOwner: { __type: "Bytes" },
    newOwner_contains: { __type: "Bytes" },
    newOwner_gt: { __type: "Bytes" },
    newOwner_gte: { __type: "Bytes" },
    newOwner_in: { __type: "[Bytes!]" },
    newOwner_lt: { __type: "Bytes" },
    newOwner_lte: { __type: "Bytes" },
    newOwner_not: { __type: "Bytes" },
    newOwner_not_contains: { __type: "Bytes" },
    newOwner_not_in: { __type: "[Bytes!]" },
    or: { __type: "[OrganisationContractOwnershipTransferred_filter]" },
    previousOwner: { __type: "Bytes" },
    previousOwner_contains: { __type: "Bytes" },
    previousOwner_gt: { __type: "Bytes" },
    previousOwner_gte: { __type: "Bytes" },
    previousOwner_in: { __type: "[Bytes!]" },
    previousOwner_lt: { __type: "Bytes" },
    previousOwner_lte: { __type: "Bytes" },
    previousOwner_not: { __type: "Bytes" },
    previousOwner_not_contains: { __type: "Bytes" },
    previousOwner_not_in: { __type: "[Bytes!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  OrganisationCreated: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    orgId: { __type: "BigInt!" },
    organisation: { __type: "Organisation!" },
    to: { __type: "Bytes!" },
    transactionHash: { __type: "Bytes!" },
  },
  OrganisationCreated_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[OrganisationCreated_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[OrganisationCreated_filter]" },
    orgId: { __type: "BigInt" },
    orgId_gt: { __type: "BigInt" },
    orgId_gte: { __type: "BigInt" },
    orgId_in: { __type: "[BigInt!]" },
    orgId_lt: { __type: "BigInt" },
    orgId_lte: { __type: "BigInt" },
    orgId_not: { __type: "BigInt" },
    orgId_not_in: { __type: "[BigInt!]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    to: { __type: "Bytes" },
    to_contains: { __type: "Bytes" },
    to_gt: { __type: "Bytes" },
    to_gte: { __type: "Bytes" },
    to_in: { __type: "[Bytes!]" },
    to_lt: { __type: "Bytes" },
    to_lte: { __type: "Bytes" },
    to_not: { __type: "Bytes" },
    to_not_contains: { __type: "Bytes" },
    to_not_in: { __type: "[Bytes!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  OrganisationOwnership: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    organisation: { __type: "Organisation!" },
    owner: { __type: "Wallet" },
  },
  OrganisationOwnership_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[OrganisationOwnership_filter]" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    or: { __type: "[OrganisationOwnership_filter]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    owner: { __type: "String" },
    owner_: { __type: "Wallet_filter" },
    owner_contains: { __type: "String" },
    owner_contains_nocase: { __type: "String" },
    owner_ends_with: { __type: "String" },
    owner_ends_with_nocase: { __type: "String" },
    owner_gt: { __type: "String" },
    owner_gte: { __type: "String" },
    owner_in: { __type: "[String!]" },
    owner_lt: { __type: "String" },
    owner_lte: { __type: "String" },
    owner_not: { __type: "String" },
    owner_not_contains: { __type: "String" },
    owner_not_contains_nocase: { __type: "String" },
    owner_not_ends_with: { __type: "String" },
    owner_not_ends_with_nocase: { __type: "String" },
    owner_not_in: { __type: "[String!]" },
    owner_not_starts_with: { __type: "String" },
    owner_not_starts_with_nocase: { __type: "String" },
    owner_starts_with: { __type: "String" },
    owner_starts_with_nocase: { __type: "String" },
  },
  OrganisationPermission: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    organisation: { __type: "Organisation!" },
    permissionLevel: { __type: "Int!" },
    wallet: { __type: "Wallet!" },
  },
  OrganisationPermission_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[OrganisationPermission_filter]" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    or: { __type: "[OrganisationPermission_filter]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    permissionLevel: { __type: "Int" },
    permissionLevel_gt: { __type: "Int" },
    permissionLevel_gte: { __type: "Int" },
    permissionLevel_in: { __type: "[Int!]" },
    permissionLevel_lt: { __type: "Int" },
    permissionLevel_lte: { __type: "Int" },
    permissionLevel_not: { __type: "Int" },
    permissionLevel_not_in: { __type: "[Int!]" },
    wallet: { __type: "String" },
    wallet_: { __type: "Wallet_filter" },
    wallet_contains: { __type: "String" },
    wallet_contains_nocase: { __type: "String" },
    wallet_ends_with: { __type: "String" },
    wallet_ends_with_nocase: { __type: "String" },
    wallet_gt: { __type: "String" },
    wallet_gte: { __type: "String" },
    wallet_in: { __type: "[String!]" },
    wallet_lt: { __type: "String" },
    wallet_lte: { __type: "String" },
    wallet_not: { __type: "String" },
    wallet_not_contains: { __type: "String" },
    wallet_not_contains_nocase: { __type: "String" },
    wallet_not_ends_with: { __type: "String" },
    wallet_not_ends_with_nocase: { __type: "String" },
    wallet_not_in: { __type: "[String!]" },
    wallet_not_starts_with: { __type: "String" },
    wallet_not_starts_with_nocase: { __type: "String" },
    wallet_starts_with: { __type: "String" },
    wallet_starts_with_nocase: { __type: "String" },
  },
  OrganisationPermissionsUpdated: {
    __typename: { __type: "String!" },
    account: { __type: "Bytes!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    newPermission: { __type: "Int!" },
    orgId: { __type: "BigInt!" },
    organisation: { __type: "Organisation!" },
    transactionHash: { __type: "Bytes!" },
  },
  OrganisationPermissionsUpdated_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    account: { __type: "Bytes" },
    account_contains: { __type: "Bytes" },
    account_gt: { __type: "Bytes" },
    account_gte: { __type: "Bytes" },
    account_in: { __type: "[Bytes!]" },
    account_lt: { __type: "Bytes" },
    account_lte: { __type: "Bytes" },
    account_not: { __type: "Bytes" },
    account_not_contains: { __type: "Bytes" },
    account_not_in: { __type: "[Bytes!]" },
    and: { __type: "[OrganisationPermissionsUpdated_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    newPermission: { __type: "Int" },
    newPermission_gt: { __type: "Int" },
    newPermission_gte: { __type: "Int" },
    newPermission_in: { __type: "[Int!]" },
    newPermission_lt: { __type: "Int" },
    newPermission_lte: { __type: "Int" },
    newPermission_not: { __type: "Int" },
    newPermission_not_in: { __type: "[Int!]" },
    or: { __type: "[OrganisationPermissionsUpdated_filter]" },
    orgId: { __type: "BigInt" },
    orgId_gt: { __type: "BigInt" },
    orgId_gte: { __type: "BigInt" },
    orgId_in: { __type: "[BigInt!]" },
    orgId_lt: { __type: "BigInt" },
    orgId_lte: { __type: "BigInt" },
    orgId_not: { __type: "BigInt" },
    orgId_not_in: { __type: "[BigInt!]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  OrganisationRenamed: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    newName: { __type: "String!" },
    organisation: { __type: "Organisation!" },
    transactionHash: { __type: "Bytes!" },
  },
  OrganisationRenamed_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[OrganisationRenamed_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    newName: { __type: "String" },
    newName_contains: { __type: "String" },
    newName_contains_nocase: { __type: "String" },
    newName_ends_with: { __type: "String" },
    newName_ends_with_nocase: { __type: "String" },
    newName_gt: { __type: "String" },
    newName_gte: { __type: "String" },
    newName_in: { __type: "[String!]" },
    newName_lt: { __type: "String" },
    newName_lte: { __type: "String" },
    newName_not: { __type: "String" },
    newName_not_contains: { __type: "String" },
    newName_not_contains_nocase: { __type: "String" },
    newName_not_ends_with: { __type: "String" },
    newName_not_ends_with_nocase: { __type: "String" },
    newName_not_in: { __type: "[String!]" },
    newName_not_starts_with: { __type: "String" },
    newName_not_starts_with_nocase: { __type: "String" },
    newName_starts_with: { __type: "String" },
    newName_starts_with_nocase: { __type: "String" },
    or: { __type: "[OrganisationRenamed_filter]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  OrganisationTransfer: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    from: { __type: "Bytes!" },
    id: { __type: "Bytes!" },
    organisation: { __type: "Organisation!" },
    to: { __type: "Bytes!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  OrganisationTransfer_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[OrganisationTransfer_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    from: { __type: "Bytes" },
    from_contains: { __type: "Bytes" },
    from_gt: { __type: "Bytes" },
    from_gte: { __type: "Bytes" },
    from_in: { __type: "[Bytes!]" },
    from_lt: { __type: "Bytes" },
    from_lte: { __type: "Bytes" },
    from_not: { __type: "Bytes" },
    from_not_contains: { __type: "Bytes" },
    from_not_in: { __type: "[Bytes!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[OrganisationTransfer_filter]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    to: { __type: "Bytes" },
    to_contains: { __type: "Bytes" },
    to_gt: { __type: "Bytes" },
    to_gte: { __type: "Bytes" },
    to_in: { __type: "[Bytes!]" },
    to_lt: { __type: "Bytes" },
    to_lte: { __type: "Bytes" },
    to_not: { __type: "Bytes" },
    to_not_contains: { __type: "Bytes" },
    to_not_in: { __type: "[Bytes!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  Organisation_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[Organisation_filter]" },
    approvals_: { __type: "OrganisationApproval_filter" },
    createdAt: { __type: "BigInt" },
    createdAt_gt: { __type: "BigInt" },
    createdAt_gte: { __type: "BigInt" },
    createdAt_in: { __type: "[BigInt!]" },
    createdAt_lt: { __type: "BigInt" },
    createdAt_lte: { __type: "BigInt" },
    createdAt_not: { __type: "BigInt" },
    createdAt_not_in: { __type: "[BigInt!]" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    managedTeams_: { __type: "TeamOwnership_filter" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_contains_nocase: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_ends_with_nocase: { __type: "String" },
    name_gt: { __type: "String" },
    name_gte: { __type: "String" },
    name_in: { __type: "[String!]" },
    name_lt: { __type: "String" },
    name_lte: { __type: "String" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_contains_nocase: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_ends_with_nocase: { __type: "String" },
    name_not_in: { __type: "[String!]" },
    name_not_starts_with: { __type: "String" },
    name_not_starts_with_nocase: { __type: "String" },
    name_starts_with: { __type: "String" },
    name_starts_with_nocase: { __type: "String" },
    or: { __type: "[Organisation_filter]" },
    orgId: { __type: "BigInt" },
    orgId_gt: { __type: "BigInt" },
    orgId_gte: { __type: "BigInt" },
    orgId_in: { __type: "[BigInt!]" },
    orgId_lt: { __type: "BigInt" },
    orgId_lte: { __type: "BigInt" },
    orgId_not: { __type: "BigInt" },
    orgId_not_in: { __type: "[BigInt!]" },
    ownership_: { __type: "OrganisationOwnership_filter" },
    permissions_: { __type: "OrganisationPermission_filter" },
    transfers_: { __type: "OrganisationTransfer_filter" },
  },
  Team: {
    __typename: { __type: "String!" },
    approvals: {
      __type: "[TeamApproval!]",
      __args: {
        first: "Int",
        orderBy: "TeamApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "TeamApproval_filter",
      },
    },
    createdAt: { __type: "BigInt!" },
    externalEtches: {
      __type: "[EtchPermission!]",
      __args: {
        first: "Int",
        orderBy: "EtchPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "EtchPermission_filter",
      },
    },
    id: { __type: "ID!" },
    managedEtches: {
      __type: "[EtchOwnership!]",
      __args: {
        first: "Int",
        orderBy: "EtchOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "EtchOwnership_filter",
      },
    },
    name: { __type: "String" },
    ownership: { __type: "TeamOwnership!" },
    permissions: {
      __type: "[TeamPermission!]",
      __args: {
        first: "Int",
        orderBy: "TeamPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "TeamPermission_filter",
      },
    },
    teamId: { __type: "BigInt!" },
    transfers: {
      __type: "[TeamTransfer!]",
      __args: {
        first: "Int",
        orderBy: "TeamTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "TeamTransfer_filter",
      },
    },
  },
  TeamApproval: {
    __typename: { __type: "String!" },
    approved: { __type: "Bytes!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    owner: { __type: "Bytes!" },
    team: { __type: "Team!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
    wallet: { __type: "Wallet!" },
  },
  TeamApprovalForAll: {
    __typename: { __type: "String!" },
    approved: { __type: "Boolean!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    operator: { __type: "Bytes!" },
    owner: { __type: "Bytes!" },
    team: { __type: "Team!" },
    transactionHash: { __type: "Bytes!" },
  },
  TeamApprovalForAll_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[TeamApprovalForAll_filter]" },
    approved: { __type: "Boolean" },
    approved_in: { __type: "[Boolean!]" },
    approved_not: { __type: "Boolean" },
    approved_not_in: { __type: "[Boolean!]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    operator: { __type: "Bytes" },
    operator_contains: { __type: "Bytes" },
    operator_gt: { __type: "Bytes" },
    operator_gte: { __type: "Bytes" },
    operator_in: { __type: "[Bytes!]" },
    operator_lt: { __type: "Bytes" },
    operator_lte: { __type: "Bytes" },
    operator_not: { __type: "Bytes" },
    operator_not_contains: { __type: "Bytes" },
    operator_not_in: { __type: "[Bytes!]" },
    or: { __type: "[TeamApprovalForAll_filter]" },
    owner: { __type: "Bytes" },
    owner_contains: { __type: "Bytes" },
    owner_gt: { __type: "Bytes" },
    owner_gte: { __type: "Bytes" },
    owner_in: { __type: "[Bytes!]" },
    owner_lt: { __type: "Bytes" },
    owner_lte: { __type: "Bytes" },
    owner_not: { __type: "Bytes" },
    owner_not_contains: { __type: "Bytes" },
    owner_not_in: { __type: "[Bytes!]" },
    team: { __type: "String" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  TeamApproval_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[TeamApproval_filter]" },
    approved: { __type: "Bytes" },
    approved_contains: { __type: "Bytes" },
    approved_gt: { __type: "Bytes" },
    approved_gte: { __type: "Bytes" },
    approved_in: { __type: "[Bytes!]" },
    approved_lt: { __type: "Bytes" },
    approved_lte: { __type: "Bytes" },
    approved_not: { __type: "Bytes" },
    approved_not_contains: { __type: "Bytes" },
    approved_not_in: { __type: "[Bytes!]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[TeamApproval_filter]" },
    owner: { __type: "Bytes" },
    owner_contains: { __type: "Bytes" },
    owner_gt: { __type: "Bytes" },
    owner_gte: { __type: "Bytes" },
    owner_in: { __type: "[Bytes!]" },
    owner_lt: { __type: "Bytes" },
    owner_lte: { __type: "Bytes" },
    owner_not: { __type: "Bytes" },
    owner_not_contains: { __type: "Bytes" },
    owner_not_in: { __type: "[Bytes!]" },
    team: { __type: "String" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
    wallet: { __type: "String" },
    wallet_: { __type: "Wallet_filter" },
    wallet_contains: { __type: "String" },
    wallet_contains_nocase: { __type: "String" },
    wallet_ends_with: { __type: "String" },
    wallet_ends_with_nocase: { __type: "String" },
    wallet_gt: { __type: "String" },
    wallet_gte: { __type: "String" },
    wallet_in: { __type: "[String!]" },
    wallet_lt: { __type: "String" },
    wallet_lte: { __type: "String" },
    wallet_not: { __type: "String" },
    wallet_not_contains: { __type: "String" },
    wallet_not_contains_nocase: { __type: "String" },
    wallet_not_ends_with: { __type: "String" },
    wallet_not_ends_with_nocase: { __type: "String" },
    wallet_not_in: { __type: "[String!]" },
    wallet_not_starts_with: { __type: "String" },
    wallet_not_starts_with_nocase: { __type: "String" },
    wallet_starts_with: { __type: "String" },
    wallet_starts_with_nocase: { __type: "String" },
  },
  TeamCreated: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    team: { __type: "Team!" },
    teamId: { __type: "BigInt!" },
    to: { __type: "Bytes!" },
    transactionHash: { __type: "Bytes!" },
  },
  TeamCreated_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[TeamCreated_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[TeamCreated_filter]" },
    team: { __type: "String" },
    teamId: { __type: "BigInt" },
    teamId_gt: { __type: "BigInt" },
    teamId_gte: { __type: "BigInt" },
    teamId_in: { __type: "[BigInt!]" },
    teamId_lt: { __type: "BigInt" },
    teamId_lte: { __type: "BigInt" },
    teamId_not: { __type: "BigInt" },
    teamId_not_in: { __type: "[BigInt!]" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
    to: { __type: "Bytes" },
    to_contains: { __type: "Bytes" },
    to_gt: { __type: "Bytes" },
    to_gte: { __type: "Bytes" },
    to_in: { __type: "[Bytes!]" },
    to_lt: { __type: "Bytes" },
    to_lte: { __type: "Bytes" },
    to_not: { __type: "Bytes" },
    to_not_contains: { __type: "Bytes" },
    to_not_in: { __type: "[Bytes!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  TeamOwnership: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    organisation: { __type: "Organisation" },
    owner: { __type: "Wallet" },
    team: { __type: "Team!" },
  },
  TeamOwnershipTransferred: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    newOwner: { __type: "Bytes!" },
    previousOwner: { __type: "Bytes!" },
    transactionHash: { __type: "Bytes!" },
  },
  TeamOwnershipTransferred_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[TeamOwnershipTransferred_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    newOwner: { __type: "Bytes" },
    newOwner_contains: { __type: "Bytes" },
    newOwner_gt: { __type: "Bytes" },
    newOwner_gte: { __type: "Bytes" },
    newOwner_in: { __type: "[Bytes!]" },
    newOwner_lt: { __type: "Bytes" },
    newOwner_lte: { __type: "Bytes" },
    newOwner_not: { __type: "Bytes" },
    newOwner_not_contains: { __type: "Bytes" },
    newOwner_not_in: { __type: "[Bytes!]" },
    or: { __type: "[TeamOwnershipTransferred_filter]" },
    previousOwner: { __type: "Bytes" },
    previousOwner_contains: { __type: "Bytes" },
    previousOwner_gt: { __type: "Bytes" },
    previousOwner_gte: { __type: "Bytes" },
    previousOwner_in: { __type: "[Bytes!]" },
    previousOwner_lt: { __type: "Bytes" },
    previousOwner_lte: { __type: "Bytes" },
    previousOwner_not: { __type: "Bytes" },
    previousOwner_not_contains: { __type: "Bytes" },
    previousOwner_not_in: { __type: "[Bytes!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  TeamOwnership_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[TeamOwnership_filter]" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    or: { __type: "[TeamOwnership_filter]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    owner: { __type: "String" },
    owner_: { __type: "Wallet_filter" },
    owner_contains: { __type: "String" },
    owner_contains_nocase: { __type: "String" },
    owner_ends_with: { __type: "String" },
    owner_ends_with_nocase: { __type: "String" },
    owner_gt: { __type: "String" },
    owner_gte: { __type: "String" },
    owner_in: { __type: "[String!]" },
    owner_lt: { __type: "String" },
    owner_lte: { __type: "String" },
    owner_not: { __type: "String" },
    owner_not_contains: { __type: "String" },
    owner_not_contains_nocase: { __type: "String" },
    owner_not_ends_with: { __type: "String" },
    owner_not_ends_with_nocase: { __type: "String" },
    owner_not_in: { __type: "[String!]" },
    owner_not_starts_with: { __type: "String" },
    owner_not_starts_with_nocase: { __type: "String" },
    owner_starts_with: { __type: "String" },
    owner_starts_with_nocase: { __type: "String" },
    team: { __type: "String" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
  },
  TeamPermission: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    permissionLevel: { __type: "Int!" },
    team: { __type: "Team!" },
    wallet: { __type: "Wallet!" },
  },
  TeamPermission_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[TeamPermission_filter]" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    or: { __type: "[TeamPermission_filter]" },
    permissionLevel: { __type: "Int" },
    permissionLevel_gt: { __type: "Int" },
    permissionLevel_gte: { __type: "Int" },
    permissionLevel_in: { __type: "[Int!]" },
    permissionLevel_lt: { __type: "Int" },
    permissionLevel_lte: { __type: "Int" },
    permissionLevel_not: { __type: "Int" },
    permissionLevel_not_in: { __type: "[Int!]" },
    team: { __type: "String" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
    wallet: { __type: "String" },
    wallet_: { __type: "Wallet_filter" },
    wallet_contains: { __type: "String" },
    wallet_contains_nocase: { __type: "String" },
    wallet_ends_with: { __type: "String" },
    wallet_ends_with_nocase: { __type: "String" },
    wallet_gt: { __type: "String" },
    wallet_gte: { __type: "String" },
    wallet_in: { __type: "[String!]" },
    wallet_lt: { __type: "String" },
    wallet_lte: { __type: "String" },
    wallet_not: { __type: "String" },
    wallet_not_contains: { __type: "String" },
    wallet_not_contains_nocase: { __type: "String" },
    wallet_not_ends_with: { __type: "String" },
    wallet_not_ends_with_nocase: { __type: "String" },
    wallet_not_in: { __type: "[String!]" },
    wallet_not_starts_with: { __type: "String" },
    wallet_not_starts_with_nocase: { __type: "String" },
    wallet_starts_with: { __type: "String" },
    wallet_starts_with_nocase: { __type: "String" },
  },
  TeamPermissionsUpdated: {
    __typename: { __type: "String!" },
    account: { __type: "Bytes!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    newPermission: { __type: "Int!" },
    team: { __type: "Team!" },
    teamId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  TeamPermissionsUpdated_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    account: { __type: "Bytes" },
    account_contains: { __type: "Bytes" },
    account_gt: { __type: "Bytes" },
    account_gte: { __type: "Bytes" },
    account_in: { __type: "[Bytes!]" },
    account_lt: { __type: "Bytes" },
    account_lte: { __type: "Bytes" },
    account_not: { __type: "Bytes" },
    account_not_contains: { __type: "Bytes" },
    account_not_in: { __type: "[Bytes!]" },
    and: { __type: "[TeamPermissionsUpdated_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    newPermission: { __type: "Int" },
    newPermission_gt: { __type: "Int" },
    newPermission_gte: { __type: "Int" },
    newPermission_in: { __type: "[Int!]" },
    newPermission_lt: { __type: "Int" },
    newPermission_lte: { __type: "Int" },
    newPermission_not: { __type: "Int" },
    newPermission_not_in: { __type: "[Int!]" },
    or: { __type: "[TeamPermissionsUpdated_filter]" },
    team: { __type: "String" },
    teamId: { __type: "BigInt" },
    teamId_gt: { __type: "BigInt" },
    teamId_gte: { __type: "BigInt" },
    teamId_in: { __type: "[BigInt!]" },
    teamId_lt: { __type: "BigInt" },
    teamId_lte: { __type: "BigInt" },
    teamId_not: { __type: "BigInt" },
    teamId_not_in: { __type: "[BigInt!]" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  TeamRenamed: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    newName: { __type: "String!" },
    team: { __type: "Team!" },
    transactionHash: { __type: "Bytes!" },
  },
  TeamRenamed_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[TeamRenamed_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    newName: { __type: "String" },
    newName_contains: { __type: "String" },
    newName_contains_nocase: { __type: "String" },
    newName_ends_with: { __type: "String" },
    newName_ends_with_nocase: { __type: "String" },
    newName_gt: { __type: "String" },
    newName_gte: { __type: "String" },
    newName_in: { __type: "[String!]" },
    newName_lt: { __type: "String" },
    newName_lte: { __type: "String" },
    newName_not: { __type: "String" },
    newName_not_contains: { __type: "String" },
    newName_not_contains_nocase: { __type: "String" },
    newName_not_ends_with: { __type: "String" },
    newName_not_ends_with_nocase: { __type: "String" },
    newName_not_in: { __type: "[String!]" },
    newName_not_starts_with: { __type: "String" },
    newName_not_starts_with_nocase: { __type: "String" },
    newName_starts_with: { __type: "String" },
    newName_starts_with_nocase: { __type: "String" },
    or: { __type: "[TeamRenamed_filter]" },
    team: { __type: "String" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  TeamTransfer: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    from: { __type: "Bytes!" },
    id: { __type: "Bytes!" },
    team: { __type: "Team!" },
    to: { __type: "Bytes!" },
    tokenId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  TeamTransferToOrganisation: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "BigInt!" },
    blockTimestamp: { __type: "BigInt!" },
    id: { __type: "Bytes!" },
    orgId: { __type: "BigInt!" },
    organisation: { __type: "Organisation!" },
    team: { __type: "Team!" },
    teamId: { __type: "BigInt!" },
    transactionHash: { __type: "Bytes!" },
  },
  TeamTransferToOrganisation_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[TeamTransferToOrganisation_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[TeamTransferToOrganisation_filter]" },
    orgId: { __type: "BigInt" },
    orgId_gt: { __type: "BigInt" },
    orgId_gte: { __type: "BigInt" },
    orgId_in: { __type: "[BigInt!]" },
    orgId_lt: { __type: "BigInt" },
    orgId_lte: { __type: "BigInt" },
    orgId_not: { __type: "BigInt" },
    orgId_not_in: { __type: "[BigInt!]" },
    organisation: { __type: "String" },
    organisation_: { __type: "Organisation_filter" },
    organisation_contains: { __type: "String" },
    organisation_contains_nocase: { __type: "String" },
    organisation_ends_with: { __type: "String" },
    organisation_ends_with_nocase: { __type: "String" },
    organisation_gt: { __type: "String" },
    organisation_gte: { __type: "String" },
    organisation_in: { __type: "[String!]" },
    organisation_lt: { __type: "String" },
    organisation_lte: { __type: "String" },
    organisation_not: { __type: "String" },
    organisation_not_contains: { __type: "String" },
    organisation_not_contains_nocase: { __type: "String" },
    organisation_not_ends_with: { __type: "String" },
    organisation_not_ends_with_nocase: { __type: "String" },
    organisation_not_in: { __type: "[String!]" },
    organisation_not_starts_with: { __type: "String" },
    organisation_not_starts_with_nocase: { __type: "String" },
    organisation_starts_with: { __type: "String" },
    organisation_starts_with_nocase: { __type: "String" },
    team: { __type: "String" },
    teamId: { __type: "BigInt" },
    teamId_gt: { __type: "BigInt" },
    teamId_gte: { __type: "BigInt" },
    teamId_in: { __type: "[BigInt!]" },
    teamId_lt: { __type: "BigInt" },
    teamId_lte: { __type: "BigInt" },
    teamId_not: { __type: "BigInt" },
    teamId_not_in: { __type: "[BigInt!]" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  TeamTransfer_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[TeamTransfer_filter]" },
    blockNumber: { __type: "BigInt" },
    blockNumber_gt: { __type: "BigInt" },
    blockNumber_gte: { __type: "BigInt" },
    blockNumber_in: { __type: "[BigInt!]" },
    blockNumber_lt: { __type: "BigInt" },
    blockNumber_lte: { __type: "BigInt" },
    blockNumber_not: { __type: "BigInt" },
    blockNumber_not_in: { __type: "[BigInt!]" },
    blockTimestamp: { __type: "BigInt" },
    blockTimestamp_gt: { __type: "BigInt" },
    blockTimestamp_gte: { __type: "BigInt" },
    blockTimestamp_in: { __type: "[BigInt!]" },
    blockTimestamp_lt: { __type: "BigInt" },
    blockTimestamp_lte: { __type: "BigInt" },
    blockTimestamp_not: { __type: "BigInt" },
    blockTimestamp_not_in: { __type: "[BigInt!]" },
    from: { __type: "Bytes" },
    from_contains: { __type: "Bytes" },
    from_gt: { __type: "Bytes" },
    from_gte: { __type: "Bytes" },
    from_in: { __type: "[Bytes!]" },
    from_lt: { __type: "Bytes" },
    from_lte: { __type: "Bytes" },
    from_not: { __type: "Bytes" },
    from_not_contains: { __type: "Bytes" },
    from_not_in: { __type: "[Bytes!]" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[TeamTransfer_filter]" },
    team: { __type: "String" },
    team_: { __type: "Team_filter" },
    team_contains: { __type: "String" },
    team_contains_nocase: { __type: "String" },
    team_ends_with: { __type: "String" },
    team_ends_with_nocase: { __type: "String" },
    team_gt: { __type: "String" },
    team_gte: { __type: "String" },
    team_in: { __type: "[String!]" },
    team_lt: { __type: "String" },
    team_lte: { __type: "String" },
    team_not: { __type: "String" },
    team_not_contains: { __type: "String" },
    team_not_contains_nocase: { __type: "String" },
    team_not_ends_with: { __type: "String" },
    team_not_ends_with_nocase: { __type: "String" },
    team_not_in: { __type: "[String!]" },
    team_not_starts_with: { __type: "String" },
    team_not_starts_with_nocase: { __type: "String" },
    team_starts_with: { __type: "String" },
    team_starts_with_nocase: { __type: "String" },
    to: { __type: "Bytes" },
    to_contains: { __type: "Bytes" },
    to_gt: { __type: "Bytes" },
    to_gte: { __type: "Bytes" },
    to_in: { __type: "[Bytes!]" },
    to_lt: { __type: "Bytes" },
    to_lte: { __type: "Bytes" },
    to_not: { __type: "Bytes" },
    to_not_contains: { __type: "Bytes" },
    to_not_in: { __type: "[Bytes!]" },
    tokenId: { __type: "BigInt" },
    tokenId_gt: { __type: "BigInt" },
    tokenId_gte: { __type: "BigInt" },
    tokenId_in: { __type: "[BigInt!]" },
    tokenId_lt: { __type: "BigInt" },
    tokenId_lte: { __type: "BigInt" },
    tokenId_not: { __type: "BigInt" },
    tokenId_not_in: { __type: "[BigInt!]" },
    transactionHash: { __type: "Bytes" },
    transactionHash_contains: { __type: "Bytes" },
    transactionHash_gt: { __type: "Bytes" },
    transactionHash_gte: { __type: "Bytes" },
    transactionHash_in: { __type: "[Bytes!]" },
    transactionHash_lt: { __type: "Bytes" },
    transactionHash_lte: { __type: "Bytes" },
    transactionHash_not: { __type: "Bytes" },
    transactionHash_not_contains: { __type: "Bytes" },
    transactionHash_not_in: { __type: "[Bytes!]" },
  },
  Team_filter: {
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[Team_filter]" },
    approvals_: { __type: "TeamApproval_filter" },
    createdAt: { __type: "BigInt" },
    createdAt_gt: { __type: "BigInt" },
    createdAt_gte: { __type: "BigInt" },
    createdAt_in: { __type: "[BigInt!]" },
    createdAt_lt: { __type: "BigInt" },
    createdAt_lte: { __type: "BigInt" },
    createdAt_not: { __type: "BigInt" },
    createdAt_not_in: { __type: "[BigInt!]" },
    externalEtches_: { __type: "EtchPermission_filter" },
    id: { __type: "ID" },
    id_gt: { __type: "ID" },
    id_gte: { __type: "ID" },
    id_in: { __type: "[ID!]" },
    id_lt: { __type: "ID" },
    id_lte: { __type: "ID" },
    id_not: { __type: "ID" },
    id_not_in: { __type: "[ID!]" },
    managedEtches_: { __type: "EtchOwnership_filter" },
    name: { __type: "String" },
    name_contains: { __type: "String" },
    name_contains_nocase: { __type: "String" },
    name_ends_with: { __type: "String" },
    name_ends_with_nocase: { __type: "String" },
    name_gt: { __type: "String" },
    name_gte: { __type: "String" },
    name_in: { __type: "[String!]" },
    name_lt: { __type: "String" },
    name_lte: { __type: "String" },
    name_not: { __type: "String" },
    name_not_contains: { __type: "String" },
    name_not_contains_nocase: { __type: "String" },
    name_not_ends_with: { __type: "String" },
    name_not_ends_with_nocase: { __type: "String" },
    name_not_in: { __type: "[String!]" },
    name_not_starts_with: { __type: "String" },
    name_not_starts_with_nocase: { __type: "String" },
    name_starts_with: { __type: "String" },
    name_starts_with_nocase: { __type: "String" },
    or: { __type: "[Team_filter]" },
    ownership_: { __type: "TeamOwnership_filter" },
    permissions_: { __type: "TeamPermission_filter" },
    teamId: { __type: "BigInt" },
    teamId_gt: { __type: "BigInt" },
    teamId_gte: { __type: "BigInt" },
    teamId_in: { __type: "[BigInt!]" },
    teamId_lt: { __type: "BigInt" },
    teamId_lte: { __type: "BigInt" },
    teamId_not: { __type: "BigInt" },
    teamId_not_in: { __type: "[BigInt!]" },
    transfers_: { __type: "TeamTransfer_filter" },
  },
  Wallet: {
    __typename: { __type: "String!" },
    OrganisationApprovals: {
      __type: "[OrganisationApproval!]",
      __args: {
        first: "Int",
        orderBy: "OrganisationApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "OrganisationApproval_filter",
      },
    },
    OrganisationPermissions: {
      __type: "[OrganisationPermission!]",
      __args: {
        first: "Int",
        orderBy: "OrganisationPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "OrganisationPermission_filter",
      },
    },
    etchENS: {
      __type: "[EtchENS!]!",
      __args: {
        first: "Int",
        orderBy: "EtchENS_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "EtchENS_filter",
      },
    },
    etchPermissions: {
      __type: "[EtchPermission!]",
      __args: {
        first: "Int",
        orderBy: "EtchPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "EtchPermission_filter",
      },
    },
    id: { __type: "Bytes!" },
    ownedEtches: {
      __type: "[EtchOwnership!]",
      __args: {
        first: "Int",
        orderBy: "EtchOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "EtchOwnership_filter",
      },
    },
    ownedTeams: {
      __type: "[TeamOwnership!]",
      __args: {
        first: "Int",
        orderBy: "TeamOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "TeamOwnership_filter",
      },
    },
    ownedorganisations: {
      __type: "[OrganisationOwnership!]",
      __args: {
        first: "Int",
        orderBy: "OrganisationOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "OrganisationOwnership_filter",
      },
    },
    teamApprovals: {
      __type: "[TeamApproval!]",
      __args: {
        first: "Int",
        orderBy: "TeamApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "TeamApproval_filter",
      },
    },
    teamPermissions: {
      __type: "[TeamPermission!]",
      __args: {
        first: "Int",
        orderBy: "TeamPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        where: "TeamPermission_filter",
      },
    },
  },
  Wallet_filter: {
    OrganisationApprovals_: { __type: "OrganisationApproval_filter" },
    OrganisationPermissions_: { __type: "OrganisationPermission_filter" },
    _change_block: { __type: "BlockChangedFilter" },
    and: { __type: "[Wallet_filter]" },
    etchENS_: { __type: "EtchENS_filter" },
    etchPermissions_: { __type: "EtchPermission_filter" },
    id: { __type: "Bytes" },
    id_contains: { __type: "Bytes" },
    id_gt: { __type: "Bytes" },
    id_gte: { __type: "Bytes" },
    id_in: { __type: "[Bytes!]" },
    id_lt: { __type: "Bytes" },
    id_lte: { __type: "Bytes" },
    id_not: { __type: "Bytes" },
    id_not_contains: { __type: "Bytes" },
    id_not_in: { __type: "[Bytes!]" },
    or: { __type: "[Wallet_filter]" },
    ownedEtches_: { __type: "EtchOwnership_filter" },
    ownedTeams_: { __type: "TeamOwnership_filter" },
    ownedorganisations_: { __type: "OrganisationOwnership_filter" },
    teamApprovals_: { __type: "TeamApproval_filter" },
    teamPermissions_: { __type: "TeamPermission_filter" },
  },
  _Block_: {
    __typename: { __type: "String!" },
    hash: { __type: "Bytes" },
    number: { __type: "Int!" },
    timestamp: { __type: "Int" },
  },
  _Meta_: {
    __typename: { __type: "String!" },
    block: { __type: "_Block_!" },
    deployment: { __type: "String!" },
    hasIndexingErrors: { __type: "Boolean!" },
  },
  mutation: {},
  query: {
    __typename: { __type: "String!" },
    _meta: { __type: "_Meta_", __args: { block: "Block_height" } },
    etch: { __type: "Etch", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    etchApproval: {
      __type: "EtchApproval",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchApprovalForAll: {
      __type: "EtchApprovalForAll",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchApprovalForAlls: {
      __type: "[EtchApprovalForAll!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchApprovalForAll_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchApprovalForAll_filter",
      },
    },
    etchApprovals: {
      __type: "[EtchApproval!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchApproval_filter",
      },
    },
    etchCommentAdded: {
      __type: "EtchCommentAdded",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchCommentAddeds: {
      __type: "[EtchCommentAdded!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchCommentAdded_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchCommentAdded_filter",
      },
    },
    etchCreated: { __type: "EtchCreated", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    etchCreateds: {
      __type: "[EtchCreated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchCreated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchCreated_filter",
      },
    },
    etchENS: { __type: "EtchENS", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    etchENSCreated: {
      __type: "EtchENSCreated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchENSCreateds: {
      __type: "[EtchENSCreated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchENSCreated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchENSCreated_filter",
      },
    },
    etchENSTransfer: {
      __type: "EtchENSTransfer",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchENSTransfers: {
      __type: "[EtchENSTransfer!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchENSTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchENSTransfer_filter",
      },
    },
    etchENSs: {
      __type: "[EtchENS!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchENS_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchENS_filter",
      },
    },
    etchOwnership: {
      __type: "EtchOwnership",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchOwnershipTransferred: {
      __type: "EtchOwnershipTransferred",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchOwnershipTransferreds: {
      __type: "[EtchOwnershipTransferred!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchOwnershipTransferred_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchOwnershipTransferred_filter",
      },
    },
    etchOwnerships: {
      __type: "[EtchOwnership!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchOwnership_filter",
      },
    },
    etchPermission: {
      __type: "EtchPermission",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchPermissions: {
      __type: "[EtchPermission!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchPermission_filter",
      },
    },
    etchPermissionsUpdated: {
      __type: "EtchPermissionsUpdated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchPermissionsUpdateds: {
      __type: "[EtchPermissionsUpdated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchPermissionsUpdated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchPermissionsUpdated_filter",
      },
    },
    etchTeamPermissionsUpdated: {
      __type: "EtchTeamPermissionsUpdated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchTeamPermissionsUpdateds: {
      __type: "[EtchTeamPermissionsUpdated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchTeamPermissionsUpdated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchTeamPermissionsUpdated_filter",
      },
    },
    etchTransfer: {
      __type: "EtchTransfer",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchTransferedToTeam: {
      __type: "EtchTransferedToTeam",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchTransferedToTeams: {
      __type: "[EtchTransferedToTeam!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchTransferedToTeam_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchTransferedToTeam_filter",
      },
    },
    etchTransfers: {
      __type: "[EtchTransfer!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchTransfer_filter",
      },
    },
    etches: {
      __type: "[Etch!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "Etch_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "Etch_filter",
      },
    },
    organisation: {
      __type: "Organisation",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationApproval: {
      __type: "OrganisationApproval",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationApprovalForAll: {
      __type: "OrganisationApprovalForAll",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationApprovalForAlls: {
      __type: "[OrganisationApprovalForAll!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationApprovalForAll_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationApprovalForAll_filter",
      },
    },
    organisationApprovals: {
      __type: "[OrganisationApproval!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationApproval_filter",
      },
    },
    organisationContractOwnershipTransferred: {
      __type: "OrganisationContractOwnershipTransferred",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationContractOwnershipTransferreds: {
      __type: "[OrganisationContractOwnershipTransferred!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationContractOwnershipTransferred_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationContractOwnershipTransferred_filter",
      },
    },
    organisationCreated: {
      __type: "OrganisationCreated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationCreateds: {
      __type: "[OrganisationCreated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationCreated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationCreated_filter",
      },
    },
    organisationOwnership: {
      __type: "OrganisationOwnership",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationOwnerships: {
      __type: "[OrganisationOwnership!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationOwnership_filter",
      },
    },
    organisationPermission: {
      __type: "OrganisationPermission",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationPermissions: {
      __type: "[OrganisationPermission!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationPermission_filter",
      },
    },
    organisationPermissionsUpdated: {
      __type: "OrganisationPermissionsUpdated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationPermissionsUpdateds: {
      __type: "[OrganisationPermissionsUpdated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationPermissionsUpdated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationPermissionsUpdated_filter",
      },
    },
    organisationRenamed: {
      __type: "OrganisationRenamed",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationRenameds: {
      __type: "[OrganisationRenamed!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationRenamed_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationRenamed_filter",
      },
    },
    organisationTransfer: {
      __type: "OrganisationTransfer",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationTransfers: {
      __type: "[OrganisationTransfer!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationTransfer_filter",
      },
    },
    organisations: {
      __type: "[Organisation!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "Organisation_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "Organisation_filter",
      },
    },
    team: { __type: "Team", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    teamApproval: {
      __type: "TeamApproval",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamApprovalForAll: {
      __type: "TeamApprovalForAll",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamApprovalForAlls: {
      __type: "[TeamApprovalForAll!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamApprovalForAll_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamApprovalForAll_filter",
      },
    },
    teamApprovals: {
      __type: "[TeamApproval!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamApproval_filter",
      },
    },
    teamCreated: { __type: "TeamCreated", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    teamCreateds: {
      __type: "[TeamCreated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamCreated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamCreated_filter",
      },
    },
    teamOwnership: {
      __type: "TeamOwnership",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamOwnershipTransferred: {
      __type: "TeamOwnershipTransferred",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamOwnershipTransferreds: {
      __type: "[TeamOwnershipTransferred!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamOwnershipTransferred_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamOwnershipTransferred_filter",
      },
    },
    teamOwnerships: {
      __type: "[TeamOwnership!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamOwnership_filter",
      },
    },
    teamPermission: {
      __type: "TeamPermission",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamPermissions: {
      __type: "[TeamPermission!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamPermission_filter",
      },
    },
    teamPermissionsUpdated: {
      __type: "TeamPermissionsUpdated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamPermissionsUpdateds: {
      __type: "[TeamPermissionsUpdated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamPermissionsUpdated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamPermissionsUpdated_filter",
      },
    },
    teamRenamed: { __type: "TeamRenamed", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    teamRenameds: {
      __type: "[TeamRenamed!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamRenamed_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamRenamed_filter",
      },
    },
    teamTransfer: {
      __type: "TeamTransfer",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamTransferToOrganisation: {
      __type: "TeamTransferToOrganisation",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamTransferToOrganisations: {
      __type: "[TeamTransferToOrganisation!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamTransferToOrganisation_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamTransferToOrganisation_filter",
      },
    },
    teamTransfers: {
      __type: "[TeamTransfer!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamTransfer_filter",
      },
    },
    teams: {
      __type: "[Team!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "Team_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "Team_filter",
      },
    },
    wallet: { __type: "Wallet", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    wallets: {
      __type: "[Wallet!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "Wallet_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "Wallet_filter",
      },
    },
  },
  subscription: {
    __typename: { __type: "String!" },
    _meta: { __type: "_Meta_", __args: { block: "Block_height" } },
    etch: { __type: "Etch", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    etchApproval: {
      __type: "EtchApproval",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchApprovalForAll: {
      __type: "EtchApprovalForAll",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchApprovalForAlls: {
      __type: "[EtchApprovalForAll!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchApprovalForAll_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchApprovalForAll_filter",
      },
    },
    etchApprovals: {
      __type: "[EtchApproval!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchApproval_filter",
      },
    },
    etchCommentAdded: {
      __type: "EtchCommentAdded",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchCommentAddeds: {
      __type: "[EtchCommentAdded!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchCommentAdded_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchCommentAdded_filter",
      },
    },
    etchCreated: { __type: "EtchCreated", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    etchCreateds: {
      __type: "[EtchCreated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchCreated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchCreated_filter",
      },
    },
    etchENS: { __type: "EtchENS", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    etchENSCreated: {
      __type: "EtchENSCreated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchENSCreateds: {
      __type: "[EtchENSCreated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchENSCreated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchENSCreated_filter",
      },
    },
    etchENSTransfer: {
      __type: "EtchENSTransfer",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchENSTransfers: {
      __type: "[EtchENSTransfer!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchENSTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchENSTransfer_filter",
      },
    },
    etchENSs: {
      __type: "[EtchENS!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchENS_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchENS_filter",
      },
    },
    etchOwnership: {
      __type: "EtchOwnership",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchOwnershipTransferred: {
      __type: "EtchOwnershipTransferred",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchOwnershipTransferreds: {
      __type: "[EtchOwnershipTransferred!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchOwnershipTransferred_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchOwnershipTransferred_filter",
      },
    },
    etchOwnerships: {
      __type: "[EtchOwnership!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchOwnership_filter",
      },
    },
    etchPermission: {
      __type: "EtchPermission",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchPermissions: {
      __type: "[EtchPermission!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchPermission_filter",
      },
    },
    etchPermissionsUpdated: {
      __type: "EtchPermissionsUpdated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchPermissionsUpdateds: {
      __type: "[EtchPermissionsUpdated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchPermissionsUpdated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchPermissionsUpdated_filter",
      },
    },
    etchTeamPermissionsUpdated: {
      __type: "EtchTeamPermissionsUpdated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchTeamPermissionsUpdateds: {
      __type: "[EtchTeamPermissionsUpdated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchTeamPermissionsUpdated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchTeamPermissionsUpdated_filter",
      },
    },
    etchTransfer: {
      __type: "EtchTransfer",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchTransferedToTeam: {
      __type: "EtchTransferedToTeam",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    etchTransferedToTeams: {
      __type: "[EtchTransferedToTeam!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchTransferedToTeam_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchTransferedToTeam_filter",
      },
    },
    etchTransfers: {
      __type: "[EtchTransfer!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "EtchTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "EtchTransfer_filter",
      },
    },
    etches: {
      __type: "[Etch!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "Etch_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "Etch_filter",
      },
    },
    organisation: {
      __type: "Organisation",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationApproval: {
      __type: "OrganisationApproval",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationApprovalForAll: {
      __type: "OrganisationApprovalForAll",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationApprovalForAlls: {
      __type: "[OrganisationApprovalForAll!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationApprovalForAll_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationApprovalForAll_filter",
      },
    },
    organisationApprovals: {
      __type: "[OrganisationApproval!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationApproval_filter",
      },
    },
    organisationContractOwnershipTransferred: {
      __type: "OrganisationContractOwnershipTransferred",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationContractOwnershipTransferreds: {
      __type: "[OrganisationContractOwnershipTransferred!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationContractOwnershipTransferred_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationContractOwnershipTransferred_filter",
      },
    },
    organisationCreated: {
      __type: "OrganisationCreated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationCreateds: {
      __type: "[OrganisationCreated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationCreated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationCreated_filter",
      },
    },
    organisationOwnership: {
      __type: "OrganisationOwnership",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationOwnerships: {
      __type: "[OrganisationOwnership!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationOwnership_filter",
      },
    },
    organisationPermission: {
      __type: "OrganisationPermission",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationPermissions: {
      __type: "[OrganisationPermission!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationPermission_filter",
      },
    },
    organisationPermissionsUpdated: {
      __type: "OrganisationPermissionsUpdated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationPermissionsUpdateds: {
      __type: "[OrganisationPermissionsUpdated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationPermissionsUpdated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationPermissionsUpdated_filter",
      },
    },
    organisationRenamed: {
      __type: "OrganisationRenamed",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationRenameds: {
      __type: "[OrganisationRenamed!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationRenamed_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationRenamed_filter",
      },
    },
    organisationTransfer: {
      __type: "OrganisationTransfer",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    organisationTransfers: {
      __type: "[OrganisationTransfer!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "OrganisationTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "OrganisationTransfer_filter",
      },
    },
    organisations: {
      __type: "[Organisation!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "Organisation_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "Organisation_filter",
      },
    },
    team: { __type: "Team", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    teamApproval: {
      __type: "TeamApproval",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamApprovalForAll: {
      __type: "TeamApprovalForAll",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamApprovalForAlls: {
      __type: "[TeamApprovalForAll!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamApprovalForAll_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamApprovalForAll_filter",
      },
    },
    teamApprovals: {
      __type: "[TeamApproval!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamApproval_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamApproval_filter",
      },
    },
    teamCreated: { __type: "TeamCreated", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    teamCreateds: {
      __type: "[TeamCreated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamCreated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamCreated_filter",
      },
    },
    teamOwnership: {
      __type: "TeamOwnership",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamOwnershipTransferred: {
      __type: "TeamOwnershipTransferred",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamOwnershipTransferreds: {
      __type: "[TeamOwnershipTransferred!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamOwnershipTransferred_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamOwnershipTransferred_filter",
      },
    },
    teamOwnerships: {
      __type: "[TeamOwnership!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamOwnership_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamOwnership_filter",
      },
    },
    teamPermission: {
      __type: "TeamPermission",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamPermissions: {
      __type: "[TeamPermission!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamPermission_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamPermission_filter",
      },
    },
    teamPermissionsUpdated: {
      __type: "TeamPermissionsUpdated",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamPermissionsUpdateds: {
      __type: "[TeamPermissionsUpdated!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamPermissionsUpdated_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamPermissionsUpdated_filter",
      },
    },
    teamRenamed: { __type: "TeamRenamed", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    teamRenameds: {
      __type: "[TeamRenamed!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamRenamed_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamRenamed_filter",
      },
    },
    teamTransfer: {
      __type: "TeamTransfer",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamTransferToOrganisation: {
      __type: "TeamTransferToOrganisation",
      __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" },
    },
    teamTransferToOrganisations: {
      __type: "[TeamTransferToOrganisation!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamTransferToOrganisation_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamTransferToOrganisation_filter",
      },
    },
    teamTransfers: {
      __type: "[TeamTransfer!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "TeamTransfer_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "TeamTransfer_filter",
      },
    },
    teams: {
      __type: "[Team!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "Team_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "Team_filter",
      },
    },
    wallet: { __type: "Wallet", __args: { block: "Block_height", id: "ID!", subgraphError: "_SubgraphErrorPolicy_!" } },
    wallets: {
      __type: "[Wallet!]!",
      __args: {
        block: "Block_height",
        first: "Int",
        orderBy: "Wallet_orderBy",
        orderDirection: "OrderDirection",
        skip: "Int",
        subgraphError: "_SubgraphErrorPolicy_!",
        where: "Wallet_filter",
      },
    },
  },
} as const;

export interface Etch {
  __typename?: "Etch";
  approvals: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<EtchApproval_filter>;
  }) => Maybe<Array<EtchApproval>>;
  comments: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchCommentAdded_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<EtchCommentAdded_filter>;
  }) => Maybe<Array<EtchCommentAdded>>;
  createdAt: ScalarsEnums["BigInt"];
  documentName: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  ipfsCid: ScalarsEnums["String"];
  ownership: EtchOwnership;
  permissions: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<EtchPermission_filter>;
  }) => Maybe<Array<EtchPermission>>;
  tokenId: ScalarsEnums["BigInt"];
  transfers: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<EtchTransfer_filter>;
  }) => Maybe<Array<EtchTransfer>>;
}

export interface EtchApproval {
  __typename?: "EtchApproval";
  approved: ScalarsEnums["Bytes"];
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  etch: Etch;
  id: ScalarsEnums["Bytes"];
  owner: ScalarsEnums["Bytes"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchApprovalForAll {
  __typename?: "EtchApprovalForAll";
  approved: ScalarsEnums["Boolean"];
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  etch: Etch;
  id: ScalarsEnums["Bytes"];
  operator: ScalarsEnums["Bytes"];
  owner: ScalarsEnums["Bytes"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchCommentAdded {
  __typename?: "EtchCommentAdded";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  commentId: ScalarsEnums["BigInt"];
  comment_commentIpfsCid: ScalarsEnums["String"];
  comment_timestamp: ScalarsEnums["BigInt"];
  etch: Etch;
  id: ScalarsEnums["Bytes"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchCreated {
  __typename?: "EtchCreated";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  to: ScalarsEnums["Bytes"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchENS {
  __typename?: "EtchENS";
  id: ScalarsEnums["ID"];
  name: ScalarsEnums["String"];
  owner: Wallet;
  tokenId: ScalarsEnums["BigInt"];
}

export interface EtchENSCreated {
  __typename?: "EtchENSCreated";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  name: ScalarsEnums["String"];
  to: ScalarsEnums["Bytes"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchENSTransfer {
  __typename?: "EtchENSTransfer";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  from: ScalarsEnums["Bytes"];
  id: ScalarsEnums["Bytes"];
  to: ScalarsEnums["Bytes"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchOwnership {
  __typename?: "EtchOwnership";
  etch: Etch;
  id: ScalarsEnums["ID"];
  owner?: Maybe<Wallet>;
  team?: Maybe<Team>;
}

export interface EtchOwnershipTransferred {
  __typename?: "EtchOwnershipTransferred";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  newOwner: ScalarsEnums["Bytes"];
  previousOwner: ScalarsEnums["Bytes"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchPermission {
  __typename?: "EtchPermission";
  etch: Etch;
  id: ScalarsEnums["ID"];
  permissionLevel: ScalarsEnums["Int"];
  team?: Maybe<Team>;
  wallet?: Maybe<Wallet>;
}

export interface EtchPermissionsUpdated {
  __typename?: "EtchPermissionsUpdated";
  account: ScalarsEnums["Bytes"];
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  newPermission: ScalarsEnums["Int"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchTeamPermissionsUpdated {
  __typename?: "EtchTeamPermissionsUpdated";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  newPermission: ScalarsEnums["Int"];
  teamId: ScalarsEnums["BigInt"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchTransfer {
  __typename?: "EtchTransfer";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  etch: Etch;
  from: ScalarsEnums["Bytes"];
  id: ScalarsEnums["Bytes"];
  to: ScalarsEnums["Bytes"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface EtchTransferedToTeam {
  __typename?: "EtchTransferedToTeam";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  from: ScalarsEnums["Bytes"];
  id: ScalarsEnums["Bytes"];
  to: ScalarsEnums["BigInt"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface Organisation {
  __typename?: "Organisation";
  approvals: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<OrganisationApproval_filter>;
  }) => Maybe<Array<OrganisationApproval>>;
  createdAt: ScalarsEnums["BigInt"];
  id: ScalarsEnums["ID"];
  managedTeams: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<TeamOwnership_filter>;
  }) => Maybe<Array<TeamOwnership>>;
  name?: Maybe<ScalarsEnums["String"]>;
  orgId: ScalarsEnums["BigInt"];
  ownership: OrganisationOwnership;
  permissions: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<OrganisationPermission_filter>;
  }) => Maybe<Array<OrganisationPermission>>;
  transfers: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<OrganisationTransfer_filter>;
  }) => Maybe<Array<OrganisationTransfer>>;
}

export interface OrganisationApproval {
  __typename?: "OrganisationApproval";
  approved: ScalarsEnums["Bytes"];
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  organisation: Organisation;
  owner: ScalarsEnums["Bytes"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
  wallet: Wallet;
}

export interface OrganisationApprovalForAll {
  __typename?: "OrganisationApprovalForAll";
  approved: ScalarsEnums["Boolean"];
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  operator: ScalarsEnums["Bytes"];
  organisation: Organisation;
  owner: ScalarsEnums["Bytes"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface OrganisationContractOwnershipTransferred {
  __typename?: "OrganisationContractOwnershipTransferred";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  newOwner: ScalarsEnums["Bytes"];
  previousOwner: ScalarsEnums["Bytes"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface OrganisationCreated {
  __typename?: "OrganisationCreated";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  orgId: ScalarsEnums["BigInt"];
  organisation: Organisation;
  to: ScalarsEnums["Bytes"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface OrganisationOwnership {
  __typename?: "OrganisationOwnership";
  id: ScalarsEnums["ID"];
  organisation: Organisation;
  owner?: Maybe<Wallet>;
}

export interface OrganisationPermission {
  __typename?: "OrganisationPermission";
  id: ScalarsEnums["ID"];
  organisation: Organisation;
  permissionLevel: ScalarsEnums["Int"];
  wallet: Wallet;
}

export interface OrganisationPermissionsUpdated {
  __typename?: "OrganisationPermissionsUpdated";
  account: ScalarsEnums["Bytes"];
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  newPermission: ScalarsEnums["Int"];
  orgId: ScalarsEnums["BigInt"];
  organisation: Organisation;
  transactionHash: ScalarsEnums["Bytes"];
}

export interface OrganisationRenamed {
  __typename?: "OrganisationRenamed";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  newName: ScalarsEnums["String"];
  organisation: Organisation;
  transactionHash: ScalarsEnums["Bytes"];
}

export interface OrganisationTransfer {
  __typename?: "OrganisationTransfer";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  from: ScalarsEnums["Bytes"];
  id: ScalarsEnums["Bytes"];
  organisation: Organisation;
  to: ScalarsEnums["Bytes"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface Team {
  __typename?: "Team";
  approvals: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<TeamApproval_filter>;
  }) => Maybe<Array<TeamApproval>>;
  createdAt: ScalarsEnums["BigInt"];
  externalEtches: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<EtchPermission_filter>;
  }) => Maybe<Array<EtchPermission>>;
  id: ScalarsEnums["ID"];
  managedEtches: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<EtchOwnership_filter>;
  }) => Maybe<Array<EtchOwnership>>;
  name?: Maybe<ScalarsEnums["String"]>;
  ownership: TeamOwnership;
  permissions: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<TeamPermission_filter>;
  }) => Maybe<Array<TeamPermission>>;
  teamId: ScalarsEnums["BigInt"];
  transfers: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<TeamTransfer_filter>;
  }) => Maybe<Array<TeamTransfer>>;
}

export interface TeamApproval {
  __typename?: "TeamApproval";
  approved: ScalarsEnums["Bytes"];
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  owner: ScalarsEnums["Bytes"];
  team: Team;
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
  wallet: Wallet;
}

export interface TeamApprovalForAll {
  __typename?: "TeamApprovalForAll";
  approved: ScalarsEnums["Boolean"];
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  operator: ScalarsEnums["Bytes"];
  owner: ScalarsEnums["Bytes"];
  team: Team;
  transactionHash: ScalarsEnums["Bytes"];
}

export interface TeamCreated {
  __typename?: "TeamCreated";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  team: Team;
  teamId: ScalarsEnums["BigInt"];
  to: ScalarsEnums["Bytes"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface TeamOwnership {
  __typename?: "TeamOwnership";
  id: ScalarsEnums["ID"];
  organisation?: Maybe<Organisation>;
  owner?: Maybe<Wallet>;
  team: Team;
}

export interface TeamOwnershipTransferred {
  __typename?: "TeamOwnershipTransferred";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  newOwner: ScalarsEnums["Bytes"];
  previousOwner: ScalarsEnums["Bytes"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface TeamPermission {
  __typename?: "TeamPermission";
  id: ScalarsEnums["ID"];
  permissionLevel: ScalarsEnums["Int"];
  team: Team;
  wallet: Wallet;
}

export interface TeamPermissionsUpdated {
  __typename?: "TeamPermissionsUpdated";
  account: ScalarsEnums["Bytes"];
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  newPermission: ScalarsEnums["Int"];
  team: Team;
  teamId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface TeamRenamed {
  __typename?: "TeamRenamed";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  newName: ScalarsEnums["String"];
  team: Team;
  transactionHash: ScalarsEnums["Bytes"];
}

export interface TeamTransfer {
  __typename?: "TeamTransfer";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  from: ScalarsEnums["Bytes"];
  id: ScalarsEnums["Bytes"];
  team: Team;
  to: ScalarsEnums["Bytes"];
  tokenId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface TeamTransferToOrganisation {
  __typename?: "TeamTransferToOrganisation";
  blockNumber: ScalarsEnums["BigInt"];
  blockTimestamp: ScalarsEnums["BigInt"];
  id: ScalarsEnums["Bytes"];
  orgId: ScalarsEnums["BigInt"];
  organisation: Organisation;
  team: Team;
  teamId: ScalarsEnums["BigInt"];
  transactionHash: ScalarsEnums["Bytes"];
}

export interface Wallet {
  __typename?: "Wallet";
  OrganisationApprovals: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<OrganisationApproval_filter>;
  }) => Maybe<Array<OrganisationApproval>>;
  OrganisationPermissions: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<OrganisationPermission_filter>;
  }) => Maybe<Array<OrganisationPermission>>;
  etchENS: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchENS_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<EtchENS_filter>;
  }) => Array<EtchENS>;
  etchPermissions: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<EtchPermission_filter>;
  }) => Maybe<Array<EtchPermission>>;
  id: ScalarsEnums["Bytes"];
  ownedEtches: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<EtchOwnership_filter>;
  }) => Maybe<Array<EtchOwnership>>;
  ownedTeams: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<TeamOwnership_filter>;
  }) => Maybe<Array<TeamOwnership>>;
  ownedorganisations: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<OrganisationOwnership_filter>;
  }) => Maybe<Array<OrganisationOwnership>>;
  teamApprovals: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<TeamApproval_filter>;
  }) => Maybe<Array<TeamApproval>>;
  teamPermissions: (args?: {
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    where?: Maybe<TeamPermission_filter>;
  }) => Maybe<Array<TeamPermission>>;
}

export interface _Block_ {
  __typename?: "_Block_";
  /**
   * The hash of the block
   */
  hash?: Maybe<ScalarsEnums["Bytes"]>;
  /**
   * The block number
   */
  number: ScalarsEnums["Int"];
  /**
   * Integer representation of the timestamp stored in blocks for the chain
   */
  timestamp?: Maybe<ScalarsEnums["Int"]>;
}

/**
 * The type for the top-level _meta field
 */
export interface _Meta_ {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /**
   * The deployment ID
   */
  deployment: ScalarsEnums["String"];
  /**
   * If `true`, the subgraph encountered indexing errors at some past block
   */
  hasIndexingErrors: ScalarsEnums["Boolean"];
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
  /**
   * Access to subgraph metadata
   */
  _meta: (args?: { block?: Maybe<Block_height> }) => Maybe<_Meta_>;
  etch: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<Etch>;
  etchApproval: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchApproval>;
  etchApprovalForAll: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchApprovalForAll>;
  etchApprovalForAlls: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchApprovalForAll_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchApprovalForAll_filter>;
  }) => Array<EtchApprovalForAll>;
  etchApprovals: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchApproval_filter>;
  }) => Array<EtchApproval>;
  etchCommentAdded: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchCommentAdded>;
  etchCommentAddeds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchCommentAdded_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchCommentAdded_filter>;
  }) => Array<EtchCommentAdded>;
  etchCreated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchCreated>;
  etchCreateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchCreated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchCreated_filter>;
  }) => Array<EtchCreated>;
  etchENS: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchENS>;
  etchENSCreated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchENSCreated>;
  etchENSCreateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchENSCreated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchENSCreated_filter>;
  }) => Array<EtchENSCreated>;
  etchENSTransfer: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchENSTransfer>;
  etchENSTransfers: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchENSTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchENSTransfer_filter>;
  }) => Array<EtchENSTransfer>;
  etchENSs: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchENS_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchENS_filter>;
  }) => Array<EtchENS>;
  etchOwnership: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchOwnership>;
  etchOwnershipTransferred: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchOwnershipTransferred>;
  etchOwnershipTransferreds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchOwnershipTransferred_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchOwnershipTransferred_filter>;
  }) => Array<EtchOwnershipTransferred>;
  etchOwnerships: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchOwnership_filter>;
  }) => Array<EtchOwnership>;
  etchPermission: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchPermission>;
  etchPermissions: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchPermission_filter>;
  }) => Array<EtchPermission>;
  etchPermissionsUpdated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchPermissionsUpdated>;
  etchPermissionsUpdateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchPermissionsUpdated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchPermissionsUpdated_filter>;
  }) => Array<EtchPermissionsUpdated>;
  etchTeamPermissionsUpdated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchTeamPermissionsUpdated>;
  etchTeamPermissionsUpdateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchTeamPermissionsUpdated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchTeamPermissionsUpdated_filter>;
  }) => Array<EtchTeamPermissionsUpdated>;
  etchTransfer: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchTransfer>;
  etchTransferedToTeam: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchTransferedToTeam>;
  etchTransferedToTeams: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchTransferedToTeam_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchTransferedToTeam_filter>;
  }) => Array<EtchTransferedToTeam>;
  etchTransfers: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchTransfer_filter>;
  }) => Array<EtchTransfer>;
  etches: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<Etch_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<Etch_filter>;
  }) => Array<Etch>;
  organisation: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<Organisation>;
  organisationApproval: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationApproval>;
  organisationApprovalForAll: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationApprovalForAll>;
  organisationApprovalForAlls: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationApprovalForAll_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationApprovalForAll_filter>;
  }) => Array<OrganisationApprovalForAll>;
  organisationApprovals: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationApproval_filter>;
  }) => Array<OrganisationApproval>;
  organisationContractOwnershipTransferred: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationContractOwnershipTransferred>;
  organisationContractOwnershipTransferreds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationContractOwnershipTransferred_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationContractOwnershipTransferred_filter>;
  }) => Array<OrganisationContractOwnershipTransferred>;
  organisationCreated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationCreated>;
  organisationCreateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationCreated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationCreated_filter>;
  }) => Array<OrganisationCreated>;
  organisationOwnership: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationOwnership>;
  organisationOwnerships: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationOwnership_filter>;
  }) => Array<OrganisationOwnership>;
  organisationPermission: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationPermission>;
  organisationPermissions: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationPermission_filter>;
  }) => Array<OrganisationPermission>;
  organisationPermissionsUpdated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationPermissionsUpdated>;
  organisationPermissionsUpdateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationPermissionsUpdated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationPermissionsUpdated_filter>;
  }) => Array<OrganisationPermissionsUpdated>;
  organisationRenamed: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationRenamed>;
  organisationRenameds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationRenamed_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationRenamed_filter>;
  }) => Array<OrganisationRenamed>;
  organisationTransfer: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationTransfer>;
  organisationTransfers: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationTransfer_filter>;
  }) => Array<OrganisationTransfer>;
  organisations: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<Organisation_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<Organisation_filter>;
  }) => Array<Organisation>;
  team: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<Team>;
  teamApproval: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamApproval>;
  teamApprovalForAll: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamApprovalForAll>;
  teamApprovalForAlls: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamApprovalForAll_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamApprovalForAll_filter>;
  }) => Array<TeamApprovalForAll>;
  teamApprovals: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamApproval_filter>;
  }) => Array<TeamApproval>;
  teamCreated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamCreated>;
  teamCreateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamCreated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamCreated_filter>;
  }) => Array<TeamCreated>;
  teamOwnership: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamOwnership>;
  teamOwnershipTransferred: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamOwnershipTransferred>;
  teamOwnershipTransferreds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamOwnershipTransferred_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamOwnershipTransferred_filter>;
  }) => Array<TeamOwnershipTransferred>;
  teamOwnerships: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamOwnership_filter>;
  }) => Array<TeamOwnership>;
  teamPermission: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamPermission>;
  teamPermissions: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamPermission_filter>;
  }) => Array<TeamPermission>;
  teamPermissionsUpdated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamPermissionsUpdated>;
  teamPermissionsUpdateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamPermissionsUpdated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamPermissionsUpdated_filter>;
  }) => Array<TeamPermissionsUpdated>;
  teamRenamed: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamRenamed>;
  teamRenameds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamRenamed_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamRenamed_filter>;
  }) => Array<TeamRenamed>;
  teamTransfer: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamTransfer>;
  teamTransferToOrganisation: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamTransferToOrganisation>;
  teamTransferToOrganisations: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamTransferToOrganisation_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamTransferToOrganisation_filter>;
  }) => Array<TeamTransferToOrganisation>;
  teamTransfers: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamTransfer_filter>;
  }) => Array<TeamTransfer>;
  teams: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<Team_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<Team_filter>;
  }) => Array<Team>;
  wallet: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<Wallet>;
  wallets: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<Wallet_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<Wallet_filter>;
  }) => Array<Wallet>;
}

export interface Subscription {
  __typename?: "Subscription";
  /**
   * Access to subgraph metadata
   */
  _meta: (args?: { block?: Maybe<Block_height> }) => Maybe<_Meta_>;
  etch: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<Etch>;
  etchApproval: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchApproval>;
  etchApprovalForAll: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchApprovalForAll>;
  etchApprovalForAlls: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchApprovalForAll_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchApprovalForAll_filter>;
  }) => Array<EtchApprovalForAll>;
  etchApprovals: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchApproval_filter>;
  }) => Array<EtchApproval>;
  etchCommentAdded: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchCommentAdded>;
  etchCommentAddeds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchCommentAdded_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchCommentAdded_filter>;
  }) => Array<EtchCommentAdded>;
  etchCreated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchCreated>;
  etchCreateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchCreated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchCreated_filter>;
  }) => Array<EtchCreated>;
  etchENS: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchENS>;
  etchENSCreated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchENSCreated>;
  etchENSCreateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchENSCreated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchENSCreated_filter>;
  }) => Array<EtchENSCreated>;
  etchENSTransfer: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchENSTransfer>;
  etchENSTransfers: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchENSTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchENSTransfer_filter>;
  }) => Array<EtchENSTransfer>;
  etchENSs: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchENS_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchENS_filter>;
  }) => Array<EtchENS>;
  etchOwnership: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchOwnership>;
  etchOwnershipTransferred: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchOwnershipTransferred>;
  etchOwnershipTransferreds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchOwnershipTransferred_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchOwnershipTransferred_filter>;
  }) => Array<EtchOwnershipTransferred>;
  etchOwnerships: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchOwnership_filter>;
  }) => Array<EtchOwnership>;
  etchPermission: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchPermission>;
  etchPermissions: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchPermission_filter>;
  }) => Array<EtchPermission>;
  etchPermissionsUpdated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchPermissionsUpdated>;
  etchPermissionsUpdateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchPermissionsUpdated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchPermissionsUpdated_filter>;
  }) => Array<EtchPermissionsUpdated>;
  etchTeamPermissionsUpdated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchTeamPermissionsUpdated>;
  etchTeamPermissionsUpdateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchTeamPermissionsUpdated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchTeamPermissionsUpdated_filter>;
  }) => Array<EtchTeamPermissionsUpdated>;
  etchTransfer: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchTransfer>;
  etchTransferedToTeam: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<EtchTransferedToTeam>;
  etchTransferedToTeams: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchTransferedToTeam_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchTransferedToTeam_filter>;
  }) => Array<EtchTransferedToTeam>;
  etchTransfers: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<EtchTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<EtchTransfer_filter>;
  }) => Array<EtchTransfer>;
  etches: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<Etch_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<Etch_filter>;
  }) => Array<Etch>;
  organisation: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<Organisation>;
  organisationApproval: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationApproval>;
  organisationApprovalForAll: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationApprovalForAll>;
  organisationApprovalForAlls: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationApprovalForAll_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationApprovalForAll_filter>;
  }) => Array<OrganisationApprovalForAll>;
  organisationApprovals: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationApproval_filter>;
  }) => Array<OrganisationApproval>;
  organisationContractOwnershipTransferred: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationContractOwnershipTransferred>;
  organisationContractOwnershipTransferreds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationContractOwnershipTransferred_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationContractOwnershipTransferred_filter>;
  }) => Array<OrganisationContractOwnershipTransferred>;
  organisationCreated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationCreated>;
  organisationCreateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationCreated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationCreated_filter>;
  }) => Array<OrganisationCreated>;
  organisationOwnership: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationOwnership>;
  organisationOwnerships: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationOwnership_filter>;
  }) => Array<OrganisationOwnership>;
  organisationPermission: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationPermission>;
  organisationPermissions: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationPermission_filter>;
  }) => Array<OrganisationPermission>;
  organisationPermissionsUpdated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationPermissionsUpdated>;
  organisationPermissionsUpdateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationPermissionsUpdated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationPermissionsUpdated_filter>;
  }) => Array<OrganisationPermissionsUpdated>;
  organisationRenamed: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationRenamed>;
  organisationRenameds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationRenamed_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationRenamed_filter>;
  }) => Array<OrganisationRenamed>;
  organisationTransfer: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<OrganisationTransfer>;
  organisationTransfers: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<OrganisationTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<OrganisationTransfer_filter>;
  }) => Array<OrganisationTransfer>;
  organisations: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<Organisation_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<Organisation_filter>;
  }) => Array<Organisation>;
  team: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<Team>;
  teamApproval: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamApproval>;
  teamApprovalForAll: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamApprovalForAll>;
  teamApprovalForAlls: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamApprovalForAll_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamApprovalForAll_filter>;
  }) => Array<TeamApprovalForAll>;
  teamApprovals: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamApproval_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamApproval_filter>;
  }) => Array<TeamApproval>;
  teamCreated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamCreated>;
  teamCreateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamCreated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamCreated_filter>;
  }) => Array<TeamCreated>;
  teamOwnership: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamOwnership>;
  teamOwnershipTransferred: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamOwnershipTransferred>;
  teamOwnershipTransferreds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamOwnershipTransferred_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamOwnershipTransferred_filter>;
  }) => Array<TeamOwnershipTransferred>;
  teamOwnerships: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamOwnership_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamOwnership_filter>;
  }) => Array<TeamOwnership>;
  teamPermission: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamPermission>;
  teamPermissions: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamPermission_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamPermission_filter>;
  }) => Array<TeamPermission>;
  teamPermissionsUpdated: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamPermissionsUpdated>;
  teamPermissionsUpdateds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamPermissionsUpdated_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamPermissionsUpdated_filter>;
  }) => Array<TeamPermissionsUpdated>;
  teamRenamed: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamRenamed>;
  teamRenameds: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamRenamed_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamRenamed_filter>;
  }) => Array<TeamRenamed>;
  teamTransfer: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamTransfer>;
  teamTransferToOrganisation: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<TeamTransferToOrganisation>;
  teamTransferToOrganisations: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamTransferToOrganisation_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamTransferToOrganisation_filter>;
  }) => Array<TeamTransferToOrganisation>;
  teamTransfers: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<TeamTransfer_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<TeamTransfer_filter>;
  }) => Array<TeamTransfer>;
  teams: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<Team_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<Team_filter>;
  }) => Array<Team>;
  wallet: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    id: Scalars["ID"];
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
  }) => Maybe<Wallet>;
  wallets: (args: {
    /**
     * The block at which the query should be executed. Can either be a `{ hash:
     * Bytes }` value containing a block hash, a `{ number: Int }` containing the
     * block number, or a `{ number_gte: Int }` containing the minimum block
     * number. In the case of `number_gte`, the query will be executed on the
     * latest block only if the subgraph has progressed to or past the minimum
     * block number. Defaults to the latest block when omitted.
     */
    block?: Maybe<Block_height>;
    /**
     * @defaultValue `100`
     */
    first?: Maybe<Scalars["Int"]>;
    orderBy?: Maybe<Wallet_orderBy>;
    orderDirection?: Maybe<OrderDirection>;
    /**
     * @defaultValue `0`
     */
    skip?: Maybe<Scalars["Int"]>;
    /**
     * Set to `allow` to receive data even if the subgraph has skipped over errors while syncing.
     * @defaultValue `"deny"`
     */
    subgraphError?: Maybe<_SubgraphErrorPolicy_>;
    where?: Maybe<Wallet_filter>;
  }) => Array<Wallet>;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  EtchApprovalForAll_orderBy: EtchApprovalForAll_orderBy | undefined;
  EtchApproval_orderBy: EtchApproval_orderBy | undefined;
  EtchCommentAdded_orderBy: EtchCommentAdded_orderBy | undefined;
  EtchCreated_orderBy: EtchCreated_orderBy | undefined;
  EtchENSCreated_orderBy: EtchENSCreated_orderBy | undefined;
  EtchENSTransfer_orderBy: EtchENSTransfer_orderBy | undefined;
  EtchENS_orderBy: EtchENS_orderBy | undefined;
  EtchOwnershipTransferred_orderBy: EtchOwnershipTransferred_orderBy | undefined;
  EtchOwnership_orderBy: EtchOwnership_orderBy | undefined;
  EtchPermission_orderBy: EtchPermission_orderBy | undefined;
  EtchPermissionsUpdated_orderBy: EtchPermissionsUpdated_orderBy | undefined;
  EtchTeamPermissionsUpdated_orderBy: EtchTeamPermissionsUpdated_orderBy | undefined;
  EtchTransfer_orderBy: EtchTransfer_orderBy | undefined;
  EtchTransferedToTeam_orderBy: EtchTransferedToTeam_orderBy | undefined;
  Etch_orderBy: Etch_orderBy | undefined;
  OrderDirection: OrderDirection | undefined;
  OrganisationApprovalForAll_orderBy: OrganisationApprovalForAll_orderBy | undefined;
  OrganisationApproval_orderBy: OrganisationApproval_orderBy | undefined;
  OrganisationContractOwnershipTransferred_orderBy: OrganisationContractOwnershipTransferred_orderBy | undefined;
  OrganisationCreated_orderBy: OrganisationCreated_orderBy | undefined;
  OrganisationOwnership_orderBy: OrganisationOwnership_orderBy | undefined;
  OrganisationPermission_orderBy: OrganisationPermission_orderBy | undefined;
  OrganisationPermissionsUpdated_orderBy: OrganisationPermissionsUpdated_orderBy | undefined;
  OrganisationRenamed_orderBy: OrganisationRenamed_orderBy | undefined;
  OrganisationTransfer_orderBy: OrganisationTransfer_orderBy | undefined;
  Organisation_orderBy: Organisation_orderBy | undefined;
  TeamApprovalForAll_orderBy: TeamApprovalForAll_orderBy | undefined;
  TeamApproval_orderBy: TeamApproval_orderBy | undefined;
  TeamCreated_orderBy: TeamCreated_orderBy | undefined;
  TeamOwnershipTransferred_orderBy: TeamOwnershipTransferred_orderBy | undefined;
  TeamOwnership_orderBy: TeamOwnership_orderBy | undefined;
  TeamPermission_orderBy: TeamPermission_orderBy | undefined;
  TeamPermissionsUpdated_orderBy: TeamPermissionsUpdated_orderBy | undefined;
  TeamRenamed_orderBy: TeamRenamed_orderBy | undefined;
  TeamTransferToOrganisation_orderBy: TeamTransferToOrganisation_orderBy | undefined;
  TeamTransfer_orderBy: TeamTransfer_orderBy | undefined;
  Team_orderBy: Team_orderBy | undefined;
  Wallet_orderBy: Wallet_orderBy | undefined;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_ | undefined;
}
