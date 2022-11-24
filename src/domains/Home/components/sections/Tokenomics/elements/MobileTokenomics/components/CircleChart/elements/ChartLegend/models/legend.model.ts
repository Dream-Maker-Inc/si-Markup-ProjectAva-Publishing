import { Color } from "@/common/themes/Colors";

export type LegendType = {
  color: string;
  text: string;
};

export const LegendModels: LegendType[] = [
  { color: `${Color.LightPink}`, text: "Investors 12.25%" },
  { color: `${Color.LightGreen}`, text: "NFT Swap 50%" },
  { color: `${Color.LightPurple}`, text: "Launch Contributors 5.25%" },
  { color: `${Color.LightYellow}`, text: "Future Contributors 17.5%" },
  { color: `${Color.LightBlue}`, text: "Ecosystem Rewards  15%" },
];
