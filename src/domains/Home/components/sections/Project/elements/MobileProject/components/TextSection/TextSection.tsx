import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const TextSection = () => {
  const { t } = useTranslation("project");

  return (
    <div css={sx.root}>
      <Typography color={Color.LightWhite} css={sx.title}>
        Project Ailey
      </Typography>
      <Typography color={Color.LightWhite} css={sx.desc}>
        {t("mobile-white1")}
        <span className="text-yellow">{t("mobile-yellow1")}</span>
        {t("mobile-white2")}
        <span className="text-blue">{t("mobile-blue1")}</span>
        {t("mobile-white3")}
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
  `,
  desc: css`
    width: 100%;
    aspect-ratio: 1/0.393;
    font-size: 3.88vw;
    line-height: 170%;
    white-space: pre-wrap;
  `,
};
