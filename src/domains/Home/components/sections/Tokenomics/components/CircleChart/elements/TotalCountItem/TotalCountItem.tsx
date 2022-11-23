import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const TotalCountItem = () => {
  return (
    <div css={sx.root}>
      <Typography color="white" fontWeight={500} css={sx.text}>
        {"Total 5,000,000,000"}
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    width: 21.38vw;
    aspect-ratio: 1/0.181;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;

    position: absolute;
    top: 40%;
    right: -73%;
  `,

  text: css`
    font-size: 20px;
    line-height: 160%;
  `,
};
