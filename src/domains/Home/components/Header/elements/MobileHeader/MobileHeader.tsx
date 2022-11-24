import { Color } from "@/common/themes/Colors";
import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import Image from "next/image";

export const MobileHeader = () => {
  return (
    <div css={sx.root}>
      <div css={sx.logo}>
        <Image fill src={"/assets/logo-mobile.svg"} alt="logo" />
      </div>
      <IconButton onClick={() => null}>
        <div css={sx.menu}>
          <div css={sx.icon}>
            <Image fill src={"/assets/header/ic-menu.svg"} alt="menu" />
          </div>
        </div>
      </IconButton>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    aspect-ratio: 1/0.166;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 24px;
    padding-right: 20px;

    @media ${MediaQueries.xs} {
      height: 60px;
    }
  `,
  menu: css`
    width: 8.88vw;
    aspect-ratio: 1;
    background-color: rgba(255, 255, 255, 0.2);
    border: 0.5px solid ${Color.Primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 1;
  `,
  icon: css`
    position: relative;
    width: 55.55%;
    aspect-ratio: 1;
    z-index: 2;
  `,

  logo: css`
    position: relative;
    width: 20.55vw;
    aspect-ratio: 1/ 0.391;
  `,
};
