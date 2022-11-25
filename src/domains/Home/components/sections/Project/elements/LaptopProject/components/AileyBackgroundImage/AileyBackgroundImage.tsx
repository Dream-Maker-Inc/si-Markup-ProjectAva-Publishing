import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import Image from "next/image";

export const AileyBackgroundImage = () => {
  return (
    <div css={sx.bgAlieyWrapper}>
      <div css={sx.bgAliey}>
        <Image fill src={"/assets/project/bg-ailey.png"} alt="img" />
      </div>
    </div>
  );
};

const sx = {
  bgAlieyWrapper: css`
    position: absolute;
    bottom: 0;
    right: 5.83vw;
  `,
  bgAliey: css`
    position: relative;
    width: 39.23vw;
    aspect-ratio: 1/1.11;
    @media ${MediaQueries.xxl} {
      max-width: 565px;
    }
  `,
};
