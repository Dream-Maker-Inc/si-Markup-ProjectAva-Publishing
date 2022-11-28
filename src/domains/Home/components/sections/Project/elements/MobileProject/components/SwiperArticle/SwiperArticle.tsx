import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Typography } from "@mui/material";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperHeader } from "./components/SwiperHeader";
import { Color } from "@/common/themes/Colors";
import { AileyCards } from "../../../models/card.model";

export const SwiperArticle = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const slideNext = () => swiper?.slideNext();
  const slidePrev = () => swiper?.slidePrev();
  const [count, setCount] = useState(1);

  const onCountPlus = () => {
    setCount(count + 1);
  };
  const onCountMinus = () => {
    setCount(count - 1);
  };

  const onSlideNext = () => {
    onCountPlus();
    slideNext();
  };

  const onSlidePrev = () => {
    slidePrev();
    onCountMinus();
  };

  return (
    <div css={sx.root}>
      <SwiperHeader count={count} />
      <div>
        <Swiper
          slidesPerView={1}
          initialSlide={0}
          grabCursor
          loop={false}
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {AileyCards.map((it, index) => (
            <SwiperSlide key={index}>
              <div css={sx.cardContainer}>
                <div css={sx.card}>
                  <div css={sx.filter}></div>
                  <div css={sx.cardTextContainer}>
                    <Typography color={Color.LightGreen} css={sx.cardTitle}>
                      {it.title}
                    </Typography>
                    <Typography color={Color.LightWhite} css={sx.cardDesc}>
                      {it.desc}
                    </Typography>
                  </div>
                </div>
                <div css={sx.card}>
                  <Image fill src={it.hoverImage} alt="img" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div css={sx.btnWrapper}>
        {count === 1 ? (
          <div css={sx.btnInactive}>
            <Image
              fill
              src={"/assets/project/swiper/icon/ic-prev-inactive.svg"}
              alt="previous"
            />
          </div>
        ) : (
          <div css={sx.btn} onClick={onSlidePrev}>
            <Image
              fill
              src={"/assets/project/swiper/icon/ic-prev.svg"}
              alt="previous"
            />
          </div>
        )}

        {count === 5 ? (
          <div css={sx.btnInactive}>
            <Image
              fill
              src={"/assets/project/swiper/icon/ic-next-inactive.svg"}
              alt="next"
            />
          </div>
        ) : (
          <div css={sx.btn} onClick={onSlideNext}>
            <Image
              fill
              src={"/assets/project/swiper/icon/ic-next.svg"}
              alt="next"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const sx = {
  root: css`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 33.33vw;
    padding: 0 5.55vw;
  `,

  cardContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5.55vw;
  `,
  card: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/0.55;
  `,

  filter: css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    z-index: 0;
  `,
  cardTextContainer: css`
    width: 100%;
    height: 100%;
    padding: 4.44vw 8.33vw;
    position: relative;
    z-index: 1;
  `,
  cardTitle: css`
    font-size: 5.55vw;
    line-height: 180%;
  `,
  cardDesc: css`
    width: 66.66vw;
    font-size: 3.61vw;
    line-height: 160%;
  `,

  btnWrapper: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11.66vw;
    margin-top: 11.11vw;
  `,
  btn: css`
    position: relative;
    width: 6.66vw;
    aspect-ratio: 1;
    cursor: pointer;
  `,

  btnInactive: css`
    position: relative;
    width: 6.66vw;
    aspect-ratio: 1;
  `,
};
