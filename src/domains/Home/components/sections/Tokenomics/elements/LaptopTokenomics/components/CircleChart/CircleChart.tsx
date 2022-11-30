import { css } from "@emotion/react";
import {
  BlueItem,
  GreenItem,
  PinkItem,
  PurpleItem,
  TotalCountItem,
  YellowItem,
} from "./elements";
import { CustomPieChart } from "./elements/CustomPieChart";
export const CircleChart = () => {
  return (
    <div css={sx.root}>
      <div css={sx.image}>
        <CustomPieChart />
        <BlueItem />
        <YellowItem />
        <PurpleItem />
        <GreenItem />
        <PinkItem />
        <TotalCountItem />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    display: flex;
    justify-content: center;
    // between flow slide gap
    margin-bottom: 12.5vw;
  `,
  image: css`
    position: relative;
    width: 33.9vw;
    aspect-ratio: 1;
  `,
  boxText: css`
    font-size: 1.11vw;
    line-height: 1;
  `,
};
