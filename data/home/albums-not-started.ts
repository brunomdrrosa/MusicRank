import { generateId } from "../../utils/generateId";

export interface AlbumNotStarted {
  id: string;
  image: string;
  progress: number;
}

export const albumsNotStarted: AlbumNotStarted[] = [
  {
    id: generateId(),
    image: require("../../assets/images/home/notStarted/billie.jpg"),
    progress: 0,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/notStarted/cage.jpg"),
    progress: 0,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/notStarted/conan.jpg"),
    progress: 0,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/notStarted/ajr.jpg"),
    progress: 0,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/notStarted/blackpink.jpg"),
    progress: 0,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/notStarted/shawn.jpg"),
    progress: 0,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/notStarted/lover.jpg"),
    progress: 0,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/notStarted/ed.jpg"),
    progress: 0,
  },
  {
    id: generateId(),
    image: require("../../assets/images/home/notStarted/weeknd.jpg"),
    progress: 0,
  },
];
