// @ts-nocheck

import "./App.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StartPage from "./stories/pages/StartPage";
import { theme } from "./themes";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "./stories/pages/LoginPage";
import { useState } from "react";
import { LISTS } from "./stories/data/lists";

export const GlobalStyle = createGlobalStyle`
  ${(p) => p.theme.fontFaces.join("")}

  * {
   box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${(p) => p.theme.fonts[p.theme.body.font]};
    background: ${(p) => p.theme.body.backgroundColor};
    color: ${(p) => p.theme.body.color};
  }
  a, button {
    font-family: ${(p) => p.theme.fonts[p.theme.body.font]};
  }
  h1, h2, h3 {
    font-family: ${(p) => p.theme.fonts[p.theme.headers.font]};
  }
`;

const App = () => {
  const [seeStart, setSeeStart] = useState(localStorage.getItem("you-are"));
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MemoryRouter>
          {seeStart === "seb" ? (
            <StartPage lists={LISTS} />
          ) : (
            <LoginPage
              password="naitsabes"
              onSubmit={() => {
                localStorage.setItem("simply-projects-you-are", "seb");
                setSeeStart("seb");
              }}
            />
          )}
        </MemoryRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
