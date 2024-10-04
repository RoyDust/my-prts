import { Clock, Eye, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import cx from "clsx";

function ArticleItem(props: { key: any; index: number }) {
  const { index } = props;
  const isLeft = index % 2 !== 0;
  return (
    <div
      key={index}
      className={cx(
        "hover:shadow-card-darker xs:flex-col group flex h-52 cursor-pointer justify-between gap-2 rounded-lg border border-none bg-transparent bg-white p-3 text-card-foreground shadow-sm shadow-black/10 transition-shadow hover:bg-[#e3f3f4] hover:shadow",
        { "flex-row-reverse": isLeft },
      )}
    >
      <div className="flex w-1/2 flex-1 items-center justify-center overflow-hidden rounded-md">
        <div
          className={cx(
            "clipped-image overflow-hidden rounded-md",
            isLeft ? "clipped-corner-left pl-1" : "clipped-corner pr-1",
          )}
        >
          <Image
            src="/img/articleBg.jpg"
            alt="project"
            width={0}
            height={0}
            sizes="100vw"
            className={cx(
              "enlarge-image relative h-auto w-full rounded-md object-cover",
            )}
          />
        </div>
      </div>
      <div className="flex w-1/2 flex-col gap-4">
        <div
          className={cx(
            "gpa-4 flex w-full items-center text-sm text-black/60 *:mr-4 *:flex *:items-center *:gap-1",
            isLeft ? "justify-start" : "justify-end",
          )}
        >
          <div>
            <Clock size={16} />
            2023-03-01 12:00:00
          </div>
          <div>
            <Eye size={16} /> <span>1145</span>
          </div>
          <div>
            <ThumbsUp size={16} /> <span>514</span>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="line-clamp-1 text-xl font-normal">
            NestJS学习 {index + 1}
          </h1>
          <p className="line-clamp-2 text-sm text-gray-400">
            本文是关于NestJS学习的优秀项目分析与最佳实践的文章。文章介绍了NestJS的基本概念和模块，并通过分析优秀的NestJS项目和常用的内置模块来帮助读者更好地理解和应用NestJS。文章还解释了常见的后端术语，并提供了一个用户授权模块的目录结构示例。文章还介绍了NestJS的模块、服务和控制器层的作用和用途，并提供了相应的代码示例。最后，文章鼓励读者深入探索NestJS的无限可能性。
          </p>
        </div>
        <div className="justify-center"># 技术/react,nextjs</div>
      </div>
    </div>
  );
}

export default ArticleItem;
