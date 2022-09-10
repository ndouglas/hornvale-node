/**
 * @file ECS Storage.
 * @author Nathan Douglas <git@darkdell.net>
 */

// Eventual export object.
const storage = {};

// Storage on a per-component basis.
storage.component = {};

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
  storage.allEntities[entity.id] = entity;
  storage.allEntityIds.add(entity.id);
};

/**
 * Retrieve an entity.
 *
 * @param {string|number} entityId
 * @return {object}
 */
storage.getEntity = (entityId) => storage.allEntities[entityId];

/**
 * Remove an entity from:
 * - allEntities
 * - allEntityIds
 *
 * This should be called when the entity is destroyed.
 *
 * This does NOT remove the entity from relevant component storages.
 *
 * @param {string} entityId
 */
storage.removeEntity = (entityId) => {
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
};

/**
 * Retrieve the storage for a specific component.
 *
 * At this time, this will always be an object.
 *
 * @param {*} componentId
 * @returns {object}
 */
storage.forComponent = (componentId) => {
  storage.component[componentId] = storage.component[componentId] || {};
  return storage.component[componentId];
};

module.exports = storage;
