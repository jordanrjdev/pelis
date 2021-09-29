import styled, { ThemeProvider } from "styled-components";
import { useTheme } from "../ThemeManager";
import * as themeConf from "../theme";
import { Fragment } from "react";

export default function NotFound(): React.ReactElement {
  const theme = useTheme();
  return (
    <Fragment>
      <ThemeProvider theme={{ mode: theme.mode }}>
        <div>
          <h1>404</h1>
          <p>Page not found</p>
        </div>
      </ThemeProvider>
    </Fragment>
  );
}
