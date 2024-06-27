import HeroSection from "@/components/Home/HeroSection";
import LatestPosts from "@/components/Home/LatestPosts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <LatestPosts />
      <div className="flex w-full items-center justify-center p-4">
        <Button asChild>
          <Link href="/blogs">Go to blogs</Link>
        </Button>
      </div>
    </main>
  );
}
