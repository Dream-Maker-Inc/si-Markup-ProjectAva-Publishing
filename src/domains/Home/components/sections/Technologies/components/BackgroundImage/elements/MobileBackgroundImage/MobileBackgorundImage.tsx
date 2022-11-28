import { css } from "@emotion/react";
import Image from "next/image";

export const MobileBackgroundImage = () => {
  return (
    <div css={sx.mobileImageWrapper}>
      <div css={sx.mobileImage}>
        <Image
          fill
          src={"/assets/technologies/bg-face.png"}
          alt="bakcground"
          css={sx.image}
        />
      </div>
    </div>
  );
};

const sx = {
  mobileImageWrapper: css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 152%;
    overflow-x: hidden;
  `,
  mobileImage: css`
    position: relative;
    width: 426.66vw;
    height: 100%;
  `,
  image: css`
    z-index: 0;
    object-fit: center;
  `,
};
