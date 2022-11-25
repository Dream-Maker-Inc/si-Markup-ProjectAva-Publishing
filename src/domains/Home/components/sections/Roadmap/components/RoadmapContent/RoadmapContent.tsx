import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { css } from "@emotion/react";
import { LaptopRoadmapContent } from "./\belements/LaptopRoadmapContent";
import { MobileRoadmapContent } from "./\belements/MobileRoadmapContent";

export const RoadmapContent = () => {
  const { isMobile } = useCustomMediaQuery();
  return (
    <div css={sx.root}>
      {isMobile ? <MobileRoadmapContent /> : <LaptopRoadmapContent />}
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
  `,
};
