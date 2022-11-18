import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";

export const WhitePaper = () => {
  return (
    <div css={sx.root}>
      <Image fill src="/assets/whitepaper/bg-mesh.png" alt="background" />
      <div css={sx.content}>
        <Typography
          fontWeight={400}
          color={Color.LightPink}
          textAlign="center"
          fontFamily={"XinYiGuanHeiTi"}
          css={sx.mainText}
        >
          元宇宙中的
          <br />
          虚拟偶像
        </Typography>
        <Typography
          fontWeight={500}
          color={Color.LightWhite}
          textAlign="center"
          css={sx.mainDesc}
        >
          随着<span css={sx.green}>AI技术的发展</span>
          与元宇宙类的<span css={sx.green}>虚拟空间</span>的普及，
          <br />
          <span css={sx.blue}>超空间</span>里的新自我认知与社区正走向大众。
        </Typography>
        <Button variant="contained" css={sx.button}>
          <Typography color="black" fontWeight={500} css={sx.buttonText}>
            whitepaper
          </Typography>
          <div css={sx.buttonArrow}>
            <Image
              fill
              src="/assets/whitepaper/ic-button-arrow.svg"
              alt="next"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};

const sx = {
  root: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1/0.704;
    background-color: #0d0803;

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  content: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  mainText: css`
    font-size: 150px;
    line-height: 180px;
    letter-spacing: -1px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `,
  mainDesc: css`
    font-size: 24px;
    line-height: 200%;
    margin-top: 5.55%;
    letter-spacing: 0.2px;
  `,
  green: css`
    color: ${Color.LightGreen};
  `,
  blue: css`
    color: ${Color.LightBlue};
  `,
  button: css`
    width: 17vw;
    aspect-ratio: 1/0.26;
    background-color: ${Color.LightBlue};
    border-radius: 0px;
    display: flex;
    align-items: center;
    gap: 5.2%;
    margin-top: 5.55%;
  `,

  buttonText: css`
    font-size: 18px;
    letter-spacing: 0.2px;
  `,
  buttonArrow: css`
    position: relative;
    width: 9.75%;
    aspect-ratio: 1;
  `,
};
