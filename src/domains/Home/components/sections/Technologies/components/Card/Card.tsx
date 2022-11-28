import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

type CardType = {
  title: string;
  desc: string;
};

export const Card = ({ title, desc }: CardType) => {
  return (
    <div css={sx.cardContainer}>
      <Typography textTransform={"uppercase"} color="white" css={sx.cardTitle}>
        {title}
      </Typography>
      <Typography color="white" css={sx.cardDesc}>
        {desc}
      </Typography>
    </div>
  );
};

const sx = {
  cardContainer: css`
    width: 100%;
    border-top: 1.5px solid #919191;
    padding-top: 1.25vw;

    @media ${MediaQueries.sm} {
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
  cardDesc: css`
    font-size: 1.11vw;
    line-height: 180%;
    word-break: keep-all;

    @media ${MediaQueries.sm} {
      width: 77.77vw;
      font-size: 3.61vw;
    }
  `,
};
