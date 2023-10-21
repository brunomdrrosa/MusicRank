import { generateId } from "../../utils/generateId";

export interface LastAlbumReview {
  id: string;
  image: string;
}

export const lastAlbumsReviews: LastAlbumReview[] = [
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastAlbumsReviews/guts.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastAlbumsReviews/happierThanEver.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastAlbumsReviews/scaledAndIcy.jpg"),
  },
];
