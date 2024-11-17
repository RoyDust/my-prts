import { Clock, Eye, Shapes } from "lucide-react";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrism from "rehype-prism-plus";
import remarkGfm from "remark-gfm";
import ArticleFooter from "@/components/article-footer/article-footer";
import ArticleFlip from "@/components/article-flip/article-flip";

function Post() {
  // const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useEffect(() => {
  //   const toggleVisibility = () => {
  //     if (window.pageYOffset > 300) {
  //       setIsVisible(true);
  //     } else {
  //       setIsVisible(false);
  //     }
  //   };

  //   window.addEventListener("scroll", toggleVisibility);

  //   return () => {
  //     window.removeEventListener("scroll", toggleVisibility);
  //   };
  // }, []);

  const content = `

  

  # 歡迎來到我的博客

## 關於我

大家好，我是[你的名字]，一名熱愛編程和寫作的開發者。這裡是我的個人博客，分享一些技術心得和生活感悟。

## 最新文章

### 1. [如何使用Python進行數據分析](./articles/python-data-analysis.md)

在這篇文章中，我將介紹如何使用Python進行基本的數據分析。從數據的獲取、清洗到分析，一步步帶你走進數據的世界。

### 2. [Git與GitHub入門指南](./articles/git-github-guide.md)

對於剛入門的開發者來說，Git和GitHub是必不可少的工具。這篇文章將帶你快速上手，掌握基本的Git操作和GitHub的使用。

## 技術筆記

### 1. [JavaScript中的閉包](./notes/javascript-closures.md)

閉包是JavaScript中一個非常重要的概念，理解它對於掌握高級JavaScript編程非常有幫助。

### 2. [Docker入門](./notes/docker-basics.md)

Docker是一個強大的容器化工具，這篇筆記將帶你快速了解Docker的基本概念和使用方法。

## 聯繫我

如果你有任何問題或建議，歡迎通過以下方式聯繫我：

- 電子郵件: [your.email@example.com](mailto:your.email@example.com)
- GitHub: [你的GitHub賬號](https://github.com/yourusername)

感謝你的閱讀，希望你能從這裡找到有用的信
### 1. [如何使用Python進行數據分析](./articles/python-data-analysis.md)

在這篇文章中，我將介紹如何使用Python進行基本的數據分析。從數據的獲取、清洗到分析，一步步帶你走進數據的世界。

### 2. [Git與GitHub入門指南](./articles/git-github-guide.md)

對於剛入門的開發者來說，Git和GitHub是必不可少的工具。這篇文章將帶你快速上手，掌握基本的Git操作和GitHub的使用。

## 技術筆記

### 1. [JavaScript中的閉包](./notes/javascript-closures.md)

閉包是JavaScript中一個非常重要的概念，理解它對於掌握高級JavaScript編程非常有幫助。

### 2. [Docker入門](./notes/docker-basics.md)

Docker是一個強大的容器化工具，這篇筆記將帶你快速了解Docker的基本概念和使用方法。

## 聯繫我

如果你有任何問題或建議，歡迎通過以下方式聯繫我：

- 電子郵件: [your.email@example.com](mailto:your.email@example.com)
- GitHub: [你的GitHub賬號](https://github.com/yourusername)

感謝你的閱讀，希望你能從這裡找到有用的信

  通过这次对 var a = 1; 的分析，我们可以看到 JavaScript 引擎的幕后团队如何协同工作，确保代码能够顺利、高效地运行。每个职能部门—CEO（JS 引擎）、CTO（编译器）和 COO（作用域）—都在各自的岗位上发挥着至关重要的作用。
无论是从编译阶段的技术分析，还是到执行阶段的代码管理，JavaScript 都像一个有条不紊、高效协作的公司，保障了开发者能够顺畅地完成代码编写和调试工作。这不仅是对技术的挑战，更是对各个职能部门之间无缝协作的考验。
下一次，当你编写一行简单的代码时，或许你能更深刻地理解它背后那些“看不见”的幕后团队，帮助你实现每一行代码的梦想。

作者：AAA酒席代吃刘哥包顺礼金
链接：https://juejin.cn/post/7435309779423854629
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
`;

  return (
    <div className="min-h-[100rem] rounded-sm px-4 pb-4 *:text-base">
      <div className="flex h-full flex-col gap-4 rounded-sm">
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
          <article className="prose !max-w-none dark:prose-invert">
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
            <MDXRemote
              source={content}
              options={{
                parseFrontmatter: true,
                mdxOptions: {
                  remarkPlugins: [remarkGfm as any], // 注入 remarkGfm插件，后面还可以加入你想加入的 remark 插件
                  rehypePlugins: [rehypePrism as any], // 注入 语法高亮插件，同样可以添加更多rehype插件
                },
              }}
            />
            {/* <Welcome /> */}
          </article>
        </div>
        <div className="flex w-full flex-col gap-2">
          <ArticleFooter />
          <ArticleFlip />
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-500 p-3 text-white shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        返回顶部
      </button>
    </div>
  );
}

export default Post;
