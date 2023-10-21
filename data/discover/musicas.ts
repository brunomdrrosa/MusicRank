import { v4 as uuid } from "uuid";

export interface Musica {
  id: string;
  image: string;
}

export const musicas: Musica[] = [
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/greedy.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/red.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/cruelSummer.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/vampire.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/dualipa.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/badIdeaRight.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/wiwmf.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/daylight.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/singleSoon.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/songs/calmDown.jpg"),
  },
];
