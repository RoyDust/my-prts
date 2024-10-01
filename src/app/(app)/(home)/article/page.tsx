import React from "react";
import ArticleAside from "./_components/ArticleAside";
import ArticleList from "./_components/ArticleList";

function article() {
  return (
    <div className="flex min-h-screen justify-center p-6">
      <div className="flex h-full min-h-screen w-[80rem] gap-4">
        <ArticleList />
        <ArticleAside />
      </div>
    </div>
  );
}

export default article;
