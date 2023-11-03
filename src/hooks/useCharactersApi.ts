import { useCallback, useContext } from "react";
import { characterApiToCharacter } from "../data/apiSmash";
import { CharacterStructureApi } from "../features/characters/types";
import CharactersContext from "../features/characters/store/CharactersContext";

const apiUrl = import.meta.env.VITE_API_URL;

export const useCharactersApi = () => {
  const { loadCharacters } = useContext(CharactersContext);

  const getCharacter = useCallback(async () => {
    const response = await fetch(`${apiUrl}/characters?_limit=10`);

    const charactersApi = (await response.json()) as CharacterStructureApi[];

    loadCharacters(
      charactersApi.map((characterApi) =>
        characterApiToCharacter(characterApi),
      ),
    );
  }, [loadCharacters]);

  return { loadCharactersApi: getCharacter };
};
