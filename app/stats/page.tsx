"use client";

import Link from "next/link";
import { useState, useContext } from "react";
import { CharacterStatNames } from "@/utils/types";
import { diceRoller } from "@/utils/diceRoller";
import { CharacterStatsContext } from "@/context/characterStats/CharacterStatsProvider";
import { CharacterState } from "@/utils/types";

export default function StatsPage() {
  const { characterStats, setCharacterStats } = useContext(
    CharacterStatsContext
  );

  const STATS: CharacterStatNames = [
    "strength",
    "dexterity",
    "constitution",
    "intelligence",
    "wisdom",
    "charisma",
  ];

  // TODO: Have stats survive refresh

  const [hasRolled, setHasRolled] = useState<boolean>(false);
  const rollForStats = (): void => {
    if (!hasRolled) setHasRolled((hasRolled) => !hasRolled);
    STATS.forEach((stat) => {
      setCharacterStats((prevStats: CharacterState) => {
        const newStats = {
          ...prevStats,
          stats: {
            ...prevStats.stats,
            [stat]: { value: diceRoller.roll3d6() },
          },
        };

        if (stat === "strength" && newStats.stats.strength.value === 18) {
          newStats.stats.strength.exceptionalValue = diceRoller.roll1d100();
        }

        return newStats;
      });
    });
  };

  return (
    <main>
      {/* TODO: Replace with form to allow user to input stats */}
      <h1>Stats Page</h1>
      {STATS.map((stat) => {
        return (
          <div key={stat}>
            <p>
              {stat.slice(0, 3).toUpperCase()}:{" "}
              {characterStats.stats[stat].value}{" "}
              {stat === "strength" &&
              characterStats.stats.strength.exceptionalValue
                ? `/ ${characterStats.stats.strength.exceptionalValue}`
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
