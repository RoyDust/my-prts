"use client";
import { useParams } from "next/navigation";
import React from "react";
import Post from "./_components/post/post";
import {
  BookOpenText,
  MessageSquareMore,
  Share2,
  Star,
  ThumbsUp,
} from "lucide-react";

function PostList() {
  const params = useParams();
  console.log(params);

  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="relative flex w-[86rem] bg-cyan-50">
        <div className="sticky top-[6rem] flex h-[40rem] w-24 flex-shrink-0 flex-col items-center gap-4 py-8">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow hover:bg-slate-50">
            <span className="absolute left-8 top-0 rounded-lg bg-slate-400 px-1 py-[1px] text-xs text-white">
              133
            </span>
            <ThumbsUp className="text-[#8a919f]" fill="#8a919f" />
          </div>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow hover:bg-slate-50">
            <span className="absolute left-8 top-0 rounded-lg bg-slate-400 px-1 py-[1px] text-xs text-white">
              22
            </span>
            <Star className="text-[#8a919f]" fill="#8a919f" />
          </div>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow hover:bg-slate-50">
            <span className="absolute left-8 top-0 rounded-lg bg-slate-400 px-1 py-[1px] text-xs text-white">
              133
            </span>
            <MessageSquareMore className="text-[#8a919f]" fill="#8a919f" />
          </div>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow hover:bg-slate-50">
            <Share2 className="text-[#8a919f]" fill="#8a919f" />
          </div>
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow hover:bg-slate-50">
            <BookOpenText className="text-[#8a919f]" fill="#8a919f" />
          </div>
        </div>
        <div className="flex-1 overflow-x-auto bg-indigo-50">
          <Post />
        </div>
        <div className="sticky top-[6rem] h-[40rem] w-72 flex-shrink-0 bg-lime-50">
          相关推荐
        </div>
      </div>
    </div>
  );
}

export default PostList;
