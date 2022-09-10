/**
 * @file Console.
 * @author Nathan Douglas <git@darkdell.net>
 */

const assert = require('assert');
const readline = require('readline');

const consoleLog = console.log;

/**
 * The Console object.
 *
 * This provides centralized input and output for Hornvale.
 *
 * @return {object}
 */
function Console() {
  console.clear();
  this.interface = readline.createInterface(process.stdin, process.stdout);
  this.interface.on('line', (line) => {
    this.read(line);
  });
}

/**
 * Print output to the screen.
 * @param {...any} arguments
 */
Console.prototype.print = function print(...args) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  consoleLog(...args);
  this.interface.prompt(true);
};

/**
 * Read input from the user.
 *
 * This should not be overridden.
 *
 * @see handleLine()
 *
 * @param {string} line
 */
Console.prototype.read = function read(line) {
  assert(typeof line === 'string');
  this.handle(line);
  this.interface.prompt(true);
};

/**
 * Handle input from the user.
 *
 * This is intended to be overridden.
 *
 * @param {string} line
 */
Console.prototype.handle = function handle(line) {
  assert(typeof line === 'string');
  this.print(line);
};

exports.Console = Console;
