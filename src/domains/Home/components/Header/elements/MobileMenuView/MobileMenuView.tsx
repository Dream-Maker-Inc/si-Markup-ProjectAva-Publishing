import { css } from "@emotion/react";
import { Dialog, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { LanguageButton } from "../../components/LanguageButton";
import { menu } from "../../models/menu.model";
import { Logo } from "../MobileHeader/components/Logo";
import { MobileIconButton } from "../MobileHeader/components/MobileIconButton";
import { SnsButtons } from "../MobileHeader/components/SnsButtons";

type MobileMenuViewProps = {
  open: boolean;
  onClose: () => void;
};

export const MobileMenuView = ({ open, onClose }: MobileMenuViewProps) => {
  return (
    <Dialog open={open} fullScreen>
      <div css={sx.root}>
        <Image fill src={"/assets/header/img-mesh.png"} alt="mesh" />
        <div css={sx.top}>
          <Logo />
          <MobileIconButton isMenuOpen={open} onClick={onClose} />
        </div>
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
    </Dialog>
  );
};

const sx = {
  root: css`
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: relative;
  `,
  top: css`
    width: 100%;
    aspect-ratio: 1/0.166;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 6.66vw;
    padding-right: 5.55vw;
  `,
  ul: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8.33vw 5.55vw 0 5.55vw;
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
