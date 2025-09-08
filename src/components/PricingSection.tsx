import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Star } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      icon: Zap,
      price: "Free",
      period: "forever",
      description: "Perfect for trying out AI agents",
      features: [
        "5 AI agents",
        "10 integrations",
        "Basic VoIP support",
        "Email support",
        "Community access"
      ],
      cta: "Start Free",
      popular: false,
      variant: "glow" as const
    },
    {
      name: "Professional",
      icon: Crown,
      price: "$49",
      period: "per month",
      description: "For growing businesses and teams",
      features: [
        "Unlimited AI agents",
        "500+ integrations",
        "Full VoIP capabilities",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Team collaboration"
      ],
      cta: "Start Professional",
      popular: true,
      variant: "hero" as const
    },
    {
      name: "Enterprise",
      icon: Star,
      price: "Custom",
      period: "contact us",
      description: "For large organizations with specific needs",
      features: [
        "Everything in Professional",
        "White-label solution",
        "Dedicated support",
        "Custom development",
        "SLA guarantees",
        "Advanced security",
        "On-premise deployment"
      ],
      cta: "Contact Sales",
      popular: false,
      variant: "glow" as const
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_50%),radial-gradient(circle_at_75%_75%,hsl(var(--accent))_0%,transparent_50%)] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Transparent{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprise charges. Just powerful AI agents working for your business.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm text-accent">
              ✨ Start free, scale as you grow
            </div>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 bg-gradient-card rounded-3xl border transition-all duration-500 hover:shadow-card ${
                  plan.popular 
                    ? 'border-primary shadow-primary scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                        <plan.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                        {plan.price !== "Custom" && plan.price !== "Free" && (
                          <span className="text-muted-foreground">/{plan.period}</span>
                        )}
                        {plan.price === "Free" && (
                          <span className="text-muted-foreground">{plan.period}</span>
                        )}
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className="w-full text-lg h-12"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom note */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              All plans include unlimited agents, integrations, and voice features at their respective tiers.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                30-day money back
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;