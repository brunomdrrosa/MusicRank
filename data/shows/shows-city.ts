import { v4 as uuid } from "uuid";

export interface ShowCity {
  id: string;
  image: string;
}

export const showsCity: ShowCity[] = [
  {
    id: uuid(),
    image: require("../images/shows/showsPOA/rhcp.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/shows/showsPOA/nxZero.jpg"),
  },
  {
    id: uuid(),
    image: require("../images/shows/showsPOA/capitalInicial.jpg"),
  },
];
