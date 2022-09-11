/**
 * @file World extensions for core components.
 * @author Nathan Douglas <git@darkdell.net>
 */

const ecs = require('@hornvale/ecs');

const { storage } = ecs;
const { world } = ecs;

/**
 * Adds a convenience method for assigning the player resource.
 *
 * @returns {object}
 */
world.getPlayerEntity = function getPlayerEntity() {
  return storage.getPlayerEntity();
};

/**
 * Adds a convenience method for retrieving the player room.
 *
 * @returns {object}
 */
world.getPlayerRoom = function getPlayerRoom() {
  return storage.getPlayerRoom();
};
