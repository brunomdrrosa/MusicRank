import { generateId } from "../../utils/generateId";

export interface LastSongReview {
  id: string;
  image: string;
}

export const lastSongsReviews: LastSongReview[] = [
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/greedy.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/badIdeaRight.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/vampire.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/whatWasIMadeFor.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/daylight.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/calmDown.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/singleSoon.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/whereSheGoes.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/voceVaiLembrarDeMim.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/profile/lastSongsReviews/lost.jpg"),
  },
];
