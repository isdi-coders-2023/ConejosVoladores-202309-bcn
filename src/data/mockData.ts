import { CharacterStructureApi } from "./types";

const mockCharacters: CharacterStructureApi[] = [
  {
    id: "1",
    name: "Mario",
    availability: "Starter",
    alsoAppearsIn: ["SSB", "Melee", "Brawl", "SSB4"],
    smash: {
      attack: "Mario Finale",
      type: "Directional",
    },
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501674/Ultimate%20Characters/Icons/120px-MarioHeadSSBUWebsite_hkzzpq.png",
      portrait:
        "https://raw.githubusercontent.com/HugoVS26/ConejosVoladores-202309-bcn-API/main/images/1.webp",
    },
    series: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501902/Series/mario_ncgezx.svg",
      name: "Mario",
    },
  },
  {
    id: "2",
    name: "Donkey Kong",
    availability: "Starter",
    alsoAppearsIn: ["SSB", "Melee", "Brawl", "SSB4"],
    smash: {
      attack: "Konga Beat",
      type: "Focused",
    },
    images: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501698/Ultimate%20Characters/Icons/120px-DonkeyKongHeadSSBUWebsite_h8qz9i.png",
      portrait:
        "https://raw.githubusercontent.com/HugoVS26/ConejosVoladores-202309-bcn-API/main/images/2.webp",
    },
    series: {
      icon: "https://res.cloudinary.com/dfen7mkm8/image/upload/v1594501875/Series/donkey-kong_tppruc.svg",
      name: "Donkey Kong",
    },
  },
];

export default mockCharacters;
