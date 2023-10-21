import { generateId } from "../../utils/generateId";

export interface Musica {
  id: string;
  image: string;
}

export const musicas: Musica[] = [
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/greedy.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/red.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/cruelSummer.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/vampire.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/dualipa.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/badIdeaRight.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/wiwmf.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/daylight.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/singleSoon.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/songs/calmDown.jpg"),
  },
];
