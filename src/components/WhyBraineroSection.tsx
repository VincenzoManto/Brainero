import { Infinity, Plug, Phone, MessageSquare, TrendingUp } from "lucide-react";

const WhyBraineroSection = () => {
  const benefits = [
    {
      icon: Infinity,
      title: "Build Unlimited Agents",
      description: "Create hundreds of specialized AI agents without limits. Scale your workforce instantly.",
      highlight: "No agent limits"
    },
    {
      icon: Plug,
      title: "Plug-and-Play Integrations",
      description: "500+ pre-built integrations work out of the box. Connect to any tool in minutes.",
      highlight: "500+ integrations"
    },
    {
      icon: Phone,
      title: "VoIP and Voice Enabled",
      description: "Call your agents directly or deploy them as virtual receptionists with full voice capabilities.",
      highlight: "Full VoIP support"
    },
    {
      icon: MessageSquare,
      title: "No Coding, Just Prompts",
      description: "Configure powerful AI agents using simple, natural language prompts. Anyone can do it.",
      highlight: "Zero code required"
    },
    {
      icon: TrendingUp,
      title: "Scales with Your Business",
      description: "From startup to enterprise, Brainero grows with you. Add agents as you need them.",
      highlight: "Enterprise ready"
    }
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-30"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent opacity-30"></div>
      <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Why Choose{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Brainero.ai
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The most advanced agentic platform designed for businesses that want to automate everything without complexity.
            </p>
          </div>
          
          {/* Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group relative flex flex-col lg:flex-row items-start lg:items-center gap-6 p-8 bg-card/30 backdrop-blur-sm rounded-3xl border border-border hover:border-primary/50 hover:bg-card/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300 flex-shrink-0">
                  <benefit.icon className="w-10 h-10 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <h3 className="text-2xl font-bold text-foreground">
                      {benefit.title}
                    </h3>
                    <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-3 py-1 text-sm text-accent font-medium">
                      {benefit.highlight}
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Number indicator */}
                <div className="relative w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center text-xl font-bold text-primary group-hover:border-primary/50 transition-colors duration-300 flex-shrink-0">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center space-y-6 pt-8">
            <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-6 py-3 text-primary-foreground font-semibold">
              <TrendingUp className="w-5 h-5" />
              Ready to transform your business?
            </div>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses already using Brainero.ai to automate their workflows and scale their operations with intelligent AI agents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBraineroSection;