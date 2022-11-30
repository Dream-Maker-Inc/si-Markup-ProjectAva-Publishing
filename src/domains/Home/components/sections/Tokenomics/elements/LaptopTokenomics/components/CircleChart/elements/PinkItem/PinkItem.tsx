import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { pieData } from "../../../../../../models/pieData.model";

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
  box: (color: string) => css`
    width: 11.45vw;
    aspect-ratio: 1/0.3;
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

const PinkBox = () => {
  const pinkItemInfo = pieData[4];
  return (
    <div css={sx.box(pinkItemInfo.color)}>
      <Typography color="black" fontWeight={500} css={sx.text}>
        {pinkItemInfo.title}
      </Typography>
    </div>
  );
};
