import { useCustomMediaQuery } from "@/common/themes/useCustomQueries";
import { css } from "@emotion/react";
import { Button, Popover, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { menu } from "../../models/menu.model";

export const LaptopHeader = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div css={sx.root}>
      <div css={sx.logo}>
        <Image fill src={"/assets/logo.svg"} alt="logo" />
      </div>
      <nav css={sx.nav}>
        <ul css={sx.menu}>
          {menu.map((it, index) => (
            <Link key={index} href={it.href}>
              <Typography
                component={"li"}
                fontSize="16px"
                lineHeight={1}
                fontWeight={500}
                color="white"
              >
                {it.item}
              </Typography>
            </Link>
          ))}
        </ul>
        <div css={sx.languageWrapper}>
          <Button
            fullWidth
            variant="contained"
            css={sx.languageButton}
            onClick={handleClick}
          >
            <Typography color="white" lineHeight={1}>
              EN
            </Typography>
            <div css={sx.arrow}>
              <Image fill src="/assets/header/ic-arrow.svg" alt="expand" />
            </div>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
          </Popover>
        </div>
      </nav>
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

  logo: css`
    position: relative;
    width: 7.81%;
    aspect-ratio: 1/0.38;
  `,
  nav: css`
    display: flex;
    align-items: center;
    gap: 2.8vw;
  `,
  menu: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2.8vw;
  `,
  languageWrapper: css`
    width: 7.15vw;
    aspect-ratio: 1/0.446;
  `,

  languageButton: css`
    height: 100%;
    padding: unset;
    min-height: unset;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid white;
    border-radius: 50px;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 0.95vw;
  `,

  arrow: css`
    position: relative;
    width: 1vw;
    aspect-ratio: 1/0.526;
    margin-top: -3px;
  `,
};
