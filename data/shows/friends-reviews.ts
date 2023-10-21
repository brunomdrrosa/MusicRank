import { v4 as uuid } from "uuid";

export interface FriendReview {
  id: string;
  image: string;
  friendPicture: string;
  review: number;
}

export const friendsReviews: FriendReview[] = [
  {
    id: uuid(),
    image: require("../images/shows/friendsReviews/lolla.jpg"),
    friendPicture: require("../images/friends/digo.jpg"),
    review: 4,
  },
  {
    id: uuid(),
    image: require("../images/shows/friendsReviews/coldplay.jpg"),
    friendPicture: require("../images/friends/rian.jpg"),
    review: 5,
  },
  {
    id: uuid(),
    image: require("../images/shows/friendsReviews/kiss.jpg"),
    friendPicture: require("../images/friends/vitor.jpg"),
    review: 5,
  },
];
