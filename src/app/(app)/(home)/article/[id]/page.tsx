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
import { Separator } from "@/components/ui/separator";

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
        <div className="sticky top-[6rem] h-[40rem] w-72 flex-shrink-0 bg-lime-50 p-2">
          <div className="flex flex-col gap-3 rounded-sm border bg-white p-4">
            <h2 className="text-xl">相关推荐</h2>
            <Separator />
            <div className="flex flex-col gap-3">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="line-clamp-1 w-full cursor-pointer text-base font-light hover:text-sky-400">
                      Web Locks API: 跨 Tab 资源同步同步的研究
                    </div>
                    <div className="text-sm text-slate-300">
                      2k 阅读 · 1 评论 · 1 点赞
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
