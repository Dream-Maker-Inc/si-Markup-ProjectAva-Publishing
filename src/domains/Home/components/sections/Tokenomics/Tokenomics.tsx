import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { css } from "@emotion/react";
import { LaptopTokenomics } from "./elements/LaptopTokenomics";
import { MobileTokenomics } from "./elements/MobileTokenomics";

export const Tokenomics = () => {
  const { isMobile } = useCustomMediaQuery();
  return (
    <div id="tokenomics" css={sx.root}>
      {isMobile ? <MobileTokenomics /> : <LaptopTokenomics />}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
  `,
};
