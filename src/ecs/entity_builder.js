const Entity = require('./entities').Entity;
const components = require('./components');
const storages = require('./storages');

function EntityBuilder() {
  this.entity = new Entity();
  storages.addEntity(this.entity);
  return this;
}

EntityBuilder.prototype.addComponent = function (component) {
  this.entity.addComponent(component);
  return this;
};

EntityBuilder.prototype.addName = function (name) {
  return this.addComponent(new components.Name(name));
};

EntityBuilder.prototype.addDescription = function (description) {
  return this.addComponent(new components.Description(description));
};

EntityBuilder.prototype.build = function () {
  return this.entity;
};

module.exports = EntityBuilder;
