import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const RoadmapTitle = () => {
  return (
    <Typography color={Color.LightWhite} css={sx.title}>
      {"ROADMAP"}
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

    @media ${MediaQueries.sm} {
      font-size: 10vw;
      height: 13.33vw;
      margin-bottom: 11.94vw;
    }
  `,
};
