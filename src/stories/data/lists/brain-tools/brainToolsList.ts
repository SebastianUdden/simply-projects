import {
  myWebToolsApi,
  simplyFlashCards,
  simplyHabits,
  simplyProjects,
  simplyQuotes,
  simplyRememory,
  simplySteps,
  socialGraph,
} from "./brainTools";

export const BRAIN_TOOLS_LIST = {
  title: "Brain tools",
  subtitle: "Web applications tools for cognition/memory.",
  list: [
    {
      ...myWebToolsApi,
    },
    {
      ...simplyFlashCards,
      connectionsUp: [],
      connectionsDown: [],
    },
    {
      ...simplyHabits,
    },
    { ...simplyProjects },
    {
      ...simplyQuotes,
    },
    {
      ...simplyRememory,
    },
    {
      ...simplySteps,
    },
    {
      ...socialGraph,
    },
  ],
};
