import React from "react";
import { PATH } from "../../Routers";
import { LinkButton } from "../../components/parts";
import { Blogs } from "../../components/modules";
import styles from "./HomePage.module.scss";
import { Stack } from "@mui/material";

const HomePage = (): JSX.Element => {
  return (
    <div className={styles.root}>
      <Stack spacing={3}>
        <Blogs title="BLOGS" />
        <div>
          <LinkButton variant="contained" color="primary" to={PATH.sample1}>
            SAMPLE1
          </LinkButton>
        </div>
      </Stack>
    </div>
  );
};

export default HomePage;
