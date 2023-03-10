import { motion, useIsPresent } from "framer-motion";
import styles from "./Pagetransition.module.scss";

const PageTransition = () => {
  const isPresent = useIsPresent();
  return (
    <>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 1, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={styles.privacy_screen}
      />
    </>
  );
};

export default PageTransition;
