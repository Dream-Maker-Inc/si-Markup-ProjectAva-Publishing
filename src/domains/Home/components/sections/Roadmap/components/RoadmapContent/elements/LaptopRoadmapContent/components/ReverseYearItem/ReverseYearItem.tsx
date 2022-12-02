import { Color } from "@/common/themes/Colors";
import { RoadmapCardType } from "@/types/common.type";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import parse from "html-react-parser";
import { useRecoilValue } from "recoil";
import { localeState } from "@/utils/recoil/locale.atom";

export const ReverseYearItem = ({ year, content }: RoadmapCardType) => {
  const isEnglish = useRecoilValue(localeState);
  return (
    <div css={sx.root}>
      <PolygonSection />
      <DottedLine />
      <ContentSection year={year} content={content} />
    </div>
  );
};

const sx = {
  root: css`
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  polygon: css`
    position: relative;
    width: 3.47vw;
    aspect-ratio: 1;
  `,
  dottedLine: css`
    position: relative;
    width: 0.069vw;
    aspect-ratio: 1/74;
  `,
  content: css`
    width: 26.11vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.38vw;
  `,
  box: css`
    width: 12.22vw;
    aspect-ratio: 1/0.363;
    background-color: ${Color.LightGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.08vw;
  `,
  ul: css`
    text-align: center;
  `,
  text: (isEnglish: boolean) => css`
    font-size: 1.25vw;
    font-family: ${isEnglish ? "IBM Plex Mono" : "Heiti SC"};
    &::before {
      content: "· ";
    }
  `,
  year: css`
    font-family: "Bebas neue";
    font-size: 2.5vw;
    line-height: 1;
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
};

const ContentSection = ({ year, content }: RoadmapCardType) => {
  const isEnglish = useRecoilValue(localeState);
  return (
    <div css={sx.content}>
      <div css={sx.box}>
        <Typography color="black" css={sx.year}>
          {year}
        </Typography>
      </div>
      <ul css={sx.ul}>
        {content.map((it, index) => (
          <li key={index}>
            <Typography
              lineHeight={"160%"}
              color={Color.LightWhite}
              css={sx.text(isEnglish)}
            >
              {parse(it)}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PolygonSection = () => {
  return (
    <div css={sx.polygon}>
      <div css={sx.imageBackground}></div>
      <Image fill src={"/assets/roadmap/ic-polygon.svg"} alt="ploygon" />
    </div>
  );
};

const DottedLine = () => {
  return (
    <div css={sx.dottedLine}>
      <Image fill src={"/assets/roadmap/ic-dotted-line.png"} alt="" />
    </div>
  );
};
