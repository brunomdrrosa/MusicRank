import { appImages } from "../../../assets/images";
import { generateId } from "../../../utils/generateId";

type NameType = keyof typeof appImages.home.started;

export interface AlbumStarted {
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
  return appImages.home.started[name];
};

export const albumsStarted: AlbumStarted[] = [
  {
    id: generateId(),
    albumName: "SOUR",
    artist: "Olivia Rodrigo",
    image: getImageByName("sour"),
    progress: 0.91,
    album: [
      { song: "brutal", listened: true, rating: 5 },
      { song: "traitor", listened: true, rating: 5 },
      { song: "drivers license", listened: true, rating: 5 },
      { song: "1 step forward, 3 steps back", listened: true, rating: 5 },
      { song: "deja vu", listened: true, rating: 5 },
      { song: "good 4 u", listened: true, rating: 5 },
      { song: "enough for you", listened: true, rating: 5 },
      { song: "happier", listened: true, rating: 5 },
      { song: "jealousy, jealousy", listened: true, rating: 5 },
      { song: "favorite crime", listened: true, rating: 5 },
      { song: "hope ur ok", listened: false, rating: 0 },
    ],
  },
  {
    id: generateId(),
    albumName: "÷",
    artist: "Ed Sheeran",
    image: getImageByName("ed"),
    progress: 0.307,
    album: [
      { song: "Eraser", listened: false, rating: 0 },
      { song: "Castle on the Hill", listened: true, rating: 5 },
      { song: "Dive", listened: false, rating: 0 },
      { song: "Shape of You", listened: true, rating: 5 },
      { song: "Perfect", listened: true, rating: 5 },
      { song: "Galway Girl", listened: false, rating: 0 },
      { song: "Happier", listened: true, rating: 4 },
      { song: "New Man", listened: false, rating: 0 },
      { song: "Hearts Don't Break Around Here", listened: false, rating: 0 },
      { song: "What Do I Know?", listened: false, rating: 0 },
      { song: "How Would You Feel (Paean)", listened: false, rating: 0 },
      { song: "Supermarket Flowers", listened: false, rating: 0 },
    ],
  },
  {
    id: generateId(),
    albumName: "Doo-Wops & Hooligans",
    artist: "Bruno Mars",
    image: getImageByName("brunoMars"),
    progress: 0.5,
    album: [
      { song: "Grenade", listened: true, rating: 5 },
      { song: "Just the Way You Are", listened: true, rating: 5 },
      { song: "Our First Time", listened: false, rating: 0 },
      { song: "Runaway Baby", listened: false, rating: 0 },
      { song: "The Lazy Song", listened: true, rating: 5 },
      { song: "Marry You", listened: true, rating: 5 },
      { song: "Talking to the Moon", listened: true, rating: 5 },
      {
        song: "Liquor Store Blues (feat. Damian Marley)",
        listened: false,
        rating: 0,
      },
      { song: "Count on Me", listened: false, rating: 0 },
      {
        song: "The Other Side (feat. CeeLo Green and B.o.B)",
        listened: false,
        rating: 0,
      },
      { song: "Somewhere in Brooklyn", listened: false, rating: 0 },
      {
        song: "Talking to the Moon - Acoustic Piano",
        listened: true,
        rating: 5,
      },
    ],
  },
  {
    id: generateId(),
    albumName: "Shawn Mendes",
    artist: "Shawn Mendes",
    image: getImageByName("shawn"),
    progress: 0.928,
    album: [
      { song: "In My Blood", listened: true, rating: 5 },
      { song: "Fallin' All In You", listened: true, rating: 5 },
      { song: "Where Were You In The Morning?", listened: true, rating: 5 },
      { song: "Nervous", listened: true, rating: 5 },
      {
        song: "Like To Be You (feat. Julia Michaels)",
        listened: true,
        rating: 5,
      },
      { song: "Lost In Japan", listened: true, rating: 5 },
      { song: "Particular Taste", listened: true, rating: 5 },
      { song: "Because I Had You", listened: true, rating: 5 },
      { song: "Why", listened: true, rating: 5 },
      { song: "Youth (feat. Khalid)", listened: true, rating: 5 },
      { song: "Queen", listened: false, rating: 0 },
      { song: "Perfectly Wrong", listened: true, rating: 5 },
      { song: "Mutual", listened: true, rating: 5 },
      { song: "When You're Ready", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Harry's House",
    artist: "Harry Styles",
    image: getImageByName("harry"),
    progress: 0.8,
    album: [
      { song: "Music For a Sushi Restaurant", listened: true, rating: 4 },
      { song: "Late Night Talking", listened: true, rating: 4 },
      { song: "Grapejuice", listened: false, rating: 0 },
      { song: "As It Was", listened: true, rating: 5 },
      { song: "Daylight", listened: true, rating: 4 },
      { song: "Little Freak", listened: true, rating: 4 },
      { song: "Matilda", listened: true, rating: 4 },
      { song: "Cinema", listened: false, rating: 0 },
      { song: "Daydreaming", listened: false, rating: 0 },
      { song: "Keep Driving", listened: true, rating: 4 },
      { song: "Satellite", listened: true, rating: 4 },
      { song: "Boyfriends", listened: true, rating: 4 },
      { song: "Love Of My Life", listened: true, rating: 4 },
    ],
  },
  {
    id: generateId(),
    albumName: "1989 (Taylor's Version)",
    artist: "Taylor Swift",
    image: getImageByName("t1989"),
    progress: 0.33,
    album: [
      {
        song: "Welcome To New York (Taylor's Version)",
        listened: false,
        rating: 0,
      },
      { song: "Blank Space (Taylor's Version)", listened: true, rating: 5 },
      { song: "Style (Taylor's Version)", listened: true, rating: 5 },
      {
        song: "Out Of The Woods (Taylor's Version)",
        listened: false,
        rating: 0,
      },
      {
        song: "All You Had To Do Was Stay (Taylor's Version)",
        listened: true,
        rating: 5,
      },
      { song: "Shake It Off (Taylor's Version)", listened: true, rating: 5 },
      {
        song: "I Wish You Would (Taylor's Version)",
        listened: false,
        rating: 0,
      },
      { song: "Bad Blood (Taylor's Version)", listened: true, rating: 5 },
      { song: "Wildest Dreams (Taylor's Version)", listened: true, rating: 5 },
      {
        song: "How You Get The Girl (Taylor's Version)",
        listened: false,
        rating: 0,
      },
      { song: "This Love (Taylor's Version)", listened: false, rating: 0 },
      { song: "I Know Places (Taylor's Version)", listened: false, rating: 0 },
      { song: "Clean (Taylor's Version)", listened: false, rating: 0 },
      { song: "Wonderland (Taylor's Version)", listened: false, rating: 0 },
      {
        song: "You Are In Love (Taylor's Version)",
        listened: false,
        rating: 0,
      },
      { song: "New Romantics (Taylor's Version)", listened: true, rating: 5 },
      {
        song: '"Slut!" (Taylor\'s Version) (From The Vault)',
        listened: false,
        rating: 0,
      },
      {
        song: "Say Don't Go (Taylor's Version) (From The Vault)",
        listened: false,
        rating: 0,
      },
      {
        song: "Now That We Don't Talk (Taylor's Version) (From The Vault)",
        listened: false,
        rating: 0,
      },
      {
        song: "Suburban Legends (Taylor's Version) (From The Vault)",
        listened: false,
        rating: 0,
      },
      {
        song: "Is It Over Now? (Taylor's Version) (From The Vault)",
        listened: false,
        rating: 0,
      },
    ],
  },
  {
    id: generateId(),
    albumName: "AM",
    artist: "Arctic Monkeys",
    image: getImageByName("am"),
    progress: 0.416,
    album: [
      { song: "Do I Wanna Know?", listened: true, rating: 5 },
      { song: "R U Mine?", listened: true, rating: 5 },
      { song: "One For The Road", listened: false, rating: 0 },
      { song: "Arabella", listened: true, rating: 5 },
      { song: "I Want It All", listened: false, rating: 0 },
      { song: "No. 1 Party Anthem", listened: false, rating: 0 },
      { song: "Mad Sounds", listened: false, rating: 0 },
      { song: "Fireside", listened: false, rating: 0 },
      {
        song: "Why'd You Only Call Me When You're High?",
        listened: true,
        rating: 5,
      },
      { song: "Snap Out Of It", listened: false, rating: 0 },
      { song: "Knee Socks", listened: false, rating: 0 },
      { song: "I Wanna Be Yours", listened: true, rating: 5 },
    ],
  },
  {
    id: generateId(),
    albumName: "Hybrid Thoery",
    artist: "Linkin Park",
    image: getImageByName("linkinpark"),
    progress: 0.9,
    album: [
      { song: "Papercut", listened: true, rating: 5 },
      { song: "One Step Closer", listened: true, rating: 5 },
      { song: "With You", listened: true, rating: 5 },
      { song: "Points of Authority", listened: true, rating: 5 },
      { song: "Crawling", listened: true, rating: 5 },
      { song: "Runaway", listened: true, rating: 5 },
      { song: "By Myself", listened: true, rating: 5 },
      { song: "In the End", listened: true, rating: 5 },
      { song: "A Place for My Head", listened: true, rating: 5 },
      { song: "Forgotten", listened: true, rating: 5 },
      { song: "Cure for the Itch", listened: false, rating: 0 },
      { song: "Pushing Me Away", listened: true, rating: 5 },
    ],
  },
];
