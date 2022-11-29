import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Link from "next/link";
import { LanguageButton } from "../../../../components/LanguageButton";
import { menu } from "../../../../models/menu.model";

export const Menu = () => {
  return (
    <nav css={sx.nav}>
      <ul css={sx.menu}>
        {menu.map((it, index) => (
          <li key={index}>
            <Link href={it.href}>
              <Typography
                fontSize="1.11vw"
                lineHeight={1}
                fontWeight={500}
                color="white"
              >
                {it.item}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
      <LanguageButton onClose={() => null} />
    </nav>
  );
};

const sx = {
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
};
