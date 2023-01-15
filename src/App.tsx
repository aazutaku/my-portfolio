import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Routers from "./Routers";
import styles from "./App.module.scss";

// デフォルトテーマ
const defaultTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* CssBaseline:normalize.cssのような動き */}
      <CssBaseline />
      <div className={styles.App}>
        <Routers />
      </div>
    </ThemeProvider>
  );
};

export default App;
