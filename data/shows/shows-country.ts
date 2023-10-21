import { v4 as uuid } from "uuid";

export interface ShowCountry {
  id: string;
  image: string;
}

export const showsCountry: ShowCountry[] = [
  {
    id: uuid(),
    image: require("../images/shows/showsBrasil/taylorSwift.png"),
  },
  {
    id: uuid(),
    image: require("../images/shows/showsBrasil/evanescence.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/shows/showsBrasil/paulMcCartney.jpg"),
  },
];
