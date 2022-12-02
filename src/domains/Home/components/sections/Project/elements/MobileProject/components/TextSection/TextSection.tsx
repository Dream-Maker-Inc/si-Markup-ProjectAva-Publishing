import { Color } from "@/common/themes/Colors";
import { localeState } from "@/utils/recoil/locale.atom";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import parse from "html-react-parser";

export const TextSection = () => {
  const isEnglish = useRecoilValue(localeState);
  const { t } = useTranslation("project");

  return (
    <div css={sx.root}>
      <Typography color={Color.LightWhite} css={sx.title}>
        Project Ailey
      </Typography>
      <Typography color={Color.LightWhite} css={sx.desc(isEnglish)}>
        {parse(t("mobile-desc"))}
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    position: absolute;
    top: 19.44vw;
    left: 0;
    padding: 0 5.55vw;
  `,
  title: css`
    font-size: 10vw;
    line-height: 130%;
    font-family: "Bebas Neue";
    margin-bottom: 11.11vw;
    letter-spacing: -0.013vw;
  `,
  desc: (isEnglish: boolean) => css`
    width: 100%;
    aspect-ratio: 1/0.393;
    font-size: 3.88vw;
    line-height: ${isEnglish ? "160%" : "180%"};
    white-space: pre-wrap;
    font-family: ${isEnglish ? "IBM Plex Mono" : "Heiti SC"};
  `,
};
