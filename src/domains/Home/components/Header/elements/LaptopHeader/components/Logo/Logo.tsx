import { css } from "@emotion/react";
import Image from "next/image";
import { useRouter } from "next/router";

export const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")} css={sx.logo}>
      <Image fill src={"/assets/logo.svg"} alt="logo" />
    </div>
  );
};

const sx = {
  logo: css`
    position: relative;
    width: 9.44vw;
    aspect-ratio: 1/0.411;
    cursor: pointer;
  `,
};
