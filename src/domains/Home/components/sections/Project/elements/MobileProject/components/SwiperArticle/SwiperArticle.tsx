import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Typography } from "@mui/material";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AileyCards } from "../../../models/card.model";
import { SwiperHeader } from "./components/SwiperHeader";

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
      <div css={sx.swiper}>
        <Swiper
          spaceBetween={40}
          slidesPerView={2.6}
          initialSlide={0}
          grabCursor
          loop={false}
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {AileyCards.map((it, index) => {
            if (index < 5) {
              return (
                <SwiperSlide key={index} className="custom-swiper-slide">
                  <div css={sx.card}>
                    <div className="card-image" css={sx.cardImage}>
                      <Image fill src={it.hoverImage} alt="image" />
                    </div>
                    <div className="card-content" css={sx.cardContainer}>
                      <Typography
                        className="text-green"
                        fontWeight={500}
                        css={sx.cardTitle}
                      >
                        {it.title}
                      </Typography>
                      <Typography
                        fontWeight={400}
                        color="white"
                        css={sx.cardDesc}
                      >
                        {it.desc}
                      </Typography>
                    </div>
                    <div css={sx.filter}></div>
                  </div>
                </SwiperSlide>
              );
            } else {
              return (
                <SwiperSlide key={index} className="custom-swiper-slide">
                  <div css={sx.emptyCard}>
                    <div className="card-image" css={sx.cardImage}></div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
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
        ) : count === 5 ? (
          <div css={sx.btn} onClick={onCountMinus}>
            <Image
              fill
              src={"/assets/project/swiper/icon/ic-prev.svg"}
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

        {count <= 3 ? (
          <div css={sx.btn} onClick={onSlideNext}>
            <Image
              fill
              src={"/assets/project/swiper/icon/ic-next.svg"}
              alt="next"
            />
          </div>
        ) : count === 4 ? (
          <div css={sx.btn} onClick={onCountPlus}>
            <Image
              fill
              src={"/assets/project/swiper/icon/ic-next.svg"}
              alt="next"
            />
          </div>
        ) : (
          <div css={sx.btnInactive}>
            <Image
              fill
              src={"/assets/project/swiper/icon/ic-next-inactive.svg"}
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
    width: 100%;
  `,

  swiper: css``,
  cardImage: css`
    display: none;
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 2;
  `,
  card: css`
    width: 33.05vw;
    aspect-ratio: 1/0.529;
    background-color: rgba(255, 255, 255, 0.05);
    position: relative;
    z-index: 1;

    &:hover {
      .card-image {
        display: block;
      }

      .card-content {
        display: none;
      }
    }
  `,

  emptyCard: css`
    width: 33.05vw;
    aspect-ratio: 1/0.529;
    background-color: transparent;
    position: relative;
    z-index: 1;
  `,

  cardContainer: css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    padding: 7.5% 10.5%;
  `,

  filter: css`
    width: 100%;
    height: 100%;
    backdrop-filter: blur(15px);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  `,

  cardTitle: css`
    font-size: 36px;
    line-height: 180%;
    margin-bottom: 10px;
  `,
  cardDesc: css`
    font-size: 16px;
    line-height: 180%;
  `,

  btnWrapper: css`
    display: flex;
    align-items: center;
    gap: 2.91vw;
  `,
  btn: css`
    position: relative;
    width: 1.94vw;
    aspect-ratio: 1;
    cursor: pointer;
  `,

  btnInactive: css`
    position: relative;
    width: 1.94vw;
    aspect-ratio: 1;
  `,
};
