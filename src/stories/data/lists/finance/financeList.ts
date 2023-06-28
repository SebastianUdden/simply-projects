import {
  financialExtrapolator,
  financialPlanning,
  spmInsider,
} from "./finance";

export const FINANCE_LIST = {
  title: "Finance",
  subtitle: "Web applications tools for finance",
  list: [
    {
      ...financialExtrapolator,
    },
    {
      ...financialPlanning,
    },
    {
      ...spmInsider,
    },
  ],
};
