import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.discover.songs;

export interface Musica {
  id: string;
  image: string;
  musica: string;
  artist: string;
  rating: number;
}

const getImageByName = (name: NameType): string => {
  return appImages.discover.songs[name];
};

export const musicas: Musica[] = [
  {
    id: generateId(),
    image: getImageByName("cruelSummer"),
    musica: "Cruel Summer",
    artist: "Taylor Swift",
    rating: 5
  },
  {
    id: generateId(),
    image: getImageByName("greedy"),
    musica: "greedy",
    artist: "Tate McRae",
    rating: 5
  },
  {
    id: generateId(),
    image: getImageByName("red"),
    musica: "Paint The Town Red",
    artist: "Doja Cat",
    rating: 0
  },

  {
    id: generateId(),
    image: getImageByName("vampire"),
    musica: "vampire",
    artist: "Olivia Rodrigo",
    rating: 5
  },
  {
    id: generateId(),
    image: getImageByName("dualipa"),
    musica: "Dance The Night - From Barbie The Album",
    artist: "Dua Lipa",
    rating: 0
  },
  {
    id: generateId(),
    image: getImageByName("badIdeaRight"),
    musica: "bad idea right?",
    artist: "Olivia Rodrigo",
    rating: 5
  },
  {
    id: generateId(),
    image: getImageByName("wiwmf"),
    musica: "What Was I Made For?",
    artist: "Billie Eilish",
    rating: 5
  },
  {
    id: generateId(),
    image: getImageByName("daylight"),
    musica: "Daylight",
    artist: "David Kushner",
    rating: 5
  },
  {
    id: generateId(),
    image: getImageByName("singleSoon"),
    musica: "Single Soon",
    artist: "Selena Gomez",
    rating: 4
  },
  {
    id: generateId(),
    image: getImageByName("calmDown"),
    musica: "Calm Down (with Selena Gomez)",
    artist: "Rema",
    rating: 4
  },
];
