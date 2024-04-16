import { getOrCreateWallet } from './wallet';
import { upsertEntityUserPermission } from './utils';

import {
  EntityIndividualUserPermissionsChanged as EntityIndividualUserPermissionsChangedEvent,
} from "../generated/FacetEntityPermissions/FacetEntityPermissions"
// import { FSEntity, CommentOnEntity, OrganizationTransferredToIndividual } from '../generated/schema';


export function handleEntityIndividualUserPermissionsChanged (event: EntityIndividualUserPermissionsChangedEvent): void {
  let wallet = getOrCreateWallet(event.params._user);
  let entity = upsertEntityUserPermission(event, wallet);
}


// export function handleEntityBasePermissionsChanged(event: EntityBasePermissionsChangedEvent): void {
//   //DETAIL: Update comment count on main
//   let fsEntity = FSEntity.load(event.params._entityId.toString());
//   if (!!fsEntity) {
//     fsEntity._basePermissions = event.params._newPermissions;
//     fsEntity.save();
//   }
// }
