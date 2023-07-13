import {
  gotTimer,
  itimApi,
  simplyChess,
  simplyOthello,
  simplyPacman,
  simplyTetris,
  simplyTextAdventure,
  theClicker,
  timtendo,
} from "./games";

export const GAMES_LIST = {
  title: "Games",
  subtitle: "Web application games",
  list: [
    {
      ...gotTimer,
    },
    {
      ...itimApi,
    },
    {
      ...simplyChess,
    },
    {
      ...simplyOthello,
    },
    {
      ...simplyPacman,
    },
    {
      ...simplyTetris,
    },
    {
      ...simplyTextAdventure,
    },
    {
      ...theClicker,
    },
    {
      ...timtendo,
    },
  ],
};
