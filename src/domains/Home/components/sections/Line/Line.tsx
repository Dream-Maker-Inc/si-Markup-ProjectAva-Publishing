import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { css } from "@emotion/react";
import { LaptopLine } from "./elements/LaptopLine";
import { MobileLine } from "./elements/MobileLine";

export const Line = () => {
  const { isMobile } = useCustomMediaQuery();
  return <div css={sx.root}>{isMobile ? <MobileLine /> : <LaptopLine />}</div>;
};

const sx = {
  root: css`
    width: 100%;
    overflow-x: hidden;
  `,
};
