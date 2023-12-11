import { Address, BigInt } from '@graphprotocol/graph-ts';
import { afterAll, clearStore, describe, test } from 'matchstick-as';

import { handleEtchCreated, handleEtchTransferedToTeam } from '../src/etch';
import { handleOrganisationCreated } from '../src/organisation';
import { handleTeamCreated, handleTransferToOrganisation } from '../src/team';
import { createEtchCreatedEvent, createEtchTransferedToTeamEvent } from './etch-utils';
import { createOrganisationCreatedEvent } from './organisation-utils';
import { createTeamCreatedEvent, createTransferToOrganisationEvent } from './team-utils';

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe('Describe entity assertions', () => {
  afterAll(() => {
    clearStore();
  });

  test('Create Team and Create Organisation for the etch', () => {
    let owner = Address.fromString('0x0000000000000000000000000000000000000001');
    let tokenId = BigInt.fromI32(1);
    let teamId = BigInt.fromI32(1);
    let orgId = BigInt.fromI32(1);

    let etchCreatedEvent = createEtchCreatedEvent(tokenId, owner);
    handleEtchCreated(etchCreatedEvent);

    let teamCreatedEvent = createTeamCreatedEvent(teamId, owner);
    handleTeamCreated(teamCreatedEvent);

    let etchTransferedToTeam = createEtchTransferedToTeamEvent(tokenId, owner, teamId);
    handleEtchTransferedToTeam(etchTransferedToTeam);

    let orgCreatedEvent = createOrganisationCreatedEvent(orgId, owner);
    handleOrganisationCreated(orgCreatedEvent);

    let transferToOrgEvent = createTransferToOrganisationEvent(teamId, orgId);
    handleTransferToOrganisation(transferToOrgEvent);
  });
});
