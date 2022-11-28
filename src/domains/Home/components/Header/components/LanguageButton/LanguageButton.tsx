import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Button, Popover, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

type LanguageButtonProps = {
  isMenuOpen?: boolean;
};
enum LaunguageType {
  ENGLISH = "EN",
  CHINESE = "CN",
}
export const LanguageButton = ({ isMenuOpen = false }: LanguageButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isEnglish, setIsEnglish] = useState<LaunguageType>(
    LaunguageType.ENGLISH
  );

  const onEnglish = () => {
    setIsEnglish(LaunguageType.ENGLISH);
    setAnchorEl(null);
  };

  const onChinese = () => {
    setIsEnglish(LaunguageType.CHINESE);
    setAnchorEl(null);
  };

  return (
    <div css={sx.languageWrapper(isMenuOpen)}>
      <Button
        fullWidth
        variant="contained"
        css={sx.languageButton(open, isMenuOpen)}
        onClick={handleClick}
      >
        <Typography color="white" lineHeight={1} css={sx.text(isMenuOpen)}>
          {isEnglish}
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
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        css={sx.popover(isMenuOpen)}
      >
        <EnglishButton isMenuOpen={isMenuOpen} onClick={onEnglish} />
        <ChineseButton isMenuOpen={isMenuOpen} onClick={onChinese} />
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
  languageButton: (languageBoxOpen: boolean, isMenuOpen: boolean) => css`
    width: 100%;
    height: 100%;
    padding: unset;
    min-height: unset;
    background-color: ${languageBoxOpen
      ? Color.LightPink
      : "rgba(255, 255, 255, 0.2)"};
    border: ${languageBoxOpen
      ? `1px solid ${Color.LightPink}`
      : "1px solid white"};
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: ${isMenuOpen ? "3.61vw" : "0.95vw"};

    &:hover {
      background-color: ${Color.LightPink};
      border: 1px solid ${Color.LightPink};
      transition: 0.3s;
    }
  `,
  arrow: (isMenuOpen: boolean) => css`
    position: relative;
    width: ${isMenuOpen ? "5.55vw" : "1.66vw"};
    aspect-ratio: ${isMenuOpen ? "1/1" : "1"};
    margin-top: ${isMenuOpen ? "0px" : "0px"};
  `,

  text: (isMenuOpen: boolean) => css`
    font-size: ${isMenuOpen ? "4.44vw" : "1.25vw"};
  `,
  popover: (isMenuOpen: boolean) => css`
    & .MuiPaper-root {
      width: ${isMenuOpen ? "41.11vw" : "10.27vw"};
      aspect-ratio: 1/0.621;
      display: flex;
      flex-direction: column;
      color: unset;
      box-shadow: none;
      border-radius: 8px;
      border: none;
      background-color: ${Color.ModalBg};
      margin-top: ${isMenuOpen ? "2.22vw" : "0.55vw"};
    }
  `,

  box: css`
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      background-color: #6f6f6f;
      transition: 0.3s;
    }
  `,
  wrapper: (isMenuOpen: boolean) => css`
    display: flex;
    align-items: center;
    gap: ${isMenuOpen ? "2.22vw" : "0.55vw"};
  `,
  image: (isMenuOpen: boolean) => css`
    position: relative;
    width: ${isMenuOpen ? "6.66vw" : "1.66vw"};
    aspect-ratio: 1;
  `,
  languageText: (isMenuOpen: boolean) => css`
    font-size: ${isMenuOpen ? "5vw" : "1.25vw"};
  `,
};

type LanguageProps = {
  isMenuOpen: boolean;
  onClick: () => void;
};

const EnglishButton = ({ isMenuOpen, onClick }: LanguageProps) => {
  return (
    <div css={sx.box} onClick={onClick}>
      <div css={sx.wrapper(isMenuOpen)}>
        <div css={sx.image(isMenuOpen)}>
          <Image fill src={"/assets/header/popover/ic-english.png"} alt="img" />
        </div>
        <Typography
          lineHeight={1}
          color={Color.Primary}
          css={sx.languageText(isMenuOpen)}
        >
          English
        </Typography>
      </div>
    </div>
  );
};

const ChineseButton = ({ isMenuOpen, onClick }: LanguageProps) => {
  return (
    <div css={sx.box} onClick={onClick}>
      <div css={sx.wrapper(isMenuOpen)}>
        <div css={sx.image(isMenuOpen)}>
          <Image fill src={"/assets/header/popover/ic-chinese.png"} alt="img" />
        </div>
        <Typography
          lineHeight={1}
          color={Color.Primary}
          css={sx.languageText(isMenuOpen)}
        >
          Chinese
        </Typography>
      </div>
    </div>
  );
};
