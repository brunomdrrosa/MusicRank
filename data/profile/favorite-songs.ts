import { v4 as uuid } from "uuid";

export interface FavoriteSong {
  id: string;
  image: string;
}

export const favoriteSongs: FavoriteSong[] = [
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/levelOfConcern.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/theFall.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/runaway.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/heatWaves.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/onlyForAMoment.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/invisible.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/oceanEyes.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/starboy.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/whenThePartyIsOver.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteSongs/monster.jpg"),
  },
];
