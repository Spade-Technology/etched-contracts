import { Address, BigInt, Bytes, Entity } from "@graphprotocol/graph-ts";
import {
  Organisation,
  OrganisationOwnership,
  OrganisationPermission,
  Team,
  TeamOwnership,
  TeamPermission,
  Wallet,
} from "../generated/schema";

export const upsertOrgOwnership = ({
  dbOwnershipId,
  dbOrgId,
  owner,
}: {
  dbOwnershipId: string;
  dbOrgId: string;
  owner: Bytes;
}): void => {
  let organisationOwnership = OrganisationOwnership.load(dbOwnershipId);
  if (organisationOwnership == null) organisationOwnership = new OrganisationOwnership(dbOwnershipId);

  organisationOwnership.owner = owner;
  organisationOwnership.organisation = dbOrgId;
  organisationOwnership.save();
};

export const upsertOrg = ({ dbOrgId, orgId }: { dbOrgId: string; orgId: BigInt }): void => {
  const org = new Organisation(dbOrgId);

  org.orgId = orgId;
  org.save();
};

export const upsertOrgPermission = ({
  dbPermissionId,
  orgId,
  wallet,
  permissionLevel,
}: {
  dbPermissionId: string;
  orgId: BigInt;
  wallet: Bytes;
  permissionLevel: number;
}): void => {
  let orgPermission = OrganisationPermission.load(dbPermissionId);
  if (orgPermission == null) orgPermission = new OrganisationPermission(dbPermissionId);

  orgPermission.organisation = orgId.toString();
  orgPermission.wallet = wallet;
  orgPermission.permissionLevel = permissionLevel;
  orgPermission.save();
};

export const upsertTeamPermission = ({
  dbOwnershipId,
  dbTeamId,
  wallet,
  permissionLevel,
}: {
  dbOwnershipId: string;
  dbTeamId: string;
  wallet: Bytes;
  permissionLevel: number;
}): void => {
  let teamOwnership = TeamPermission.load(dbOwnershipId);
  if (teamOwnership == null) teamOwnership = new TeamPermission(dbOwnershipId);

  teamOwnership.team = dbTeamId;
  teamOwnership.wallet = wallet;
  teamOwnership.permissionLevel = permissionLevel;
  teamOwnership.save();
};

export const upsertTeamOwnership = ({
  dbOwnershipId,
  dbTeamId,
  owner,
  organisation,
}: {
  dbOwnershipId: string;
  dbTeamId: string;
  owner?: Bytes;
  organisation?: string;
}): void => {
  let teamOwnership = TeamOwnership.load(dbOwnershipId);
  if (teamOwnership == null) teamOwnership = new TeamOwnership(dbOwnershipId);

  teamOwnership.team = dbTeamId;
  teamOwnership.owner = owner || null;
  teamOwnership.organisation = organisation || null;

  teamOwnership.save();
};

export const upsertTeam = ({ dbTeamId, teamId }: { dbTeamId: string; teamId: BigInt }): void => {
  const team = new Team(dbTeamId);
  team.teamId = teamId;
  team.save();
};
