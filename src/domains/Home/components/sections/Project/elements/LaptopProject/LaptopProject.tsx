import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import {
  SwiperArticle,
  AvatarBackgroundImage,
  AileyBackgroundImage,
  TextSection,
} from "./components";

export const LaptopProject = () => {
  return (
    <div css={sx.root}>
      <AvatarBackgroundImage />
      <AileyBackgroundImage />
      <TextSection />
      <SwiperArticle />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    aspect-ratio: 1/0.996;
    background-color: ${Color.BgLightDark};
    position: relative;
    overflow: hidden;
  `,
};
