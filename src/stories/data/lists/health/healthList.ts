import {
  boss100mileChallenge,
  compoundPushups,
  contractionTimer,
  simplyWorkout,
  waterDude,
} from "./health";

export const HEALTH_LIST = {
  title: "Health",
  subtitle: "Web applications tools for health",
  list: [
    {
      ...boss100mileChallenge,
    },
    {
      ...compoundPushups,
    },
    {
      ...contractionTimer,
    },
    {
      ...simplyWorkout,
    },
    {
      ...waterDude,
    },
  ],
};
