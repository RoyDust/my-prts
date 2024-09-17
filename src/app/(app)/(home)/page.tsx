import HomeHeader from "@/components/home-header/home-header";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-blue-100 bg-[url('/bg.jpg')] bg-cover bg-fixed bg-clip-border bg-top bg-origin-border pt-[100vh]">
      <HomeHeader />

      <div>
        <h1 className="h-80 bg-white text-center opacity-70">Home</h1>
      </div>
    </div>
  );
};

export default Home;
