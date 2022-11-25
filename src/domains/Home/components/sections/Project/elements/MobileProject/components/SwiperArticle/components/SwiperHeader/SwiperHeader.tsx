import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

type SwiperHeaderProps = {
  count: number;
};

export const SwiperHeader = ({ count }: SwiperHeaderProps) => {
  return (
    <div css={sx.swiperHeader}>
      <Typography
        fontWeight={500}
        color={Color.PrimaryGrey}
        css={sx.cardCountText}
      >
        <span className="text-white">0{count}</span> / 05
      </Typography>
    </div>
  );
};

const sx = {
  swiperHeader: css`
    width: 100%;
    margin-bottom: 5.55vw;
  `,
  cardCountText: css`
    font-size: 5.55vw;
    height: 10vw;
  `,
};
