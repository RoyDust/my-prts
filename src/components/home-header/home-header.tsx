"use client";
import React, { useState } from "react";
import { BookText, Cat, FileText, LayoutGrid, Link, Tags } from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import cx from "clsx";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { FounderMadGrassFont } from "../font/fonts";
import { useRouter } from "next/navigation";

export interface RouterListProps {
  key: string;
  name: string;
  icon: React.ReactNode;
}

export default function HomeHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("");
  const router = useRouter();

  const pageList: RouterListProps[] = [
    {
      key: "article",
      name: "文章",
      icon: <FileText color="rgb(39, 39, 42)" size={16} />,
    },
    {
      key: "hole",
      name: "树洞",
      icon: <BookText color="rgb(39, 39, 42)" size={16} />,
    },
    {
      key: "record",
      name: "记录",
      icon: <Tags color="rgb(39, 39, 42)" size={16} />,
    },
    {
      key: "about",
      name: "关于",
      icon: <Cat color="rgb(39, 39, 42)" size={16} />,
    },
    {
      key: "link",
      name: "友链",
      icon: <Link color="rgb(39, 39, 42)" size={16} />,
    },
    {
      key: "more",
      name: "更多",
      icon: <LayoutGrid color="rgb(39, 39, 42)" size={16} />,
    },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSwitch = (item: RouterListProps) => {
    setCurrentPage(item.key);
    router.push(`/${item.key}`);
  };

  return (
    <div className="bg-bgColor-light/80 dark:bg-bgColor-dark/80 fixed left-0 top-0 flex h-16 w-full items-center justify-between gap-8 px-12 shadow-md backdrop-blur-md backdrop-filter">
      <div
        className={cx(
          "font-serif flex w-auto cursor-pointer items-center text-4xl font-thin",
          FounderMadGrassFont.className,
        )}
        onClick={() => router.push("/")}
      >
        <span>尚蜀书屋</span>
      </div>

      <div className="text-[rgb(39, 39, 42)] flex items-center gap-4 *:flex *:items-center *:gap-2 *:rounded-lg *:px-4 *:py-2 [&>*:hover]:cursor-pointer [&>*:hover]:bg-[#00000010]">
        {pageList.map((item) => (
          <div
            className={cx({ "bg-[#61434310]": currentPage === item.key })}
            key={item.key}
            onClick={() => handleSwitch(item)}
          >
            {item.icon} <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Switch
          checked={isDarkMode}
          onCheckedChange={toggleDarkMode}
          name="airplane-mode"
        />
        <Label htmlFor="airplane-mode">
          {isDarkMode ? "黑暗模式" : "白天模式"}
        </Label>

        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
