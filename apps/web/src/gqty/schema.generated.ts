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
}

export const scalarsEnumsHash: import("@/gqty").ScalarsEnumsHash = { Boolean: true, ID: true, Int: true, String: true };
export const generatedSchema = {
  Etch: {
    __typename: { __type: "String!" },
    approvals: { __type: "[EtchApproval!]" },
    comments: { __type: "[EtchCommentAdded!]" },
    documentName: { __type: "String!" },
    id: { __type: "ID!" },
    ipfsCid: { __type: "String!" },
    ownership: { __type: "EtchOwnership!" },
    permissions: { __type: "[EtchPermission!]" },
    tokenId: { __type: "Int!" },
    transfers: { __type: "[EtchTransfer!]" },
  },
  EtchApproval: {
    __typename: { __type: "String!" },
    approved: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    etch: { __type: "Etch!" },
    id: { __type: "String!" },
    owner: { __type: "String!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  EtchApprovalForAll: {
    __typename: { __type: "String!" },
    approved: { __type: "Boolean!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    etch: { __type: "Etch!" },
    id: { __type: "String!" },
    operator: { __type: "String!" },
    owner: { __type: "String!" },
    transactionHash: { __type: "String!" },
  },
  EtchCommentAdded: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    commentId: { __type: "Int!" },
    comment_commentIpfsCid: { __type: "String!" },
    comment_timestamp: { __type: "Int!" },
    etch: { __type: "Etch!" },
    id: { __type: "String!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  EtchCreated: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    to: { __type: "String!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
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
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    newOwner: { __type: "String!" },
    previousOwner: { __type: "String!" },
    transactionHash: { __type: "String!" },
  },
  EtchPermission: {
    __typename: { __type: "String!" },
    etch: { __type: "Etch!" },
    id: { __type: "ID!" },
    permissionLevel: { __type: "Int!" },
    team: { __type: "Team" },
    wallet: { __type: "Wallet" },
  },
  EtchPermissionsUpdated: {
    __typename: { __type: "String!" },
    account: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    newPermission: { __type: "Int!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  EtchTeamPermissionsUpdated: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    newPermission: { __type: "Int!" },
    teamId: { __type: "Int!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  EtchTransfer: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    etch: { __type: "Etch!" },
    from: { __type: "String!" },
    id: { __type: "String!" },
    to: { __type: "String!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  EtchTransferedToTeam: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    from: { __type: "String!" },
    id: { __type: "String!" },
    to: { __type: "Int!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  Organisation: {
    __typename: { __type: "String!" },
    approvals: { __type: "[OrganisationApproval!]" },
    id: { __type: "ID!" },
    managedTeams: { __type: "[TeamOwnership!]" },
    orgId: { __type: "Int!" },
    ownership: { __type: "OrganisationOwnership!" },
    permissions: { __type: "[OrganisationPermission!]" },
    transfers: { __type: "[OrganisationTransfer!]" },
  },
  OrganisationApproval: {
    __typename: { __type: "String!" },
    approved: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    organisation: { __type: "Organisation!" },
    owner: { __type: "String!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
    wallet: { __type: "Wallet!" },
  },
  OrganisationApprovalForAll: {
    __typename: { __type: "String!" },
    approved: { __type: "Boolean!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    operator: { __type: "String!" },
    organisation: { __type: "Organisation!" },
    owner: { __type: "String!" },
    transactionHash: { __type: "String!" },
  },
  OrganisationContractOwnershipTransferred: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    newOwner: { __type: "String!" },
    previousOwner: { __type: "String!" },
    transactionHash: { __type: "String!" },
  },
  OrganisationCreated: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    orgId: { __type: "Int!" },
    organisation: { __type: "Organisation!" },
    to: { __type: "String!" },
    transactionHash: { __type: "String!" },
  },
  OrganisationOwnership: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    organisation: { __type: "Organisation!" },
    owner: { __type: "Wallet" },
  },
  OrganisationPermission: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    organisation: { __type: "Organisation!" },
    permissionLevel: { __type: "Int!" },
    wallet: { __type: "Wallet!" },
  },
  OrganisationPermissionsUpdated: {
    __typename: { __type: "String!" },
    account: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    newPermission: { __type: "Int!" },
    orgId: { __type: "Int!" },
    organisation: { __type: "Organisation!" },
    transactionHash: { __type: "String!" },
  },
  OrganisationTransfer: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    from: { __type: "String!" },
    id: { __type: "String!" },
    organisation: { __type: "Organisation!" },
    to: { __type: "String!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  Team: {
    __typename: { __type: "String!" },
    approvals: { __type: "[TeamApproval!]" },
    externalEtches: { __type: "[EtchPermission!]" },
    id: { __type: "ID!" },
    managedEtches: { __type: "[EtchOwnership!]" },
    ownership: { __type: "TeamOwnership!" },
    permissions: { __type: "[TeamPermission!]" },
    teamId: { __type: "Int!" },
    transfers: { __type: "[TeamTransfer!]" },
  },
  TeamApproval: {
    __typename: { __type: "String!" },
    approved: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    owner: { __type: "String!" },
    team: { __type: "Team!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
    wallet: { __type: "Wallet!" },
  },
  TeamApprovalForAll: {
    __typename: { __type: "String!" },
    approved: { __type: "Boolean!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    operator: { __type: "String!" },
    owner: { __type: "String!" },
    team: { __type: "Team!" },
    transactionHash: { __type: "String!" },
  },
  TeamCreated: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    team: { __type: "Team!" },
    teamId: { __type: "Int!" },
    to: { __type: "String!" },
    transactionHash: { __type: "String!" },
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
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    newOwner: { __type: "String!" },
    previousOwner: { __type: "String!" },
    team: { __type: "Team!" },
    transactionHash: { __type: "String!" },
  },
  TeamPermission: {
    __typename: { __type: "String!" },
    id: { __type: "ID!" },
    permissionLevel: { __type: "Int!" },
    team: { __type: "Team!" },
    wallet: { __type: "Wallet!" },
  },
  TeamPermissionsUpdated: {
    __typename: { __type: "String!" },
    account: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    newPermission: { __type: "Int!" },
    team: { __type: "Team!" },
    teamId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  TeamTransfer: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    from: { __type: "String!" },
    id: { __type: "String!" },
    team: { __type: "Team!" },
    to: { __type: "String!" },
    tokenId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  TeamTransferToOrganisation: {
    __typename: { __type: "String!" },
    blockNumber: { __type: "Int!" },
    blockTimestamp: { __type: "Int!" },
    id: { __type: "String!" },
    orgId: { __type: "Int!" },
    organisation: { __type: "Organisation!" },
    team: { __type: "Team!" },
    teamId: { __type: "Int!" },
    transactionHash: { __type: "String!" },
  },
  Wallet: {
    __typename: { __type: "String!" },
    OrganisationApprovals: { __type: "[OrganisationApproval!]" },
    OrganisationPermissions: { __type: "[OrganisationPermission!]" },
    etchPermissions: { __type: "[EtchPermission!]" },
    id: { __type: "String!" },
    ownedEtches: { __type: "[EtchOwnership!]" },
    ownedTeams: { __type: "[TeamOwnership!]" },
    ownedorganisations: { __type: "[OrganisationOwnership!]" },
    teamApprovals: { __type: "[TeamApproval!]" },
    teamPermissions: { __type: "[TeamPermission!]" },
  },
  mutation: {},
  query: {},
  subscription: {},
} as const;

export interface Etch {
  __typename?: "Etch";
  approvals?: Maybe<Array<EtchApproval>>;
  comments?: Maybe<Array<EtchCommentAdded>>;
  documentName: ScalarsEnums["String"];
  id: ScalarsEnums["ID"];
  ipfsCid: ScalarsEnums["String"];
  ownership: EtchOwnership;
  permissions?: Maybe<Array<EtchPermission>>;
  tokenId: ScalarsEnums["Int"];
  transfers?: Maybe<Array<EtchTransfer>>;
}

export interface EtchApproval {
  __typename?: "EtchApproval";
  approved: ScalarsEnums["String"];
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  etch: Etch;
  id: ScalarsEnums["String"];
  owner: ScalarsEnums["String"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface EtchApprovalForAll {
  __typename?: "EtchApprovalForAll";
  approved: ScalarsEnums["Boolean"];
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  etch: Etch;
  id: ScalarsEnums["String"];
  operator: ScalarsEnums["String"];
  owner: ScalarsEnums["String"];
  transactionHash: ScalarsEnums["String"];
}

export interface EtchCommentAdded {
  __typename?: "EtchCommentAdded";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  commentId: ScalarsEnums["Int"];
  comment_commentIpfsCid: ScalarsEnums["String"];
  comment_timestamp: ScalarsEnums["Int"];
  etch: Etch;
  id: ScalarsEnums["String"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface EtchCreated {
  __typename?: "EtchCreated";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  to: ScalarsEnums["String"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
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
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  newOwner: ScalarsEnums["String"];
  previousOwner: ScalarsEnums["String"];
  transactionHash: ScalarsEnums["String"];
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
  account: ScalarsEnums["String"];
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  newPermission: ScalarsEnums["Int"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface EtchTeamPermissionsUpdated {
  __typename?: "EtchTeamPermissionsUpdated";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  newPermission: ScalarsEnums["Int"];
  teamId: ScalarsEnums["Int"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface EtchTransfer {
  __typename?: "EtchTransfer";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  etch: Etch;
  from: ScalarsEnums["String"];
  id: ScalarsEnums["String"];
  to: ScalarsEnums["String"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface EtchTransferedToTeam {
  __typename?: "EtchTransferedToTeam";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  from: ScalarsEnums["String"];
  id: ScalarsEnums["String"];
  to: ScalarsEnums["Int"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface Organisation {
  __typename?: "Organisation";
  approvals?: Maybe<Array<OrganisationApproval>>;
  id: ScalarsEnums["ID"];
  managedTeams?: Maybe<Array<TeamOwnership>>;
  orgId: ScalarsEnums["Int"];
  ownership: OrganisationOwnership;
  permissions?: Maybe<Array<OrganisationPermission>>;
  transfers?: Maybe<Array<OrganisationTransfer>>;
}

export interface OrganisationApproval {
  __typename?: "OrganisationApproval";
  approved: ScalarsEnums["String"];
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  organisation: Organisation;
  owner: ScalarsEnums["String"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
  wallet: Wallet;
}

export interface OrganisationApprovalForAll {
  __typename?: "OrganisationApprovalForAll";
  approved: ScalarsEnums["Boolean"];
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  operator: ScalarsEnums["String"];
  organisation: Organisation;
  owner: ScalarsEnums["String"];
  transactionHash: ScalarsEnums["String"];
}

export interface OrganisationContractOwnershipTransferred {
  __typename?: "OrganisationContractOwnershipTransferred";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  newOwner: ScalarsEnums["String"];
  previousOwner: ScalarsEnums["String"];
  transactionHash: ScalarsEnums["String"];
}

export interface OrganisationCreated {
  __typename?: "OrganisationCreated";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  orgId: ScalarsEnums["Int"];
  organisation: Organisation;
  to: ScalarsEnums["String"];
  transactionHash: ScalarsEnums["String"];
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
  account: ScalarsEnums["String"];
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  newPermission: ScalarsEnums["Int"];
  orgId: ScalarsEnums["Int"];
  organisation: Organisation;
  transactionHash: ScalarsEnums["String"];
}

export interface OrganisationTransfer {
  __typename?: "OrganisationTransfer";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  from: ScalarsEnums["String"];
  id: ScalarsEnums["String"];
  organisation: Organisation;
  to: ScalarsEnums["String"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface Team {
  __typename?: "Team";
  approvals?: Maybe<Array<TeamApproval>>;
  externalEtches?: Maybe<Array<EtchPermission>>;
  id: ScalarsEnums["ID"];
  managedEtches?: Maybe<Array<EtchOwnership>>;
  ownership: TeamOwnership;
  permissions?: Maybe<Array<TeamPermission>>;
  teamId: ScalarsEnums["Int"];
  transfers?: Maybe<Array<TeamTransfer>>;
}

export interface TeamApproval {
  __typename?: "TeamApproval";
  approved: ScalarsEnums["String"];
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  owner: ScalarsEnums["String"];
  team: Team;
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
  wallet: Wallet;
}

export interface TeamApprovalForAll {
  __typename?: "TeamApprovalForAll";
  approved: ScalarsEnums["Boolean"];
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  operator: ScalarsEnums["String"];
  owner: ScalarsEnums["String"];
  team: Team;
  transactionHash: ScalarsEnums["String"];
}

export interface TeamCreated {
  __typename?: "TeamCreated";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  team: Team;
  teamId: ScalarsEnums["Int"];
  to: ScalarsEnums["String"];
  transactionHash: ScalarsEnums["String"];
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
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  newOwner: ScalarsEnums["String"];
  previousOwner: ScalarsEnums["String"];
  team: Team;
  transactionHash: ScalarsEnums["String"];
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
  account: ScalarsEnums["String"];
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  newPermission: ScalarsEnums["Int"];
  team: Team;
  teamId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface TeamTransfer {
  __typename?: "TeamTransfer";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  from: ScalarsEnums["String"];
  id: ScalarsEnums["String"];
  team: Team;
  to: ScalarsEnums["String"];
  tokenId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface TeamTransferToOrganisation {
  __typename?: "TeamTransferToOrganisation";
  blockNumber: ScalarsEnums["Int"];
  blockTimestamp: ScalarsEnums["Int"];
  id: ScalarsEnums["String"];
  orgId: ScalarsEnums["Int"];
  organisation: Organisation;
  team: Team;
  teamId: ScalarsEnums["Int"];
  transactionHash: ScalarsEnums["String"];
}

export interface Wallet {
  __typename?: "Wallet";
  OrganisationApprovals?: Maybe<Array<OrganisationApproval>>;
  OrganisationPermissions?: Maybe<Array<OrganisationPermission>>;
  etchPermissions?: Maybe<Array<EtchPermission>>;
  id: ScalarsEnums["String"];
  ownedEtches?: Maybe<Array<EtchOwnership>>;
  ownedTeams?: Maybe<Array<TeamOwnership>>;
  ownedorganisations?: Maybe<Array<OrganisationOwnership>>;
  teamApprovals?: Maybe<Array<TeamApproval>>;
  teamPermissions?: Maybe<Array<TeamPermission>>;
}

export interface Mutation {
  __typename?: "Mutation";
}

export interface Query {
  __typename?: "Query";
}

export interface Subscription {
  __typename?: "Subscription";
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {}
