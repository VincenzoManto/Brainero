import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap } from "lucide-react";
import heroImage from "@/assets/hero.png";
import { Particles } from "./ui/particles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 text-accent" />
              AI agents, agentic platform, automation platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Build Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Agent Force
              </span>
              <br />
              Automate Everything.
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
              Brainero.ai is the agentic platform where you create hundreds of AI agents fully integrated with your tools. Configure them with simple prompts. No code, no hassle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg h-14 px-8">
                Launch Your AI Workforce Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button variant="glow" size="lg" className="text-lg h-14 px-8">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                500+ integrations
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                VoIP enabled
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <Particles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
            <img 
              src={heroImage} 
              alt="AI agents automation platform showing integrated workflow"
              className="relative w-full h-auto"
              style={{ mixBlendMode: 'lighten', filter: 'hue-rotate(120deg)', boxShadow: '0 0px 200px 100px rgba(0, 0, 0, 1)' }}

            />
            <div className="w-full h-full shine">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;