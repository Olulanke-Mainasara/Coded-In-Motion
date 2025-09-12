import About from "@/components/HomePage/About";
import Affirmation from "@/components/HomePage/Affirmation";
import Hero from "@/components/HomePage/Hero";
import OurTruth from "@/components/HomePage/OurTruth";
import Services from "@/components/HomePage/Services";
import SplashScreen from "@/components/SplashScreen";
import React from "react";

const IndexPage = () => {
  return (
    <main className="min-h-screen">
      <SplashScreen />
      <Hero />
      <About />
      <Services />
      <Affirmation />
      <OurTruth />
    </main>
  );
};

export default IndexPage;
