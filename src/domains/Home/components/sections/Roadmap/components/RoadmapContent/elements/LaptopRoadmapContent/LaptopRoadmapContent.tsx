import { RoadmapCardType } from "@/types/common.type";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { Line } from "./components/Line";
import { ReverseYearItem } from "./components/ReverseYearItem";
import { YearItem } from "./components/YearItem";

export const LaptopRoadmapContent = () => {
  const { t } = useTranslation("roadmap");
  const yearItemModels: RoadmapCardType[] = t("YearItemModels", {
    returnObjects: true,
  });
  const reverseYearItemModels: RoadmapCardType[] = t("ReverseYearItemModels", {
    returnObjects: true,
  });

  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.wrapper}>
          {yearItemModels.map((it, index) => (
            <YearItem key={index} year={it.year} content={it.content} />
          ))}
        </div>
        <Line />
        <div css={sx.reverseWrapper}>
          {reverseYearItemModels.map((it, index) => (
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
    gap: 1.66vw;
    margin-bottom: calc(-3.6vw / 2);
  `,

  reverseWrapper: css`
    display: flex;
    flex: 1;
    gap: 1.66vw;
    margin-top: calc(-3.6vw / 2);
  `,
};
