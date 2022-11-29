import { Color } from "@/common/themes/Colors";
import { localeState } from "@/utils/recoil/locale.atom";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";

export const TextSection = () => {
  const { t } = useTranslation("project");
  const isEnglish = useRecoilValue(localeState);

  return (
    <div css={sx.textWrapper}>
      <Typography color={Color.LightWhite} css={sx.title}>
        Project Ailey
      </Typography>
      <Typography color={Color.LightWhite} css={sx.desc(isEnglish)}>
        {t("white1")}
        <span className="text-yellow">{t("yellow1")}</span>
        {t("white2")}
        <span className="text-blue">{t("blue1")}</span>
        {t("white3")}
      </Typography>
    </div>
  );
};

const sx = {
  textWrapper: css`
    position: absolute;
    top: 16.66vw;
    left: 9.16vw;
  `,
  title: css`
    font-size: 4.44vw;
    line-height: 130%;
    font-family: "Bebas Neue";
    margin-bottom: 3.47vw;
  `,
  desc: (isEnglish: boolean) => css`
    width: 67.77vw;
    font-size: ${isEnglish ? "1.38vw" : "1.66vw"};
    line-height: ${isEnglish ? "160%" : "200%"};
    word-break: keep-all;
    white-space: pre-wrap;
  `,
};
