import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ToDoing() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="w-80">
        <Image
          src="/img/休息.png"
          alt="project"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full rounded-md"
        />
      </div>
      <h2 className="text-3xl font-medium">这里还没有内容呢</h2>
      <p>网页还在努力搭建中，敬请期待喵！</p>
      <Button variant="secondary">
        <Link href="/">返回首页</Link>
      </Button>
    </div>
  );
}
