import { 
  Wallet, 
  Heart, 
  Shield, 
  Brain, 
  ArrowRight,
  TrendingUp,
  PiggyBank,
  Activity,
  FileSearch
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Financial Command Center",
    description: "Connect all your bank accounts, investments, and credit cards. See your complete financial picture in real-time with AI-powered insights.",
    highlights: ["Net worth tracking", "Expense categorization", "Investment analysis"],
    color: "primary"
  },
  {
    icon: Heart,
    title: "Health Intelligence",
    description: "Sync wearables, medical records, and health apps. Understand how your health impacts your finances—and vice versa.",
    highlights: ["Wearable integration", "Sleep & stress tracking", "Biometric correlations"],
    color: "accent"
  },
  {
    icon: Shield,
    title: "Insurance Optimization",
    description: "Upload your policies and get AI-powered gap analysis. Never be underinsured or overpaying again.",
    highlights: ["Coverage gap alerts", "Premium comparisons", "Policy recommendations"],
    color: "primary"
  },
  {
    icon: Brain,
    title: "Cross-Domain AI",
    description: "Our AI sees connections you'd miss. Sleep affecting your trading? Health risks requiring more coverage? We surface it.",
    highlights: ["Predictive alerts", "Scenario planning", "Life impact scores"],
    color: "accent"
  }
];

const integrations = [
  { name: "Plaid", icon: PiggyBank },
  { name: "Apple Health", icon: Activity },
  { name: "Investments", icon: TrendingUp },
  { name: "Insurance", icon: FileSearch },
];

export const Features = () => {
  return (
    <section className="relative py-24 bg-background">
      {/* Section header */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm text-primary mb-6">
            <span>All-in-One Platform</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Everything you need.{" "}
            <span className="text-gradient">One dashboard.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop juggling 12 apps. LifeOS brings your health, wealth, and insurance 
            into a single intelligent command center.
          </p>
        </div>
      </div>

      {/* Feature cards */}
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-card hover:border-primary/30"
            >
              {/* Icon */}
              <div className={`inline-flex rounded-xl p-3 mb-6 ${
                feature.color === "primary" 
                  ? "bg-primary/10 text-primary" 
                  : "bg-accent/10 text-accent"
              }`}>
                <feature.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((highlight) => (
                  <span 
                    key={highlight}
                    className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                <ArrowRight className={`h-5 w-5 ${
                  feature.color === "primary" ? "text-primary" : "text-accent"
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Integrations bar */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Connects with the tools you already use
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {integrations.map((integration) => (
              <div 
                key={integration.name}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <integration.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{integration.name}</span>
              </div>
            ))}
            <span className="text-muted-foreground">+ 50 more</span>
          </div>
        </div>
      </div>
    </section>
  );
};
