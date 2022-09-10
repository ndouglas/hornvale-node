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
    const actualByString = index.getEntity(parseInt(expected.id, 10));
    expect(actualByString.id).toBe(expected.id);
    expect(actualByString.name).toEqual(expected.name);
  });
});
