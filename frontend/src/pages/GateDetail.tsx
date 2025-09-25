import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { TruthTable } from "@/components/TruthTable";
import { LogicGateSymbol } from "@/components/LogicGateSymbol";
import { ArrowLeft, Info, Zap, Calculator } from "lucide-react";

const GateDetail = () => {
  const { gateName } = useParams<{ gateName: string }>();
  
  const getGateData = (gate: string) => {
    const gateUpper = gate?.toUpperCase() || "";
    
    const gateData: Record<string, any> = {
      "AND": {
        name: "AND Gate",
        formula: "Y = A · B",
        description: "The AND gate outputs HIGH (1) only when all inputs are HIGH (1). If any input is LOW (0), the output is LOW (0).",
        truthTable: {
          headers: ["A", "B", "Y"],
          rows: [
            [0, 0, 0],
            [0, 1, 0],
            [1, 0, 0],
            [1, 1, 1]
          ]
        },
        properties: [
          "Commutative: A·B = B·A",
          "Associative: (A·B)·C = A·(B·C)",
          "Identity: A·1 = A",
          "Null: A·0 = 0",
          "Idempotent: A·A = A"
        ],
        applications: [
          "Used in safety systems where all conditions must be met",
          "Input validation in digital systems",
          "Masking operations in data processing",
          "Building blocks for more complex logic circuits"
        ]
      },
      "OR": {
        name: "OR Gate",
        formula: "Y = A + B",
        description: "The OR gate outputs HIGH (1) when at least one input is HIGH (1). It only outputs LOW (0) when all inputs are LOW (0).",
        truthTable: {
          headers: ["A", "B", "Y"],
          rows: [
            [0, 0, 0],
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
          ]
        },
        properties: [
          "Commutative: A+B = B+A",
          "Associative: (A+B)+C = A+(B+C)",
          "Identity: A+0 = A",
          "Null: A+1 = 1",
          "Idempotent: A+A = A"
        ],
        applications: [
          "Alarm systems where any trigger activates the alarm",
          "Input selection in digital multiplexers",
          "Priority encoding circuits",
          "Building blocks for adders and comparators"
        ]
      },
      "NOT": {
        name: "NOT Gate (Inverter)",
        formula: "Y = Ā",
        description: "The NOT gate (inverter) outputs the opposite of its input. If input is HIGH (1), output is LOW (0), and vice versa.",
        truthTable: {
          headers: ["A", "Y"],
          rows: [
            [0, 1],
            [1, 0]
          ]
        },
        properties: [
          "Involution: (Ā)¯ = A",
          "Complement: A + Ā = 1",
          "Complement: A · Ā = 0",
          "Self-dual operation"
        ],
        applications: [
          "Signal inversion in digital circuits",
          "Creating complement functions",
          "Clock signal generation",
          "Building blocks for other logic gates"
        ]
      },
      "NAND": {
        name: "NAND Gate",
        formula: "Y = (A · B)'",
        description: "The NAND gate is a NOT-AND combination. It outputs LOW (0) only when all inputs are HIGH (1), otherwise it outputs HIGH (1).",
        truthTable: {
          headers: ["A", "B", "Y"],
          rows: [
            [0, 0, 1],
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0]
          ]
        },
        properties: [
          "Universal gate - can implement any Boolean function",
          "NOT equivalent to AND followed by NOT",
          "De Morgan's Law: (A·B)' = Ā + B̄",
          "Functionally complete"
        ],
        applications: [
          "Memory cells in SRAM",
          "Building any logic function using only NAND gates",
          "Schmitt triggers and oscillators",
          "Flash memory and EEPROM circuits"
        ]
      },
      "NOR": {
        name: "NOR Gate", 
        formula: "Y = (A + B)'",
        description: "The NOR gate is a NOT-OR combination. It outputs HIGH (1) only when all inputs are LOW (0), otherwise it outputs LOW (0).",
        truthTable: {
          headers: ["A", "B", "Y"],
          rows: [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
            [1, 1, 0]
          ]
        },
        properties: [
          "Universal gate - can implement any Boolean function",
          "NOT equivalent to OR followed by NOT",
          "De Morgan's Law: (A+B)' = Ā · B̄",
          "Functionally complete"
        ],
        applications: [
          "Building any logic function using only NOR gates",
          "Set-reset latches and flip-flops",
          "Encoder and decoder circuits",
          "Priority encoders"
        ]
      },
      "XOR": {
        name: "XOR Gate (Exclusive OR)",
        formula: "Y = A ⊕ B",
        description: "The XOR gate outputs HIGH (1) when inputs are different. It outputs LOW (0) when inputs are the same.",
        truthTable: {
          headers: ["A", "B", "Y"],
          rows: [
            [0, 0, 0],
            [0, 1, 1],
            [1, 0, 1],
            [1, 1, 0]
          ]
        },
        properties: [
          "Commutative: A⊕B = B⊕A",
          "Associative: (A⊕B)⊕C = A⊕(B⊕C)",
          "Identity: A⊕0 = A",
          "Self-inverse: A⊕A = 0"
        ],
        applications: [
          "Binary addition (sum bit in adders)",
          "Parity generation and checking",
          "Encryption and data security",
          "Error detection circuits"
        ]
      },
      "XNOR": {
        name: "XNOR Gate (Exclusive NOR)",
        formula: "Y = (A ⊕ B)'",
        description: "The XNOR gate outputs HIGH (1) when inputs are the same. It outputs LOW (0) when inputs are different.",
        truthTable: {
          headers: ["A", "B", "Y"],
          rows: [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0],
            [1, 1, 1]
          ]
        },
        properties: [
          "Complement of XOR: XNOR = (XOR)'",
          "Equivalence function",
          "Commutative: A⊙B = B⊙A",
          "Associative for multiple inputs"
        ],
        applications: [
          "Equality comparators",
          "Error correction circuits",
          "Digital communication systems",
          "Phase detectors in PLLs"
        ]
      }
    };
    
    return gateData[gateUpper] || null;
  };

  const gateData = getGateData(gateName || "");

  if (!gateData) {
    return (
      <div className="min-h-screen bg-gradient-hero circuit-grid">
        <Navigation />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold text-destructive mb-4">Gate Not Found</h1>
          <Button asChild>
            <Link to="/logic-gates">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Logic Gates
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero circuit-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-6">
            <Link to="/logic-gates">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Logic Gates
            </Link>
          </Button>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              {gateData.name}
            </h1>
            <div className="text-2xl font-mono text-primary mb-4">
              {gateData.formula}
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {gateData.description}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Logic Symbol */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span>Logic Symbol</span>
              </CardTitle>
              <CardDescription>
                Standard IEEE/ANSI representation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <LogicGateSymbol gate={gateName || ""} className="text-primary" />
            </CardContent>
          </Card>

          {/* Truth Table */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-primary" />
                <span>Truth Table</span>
              </CardTitle>
              <CardDescription>
                Complete input-output relationship
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TruthTable 
                headers={gateData.truthTable.headers}
                rows={gateData.truthTable.rows}
              />
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Properties */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Info className="h-5 w-5 text-primary" />
                <span>Mathematical Properties</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {gateData.properties.map((property: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground font-mono text-sm">{property}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Applications */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-accent" />
                <span>Real-World Applications</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {gateData.applications.map((application: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{application}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GateDetail;