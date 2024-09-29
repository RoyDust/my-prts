import { Clock, Eye, ThumbsUp } from "lucide-react";
import React from "react";

function ArticleList() {
  return (
    <div className="h-full min-h-screen w-[56rem] bg-amber-500">
      <div className="flex flex-col gap-0 p-2 *:mb-4">
        {Array(18)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="flex h-32 flex-col justify-between rounded-lg bg-white p-3 hover:bg-[#e3f3f4]"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-normal">Article {index + 1}</h1>
                <p className="text-sm text-gray-400">
                  了解本篇文章，可以更方便的使用markdown语法来编辑博文。
                </p>
              </div>
              <div className="gpa-4 flex w-full items-center text-sm text-black/60 *:mr-4 *:flex *:items-center *:gap-1">
                <div>
                  <Clock size={16} />
                  2023-03-01 12:00:00
                </div>
                <div># 技术/react,nextjs</div>
                <div>
                  <Eye size={16} /> <span>1145</span>
                </div>
                <div>
                  <ThumbsUp size={16} /> <span>514</span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ArticleList;
