import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { Logo } from "./components/Logo";
import { MobileIconButton } from "./components/MobileIconButton";

type MobileHeaderProps = {
  onMenuClick: () => void;
  open: boolean;
};

export const MobileHeader = ({ open, onMenuClick }: MobileHeaderProps) => {
  return (
    <div css={sx.root}>
      <Logo />
      <MobileIconButton isMenuOpen={open} onClick={onMenuClick} />
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
    padding-left: 6.66vw;
    padding-right: 5.55vw;
  `,
};
