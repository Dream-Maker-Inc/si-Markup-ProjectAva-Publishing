import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";

export const YellowItem = () => {
  return (
    <div css={sx.wrapper}>
      <YellowBox />
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-yellow.png" alt="" />
      </div>
    </div>
  );
};

const sx = {
  wrapper: css`
    position: absolute;
    top: 44.2%;
    left: -74%;
    display: flex;
    align-items: center;
    gap: 1.25vw;
  `,
  image: css`
    position: relative;
    width: 5.41vw;
    aspect-ratio: 1/0.205;
  `,

  box: css`
    width: 18.19vw;
    aspect-ratio: 1/0.19;
    background-color: ${Color.LightYellow};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

const YellowBox = () => {
  return (
    <div css={sx.box}>
      <Typography color="black" fontWeight={500}>
        Future Contributors
      </Typography>
    </div>
  );
};
