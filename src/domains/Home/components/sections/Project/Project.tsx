import { css } from "@emotion/react";
import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { MobileProject } from "./elements/MobileProject";
import { LaptopProject } from "./elements/LaptopProject";

export const Project = () => {
  const { isMobile } = useCustomMediaQuery();
  return (
    <div id="project-ailey" css={sx.root}>
      {isMobile ? <MobileProject /> : <LaptopProject />}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
  `,
};
