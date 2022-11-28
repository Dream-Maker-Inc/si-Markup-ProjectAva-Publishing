import { css } from "@emotion/react";
import { Button, Popover, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type LanguageButtonProps = {
  isMenuOpen?: boolean;
};

export const LanguageButton = ({ isMenuOpen = false }: LanguageButtonProps) => {
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
    <div css={sx.languageWrapper(isMenuOpen)}>
      <Button
        fullWidth
        variant="contained"
        css={sx.languageButton(isMenuOpen)}
        onClick={handleClick}
      >
        <Typography color="white" lineHeight={1} css={sx.text(isMenuOpen)}>
          EN
        </Typography>
        <div css={sx.arrow(isMenuOpen)}>
          {isMenuOpen ? (
            <Image fill src="/assets/header/ic-arrow-mobile.svg" alt="expand" />
          ) : (
            <Image fill src="/assets/header/ic-arrow.svg" alt="expand" />
          )}
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
  );
};

const sx = {
  languageWrapper: (isMenuOpen: boolean) => css`
    width: ${isMenuOpen ? "28.61vw" : "7.15vw"};
    aspect-ratio: 1/0.446;
    margin-top: ${isMenuOpen ? "5.55vw" : "0vw"};
  `,
  languageButton: (isMenuOpen: boolean) => css`
    width: 100%;
    height: 100%;
    padding: unset;
    min-height: unset;
    background-color: rgba(255, 255, 255, 0.2);
    border: 1px solid white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: ${isMenuOpen ? "3.61vw" : "0.95vw"};
  `,
  arrow: (isMenuOpen: boolean) => css`
    position: relative;
    width: ${isMenuOpen ? "5.55vw" : "1vw"};
    aspect-ratio: ${isMenuOpen ? "1/1" : "1/0.526"};
    margin-top: ${isMenuOpen ? "0px" : "-3px"};
  `,

  text: (isMenuOpen: boolean) => css`
    font-size: ${isMenuOpen ? "4.44vw" : "1.11vw"};
  `,
};
