/**
 * @file Entity extensions for core components.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');

const { Entity } = require('@hornvale/ecs').entity;
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
Entity.prototype.hasDescription = function hasDescription(description) {
  assert(typeof description === 'string');
  return this.addComponent(new HasDescription(description));
};

/**
 * Adds a convenience method for getting the entity description.
 *
 * @returns {string}
 */
Entity.prototype.getDescription = function getDescription() {
  return this.components.hasDescription.description;
};

/**
 * Adds a convenience method for giving the entity exits.
 *
 * @param {object|null} exits
 * @returns
 */
Entity.prototype.hasExits = function hasExits(exits) {
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
Entity.prototype.hasExit = function hasExit(direction, exitEntity) {
  assert(typeof direction === 'object');
  assert(typeof exitEntity === 'object');
  if (!this.components.hasExits) {
    this.hasExits({});
  }
  this.components.hasExits.exits[direction.upperCaseName] = exitEntity;
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
Entity.prototype.hasExitTo = function hasExitTo(
  direction,
  roomEntity,
  options = {}
) {
  assert(typeof direction === 'object');
  assert(typeof roomEntity === 'object');
  Object.assign(options, {
    toRoomEntity: roomEntity,
  });
  let exitEntity = new EntityBuilder().isAnExit(direction, options).build();
  return this.hasExit(direction, exitEntity);
};

/**
 * Adds a convenience method for getting the entity exits.
 *
 * @returns {string}
 */
Entity.prototype.getExits = function getExits() {
  return this.components.hasExits.exits;
};

/**
 * Adds a convenience method for giving the entity a name.
 *
 * @param {string} name
 * @returns {object}
 */
Entity.prototype.hasName = function hasName(name) {
  assert(typeof name === 'string');
  return this.addComponent(new HasName(name));
};

/**
 * Adds a convenience method for getting the entity name.
 *
 * @returns {string}
 */
Entity.prototype.getName = function getName() {
  return this.components.hasName.name;
};

/**
 * Adds a convenience method for indicating the entity is an exit.
 *
 * @param {string} direction
 * @param {object} options
 * @returns {object}
 */
Entity.prototype.isAnExit = function isAnExit(direction, options = {}) {
  return this.addComponent(new IsAnExit(direction, options));
};

/**
 * Adds a convenience method for indicating whether the entity is an exit.
 *
 * @returns {boolean}
 */
Entity.prototype.isExit = function isExit() {
  return this.components.isAnExit != null;
};

/**
 * Adds a convenience method for indicating the entity is the player.
 *
 * @returns {object}
 */
Entity.prototype.isAPlayer = function isAPlayer() {
  return this.addComponent(new IsAPlayer());
};

/**
 * Adds a convenience method for indicating whether the entity is the player.
 *
 * @returns {boolean}
 */
Entity.prototype.isPlayer = function isPlayer() {
  return this.components.isAPlayer != null;
};

/**
 * Adds a convenience method for indicating the entity is a room.
 *
 * @returns {object}
 */
Entity.prototype.isARoom = function isARoom() {
  return this.addComponent(new IsARoom());
};

/**
 * Adds a convenience method for indicating whether the entity is a room.
 *
 * @returns {boolean}
 */
Entity.prototype.isRoom = function isRoom() {
  return this.components.isARoom != null;
};

/**
 * Adds a convenience method for indicating the entity is in a specific room.
 *
 * @param {object}
 * @returns {object}
 */
Entity.prototype.isInRoom = function isInRoom(roomEntity) {
  assert(typeof roomEntity === 'object');
  return this.addComponent(new IsInRoom(roomEntity));
};

/**
 * Adds a convenience method for indicating the entity is in a specific room.
 *
 * @returns {object}
 */
Entity.prototype.getRoom = function getRoom() {
  return this.components.isInRoom.roomEntity;
};
