const storages = {};

storages.allEntities = {};

storages.all = new Set();

storages.addEntity = (entity) => {
  storages.allEntities[entity.id] = entity;
  storages.all.add(entity.id);
};

storages.forComponent = (componentId) => {
  storages[componentId] = storages[componentId] || new Set();
  return storages[componentId];
};

module.exports = storages;
