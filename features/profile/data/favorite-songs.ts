import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.profile.favoriteSongs;

export interface FavoriteSong {
  id: string;
  image: string;
}

const getImageByName = (name: NameType): string => {
  return appImages.profile.favoriteSongs[name];
};

export const favoriteSongs: FavoriteSong[] = [
  {
    id: generateId(),
    image: getImageByName("levelOfConcern"),
  },
  {
    id: generateId(),
    image: getImageByName("theFall"),
  },
  {
    id: generateId(),
    image: getImageByName("runaway"),
  },
  {
    id: generateId(),
    image: getImageByName("heatWaves"),
  },
  {
    id: generateId(),
    image: getImageByName("onlyForAMoment"),
  },
  {
    id: generateId(),
    image: getImageByName("invisible"),
  },
  {
    id: generateId(),
    image: getImageByName("oceanEyes"),
  },
  {
    id: generateId(),
    image: getImageByName("starboy"),
  },
  {
    id: generateId(),
    image: getImageByName("whenThePartyIsOver"),
  },
  {
    id: generateId(),
    image: getImageByName("monster"),
  },
];
