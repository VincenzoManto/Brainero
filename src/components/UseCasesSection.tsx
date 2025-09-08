import { TrendingUp, HeadphonesIcon, Settings, Megaphone } from "lucide-react";

const UseCasesSection = () => {
  const useCases = [
    {
      icon: TrendingUp,
      title: "Sales Automation",
      description: "Agents update CRM, send proposals, and follow up via WhatsApp automatically.",
      features: ["Lead qualification", "CRM updates", "Proposal generation", "Multi-channel follow-ups"],
      color: "accent"
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Support",
      description: "Agents answer calls, act as receptionists, and escalate to humans when needed.",
      features: ["24/7 availability", "VoIP integration", "Smart escalation", "Knowledge base access"],
      color: "primary"
    },
    {
      icon: Settings,
      title: "Operations Management",
      description: "Agents manage calendars, generate reports, and handle routine tasks seamlessly.",
      features: ["Calendar management", "Report automation", "Task scheduling", "Data processing"],
      color: "accent"
    },
    {
      icon: Megaphone,
      title: "Marketing Campaigns",
      description: "Agents design images, craft campaigns, and schedule posts across platforms.",
      features: ["Content creation", "Image generation", "Campaign scheduling", "Performance tracking"],
      color: "primary"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary">
              AI for business, workflow automation, AI VoIP bot
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold">
              Real-World{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Impact
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how businesses transform their operations with intelligent Agent Forces that work around the clock.
            </p>
          </div>
          
          {/* Use Cases Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-gradient-card rounded-3xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500"></div>
                
                <div className="relative space-y-6">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 bg-${useCase.color}/20 rounded-2xl flex items-center justify-center group-hover:bg-${useCase.color}/30 transition-colors duration-300`}>
                      <useCase.icon className={`w-8 h-8 text-${useCase.color}`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {useCase.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {useCase.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className={`w-2 h-2 bg-${useCase.color} rounded-full flex-shrink-0`}></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover effect */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                    <p className="text-sm text-muted-foreground mt-4 italic">
                      "Configured with simple prompts, no technical knowledge required."
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">95%</div>
              <p className="text-muted-foreground">Task automation rate</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">24/7</div>
              <p className="text-muted-foreground">Agent availability</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">3min</div>
              <p className="text-muted-foreground">Average setup time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;