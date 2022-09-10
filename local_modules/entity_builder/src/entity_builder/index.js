/**
 * @file ECS Entity.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');

const ecs = require('@hornvale/ecs');

const { Entity } = ecs.entity;

/**
 * Simplified entity construction interface.
 *
 * @returns {object}
 */
function EntityBuilder() {
  this.entity = new Entity();
}

/**
 * Add a component to the entity.
 *
 * @param {object} component
 * @return {object}
 */
EntityBuilder.prototype.addComponent = function (component) {
  assert(typeof component === 'object');
  this.entity.addComponent(component);
  return this;
};

/**
 * Build the entity (finally).
 *
 * @return {object}
 */
EntityBuilder.prototype.build = function () {
  return this.entity;
};

exports.EntityBuilder = EntityBuilder;
