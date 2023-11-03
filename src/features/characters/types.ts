export interface CharacterStructureApi {
  id: number;
  name: string;
  availability: string;
  alsoAppearsIn: string[];
  smash: {
    attack: string;
    type: string;
  };
  images: {
    icon: string;
    portrait: string;
  };
  series: {
    icon: string;
    name: string;
  };
}

export interface CharacterStructure {
  id: number;
  name: string;
  availability: string;
  appears: string[];
  series: string;
  attack: string;
  smashtype: string;
  imageUrl: string;
}

export interface CharactersContextStructure {
  characters: CharacterStructure[];
  loadCharacters: (characters: CharacterStructure[]) => void;
}
