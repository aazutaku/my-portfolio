import { Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "./Banner.module.scss";

const Banner = (): JSX.Element => {
  const theme = useTheme();
  const isDesctop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className={styles.root}>
      <img src="/images/azutaku-title.png" className={styles.image} />
      <div className={styles.content}>
        <p>
          <Typography
            variant={isDesctop ? "h3" : "h5"}
            className={styles.title}
          >
            ABOUT
          </Typography>
          <Typography
            variant={isDesctop ? "h6" : "subtitle2"}
            className={styles.title}
          >
            I am an ordinary engineer living in Tokyo.
            <br />I have nothing to do, so I enjoy programming every day.
          </Typography>
          <Typography
            variant={isDesctop ? "subtitle2" : "caption"}
            className={styles.description}
          >
            Here I share some of the artifacts I've enjoyed learning about.
          </Typography>
        </p>
      </div>
    </div>
  );
};

export default Banner;
