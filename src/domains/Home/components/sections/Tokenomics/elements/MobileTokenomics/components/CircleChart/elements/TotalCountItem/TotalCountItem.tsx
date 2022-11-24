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
    width: 100%;
    aspect-ratio: 1/0.127;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;
  `,

  text: css`
    font-size: 3.88vw;
    line-height: 160%;
  `,
};
