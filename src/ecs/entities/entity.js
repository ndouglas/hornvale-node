const all = require('./all');
const storages = require('../storages');

let lastId = 0;
const lastGen = 0;

function Entity() {
  this.id = lastId;
  lastId += 1;
  this.gen = lastGen;
  this.components = {};
  all.push(this);
}

Entity.prototype.addComponent = function addComponent(component) {
  this.components[component.id] = component;
  this.components[component.id].entityId = this.id;
  storages.forComponent(component.id).add(this.id);
  return this;
};

module.exports = Entity;
