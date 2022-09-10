# Hornvale

Hornvale is an experimental prose-based roguelike written in NodeJS.

I have two relevant favorite games:

- _After the Plague II_, a Hungarian MUD I played about twenty years ago
- _Zork_ (I-III), the legendary text adventures from Infocom

I've wanted to capture/recreate/whatever the experiences I had with these games for a long time, but I was sort of stuck in a dichotomous way of thinking about it: either I could make a roguelike, which satisfied the dungeon-crawling sort of aspect, or a MUD, which satisfied the prose sort of aspect.

So I thought I might experiment with a prose-based roguelike that incorporates elements from text adventures and MUDs.

Elements this would keep/not keep from each genre (traditionally speaking):

- roguelikes:
  - keep:
    - procedural generation
    - permadeath
    - general complexity and depth of play
    - combat system
  - _not_ keep:
    - the top-down dungeon view
- MUDs:
  - keep:
    - prose descriptions of areas
    - realtime (actions take place in the world regardless of player action)
    - broad focus (multiple areas, factions, quests, plotlines, etc)
    - combat system
  - _not_ keep:
    - multiplayer
    - pre-written world
- text adventures:
  - keep:
    - focus on prose
    - focus on an individual's journey
    - complex, interactive NPCs and devices
  - _not_ keep:
    - narrow focus (anything not directly serving the principal narrative should be discarded)
    - puzzle-based quests (these would tend to lose novelty very quickly)

After fiddling with the Rust version of this for several days, my main focus is on _developer experience_.

I'm looking for an experience like this:

```nodejs
const neRoom = new EntityBuilder()
  .setName("Northeast Room")
  .setDescription("This is a northeastern room.")
  .isARoom()
  .build();

const spawnRoom = new EntityBuilder()
  .setName("Spawn Room")
  .setDescription("This is the room where you spawned.")
  .isARoom()
  .hasExit(directions.NORTHEAST, neRoom)
  .build();

neRoom.hasExit(directions.SOUTHWEST, spawnRoom);

const playerEntity = new EntityBuilder()
  .setName("Player")
  .setDescription("... it's you, idiot.")
  .isPlayer()
  .isInRoom(spawnRoom)
  .build();
```
