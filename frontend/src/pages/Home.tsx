import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { 
  Zap, 
  Plus, 
  Shuffle, 
  Split,
  ArrowRight,
  Cpu,
  Binary,
  GitBranch
} from "lucide-react";

const Home = () => {
  const sections = [
    {
      title: "Logic Gates",
      description: "Explore fundamental digital logic gates with interactive truth tables and symbols",
      icon: Zap,
      path: "/logic-gates",
      gates: ["AND", "OR", "NOT", "NAND", "NOR", "XOR", "XNOR"],
      color: "text-primary"
    },
    {
      title: "Adders",
      description: "Learn about half adders and full adders with detailed explanations",
      icon: Plus,
      path: "/adders",
      gates: ["Half Adder", "Full Adder"],
      color: "text-accent"
    },
    {
      title: "Encoder & Decoder",
      description: "Understand encoding and decoding operations in digital systems",
      icon: Shuffle,
      path: "/encoder-decoder",
      gates: ["2-to-4 Decoder", "4-to-2 Encoder", "8-to-3 Encoder"],
      color: "text-primary"
    },
    {
      title: "Multiplexer & Demultiplexer",
      description: "Master data routing with multiplexers and demultiplexers",
      icon: Split,
      path: "/multiplexer",
      gates: ["2:1 MUX", "4:1 MUX", "1:2 DEMUX", "1:4 DEMUX"],
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero circuit-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow-primary pulse-glow">
              <Cpu className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Digital Logic Lab
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interactive learning platform for digital logic components. Explore truth tables, 
            logic symbols, and comprehensive explanations for gates, adders, encoders, and multiplexers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card hover:shadow-glow-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 bg-secondary rounded-lg ${section.color} group-hover:shadow-glow-accent transition-all duration-300`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {section.title}
                        </CardTitle>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {section.gates.map((gate, gateIndex) => (
                        <span 
                          key={gateIndex}
                          className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-full border border-border"
                        >
                          {gate}
                        </span>
                      ))}
                    </div>
                    <Button 
                      asChild 
                      className="w-full group-hover:shadow-glow-primary transition-all duration-300"
                      variant="outline"
                    >
                      <Link to={section.path} className="flex items-center justify-center space-x-2">
                        <span>Explore {section.title}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Learning Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="p-4 bg-secondary rounded-lg inline-block">
                <Binary className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Interactive Truth Tables</h3>
              <p className="text-muted-foreground">
                Explore complete truth tables with clear input-output relationships
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-secondary rounded-lg inline-block">
                <GitBranch className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Logic Symbols</h3>
              <p className="text-muted-foreground">
                Visual representations of logic gates and digital components
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-secondary rounded-lg inline-block">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Detailed Explanations</h3>
              <p className="text-muted-foreground">
                Comprehensive analysis of properties and real-world applications
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;