import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Shield, Brain } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-float" style={{ animationDelay: "4s" }} />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered Personal Operating System</span>
          </div>
        </div>

        {/* Main headline */}
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Your Life.{" "}
            <span className="text-gradient">Optimized.</span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Unify your health data, financial accounts, and insurance in one intelligent dashboard. 
            Get proactive AI insights that see connections you'd miss.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted">
              Watch Demo
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground md:text-4xl">$2.4K</div>
              <div className="text-sm text-muted-foreground">Avg. savings/year</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="text-3xl font-bold text-foreground md:text-4xl">47min</div>
              <div className="text-sm text-muted-foreground">Saved weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground md:text-4xl">94%</div>
              <div className="text-sm text-muted-foreground">User satisfaction</div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card/50 backdrop-blur-xl p-2 shadow-2xl">
            <div className="rounded-xl bg-card overflow-hidden">
              {/* Mock dashboard header */}
              <div className="flex items-center justify-between border-b border-border px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-accent/60" />
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">LifeOS Dashboard</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Live
                </div>
              </div>
              
              {/* Mock dashboard content */}
              <div className="grid grid-cols-3 gap-4 p-6">
                {/* Net Worth Card */}
                <div className="col-span-2 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-6 border border-primary/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <span className="font-medium text-foreground">Net Worth</span>
                    </div>
                    <span className="text-sm text-primary">+12.4% this year</span>
                  </div>
                  <div className="text-4xl font-bold text-foreground mb-2">$284,392</div>
                  <div className="h-24 flex items-end gap-1">
                    {[40, 45, 42, 48, 52, 49, 55, 58, 62, 60, 65, 72].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 rounded-t bg-primary/40"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Health Score Card */}
                <div className="rounded-xl bg-card border border-border p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="h-5 w-5 text-accent" />
                    <span className="font-medium text-foreground">Health Score</span>
                  </div>
                  <div className="relative mx-auto w-24 h-24 mb-3">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="none" className="stroke-muted" strokeWidth="3" />
                      <circle 
                        cx="18" cy="18" r="16" fill="none" 
                        className="stroke-accent" 
                        strokeWidth="3"
                        strokeDasharray="100"
                        strokeDashoffset="18"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-foreground">82</span>
                    </div>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">Above average</div>
                </div>

                {/* AI Insight Card */}
                <div className="col-span-3 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">AI Insight</div>
                      <p className="text-sm text-muted-foreground">
                        Your sleep quality dropped 35% last week, correlating with 4x more portfolio checks. 
                        <span className="text-primary"> Enable Zen Mode to reduce market anxiety →</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
