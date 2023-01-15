import { Button, Typography } from "@mui/material";
import styles from "./Banner.module.scss";

const Banner = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <img src="/images/hack-lab-256-log.png" className={styles.image} />
      <div className={styles.content}>
        <Typography variant="h6" className={styles.title}>
          ここにプロフィールを記載
        </Typography>
        <Typography variant="subtitle1" className={styles.description}>
          sharing artifacts I have enjoyed learning about.
        </Typography>
        <Button className={styles.button}>test</Button>
      </div>
    </div>
  );
};

export default Banner;
