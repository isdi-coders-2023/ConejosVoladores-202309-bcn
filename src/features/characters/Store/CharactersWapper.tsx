import { useMemo, useCallback, useState, PropsWithChildren } from "react";
import { CharacterStructure } from "../types";
import CharactersContext from "./CharactersContext";

const CharacarterProviderWapper = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);

  const loadCharacters = useCallback((characters: CharacterStructure[]) => {
    setCharacters(characters);
  }, []);

  const charactersContexValue = useMemo(
    () => ({ characters, loadCharacters }),
    [characters, loadCharacters],
  );

  return (
    <CharactersContext.Provider value={charactersContexValue}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharacarterProviderWapper;
