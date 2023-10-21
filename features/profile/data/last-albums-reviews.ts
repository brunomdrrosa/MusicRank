import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.profile.lastAlbumsReviews;

export interface LastAlbumReview {
  id: string;
  image: string;
}

const getImageByName = (name: NameType): string => {
  return appImages.profile.lastAlbumsReviews[name];
};

export const lastAlbumsReviews: LastAlbumReview[] = [
  {
    id: generateId(),
    image: getImageByName("guts"),
  },
  {
    id: generateId(),
    image: getImageByName("happierThanEver"),
  },
  {
    id: generateId(),
    image: getImageByName("scaledAndIcy"),
  },
];
