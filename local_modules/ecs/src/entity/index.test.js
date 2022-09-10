const path = require('path');
const storage = require('../storage');

const index = require('./index');

describe(path.basename(__filename, '.test.js'), () => {
  it('should correctly create an entity', () => {
    storage.reset();
    const expected = new index.Entity();
    const actual = storage.getEntity(0);
    expect(actual).toEqual(expected);
  });
  it('should correctly create and kill an entity', () => {
    storage.reset();
    const expected = new index.Entity();
    const actual = storage.getEntity(0);
    expect(actual).toEqual(expected);
    expected.kill();
    const actual2 = storage.getEntity(0);
    expect(actual2).toEqual(undefined);
  });
  it('should correctly create an entity, add a component, and kill it', () => {
    storage.reset();
    const expected = new index.Entity();
    const actual = storage.getEntity(0);
    expect(actual).toEqual(expected);
    expected.addComponent({
      id: 'test_component',
    });
    expect(expected.components.test_component).toEqual({
      id: 'test_component',
      entityId: 0,
    });
    expect(storage.forComponent('test_component')).toEqual({
      0: {
        id: 0,
        generation: 0,
        isAlive: true,
        components: {
          test_component: {
            id: 'test_component',
            entityId: 0,
          },
        },
      },
    });
    expected.kill();
    const actual2 = storage.getEntity(0);
    expect(actual2).toEqual(undefined);
  });
  it('should not fail attempting to remove a component from an entity that does not possess it', () => {
    storage.reset();
    const expected = new index.Entity();
    const actual = storage.getEntity(0);
    expect(actual).toEqual(expected);
    expected.removeComponent('test_component');
  });
});
