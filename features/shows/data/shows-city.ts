import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.shows.showsPOA;

export interface ShowCity {
  id: string;
  image: string;
}

const getImageByName = (name: NameType): string => {
  return appImages.shows.showsPOA[name];
};

export const showsCity: ShowCity[] = [
  {
    id: generateId(),
    image: getImageByName("rhcp"),
  },
  {
    id: generateId(),
    image: getImageByName("nxZero"),
  },
  {
    id: generateId(),
    image: getImageByName("capitalInicial"),
  },
];
