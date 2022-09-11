/**
 * @file Has-Name Component.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');

/**
 * This component indicates that the entity has a string name.
 *
 * @param {string} description
 */
function HasName(name) {
  assert(typeof name === 'string');
  this.entityId = NaN;
  this.id = 'hasName';
  this.name = name;
}

module.exports = HasName;
