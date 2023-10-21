import { generateId } from "../../utils/generateId";

export interface ShowCity {
  id: string;
  image: string;
}

export const showsCity: ShowCity[] = [
  {
    id: generateId(),
    image: require("../../assets/images/shows/showsPOA/rhcp.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/shows/showsPOA/nxZero.jpg"),
  },
  {
    id: generateId(),
    image: require("../../assets/images/shows/showsPOA/capitalInicial.jpg"),
  },
];
