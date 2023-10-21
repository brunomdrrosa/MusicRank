import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.profile.lastSongsReviews;

export interface LastSongReview {
  id: string;
  image: string;
}

const getImageByName = (name: NameType): string => {
  return appImages.profile.lastSongsReviews[name];
};

export const lastSongsReviews: LastSongReview[] = [
  {
    id: generateId(),
    image: getImageByName("greedy"),
  },
  {
    id: generateId(),
    image: getImageByName("badIdeaRight"),
  },
  {
    id: generateId(),
    image: getImageByName("vampire"),
  },
  {
    id: generateId(),
    image: getImageByName("whatWasIMadeFor"),
  },
  {
    id: generateId(),
    image: getImageByName("daylight"),
  },
  {
    id: generateId(),
    image: getImageByName("calmDown"),
  },
  {
    id: generateId(),
    image: getImageByName("singleSoon"),
  },
  {
    id: generateId(),
    image: getImageByName("whereSheGoes"),
  },
  {
    id: generateId(),
    image: getImageByName("voceVaiLembrarDeMim"),
  },
  {
    id: generateId(),
    image: getImageByName("lost"),
  },
];
