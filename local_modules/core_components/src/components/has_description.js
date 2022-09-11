/**
 * @file Has-Description Component.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');

/**
 * This component indicates that the entity has a string decription.
 *
 * @param {string} description
 */
function HasDescription(description) {
  assert(typeof description === 'string');
  this.entityId = NaN;
  this.id = 'hasDescription';
  this.description = description;
}

module.exports = HasDescription;
