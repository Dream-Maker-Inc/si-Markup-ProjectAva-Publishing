import { css } from "@emotion/react";
import { CopyrightSection } from "./components/CopyrightSection";
import { LinkSection } from "./components/LinkSection";

export const Footer = () => {
  return (
    <div css={sx.root}>
      <LinkSection />
      <CopyrightSection />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
  `,
};
