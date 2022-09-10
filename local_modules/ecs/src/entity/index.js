/**
 * @file ECS Entity.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');

// Entities will have the power to insert themselves into storage.
const storage = require('../storage');

/**
 * The Entity constructor.
 *
 * Entities are a tiny, highly extensible core, so we don't need arguments.
 *
 * @return {object}
 */
function Entity() {
  this.id = storage.getCurrentEntityId();
  this.generation = storage.getCurrentEntityGeneration();
  this.isAlive = true;
  this.components = {};
  storage.addEntity(this);
}

/**
 * Attach a component to this entity.
 *
 * @param {object} component
 *
 * @return {object}
 */
Entity.prototype.addComponent = function addComponent(component) {
  assert(typeof component === 'object');
  this.components[component.id] = component;
  this.components[component.id].entityId = this.id;
  storage.addComponent(this, component.id);
  return this;
};

/**
 * Remove a component from this entity.
 *
 * @param {string} componentId
 *
 * @return {object}
 */
Entity.prototype.removeComponent = function removeComponent(componentId) {
  assert(typeof componentId === 'string');
  storage.removeComponent(this, componentId);
  return this;
};

/**
 * Kill this entity.
 *
 * isAlive should be checked before most operations to ensure
 * that the entity is still in use.
 */
Entity.prototype.kill = function kill() {
  this.isAlive = false;
  const componentIds = Object.keys(this.components);
  componentIds.forEach((componentId) => {
    this.removeComponent(componentId);
  });
  storage.removeEntity(this.id);
  return this;
};

module.exports = Entity;
