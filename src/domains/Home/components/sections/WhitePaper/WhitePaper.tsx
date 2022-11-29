import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import i18n from "@/utils/i18n/locales";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const WhitePaper = () => {
  const { t } = useTranslation("whitepaper");

  return (
    <div css={sx.root}>
      <Image fill src="/assets/whitepaper/bg-mesh.png" alt="background" />
      <div css={sx.content}>
        <Typography
          fontWeight={400}
          color={Color.LightPink}
          textAlign="center"
          css={sx.mainText(i18n.language)}
        >
          {t("main")}
        </Typography>
        <Typography
          fontWeight={500}
          color={Color.LightWhite}
          textAlign="center"
          css={sx.mainDesc(i18n.language)}
        >
          {t("white1")}
          <span className="text-green">{t("green1")}</span>
          {t("white2")}
          <span className="text-green">{t("green2")}</span>
          {t("white3")}
          <span className="text-blue">{t("blue1")}</span>
          {t("white4")}
        </Typography>
        <Button variant="contained" css={sx.button(i18n.language)}>
          <Typography color="black" fontWeight={500} css={sx.buttonText}>
            whitepaper
          </Typography>
          <div css={sx.buttonArrow}>
            <Image
              fill
              src="/assets/whitepaper/ic-button-arrow.svg"
              alt="next"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/0.704;
    background-color: ${Color.BgLightDark};
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${MediaQueries.sm} {
      aspect-ratio: 1/1.776;
    }
  `,
  content: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  mainText: (language: string) => css`
    font-size: ${language === "en-US" ? "8.33vw" : "10.41vw"};
    line-height: 120%;
    letter-spacing: -1px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: ${language === "en-US" ? "Bebas neue" : "XinYiGuanHeiTi"};
    word-break: keep-all;
    white-space: pre-wrap;

    @media ${MediaQueries.sm} {
      font-size: ${language === "en-US" ? "13.88vw" : "16.66vw"};
    }
  `,
  mainDesc: (language: string) => css`
    font-size: ${language === "en-US" ? "1.38vw" : "1.66vw"};
    line-height: 200%;
    margin-top: ${language === "en-US" ? "3.19vw" : "6.25vw"};
    letter-spacing: 0.2px;
    word-break: keep-all;
    white-space: pre-wrap;

    @media ${MediaQueries.sm} {
      font-size: 3.88vw;
      width: 77.77vw;
      line-height: 160%;
      margin-top: ${language === "en-US" ? "11.11%" : "22.22%"};
    }
  `,
  button: (language: string) => css`
    width: 17vw;
    aspect-ratio: 1/0.26;
    background-color: ${Color.LightBlue};
    border-radius: 0px;
    display: flex;
    align-items: center;
    gap: 5.2%;
    margin-top: 5.55%;

    &:hover {
      background-color: ${Color.LightBlue};
      opacity: 0.8;
      transition: 0.5s;
    }

    @media ${MediaQueries.sm} {
      width: 63.33vw;
      aspect-ratio: 1/0.228;
      margin-top: ${language === "en-US" ? "16.66vw" : "28.88vw"};
    }
  `,
  buttonText: css`
    font-size: 1.25vw;
    letter-spacing: 0.2px;
    @media ${MediaQueries.sm} {
      font-size: 4.44vw;
    }
  `,
  buttonArrow: css`
    position: relative;
    width: 9.75%;
    aspect-ratio: 1;
  `,
};
