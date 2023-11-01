import { useMemo, useCallback, useState, PropsWithChildren } from "react";
import CharactersContext from "./CharactersContext";
import { CharacterStructure } from "../types";

const CharacterProviderWapper = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<CharacterStructure[]>([]);
  const loadCharacters = useCallback((characters: CharacterStructure[]) => {
    setCharacters(characters);
  }, []);

  const charactersContextValue = useMemo(
    () => ({ characters, loadCharacters }),
    [characters, loadCharacters],
  );

  return (
    <CharactersContext.Provider value={charactersContextValue}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharacterProviderWapper;
