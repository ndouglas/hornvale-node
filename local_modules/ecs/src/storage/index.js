/**
 * @file ECS Storage.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');

// Eventual export object.
const storage = {};

// The next identifier to use.
storage.currentEntityId = 0;

// The current generation.
storage.currentEntityGeneration = 0;

/**
 * Get current entity ID.
 *
 * @return {number}
 */
storage.getCurrentEntityId = () => {
  if (storage.currentEntityId === Number.MAX_SAFE_INTEGER) {
    storage.currentEntityId = 0;
    storage.currentEntityGeneration += 1;
  }
  const result = storage.currentEntityId;
  storage.currentEntityId += 1;
  return result;
};

/**
 * Get current generation.
 *
 * @return {number}
 */
storage.getCurrentEntityGeneration = () => storage.currentEntityGeneration;

// Storage on a per-component basis.
let componentStorage = {};

/**
 * A map of entity IDs to the entity objects.
 *
 * This is useful for the O(1) access time, among other things.
 *
 * @type {object}
 */
storage.allEntities = {};

/**
 * The set of all entity IDs.
 *
 * This is mostly to provide convenience for set operations.
 *
 * @type {Set}
 */
storage.allEntityIds = new Set();

/**
 * Add an entity to:
 * - allEntities
 * - allEntityIds
 *
 * This should be called when the entity is first created, before components
 * are added, etc.
 *
 * This also serves as an Update operation.
 *
 * This does NOT add the entity to relevant component storages.
 *
 * @param {object} entity
 */
storage.addEntity = (entity) => {
  assert(typeof entity === 'object');
  storage.allEntities[entity.id] = entity;
  storage.allEntityIds.add(entity.id);
};

/**
 * Retrieve an entity.
 *
 * @param {string|number} entityId
 * @return {object}
 */
storage.getEntity = (entityId) => {
  assert(typeof entityId === 'string' || typeof entityId === 'number');
  return storage.allEntities[entityId];
};

/**
 * Remove an entity from:
 * - allEntities
 * - allEntityIds
 *
 * This should be called when the entity is killed.
 *
 * This does NOT remove the entity from relevant component storages.
 *
 * @param {string|number} entityId
 */
storage.removeEntity = (entityId) => {
  assert(typeof entityId === 'string' || typeof entityId === 'number');
  delete storage.allEntities[entityId];
  storage.allEntityIds.delete(entityId);
};

/**
 * Remove all entities from:
 * - allEntities
 * - allEntityIds
 *
 * This should be called only when testing, mostly.
 */
storage.reset = () => {
  storage.allEntities = {};
  storage.allEntityIds = new Set();
  storage.currentEntityId = 0;
  storage.currentEntityGeneration = 0;
  componentStorage = {};
};

/**
 * Retrieve the storage for a specific component.
 *
 * At this time, this will always be an object.
 *
 * @param {string} componentId
 * @returns {object}
 */
storage.forComponent = (componentId) => {
  assert(typeof componentId === 'string');
  componentStorage[componentId] = componentStorage[componentId] || {};
  return componentStorage[componentId];
};

/**
 * Add a component for the specified entity to the component storage.
 *
 * @param {object} entity
 * @param {string} componentId
 */
storage.addComponent = (entity, componentId) => {
  assert(typeof entity === 'object');
  assert(typeof componentId === 'string');
  componentStorage[componentId] = componentStorage[componentId] || {};
  componentStorage[componentId][entity.id] = entity;
};

/**
 * Remove a component for the specified entity.
 *
 * @param {object} entity
 * @param {string} componentId
 */
storage.removeComponent = (entity, componentId) => {
  assert(typeof entity === 'object');
  assert(typeof componentId === 'string');
  componentStorage[componentId] = componentStorage[componentId] || {};
  delete componentStorage[componentId][entity.id];
};

module.exports = storage;
