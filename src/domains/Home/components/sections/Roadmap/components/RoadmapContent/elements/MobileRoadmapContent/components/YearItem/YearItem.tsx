import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { YearItemType } from "../../../../models/year.model";

export const YearItem = ({ year, content }: YearItemType) => {
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <PolygonSection />
        <DottedLine />
        <BoxSection year={year} />
      </div>
      <ContentSection content={content} />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
  `,
  container: css`
    display: flex;
    align-items: flex-start;
  `,

  polygon: css`
    position: relative;
    width: 10vw;
    aspect-ratio: 1;
  `,
  imageBackground: css`
    width: 86%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
  `,
  line: css`
    width: 17.5vw;
    height: 1px;
    border: 1px dashed ${Color.LightBlue};
    margin-top: 4.5%;
  `,
  contentRoot: css`
    margin-top: -1%;
  `,
  box: css`
    width: 35.55vw;
    aspect-ratio: 1/0.328;
    background-color: ${Color.LightGreen};
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  year: css`
    font-size: 6.66vw;
    font-family: "Bebas neue";
  `,
  ul: css`
    width: 73.33vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-left: 7.77vw;
    margin-top: 5.55vw;
  `,
  text: css`
    font-size: 3.61vw;
    letter-spacing: 0.2px;
    &::before {
      content: "· ";
    }
  `,
};

const PolygonSection = () => (
  <div css={sx.polygon}>
    <div css={sx.imageBackground}></div>
    <Image fill src={"/assets/roadmap/ic-polygon.svg"} alt="polygon " />
  </div>
);

type BoxSection = {
  year: string;
};

const BoxSection = ({ year }: BoxSection) => {
  return (
    <div css={sx.contentRoot}>
      <div css={sx.box}>
        <Typography color="black" lineHeight={1} css={sx.year}>
          {year}
        </Typography>
      </div>
    </div>
  );
};
type ContentSection = {
  content: string[];
};

const ContentSection = ({ content }: ContentSection) => {
  return (
    <ul css={sx.ul}>
      {content.map((it, index) => (
        <li key={index}>
          <Typography
            lineHeight={"160%"}
            color={Color.LightWhite}
            css={sx.text}
          >
            {it}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

const DottedLine = () => <div css={sx.line}></div>;
