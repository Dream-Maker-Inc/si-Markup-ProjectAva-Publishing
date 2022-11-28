import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";

export const PinkItem = () => {
  return (
    <div css={sx.wrapper}>
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-pink.svg" alt="" />
      </div>
      <PinkBox />
    </div>
  );
};

const sx = {
  wrapper: css`
    position: absolute;
    top: -7%;
    right: -56%;
    display: flex;
    align-items: center;
    gap: 1.25vw;
  `,
  image: css`
    position: relative;
    width: 16.66vw;
    aspect-ratio: 1/0.212;
  `,
  box: css`
    width: 11.45vw;
    aspect-ratio: 1/0.3;
    background-color: ${Color.LightPink};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -8%;
  `,
  text: css`
    font-size: 1.11vw;
  `,
};

const PinkBox = () => {
  return (
    <div css={sx.box}>
      <Typography color="black" fontWeight={500} css={sx.text}>
        Investors
      </Typography>
    </div>
  );
};
