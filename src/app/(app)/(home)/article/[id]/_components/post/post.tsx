import React from "react";

function Post() {
  return (
    <div className="h-[100rem] bg-red-50">
      {" "}
      下面是一个简单的例子 进程是一个工厂，工厂有它的独立资源 工厂之间相互独立
      线程是工厂中的工人，多个工人协作完成任务 工厂内有一个或多个工人
      工人之间共享空间 与系统联系起来如下 工厂的资源 -
      系统分配的内存（独立的一块内存） 工厂之间的相互独立 -about
      进程之间相互独立 多个工人协作完成任务 - 多个线程在进程中协作完成任务
      工厂内有一个或多个工人 - 一个进程由一个或多个线程组成 工人之间共享空间 -
      同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）
      用较为官方的术语描述一遍：
      进程是cpu资源分配的最小单位（是能拥有资源和独立运行的最小单位）
      线程是cpu调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）
    </div>
  );
}

export default Post;
