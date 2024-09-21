// src/components/pages/home-page.tsx
"use client";

import HomeFooter from "@/components/home-footer/home-footer";
import Image from "next/image";

// import { useCounterStore } from "@/providers/counter-store-provider";

export const HomeContent = () => {
  // const { count, incrementCount, decrementCount } = useCounterStore(
  //   (state) => state,
  // );

  const historyList = [
    {
      id: 1,
      title: "2020.1.4",
      description: "申请域名 roydust.top",
    },
    {
      id: 2,
      title: "2020.1.12",
      description: "申请域名通过",
    },
    {
      id: 3,
      title: "2020.2.13",
      description: "项目搭建完成",
    },
    {
      id: 4,
      title: "2020.2.14",
      description: "项目上线",
    },
    {
      id: 5,
      title: "2020.2.16",
      description: "发布 1.0.0 版本",
    },
    {
      id: 6,
      title: "2022.2.16",
      description: "NextJS重构，blog第三版预发布，域名 shimmer.wp-boke.work",
    },
  ];

  const projectList = [
    {
      id: 1,
      title: "博客项目",
      description: "基于 Next.js 搭建的博客项目",
      imgUrl:
        "https://wp-boke.work/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F518543%2Fpexels-photo-518543.jpeg&w=2048&q=75",
      url: "https://github.com/zhaoxiangji/blog",
    },
    {
      id: 2,
      title: "博客项目2",
      description: "基于 Next.js 搭建的博客项目",
      imgUrl:
        "https://wp-boke.work/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F518543%2Fpexels-photo-518543.jpeg&w=2048&q=75",
      url: "https://github.com/zhaoxiangji/blog",
    },
    {
      id: 3,
      title: "博客项目3",
      description: "基于 Next.js 搭建的博客项目",
      imgUrl:
        "https://wp-boke.work/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F518543%2Fpexels-photo-518543.jpeg&w=2048&q=75",
      url: "https://github.com/zhaoxiangji/blog",
    },
  ];

  return (
    <div className="bg-white/80 text-center backdrop-blur-md">
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <h1 className="text-3xl font-medium">Project Experience</h1>
        <div className="h-[2px] w-28 bg-sky-400"></div>
        <p className="text-sm">博客项目入口</p>

        <div className="grid grid-cols-3 gap-8">
          {projectList.map((item) => (
            <div
              className="flex h-72 w-[28rem] cursor-pointer flex-col items-center justify-center gap-4 rounded-md bg-sky-950 shadow"
              key={item.id}
            >
              <Image
                src={item.imgUrl}
                alt="project"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full rounded-md"
              />
              {/* <h2 className="text-xl font-medium">{item.title}</h2> */}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 bg-white py-12">
        <h1 className="text-3xl font-medium">GROWTH RECORD</h1>
        <div className="h-[2px] w-28 bg-sky-400"></div>
        <p className="text-sm">「 左右滑动查看 」</p>
        {/* 支持横向滚动 */}
        <div className="mt-4 flex h-32 w-[110rem] snap-x snap-mandatory gap-10 overflow-x-auto *:scroll-mx-10">
          {historyList.map((item) => (
            <div
              className="flex h-auto min-w-[20rem] cursor-pointer flex-col items-center gap-4"
              key={item.id}
            >
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="text-sm font-thin text-gray-600">
                {" "}
                「 {item.description} 」
              </p>
            </div>
          ))}
        </div>
      </div>
      <HomeFooter />
    </div>
  );
};
