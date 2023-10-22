import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.discover.songs;

export interface Musica {
  id: string;
  image: string;
}

const getImageByName = (name: NameType): string => {
  return appImages.discover.songs[name];
};

export const musicas: Musica[] = [
  {
    id: generateId(),
    image: getImageByName("greedy"),
  },
  {
    id: generateId(),
    image: getImageByName("red"),
  },
  {
    id: generateId(),
    image: getImageByName("cruelSummer"),
  },
  {
    id: generateId(),
    image: getImageByName("vampire"),
  },
  {
    id: generateId(),
    image: getImageByName("dualipa"),
  },
  {
    id: generateId(),
    image: getImageByName("badIdeaRight"),
  },
  {
    id: generateId(),
    image: getImageByName("wiwmf"),
  },
  {
    id: generateId(),
    image: getImageByName("daylight"),
  },
  {
    id: generateId(),
    image: getImageByName("singleSoon"),
  },
  {
    id: generateId(),
    image: getImageByName("calmDown"),
  },
];
