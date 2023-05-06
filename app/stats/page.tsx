"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { CharacterStatNameLong, StatBlock } from "@/utils/types";
import { diceRoller } from "@/utils/diceRoller";
import { CharacterStatsContext } from "@/context/characterStats/CharacterStatsProvider";

export default function StatsPage() {
  const { characterStats, setCharacterStats } = useContext(
    CharacterStatsContext
  );

  const STATS: CharacterStatNameLong = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  const [hasRolled, setHasRolled] = useState<boolean>(false);
  const [stats, setStats] = useState<StatBlock>({
    strength: undefined,
    dexterity: undefined,
    constitution: undefined,
    intelligence: undefined,
    wisdom: undefined,
    charisma: undefined,
  });

  const rollForStats = (): void => {
    if (!hasRolled) setHasRolled((hasRolled) => !hasRolled);
    STATS.map((stat) =>
      setStats((prevStats) => ({ ...prevStats, [stat]: diceRoller.roll3d6() }))
    );
    console.log(characterStats);
  };

  return (
    <main>
      <h1>Stats Page</h1>
      {STATS.map((stat) => {
        return (
          <div key={stat}>
            <p>
              {stat.slice(0, 3).toUpperCase()}: {stats[stat]}{" "}
              {stat === "strength" && stats[stat] === 18
                ? `/ ${diceRoller.roll1d100()}`
                : ""}
            </p>
          </div>
        );
      })}
      <button
        className="border-2 border-red-600 rounded-md"
        onClick={rollForStats}
      >
        {hasRolled ? "Roll again" : "Roll stats"}
      </button>

      <Link href="/">
        <button className="border-2 border-red-600 rounded-md">
          Go back home
        </button>
      </Link>
    </main>
  );
}
