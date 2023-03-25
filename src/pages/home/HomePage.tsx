import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  About,
  Portfolio,
  Footer,
  FloatingNav,
} from "../../components/modules";
import styles from "./HomePage.module.scss";
import { Stack } from "@mui/material";
import { PageTransition } from "../../utils/motion";

const HomePage = (): JSX.Element => {
  const homeRef = useRef<HTMLInputElement>(null);
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    const rect = homeRef?.current?.getBoundingClientRect();
    if (rect?.y === undefined) return;
    if (siteYPostion < rect.y - 20 || siteYPostion > rect.y + 20) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(rect?.y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion]);

  return (
    <div className={styles.root} ref={homeRef}>
      <Stack spacing={3} className={styles.stack__full}>
        <Home />
      </Stack>
      <Stack spacing={3} className={styles.stack__full}>
        <About />
      </Stack>
      <Stack spacing={3} className={styles.stack__fitcontent}>
        <Portfolio />
      </Stack>
      <Stack spacing={3} className={styles.stack__fitcontent}>
        <Footer />
      </Stack>
      <PageTransition />
      {showFloatingNav && <FloatingNav />}
    </div>
  );
};

export default HomePage;
