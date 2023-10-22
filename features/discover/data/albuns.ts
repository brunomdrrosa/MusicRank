import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.discover.albums;

export interface Album {
  id: string;
  image: string;
}

const getImageByName = (name: NameType): string => {
  return appImages.discover.albums[name];
};

export const albuns: Album[] = [
  {
    id: generateId(),
    image: getImageByName("drake"),
  },
  {
    id: generateId(),
    image: getImageByName("morganWallen"),
  },
  {
    id: generateId(),
    image: getImageByName("rodWave"),
  },
  {
    id: generateId(),
    image: getImageByName("olivia"),
  },
  {
    id: generateId(),
    image: getImageByName("zachBryan"),
  },
  {
    id: generateId(),
    image: getImageByName("sza"),
  },
  {
    id: generateId(),
    image: getImageByName("taylor"),
  },
  {
    id: generateId(),
    image: getImageByName("travisScott"),
  },
  {
    id: generateId(),
    image: getImageByName("noah"),
  },
  {
    id: generateId(),
    image: getImageByName("lover"),
  },
];
