import Link from "next/link";
import { UserProfile } from "@/components/auth/user-profile";
import { ModeToggle } from "./ui/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#00d4ff]/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Mark - Circuit Style */}
          <div className="relative flex items-center justify-center w-8 h-8">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-[#00d4ff]/20 rounded blur-md group-hover:bg-[#00d4ff]/30 transition-all" />
            {/* Circuit A shape */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 relative"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="1.5"
            >
              {/* Simplified A shape with circuit lines */}
              <path
                d="M4 20L12 4L20 20M7 14H17"
                className="drop-shadow-[0_0_3px_#00d4ff]"
              />
              {/* Circuit dots */}
              <circle cx="12" cy="4" r="1.5" fill="#00d4ff" className="animate-pulse" />
              <circle cx="4" cy="20" r="1.5" fill="#00d4ff" />
              <circle cx="20" cy="20" r="1.5" fill="#00d4ff" />
            </svg>
          </div>
          {/* Wordmark */}
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-[#00d4ff] drop-shadow-[0_0_8px_#00d4ff50]">Asset</span>
            <span className="text-muted-foreground font-normal">Tech</span>
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
