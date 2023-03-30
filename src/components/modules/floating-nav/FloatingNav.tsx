import data from "./data";
import Scrollspy from "react-scrollspy";
import Nav from "./Nav";
import styles from "./FloatingNav.module.scss";
import { ReactNode } from "react";

export interface ItemType {
  id: number;
  link: string;
  icon: ReactNode;
}

const FloatingNav = () => {
  return (
    <div className={styles.floating__root}>
      <ul id="floating__nav" className={styles.floating__nav}>
        <Scrollspy
          offset={-350}
          className={styles.scrollspy}
          items={["home", "about", "portfolio"]}
          currentClassName={styles.active}
        >
          {data.map((item) => (
            <Nav key={item.id} item={item} />
          ))}
        </Scrollspy>
      </ul>
    </div>
  );
};

export default FloatingNav;
