import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Banner } from "../components/sections/Banner";
import { Line } from "../components/sections/Line";
import { Project } from "../components/sections/Project";
import { Roadmap } from "../components/sections/Roadmap";
import { Technologies } from "../components/sections/Technologies";
import { Tokenomics } from "../components/sections/Tokenomics";
import { WhitePaper } from "../components/sections/WhitePaper";

export const HomeView = () => {
  return (
    <div>
      <Header />
      <Banner />
      <WhitePaper />
      <Line />
      <Project />
      <Technologies />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};
