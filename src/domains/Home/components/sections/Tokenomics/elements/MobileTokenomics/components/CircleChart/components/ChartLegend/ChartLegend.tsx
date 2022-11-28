import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { LegendModels, LegendType } from "./models/legend.model";

export const ChartLegend = () => {
  return (
    <div css={sx.root}>
      {LegendModels.map((it, index) => (
        <ChartLegendItem key={index} color={it.color} text={it.text} />
      ))}
    </div>
  );
};

const ChartLegendItem = ({ color, text }: LegendType) => {
  return (
    <div css={sx.itemRoot}>
      <div css={sx.colorBox(color)}></div>
      <Typography color={Color.Primary} lineHeight={"160^"} css={sx.legend}>
        {text}
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.77vw;
  `,
  itemRoot: css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 3.88vw;
  `,
  colorBox: (color: string) => css`
    width: 3.88vw;
    aspect-ratio: 1;
    background-color: ${color};
  `,
  legend: css`
    font-size: 3.61vw;
  `,
};
