import { Users, Phone, Database, FileText, Calendar, MessageSquare } from "lucide-react";

const ShowcaseSection = () => {
  const capabilities = [
    {
      icon: Users,
      title: "Multiple Agents",
      description: "Hundreds of AI agents working together"
    },
    {
      icon: Phone,
      title: "VoIP Integration",
      description: "Call agents directly or use as receptionists"
    },
    {
      icon: Database,
      title: "CRM Sync",
      description: "Real-time updates to your customer data"
    },
    {
      icon: FileText,
      title: "File Generation",
      description: "Create docs, reports, and proposals"
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Smart calendar and meeting coordination"
    },
    {
      icon: MessageSquare,
      title: "Multi-channel",
      description: "WhatsApp, Email, Slack, and more"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm text-primary">
              AI workforce, AI productivity tools, enterprise AI
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold">
              From Task to{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Outcome
              </span>{" "}
              in One Prompt
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Watch your Agent Force collaborate seamlessly across all your tools and workflows. Each agent handles specialized tasks while maintaining perfect coordination.
            </p>
          </div>
          
          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="group relative p-6 bg-gradient-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                
                <div className="relative space-y-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <capability.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {capability.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {capability.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Flow visualization */}
          <div className="relative mt-16 p-8 bg-gradient-card rounded-3xl border border-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl"></div>
            
            <div className="relative space-y-6">
              <h3 className="text-2xl font-bold text-center">Real-time Agent Coordination</h3>
              
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
                <div className="flex items-center gap-2 bg-background/50 rounded-lg px-3 py-2 border border-border">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  Lead captured
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2 bg-background/50 rounded-lg px-3 py-2 border border-border">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  CRM updated
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2 bg-background/50 rounded-lg px-3 py-2 border border-border">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  Follow-up scheduled
                </div>
                <div className="text-muted-foreground">→</div>
                <div className="flex items-center gap-2 bg-background/50 rounded-lg px-3 py-2 border border-border">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Proposal sent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;