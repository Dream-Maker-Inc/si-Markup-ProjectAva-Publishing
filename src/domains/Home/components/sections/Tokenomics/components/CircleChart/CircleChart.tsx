import { css } from "@emotion/react";
import Image from "next/image";
import {
  BlueItem,
  GreenItem,
  PinkItem,
  PurpleItem,
  YellowItem,
} from "./elements";
export const CircleChart = () => {
  return (
    <div css={sx.root}>
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-chart.svg" alt="chart" />
        <BlueItem />
        <YellowItem />
        <PurpleItem />
        <GreenItem />
        <PinkItem />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  image: css`
    position: relative;
    width: 33.9vw;
    aspect-ratio: 1;
  `,

  imgPurpleWrapper: css`
    position: absolute;
    top: 0;
    right: 0;
  `,
  imgPurple: css`
    position: relative;
    width: 8.54vw;
    aspect-ratio: 1/0.422;
  `,
  imgGreenWrapper: css`
    position: absolute;
    top: 0;
    right: 0;
  `,
  imgGreen: css`
    position: relative;
    width: 13.19vw;
    aspect-ratio: 1/0.273;
  `,
  imgPinkWrapper: css`
    position: absolute;
    top: 0;
    right: 0;
  `,
  imgPink: css`
    position: relative;
    width: 16.66vw;
    aspect-ratio: 1/0.212;
  `,

  boxText: css`
    font-size: 16px;
    line-height: 1;
    letter-spacing: 0.2px;
  `,
};
