import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.profile.lastAlbumsReviews;

export interface LastAlbumReview {
  id: string;
  albumName: string;
  artist: string;
  image: string;
  progress: number;
  album: {
    song: string;
    listened: boolean;
    rating: number;
  }[];
}

const getImageByName = (name: NameType): string => {
  return appImages.profile.lastAlbumsReviews[name];
};

export const lastAlbumsReviews: LastAlbumReview[] = [
  {
    id: generateId(),
    albumName: "GUTS",
    artist: "Olivia Rodrigo",
    progress: 100,
    image: getImageByName("guts"),
    album: [
      { song: "all-american bitch", listened: true, rating: 5 },
      { song: "bad idea right?", listened: true, rating: 5 },
      { song: "vampire", listened: true, rating: 5 },
      { song: "lacy", listened: true, rating: 5 },
      { song: "ballad of a homeschooled girl", listened: true, rating: 5 },
      { song: "logical", listened: true, rating: 5 },
      { song: "get him back!", listened: true, rating: 5 },
      { song: "love is embarrassing", listened: true, rating: 5 },
      { song: "the grudge", listened: true, rating: 5 },
      { song: "pretty isn't pretty", listened: true, rating: 5 },
      { song: "teenage dream", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Happier Than Ever",
    artist: "Billie Eilish",
    progress: 100,
    image: getImageByName("happierThanEver"),
    album: [
      { song: "Getting Older", listened: true, rating: 5 },
      { song: "I Didn't Change My Number", listened: true, rating: 5 },
      { song: "Billie Bossa Nova", listened: true, rating: 5 },
      { song: "my future", listened: true, rating: 5 },
      { song: "Oxytocin", listened: true, rating: 5 },
      { song: "GOLDWING", listened: true, rating: 5 },
      { song: "Lost Cause", listened: true, rating: 5 },
      { song: "Halley's Comet", listened: true, rating: 4 },
      { song: "Not My Responsibility", listened: true, rating: 4 },
      { song: "OverHeated", listened: true, rating: 5 },
      { song: "Everybody Dies", listened: true, rating: 4 },
      { song: "Your Power", listened: true, rating: 5 },
      { song: "NDA", listened: true, rating: 5 },
      { song: "Therefore I Am", listened: true, rating: 5 },
      { song: "Happier Than Ever", listened: true, rating: 5 },
      { song: "Male Fantasy", listened: true, rating: 4 },
    ],
  },
  {
    id: generateId(),
    albumName: "Scaled And Icy",
    artist: "twenty one pilots",
    progress: 100,
    image: getImageByName("scaledAndIcy"),
    album: [
      { song: "Good Day", listened: true, rating: 4 },
      { song: "Choker", listened: true, rating: 4 },
      { song: "Shy Away", listened: true, rating: 5 },
      { song: "The Outside", listened: true, rating: 4 },
      { song: "Saturday", listened: true, rating: 5 },
      { song: "Never Take It", listened: true, rating: 4 },
      { song: "Mulberry Street", listened: true, rating: 4 },
      { song: "Formidable", listened: true, rating: 4 },
      { song: "Bounce Man", listened: true, rating: 4 },
      { song: "No Chances", listened: true, rating: 4 },
      { song: "Redecorate", listened: true, rating: 5 },
    ],
  },
];
