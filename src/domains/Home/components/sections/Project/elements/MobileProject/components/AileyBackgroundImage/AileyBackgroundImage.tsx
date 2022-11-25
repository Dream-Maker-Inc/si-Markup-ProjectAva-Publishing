import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import Image from "next/image";

export const AileyBackgroundImage = () => {
  return (
    <div css={sx.bgAlieyWrapper}>
      <div css={sx.bgAliey}>
        <Image fill src={"/assets/project/bg-ailey.png"} alt="ailey" />
      </div>
    </div>
  );
};

const sx = {
  bgAlieyWrapper: css`
    position: absolute;
    bottom: 70vw;
    right: -24.5%;
    z-index: 0;
  `,
  bgAliey: css`
    position: relative;
    width: 93.05vw;
    aspect-ratio: 1/1.072;
  `,
};
