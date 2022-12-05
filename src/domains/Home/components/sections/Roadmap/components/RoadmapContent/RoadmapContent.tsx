import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { css } from "@emotion/react";
import { LaptopRoadmapContent } from "./elements/LaptopRoadmapContent";
import { MobileRoadmapContent } from "./elements/MobileRoadmapContent";

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
