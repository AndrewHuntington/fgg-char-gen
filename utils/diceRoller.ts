type DiceRoller = Record<string, () => number>;

export const diceRoller: DiceRoller = {
  roll1d6() {
    return Math.floor(Math.random() * 6) + 1;
  },
  roll1d100() {
    return Math.floor(Math.random() * 100) + 1;
  },
  roll3d6() {
    return this.roll1d6() + this.roll1d6() + this.roll1d6();
  },
};
