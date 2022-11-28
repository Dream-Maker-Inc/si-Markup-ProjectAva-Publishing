import { css } from "@emotion/react";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

export const LaptopHeader = () => {
  return (
    <div css={sx.root}>
      <Logo />
      <Menu />
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    aspect-ratio: 1/0.0833;
    padding: 0 5.55%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};
