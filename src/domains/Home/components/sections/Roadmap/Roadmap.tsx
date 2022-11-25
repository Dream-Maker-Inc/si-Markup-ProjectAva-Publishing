import { css } from "@emotion/react";
import { RoadmapContent } from "./components/RoadmapContent";
import { RoadmapTitle } from "./components/RoadmapTitle";

export const Roadmap = () => {
  return (
    <div id="roadmap" css={sx.root}>
      <RoadmapTitle />
      <RoadmapContent />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    padding-top: 22.22vw;
    background-color: black;
    text-align: center;
  `,
};
