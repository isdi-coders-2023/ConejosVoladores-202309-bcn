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
