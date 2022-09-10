const io = require('@hornvale/io');
const { EntityBuilder } = require('@hornvale/entity_builder').entityBuilder;
const app = require('./src');

const myConsole = new io.console.Console();

const printOutput = () => {
  myConsole.print('lol');
  setTimeout(printOutput, 1500);
};
printOutput();

const player = new EntityBuilder()
  .addComponent(new app.ecs.components.IsAPlayer())
  .addComponent(new app.ecs.components.HasName('Player'))
  .addComponent(new app.ecs.components.HasDescription("It's you, idiot."))
  .build();

const spawnRoom = new EntityBuilder()
  .addComponent(new app.ecs.components.IsARoom())
  .addComponent(new app.ecs.components.HasName('Spawn Room'))
  .addComponent(
    new app.ecs.components.HasDescription('This is the starting room.')
  )
  .build();

player.addComponent(new app.ecs.components.IsInRoom(spawnRoom));
