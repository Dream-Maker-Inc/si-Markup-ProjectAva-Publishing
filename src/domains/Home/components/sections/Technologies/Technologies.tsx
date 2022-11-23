import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { models } from "./model/card.model";

export const Technologies = () => {
  return (
    <div css={sx.root}>
      <Image
        fill
        src={"/assets/technologies/bg-face.png"}
        alt="bakcground"
        css={sx.image}
      />
      <div css={sx.opacity}></div>
      <div css={sx.container}>
        <Typography color="white" css={sx.title}>
          {"Technologies"}
        </Typography>
        <div css={sx.wrapper}>
          {models.map((it, index) => (
            <Card key={index} title={it.title} desc={it.desc} />
          ))}
        </div>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/0.725;
    display: flex;
    align-items: center;
  `,
  image: css`
    z-index: 0; ;
  `,
  container: css`
    width: 74.7vw;
    aspect-ratio: 1/0.654;
    margin-left: 9.16vw;
    display: flex;
    flex-direction: column;
    position: relative;
  `,
  title: css`
    position: relative;
    font-size: 64px;
    line-height: 130%;
    font-family: "Bebas neue";
    letter-spacing: 0.2px;
    z-index: 2;
  `,
  wrapper: css`
    flex: 1;
    width: 100%;
    z-index: 2;
    padding-top: 9.29%;
    padding-left: 17.4%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15%;
  `,
  cardContainer: css`
    width: 100%;
    border-top: 1.5px solid #919191;
    padding-top: 18px;
  `,
  cardTitle: css`
    font-size: 36px;
    line-height: 160%;
    margin-bottom: 18px;
    font-family: "Bebas neue";
    letter-spacing: 0.03em;
  `,
  cardDesc: css`
    font-size: 16px;
    line-height: 180%;
    word-break: keep-all;
  `,
  opacity: css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
    z-index: -1;
  `,
};

type CardType = {
  title: string;
  desc: string;
};

const Card = ({ title, desc }: CardType) => {
  return (
    <div css={sx.cardContainer}>
      <Typography textTransform={"uppercase"} color="white" css={sx.cardTitle}>
        {title}
      </Typography>
      <Typography color="white" css={sx.cardDesc}>
        {desc}
      </Typography>
    </div>
  );
};
