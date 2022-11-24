import { css } from "@emotion/react";
import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { LaptopHeader } from "./elements/LaptopHeader";
import { MobileHeader } from "./elements/MobileHeader";
import { HideOnScroll } from "@/common/components/HideOnScroll";

export const Header = () => {
  const { isMobile } = useCustomMediaQuery();
  return (
    <HideOnScroll>
      <header css={sx.header}>
        {isMobile ? <MobileHeader /> : <LaptopHeader />}
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
