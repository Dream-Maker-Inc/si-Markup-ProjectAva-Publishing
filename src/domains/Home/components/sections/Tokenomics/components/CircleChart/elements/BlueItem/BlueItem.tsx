import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";

export const BlueItem = () => {
  return (
    <div css={sx.wrapper}>
      <BlueBox />
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-blue.png" alt="" />
      </div>
    </div>
  );
};

const sx = {
  wrapper: css`
    position: absolute;
    top: -6%;
    left: -58%;
    display: flex;
    align-items: center;
    gap: 1.25vw;
  `,
  image: css`
    position: relative;
    width: 11.52vw;
    aspect-ratio: 1/0.307;
  `,
  box: css`
    width: 16.87vw;
    aspect-ratio: 1/0.205;
    background-color: ${Color.LightBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -8%;
  `,
};

const BlueBox = () => {
  return (
    <div css={sx.box}>
      <Typography color="black" fontWeight={500}>
        Ecosystem Rewards
      </Typography>
    </div>
  );
};
