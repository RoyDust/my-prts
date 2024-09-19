import HomeHeader from "@/components/home-header/home-header";
import React from "react";
import { HomeContent } from "./_components/HomeContent";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-blue-100 bg-[url('/bg.jpg')] bg-cover bg-fixed bg-clip-border bg-top bg-origin-border pt-[100vh]">
      <HomeHeader />
      <HomeContent />
    </div>
  );
};

export default Home;
