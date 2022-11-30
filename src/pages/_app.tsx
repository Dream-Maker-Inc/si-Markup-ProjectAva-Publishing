import "@/common/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { findTheme, ThemeTypes } from "@/common/themes/CustomThemes";
import { Layout } from "@/common/components/Layout/Layout";
import "@/static/fonts/style.css";
import { RecoilRoot } from "recoil";
import { I18nextProvider } from "react-i18next";
import i18n from "@/utils/i18n/locales";
import "@/utils/i18n/locales";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <RecoilRoot>
        <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </RecoilRoot>
    </I18nextProvider>
  );
}

export default MyApp;
