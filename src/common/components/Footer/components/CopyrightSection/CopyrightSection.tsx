import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const CopyrightSection = () => {
  return (
    <div css={sx.root}>
      <Typography color={Color.LightBlack} lineHeight={1} css={sx.text}>
        {"© 2022, Ailey. All rights reserved."}
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    aspect-ratio: 1/0.055;
    background-color: ${Color.Primary};
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${MediaQueries.sm} {
      aspect-ratio: 1/0.155;
    }
  `,
  text: css`
    font-size: 0.833vw;
    @media ${MediaQueries.sm} {
      font-size: 2.77vw;
    }
  `,
};
