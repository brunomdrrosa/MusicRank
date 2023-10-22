import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.shows.showsBrasil;

export interface ShowCountry {
  id: string;
  image: string;
}

const getImageByName = (name: NameType): string => {
  return appImages.shows.showsBrasil[name];
};

export const showsCountry: ShowCountry[] = [
  {
    id: generateId(),
    image: getImageByName("taylorSwift"),
  },
  {
    id: generateId(),
    image: getImageByName("evanescence"),
  },
  {
    id: generateId(),
    image: getImageByName("paulMcCartney"),
  },
];
