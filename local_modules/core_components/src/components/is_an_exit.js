/**
 * @file Is-An-Exit Component.
 * @author Nathan Douglas <git@darkdell.net>
 */

/**
 * This component indicates that the entity is an exit.
 *
 * @param {string} direction
 * @param {object} options
 */
function IsAnExit(direction, options = {}) {
  Object.assign(options, {
    isPassable: true,
  });
  this.entityId = NaN;
  this.id = 'isAnExit';
  this.direction = direction;
  this.isPassable = options.isPassable;
  this.toRoomEntity = options.toRoomEntity;
}

module.exports = IsAnExit;
