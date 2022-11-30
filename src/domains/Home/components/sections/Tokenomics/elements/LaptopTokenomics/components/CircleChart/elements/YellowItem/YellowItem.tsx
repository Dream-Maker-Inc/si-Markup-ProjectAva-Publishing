import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { pieData } from "../../../../../../models/pieData.model";

export const YellowItem = () => {
  return (
    <div css={sx.wrapper}>
      <YellowBox />
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-yellow.svg" alt="" />
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
  box: (color: string) => css`
    width: 18.19vw;
    aspect-ratio: 1/0.19;
    background-color: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  text: css`
    font-size: 1.11vw;
  `,
};

const YellowBox = () => {
  const yellowItemInfo = pieData[2];
  return (
    <div css={sx.box(yellowItemInfo.color)}>
      <Typography color="black" fontWeight={500} css={sx.text}>
        {yellowItemInfo.title}
      </Typography>
    </div>
  );
};
