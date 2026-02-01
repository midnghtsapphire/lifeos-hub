import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for getting started with financial optimization",
    features: [
      "Unlimited bank & investment accounts",
      "Basic health data sync",
      "Insurance policy tracking",
      "Monthly insights report",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "$75",
    period: "/month",
    description: "For serious optimizers who want AI-powered automation",
    features: [
      "Everything in Starter",
      "AI Copilot (unlimited questions)",
      "Scenario planning engine",
      "Tax-loss harvesting alerts",
      "Insurance marketplace access",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Family",
    price: "$120",
    period: "/month",
    description: "Optimize finances for your whole household",
    features: [
      "Everything in Pro",
      "Up to 5 family members",
      "Shared financial goals",
      "Legacy planning tools",
      "Aging parent mode",
      "Dedicated success manager",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary mb-6">
            <span>14-day free trial • No credit card required</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Pricing that{" "}
            <span className="text-gradient">pays for itself</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Average users save $2,400/year. That's 2.7x the cost of our Pro plan.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl border p-8 transition-all ${
                plan.popular 
                  ? "border-primary bg-card shadow-glow scale-105 z-10" 
                  : "border-border bg-card hover:shadow-card"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? "bg-gradient-primary hover:opacity-90 text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            30-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};
