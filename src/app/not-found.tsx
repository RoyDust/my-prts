import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <div className="h-40 w-40">
        <Image
          src="/img/惊恐.png"
          alt="project"
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full rounded-md"
        />
      </div>
      <h2 className="text-3xl font-medium">404 Not Found</h2>
      <p>找不到请求的地址或者资源喵</p>
      <Button variant="secondary">
        <Link href="/">返回首页</Link>
      </Button>
    </div>
  );
}
