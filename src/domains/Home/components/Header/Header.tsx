import { css } from "@emotion/react";
import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { LaptopHeader } from "./elements/LaptopHeader";
import { MobileHeader } from "./elements/MobileHeader";
import { HideOnScroll } from "@/common/components/HideOnScroll";
import React, { useState } from "react";
import { MobileMenuView } from "./elements/MobileMenuView";

export const Header = () => {
  const { isMobile } = useCustomMediaQuery();
  return (
    <HideOnScroll>
      <header css={sx.header}>
        {isMobile ? <MobileHeaderWrapper /> : <LaptopHeader />}
      </header>
    </HideOnScroll>
  );
};

const sx = {
  header: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  `,
};

const MobileHeaderWrapper = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <React.Fragment>
      <MobileHeader open={menuOpen} onMenuClick={openMenu} />
      <MobileMenuView open={menuOpen} onClose={closeMenu} />
    </React.Fragment>
  );
};
