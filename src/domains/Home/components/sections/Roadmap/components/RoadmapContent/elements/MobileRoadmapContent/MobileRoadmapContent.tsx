import { YearItem } from "./components/YearItem";
import { css } from "@emotion/react";
import { Line } from "./components/Line";
import { useTranslation } from "react-i18next";
import { RoadmapCardType } from "@/types/common.type";

export const MobileRoadmapContent = () => {
  const { t } = useTranslation("roadmap");
  const totalYearItemModls: RoadmapCardType[] = t("TotalYearItemModls", {
    returnObjects: true,
  });
  return (
    <div css={sx.root}>
      <Line />
      {totalYearItemModls.map((it, index) => (
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
