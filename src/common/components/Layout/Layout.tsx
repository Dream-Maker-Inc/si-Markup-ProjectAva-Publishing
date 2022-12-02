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
        <title>Project Ailey</title>

        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="favicon.ico" />

        <meta name="author" content="Golden Egg Foundation" />
        <meta
          name="description"
          content="Virtual Celebrity Living in the Metaverse World"
        />
        <meta
          name="keywords"
          content="virtual human, virtual influencer, digital human, digital influencer, robot, AI, deep learning, metaverse, game, video game, meta world, metabus, innovation, virtual reality, community"
        />
        <meta property="og:title" content="Project Ailey" />
        <meta property="og:url" content="http://myailey.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/thumbnail/thumbnailpng" />
        <meta
          property="og:description"
          content="Project Ailey is a virtual human project, a celebrity who lives and moves in a virtual space and will be active in spaces such as games, movies, and metaverse in the future."
        />
        <meta property="og:site_name" content="Project Ailey" />
        <meta property="og:locale" content="en_US" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="ANI4_rOJc728yDE0naHGRWAsEturpmT0dfAtw5uK61U"
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
