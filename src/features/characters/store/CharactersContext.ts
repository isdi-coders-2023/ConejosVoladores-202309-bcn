import { createContext } from "react";
import { CharactersContextStructure } from "../types";

const CharactersContext = createContext<CharactersContextStructure>(
  {} as CharactersContextStructure,
);

export default CharactersContext;
