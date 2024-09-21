import React from "react";

function HomeFooter() {
  const count = Math.round(Math.random() * 100);

  const Separator = () => <div className="mx-2 h-3 w-[1px] bg-gray-500"></div>;

  return (
    <div className="ml-[35%] flex h-28 flex-col justify-center gap-2 text-sm text-gray-600">
      <div className="flex items-center">
        <div>© 2020-2024 Roydust.</div>
        <Separator />
        <div>RSS</div>
        <Separator />
        <div>站点地图</div>
        <Separator />
        <div>订阅</div>
        <Separator />
        <div>Stay hungry. Stay foolish.</div>
      </div>
      <div className="flex items-center">
        <div>Powered by Next</div>
        <Separator />
        <div>萌ICP备20236136号</div>
        <Separator />
        <div>正在被 {count} 人看爆</div>
      </div>
    </div>
  );
}
export default HomeFooter;
