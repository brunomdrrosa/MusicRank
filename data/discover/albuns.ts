import { v4 as uuid } from "uuid";

export interface Album {
  id: string;
  image: string;
}

export const albuns: Album[] = [
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/drake.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/morganWallen.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/rodWave.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/olivia.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/zachBryan.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/sza.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/taylor.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/travisScott.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/noah.jpg"),
  },
  {
    id: uuid(),
    image: require("../../assets/images/discover/albums/lover.jpg"),
  },
];
