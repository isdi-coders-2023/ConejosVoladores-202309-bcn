import { useMemo, useCallback, useState, PropsWithChildren } from "react";
import { CharacterStructure } from "../types";
import CharactersContext from "./CharacterContext";

const CharacarterProviderWrapper = ({ children }: PropsWithChildren) => {
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

export default CharacarterProviderWrapper;