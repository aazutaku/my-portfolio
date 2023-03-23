import { ReactNode } from "react";
import styles from "./Card.module.scss";

interface PropsTypes {
  children: ReactNode;
  className: string | null;
  onClick?: () => void;
}

const Card: React.FC<PropsTypes> = ({ children, className, onClick }) => {
  return (
    <article className={styles.card + " " + className} onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;
