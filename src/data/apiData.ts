import { CharacterStructureApi } from "../features/characters/types";

const apiCharacters: CharacterStructureApi[] = [
  {
    id: 3,
    name: "Link",
    availability: "Starter",
    alsoAppearsIn: ["SSB", "Melee", "Brawl", "SSB4"],
    smash: {
      attack: "Triforce Slash",
      type: "Trapping/Directional",
    },
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501722/Ultimate%20Characters/Icons/120px-LinkHeadSSBUWebsite_pzo2jz.png",
      portrait:
        "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501273/Ultimate%20Characters/Portraits/350_shjp6c.png",
    },
    series: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501930/Series/the-legend-of-zelda_naf34b.svg",
      name: "The Legend of Zelda",
    },
  },
  {
    id: 4,
    name: "Yoshi",
    availability: "Starter",
    alsoAppearsIn: ["SSB", "Melee", "Brawl", "SSB4"],
    smash: {
      attack: "Super Dragon",
      type: "Transformation",
    },
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595197033/Ultimate%20Characters/Icons/yzfsd5sz2h6izdgre4ub.png",
      portrait:
        "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595197033/Ultimate%20Characters/Portraits/lfacckrdfx7im91l9j3c.png",
    },
    series: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1595197033/Series/murkcxf7ykhhz3muwo7y.svg",
      name: "Yoshi",
    },
  },
];

export default apiCharacters;
