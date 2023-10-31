import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.profile.lastSongsReviews;

export interface LastSongReview {
  id: string;
  image: string;
  musica: string;
  artist: string;
  rating: number;
}

const getImageByName = (name: NameType): string => {
  return appImages.profile.lastSongsReviews[name];
};

export const lastSongsReviews: LastSongReview[] = [
  {
    id: generateId(),
    image: getImageByName("greedy"),
    musica: "greedy",
    artist: "Tate McRae",
    rating: 5,
  },
  {
    id: generateId(),
    image: getImageByName("badIdeaRight"),
    musica: "bad idea right?",
    artist: "Olivia Rodrigo",
    rating: 5,
  },
  {
    id: generateId(),
    image: getImageByName("vampire"),
    musica: "vampire",
    artist: "Olivia Rodrigo",
    rating: 5,
  },
  {
    id: generateId(),
    image: getImageByName("whatWasIMadeFor"),
    musica: "What Was I Made For?",
    artist: "Billie Eilish",
    rating: 5,
  },
  {
    id: generateId(),
    image: getImageByName("daylight"),
    musica: "Daylight",
    artist: "David Kushner",
    rating: 5,
  },
  {
    id: generateId(),
    image: getImageByName("calmDown"),
    musica: "Calm Down (with Selena Gomez)",
    artist: "Rema",
    rating: 5,
  },
  {
    id: generateId(),
    image: getImageByName("singleSoon"),
    musica: "Single Soon",
    artist: "Selena Gomez",
    rating: 4,
  },
  {
    id: generateId(),
    image: getImageByName("whereSheGoes"),
    musica: "WHERE SHE GOES",
    artist: "Bad Bunny",
    rating: 4,
  },
  {
    id: generateId(),
    image: getImageByName("voceVaiLembrarDeMim"),
    musica: "Você Vai Lembrar de Mim",
    artist: "NX Zero",
    rating: 4,
  },
  {
    id: generateId(),
    image: getImageByName("lost"),
    musica: "Lost",
    artist: "Linkin Park",
    rating: 4,
  },
];
