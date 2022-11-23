export type FlowSlideProps = {
  slideTitle: string;
  slideTextList: string[];
};

export const FlowSlideModels: FlowSlideProps[] = [
  {
    slideTitle: "inflationary flow",
    slideTextList: ["销毁NFT时SWAP", "DEX流动性池", "人气排名奖励", "投票奖励"],
  },
  {
    slideTitle: "Deflationary flow",
    slideTextList: [
      "NFT合成",
      "购买特级定制道具（衣服、发型等）时使用",
      "选择角色时",
      "人气排名参加费",
      "打赏",
    ],
  },
];
