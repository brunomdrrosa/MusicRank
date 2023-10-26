import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.home.notStarted;

export interface AlbumNotStarted {
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
  return appImages.home.notStarted[name];
};

export const albumsNotStarted: AlbumNotStarted[] = [
  {
    id: generateId(),
    albumName: "dont smile at me",
    artist: "Billie Eilish",
    image: getImageByName("billie"),
    progress: 0,
    album: [
      { song: "COPYCAT", listened: false, rating: 0 },
      { song: "idontwannabeyouanymore", listened: false, rating: 0 },
      { song: "my boy", listened: false, rating: 0 },
      { song: "watch", listened: false, rating: 0 },
      { song: "party favor", listened: false, rating: 0 },
      { song: "bellyache", listened: false, rating: 0 },
      { song: "ocean eyes", listened: false, rating: 0 },
      { song: "hostage", listened: false, rating: 0 },
      { song: "&burn (with Vince Staples)", listened: false, rating: 0 },
    ],
  },
  {
    id: generateId(),
    albumName: "Social Cues",
    artist: "Cage The Elephant",
    image: getImageByName("cage"),
    progress: 0,
    album: [
      { song: "Broken Boy", listened: false, rating: 0 },
      { song: "Social Cues", listened: false, rating: 0 },
      { song: "Black Madonna", listened: false, rating: 0 },
      { song: "Night Running", listened: false, rating: 0 },
      { song: "Skin and Bones", listened: false, rating: 0 },
      { song: "Ready To Let Go", listened: false, rating: 0 },
      { song: "House of Glass", listened: false, rating: 0 },
      { song: "Love's The Only Way", listened: false, rating: 0 },
      { song: "The War Is Over", listened: false, rating: 0 },
      { song: "Dance Dance", listened: false, rating: 0 },
      { song: "What I'm Becoming", listened: false, rating: 0 },
      { song: "Tokyo Smoke", listened: false, rating: 0 },
      { song: "Goodbye", listened: false, rating: 0 },
    ],
  },
  {
    id: generateId(),
    albumName: "Kid Krow",
    artist: "Conan Gray",
    image: getImageByName("conan"),
    progress: 0,
    album: [
      { song: "Comfort Crowd", listened: false, rating: 0 },
      { song: "Wish You Were Sober", listened: false, rating: 0 },
      { song: "Maniac", listened: false, rating: 0 },
      { song: "(Online Love)", listened: false, rating: 0 },
      { song: "Checkmate", listened: false, rating: 0 },
      { song: "The Cut That Always Bleeds", listened: false, rating: 0 },
      { song: "Fight or Flight", listened: false, rating: 0 },
      { song: "Affluenza", listened: false, rating: 0 },
      { song: "(Can We Be Friends?)", listened: false, rating: 0 },
      { song: "Heather", listened: false, rating: 0 },
      { song: "Little League", listened: false, rating: 0 },
      { song: "The Story", listened: false, rating: 0 },
    ],
  },
  {
    id: generateId(),
    albumName: "The Click",
    artist: "AJR",
    image: getImageByName("ajr"),
    progress: 0,
    album: [
      { song: "Overture", listened: false, rating: 0 },
      { song: "The Good Part", listened: false, rating: 0 },
      { song: "Weak", listened: false, rating: 0 },
      { song: "Sober Up (feat. Rivers Cuomo)", listened: false, rating: 0 },
      { song: "Drama", listened: false, rating: 0 },
      { song: "Turning Out", listened: false, rating: 0 },
      { song: "No Grass Today", listened: false, rating: 0 },
      { song: "Three-Thirty", listened: false, rating: 0 },
      { song: "Call My Dad", listened: false, rating: 0 },
      { song: "I'm Not Famous", listened: false, rating: 0 },
      { song: "Netflix Trip", listened: false, rating: 0 },
      { song: "Bud Like You", listened: false, rating: 0 },
      { song: "Come Hang Out", listened: false, rating: 0 },
    ],
  },
  {
    id: generateId(),
    albumName: "THE ALBUM",
    artist: "Blackpink",
    image: getImageByName("blackpink"),
    progress: 0,
    album: [
      { song: "How You Like That", listened: false, rating: 0 },
      { song: "Ice Cream (with Selena Gomez)", listened: false, rating: 0 },
      { song: "Pretty Savage", listened: false, rating: 0 },
      { song: "Bet You Wanna (feat. Cardi B)", listened: false, rating: 0 },
      { song: "Lovesick Girls", listened: false, rating: 0 },
      { song: "Crazy Over You", listened: false, rating: 0 },
      { song: "Love To Hate Me", listened: false, rating: 0 },
      { song: "You Never Know", listened: false, rating: 0 },
    ],
  },
  {
    id: generateId(),
    albumName: "Illuminate",
    artist: "Shawn Mendes",
    image: getImageByName("shawn"),
    progress: 0,
    album: [
      { song: "There's Nothing Holdin' Me Back", listened: false, rating: 0 },
      { song: "Ruin", listened: false, rating: 0 },
      { song: "Mercy", listened: false, rating: 0 },
      { song: "Treat You Better", listened: false, rating: 0 },
      { song: "Three Empty Words", listened: false, rating: 0 },
      { song: "Don't Be A Fool", listened: false, rating: 0 },
      { song: "Like This", listened: false, rating: 0 },
      { song: "No Promises", listened: false, rating: 0 },
      { song: "Lights On", listened: false, rating: 0 },
      { song: "Honest", listened: false, rating: 0 },
      { song: "Patience", listened: false, rating: 0 },
      { song: "Bad Reputation", listened: false, rating: 0 },
      { song: "Understand", listened: false, rating: 0 },
    ],
  },
  {
    id: generateId(),
    albumName: "Lover",
    artist: "Taylor Swift",
    image: getImageByName("lover"),
    album: [
      { song: "I Forgot That You Existed", listened: false, rating: 0 },
      { song: "Cruel Summer", listened: false, rating: 0 },
      { song: "Lover", listened: false, rating: 0 },
      { song: "The Man", listened: false, rating: 0 },
      { song: "The Archer", listened: false, rating: 0 },
      { song: "I Think He Knows", listened: false, rating: 0 },
      {
        song: "Miss Americana & The Heartbreak Prince",
        listened: false,
        rating: 0,
      },
      { song: "Paper Rings", listened: false, rating: 0 },
      { song: "Cornelia Street", listened: false, rating: 0 },
      { song: "Death By A Thousand Cuts", listened: false, rating: 0 },
      { song: "London Boy", listened: false, rating: 0 },
      {
        song: "Soon You'll Get Better (feat. The Chicks)",
        listened: false,
        rating: 0,
      },
      { song: "False God", listened: false, rating: 0 },
      { song: "You Need To Calm Down", listened: false, rating: 0 },
      { song: "Afterglow", listened: false, rating: 0 },
      {
        song: "ME! (feat. Brendon Urie of Panic! At The Disco)",
        listened: false,
        rating: 0,
      },
      { song: "It's Nice To Have A Friend", listened: false, rating: 0 },
      { song: "Daylight", listened: false, rating: 0 },
    ],
    progress: 0,
  },
  {
    id: generateId(),
    albumName: "÷",
    artist: "Ed Sheeran",
    image: getImageByName("ed"),
    progress: 0,
    album: [
      { song: "Eraser", listened: false, rating: 0 },
      { song: "Castle on the Hill", listened: false, rating: 0 },
      { song: "Dive", listened: false, rating: 0 },
      { song: "Shape of You", listened: false, rating: 0 },
      { song: "Perfect", listened: false, rating: 0 },
      { song: "Galway Girl", listened: false, rating: 0 },
      { song: "Happier", listened: false, rating: 0 },
      { song: "New Man", listened: false, rating: 0 },
      { song: "Hearts Don't Break Around Here", listened: false, rating: 0 },
      { song: "What Do I Know?", listened: false, rating: 0 },
      { song: "How Would You Feel (Paean)", listened: false, rating: 0 },
      { song: "Supermarket Flowers", listened: false, rating: 0 },
    ],
  },
  {
    id: generateId(),
    albumName: "After Hours",
    artist: "The Weeknd",
    image: getImageByName("weeknd"),
    progress: 0,
    album: [
      { song: "Alone Again", listened: false, rating: 0 },
      { song: "Too Late", listened: false, rating: 0 },
      { song: "Hardest To Love", listened: false, rating: 0 },
      { song: "Scared To Live", listened: false, rating: 0 },
      { song: "Snowchild", listened: false, rating: 0 },
      { song: "Escape from LA", listened: false, rating: 0 },
      { song: "Heartless", listened: false, rating: 0 },
      { song: "Faith", listened: false, rating: 0 },
      { song: "Blinding Lights", listened: false, rating: 0 },
      { song: "In Your Eyes", listened: false, rating: 0 },
      { song: "Save Your Tears", listened: false, rating: 0 },
      { song: "Repeat After Me (Interlude)", listened: false, rating: 0 },
      { song: "After Hours", listened: false, rating: 0 },
      { song: "Until I Bleed Out", listened: false, rating: 0 },
    ],
  },
];
