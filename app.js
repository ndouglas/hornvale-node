const { exit } = require('process');

const readline = require('readline').createInterface(
  process.stdin,
  process.stdout
);

const app = require('./src');

function consoleLog(msg) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log(msg);
  readline.prompt(true);
}

const printOutput = () => {
  consoleLog('lol');
  setTimeout(printOutput, 1500);
};
printOutput();

const player = new app.ecs.EntityBuilder()
  .addComponent(new app.ecs.components.IsAPlayer())
  .addComponent(new app.ecs.components.HasName('Player'))
  .addComponent(new app.ecs.components.HasDescription("It's you, idiot."))
  .build();

const spawnRoom = new app.ecs.EntityBuilder()
  .addComponent(new app.ecs.components.IsARoom())
  .addComponent(new app.ecs.components.HasName('Spawn Room'))
  .addComponent(
    new app.ecs.components.HasDescription('This is the starting room.')
  )
  .build();

player.addComponent(new app.ecs.components.IsInRoom(spawnRoom));

// console.log(player);
// console.log(app.ecs.storages);

readline.on('line', (line) => {
  if (line[0] === '/' && line.length > 1) {
    exit();
  } else {
    readline.prompt(true);
  }
});
