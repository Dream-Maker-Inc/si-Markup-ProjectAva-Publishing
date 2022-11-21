import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const Line = () => {
  const text = "Virtual Celebrity Living in the Metaverse";

  let list = [];

  for (let i = 0; i < text.length; i++) {
    list.push(text.charAt(i));
  }
  return (
    <div css={sx.root}>
      {list.map((it, index) => (
        <Typography key={index} fontFamily={"Porter Sans Block"} css={sx.text}>
          {it === " " ? "\u00A0" : it}
        </Typography>
      ))}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
  `,
  text: css`
    font-size: 2.3vw;
    line-height: 56px;
  `,
  span: css`
    width: 100%;
    height: 1em;
    display: inline-block;
  `,
};
