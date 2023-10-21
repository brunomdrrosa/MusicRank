import { generateId } from "../../utils/generateId";

export interface FavoriteAlbum {
  id: string;
  image: string;
}

export const favoriteAlbums: FavoriteAlbum[] = [
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteAlbums/trench.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteAlbums/wwafawdwg.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/favoriteAlbums/blurryface.jpg"),
  },
];
