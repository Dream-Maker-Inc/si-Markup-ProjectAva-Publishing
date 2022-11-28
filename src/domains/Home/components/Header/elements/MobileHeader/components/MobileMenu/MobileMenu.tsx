import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { LanguageButton } from "../../../../components/LanguageButton";
import { menu } from "../../../../models/menu.model";
import { SnsButtons } from "../SnsButtons";

type MobileMenuProps = {
  isMenuOpen: boolean;
};

export const MobileMenu = ({ isMenuOpen }: MobileMenuProps) => {
  return (
    <nav css={sx.nav(isMenuOpen)}>
      <div css={sx.container}>
        <Image fill src={"/assets/header/img-mesh.png"} alt="mesh" />
        <ul css={sx.ul}>
          {menu.map((it, index) => (
            <li key={index} css={sx.li}>
              <Link href={it.href}>
                <Typography fontSize="6.66vw" lineHeight={1} color="white">
                  {it.item}
                </Typography>
              </Link>
            </li>
          ))}
          <LanguageButton isMenuOpen={true} />
        </ul>
        <SnsButtons />
      </div>
    </nav>
  );
};

const sx = {
  nav: (isMenuOpen: boolean) => css`
    display: ${isMenuOpen ? "block" : "none"};
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    background-color: black;
    z-index: 3;
  `,
  container: css`
    width: 100%;
    height: 100%;
    position: relative;
  `,
  ul: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 25vw 5.55vw;
  `,
  li: css`
    width: 100%;
    height: 16.66vw;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 5.55vw;
    transition: 0.3s;
    cursor: pointer;
    z-index: 10;
    p {
      font-family: "Bebas neue";
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  `,
};
