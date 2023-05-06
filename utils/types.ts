export type CharacterStatNames = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma"
];

export type CharacterStatNamesShortened = [
  "str",
  "dex",
  "con",
  "int",
  "wis",
  "cha"
];

export interface CharacterState {
  stats: {
    strength: {
      value: number | undefined;
      exceptionalValue: number | undefined;
    };
    dexterity: {
      value: number | undefined;
    };
    constitution: {
      value: number | undefined;
    };
    intelligence: {
      value: number | undefined;
    };
    wisdom: {
      value: number | undefined;
    };
    charisma: {
      value: number | undefined;
    };
  };
}
