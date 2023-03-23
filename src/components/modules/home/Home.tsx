import { useEffect } from "react";
import HomeImage from "../../../assets/hack-lab.png";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Home.module.scss";
import { Container } from "@mui/material";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <header className={styles.home__root}>
      <Container maxWidth="xl">
        <div className={styles.header__container}>
          <div className={styles.header__profile} data-aos="fade-in">
            <img src={HomeImage} alt="Header Portait" />
          </div>
          <h3 data-aos="fade-up">Azutaku</h3>
          <p data-aos="fade-up">
            I am an ordinary engineer living in Tokyo.
            <br />I have nothing to do, so I enjoy programming every day.
          </p>

          <div className={styles.header__socials}>
            {data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Home;
