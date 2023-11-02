import { createContext } from "react";
import { CharactersContextStructure } from "./CharactersContextStructure";

const CharactersContext = createContext<CharactersContextStructure>(
  {} as CharactersContextStructure,
);

export default CharactersContext;
