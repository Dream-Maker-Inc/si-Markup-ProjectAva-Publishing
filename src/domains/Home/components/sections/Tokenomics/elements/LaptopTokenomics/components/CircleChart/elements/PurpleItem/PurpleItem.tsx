import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { pieData } from "../../../../../../models/pieData.model";

export const PurpleItem = () => {
  return (
    <div css={sx.wrapper}>
      <PurpleBox />
      <div css={sx.image}>
        <Image fill src="/assets/chart/img-purple.svg" alt="" />
      </div>
    </div>
  );
};

const sx = {
  wrapper: css`
    position: absolute;
    bottom: 8%;
    left: -72%;
    display: flex;
    align-items: center;
    gap: 1.25vw;
  `,
  image: css`
    position: relative;
    width: 8.54vw;
    aspect-ratio: 1/0.422;
  `,
  box: (color: string) => css`
    width: 18.19vw;
    aspect-ratio: 1/0.19;
    background-color: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7.5%;
  `,
  text: css`
    font-size: 1.11vw;
    color: white;
  `,
};

const PurpleBox = () => {
  const purpleItemInfo = pieData[1];
  return (
    <div css={sx.box(purpleItemInfo.color)}>
      <Typography color="black" fontWeight={500} css={sx.text}>
        {purpleItemInfo.title}
      </Typography>
    </div>
  );
};
