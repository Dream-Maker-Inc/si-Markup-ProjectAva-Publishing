import { css } from "@emotion/react";
import Image from "next/image";

export const Logo = () => {
  return (
    <div css={sx.logo}>
      <Image fill src={"/assets/logo-mobile.svg"} alt="logo" />
    </div>
  );
};

const sx = {
  logo: css`
    position: relative;
    width: 20.55vw;
    aspect-ratio: 1/ 0.391;
    z-index: 10;
  `,
};
