import { Color } from "@/common/themes/Colors";
import { TokenomicsCardType } from "@/type/common.type";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const FlowSlide = ({
  slideTitle,
  slideTextList,
}: TokenomicsCardType) => {
  return (
    <div css={sx.root}>
      <Typography
        color={Color.LightWhite}
        lineHeight={"160%"}
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
    gap: 3.33vw;
  `,
  title: css`
    font-size: 6.66vw;
    margin-bottom: 5.55%;
    font-family: "Bebas neue";
  `,
  box: css`
    width: 100%;
    aspect-ratio: 1/0.162;
    background-color: ${Color.DarkGrey};
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  boxText: css`
    font-size: 3.33vw;
    white-space: pre-wrap;
  `,
};

type BoxProps = {
  text: string;
};

const Box = ({ text }: BoxProps) => {
  return (
    <div css={sx.box}>
      <Typography color={Color.Primary} lineHeight={1} css={sx.boxText}>
        {text}
      </Typography>
    </div>
  );
};
