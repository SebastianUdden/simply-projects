import { ICard } from "../molecules/card/Card";
import { APPS_LIST } from "./lists/apps/appsList";
import { BRAIN_TOOLS_LIST } from "./lists/brain-tools/brainToolsList";
import { DESIGN_SYSTEMS_LIST } from "./lists/design-systems/designSystemsList";
import { FINANCE_LIST } from "./lists/finance/financeList";
import { GAMES_LIST } from "./lists/games/gamesList";
import { HEALTH_LIST } from "./lists/health/healthList";

export const LISTS = [
  APPS_LIST,
  BRAIN_TOOLS_LIST,
  DESIGN_SYSTEMS_LIST,
  FINANCE_LIST,
  GAMES_LIST,
  HEALTH_LIST,
];

export interface IList {
  title: string;
  subtitle: string;
  list: ICard[];
}
