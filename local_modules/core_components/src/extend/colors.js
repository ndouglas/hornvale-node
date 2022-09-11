/**
 * @file Color extensions for core components.
 * @author Nathan Douglas <git@darkdell.net>
 */

const chalk = require('chalk');
const colors = require('@hornvale/io').colors;

// Room name display color.
colors.roomName = chalk.magenta.bold;

// Room exit display color.
colors.exit = chalk.green;