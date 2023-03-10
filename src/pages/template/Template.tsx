import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/modules";
import styles from "./Template.module.scss";

const Template = (): JSX.Element => {
  return (
    <div className={styles.root}>
      {/* ページ共通部 */}
      <div className={styles.header}>
        <Header />
      </div>
      {/* Stack：垂直軸または水平軸に沿って直下の子のレイアウトを管理し、オプションで各子の間に間隔や仕切りを配置 */}
      <Stack spacing={3} className={styles.stack}>
        {/* Outletの中身がRouterで変更される */}
        <div className={styles.content}>
          <Outlet />
        </div>
      </Stack>
    </div>
  );
};

export default Template;
