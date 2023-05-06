export type CHARACTER_STAT_NAMES_LONG = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma"
];

export type CHARACTER_STAT_NAMES_SHORT = [
  "str",
  "dex",
  "con",
  "int",
  "wis",
  "cha"
];

export interface STAT_BLOCK {
  strength: undefined | number;
  dexterity: undefined | number;
  constitution: undefined | number;
  intelligence: undefined | number;
  wisdom: undefined | number;
  charisma: undefined | number;
}
