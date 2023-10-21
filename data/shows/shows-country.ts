import { generateId } from "../../utils/generateId";

export interface ShowCountry {
  id: string;
  image: string;
}

export const showsCountry: ShowCountry[] = [
  {
    id: generateId(),
    image: require("../../assets/images/shows/showsBrasil/taylorSwift.png"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/shows/showsBrasil/evanescence.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/shows/showsBrasil/paulMcCartney.jpg"),
  },
];
