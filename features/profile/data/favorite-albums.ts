import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.profile.favoriteAlbums;

export interface FavoriteAlbum {
  id: string;
  image: string;
}

const getImageByName = (name: NameType): string => {
  return appImages.profile.favoriteAlbums[name];
};

export const favoriteAlbums: FavoriteAlbum[] = [
  {
    id: generateId(),
    image: getImageByName("trench"),
  },
  {
    id: generateId(),
    image: getImageByName("wwafawdwg"),
  },
  {
    id: generateId(),
    image: getImageByName("blurryface"),
  },
];
