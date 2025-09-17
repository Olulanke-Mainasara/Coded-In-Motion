"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/HomePage/Hero";
import SplashScreen from "@/components/SplashScreen";
import React from "react";

const Main = ({ children }: { children: React.ReactNode }) => {
  const [splashing, setSplashing] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSplashing(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className={`h-screen ${splashing && "overflow-hidden"}`}>
      <SplashScreen />
      <Hero />
      {children}
      <Footer />
    </main>
  );
};

export default Main;
