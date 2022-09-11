/**
 * @file Storage extensions for core components.
 * @author Nathan Douglas <git@darkdell.net>
 */

const { storage } = require('@hornvale/ecs');

/**
 * Adds a convenience method for retrieving the player resource.
 *
 * @returns {object}
 */
storage.getPlayerEntity = function getPlayerEntity() {
  const isAPlayerStorage = storage.forComponent('isAPlayer');
  const entityIds = Object.keys(isAPlayerStorage);
  return isAPlayerStorage[entityIds[0]];
};

/**
 * Adds a convenience method for retrieving the player room.
 *
 * @returns {object}
 */
storage.getPlayerRoom = function getPlayerRoom() {
  const playerEntity = this.getPlayerEntity();
  return playerEntity.getRoom();
};
