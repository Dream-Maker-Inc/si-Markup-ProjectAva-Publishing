import { css } from "@emotion/react";
import { CircleChart } from "./components/CircleChart";
import { FlowSwiper } from "./components/FlowSwiper";
import { TokenomicsTitle } from "./components/TokenomicsTitle";

export const Tokenomics = () => {
  return (
    <div id="tokenomics" css={sx.root}>
      <TokenomicsTitle />
      <CircleChart />
      <FlowSwiper />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: black;
    padding-top: 9.72vw;
    padding-bottom: 5/28vw;
    text-align: center;
  `,
};
