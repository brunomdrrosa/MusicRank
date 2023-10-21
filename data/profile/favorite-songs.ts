import { generateId } from "../../utils/generateId";

export interface FavoriteSong {
  id: string;
  image: string;
}

export const favoriteSongs: FavoriteSong[] = [
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/levelOfConcern.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/theFall.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/runaway.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/heatWaves.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/onlyForAMoment.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/invisible.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/oceanEyes.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/starboy.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/whenThePartyIsOver.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteSongs/monster.jpg"),
  },
];
