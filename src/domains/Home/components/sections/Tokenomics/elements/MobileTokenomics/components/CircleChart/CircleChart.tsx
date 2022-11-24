import { css } from "@emotion/react";
import Image from "next/image";
import { TotalCountItem } from "./elements";
export const CircleChart = () => {
  return (
    <div css={sx.root}>
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-chart.png" alt="chart" />
      </div>
      <TotalCountItem />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    margin-bottom: 12.5vw;
  `,
  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    margin-bottom: 12.5%;
  `,
};
