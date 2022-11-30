import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Typography } from "@mui/material";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Color } from "@/common/themes/Colors";
import { useTranslation } from "react-i18next";
import { ProjectCardType } from "@/types/common.type";

export const SwiperArticle = () => {
  const { t } = useTranslation("project");
  const cards: ProjectCardType[] = t("cards", { returnObjects: true });

  const [swiper, setSwiper] = useState<SwiperCore>();
  const slideNext = () => swiper?.slideNext();
  const slidePrev = () => swiper?.slidePrev();
  const [activeIndex, setActiveIndex] = useState(1);

  const onSlideNext = () => {
    slideNext();
  };

  const onSlidePrev = () => {
    slidePrev();
  };

  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.swiperHeader}>
          <Typography
            fontWeight={500}
            color={Color.PrimaryGrey}
            css={sx.cardCountText}
          >
            <span className="text-white">0{activeIndex}</span> / 05
          </Typography>
          <div css={sx.btnWrapper}>
            {activeIndex === 1 ? (
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

            {activeIndex <= 3 ? (
              <div css={sx.btn} onClick={onSlideNext}>
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
        <div css={sx.swiper}>
          <Swiper
            spaceBetween={40}
            slidesPerView={2.6}
            initialSlide={0}
            grabCursor
            modules={[Autoplay]}
            allowSlideNext={activeIndex < 4 ? true : false}
            onSlideChange={(e) => {
              setActiveIndex(e.activeIndex + 1);
            }}
            onSwiper={(swiper) => {
              setSwiper(swiper);
            }}
          >
            {cards.map((it, index) => {
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
      </div>
    </div>
  );
};

const sx = {
  root: css`
    position: absolute;
    width: 100%;
    bottom: 24.8vw;
  `,
  container: css`
    width: 100%;
    padding-left: 9.16vw;
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
    font-size: 2.5vw;
    line-height: 180%;
    margin-bottom: 10px;
  `,
  cardDesc: css`
    width: 26.11vw;
    font-size: 1.11vw;
    line-height: 180%;
  `,
  swiperHeader: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 9.3vw;
    margin-bottom: 50px;
  `,
  cardCountText: css`
    font-size: 1.95vw;
    height: 3.47vw;
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
