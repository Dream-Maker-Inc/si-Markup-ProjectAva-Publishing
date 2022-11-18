import { css } from "@emotion/react";
import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { LaptopHeader } from "./elements/LaptopHeader";
import { MobileHeader } from "./elements/MobileHeader";

export const Header = () => {
  const { isMobile } = useCustomMediaQuery();
  return (
    <header css={sx.header}>
      {isMobile ? <MobileHeader /> : <LaptopHeader />}
    </header>
  );
};

const sx = {
  header: css`
    width: 100%;
  `,
};
