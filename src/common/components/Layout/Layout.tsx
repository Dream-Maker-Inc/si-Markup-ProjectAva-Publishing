import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Stack } from "@mui/material";
import Head from "next/head";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack width="100%" height="100%">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Stack direction="row" width="100%" height="100%">
        <main css={st.main}>{children}</main>
      </Stack>
    </Stack>
  );
};

const st = {
  main: css`
    width: 100%;
    height: 100%;
  `,
};
