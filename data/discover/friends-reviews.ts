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
    image: require("../../assets/images/discover/reviews/tws.jpg"),
    friendPicture: require("../../assets/images/friends/digo.jpg"),
    review: 5,
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/reviews/linkinPark.jpg"),
    friendPicture: require("../../assets/images/friends/miguel.jpg"),
    review: 5,
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/reviews/coldplay.jpg"),
    friendPicture: require("../../assets/images/friends/vitor.jpg"),
    review: 5,
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/reviews/europe.jpg"),
    friendPicture: require("../../assets/images/friends/rian.jpg"),
    review: 5,
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/reviews/billieEilish.jpg"),
    friendPicture: require("../../assets/images/friends/damage.jpg"),
    review: 4,
  },
];
