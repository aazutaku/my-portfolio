import React from "react";
import { Home, About, Portfolio } from "../../components/modules";
import styles from "./HomePage.module.scss";
import { Stack } from "@mui/material";
import { PageTransition } from "../../utils/motion";

const HomePage = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Stack spacing={3} className={styles.stack}>
        <Home />
      </Stack>
      <Stack spacing={3} className={styles.stack}>
        <About />
      </Stack>
      <Stack spacing={3} className={styles.stack}>
        <Portfolio />
      </Stack>
      <PageTransition />
    </div>
  );
};

export default HomePage;
