export type CharacterStatNameLong = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma"
];

export type CharacterStatNameShort = ["str", "dex", "con", "int", "wis", "cha"];

export interface StatBlock {
  strength: undefined | number;
  dexterity: undefined | number;
  constitution: undefined | number;
  intelligence: undefined | number;
  wisdom: undefined | number;
  charisma: undefined | number;
}

export interface CharacterState {
  stats: {
    strength: {
      value: number | undefined;
      isExceptional: boolean;
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
