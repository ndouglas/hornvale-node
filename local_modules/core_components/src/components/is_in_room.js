/**
 * @file Is-In-Room Component.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');

/**
 * This component indicates that the entity is currently found in the room.
 *
 * @param {string} description
 */
function IsInRoom(roomEntity) {
  assert(typeof roomEntity === 'object');
  this.entityId = NaN;
  this.id = 'isInRoom';
  this.roomEntityId = roomEntity.id;
  this.roomEntity = roomEntity;
}

module.exports = IsInRoom;
