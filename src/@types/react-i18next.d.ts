import "react-i18next";
import * as en from "@/utils/i18n/locales/en";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      whitepaper: typeof en.whitepaper;
    };
  }
}
