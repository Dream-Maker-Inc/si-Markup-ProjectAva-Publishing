import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";

export const Line = () => {
  return <div css={sx.root}></div>;
};

const sx = {
  root: css`
    position: absolute;
    width: 1px;
    height: 176vw;
    background-color: ${Color.LightBlue};
    margin-left: 5vw;
  `,
};
