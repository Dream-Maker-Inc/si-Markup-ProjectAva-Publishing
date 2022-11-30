import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { pieData } from "../../../../../../models/pieData.model";

export const GreenItem = () => {
  return (
    <div css={sx.wrapper}>
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-green.svg" alt="" />
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
  box: (color: string) => css`
    width: 11.45vw;
    aspect-ratio: 1/0.3;
    background-color: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9%;
  `,
  text: css`
    font-size: 1.11vw;
  `,
};

const GreenBox = () => {
  const greenItemInfo = pieData[0];
  return (
    <div css={sx.box(greenItemInfo.color)}>
      <Typography color="black" fontWeight={500} css={sx.text}>
        {greenItemInfo.title}
      </Typography>
    </div>
  );
};
