import React from "react";

export default function ArticleFooter() {
  return (
    <div className="flex h-24 w-full flex-col border-t border-black/40 p-4 text-sm text-black/40">
      <span>
        商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，您可以自由地在任何媒体以任何形式复制和分发作品，也可以修改和创作，但是分发衍生作品时必须采用相同的许可协议。
      </span>
      <span>
        本文采用
        <a
          className="underline"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >
          CC BY-NC-SA 4.0 - 非商业性使用 - 相同方式共享 4.0 国际
        </a>
        进行许可。
      </span>
    </div>
  );
}
