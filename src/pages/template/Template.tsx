import { Outlet } from "react-router-dom";
import { Header, Banner } from "../../components/modules";
import styles from "./Template.module.scss";

const Template = (): JSX.Element => {
  return (
    <div className={styles.root}>
      {/* ページ共通部 */}
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.banner}>
        <Banner />
      </div>
      <h1>COMMING SOON</h1>
      {/* Outletの中身がRouterで変更される */}
      <Outlet />
    </div>
  );
};

export default Template;
