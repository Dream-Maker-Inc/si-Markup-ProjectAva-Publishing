import { Color } from "@/common/themes/Colors";
import { TokenomicsCardType } from "@/types/common.type";
import { localeState } from "@/utils/recoil/locale.atom";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import parse from "html-react-parser";
import { useRecoilValue } from "recoil";

export const FlowSlide = ({
  slideTitle,
  slideTextList,
}: TokenomicsCardType) => {
  const isEnglish = useRecoilValue(localeState);
  return (
    <div css={sx.root}>
      <Typography
        color={Color.LightWhite}
        lineHeight={"130%"}
        textTransform="uppercase"
        css={sx.title}
      >
        {slideTitle}
      </Typography>
      <div css={sx.container}>
        {slideTextList.map((it, index) => (
          <Box key={index} text={it} />
        ))}
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.97vw;
  `,
  title: css`
    font-size: 2.5vw;
    margin-bottom: 6.95%;
    font-family: "Bebas neue";
    letter-spacing: 0px;
  `,
  box: css`
    width: 100%;
    aspect-ratio: 1/0.11;
    background-color: ${Color.DarkGrey};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  boxText: (isEnglish: boolean) => css`
    font-size: 1.25vw;
    white-space: pre-wrap;
    font-family: ${isEnglish ? "IBM Plex Mono" : "Heiti SC"};
  `,
};

type BoxProps = {
  text: string;
};

const Box = ({ text }: BoxProps) => {
  const isEnglish = useRecoilValue(localeState);
  return (
    <div css={sx.box}>
      <Typography
        color={Color.Primary}
        lineHeight={"160%"}
        css={sx.boxText(isEnglish)}
      >
        {parse(text)}
      </Typography>
    </div>
  );
};
