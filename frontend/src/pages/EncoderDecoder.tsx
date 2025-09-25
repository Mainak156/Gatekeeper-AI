import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TruthTable } from "@/components/TruthTable";
import { Shuffle, ArrowRight, ArrowLeft } from "lucide-react";

const EncoderDecoder = () => {
  const decoder2to4TruthTable = {
    headers: ["A1", "A0", "Y3", "Y2", "Y1", "Y0"],
    rows: [
      [0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 1, 0],
      [1, 0, 0, 1, 0, 0],
      [1, 1, 1, 0, 0, 0]
    ]
  };

  const encoder4to2TruthTable = {
    headers: ["I3", "I2", "I1", "I0", "A1", "A0"],
    rows: [
      [0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 1],
      [0, 1, 0, 0, 1, 0],
      [1, 0, 0, 0, 1, 1]
    ]
  };

  const encoder8to3TruthTable = {
    headers: ["I7", "I6", "I5", "I4", "I3", "I2", "I1", "I0", "A2", "A1", "A0"],
    rows: [
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1]
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-hero circuit-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow-primary">
              <Shuffle className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Encoder & Decoder
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data conversion circuits that transform information between different encoding schemes in digital systems.
          </p>
        </div>

        <div className="space-y-12">
          {/* Decoder Section */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary flex items-center space-x-3">
                <ArrowRight className="h-8 w-8" />
                <span>2-to-4 Decoder</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Converts 2-bit binary input into 4 unique output lines, with only one output active at a time.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Boolean Expressions</h3>
                    <div className="space-y-2 p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="font-mono text-sm space-y-1">
                        <div><span className="text-muted-foreground">Y0 = </span><span className="text-primary font-bold">Ā1 · Ā0</span></div>
                        <div><span className="text-muted-foreground">Y1 = </span><span className="text-primary font-bold">Ā1 · A0</span></div>
                        <div><span className="text-muted-foreground">Y2 = </span><span className="text-primary font-bold">A1 · Ā0</span></div>
                        <div><span className="text-muted-foreground">Y3 = </span><span className="text-primary font-bold">A1 · A0</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>2 input lines, 4 output lines</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Only one output is HIGH at any time</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Uses AND gates with inverted inputs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Can include enable input for control</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <TruthTable 
                    title="2-to-4 Decoder Truth Table"
                    headers={decoder2to4TruthTable.headers}
                    rows={decoder2to4TruthTable.rows}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Applications</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-accent mb-2">Memory Addressing</h4>
                    <p className="text-sm text-muted-foreground">
                      Address decoding in memory systems
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-accent mb-2">Device Selection</h4>
                    <p className="text-sm text-muted-foreground">
                      Chip select signals in microprocessors
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-accent mb-2">Display Systems</h4>
                    <p className="text-sm text-muted-foreground">
                      7-segment display drivers
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4-to-2 Encoder */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-accent flex items-center space-x-3">
                <ArrowLeft className="h-8 w-8" />
                <span>4-to-2 Encoder</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Converts 4 input lines into 2-bit binary output, encoding the position of the active input.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Boolean Expressions</h3>
                    <div className="space-y-2 p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="font-mono text-sm space-y-1">
                        <div><span className="text-muted-foreground">A0 = </span><span className="text-accent font-bold">I1 + I3</span></div>
                        <div><span className="text-muted-foreground">A1 = </span><span className="text-accent font-bold">I2 + I3</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>4 input lines, 2 output lines</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Only one input should be HIGH at a time</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Priority encoder handles multiple inputs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Uses OR gates for output generation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <TruthTable 
                    title="4-to-2 Encoder Truth Table"
                    headers={encoder4to2TruthTable.headers}
                    rows={encoder4to2TruthTable.rows}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 8-to-3 Encoder */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary flex items-center space-x-3">
                <ArrowLeft className="h-8 w-8" />
                <span>8-to-3 Encoder</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Converts 8 input lines into 3-bit binary output, commonly used in octal to binary conversion.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Boolean Expressions</h3>
                    <div className="space-y-2 p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="font-mono text-xs space-y-1">
                        <div><span className="text-muted-foreground">A0 = </span><span className="text-primary font-bold">I1 + I3 + I5 + I7</span></div>
                        <div><span className="text-muted-foreground">A1 = </span><span className="text-primary font-bold">I2 + I3 + I6 + I7</span></div>
                        <div><span className="text-muted-foreground">A2 = </span><span className="text-primary font-bold">I4 + I5 + I6 + I7</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Applications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Keyboard encoding circuits</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Priority interrupt systems</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Octal to binary conversion</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Data compression systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <TruthTable 
                    title="8-to-3 Encoder Truth Table"
                    headers={encoder8to3TruthTable.headers}
                    rows={encoder8to3TruthTable.rows}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default EncoderDecoder;