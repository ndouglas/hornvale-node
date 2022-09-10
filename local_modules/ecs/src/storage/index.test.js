const path = require('path');
const { storage } = require('..');

const index = require('./index');

describe(path.basename(__filename, '.test.js'), () => {
  it('should correctly add an entity to the storage (number ID)', () => {
    storage.reset();
    const expected = {
      id: 25,
      name: 'Dave',
    };
    index.addEntity(expected);
    const actual = index.getEntity(expected.id);
    expect(actual.id).toBe(expected.id);
    expect(actual.name).toEqual(expected.name);
    const actualByString = index.getEntity(expected.id.toString());
    expect(actualByString.id).toBe(expected.id);
    expect(actualByString.name).toEqual(expected.name);
  });

  it('should correctly add an entity to the storage (string ID)', () => {
    storage.reset();
    const expected = {
      id: '25',
      name: 'Dave',
    };
    index.addEntity(expected);
    const actual = index.getEntity(expected.id);
    expect(actual.id).toBe(expected.id);
    expect(actual.name).toEqual(expected.name);
    const actualByNumber = index.getEntity(parseInt(expected.id, 10));
    expect(actualByNumber.id).toBe(expected.id);
    expect(actualByNumber.name).toEqual(expected.name);
  });

  it('should correctly remove an entity from the storage with numeric ID', () => {
    storage.reset();
    const expected = {
      id: 25,
      name: 'Dave',
    };
    index.addEntity(expected);
    const actual = index.getEntity(expected.id);
    expect(actual.id).toBe(expected.id);
    expect(actual.name).toEqual(expected.name);
    const actualByNumber = index.getEntity(parseInt(expected.id, 10));
    expect(actualByNumber.id).toBe(expected.id);
    expect(actualByNumber.name).toEqual(expected.name);
    index.removeEntity(parseInt(expected.id, 10));
    const actualDeleted = index.getEntity(parseInt(expected.id, 10));
    expect(actualDeleted).toBe(undefined);
  });

  it('should correctly remove an entity from the storage with string ID', () => {
    storage.reset();
    const expected = {
      id: '25',
      name: 'Dave',
    };
    index.addEntity(expected);
    const actual = index.getEntity(expected.id);
    expect(actual.id).toBe(expected.id);
    expect(actual.name).toEqual(expected.name);
    const actualByNumber = index.getEntity(parseInt(expected.id, 10));
    expect(actualByNumber.id).toBe(expected.id);
    expect(actualByNumber.name).toEqual(expected.name);
    index.removeEntity(expected.id);
    const actualDeleted = index.getEntity(parseInt(expected.id, 10));
    expect(actualDeleted).toBe(undefined);
  });

  it('should correctly retrieve the storage for a specific component', () => {
    storage.reset();
    const expected = {};
    const actual = storage.forComponent('test');
    expect(actual).toEqual(expected);
    const entity = {
      id: 25,
      name: 'Steve',
    };
    storage.addComponent(entity, 'test');
    const expected2 = {
      25: {
        id: 25,
        name: 'Steve',
      },
    };
    const actual2 = storage.forComponent('test');
    expect(actual2).toEqual(expected2);
  });

  it('should correctly reset the entity ID and advance the generation.', () => {
    storage.reset();
    expect(storage.getCurrentEntityId()).toEqual(0);
    expect(storage.getCurrentEntityGeneration()).toEqual(0);
    expect(storage.getCurrentEntityId()).toEqual(1);
    expect(storage.getCurrentEntityGeneration()).toEqual(0);
    storage.reset();
    storage.currentEntityId = Number.MAX_SAFE_INTEGER;
    expect(storage.getCurrentEntityId()).toEqual(0);
    expect(storage.getCurrentEntityGeneration()).toEqual(1);
    expect(storage.getCurrentEntityId()).toEqual(1);
    expect(storage.getCurrentEntityGeneration()).toEqual(1);
  });
});
