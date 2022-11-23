import { css } from "@emotion/react";
import { RoadmapContent } from "./components/RoadmapContent";
import { RoadmapTitle } from "./components/RoadmapTitle";

export const Roadmap = () => {
  return (
    <div css={sx.root}>
      <RoadmapTitle />
      <RoadmapContent />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    /* aspect-ratio: 1/0.689; */
    background-color: black;
    text-align: center;
  `,
};
