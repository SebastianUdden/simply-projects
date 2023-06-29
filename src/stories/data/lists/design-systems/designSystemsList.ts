import {
  atomicComponents,
  atomicProgrammer,
  indivdComponents,
  pillowComponents,
} from "./designSystems";

export const DESIGN_SYSTEMS_LIST = {
  title: "Design systems",
  subtitle: "Component libraries",
  list: [
    {
      ...atomicComponents,
    },
    {
      ...atomicProgrammer,
    },
    {
      ...indivdComponents,
    },
    {
      ...pillowComponents,
    },
  ],
};
