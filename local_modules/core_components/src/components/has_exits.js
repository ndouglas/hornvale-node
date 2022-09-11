/**
 * @file Has-Exits Component.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');
const util = require('util');

/**
 * This component indicates that the entity has exits to other rooms.
 *
 * @param {object|undefined} exits
 */
function HasExits(exits) {
  assert(typeof exits === 'object' || exits === undefined || exits === null);
  this.entityId = NaN;
  this.id = 'hasExits';
  this.exits = exits || {};
}

module.exports = HasExits;
