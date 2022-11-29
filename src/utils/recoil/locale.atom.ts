import { atom } from "recoil";
import i18n from "@/utils/i18n/locales";

export const localeState = atom<boolean>({
  key: "localeState",
  default: i18n.language === "en-US" ? true : false,
});
