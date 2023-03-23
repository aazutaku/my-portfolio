import AboutImage from "../../../assets/cloud-lab.png";
import data from "./data";
import { Card } from "../../parts";
import styles from "./About.module.scss";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className={styles.about__root}>
      <Container maxWidth="xl">
        <div className={styles.about__container} data-aos="flip-left">
          <div className={styles.about__left}>
            <div className={styles.about__portrait}>
              <img
                src={AboutImage}
                alt="About Image"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className={styles.about__right}>
            <h2>About Me</h2>
            <div className={styles.about__cards}>
              {data.map((item) => (
                <Card
                  key={item.id}
                  className={styles.about__card}
                  onClick={() => handleClick(item.link)}
                >
                  <span className={styles.about__card_icon}>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))}
            </div>
            <p>About Me!!!</p>
            <p>About Me!!!</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
