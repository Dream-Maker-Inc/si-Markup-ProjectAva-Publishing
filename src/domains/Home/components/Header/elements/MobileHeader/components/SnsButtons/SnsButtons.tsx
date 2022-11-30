import {
  LinkModels,
  LinkType,
} from "@/common/components/Footer/components/LinkSection/models/link.model";
import { Color } from "@/common/themes/Colors";
import { css } from "@emotion/react";
import Image from "next/image";

export const SnsButtons = () => {
  return (
    <div css={sx.snsContainer}>
      {LinkModels.map((it, index) => (
        <SnsBox key={index} image={it.image} link={it.link} />
      ))}
    </div>
  );
};

const sx = {
  snsContainer: css`
    width: 100%;
    height: 13.88vw;
    position: absolute;
    left: 0;
    bottom: 16.66vw;
    padding: 0 12.22vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  sns: css`
    width: 13.88vw;
    aspect-ratio: 1;
    background-color: ${Color.LightPink};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `,
  image: css`
    position: relative;
    width: 9.44vw;
    aspect-ratio: 1;
  `,
};

const SnsBox = ({ image, link }: LinkType) => {
  return (
    <a css={sx.sns} href={link} target="_blank" rel="noreferrer">
      <div css={sx.image}>
        <Image fill src={image} alt="snsImage" />
      </div>
    </a>
  );
};
