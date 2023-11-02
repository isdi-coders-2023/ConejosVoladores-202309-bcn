import { CharacterStructure } from "../types";

export interface CharactersContextStructure {
  characters: CharacterStructure[];
  loadCharacters: (characters: CharacterStructure[]) => void;
}
