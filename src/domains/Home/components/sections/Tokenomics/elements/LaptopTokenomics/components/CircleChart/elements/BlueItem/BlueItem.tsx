import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { pieData } from "../../../../../../models/pieData.model";

export const BlueItem = () => {
  return (
    <div css={sx.wrapper}>
      <BlueBox />
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-blue.svg" alt="" />
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
  box: (color: string) => css`
    width: 16.87vw;
    aspect-ratio: 1/0.205;
    background-color: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -8%;
  `,
  text: css`
    font-size: 1.11vw;
  `,
};

const BlueBox = () => {
  const blueItemInfo = pieData[3];
  return (
    <div css={sx.box(blueItemInfo.color)}>
      <Typography color="black" fontWeight={500} css={sx.text}>
        {blueItemInfo.title}
      </Typography>
    </div>
  );
};
