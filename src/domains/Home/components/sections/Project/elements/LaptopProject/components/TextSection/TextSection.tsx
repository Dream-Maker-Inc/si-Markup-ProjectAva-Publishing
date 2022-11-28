import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const TextSection = () => {
  return (
    <div css={sx.textWrapper}>
      <Typography color={Color.LightWhite} css={sx.title}>
        Project Ailey
      </Typography>
      <Typography color={Color.LightWhite} css={sx.desc}>
        Project Ailey将为日后的游戏、
        <br />
        电影、元宇宙等
        <span className="text-yellow">多样的虚拟空间</span>
        持续提供优质<span className="text-blue">虚拟人形</span>偶像。
      </Typography>
    </div>
  );
};

const sx = {
  textWrapper: css`
    position: absolute;
    top: 16.66vw;
    left: 9.16vw;
  `,
  title: css`
    font-size: 4.44vw;
    line-height: 130%;
    font-family: "Bebas Neue";
    margin-bottom: 8.6%;
  `,
  desc: css`
    font-size: 1.66vw;
    line-height: 2;
  `,
};
