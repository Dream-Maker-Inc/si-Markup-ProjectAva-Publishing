import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { LinkModels, LinkType } from "./models/link.model";

export const LinkSection = () => {
  return (
    <div css={sx.root}>
      <Image fill src={"/assets/footer/img-mesh.png"} alt="mesh" />
      <div css={sx.container}>
        <Typography color={Color.Primary} lineHeight={"130%"} css={sx.title}>
          Follow & STAY TUNED!
        </Typography>
        <div css={sx.logo}>
          <Image fill src={"/assets/footer/ic-logo.svg"} alt="logo" />
        </div>
        <div css={sx.links}>
          {LinkModels.map((it, index) => (
            <Link key={index} image={it.image} sns={it.sns} />
          ))}
        </div>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: ${Color.LightPink};
    position: relative;
    z-index: 0;
  `,
  container: css`
    width: 100%;
    padding-top: 4.86vw;
    padding-bottom: 8.33vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
  `,
  title: css`
    font-family: "Bebas neue";
    font-size: 64px;
    margin-bottom: 1.18%;
  `,
  logo: css`
    position: relative;
    width: 13.33vw;
    aspect-ratio: 1/0.385;
    margin-bottom: 6.25%;
  `,
  links: css`
    width: 100%;
    padding: 0 9.16vw;
    display: flex;
    align-items: center;
    gap: 2.22vw;
  `,
  link: css`
    width: 100%;
    aspect-ratio: 1/0.237;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.44%;
    background-color: black;
    cursor: pointer;
  `,
  snsImage: css`
    position: relative;
    width: 36px;
    aspect-ratio: 1;
  `,
  linkText: css`
    font-size: 18px;
  `,
};

const Link = ({ image, sns }: LinkType) => {
  return (
    <div css={sx.link}>
      <div css={sx.snsImage}>
        <Image fill src={image} alt="logo" />
      </div>
      <Typography
        color={Color.Primary}
        fontWeight={500}
        lineHeight={1}
        css={sx.linkText}
      >
        {sns}
      </Typography>
    </div>
  );
};
