import { Container } from "@mui/material";
import { socials } from "./data";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <Container maxWidth={false}>
        <div className={styles.footer__container}>
          <div className={styles.footer__socials}>
            {socials.map((social) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footer__social}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.footer__copyright}>
          <small>&copy; azutaku.com</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
