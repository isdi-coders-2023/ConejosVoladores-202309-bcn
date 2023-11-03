import { useCallback, useContext } from "react";
import {
  characterStructureApiToCharacterStructure,
  getCharacters,
} from "../data/apiSmash";
import { CharacterStructureApi } from "../features/characters/types";
import CharactersContext from "../features/characters/store/CharactersContext";

export const useCharactersApi = () => {
  const { loadCharacters } = useContext(CharactersContext);

  const loadCharactersApi = useCallback(async () => {
    const response = await getCharacters();

    const charactersApi = (await response.json()) as CharacterStructureApi[];

    const characters = charactersApi.map((characterApi) =>
      characterStructureApiToCharacterStructure(characterApi),
    );

    loadCharacters(characters);
  }, [loadCharacters]);

  return { loadCharactersApi };
};
