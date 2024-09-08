"use client";
import React, { useState } from "react";
import { BookText, Cat, FileText, LayoutGrid, Link, Tags } from "lucide-react";
import { Switch } from "../ui/switch";
import { Label } from "../ui/label";
import cx from "clsx";

export default function HomeHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState("article");

  const pageList = [
    {
      key: "article",
      name: "文章",
      icon: <FileText color="#eee" size={16} />,
    },
    {
      key: "hole",
      name: "树洞",
      icon: <BookText color="#eee" size={16} />,
    },
    {
      key: "record",
      name: "记录",
      icon: <Tags color="#eee" size={16} />,
    },
    {
      key: "about",
      name: "关于",
      icon: <Cat color="#eee" size={16} />,
    },
    {
      key: "link",
      name: "友链",
      icon: <Link color="#eee" size={16} />,
    },
    {
      key: "more",
      name: "更多",
      icon: <LayoutGrid color="#eee" size={16} />,
    },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSwitch = (key: string) => {
    setCurrentPage(key);
  };

  return (
    <div className="flex h-16 w-full items-center justify-end gap-8 bg-zinc-400 px-12">
      <div className="flex items-center gap-4 text-white *:flex *:items-center *:gap-2 *:rounded-lg *:px-2 *:py-1 [&>*:hover]:cursor-pointer [&>*:hover]:bg-[#00000010]">
        {pageList.map((item) => (
          <div
            className={cx({ "bg-[#00000010]": currentPage === item.key })}
            key={item.key}
            onClick={() => handleSwitch(item.key)}
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
        <Label htmlFor="airplane-mode" className="text-white">
          {isDarkMode ? "黑暗模式" : "白天模式"}
        </Label>
      </div>
    </div>
  );
}
