"use client";

import { signIn, useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Building2, Shield, Sparkles } from "lucide-react";

export default function LoginPage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && !isPending) {
      router.push("/dashboard");
    }
  }, [session, isPending, router]);

  const handleSignIn = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };

  return (
    <main className="flex-1 relative min-h-[calc(100vh-180px)] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[oklch(0.75_0.16_85)]/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        {/* Login Card */}
        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl opacity-0 animate-scale-in">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex gap-0.5">
              <div className="w-3 h-8 bg-accent rounded-sm" />
              <div className="w-3 h-8 bg-[oklch(0.75_0.16_85)] rounded-sm" />
            </div>
            <span className="text-2xl font-semibold tracking-tight">
              Asset<span className="text-muted-foreground font-normal">Tech</span>
            </span>
          </div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1
              className="text-3xl font-normal mb-3"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Welcome back
            </h1>
            <p className="text-muted-foreground">
              Sign in to access your dashboard and tools.
            </p>
          </div>

          {/* Sign In Button */}
          <Button
            onClick={handleSignIn}
            disabled={isPending}
            size="lg"
            className="w-full h-14 text-base bg-primary hover:bg-primary/90 mb-6"
          >
            {isPending ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Loading...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </span>
            )}
          </Button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/50" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Asset Living employees only
              </span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <FeatureItem
              icon={<Shield className="h-4 w-4" />}
              text="Secure SSO authentication"
            />
            <FeatureItem
              icon={<Building2 className="h-4 w-4" />}
              text="Access to portfolio tools"
            />
            <FeatureItem
              icon={<Sparkles className="h-4 w-4" />}
              text="AI-powered insights"
            />
          </div>
        </div>

        {/* Help Text */}
        <p className="text-center text-sm text-muted-foreground mt-6 opacity-0 animate-fade-in delay-300">
          Having trouble signing in?{" "}
          <a href="mailto:support@assetliving.com" className="text-accent hover:underline">
            Contact IT Support
          </a>
        </p>
      </div>
    </main>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm text-muted-foreground">
      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
        {icon}
      </div>
      <span>{text}</span>
    </div>
  );
}
