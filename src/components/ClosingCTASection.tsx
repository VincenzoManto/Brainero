import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const ClosingCTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl shadow-glow">
            <Sparkles className="w-10 h-10 text-primary-foreground" />
          </div>
          
          {/* Headline */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
              The Future of Work is{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Agentic
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Don't let your competition automate while you're still doing everything manually. Build your Agent Force today and transform your business tomorrow.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 py-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">10,000+</div>
              <p className="text-muted-foreground">Active AI agents deployed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">500+</div>
              <p className="text-muted-foreground">Businesses automated</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">99.9%</div>
              <p className="text-muted-foreground">Uptime guarantee</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-xl h-16 px-10">
              Create Your Agent Force Today
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            
            <Button variant="glow" size="lg" className="text-xl h-16 px-10">
              Schedule Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="space-y-4 pt-8">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Setup in minutes
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Join the agentic revolution. Your competitors are already building their Agent Forces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTASection;