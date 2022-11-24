import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";

export const Banner = () => {
  return (
    <div css={sx.root}>
      <div css={sx.videoFrame}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          css={sx.video}
          src={"/assets/video/banner-video.mp4"}
        />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    padding-top: 8.33%;
    background-color: black;

    // mobile header height
    @media ${MediaQueries.sm} {
      padding-top: 16.6%;
    }
  `,
  videoFrame: css`
    width: 100%;
    position: relative;
    z-index: 0;
    aspect-ratio: 1/0.562;
    overflow: hidden;

    @media ${MediaQueries.sm} {
      min-height: 579px;
      aspect-ratio: 1/1.6;
    }
  `,
  video: css`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
    z-index: 1;

    // Ailey cetner align
    @media ${MediaQueries.sm} {
      width: 125%;
    }
  `,
};
