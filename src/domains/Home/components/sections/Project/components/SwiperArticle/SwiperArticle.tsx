import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";
import { useState } from "react";
import { Button, Typography } from "@mui/material";

import "swiper/css/navigation";
import "swiper/css/pagination";
import { AileyCards } from "./model/card.model";
import { Color } from "@/common/themes/Colors";

export const SwiperArticle = () => {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const slideNext = () => swiper?.slideNext();
  const slidePrev = () => swiper?.slidePrev();
  return (
    <div css={sx.root}>
      <div css={sx.container}>
        <div css={sx.swiperHeader}>
          <Typography
            fontWeight={500}
            color={Color.PrimaryGrey}
            css={sx.cardCountText}
          >
            <span className="text-white">01</span> / 05
          </Typography>

          <div css={sx.btnWrapper}>
            <div css={sx.btn}>
              <Image
                fill
                src={"/assets/project/swiper/icon/ic-prev-inactive.svg"}
                alt="previous"
                css={sx.inactive}
              />
              <Image
                fill
                src={"/assets/project/swiper/icon/ic-prev.svg"}
                alt="previous"
                css={sx.active}
              />
            </div>
            <div css={sx.btn}>
              <Image
                fill
                src={"/assets/project/swiper/icon/ic-next-inactive.svg"}
                alt="next"
                css={sx.inactive}
              />
              <Image
                fill
                src={"/assets/project/swiper/icon/ic-next.svg"}
                alt="next"
                css={sx.active}
              />
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={40}
          slidesPerView={2.6}
          initialSlide={0}
          grabCursor
          pagination={{ clickable: true }}
          loop={false}
          // autoplay={{
          //   delay: 3000,
          // }}
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => setSwiper(swiper)}
        >
          {AileyCards.map((it, index) => (
            <SwiperSlide key={index}>
              <div css={sx.card}>
                <div css={sx.cardContainer}>
                  <Typography
                    className="text-green"
                    fontWeight={500}
                    css={sx.cardTitle}
                  >
                    {it.title}
                  </Typography>
                  <Typography fontWeight={400} color="white" css={sx.cardDesc}>
                    {it.desc}
                  </Typography>
                </div>
                <div css={sx.filter}></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    position: absolute;
    width: 100%;
    bottom: 23.5vw;
  `,
  container: css`
    width: 100%;
    padding-left: 9.16vw;
  `,

  card: css`
    width: 33.05vw;
    aspect-ratio: 1/0.529;
    background-color: rgba(255, 255, 255, 0.05);
    position: relative;
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

  swiperHeader: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 9.3vw;
    margin-bottom: 50px;
  `,

  cardCountText: css`
    font-size: 28px;
    line-height: 50.4px;
  `,

  btnWrapper: css`
    display: flex;
    gap: 2.91vw;
    align-self: flex-end;
  `,
  btn: css`
    position: relative;
    width: 1.94vw;
    aspect-ratio: 1;
  `,

  inactive: css`
    display: none;
  `,
  active: css``,
};
