import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { LinkModels, LinkType } from "./models/link.model";

export const LinkSection = () => {
  const { isMobile } = useCustomMediaQuery();
  const title = {
    laptop: "Follow & STAY TUNED!",
    mobile: "Follow &\nSTAY TUNED!",
  };

  return (
    <div css={sx.root}>
      <Image fill src={"/assets/footer/img-mesh.png"} alt="mesh" />
      <div css={sx.container}>
        <Typography color={Color.Primary} lineHeight={"130%"} css={sx.title}>
          {isMobile ? title.mobile : title.laptop}
        </Typography>
        <div css={sx.logo(isMobile)}>
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
    padding-top: 4.86vw;
    padding-bottom: 8.33vw;

    @media ${MediaQueries.sm} {
      padding-top: 19.44vw;
      padding-bottom: 25.55vw;
    }
  `,
  container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
  `,
  title: css`
    font-family: "Bebas neue";
    font-size: 4.44vw;
    margin-bottom: 1.18%;
    white-space: pre-wrap;
    text-align: center;

    @media ${MediaQueries.sm} {
      font-size: 13.88vw;
      line-height: 1;
      margin-bottom: 5.55vw;
    }
  `,
  logo: (isMobile: boolean) => css`
    position: relative;
    width: ${isMobile ? "44.44vw" : "13.33vw"};
    aspect-ratio: ${isMobile ? "1/0.387" : "1/0.385"};
    margin-bottom: ${isMobile ? "12.77vw" : "6.25vw"};
  `,
  links: css`
    width: 100%;
    padding: 0 9.16vw;
    display: flex;
    align-items: center;
    gap: 2.22vw;

    @media ${MediaQueries.sm} {
      padding: 0 5.55vw;
      display: flex;
      flex-direction: column;
      gap: 3.88vw;
    }
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

    @media ${MediaQueries.sm} {
      aspect-ratio: 1/0.162;
      gap: 3.33%;
    }
  `,
  snsImage: css`
    position: relative;
    width: 2.5vw;
    aspect-ratio: 1;
    @media ${MediaQueries.sm} {
      width: 8.33vw;
    }
  `,
  linkText: css`
    font-size: 1.25vw;

    @media ${MediaQueries.sm} {
      font-size: 3.88vw;
    }
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
