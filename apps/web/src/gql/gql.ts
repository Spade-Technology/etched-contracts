/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "\n  query EtchComments($etchId: BigInt!) {\n    etchCommentAddeds(first: 5, orderBy: blockTimestamp, where: { tokenId: $etchId }) {\n      commentId\n      comment_commentIpfsCid\n      blockTimestamp\n      owner {\n        id\n        etchENS {\n          name\n        }\n      }\n    }\n  }\n":
    types.EtchCommentsDocument,
  "\n  query TeamEtches($teamId: BigInt!) {\n    teams(where: { teamId: $teamId }) {\n      id\n      ownership {\n        owner {\n          id\n          etchENS {\n            id\n            name\n          }\n        }\n        organisation {\n          id\n          orgId\n          name\n        }\n      }\n      permissions(where: { permissionLevel_gt: 0 }) {\n        id\n        wallet {\n          id\n        }\n      }\n      managedEtches {\n        id\n        etch {\n          id\n          tokenId\n          createdAt\n          documentName\n          ownership {\n            id\n            owner {\n              id\n              etchENS {\n                id\n                name\n              }\n            }\n            team {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n":
    types.TeamEtchesDocument,
  "\n  fragment EtchFragment on Etch {\n    id\n    tokenId\n    createdAt\n    documentName\n    description\n\n    tagLinks(where: { owner: $userId }) {\n      tag {\n        id\n        label\n      }\n    }\n\n    ownership {\n      id\n      owner {\n        id\n        etchENS {\n          id\n          name\n        }\n      }\n      team {\n        id\n        teamId\n        name\n      }\n    }\n  }\n":
    types.EtchFragmentFragmentDoc,
  "\n  query Etches($userId: String) {\n    etches(\n      first: 1000\n      orderBy: createdAt\n      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }\n    ) {\n      id\n      ...EtchFragment\n    }\n\n    teams(\n      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }\n      first: 1000\n    ) {\n      id\n      managedEtches {\n        id\n        etch {\n          ...EtchFragment\n        }\n      }\n      externalEtches {\n        etch {\n          id\n          ...EtchFragment\n        }\n      }\n    }\n\n    organisations(where: { ownership_: { owner: $userId } }, first: 1000) {\n      id\n      managedTeams {\n        id\n        team {\n          id\n          managedEtches {\n            id\n            etch {\n              ...EtchFragment\n            }\n          }\n          externalEtches {\n            etch {\n              id\n              ...EtchFragment\n            }\n          }\n        }\n      }\n    }\n  }\n":
    types.EtchesDocument,
  "\n  query Org($id: ID!) {\n    organisation(id: $id) {\n      permissions {\n        wallet {\n          id\n          etchENS {\n            name\n          }\n        }\n        permissionLevel\n      }\n    }\n  }\n":
    types.OrgDocument,
  "\n  query Organisations($address: String!) {\n    organisations(\n      where: { or: [{ ownership_: { owner: $address } }, { permissions_: { wallet: $address, permissionLevel_gt: 0 } }] }\n    ) {\n      orgId\n      id\n      name\n      createdAt\n    }\n  }\n":
    types.OrganisationsDocument,
  "\n  query GetTagsOfEtchAndOwner($owner: String!, $id: ID!) {\n    etch(id: $id) {\n      id\n      tagLinks(where: { owner: $owner }) {\n        tag {\n          id\n          owner {\n            eoa\n          }\n        }\n      }\n    }\n  }\n":
    types.GetTagsOfEtchAndOwnerDocument,
  "\n  query GetTagsOfOwner($owner: String!) {\n    tagLinks(where: { owner: $owner }) {\n      tag {\n        label\n        id\n        owner {\n          eoa\n        }\n      }\n    }\n  }\n":
    types.GetTagsOfOwnerDocument,
  "\n  fragment TeamFragment on Team {\n    id\n    teamId\n    name\n    createdAt\n    ownership {\n      id\n      organisation {\n        id\n        name\n        orgId\n      }\n      owner {\n        id\n      }\n    }\n    permissions {\n      permissionLevel\n      wallet {\n        id\n        etchENS {\n          name\n        }\n      }\n    }\n  }\n":
    types.TeamFragmentFragmentDoc,
  "\n  query Teams($userId: String) {\n    teams(where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }) {\n      ...TeamFragment\n    }\n\n    organisations(\n      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }\n    ) {\n      id\n      managedTeams {\n        id\n        team {\n          ...TeamFragment\n        }\n      }\n    }\n  }\n":
    types.TeamsDocument,
  "\n  fragment FullEtchCreatedFragment on EtchCreated {\n    id\n    to\n    tokenId\n    blockNumber\n    blockTimestamp\n    transactionHash\n  }\n":
    types.FullEtchCreatedFragmentFragmentDoc,
  "\n  fragment FullEtchFragment on Etch {\n    id\n    tokenId\n    createdAt\n    documentName\n    description\n    ipfsCid\n    ownership {\n      id\n      etch {\n        id\n        tokenId\n        createdAt\n        documentName\n        ipfsCid\n      }\n      owner {\n        id\n        eoa\n        etchENS {\n          id\n          name\n        }\n      }\n      team {\n        id\n        teamId\n        name\n      }\n    }\n    tagLinks {\n      tag {\n        id\n        label\n        owner {\n          eoa\n        }\n      }\n    }\n    permissions {\n      id\n      etch {\n        id\n        tokenId\n        createdAt\n        documentName\n        ipfsCid\n      }\n      wallet {\n        id\n        etchENS {\n          id\n          name\n        }\n      }\n      team {\n        id\n        name\n      }\n      permissionLevel\n    }\n    comments {\n      id\n      tokenId\n      commentId\n      comment_commentIpfsCid\n      comment_timestamp\n      owner {\n        id\n        etchENS {\n          id\n          name\n        }\n      }\n    }\n    transfers {\n      id\n      from\n      to\n      tokenId\n    }\n    approvals {\n      id\n      owner\n      approved\n      tokenId\n    }\n  }\n":
    types.FullEtchFragmentFragmentDoc,
  "\n  query Etch($etchId: BigInt!) {\n    etches(\n      where: { tokenId: $etchId }\n    ) {\n      ...FullEtchFragment\n    }\n    etchCreateds(\n      where: { tokenId: $etchId }\n    ) {\n      ...FullEtchCreatedFragment\n    }\n  }\n":
    types.EtchDocument,
  "\n  query Users($input: String) {\n    wallets(first: 15, where: { or: [{ etchENS_: { name_contains_nocase: $input } }, { eoa_contains_nocase: $input }] }) {\n      id\n      etchENS {\n        name\n      }\n    }\n  }\n":
    types.UsersDocument,
  "\n  query Search($input: String) {\n    etches(first: 2, where: { documentName_contains_nocase: $input }, orderDirection: desc, orderBy: createdAt) {\n      id\n      tokenId\n      documentName\n      ownership {\n        owner {\n          etchENS {\n            name\n          }\n        }\n      }\n    }\n\n    wallets(where: { etchENS_: { name_contains_nocase: $input } }, first: 2) {\n      id\n\n      etchENS {\n        name\n      }\n    }\n\n    teams(where: { name_contains_nocase: $input }, first: 2) {\n      id\n      teamId\n      name\n    }\n    organisations(where: { name_contains_nocase: $input }, first: 2) {\n      id\n      orgId\n      name\n    }\n  }\n":
    types.SearchDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query EtchComments($etchId: BigInt!) {\n    etchCommentAddeds(first: 5, orderBy: blockTimestamp, where: { tokenId: $etchId }) {\n      commentId\n      comment_commentIpfsCid\n      blockTimestamp\n      owner {\n        id\n        etchENS {\n          name\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query EtchComments($etchId: BigInt!) {\n    etchCommentAddeds(first: 5, orderBy: blockTimestamp, where: { tokenId: $etchId }) {\n      commentId\n      comment_commentIpfsCid\n      blockTimestamp\n      owner {\n        id\n        etchENS {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query TeamEtches($teamId: BigInt!) {\n    teams(where: { teamId: $teamId }) {\n      id\n      ownership {\n        owner {\n          id\n          etchENS {\n            id\n            name\n          }\n        }\n        organisation {\n          id\n          orgId\n          name\n        }\n      }\n      permissions(where: { permissionLevel_gt: 0 }) {\n        id\n        wallet {\n          id\n        }\n      }\n      managedEtches {\n        id\n        etch {\n          id\n          tokenId\n          createdAt\n          documentName\n          ownership {\n            id\n            owner {\n              id\n              etchENS {\n                id\n                name\n              }\n            }\n            team {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query TeamEtches($teamId: BigInt!) {\n    teams(where: { teamId: $teamId }) {\n      id\n      ownership {\n        owner {\n          id\n          etchENS {\n            id\n            name\n          }\n        }\n        organisation {\n          id\n          orgId\n          name\n        }\n      }\n      permissions(where: { permissionLevel_gt: 0 }) {\n        id\n        wallet {\n          id\n        }\n      }\n      managedEtches {\n        id\n        etch {\n          id\n          tokenId\n          createdAt\n          documentName\n          ownership {\n            id\n            owner {\n              id\n              etchENS {\n                id\n                name\n              }\n            }\n            team {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment EtchFragment on Etch {\n    id\n    tokenId\n    createdAt\n    documentName\n    description\n\n    tagLinks(where: { owner: $userId }) {\n      tag {\n        id\n        label\n      }\n    }\n\n    ownership {\n      id\n      owner {\n        id\n        etchENS {\n          id\n          name\n        }\n      }\n      team {\n        id\n        teamId\n        name\n      }\n    }\n  }\n"
): (typeof documents)["\n  fragment EtchFragment on Etch {\n    id\n    tokenId\n    createdAt\n    documentName\n    description\n\n    tagLinks(where: { owner: $userId }) {\n      tag {\n        id\n        label\n      }\n    }\n\n    ownership {\n      id\n      owner {\n        id\n        etchENS {\n          id\n          name\n        }\n      }\n      team {\n        id\n        teamId\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Etches($userId: String) {\n    etches(\n      first: 1000\n      orderBy: createdAt\n      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }\n    ) {\n      id\n      ...EtchFragment\n    }\n\n    teams(\n      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }\n      first: 1000\n    ) {\n      id\n      managedEtches {\n        id\n        etch {\n          ...EtchFragment\n        }\n      }\n      externalEtches {\n        etch {\n          id\n          ...EtchFragment\n        }\n      }\n    }\n\n    organisations(where: { ownership_: { owner: $userId } }, first: 1000) {\n      id\n      managedTeams {\n        id\n        team {\n          id\n          managedEtches {\n            id\n            etch {\n              ...EtchFragment\n            }\n          }\n          externalEtches {\n            etch {\n              id\n              ...EtchFragment\n            }\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query Etches($userId: String) {\n    etches(\n      first: 1000\n      orderBy: createdAt\n      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }\n    ) {\n      id\n      ...EtchFragment\n    }\n\n    teams(\n      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }\n      first: 1000\n    ) {\n      id\n      managedEtches {\n        id\n        etch {\n          ...EtchFragment\n        }\n      }\n      externalEtches {\n        etch {\n          id\n          ...EtchFragment\n        }\n      }\n    }\n\n    organisations(where: { ownership_: { owner: $userId } }, first: 1000) {\n      id\n      managedTeams {\n        id\n        team {\n          id\n          managedEtches {\n            id\n            etch {\n              ...EtchFragment\n            }\n          }\n          externalEtches {\n            etch {\n              id\n              ...EtchFragment\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Org($id: ID!) {\n    organisation(id: $id) {\n      permissions {\n        wallet {\n          id\n          etchENS {\n            name\n          }\n        }\n        permissionLevel\n      }\n    }\n  }\n"
): (typeof documents)["\n  query Org($id: ID!) {\n    organisation(id: $id) {\n      permissions {\n        wallet {\n          id\n          etchENS {\n            name\n          }\n        }\n        permissionLevel\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Organisations($address: String!) {\n    organisations(\n      where: { or: [{ ownership_: { owner: $address } }, { permissions_: { wallet: $address, permissionLevel_gt: 0 } }] }\n    ) {\n      orgId\n      id\n      name\n      createdAt\n    }\n  }\n"
): (typeof documents)["\n  query Organisations($address: String!) {\n    organisations(\n      where: { or: [{ ownership_: { owner: $address } }, { permissions_: { wallet: $address, permissionLevel_gt: 0 } }] }\n    ) {\n      orgId\n      id\n      name\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetTagsOfEtchAndOwner($owner: String!, $id: ID!) {\n    etch(id: $id) {\n      id\n      tagLinks(where: { owner: $owner }) {\n        tag {\n          id\n          owner {\n            eoa\n          }\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetTagsOfEtchAndOwner($owner: String!, $id: ID!) {\n    etch(id: $id) {\n      id\n      tagLinks(where: { owner: $owner }) {\n        tag {\n          id\n          owner {\n            eoa\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetTagsOfOwner($owner: String!) {\n    tagLinks(where: { owner: $owner }) {\n      tag {\n        label\n        id\n        owner {\n          eoa\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query GetTagsOfOwner($owner: String!) {\n    tagLinks(where: { owner: $owner }) {\n      tag {\n        label\n        id\n        owner {\n          eoa\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment TeamFragment on Team {\n    id\n    teamId\n    name\n    createdAt\n    ownership {\n      id\n      organisation {\n        id\n        name\n        orgId\n      }\n      owner {\n        id\n      }\n    }\n    permissions {\n      permissionLevel\n      wallet {\n        id\n        etchENS {\n          name\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  fragment TeamFragment on Team {\n    id\n    teamId\n    name\n    createdAt\n    ownership {\n      id\n      organisation {\n        id\n        name\n        orgId\n      }\n      owner {\n        id\n      }\n    }\n    permissions {\n      permissionLevel\n      wallet {\n        id\n        etchENS {\n          name\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Teams($userId: String) {\n    teams(where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }) {\n      ...TeamFragment\n    }\n\n    organisations(\n      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }\n    ) {\n      id\n      managedTeams {\n        id\n        team {\n          ...TeamFragment\n        }\n      }\n    }\n  }\n"
): (typeof documents)["\n  query Teams($userId: String) {\n    teams(where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }) {\n      ...TeamFragment\n    }\n\n    organisations(\n      where: { or: [{ ownership_: { owner: $userId } }, { permissions_: { wallet: $userId, permissionLevel_gt: 0 } }] }\n    ) {\n      id\n      managedTeams {\n        id\n        team {\n          ...TeamFragment\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment FullEtchCreatedFragment on EtchCreated {\n    id\n    to\n    tokenId\n    blockNumber\n    blockTimestamp\n    transactionHash\n  }\n"
): (typeof documents)["\n  fragment FullEtchCreatedFragment on EtchCreated {\n    id\n    to\n    tokenId\n    blockNumber\n    blockTimestamp\n    transactionHash\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment FullEtchFragment on Etch {\n    id\n    tokenId\n    createdAt\n    documentName\n    description\n    ipfsCid\n    ownership {\n      id\n      etch {\n        id\n        tokenId\n        createdAt\n        documentName\n        ipfsCid\n      }\n      owner {\n        id\n        eoa\n        etchENS {\n          id\n          name\n        }\n      }\n      team {\n        id\n        teamId\n        name\n      }\n    }\n    tagLinks {\n      tag {\n        id\n        label\n        owner {\n          eoa\n        }\n      }\n    }\n    permissions {\n      id\n      etch {\n        id\n        tokenId\n        createdAt\n        documentName\n        ipfsCid\n      }\n      wallet {\n        id\n        etchENS {\n          id\n          name\n        }\n      }\n      team {\n        id\n        name\n      }\n      permissionLevel\n    }\n    comments {\n      id\n      tokenId\n      commentId\n      comment_commentIpfsCid\n      comment_timestamp\n      owner {\n        id\n        etchENS {\n          id\n          name\n        }\n      }\n    }\n    transfers {\n      id\n      from\n      to\n      tokenId\n    }\n    approvals {\n      id\n      owner\n      approved\n      tokenId\n    }\n  }\n"
): (typeof documents)["\n  fragment FullEtchFragment on Etch {\n    id\n    tokenId\n    createdAt\n    documentName\n    description\n    ipfsCid\n    ownership {\n      id\n      etch {\n        id\n        tokenId\n        createdAt\n        documentName\n        ipfsCid\n      }\n      owner {\n        id\n        eoa\n        etchENS {\n          id\n          name\n        }\n      }\n      team {\n        id\n        teamId\n        name\n      }\n    }\n    tagLinks {\n      tag {\n        id\n        label\n        owner {\n          eoa\n        }\n      }\n    }\n    permissions {\n      id\n      etch {\n        id\n        tokenId\n        createdAt\n        documentName\n        ipfsCid\n      }\n      wallet {\n        id\n        etchENS {\n          id\n          name\n        }\n      }\n      team {\n        id\n        name\n      }\n      permissionLevel\n    }\n    comments {\n      id\n      tokenId\n      commentId\n      comment_commentIpfsCid\n      comment_timestamp\n      owner {\n        id\n        etchENS {\n          id\n          name\n        }\n      }\n    }\n    transfers {\n      id\n      from\n      to\n      tokenId\n    }\n    approvals {\n      id\n      owner\n      approved\n      tokenId\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Etch($etchId: BigInt!) {\n    etches(\n      where: { tokenId: $etchId }\n    ) {\n      ...FullEtchFragment\n    }\n    etchCreateds(\n      where: { tokenId: $etchId }\n    ) {\n      ...FullEtchCreatedFragment\n    }\n  }\n"
): (typeof documents)["\n  query Etch($etchId: BigInt!) {\n    etches(\n      where: { tokenId: $etchId }\n    ) {\n      ...FullEtchFragment\n    }\n    etchCreateds(\n      where: { tokenId: $etchId }\n    ) {\n      ...FullEtchCreatedFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Users($input: String) {\n    wallets(first: 15, where: { or: [{ etchENS_: { name_contains_nocase: $input } }, { eoa_contains_nocase: $input }] }) {\n      id\n      etchENS {\n        name\n      }\n    }\n  }\n"
): (typeof documents)["\n  query Users($input: String) {\n    wallets(first: 15, where: { or: [{ etchENS_: { name_contains_nocase: $input } }, { eoa_contains_nocase: $input }] }) {\n      id\n      etchENS {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query Search($input: String) {\n    etches(first: 2, where: { documentName_contains_nocase: $input }, orderDirection: desc, orderBy: createdAt) {\n      id\n      tokenId\n      documentName\n      ownership {\n        owner {\n          etchENS {\n            name\n          }\n        }\n      }\n    }\n\n    wallets(where: { etchENS_: { name_contains_nocase: $input } }, first: 2) {\n      id\n\n      etchENS {\n        name\n      }\n    }\n\n    teams(where: { name_contains_nocase: $input }, first: 2) {\n      id\n      teamId\n      name\n    }\n    organisations(where: { name_contains_nocase: $input }, first: 2) {\n      id\n      orgId\n      name\n    }\n  }\n"
): (typeof documents)["\n  query Search($input: String) {\n    etches(first: 2, where: { documentName_contains_nocase: $input }, orderDirection: desc, orderBy: createdAt) {\n      id\n      tokenId\n      documentName\n      ownership {\n        owner {\n          etchENS {\n            name\n          }\n        }\n      }\n    }\n\n    wallets(where: { etchENS_: { name_contains_nocase: $input } }, first: 2) {\n      id\n\n      etchENS {\n        name\n      }\n    }\n\n    teams(where: { name_contains_nocase: $input }, first: 2) {\n      id\n      teamId\n      name\n    }\n    organisations(where: { name_contains_nocase: $input }, first: 2) {\n      id\n      orgId\n      name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<infer TType, any>
  ? TType
  : never;
