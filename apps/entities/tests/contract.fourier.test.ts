import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach
} from "matchstick-as/assembly/index"
import { log } from "matchstick-as/assembly/log";
import { logStore } from 'matchstick-as/assembly/store'
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { EntityCreated } from "../generated/schema"
import { EntityBasePermissionsChanged as EntityBasePermissionsChangedEvent } from "../generated/EntityManager/EntityManager"
import { handleEntityBasePermissionsChanged, handleEntityCreated } from "../src/entity-manager"
import { createEntityBasePermissionsChangedEvent, createEntityCreatedEvent } from "./entity-manager-utils"

describe("Contract: Entity Manager", () => {
  beforeEach(() => {
    // Set up any necessary test data or configurations
    // log.debug('BEFORE SON!', []);
  })

  afterEach(() => {
    // Clean up any test data or configurations
    // clearStore();
    // log.debug('AFTER SON!', []);
  })

  test("handleEntityBasePermissionsChanged()", () => {
    let _entityId = BigInt.fromI32(1);
    let _newPermissions = 4;

    let newBasePermissionsChange = createEntityBasePermissionsChangedEvent(_entityId, _newPermissions);
    handleEntityBasePermissionsChanged(newBasePermissionsChange);
    logStore();
    // assert.fieldEquals("EntityBasePermissionsChanged", _entityId.toString(), "_newPermissions", "4");

  });

  test("handleEntityCreated() for PersonalOrg -> Files", () => {
    let _to = Address.fromString("0x0000000000000000000000000000000000000001");

    for (let i = 0; i < 5; i++) {
      log.debug("We're on number: " + i.toString(), []);
      let _entityId = BigInt.fromI32(i);
      let _type = i;
      let newEntityCreatedEvent = createEntityCreatedEvent(_entityId, _type, _to);
      handleEntityCreated(newEntityCreatedEvent);
      assert.entityCount("EntityCreated", 1);
    }
  })
})