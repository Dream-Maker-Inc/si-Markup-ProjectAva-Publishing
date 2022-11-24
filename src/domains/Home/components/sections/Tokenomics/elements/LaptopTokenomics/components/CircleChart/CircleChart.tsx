import { css } from "@emotion/react";
import Image from "next/image";
import {
  BlueItem,
  GreenItem,
  PinkItem,
  PurpleItem,
  TotalCountItem,
  YellowItem,
} from "./elements";
export const CircleChart = () => {
  return (
    <div css={sx.root}>
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-chart.png" alt="chart" />
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
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.2px;
  `,
};
