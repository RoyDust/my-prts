// src/components/pages/home-page.tsx
"use client";

import Image from "next/image";

// import { useCounterStore } from "@/providers/counter-store-provider";

export const HomeContent = () => {
  // const { count, incrementCount, decrementCount } = useCounterStore(
  //   (state) => state,
  // );

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

        <div className="grid grid-cols-3 gap-8">
          {projectList.map((item) => (
            <div
              className="flex h-72 w-[28rem] cursor-pointer flex-col items-center justify-center gap-4 rounded bg-sky-950 p-6 shadow"
              key={item.id}
            >
              <h2 className="text-xl font-medium">{item.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
