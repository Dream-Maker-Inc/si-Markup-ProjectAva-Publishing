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
    height: 5.76vw;
    font-size: 4.44vw;
    line-height: 130%;
    margin-bottom: 9.16vw;
  `,
};
