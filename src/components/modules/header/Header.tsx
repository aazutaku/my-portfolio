import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { TypeAnimation } from "react-type-animation";
import styles from "./Header.module.scss";

const APP_TITLE_ANIMATION = [
  "azutaku",
  2000,
  "azutaku.coooooom",
  2000,
  "azutaku",
  2000,
  "azutaku.com",
  2000,
  "",
  2000,
];

const Header = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar className={styles.toolbar}>
          <IconButton
            edge="start"
            className={styles.menu_button}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            <TypeAnimation
              sequence={APP_TITLE_ANIMATION}
              className={styles.title_text}
              wrapper="div"
              repeat={Infinity}
              speed={20}
            />
          </Typography>
          <Button color="inherit" className={styles.login_button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
