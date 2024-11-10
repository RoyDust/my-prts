import React from "react";

export default function ArticleFooter() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-[#e6f4ff] p-4 text-sm text-black/40">
      <span>版权所属：洛依尘</span>
      <span>本文链接：https://wp-boke.work/blog-details/61</span>
      <span>
        作品许可：本作品采用
        <a
          className="text-sky-400 underline"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          CC BY-NC-SA 4.0 - 非商业性使用 - 相同方式共享 4.0 国际
        </a>
        进行许可。
      </span>
    </div>
  );
}
