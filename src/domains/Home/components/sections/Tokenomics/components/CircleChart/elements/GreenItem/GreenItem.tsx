import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";

export const GreenItem = () => {
  return (
    <div css={sx.wrapper}>
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-green.png" alt="" />
      </div>
      <GreenBox />
    </div>
  );
};

const sx = {
  wrapper: css`
    position: absolute;
    bottom: 4%;
    right: -65%;
    display: flex;
    align-items: center;
    gap: 1.25vw;
  `,
  image: css`
    position: relative;
    width: 13.19vw;
    aspect-ratio: 1/0.273;
  `,
  box: css`
    width: 11.45vw;
    aspect-ratio: 1/0.3;
    background-color: ${Color.LightGreen};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9%;
  `,
};

const GreenBox = () => {
  return (
    <div css={sx.box}>
      <Typography color="black" fontWeight={500}>
        NFT Swap
      </Typography>
    </div>
  );
};
