import { MediaQueries } from "@/common/themes/Limit";
import { css } from "@emotion/react";
import Image from "next/image";

export const AvatarBackgroundImage = () => {
  return (
    <div css={sx.bgAvatarWrapper}>
      <div css={sx.bgAvatar}>
        <Image fill src={"/assets/project/bg-avatar.png"} alt="img" />
      </div>
    </div>
  );
};

const sx = {
  bgAvatarWrapper: css`
    position: absolute;
    top: 0;
    right: 0;
  `,
  bgAvatar: css`
    position: relative;
    width: 40vw;
    aspect-ratio: 1/1.339;
    @media ${MediaQueries.xxl} {
      max-width: 575px;
    }
  `,
};
