"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/auth-client";
import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  LineChart,
  Sparkles,
  Shield,
  ArrowRight,
  Building2,
  TrendingUp,
  Zap,
  Brain,
  Network,
} from "lucide-react";

export default function Home() {
  const { data: session, isPending } = useSession();

  return (
    <main className="flex-1 relative overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="orb orb-teal w-[600px] h-[600px] top-[-200px] right-[-100px] animate-orb-1" />
      <div className="orb orb-gold w-[400px] h-[400px] top-[200px] left-[-150px] animate-orb-2" />
      <div className="orb orb-purple w-[500px] h-[500px] bottom-[-200px] right-[20%] animate-orb-1" style={{ animationDelay: '5s' }} />

      {/* Hero Section with AI Image */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-ai-network.png"
            alt="AI Network Visualization"
            fill
            className="object-cover object-center opacity-40 animate-network"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        </div>

        <div className="relative container mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-5xl mx-auto">
            {/* Logo Mark with Glow */}
            <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-in">
              <div className="flex gap-0.5">
                <div className="w-3 h-8 bg-accent rounded-sm glow-teal" />
                <div className="w-3 h-8 bg-[oklch(0.75_0.16_85)] rounded-sm glow-gold" />
              </div>
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-muted-foreground">
                Asset Tech
              </span>
            </div>

            {/* Main Headline with Enhanced Gradient */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight mb-8 opacity-0 animate-slide-up"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Intelligent tools for{" "}
              <em className="text-gradient-teal text-glow-teal not-italic">modern</em>
              <br />
              property management.
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-12 opacity-0 animate-slide-up delay-200">
              Streamlined workflows, actionable insights, and AI-powered
              assistance for Asset Living teams.
            </p>

            {/* CTA Buttons with Glow */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up delay-300">
              {isPending ? (
                <Button size="lg" disabled className="h-14 px-8 text-base">
                  Loading...
                </Button>
              ) : session ? (
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-base group bg-accent hover:bg-accent/90 text-accent-foreground glow-teal transition-all hover:glow-teal-strong"
                >
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-8 text-base group bg-accent hover:bg-accent/90 text-accent-foreground glow-teal transition-all hover:glow-teal-strong"
                >
                  <Link href="/login">
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              )}
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base border-border/50 hover:bg-secondary/50 hover:border-accent/50 transition-all"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Floating Preview Cards with Glassmorphism */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
            <div className="relative">
              {/* Analytics Card */}
              <div className="w-72 glass-card rounded-xl p-5 animate-float">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    Portfolio Overview
                  </span>
                  <BarChart3 className="h-4 w-4 text-accent icon-glow" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-end gap-2">
                    <span
                      className="text-3xl font-semibold text-gradient-teal"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      94.2%
                    </span>
                    <span className="text-sm text-accent mb-1">+2.1%</span>
                  </div>
                  <div className="h-16 flex items-end gap-1">
                    {[65, 72, 68, 85, 78, 92, 88, 94].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-accent/20 rounded-t transition-all hover:bg-accent/60 hover:glow-teal"
                        style={{ height: `${h}%`, transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Average occupancy across 450K+ units
                  </p>
                </div>
              </div>

              {/* AI Insight Card */}
              <div className="w-64 glass-card rounded-xl p-4 absolute -left-32 top-48 animate-float-delayed">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center animate-glow">
                    <Sparkles className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium">AI Insight</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Renewal rate trending 8% above market average this quarter.
                </p>
              </div>

              {/* New: Network Status Card */}
              <div className="w-56 glass-card rounded-xl p-4 absolute -left-16 -top-20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Network className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium text-muted-foreground">Live Data Feed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs text-accent">Connected • Real-time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Cards */}
      <section className="relative bg-secondary/20 border-y border-border/30">
        {/* Subtle network pattern */}
        <div className="absolute inset-0 network-bg opacity-50" />

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full glass opacity-0 animate-fade-in">
                <Brain className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">AI-Powered Platform</span>
              </div>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6 opacity-0 animate-slide-up"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  animationDelay: "400ms",
                }}
              >
                Built for <em className="not-italic text-gradient-teal text-glow-teal">how</em>{" "}
                you work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-slide-up delay-500">
                Purpose-built tools that integrate seamlessly with your existing
                workflows and systems.
              </p>
            </div>

            {/* Feature Grid with Glassmorphism */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<BarChart3 className="h-6 w-6" />}
                title="Portfolio Analytics"
                description="Real-time visibility into property performance, occupancy trends, and financial metrics across your entire portfolio."
                delay={100}
              />
              <FeatureCard
                icon={<Sparkles className="h-6 w-6" />}
                title="AI Assistant"
                description="Intelligent support for data analysis, report generation, and answering complex portfolio questions instantly."
                delay={200}
                highlighted
              />
              <FeatureCard
                icon={<LineChart className="h-6 w-6" />}
                title="Smart Reporting"
                description="Automated reports with customizable templates, scheduled delivery, and dynamic visualizations."
                delay={300}
              />
              <FeatureCard
                icon={<Building2 className="h-6 w-6" />}
                title="Property Hub"
                description="Centralized access to property details, contacts, documents, and operational data in one place."
                delay={400}
              />
              <FeatureCard
                icon={<TrendingUp className="h-6 w-6" />}
                title="Predictive Insights"
                description="Data-driven forecasting for occupancy, revenue, and market trends to stay ahead of the curve."
                delay={500}
              />
              <FeatureCard
                icon={<Shield className="h-6 w-6" />}
                title="Secure Access"
                description="Enterprise-grade security with role-based permissions and SSO integration for your team."
                delay={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Numbers */}
      <section className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="orb orb-teal w-[300px] h-[300px] top-[50%] left-[10%] animate-orb-2" style={{ animationDelay: '3s' }} />

        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <AnimatedStatCard target={450} suffix="K+" label="Units Managed" delay={0} />
            <AnimatedStatCard target={13} suffix="K+" label="Team Members" delay={200} />
            <AnimatedStatCard target={40} suffix="+" label="States Nationwide" delay={400} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-t border-border/30">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass animate-glow">
              <Zap className="h-4 w-4 text-[oklch(0.75_0.16_85)]" />
              <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
                Coming Soon
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-normal mb-6"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              More <em className="not-italic text-gradient-gold text-glow-gold">powerful</em>{" "}
              tools on the way
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              We&apos;re continuously building new features to help Asset Living
              teams work smarter and deliver better results.
            </p>
            {!session && !isPending && (
              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-base bg-primary hover:bg-primary/90 glow-teal transition-all hover:glow-teal-strong"
              >
                <Link href="/login">Get Started</Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
  highlighted = false,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  highlighted?: boolean;
}) {
  return (
    <div
      className={`group p-6 glass-card rounded-xl opacity-0 animate-scale-in ${
        highlighted ? 'gradient-border' : ''
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-accent transition-all duration-300 ${
        highlighted
          ? 'bg-accent/30 group-hover:bg-accent/40 animate-glow'
          : 'bg-accent/10 group-hover:bg-accent/20'
      }`}>
        <div className="icon-glow">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient-teal transition-all">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function AnimatedStatCard({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div
      ref={ref}
      className="text-center opacity-0 animate-scale-in glass-card p-8 rounded-2xl"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="text-5xl md:text-6xl font-normal mb-2 stat-number"
        style={{ fontFamily: "var(--font-playfair), serif" }}
      >
        {count}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
}
