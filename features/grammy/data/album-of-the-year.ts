import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.grammy.album;

export interface AlbumStarted {
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
  return appImages.grammy.album[name];
};

export const albumsOfTheYear: AlbumStarted[] = [
  {
    id: generateId(),
    albumName: "Midnights",
    artist: "Taylor Swift",
    progress: 0.46,
    image: getImageByName("midnights"),
    album: [
      { song: "Lavender Haze", listened: true, rating: 4 },
      { song: "Maroon", listened: false, rating: 0 },
      { song: "Anti-Hero", listened: true, rating: 5 },
      {
        song: "Snow On The Beach (feat. Lana Del Rey)",
        listened: true,
        rating: 5,
      },
      { song: "You're On Your Own, Kid", listened: false, rating: 0 },
      { song: "Midnight Rain", listened: false, rating: 0 },
      { song: "Question...?", listened: false, rating: 0 },
      { song: "Vigilante Shit", listened: false, rating: 0 },
      { song: "Bejeweled", listened: true, rating: 5 },
      { song: "Labyrinth", listened: false, rating: 0 },
      { song: "Karma", listened: true, rating: 5 },
      { song: "Sweet Nothing", listened: false, rating: 0 },
      { song: "Mastermind", listened: false, rating: 0 },
    ],
  },
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
    albumName: "SOS",
    artist: "SZA",
    progress: 0,
    image: getImageByName("sos"),
    album: [
      { song: "SOS", listened: false, rating: 0 },
      { song: "Kill Bill", listened: false, rating: 0 },
      { song: "Seek & Destroy", listened: false, rating: 0 },
      { song: "Low", listened: false, rating: 0 },
      { song: "Love Language", listened: false, rating: 0 },
      { song: "Blind", listened: false, rating: 0 },
      { song: "Used (feat. Don Toliver)", listened: false, rating: 0 },
      { song: "Snooze", listened: false, rating: 0 },
      { song: "Notice Me", listened: false, rating: 0 },
      { song: "Gone Girl", listened: false, rating: 0 },
      { song: "Smoking on my Ex Pack", listened: false, rating: 0 },
      { song: "Ghost in the Machine", listened: false, rating: 0 },
      { song: "F2F", listened: false, rating: 0 },
      { song: "Nobody Gets Me", listened: false, rating: 0 },
      { song: "Conceited", listened: false, rating: 0 },
      { song: "Special", listened: false, rating: 0 },
      { song: "Too Late", listened: false, rating: 0 },
      { song: "Far", listened: false, rating: 0 },
      { song: "Shirt", listened: false, rating: 0 },
      { song: "Open Arms (feat. Travis Scott)", listened: false, rating: 0 },
      { song: "I Hate U", listened: false, rating: 0 },
      { song: "Good Days", listened: false, rating: 0 },
      { song: "Forgiveless", listened: false, rating: 0 },
    ],
  },
];
