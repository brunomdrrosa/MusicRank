import { v4 as uuid } from "uuid";

export interface LastSongReview {
  id: string;
  image: string;
}

export const lastSongsReviews: LastSongReview[] = [
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/greedy.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/badIdeaRight.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/vampire.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/whatWasIMadeFor.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/daylight.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/calmDown.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/singleSoon.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/whereSheGoes.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/voceVaiLembrarDeMim.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/profile/lastSongsReviews/lost.jpg"),
  },
];
