import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.home.notStarted;

export interface AlbumNotStarted {
  id: string;
  image: string;
  progress: number;
}

const getImageByName = (name: NameType): string => {
  return appImages.home.notStarted[name];
};

export const albumsNotStarted: AlbumNotStarted[] = [
  {
    id: generateId(),
    image: getImageByName("billie"),
    progress: 0,
  },
  {
    id: generateId(),
    image: getImageByName("cage"),
    progress: 0,
  },
  {
    id: generateId(),
    image: getImageByName("conan"),
    progress: 0,
  },
  {
    id: generateId(),
    image: getImageByName("ajr"),
    progress: 0,
  },
  {
    id: generateId(),
    image: getImageByName("blackpink"),
    progress: 0,
  },
  {
    id: generateId(),
    image: getImageByName("shawn"),
    progress: 0,
  },
  {
    id: generateId(),
    image: getImageByName("lover"),
    progress: 0,
  },
  {
    id: generateId(),
    image: getImageByName("ed"),
    progress: 0,
  },
  {
    id: generateId(),
    image: getImageByName("weeknd"),
    progress: 0,
  },
];
