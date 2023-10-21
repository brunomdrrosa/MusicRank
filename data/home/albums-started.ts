import { generateId } from "../../utils/generateId";

export interface AlbumStarted {
  id: string;
  image: string;
  progress: number;
}

export const albumsStarted: AlbumStarted[] = [
  {
    id: generateId(),
    image: require("../../assets/images/home/started/beyonce.jpg"),
    progress: 0.9,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/started/harry.jpg"),
    progress: 0.8,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/started/adele.jpg"),
    progress: 0.5,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/started/lilnas.jpg"),
    progress: 0.9,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/started/taylor.jpg"),
    progress: 0.15,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/started/coldplay.jpg"),
    progress: 0.8,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/started/badbunny.jpg"),
    progress: 0.2,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/started/justin.jpg"),
    progress: 0.5,
  },
];
