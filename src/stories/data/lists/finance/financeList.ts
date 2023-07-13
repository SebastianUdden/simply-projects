import {
  alphaFinanceBot,
  cashflow,
  financialExtrapolator,
  financialPlanning,
  spmInsider,
  spmScraper,
} from "./finance";

export const FINANCE_LIST = {
  title: "Finance",
  subtitle: "Web applications tools for finance",
  list: [
    { ...alphaFinanceBot },
    { ...cashflow },
    {
      ...financialExtrapolator,
    },
    {
      ...financialPlanning,
    },
    {
      ...spmInsider,
    },
    {
      ...spmScraper,
    },
  ],
};
