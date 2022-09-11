const { world } = require('@hornvale/ecs');
const io = require('@hornvale/io');
// eslint-disable-line no-unused-vars
const coreComponents = require('@hornvale/core_components');
const { EntityBuilder } = require('@hornvale/entity_builder').entityBuilder;
const model = require('@hornvale/model');

const myConsole = new io.console.Console();
const colors = io.colors;
const directions = model.directions;

myConsole.handle = function handle(line) {
  let words = line.split(' ');
  switch (words[0]) {
    case 'n':
    case 'north':
      break;
    case 'ne':
    case 'northeast':
      break;
    case 'nw':
    case 'northwest':
      break;
    case 'e':
    case 'east':
      break;
    case 'se':
    case 'southeast':
      break;
    case 's':
    case 'south':
      break;
    case 'sw':
    case 'southwest':
      break;
    case 'w':
    case 'west':
      break;
    case 'echo':
      this.print(words.slice(1).join(' '));
      break;
  }
};

const player = new EntityBuilder()
  .isAPlayer()
  .hasName('Player')
  .hasDescription("It's you, idiot.")
  .build();

const spawnRoom = new EntityBuilder()
  .isARoom()
  .hasName('Spawn Room')
  .hasDescription('This is the starting room.')
  .build();

const neRoom = new EntityBuilder()
  .isARoom()
  .hasName('Northeast Room')
  .hasDescription('This is a northeastern room.')
  .hasExitTo(directions.SOUTHWEST, spawnRoom)
  .build();

  const nRoom = new EntityBuilder()
  .isARoom()
  .hasName('North Room')
  .hasDescription('This is a northern room.')
  .hasExitTo(directions.SOUTH, spawnRoom)
  .build();

spawnRoom
  .hasExitTo(directions.NORTHEAST, neRoom)
  .hasExitTo(directions.NORTH, nRoom);

player.isInRoom(spawnRoom);

const printOutput = () => {
  const room = world.getPlayerRoom();
  myConsole.printRoomName(room);
  myConsole.print(room.getDescription());
  myConsole.printRoomExits(room);
  setTimeout(printOutput, 1500);
};
printOutput();
