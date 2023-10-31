import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.profile.favoriteSongs;

export interface FavoriteSong {
  id: string;
  image: string;
  musica: string;
  artist: string;
  rating: number;
}

const getImageByName = (name: NameType): string => {
  return appImages.grammy.musica[name];
};

export const favoriteSongs: FavoriteSong[] = [
  {
    id: generateId(),
    image: getImageByName("antiHero"),
    musica: "Anti-Hero",
    artist: "Taylor Swift",
    rating: 5,
  },
  {
    id: generateId(),
    image: getImageByName("killBill"),
    musica: "Kill Bill",
    artist: "SZA",
    rating: 0,
  },
  {
    id: generateId(),
    image: getImageByName("flowers"),
    musica: "Flowers",
    artist: "Miley Cyrus",
    rating: 5,
  },
];
