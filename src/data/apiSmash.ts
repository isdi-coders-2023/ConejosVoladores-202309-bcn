import {
  CharacterStructure,
  CharacterStructureApi,
} from "../features/characters/types";

const apiUrl = import.meta.env.VITE_API_URL;

export const characterStructureApiToCharacterStructure = ({
  id,
  name,
  availability,
  alsoAppearsIn,
  smash,
  images,
  series,
}: CharacterStructureApi): CharacterStructure => {
  const characterStructure = {
    id: id,
    name: name,
    availability: availability,
    appears: [...alsoAppearsIn],
    attack: smash.attack,
    smashtype: smash.type,
    imageUrl: images.portrait,
    series: series.name,
  };

  return characterStructure;
};

export const getCharacters = async (): Promise<Response> => {
  const response = await fetch(`${apiUrl}/characters`);

  return response;
};
