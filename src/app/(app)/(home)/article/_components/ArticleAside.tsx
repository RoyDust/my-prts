import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";

function ArticleAside() {
  return (
    <aside className="min-h-screen w-0 flex-1 rounded-lg">
      <div className="sticky top-[5rem] flex w-full flex-col gap-4 rounded-lg">
        <div className="bg-white p-4">
          <h2 className="text-xl font-thin">搜索</h2>
          <Separator className="mb-4 mt-2" />
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="搜索博客"
              className="h-9 border-0 bg-slate-100 shadow-none focus-visible:ring-0"
            ></Input>
            <button className="w-20 rounded-lg bg-blue-500 px-4 py-2 text-sm font-thin text-white">
              搜索
            </button>
          </div>
        </div>
        <div className="bg-white p-4">
          <h2 className="text-xl font-thin">文章分类</h2>
          <Separator className="mb-4 mt-2" />
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-2 py-1">
              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
              <p className="text-sm">前端</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-2 py-1">
              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
              <p className="text-sm">后端</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-2 py-1">
              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
              <p className="text-sm">学习资料</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-2 py-1">
              <div className="h-4 w-4 rounded-full bg-blue-500"></div>
              <p className="text-sm">网络</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4">
          <h2 className="text-xl font-thin">阅读排行榜</h2>
          <Separator className="mb-4 mt-2" />
          <div className="flex flex-col gap-2 font-thin">
            <div className="overflow-hidden text-ellipsis whitespace-nowrap text-nowrap">
              1. 两万字Vue.js基础学习笔记（一）(43076)
            </div>
            <div>2. 微信小程序学习笔记(3076)</div>
            <div className="overflow-hidden text-ellipsis whitespace-nowrap text-nowrap">
              3. 两万字Vue.js基础学习笔记（二）(43076)
            </div>
            <div>4. 微信小程序云开发(648)</div>
            <div>5. 软件设计师(491)</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ArticleAside;
