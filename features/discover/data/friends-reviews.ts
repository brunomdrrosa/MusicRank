import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.discover.reviews;
type FriendType = keyof typeof appImages.friends;

export interface FriendReview {
  id: string;
  image: string;
  friendPicture: string;
  musica: string;
  artist: string;
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
    musica: "BLUE ORCHID",
    artist: "The White Stripes",
  },
  {
    id: generateId(),
    image: getImageByName("linkinPark"),
    friendPicture: getFriendPictureByName("miguel"),
    musica: "In The End",
    artist: "Linkin Park",
    review: 5,
  },
  {
    id: generateId(),
    image: getImageByName("coldplay"),
    friendPicture: getFriendPictureByName("vitor"),
    musica: "Viva La Vida",
    artist: "Coldplay",
    review: 5,
  },
  {
    id: generateId(),
    image: getImageByName("europe"),
    friendPicture: getFriendPictureByName("rian"),
    musica: "The Final Countdown",
    artist: "Europe",
    review: 5,
  },
  {
    id: generateId(),
    image: getImageByName("muse"),
    friendPicture: getFriendPictureByName("damage"),
    musica: "Starlight",
    artist: "Muse",
    review: 5,
  },
];
