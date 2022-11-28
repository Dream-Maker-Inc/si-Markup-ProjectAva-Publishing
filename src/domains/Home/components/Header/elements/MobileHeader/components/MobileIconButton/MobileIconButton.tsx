import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { IconButton } from "@mui/material";
import Image from "next/image";

type MobileIconButtonProps = {
  isMenuOpen: boolean;
  onClick: () => void;
};

export const MobileIconButton = ({
  isMenuOpen,
  onClick,
}: MobileIconButtonProps) => {
  return (
    <IconButton onClick={onClick} css={sx.iconButton}>
      <div css={sx.menu}>
        <div css={sx.icon}>
          {isMenuOpen ? (
            <Image fill src={"/assets/header/ic-close.svg"} alt="menu" />
          ) : (
            <Image fill src={"/assets/header/ic-menu.svg"} alt="menu" />
          )}
        </div>
      </div>
    </IconButton>
  );
};

const sx = {
  menu: css`
    width: 8.88vw;
    aspect-ratio: 1;
    background-color: rgba(255, 255, 255, 0.2);
    border: 0.5px solid ${Color.Primary};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  `,
  iconButton: css`
    z-index: 10;
  `,
  icon: css`
    position: relative;
    width: 55.55%;
    aspect-ratio: 1;
  `,
};
