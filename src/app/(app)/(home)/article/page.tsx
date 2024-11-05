import React from "react";
import ArticleAside from "./_components/ArticleAside";
import ArticleList from "./_components/ArticleList";
import HomeFooter from "@/components/home-footer/home-footer";

function article() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex h-full min-h-screen w-[80rem] gap-4 p-6">
        <ArticleList />
        <ArticleAside />
      </div>
      <div className="flex w-full items-center border-t border-slate-200 bg-white">
        <HomeFooter />
      </div>
    </div>
  );
}

export default article;
