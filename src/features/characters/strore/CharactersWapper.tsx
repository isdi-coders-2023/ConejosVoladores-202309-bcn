import { useCallback, useState, PropsWithChildren } from "react";
import CharactersContext from "./CharactersContext";
import { CharacterStructure } from "../types";

const CharacarterProviderWapper = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  const loadCharacters = useCallback((characters: CharacterStructure[]) => {
    setCharacters(characters);
  }, []);

  return (
    <CharactersContext.Provider value={{ characters, loadCharacters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharacarterProviderWapper;
