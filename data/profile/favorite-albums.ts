import { v4 as uuid } from "uuid";

export interface FavoriteAlbum {
  id: string;
  image: string;
}

export const favoriteAlbums: FavoriteAlbum[] = [
  {
    id: uuid(),
    image: require("../images/profile/favoriteAlbums/trench.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteAlbums/wwafawdwg.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/favoriteAlbums/blurryface.jpg"),
  },
];
