//types
import { ChatListDataType, ChatMessageType } from "../types/types";

const CustomerNames: string[] = [
  "Alma Binford",
  "Mariann Peppler",
  "Floy Hallowell",
  "Bambi Chew",
  "Lillie Teeters",
  "Odilia Decola",
  "Dannie Bennette",
  "Donetta Fomby",
  "Earl Racine",
  "Sharron Tollison",
  "Cindi Garst",
  "Deandre Meaders",
  "Rufina Oesterling",
  "Lyda Dollinger",
  "Maisha Liebel",
  "Olimpia Lampkins",
  "Lonnie Haines",
  "Erika Birk",
  "Angle Salem",
  "Wilda Brandy",
  "Lavone Glidewell",
  "Jamey Morrone",
  "Marguerite Mutter",
  "Charlott Slevin",
  "Arleen Blue",
  "Idella Kelly",
  "Nickie Mckitrick",
  "Ashli Koziel",
  "Camilla Whipkey",
  "Leandro Hambly",
  "Jeffry Petway",
  "Brandee Timko",
  "Rikki Ackerman",
  "Cassy Visitacion",
  "Burl Amore",
  "Rozella Girardi",
  "Shanelle Guillet",
  "Rosie Elliff",
  "Florida Nantz",
  "Cedrick Cisneros",
  "Nannie Telford",
  "Kizzy Sacks",
  "Mervin Hover",
  "Maryjo Ratti",
  "Siobhan Kutz",
  "Pablo Morra",
  "Alberto Pleas",
  "Marylou Schaal",
  "Maryalice Utzinger",
  "Sunni Pion",
];

const LoremWords: string[] =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum".split(
    " "
  );

export const getRandomText = (wordCount: number): string => {
  let text: string[] = [];

  for (let i = 0; i < wordCount; i++) {
    text.push(LoremWords[Math.floor(Math.random() * LoremWords.length)]);
  }
  return text.join(" ");
};

const getRandomBoolean = () => {
  return Math.floor(Math.random() * 2);
};

export const getRandomChat = (exchanges: number): ChatMessageType[] => {
  let allMessages: ChatMessageType[] = [];

  for (let i = 0; i < exchanges; i++) {
    const numOfWords = Math.floor(Math.random() * 50);
    const randomText = getRandomText((numOfWords % 20) + 1);
    const sender = getRandomBoolean();
    const timing = "15/05 12:23";
    allMessages.push({
      id: i,
      sender: sender,
      message: randomText,
      timing: timing,
    });
  }

  return allMessages;
};

let counter = 0;

export const ChatListData: ChatListDataType[] = CustomerNames.map((name) => ({
  id: counter++,
  name: name,
  lastMessage: getRandomText(3 + Math.floor(15 * Math.random())),
  lastModified: "3:30pm",
}));

export const ChatData = CustomerNames.map((name) => ({}));
