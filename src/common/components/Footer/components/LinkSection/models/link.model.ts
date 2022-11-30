export type LinkType = {
  image: string;
  sns: string;
  link: string;
};

export const LinkModels: LinkType[] = [
  { image: "/assets/footer/ic-whitepaper.svg", sns: "whitepaper", link: "" },
  {
    image: "/assets/footer/ic-twitter.svg",
    sns: "twitter",
    link: "https://twitter.com/aileyverse",
  },
  {
    image: "/assets/footer/ic-discord.svg",
    sns: "discord",
    link: "https://discord.gg/RdQGGyx3Xf",
  },
  {
    image: "/assets/footer/ic-instagram.svg",
    sns: "instagram",
    link: "https://www.instagram.com/aileyverse",
  },
];
