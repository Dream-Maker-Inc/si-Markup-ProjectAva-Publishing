import { css } from "@emotion/react";
import { ReverseYearItemModels, YearItemModels } from "../../models/year.model";
import { Line } from "./components/Line";
import { ReverseYearItem } from "./components/ReverseYearItem";
import { YearItem } from "./components/YearItem";

export const LaptopRoadmapContent = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.wrapper}>
          {YearItemModels.map((it, index) => (
            <YearItem key={index} year={it.year} content={it.content} />
          ))}
        </div>
        <Line />
        <div css={sx.reverseWrapper}>
          {ReverseYearItemModels.map((it, index) => (
            <ReverseYearItem key={index} year={it.year} content={it.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    padding-top: 6.87vw;
    padding-bottom: 18.75vw;
  `,

  container: css`
    width: 100%;
    aspect-ratio: 1/0.375;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  wrapper: css`
    display: flex;
    flex: 1;
    gap: 10.41vw;
    margin-bottom: calc(-3.6vw / 2);
  `,

  reverseWrapper: css`
    display: flex;
    flex: 1;
    gap: 10.41vw;
    margin-top: calc(-3.6vw / 2);
  `,
};
