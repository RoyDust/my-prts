import React from "react";

export default function ArticleFlip() {
  return (
    <div className="flex w-full flex-col justify-between gap-2 rounded-lg bg-[#f0f4ff] px-4 py-6 text-sm text-black/40">
      <div className="flex cursor-pointer justify-between text-2xl text-black/80">
        <h1 className="">上一篇</h1>
        <h1 className=" ">下一篇</h1>
      </div>
      <div className="flex justify-between">
        <p>没有了</p>
        <p>git代码提交规范</p>
      </div>
    </div>
  );
}
