import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { css } from "@emotion/react";
import { Dialog, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
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
  const { isMobile } = useCustomMediaQuery();
  const router = useRouter();

  const onLinkClick = (href: string) => {
    router.push(href);
    onClose();
  };
  return (
    <Dialog open={open} fullScreen>
      <div css={sx.root}>
        {isMobile ? (
          <Image fill src={"/assets/header/img-mesh-mobile.png"} alt="mesh" />
        ) : (
          <Image fill src={"/assets/header/img-mesh.png"} alt="mesh" />
        )}

        <div css={sx.top}>
          <Logo />
          <MobileIconButton isMenuOpen={open} onClick={onClose} />
        </div>
        <ul css={sx.ul}>
          {menu.map((it, index) => (
            <li key={index} css={sx.li} onClick={() => onLinkClick(it.href)}>
              <Typography fontSize="6.66vw" lineHeight={1} color="white">
                {it.item}
              </Typography>
            </li>
          ))}
          <LanguageButton isMenuOpen={true} onClose={onClose} />
        </ul>
        <SnsButtons />
      </div>
    </Dialog>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100%;
    background-color: black;
    position: relative;
  `,

  imageWrapper: css`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  image: css`
    position: relative;
    /* width: 252.22vw;
    aspect-ratio: 1/0.704; */
    width: 908px;
    height: 640px;
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
