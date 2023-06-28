import {
  simplyFlashCards,
  simplyHabits,
  simplyQuotes,
  simplyRememory,
  simplySteps,
} from "./brainTools";

export const BRAIN_TOOLS_LIST = {
  title: "Brain tools",
  subtitle: "Web applications tools for cognition/memory.",
  list: [
    {
      ...simplyFlashCards,
      connectionsUp: [],
      connectionsDown: [],
    },
    {
      ...simplyHabits,
    },
    {
      ...simplyQuotes,
    },
    {
      ...simplyRememory,
    },
    {
      ...simplySteps,
    },
  ],
};
