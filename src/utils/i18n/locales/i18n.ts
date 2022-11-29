import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from "./en";
import * as ch from "./ch";

const resources: Resource = {
  "en-US": {
    ...en,
  },
  "zh-CN": {
    ...ch,
  },
} as const;

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en-US", // 초기 설정 언어
    fallbackLng: {
      // 영어 불러오는 것 실패했을때 다른 언어를 쓰도록 설정
      "zh-CN": ["zh-CN"],
      default: ["en-US"],
    },

    debug: true,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
