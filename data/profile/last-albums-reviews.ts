import { v4 as uuid } from "uuid";

export interface LastAlbumReview {
  id: string;
  image: string;
}

export const lastAlbumsReviews: LastAlbumReview[] = [
  {
    id: uuid(),
    image: require("../images/profile/lastAlbumsReviews/guts.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastAlbumsReviews/happierThanEver.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastAlbumsReviews/scaledAndIcy.jpg"),
  },
];
