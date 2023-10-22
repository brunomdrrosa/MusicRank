import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.home.started;

export interface AlbumStarted {
  id: string;
  image: string;
  progress: number;
}

const getImageByName = (name: NameType): string => {
  return appImages.home.started[name];
};

export const albumsStarted: AlbumStarted[] = [
  {
    id: generateId(),
    image: getImageByName("beyonce"),
    progress: 0.9,
  },
  {
    id: generateId(),
    image: getImageByName("harry"),
    progress: 0.8,
  },
  {
    id: generateId(),
    image: getImageByName("adele"),
    progress: 0.5,
  },
  {
    id: generateId(),
    image: getImageByName("lilnas"),
    progress: 0.9,
  },
  {
    id: generateId(),
    image: getImageByName("taylor"),
    progress: 0.15,
  },
  {
    id: generateId(),
    image: getImageByName("coldplay"),
    progress: 0.8,
  },
  {
    id: generateId(),
    image: getImageByName("badbunny"),
    progress: 0.2,
  },
  {
    id: generateId(),
    image: getImageByName("justin"),
    progress: 0.5,
  },
];
