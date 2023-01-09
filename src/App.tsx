import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import styles from "./App.module.scss";
import { Header } from "./components/modules";

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
        <Header />
        <h1>COMMING SOON</h1>
      </div>
    </ThemeProvider>
  );
};

export default App;
