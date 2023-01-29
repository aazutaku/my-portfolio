import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from "./Banner.module.scss";
import { PATH } from "../../../Routers";
import { LinkButton } from "../../parts";
import { motion } from "framer-motion";

const Banner = (): JSX.Element => {
  const theme = useTheme();
  const isDesctop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div className={styles.root}>
      <img src="/images/azutaku-title.png" className={styles.image} />
      <div className={styles.content}>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={2}
          className={styles.stack}
        >
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "70%", "50%", "20%"],
              transition: { duration: 3, ease: "circOut" },
            }}
          >
            <Typography
              variant={isDesctop ? "h3" : "h5"}
              className={styles.title}
            >
              ABOUT
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [1, 0.2, 1, 0.2, 1],
              scale: [0.2, 0.4, 0.6, 0.8, 1],
            }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <Typography
              variant={isDesctop ? "h6" : "subtitle2"}
              className={styles.title}
            >
              I am an ordinary engineer living in Tokyo.
              <br />I have nothing to do, so I enjoy programming every day.
            </Typography>
          </motion.div>
          <Typography
            variant={isDesctop ? "subtitle2" : "caption"}
            className={styles.description}
          >
            Here I share some of the artifacts I've enjoyed learning about.
          </Typography>
          <div className={styles.action}>
            <LinkButton
              className={styles.button}
              variant="contained"
              color="primary"
              to={PATH.blogs}
            >
              BLOGS
            </LinkButton>
            <LinkButton
              className={styles.button}
              variant="contained"
              color="primary"
              to={PATH.portfolio}
            >
              整備中
            </LinkButton>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default Banner;
