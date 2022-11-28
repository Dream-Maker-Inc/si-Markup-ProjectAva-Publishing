import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { LineModels } from "../../models/line.model";

export const MobileLine = () => {
  const firstText = LineModels.mobile[0];
  const secondText = LineModels.mobile[1];

  let firstList = [];
  let secondList = [];

  for (let i = 0; i < firstText.length; i++) {
    firstList.push(firstText.charAt(i));
  }

  for (let i = 0; i < secondText.length; i++) {
    secondList.push(secondText.charAt(i));
  }

  return (
    <div css={sx.root}>
      <div css={sx.top}>
        {firstList.map((it, index) => (
          <Typography
            key={index}
            fontFamily={"Porter Sans Block"}
            css={sx.text}
          >
            {it === " " ? "\u00A0" : it}
          </Typography>
        ))}
      </div>
      <div css={sx.bottom}>
        {secondList.map((it, index) => (
          <Typography
            key={index}
            fontFamily={"Porter Sans Block"}
            css={sx.text}
          >
            {it === " " ? "\u00A0" : it}
          </Typography>
        ))}
      </div>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 7px 3px 7px;
    @media ${MediaQueries.xs} {
      padding: 3px 5px 2px 5px;
    }
  `,
  text: css`
    font-size: 4.3vw;
    line-height: 120%;
  `,

  top: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  bottom: css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
