import { Clock, Eye, Shapes } from "lucide-react";
import React, { useEffect, useState } from "react";
import Welcome from "@/markdown/welcome.mdx";
function Post() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="h-[100rem] rounded-sm bg-red-200 px-4 *:text-base">
      <div className="flex h-full flex-col gap-4 rounded-sm bg-white p-6">
        <h1 className="text-3xl font-bold">Web Locks API: 跨 Tab 资源同步</h1>
        <div className="flex items-center gap-4 text-sm text-slate-400 *:flex *:items-center *:gap-1">
          <div>洛依尘</div>
          <div>2020-11-17</div>
          <div>
            <Eye className="w-4 text-[#8a919f]" />
            2,051
          </div>
          <div>
            <Clock className="w-4 text-[#8a919f]" />
            阅读11分钟
          </div>
          <div>
            <Shapes className="w-4 text-[#8a919f]" />
            <div>前端、JavaScript</div>
          </div>
        </div>
        <div>
          {/* 下面是一个简单的例子 进程是一个工厂，工厂有它的独立资源
          工厂之间相互独立 线程是工厂中的工人，多个工人协作完成任务
          工厂内有一个或多个工人 工人之间共享空间 与系统联系起来如下 工厂的资源
          - 系统分配的内存（独立的一块内存） 工厂之间的相互独立 -about
          进程之间相互独立 多个工人协作完成任务 - 多个线程在进程中协作完成任务
          工厂内有一个或多个工人 - 一个进程由一个或多个线程组成 工人之间共享空间
          -
          同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）
          用较为官方的术语描述一遍：
          进程是cpu资源分配的最小单位（是能拥有资源和独立运行的最小单位）
          线程是cpu调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程） */}

          <Welcome />
        </div>
      </div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-500 p-3 text-white shadow-lg hover:bg-blue-600 focus:outline-none"
        >
          返回顶部
        </button>
      )}
    </div>
  );
}

export default Post;
