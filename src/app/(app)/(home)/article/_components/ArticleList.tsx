import React from "react";
import ArticleItem from "./ArticleItem";
import Link from "next/link";

function ArticleList() {
  return (
    // rounded-lg border text-card-foreground hover:shadow-card-darker group flex cursor-pointer gap-2 border-none bg-transparent shadow-card transition-shadow xs:flex-col
    <div className="h-full min-h-screen w-[60rem] rounded-lg">
      <div className="flex flex-col gap-4 p-2">
        {Array(18)
          .fill(0)
          .map((_, index) => (
            <Link key={index} href={`/article/${index}`}>
              <ArticleItem key={index} index={index} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ArticleList;
