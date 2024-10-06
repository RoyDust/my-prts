"use client";
import { useParams } from "next/navigation";
import React from "react";
import Post from "./_components/post/post";

function PostList() {
  const params = useParams();
  console.log(params);

  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="relative flex w-[86rem] bg-cyan-200">
        <div className="sticky top-20 h-[40rem] w-24 flex-shrink-0 bg-emerald-100">
          功能区
        </div>
        <div className="flex-1 overflow-x-auto bg-indigo-50">
          <Post />
        </div>
        <div className="sticky top-20 h-[40rem] w-72 flex-shrink-0 bg-lime-50">
          目录
        </div>
      </div>
    </div>
  );
}

export default PostList;
