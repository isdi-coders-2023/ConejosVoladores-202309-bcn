import { createContext } from "react";
import { CharacterStructure } from "../types";

interface CharactersContextStructure {
  characters: CharacterStructure[];
  loadCharacters: (characters: CharacterStructure[]) => void;
}

const CharactersContext = createContext<CharactersContextStructure>(
  {} as CharactersContextStructure,
);

export default CharactersContext;
