import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "LifeOS found $3,200 in savings I was leaving on the table—between a better insurance rate and moving my savings to a high-yield account. Paid for itself 10x over.",
    name: "Sarah Chen",
    title: "Product Manager",
    avatar: "SC",
    savings: "$3,200/year"
  },
  {
    quote: "The cross-domain insights are incredible. It noticed my HRV tanked every time the market dipped—now I use their 'Zen Mode' and actually sleep better.",
    name: "Marcus Williams",
    title: "Software Engineer",
    avatar: "MW",
    savings: "Better sleep"
  },
  {
    quote: "As a small business owner with variable income, the scenario planner is a game-changer. I can model 'what if I hire someone' across all my finances instantly.",
    name: "Elena Rodriguez",
    title: "Agency Owner",
    avatar: "ER",
    savings: "Peace of mind"
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 md:text-5xl">
            Loved by{" "}
            <span className="text-gradient">10,000+ optimizers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands who've taken control of their health, wealth, and wellbeing.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="relative rounded-2xl border border-border bg-card p-6 hover:shadow-card transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>

              {/* Savings badge */}
              <div className="absolute top-6 right-6">
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {testimonial.savings}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="flex -space-x-2">
              {["JD", "AK", "RB", "MN", "TW"].map((initials, i) => (
                <div 
                  key={initials}
                  className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-medium"
                >
                  {initials}
                </div>
              ))}
            </div>
            <span className="ml-2">Join 10,000+ users already optimizing their lives</span>
          </div>
        </div>
      </div>
    </section>
  );
};
