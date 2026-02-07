import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex gap-0.5">
                <div className="w-2 h-6 bg-accent rounded-sm" />
                <div className="w-2 h-6 bg-[oklch(0.75_0.16_85)] rounded-sm" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Asset
                <span className="text-muted-foreground font-normal">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Internal platform for Asset Living teams. Streamlined tools and
              intelligent insights.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/dashboard"
                    className="hover:text-foreground transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chat"
                    className="hover:text-foreground transition-colors"
                  >
                    AI Assistant
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://assetliving.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Asset Living
                  </a>
                </li>
                <li>
                  <a
                    href="https://assetliving.com/career/open-positions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2025 Asset Living. All rights reserved.</p>
          <p>Internal use only.</p>
        </div>
      </div>
    </footer>
  );
}
