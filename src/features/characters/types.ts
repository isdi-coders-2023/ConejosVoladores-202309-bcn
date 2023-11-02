export interface CharacterStructure {
  id: number;
  name: string;
  availability: string;
  appears: string[];
  attack: string;
  smashtype: string;
  imageUrl: string;
}
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
