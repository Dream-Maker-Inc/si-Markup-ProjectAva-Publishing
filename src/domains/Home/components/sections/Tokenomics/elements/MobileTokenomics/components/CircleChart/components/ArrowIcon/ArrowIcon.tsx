import { css } from "@emotion/react";

export const ArrowIcon = () => {
  return (
    <div css={sx.arrow}>
      <div css={sx.dottedLine}></div>
      <div css={sx.round}></div>
    </div>
  );
};

const sx = {
  arrow: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5.55vw;
    padding-bottom: 2.77vw;
  `,
  dottedLine: css`
    width: 0.27vw;
    aspect-ratio: 1/20;
    border: 0.27vw dashed #909090;
  `,
  round: css`
    width: 1.5vw;
    aspect-ratio: 1;
    border-radius: 1.5vw;
    background-color: #909090;
  `,
};
