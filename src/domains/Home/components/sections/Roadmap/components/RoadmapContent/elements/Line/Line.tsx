import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";

export const Line = () => {
  return <div css={sx.line}></div>;
};

const sx = {
  line: css`
    width: 100%;
    height: 2px;
    background-color: ${Color.LightBlue};
  `,
};
