import { Color } from "@/common/themes/Colors";
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
    font-family: "Bebas neue";
    height: 83px;
    font-size: 64px;
    line-height: 130%;
    letter-spacing: 0.2px;
    margin-bottom: 9.16vw;
  `,
};
