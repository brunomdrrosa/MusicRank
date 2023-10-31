import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.profile.favoriteAlbums;

export interface FavoriteAlbumReview {
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
  return appImages.profile.favoriteAlbums[name];
};

export const favoriteAlbums: FavoriteAlbumReview[] = [
  {
    id: generateId(),
    albumName: "Trench",
    artist: "twenty one pilots",
    progress: 100,
    image: getImageByName("trench"),
    album: [
      { song: "Jumpsuit", listened: true, rating: 5 },
      { song: "Levitate", listened: true, rating: 5 },
      { song: "Morph", listened: true, rating: 5 },
      { song: "My Blood", listened: true, rating: 5 },
      { song: "Chlorine", listened: true, rating: 5 },
      { song: "Smithereens", listened: true, rating: 5 },
      { song: "Neon Gravestones", listened: true, rating: 5 },
      { song: "The Hype", listened: true, rating: 5 },
      { song: "Nico and the Niners", listened: true, rating: 5 },
      { song: "Cut My Lip", listened: true, rating: 5 },
      { song: "Bandito", listened: true, rating: 5 },
      { song: "Pet Cheetah", listened: true, rating: 5 },
      { song: "Legend", listened: true, rating: 5 },
      { song: "Leave the City", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    image: getImageByName("wwafawdwg"),
    albumName: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
    artist: "Billie Eilish",
    progress: 100,
    album: [
      { song: "!!!!!!!", listened: true, rating: 5 },
      { song: "bad guy", listened: true, rating: 5 },
      { song: "xanny", listened: true, rating: 5 },
      { song: "you should see me in a crown", listened: true, rating: 5 },
      { song: "all the good girls go to hell", listened: true, rating: 5 },
      { song: "wish you were gay", listened: true, rating: 5 },
      { song: "when the party's over", listened: true, rating: 5 },
      { song: "8", listened: true, rating: 5 },
      { song: "my strange addiction", listened: true, rating: 5 },
      { song: "bury a friend", listened: true, rating: 5 },
      { song: "ilomilo", listened: true, rating: 5 },
      { song: "listen before i go", listened: true, rating: 5 },
      { song: "i love you", listened: true, rating: 5 },
      { song: "goodbye", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    image: getImageByName("blurryface"),
    albumName: "Blurryface",
    artist: "twenty one pilots",
    progress: 100,
    album: [
      { song: "Heavydirtysoul", listened: true, rating: 5 },
      { song: "Stressed Out", listened: true, rating: 5 },
      { song: "Ride", listened: true, rating: 5 },
      { song: "Fairly Local", listened: true, rating: 5 },
      { song: "Tear in My Heart", listened: true, rating: 5 },
      { song: "Lane Boy", listened: true, rating: 5 },
      { song: "The Judge", listened: true, rating: 5 },
      { song: "Doubt", listened: true, rating: 5 },
      { song: "Polarize", listened: true, rating: 5 },
      { song: "We Don't Believe What's on TV", listened: true, rating: 5 },
      { song: "Message Man", listened: true, rating: 5 },
      { song: "Hometown", listened: true, rating: 5 },
      { song: "Not Today", listened: true, rating: 5 },
      { song: "Goner", listened: true, rating: 5 },
    ],
  },
];
