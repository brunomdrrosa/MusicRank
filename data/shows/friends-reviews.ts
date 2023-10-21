import { generateId } from "../../utils/generateId";

export interface FriendReview {
  id: string;
  image: string;
  friendPicture: string;
  review: number;
}

export const friendsReviews: FriendReview[] = [
  {
    id: generateId(),
    image: require("../../assets/images/shows/friendsReviews/lolla.jpg"),
    friendPicture: require("../../assets/images/friends/digo.jpg"),
    review: 4,
  },
  {
    id: generateId(),
    image: require("../../assets/images/shows/friendsReviews/coldplay.jpg"),
    friendPicture: require("../../assets/images/friends/rian.jpg"),
    review: 5,
  },
  {
    id: generateId(),
    image: require("../../assets/images/shows/friendsReviews/kiss.jpg"),
    friendPicture: require("../../assets/images/friends/vitor.jpg"),
    review: 5,
  },
];
