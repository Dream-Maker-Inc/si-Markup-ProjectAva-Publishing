import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { localeState } from "@/utils/recoil/locale.atom";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";

export const WhitePaper = () => {
  const { isMobile } = useCustomMediaQuery();

  const { t } = useTranslation("whitepaper");
  const isEnglish = useRecoilValue(localeState);

  return (
    <div css={sx.root}>
      {isMobile ? (
        <div css={sx.imageWrapper}>
          <div css={sx.image}>
            <Image fill src="/assets/whitepaper/bg-mesh.png" alt="background" />
          </div>
        </div>
      ) : (
        <Image fill src="/assets/whitepaper/bg-mesh.png" alt="background" />
      )}

      <div css={sx.content(isEnglish)}>
        <Typography
          fontWeight={400}
          color={Color.LightPink}
          textAlign="center"
          css={sx.mainText(isEnglish)}
        >
          {t("main")}
        </Typography>
        <Typography
          color={Color.LightWhite}
          textAlign="center"
          css={sx.mainDesc(isEnglish)}
        >
          {t("white1")}
          <span className="text-green">{t("green1")}</span>
          {t("white2")}
          <span className="text-green">{t("green2")}</span>
          {t("white3")}
          <span className="text-blue">{t("blue1")}</span>
          {t("white4")}
        </Typography>
        <Button variant="contained" css={sx.button(isEnglish)}>
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
    overflow-x: hidden;

    @media ${MediaQueries.sm} {
      align-items: unset;
      aspect-ratio: 1/1.776;
    }
  `,
  imageWrapper: css`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  image: css`
    position: relative;
    width: 252.22vw;
    aspect-ratio: 1/0.704;
  `,
  content: (isEnglish: boolean) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;

    @media ${MediaQueries.sm} {
      padding-top: ${isEnglish ? "19.44vw" : "23.88vw"};
    }
  `,
  mainText: (isEnglish: boolean) => css`
    font-size: ${isEnglish ? "8.33vw" : "10.41vw"};
    line-height: 120%;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: ${isEnglish ? "Bebas Neue" : "XinYiGuanHeiTi"};
    word-break: keep-all;
    white-space: pre-wrap;
    letter-spacing: ${isEnglish ? "-0.01rem" : "0rem"};

    @media ${MediaQueries.sm} {
      font-size: ${isEnglish ? "13.88vw" : "16.66vw"};
      height: ${isEnglish ? "50vw" : "40vw"};
    }
  `,
  mainDesc: (isEnglish: boolean) => css`
    font-size: ${isEnglish ? "1.38vw" : "1.66vw"};
    line-height: 200%;
    margin-top: ${isEnglish ? "3.19vw" : "6.25vw"};
    letter-spacing: 0.2px;
    word-break: keep-all;
    white-space: pre-wrap;
    font-weight: ${isEnglish ? "400" : "500"};

    @media ${MediaQueries.sm} {
      font-size: 3.88vw;
      width: 77.77vw;
      line-height: 160%;
      margin-top: ${isEnglish ? "11.11%" : "22.22%"};
    }
  `,
  button: (isEnglish: boolean) => css`
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
      margin-top: ${isEnglish ? "16.66vw" : "28.88vw"};
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
