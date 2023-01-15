import React from "react";
import { LinkButton } from "../../components/parts";
import { PATH } from "../../Routers";

const Sample1Page = (): JSX.Element => {
  return (
    <div>
      <div>SAMPLE1</div>
      <div>
        <LinkButton variant="contained" color="primary" to={PATH.home}>
          HOME
        </LinkButton>
      </div>
    </div>
  );
};

export default Sample1Page;
