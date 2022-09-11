/**
 * @file EntityBuilder extensions for core components.
 * @author Nathan Douglas <git@darkdell.net>
 */

const { Entity } = require('@hornvale/ecs/src/entity');
const assert = require('assert');

const { EntityBuilder } = require('@hornvale/entity_builder').entityBuilder;

const {
  HasDescription,
  HasExits,
  HasName,
  IsAnExit,
  IsAPlayer,
  IsARoom,
  IsInRoom,
} = require('../components');

/**
 * Adds a convenience method for giving the entity a description.
 *
 * @param {string} description
 * @returns {object}
 */
EntityBuilder.prototype.hasDescription = function hasDescription(description) {
  assert(typeof description === 'string');
  return this.addComponent(new HasDescription(description));
};

/**
 * Adds a convenience method for giving the entity exits.
 *
 * @param {object|null} exits
 * @returns {object}
 */
EntityBuilder.prototype.hasExits = function hasExits(exits) {
  assert(typeof exits === 'object' || exits === null || exits === undefined);
  return this.addComponent(new HasExits(exits));
};

/**
 * Adds a convenience method for giving the entity an exit.
 *
 * @param {object} direction
 * @param {object} exitEntity
 * @returns {object}
 */
EntityBuilder.prototype.hasExit = function hasExit(direction, exitEntity) {
  assert(typeof direction === 'object');
  assert(typeof exitEntity === 'object');
  this.entity.hasExit(direction, exitEntity);
  return this;
};

/**
 * Adds a convenience method for giving the entity an exit to a specific room.
 *
 * @param {object} direction
 * @param {object} roomEntity
 * @param {object} options
 * @returns {object}
 */
EntityBuilder.prototype.hasExitTo = function hasExitTo(
  direction,
  roomEntity,
  options = {}
) {
  assert(typeof direction === 'object');
  assert(typeof roomEntity === 'object');
  this.entity.hasExitTo(direction, roomEntity, options);
  return this;
};

/**
 * Adds a convenience method for giving the entity a name.
 *
 * @param {string} name
 * @returns {object}
 */
EntityBuilder.prototype.hasName = function hasName(name) {
  assert(typeof name === 'string');
  return this.addComponent(new HasName(name));
};

/**
 * Adds a convenience method for indicating the entity is the player.
 *
 * @returns {object}
 */
EntityBuilder.prototype.isAPlayer = function isAPlayer() {
  return this.addComponent(new IsAPlayer());
};

/**
 * Adds a convenience method for indicating the entity is an exit.
 *
 * @param {string} direction
 * @param {object} options
 * @returns {object}
 */
EntityBuilder.prototype.isAnExit = function isAnExit(direction, options = {}) {
  return this.addComponent(new IsAnExit(direction, options));
};

/**
 * Adds a convenience method for indicating the entity is a room.
 *
 * @returns {object}
 */
EntityBuilder.prototype.isARoom = function isARoom() {
  return this.addComponent(new IsARoom());
};

/**
 * Adds a convenience method for indicating the entity is in a specific room.
 *
 * @returns {object}
 */
EntityBuilder.prototype.isInRoom = function isInRoom(roomEntity) {
  assert(typeof roomEntity === 'object');
  return this.addComponent(new IsInRoom(roomEntity));
};
