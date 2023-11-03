import {
  CharacterStructure,
  CharacterStructureApi,
} from "../features/characters/types";

export const characterApiToCharacter = ({
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
