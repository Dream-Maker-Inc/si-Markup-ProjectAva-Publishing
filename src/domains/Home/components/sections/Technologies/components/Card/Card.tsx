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
    padding-top: 18px;

    @media ${MediaQueries.sm} {
      padding-top: 2.77vw;
    }
  `,
  cardTitle: css`
    font-size: 36px;
    line-height: 160%;
    margin-bottom: 18px;
    font-family: "Bebas neue";
    letter-spacing: 0.03em;

    @media ${MediaQueries.xs} {
      font-size: 24px;
    }
  `,
  cardDesc: css`
    font-size: 16px;
    line-height: 180%;
    word-break: keep-all;

    @media ${MediaQueries.sm} {
      width: 77.77vw;
    }

    @media ${MediaQueries.xs} {
      width: 77.77vw;
      font-size: 13px;
    }
  `,
};
