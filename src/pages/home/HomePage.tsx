import React from "react";
import { PATH } from "../../Routers";
import { LinkButton } from "../../components/parts";

const HomePage = (): JSX.Element => {
  return (
    <div>
      <LinkButton variant="contained" color="primary" to={PATH.sample1}>
        SAMPLE1
      </LinkButton>
    </div>
  );
};

export default HomePage;
