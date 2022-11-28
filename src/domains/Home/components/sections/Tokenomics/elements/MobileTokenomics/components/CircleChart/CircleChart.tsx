import { css } from "@emotion/react";
import Image from "next/image";
import { TotalCountItem } from "./components";
import { ArrowIcon } from "./components/ArrowIcon";
import { ChartLegend } from "./components/ChartLegend";
export const CircleChart = () => {
  return (
    <div css={sx.root}>
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-chart.png" alt="chart" />
      </div>
      <TotalCountItem />
      <ChartLegend />
      <ArrowIcon />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    margin-bottom: 12.5%;
  `,
};
