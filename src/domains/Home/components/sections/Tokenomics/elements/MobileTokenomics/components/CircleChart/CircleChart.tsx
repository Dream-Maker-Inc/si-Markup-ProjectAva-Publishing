import { css } from "@emotion/react";
import Image from "next/image";
import { TotalCountItem } from "./components";
import { ArrowIcon } from "./components/ArrowIcon";
import { ChartLegend } from "./components/ChartLegend";
import { CustomPieChart } from "./components/CustomPieChart";
export const CircleChart = () => {
  return (
    <div css={sx.root}>
      <CustomPieChart />
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
};
