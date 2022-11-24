import { css } from "@emotion/react";
import { FlowSlide } from "./elements/Slide";
import { FlowSlideModels } from "./models/flow.model";

export const FlowSwiper = () => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        {FlowSlideModels.map((it, index) => (
          <FlowSlide
            key={index}
            slideTitle={it.slideTitle}
            slideTextList={it.slideTextList}
          />
        ))}
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    padding: 0 9.16vw;
  `,
  container: css`
    width: 100%;
    display: flex;
    gap: 1.66vw;
  `,
};
