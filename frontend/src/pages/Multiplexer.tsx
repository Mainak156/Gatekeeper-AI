import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TruthTable } from "@/components/TruthTable";
import { Split, Merge, TreePine } from "lucide-react";

const Multiplexer = () => {
  const mux2to1TruthTable = {
    headers: ["S", "I0", "I1", "Y"],
    rows: [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 1, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 1],
      [1, 1, 0, 0],
      [1, 1, 1, 1]
    ]
  };

  const mux4to1TruthTable = {
    headers: ["S1", "S0", "I0", "I1", "I2", "I3", "Y"],
    rows: [
      [0, 0, 0, "X", "X", "X", 0],
      [0, 0, 1, "X", "X", "X", 1],
      [0, 1, "X", 0, "X", "X", 0],
      [0, 1, "X", 1, "X", "X", 1],
      [1, 0, "X", "X", 0, "X", 0],
      [1, 0, "X", "X", 1, "X", 1],
      [1, 1, "X", "X", "X", 0, 0],
      [1, 1, "X", "X", "X", 1, 1]
    ]
  };

  const demux1to2TruthTable = {
    headers: ["S", "I", "Y0", "Y1"],
    rows: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 1]
    ]
  };

  const demux1to4TruthTable = {
    headers: ["S1", "S0", "I", "Y0", "Y1", "Y2", "Y3"],
    rows: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 1, 0],
      [1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0, 1]
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-hero circuit-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-primary rounded-2xl shadow-glow-primary">
              <Split className="h-12 w-12 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Multiplexer & Demultiplexer
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data routing circuits that select and direct information flow in digital systems.
          </p>
        </div>

        <div className="space-y-12">
          {/* 2:1 Multiplexer */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary flex items-center space-x-3">
                <Merge className="h-8 w-8" />
                <span>2:1 Multiplexer</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Selects one of two input lines and routes it to the output based on a select signal.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Boolean Expression</h3>
                    <div className="space-y-2 p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="font-mono text-lg">
                        <span className="text-muted-foreground">Y = </span>
                        <span className="text-primary font-bold">S̄·I0 + S·I1</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>2 data inputs, 1 select input, 1 output</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Select signal controls which input is routed</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>When S=0, output = I0; When S=1, output = I1</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Basic building block for larger MUX</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <TruthTable 
                    title="2:1 MUX Truth Table"
                    headers={mux2to1TruthTable.headers}
                    rows={mux2to1TruthTable.rows}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 4:1 Multiplexer */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-accent flex items-center space-x-3">
                <TreePine className="h-8 w-8" />
                <span>4:1 Multiplexer</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Selects one of four input lines using two select signals and routes it to the output.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Boolean Expression</h3>
                    <div className="space-y-1 p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="font-mono text-sm">
                        <span className="text-muted-foreground">Y = </span>
                        <span className="text-accent font-bold">S̄1·S̄0·I0 + S̄1·S0·I1 +</span>
                      </div>
                      <div className="font-mono text-sm pl-6">
                        <span className="text-accent font-bold">S1·S̄0·I2 + S1·S0·I3</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Select Logic</h3>
                    <div className="space-y-2 p-4 bg-secondary/20 rounded-lg border border-border">
                      <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                        <div>S1=0, S0=0 → I0</div>
                        <div>S1=0, S0=1 → I1</div>
                        <div>S1=1, S0=0 → I2</div>
                        <div>S1=1, S0=1 → I3</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <TruthTable 
                    title="4:1 MUX Truth Table (X = Don't Care)"
                    headers={mux4to1TruthTable.headers}
                    rows={mux4to1TruthTable.rows}
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Applications</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2">Data Routing</h4>
                    <p className="text-sm text-muted-foreground">
                      CPU register selection and data path control
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2">Function Generator</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementing Boolean functions with truth tables
                    </p>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                    <h4 className="font-semibold text-primary mb-2">Time Division</h4>
                    <p className="text-sm text-muted-foreground">
                      Multiplexing multiple signals onto single channel
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 1:2 Demultiplexer */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-primary flex items-center space-x-3">
                <Split className="h-8 w-8" />
                <span>1:2 Demultiplexer</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Routes a single input to one of two outputs based on a select signal.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Boolean Expressions</h3>
                    <div className="space-y-2 p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="font-mono text-sm space-y-1">
                        <div><span className="text-muted-foreground">Y0 = </span><span className="text-primary font-bold">S̄ · I</span></div>
                        <div><span className="text-muted-foreground">Y1 = </span><span className="text-primary font-bold">S · I</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>1 data input, 1 select input, 2 outputs</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>Opposite function of multiplexer</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>When S=0, input goes to Y0</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <span>When S=1, input goes to Y1</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <TruthTable 
                    title="1:2 DEMUX Truth Table"
                    headers={demux1to2TruthTable.headers}
                    rows={demux1to2TruthTable.rows}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 1:4 Demultiplexer */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-accent flex items-center space-x-3">
                <Split className="h-8 w-8 rotate-180" />
                <span>1:4 Demultiplexer</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Routes a single input to one of four outputs using two select signals.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Boolean Expressions</h3>
                    <div className="space-y-1 p-4 bg-secondary/30 rounded-lg border border-border">
                      <div className="font-mono text-xs space-y-1">
                        <div><span className="text-muted-foreground">Y0 = </span><span className="text-accent font-bold">S̄1 · S̄0 · I</span></div>
                        <div><span className="text-muted-foreground">Y1 = </span><span className="text-accent font-bold">S̄1 · S0 · I</span></div>
                        <div><span className="text-muted-foreground">Y2 = </span><span className="text-accent font-bold">S1 · S̄0 · I</span></div>
                        <div><span className="text-muted-foreground">Y3 = </span><span className="text-accent font-bold">S1 · S0 · I</span></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Applications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Address decoding in memory systems</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Data distribution in networks</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Serial to parallel conversion</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                        <span>Control signal distribution</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <TruthTable 
                    title="1:4 DEMUX Truth Table"
                    headers={demux1to4TruthTable.headers}
                    rows={demux1to4TruthTable.rows}
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

export default Multiplexer;