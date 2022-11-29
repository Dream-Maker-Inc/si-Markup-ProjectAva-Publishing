import { TokenomicsCardType } from "@/type/common.type";
import { css } from "@emotion/react";
import { useTranslation } from "react-i18next";
import { FlowSlide } from "./elements/Slide";

export const FlowSwiper = () => {
  const { t } = useTranslation("tokenomics");
  const cards: TokenomicsCardType[] = t("cards", { returnObjects: true });
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        {cards.map((it, index) => (
          <FlowSlide
            key={index}
            slideTitle={it.slideTitle}
            slideTextList={it.slideTextList}
          />
        ))}
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    padding: 0 9.16vw;
  `,
  container: css`
    width: 100%;
    display: flex;
    gap: 1.66vw;
  `,
};
