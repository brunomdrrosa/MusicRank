import { generateId } from "../../utils/generateId";

export interface Album {
  id: string;
  image: string;
}

export const albuns: Album[] = [
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/drake.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/morganWallen.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/rodWave.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/olivia.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/zachBryan.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/sza.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/taylor.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/travisScott.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/noah.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/discover/albums/lover.jpg"),
  },
];
