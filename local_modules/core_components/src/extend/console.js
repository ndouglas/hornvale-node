/**
 * @file Console extensions for core components.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');

const { Console } = require('@hornvale/io').console;
const colors = require('@hornvale/io').colors;
const directions = require('@hornvale/model').directions;

/**
 * Adds a convenience method for printing a room name.
 *
 * @param {object} roomEntity
 */
Console.prototype.printRoomName = function printRoomName(roomEntity) {
  assert(typeof roomEntity === 'object');
  this.print('[' + colors.roomName(roomEntity.getName()) + ']');
};

/**
 * Adds a convenience method for printing a room name.
 *
 * @param {object} roomEntity
 */
 Console.prototype.printRoomExits = function printRoomExits(roomEntity) {
  assert(typeof roomEntity === 'object');
  const exits = roomEntity.getExits();
  const exitDirections = Object.keys(exits);
  if (exits.length === 0) {
    this.print('There are no visible exits.');
    return;
  }
  let string = '';
  if (exits.length === 1) {
    string += 'There is an exit to the ';
  }
  else {
    string += 'There are exits to the ';
  }
  const directionStrings = [];
  for (let i = 0; i < exitDirections.length; i++) {
    const thisDirection = exitDirections[i];
    const direction = directions[thisDirection];
    const thisExit = exits[thisDirection];
    directionStrings.push(direction.name);
  }
  if (directionStrings.length > 1) {
    const last = directionStrings.pop();
    string += directionStrings.join(', ') + ' and ' + last;
  }
  else {
    string += directionStrings[0];
  }
  string += '.';
  this.print(string);
};
