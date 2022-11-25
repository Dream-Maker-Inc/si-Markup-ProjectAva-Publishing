import { css } from "@emotion/react";
import { AileyBackgroundImage, SwiperArticle, TextSection } from "./components";

export const MobileProject = () => {
  return (
    <div css={sx.root}>
      <AileyBackgroundImage />
      <div css={sx.container}>
        <TextSection />
        <SwiperArticle />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    aspect-ratio: 1/2.716;
    background-color: black;
    position: relative;
  `,
  container: css`
    width: 100%;
    height: 100%;
    padding: 0 5.55vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 2;
  `,
};
