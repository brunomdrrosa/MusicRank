import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.shows.friendsReviews;
type FriendType = keyof typeof appImages.friends;

export interface FriendReview {
  id: string;
  image: string;
  friendPicture: string;
  review: number;
}

const getImageByName = (name: NameType): string => {
  return appImages.shows.friendsReviews[name];
};

const getFriendPictureByName = (name: FriendType): string => {
  return appImages.friends[name];
};

export const friendsReviews: FriendReview[] = [
  {
    id: generateId(),
    image: getImageByName("lolla"),
    friendPicture: getFriendPictureByName("digo"),
    review: 4,
  },
  {
    id: generateId(),
    image: getImageByName("coldplay"),
    friendPicture: getFriendPictureByName("rian"),
    review: 5,
  },
  {
    id: generateId(),
    image: getImageByName("kiss"),
    friendPicture: getFriendPictureByName("vitor"),
    review: 5,
  },
];
