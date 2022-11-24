import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { FlowSlide } from "./elements/Slide";
import { FlowSlideModels } from "./models/flow.model";

export const FlowSwiper = () => {
  return (
    <div css={sx.root}>
      <Swiper
        slidesPerView={1}
        initialSlide={0}
        grabCursor
        loop={false}
        modules={[Autoplay]}
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
    aspect-ratio: 1/1.11;
  `,
  container: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.66vw;
  `,
};
