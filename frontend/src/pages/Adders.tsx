import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { TruthTable } from "@/components/TruthTable";
import { ArrowRight, Plus, Calculator, Zap } from "lucide-react";

const Adders = () => {
  const halfAdderTruthTable = {
    headers: ["A", "B", "Sum", "Carry"],
    rows: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 0, 1, 0],
      [1, 1, 0, 1]
    ]
  };

  const fullAdderTruthTable = {
    headers: ["A", "B", "Cin", "Sum", "Cout"],
    rows: [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 1, 1, 0, 1],
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 1],
      [1, 1, 0, 0, 1],
      [1, 1, 1, 1, 1]
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-hero circuit-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow-primary">
              <Plus className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Digital Adders
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential arithmetic circuits that perform binary addition operations in digital systems.
          </p>
        </div>

        <div className="space-y-12">
          {/* Half Adder */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary flex items-center space-x-3">
                <Calculator className="h-8 w-8" />
                <span>Half Adder</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Adds two single-bit binary numbers and produces sum and carry outputs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Boolean Expressions</h3>
                    <div className="space-y-2 p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="font-mono text-lg">
                        <span className="text-muted-foreground">Sum = </span>
                        <span className="text-primary font-bold">A ⊕ B</span>
                      </div>
                      <div className="font-mono text-lg">
                        <span className="text-muted-foreground">Carry = </span>
                        <span className="text-primary font-bold">A · B</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Adds two 1-bit binary numbers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>No carry input (previous carry)</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Uses XOR gate for sum output</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Uses AND gate for carry output</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <TruthTable 
                    title="Half Adder Truth Table"
                    headers={halfAdderTruthTable.headers}
                    rows={halfAdderTruthTable.rows}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Applications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-accent mb-2">LSB Addition</h4>
                    <p className="text-sm text-muted-foreground">
                      Used for adding the least significant bits in multi-bit addition
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-accent mb-2">XOR Implementation</h4>
                    <p className="text-sm text-muted-foreground">
                      Building block for implementing XOR functionality
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Full Adder */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-accent flex items-center space-x-3">
                <Zap className="h-8 w-8" />
                <span>Full Adder</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Adds three single-bit binary numbers (including carry input) and produces sum and carry outputs.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Boolean Expressions</h3>
                    <div className="space-y-2 p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="font-mono text-sm">
                        <span className="text-muted-foreground">Sum = </span>
                        <span className="text-accent font-bold">A ⊕ B ⊕ Cin</span>
                      </div>
                      <div className="font-mono text-sm">
                        <span className="text-muted-foreground">Cout = </span>
                        <span className="text-accent font-bold">AB + Cin(A ⊕ B)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Adds three 1-bit binary numbers</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Includes carry input from previous stage</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Can be cascaded for multi-bit addition</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Built using two half adders and an OR gate</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <TruthTable 
                    title="Full Adder Truth Table"
                    headers={fullAdderTruthTable.headers}
                    rows={fullAdderTruthTable.rows}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Applications</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2">ALU Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Core component in Arithmetic Logic Units
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2">Multi-bit Addition</h4>
                    <p className="text-sm text-muted-foreground">
                      Cascaded to create 4-bit, 8-bit, 16-bit adders
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2">CPU Operations</h4>
                    <p className="text-sm text-muted-foreground">
                      Essential for processor arithmetic operations
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Adders;