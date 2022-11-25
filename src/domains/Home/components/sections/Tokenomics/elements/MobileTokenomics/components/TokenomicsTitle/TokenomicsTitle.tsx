import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const TokenomicsTitle = () => {
  return (
    <Typography color={Color.LightWhite} css={sx.title}>
      {"TOKENOMICS"}
    </Typography>
  );
};

const sx = {
  title: css`
    width: 100%;
    font-family: "Bebas neue";
    font-size: 10vw;
    line-height: 130%;
    letter-spacing: 0.2px;
    margin-bottom: 8.33vw;

    @media ${MediaQueries.xs} {
      height: 48px;
      font-size: 36px;
    }
  `,
};
