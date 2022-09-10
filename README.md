# Hornvale
Hornvale is an experimental prose-based roguelike written in NodeJS.

Yeah, [I was working on this in Rust](https://github.com/ndouglas/hornvale-rust), but I decided that whatever performance benefits Rust might bring were completely outweighed by it taking an hour or two to figure out how to do any given trivial thing in a guaranteed memory-safe fashion.

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
