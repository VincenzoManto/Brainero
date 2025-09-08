import integrationsImage from "@/assets/integrations.png";

const IntegrationsSection = () => {
  const integrations = [
    "WhatsApp", "Outlook", "Microsoft 365", "Teams", "SuiteCRM", "Daylite",
    "Gmail", "Google Workspace", "Slack", "Telegram", "NetSuite", "Vtiger",
    "Calendar", "Google Drive", "PDF Tools", "File Management", "Voice & VoIP",
    "Image Generation", "Internet Search", "SQL Database", "Internal DB", "Handoff Agents"
  ];

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 text-sm text-accent">
              AI CRM integration, workflow automation, AI assistants
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold">
              Connected to{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Everything
              </span>{" "}
              You Already Use
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your Agent Force lives inside your workflow, not outside it. Seamlessly integrated with 500+ tools and platforms.
            </p>
          </div>
          
          {/* Integration Visual */}
          <div className="relative flex justify-center">
            <img 
              src={integrationsImage}
              alt="Network of business tool integrations showing connected platforms"
              style={{ mixBlendMode: 'lighten', boxShadow: '0 0px 200px 100px rgba(0, 0, 0, 1)' }}
              className="relative w-1/2 h-auto rounded-full mx-auto mb-12"
            />
          </div>
          
          {/* Integration Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="group relative p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-accent/50 hover:bg-card/70 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
                
                <div className="relative text-center">
                  <div className="w-8 h-8 bg-accent/20 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                    <div className="w-3 h-3 bg-accent rounded-sm"></div>
                  </div>
                  <p className="text-xs font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                    {integration}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center space-y-4">
            <p className="text-2xl font-semibold text-accent">
              Your Agent Force lives inside your workflow, not outside it.
            </p>
            <p className="text-muted-foreground">
              500+ integrations and counting. If we don't have it, we'll build it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;