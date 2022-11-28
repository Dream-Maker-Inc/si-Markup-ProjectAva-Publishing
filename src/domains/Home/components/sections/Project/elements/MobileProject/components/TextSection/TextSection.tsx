import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const TextSection = () => {
  return (
    <div css={sx.root}>
      <Typography color={Color.LightWhite} css={sx.title}>
        Project Ailey
      </Typography>
      <Typography color={Color.LightWhite} css={sx.desc}>
        Project Ailey将为日后的游戏、
        <br />
        电影、元宇宙等<span className="text-yellow">多样的虚拟空间</span>
        持续地提供优质的<span className="text-blue">虚拟人形</span>
        偶像。
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    position: absolute;
    top: 19.44vw;
    left: 0;
    padding: 0 5.55vw;
  `,
  title: css`
    font-size: 10vw;
    line-height: 130%;
    font-family: "Bebas Neue";
    margin-bottom: 11.11vw;
  `,
  desc: css`
    width: 100%;
    aspect-ratio: 1/0.393;
    font-size: 3.88vw;
    line-height: 170%;
  `,
};
