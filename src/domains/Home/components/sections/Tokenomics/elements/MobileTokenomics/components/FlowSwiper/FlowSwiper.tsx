import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { FlowSlide } from "./elements/Slide";
import { FlowSlideModels } from "./models/flow.model";

export const FlowSwiper = () => {
  return (
    <div css={sx.root}>
      <Swiper
        slidesPerView={1}
        initialSlide={0}
        grabCursor
        pagination={{ clickable: true }}
        loop={false}
        modules={[Autoplay, Pagination]}
        css={sx.swiper}
      >
        {FlowSlideModels.map((it, index) => (
          <SwiperSlide key={index}>
            <FlowSlide
              key={index}
              slideTitle={it.slideTitle}
              slideTextList={it.slideTextList}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
  `,
  swiper: css`
    width: 100%;
    aspect-ratio: 1/1.25;
  `,
  container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.66vw;
  `,
};
