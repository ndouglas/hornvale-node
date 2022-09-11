/**
 * @file Is-A-Player Component.
 * @author Nathan Douglas <git@darkdell.net>
 */

/**
 * This component indicates that the entity represents an active player.
 *
 * @param {string} description
 */
function IsAPlayer() {
  this.entityId = NaN;
  this.id = 'isAPlayer';
}

module.exports = IsAPlayer;
