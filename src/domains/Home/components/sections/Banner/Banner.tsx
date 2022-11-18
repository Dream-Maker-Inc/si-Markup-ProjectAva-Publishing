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
  `,
  videoFrame: css`
    width: 100%;
    position: relative;
    z-index: 0;
    aspect-ratio: 1/0.562;
    overflow: hidden;
    background-color: black;
  `,
  video: css`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    object-fit: cover;
    z-index: 1;
  `,
};
