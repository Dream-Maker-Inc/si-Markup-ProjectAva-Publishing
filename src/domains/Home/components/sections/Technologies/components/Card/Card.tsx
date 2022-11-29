import { MediaQueries } from "@/common/themes/Limit";
import { TechnologiesCardType } from "@/type/common.type";
import { localeState } from "@/utils/recoil/locale.atom";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";

export const Card = ({ title, desc }: TechnologiesCardType) => {
  const isEnglish = useRecoilValue(localeState);
  return (
    <div css={sx.cardContainer}>
      <Typography textTransform={"uppercase"} color="white" css={sx.cardTitle}>
        {title}
      </Typography>
      <Typography color="white" css={sx.cardDesc(isEnglish)}>
        {desc}
      </Typography>
    </div>
  );
};

const sx = {
  cardContainer: css`
    width: 100%;
    height: 21.5vw;
    border-top: 1.5px solid #919191;
    padding-top: 1.25vw;

    @media ${MediaQueries.sm} {
      height: unset;
      padding-top: 2.77vw;
    }
  `,
  cardTitle: css`
    font-size: 2.5vw;
    line-height: 160%;
    margin-bottom: 1.25vw;
    font-family: "Bebas neue";
    letter-spacing: 0.03em;

    @media ${MediaQueries.sm} {
      font-size: 6.66vw;
    }
  `,
  cardDesc: (isEnglish: boolean) => css`
    width: 23.75vw;
    font-size: 1.11vw;
    line-height: 180%;

    @media ${MediaQueries.sm} {
      width: ${isEnglish ? "83.33vw" : "77.77vw"};
      font-size: 3.61vw;
      white-space: pre-wrap;
    }
  `,
};
