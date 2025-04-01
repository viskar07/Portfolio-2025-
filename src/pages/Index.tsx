
import React from "react";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SideProjects from "@/components/SideProjects";
import OpenSource from "@/components/OpenSource";
import Hackathons from "@/components/Hackathons";
import { blurRevealAnimation } from "@/utils/animations";

const Index = () => {
  return (
    <Layout className="bg-[#161619]">
      <div className={blurRevealAnimation(0, "")}>
        <Navigation />
      </div>
      <div className={blurRevealAnimation(1, "")}>
        <Hero />
      </div>
      <div className={blurRevealAnimation(2, "")}>
        <SideProjects />
      </div>
      <div className={blurRevealAnimation(3, "")}>
        <OpenSource />
      </div>
      <div className={blurRevealAnimation(4, "")}>
        <Hackathons />
      </div>
    </Layout>
  );
};

export default Index;
