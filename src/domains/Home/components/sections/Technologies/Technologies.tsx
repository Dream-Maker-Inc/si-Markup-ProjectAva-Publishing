import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { BackgroundImage } from "./components/BackgroundImage";
import { models } from "./model/card.model";

export const Technologies = () => {
  return (
    <div id="technologies" css={sx.root}>
      <BackgroundImage />
      <div css={sx.opacity}></div>
      <div css={sx.container}>
        <Typography color="white" css={sx.title}>
          {"Technologies"}
        </Typography>
        <div css={sx.wrapper}>
          {/* <Card title={"test"} desc={"test"} /> */}
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

    @media ${MediaQueries.sm} {
      aspect-ratio: 1/3.244;
      display: unset;
      align-items: unset;
    }
  `,

  container: css`
    width: 74.7vw;
    aspect-ratio: 1/0.654;
    margin-left: 9.16vw;
    display: flex;
    flex-direction: column;
    position: relative;

    @media ${MediaQueries.sm} {
      width: 100%;
      aspect-ratio: unset;
      margin-left: unset;
      padding: 0 5.55vw;
      padding-top: 16.66vw;
    }

    @media ${MediaQueries.xs} {
      padding: 0 20px;
      padding-top: 60px;
    }
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

    @media ${MediaQueries.sm} {
      aspect-ratio: 1/2.44;
      padding-top: 16.66vw;
      padding-left: unset;
      grid-template-columns: unset;
      column-gap: unset;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
    }

    @media ${MediaQueries.xs} {
      padding-top: 60px;
    }
  `,

  cardContainer: css`
    width: 100%;
    border-top: 1.5px solid #919191;
    padding-top: 18px;

    @media ${MediaQueries.sm} {
      padding-top: 2.77vw;
    }
  `,

  title: css`
    position: relative;
    font-size: 64px;
    line-height: 130%;
    font-family: "Bebas neue";
    letter-spacing: 0.2px;
    z-index: 2;

    @media ${MediaQueries.xs} {
      font-size: 36px;
    }
  `,

  cardTitle: css`
    font-size: 36px;
    line-height: 160%;
    margin-bottom: 18px;
    font-family: "Bebas neue";
    letter-spacing: 0.03em;

    @media ${MediaQueries.xs} {
      font-size: 24px;
    }
  `,
  cardDesc: css`
    font-size: 16px;
    line-height: 180%;
    word-break: keep-all;

    @media ${MediaQueries.sm} {
      width: 77.77vw;
    }

    @media ${MediaQueries.xs} {
      width: 77.77vw;
      font-size: 13px;
    }
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
