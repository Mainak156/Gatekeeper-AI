import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Zap } from "lucide-react";

const LogicGates = () => {
  const gates = [
    {
      name: "AND",
      description: "Output is HIGH only when all inputs are HIGH",
      formula: "Y = A · B",
      path: "/gate/and"
    },
    {
      name: "OR", 
      description: "Output is HIGH when at least one input is HIGH",
      formula: "Y = A + B",
      path: "/gate/or"
    },
    {
      name: "NOT",
      description: "Output is the inverse of the input",
      formula: "Y = Ā",
      path: "/gate/not"
    },
    {
      name: "NAND",
      description: "Output is LOW only when all inputs are HIGH",
      formula: "Y = (A · B)'",
      path: "/gate/nand"
    },
    {
      name: "NOR",
      description: "Output is LOW when at least one input is HIGH", 
      formula: "Y = (A + B)'",
      path: "/gate/nor"
    },
    {
      name: "XOR",
      description: "Output is HIGH when inputs are different",
      formula: "Y = A ⊕ B",
      path: "/gate/xor"
    },
    {
      name: "XNOR",
      description: "Output is HIGH when inputs are the same",
      formula: "Y = (A ⊕ B)'",
      path: "/gate/xnor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero circuit-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow-primary">
              <Zap className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Logic Gates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fundamental building blocks of digital circuits. Each gate performs a specific logical operation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gates.map((gate, index) => (
            <Card 
              key={index}
              className="group hover:shadow-card hover:shadow-glow-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                    {gate.name}
                  </CardTitle>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <CardDescription className="text-muted-foreground">
                  {gate.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-secondary/30 rounded-lg border border-border">
                  <span className="text-sm text-muted-foreground">Boolean Expression:</span>
                  <div className="font-mono text-lg text-primary font-semibold">
                    {gate.formula}
                  </div>
                </div>
                <Button 
                  asChild 
                  className="w-full group-hover:shadow-glow-primary transition-all duration-300"
                >
                  <Link to={gate.path} className="flex items-center justify-center space-x-2">
                    <span>Explore {gate.name} Gate</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LogicGates;