import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.discover.reviews;
type FriendType = keyof typeof appImages.friends;

export interface FriendReview {
  id: string;
  image: string;
  friendPicture: string;
  review: number;
}

const getImageByName = (name: NameType): string => {
  return appImages.discover.reviews[name];
};

const getFriendPictureByName = (name: FriendType): string => {
  return appImages.friends[name];
};

export const friendsReviews: FriendReview[] = [
  {
    id: generateId(),
    image: getImageByName("tws"),
    friendPicture: getFriendPictureByName("digo"),
    review: 5,
  },
  {
    id: generateId(),
    image: getImageByName("linkinPark"),
    friendPicture: getFriendPictureByName("miguel"),
    review: 5,
  },
  {
    id: generateId(),
    image: getImageByName("coldplay"),
    friendPicture: getFriendPictureByName("vitor"),
    review: 5,
  },
  {
    id: generateId(),
    image: getImageByName("europe"),
    friendPicture: getFriendPictureByName("rian"),
    review: 5,
  },
  {
    id: generateId(),
    image: getImageByName("muse"),
    friendPicture: getFriendPictureByName("damage"),
    review: 5,
  },
];
