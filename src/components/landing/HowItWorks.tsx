import { Link2, Zap, LineChart, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Connect Your Accounts",
    description: "Securely link your bank accounts, investments, health apps, and insurance policies in minutes. Bank-level encryption keeps everything safe.",
  },
  {
    number: "02",
    icon: Zap,
    title: "AI Analyzes Everything",
    description: "Our AI scans for patterns across domains—finding savings opportunities, coverage gaps, and health-wealth correlations you'd never spot.",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Optimize & Automate",
    description: "Get personalized recommendations and let LifeOS handle routine optimizations. You approve, we execute—saving you hours every week.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Simple to start.{" "}
            <span className="text-gradient">Powerful when you need it.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get up and running in under 5 minutes. See your first insight in under 60 seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`relative flex items-center gap-8 mb-12 last:mb-0 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step card */}
                <div className="flex-1">
                  <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-primary mb-2">STEP {step.number}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot (hidden on mobile) */}
                <div className="hidden md:flex items-center justify-center w-16 flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-glow" />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#pricing"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            See what's included
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
