import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import { useState } from "react";
import { Logo } from "./components/Logo";
import { MobileIconButton } from "./components/MobileIconButton";
import { MobileMenu } from "./components/MobileMenu";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const onMenuChange = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div css={sx.root}>
      <Logo />
      <MobileIconButton onClick={onMenuChange} isMenuOpen={isMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} />
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
};
