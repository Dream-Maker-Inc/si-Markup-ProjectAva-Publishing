import { HomeView } from "@/domains/Home/view";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <HomeView />
    </React.Fragment>
  );
};

export default Home;
