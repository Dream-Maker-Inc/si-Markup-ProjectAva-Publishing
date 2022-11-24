import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { MediaQueries } from "@/common/themes/Limit";
import { SwiperArticle } from "./components/SwiperArticle";

export const Project = () => {
  return (
    <div id="project-ailey" css={sx.root}>
      <div css={sx.bgAvatarWrapper}>
        <div css={sx.bgAvatar}>
          <Image fill src={"/assets/project/bg-avatar.png"} alt="img" />
        </div>
      </div>
      <div css={sx.bgAlieyWrapper}>
        <div css={sx.bgAliey}>
          <Image fill src={"/assets/project/bg-ailey.png"} alt="img" />
        </div>
      </div>
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
      <SwiperArticle />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    aspect-ratio: 1/0.996;
    background-color: ${Color.BgLightDark};
    position: relative;
    overflow: hidden;
  `,
  bgAvatarWrapper: css`
    position: absolute;
    top: 0;
    right: 0;
  `,
  bgAvatar: css`
    position: relative;
    width: 40vw;
    aspect-ratio: 1/1.339;
    @media ${MediaQueries.xxl} {
      max-width: 575px;
    }
  `,
  bgAlieyWrapper: css`
    position: absolute;
    bottom: 0;
    right: 5.83vw;
  `,
  bgAliey: css`
    position: relative;
    width: 39.23vw;
    aspect-ratio: 1/1.11;
    @media ${MediaQueries.xxl} {
      max-width: 565px;
    }
  `,
  textWrapper: css`
    position: absolute;
    top: 240px;
    left: 9.16vw;
  `,

  title: css`
    font-size: 64px;
    line-height: 130%;
    font-family: "Bebas Neue", cursive;
    letter-spacing: 0.2px;
    margin-bottom: 8.6%;
  `,
  desc: css`
    font-size: 24px;
    line-height: 2;
  `,
};
