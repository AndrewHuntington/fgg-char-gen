"use client";

import { createContext, useState } from "react";
import { characterState } from "./state/characterState";
import { CharacterState } from "@/utils/types";

export const CharacterStatsContext = createContext({
  characterStats: characterState,
  setCharacterStats: (characterStats: CharacterState) => {},
});

export function CharacterStatsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [characterStats, setCharacterStats] = useState(characterState);

  return (
    <CharacterStatsContext.Provider
      value={{ characterStats, setCharacterStats }}
    >
      {children}
    </CharacterStatsContext.Provider>
  );
}
