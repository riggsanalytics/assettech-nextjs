import Link from "next/link";
import { UserProfile } from "@/components/auth/user-profile";
import { ModeToggle } from "./ui/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Mark */}
          <div className="flex gap-0.5">
            <div className="w-2 h-6 bg-accent rounded-sm transition-transform group-hover:scale-110" />
            <div className="w-2 h-6 bg-[oklch(0.75_0.16_85)] rounded-sm transition-transform group-hover:scale-110 delay-75" />
          </div>
          {/* Wordmark */}
          <span className="text-lg font-semibold tracking-tight">
            Asset<span className="text-muted-foreground font-normal">Tech</span>
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <UserProfile />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
