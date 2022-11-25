import { YearItem } from "./components/YearItem";
import { css } from "@emotion/react";
import { TotalYearItemModls } from "../../models/year.model";
import { Line } from "./components/Line";

export const MobileRoadmapContent = () => {
  return (
    <div css={sx.root}>
      <Line />
      {TotalYearItemModls.map((it, index) => (
        <YearItem key={index} year={it.year} content={it.content} />
      ))}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    padding: 0 5.55vw;
    display: flex;
    flex-direction: column;
    gap: 16.66vw;
  `,
};
