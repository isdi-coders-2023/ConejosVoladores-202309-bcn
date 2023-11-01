import { useMemo, useCallback, useState, PropsWithChildren } from "react";
import { CharacterStructure } from "../types";
import CharactersContext from "./CharacterContext";

const CharacterProviderWrapper = ({ children }: PropsWithChildren) => {
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

export default CharacterProviderWrapper;
