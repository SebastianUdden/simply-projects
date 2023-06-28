import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/App";
import { theme } from "../src/themes";
import { MemoryRouter } from "react-router-dom";

export const decorators = [
  (Story) => (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ThemeProvider>
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
