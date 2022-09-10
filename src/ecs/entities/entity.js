const all = require('./all');
const components = require('../components');
const storages = require('../storages');

var lastId = 0;
var lastGen = 0;

function Entity() {
  this.id = lastId++;
  this.gen = lastGen;
  this.components = {};
  all.push(this);
}

Entity.prototype.addComponent = function (component) {
  this.components[component.id] = component;
  this.components[component.id].entityId = this.id;
  storages.forComponent(component.id).add(this.id);
  return this;
};

module.exports = Entity;