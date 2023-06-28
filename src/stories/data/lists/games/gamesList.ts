import {
  simplyChess,
  simplyOthello,
  simplyPacman,
  simplyTetris,
  simplyTextAdventure,
  theClicker,
} from "./games";

export const GAMES_LIST = {
  title: "Games",
  subtitle: "Web application games",
  list: [
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
  ],
};
