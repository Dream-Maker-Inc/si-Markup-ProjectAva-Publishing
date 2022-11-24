import { css } from "@emotion/react";
import Image from "next/image";

export const LaptopBackgroundImage = () => {
  return (
    <Image
      fill
      src={"/assets/technologies/bg-face.png"}
      alt="bakcground"
      css={sx.image}
    />
  );
};

const sx = {
  image: css`
    z-index: 0;
  `,
};
