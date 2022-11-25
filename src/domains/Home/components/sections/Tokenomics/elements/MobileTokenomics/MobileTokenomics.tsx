import { css } from "@emotion/react";
import { CircleChart } from "./components/CircleChart";
import { FlowSwiper } from "./components/FlowSwiper";
import { TokenomicsTitle } from "./components/TokenomicsTitle";

export const MobileTokenomics = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <TokenomicsTitle />
        <CircleChart />
        <FlowSwiper />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    // mobile height : 1300px
    //aspect-ratio: 1/3.61;
    background-color: black;
    padding: 0 5.55vw;
    padding-top: 22.22vw;
    padding-bottom: 11.11vw;
  `,

  container: css`
    width: 100%;
    height: 100%;
    text-align: center;
  `,
};
