import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.home.started;

export interface AlbumStarted {
  id: string;
  albumName: string;
  image: string;
  progress: number;
  album: {
    song: string;
    listened: boolean;
    rating: number;
  }[];
}

const getImageByName = (name: NameType): string => {
  return appImages.home.started[name];
};

export const albumsStarted: AlbumStarted[] = [
  {
    id: generateId(),
    albumName: "Renaissance",
    image: getImageByName("beyonce"),
    progress: 0.9,
    album: [
      { song: "Song 1", listened: true, rating: 5 },
      { song: "Song 2", listened: false, rating: 5 },
      { song: "Song 3", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Renaissance",
    image: getImageByName("harry"),
    progress: 0.8,
    album: [
      { song: "Song 1", listened: true, rating: 5 },
      { song: "Song 2", listened: false, rating: null! },
      { song: "Song 3", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Renaissance",
    image: getImageByName("adele"),
    progress: 0.5,
    album: [
      { song: "Song 1", listened: true, rating: 5 },
      { song: "Song 2", listened: false, rating: null! },
      { song: "Song 3", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Renaissance",
    image: getImageByName("lilnas"),
    progress: 0.9,
    album: [
      { song: "Song 1", listened: true, rating: 5 },
      { song: "Song 2", listened: false, rating: null! },
      { song: "Song 3", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Renaissance",
    image: getImageByName("taylor"),
    progress: 0.15,
    album: [
      { song: "Song 1", listened: true, rating: 5 },
      { song: "Song 2", listened: false, rating: null! },
      { song: "Song 3", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Renaissance",
    image: getImageByName("coldplay"),
    progress: 0.8,
    album: [
      { song: "Song 1", listened: true, rating: 5 },
      { song: "Song 2", listened: false, rating: null! },
      { song: "Song 3", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Renaissance",
    image: getImageByName("badbunny"),
    progress: 0.2,
    album: [
      { song: "Song 1", listened: true, rating: 5 },
      { song: "Song 2", listened: false, rating: null! },
      { song: "Song 3", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Renaissance",
    image: getImageByName("justin"),
    progress: 0.5,
    album: [
      { song: "Song 1", listened: true, rating: 5 },
      { song: "Song 2", listened: false, rating: null! },
      { song: "Song 3", listened: true, rating: 5 },
    ],
  },
];
