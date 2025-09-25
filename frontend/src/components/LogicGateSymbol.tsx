interface LogicGateSymbolProps {
  gate: string;
  className?: string;
}

export const LogicGateSymbol = ({ gate, className = "" }: LogicGateSymbolProps) => {
  const getGateSymbol = (gateType: string) => {
    switch (gateType.toUpperCase()) {
      case "AND":
        return (
          <svg viewBox="0 0 100 60" className={`w-32 h-24 ${className}`}>
            <path
              d="M10 10 L40 10 A20 20 0 0 1 40 50 L10 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line x1="0" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="40" x2="10" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="60" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
            <text x="5" y="16" className="text-xs fill-current">A</text>
            <text x="5" y="45" className="text-xs fill-current">B</text>
            <text x="85" y="35" className="text-xs fill-current">Y</text>
          </svg>
        );
      case "OR":
        return (
          <svg viewBox="0 0 100 60" className={`w-32 h-24 ${className}`}>
            <path
              d="M10 10 Q20 10 30 30 Q20 50 10 50 Q25 30 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M30 30 Q40 20 60 30 Q40 40 30 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line x1="0" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="40" x2="15" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="60" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
            <text x="5" y="16" className="text-xs fill-current">A</text>
            <text x="5" y="45" className="text-xs fill-current">B</text>
            <text x="85" y="35" className="text-xs fill-current">Y</text>
          </svg>
        );
      case "NOT":
        return (
          <svg viewBox="0 0 100 60" className={`w-32 h-24 ${className}`}>
            <path
              d="M10 15 L50 30 L10 45 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="55" cy="30" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="30" x2="10" y2="30" stroke="currentColor" strokeWidth="2" />
            <line x1="58" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
            <text x="5" y="26" className="text-xs fill-current">A</text>
            <text x="85" y="35" className="text-xs fill-current">Y</text>
          </svg>
        );
      case "NAND":
        return (
          <svg viewBox="0 0 100 60" className={`w-32 h-24 ${className}`}>
            <path
              d="M10 10 L40 10 A20 20 0 0 1 40 50 L10 50 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="65" cy="30" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="40" x2="10" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="68" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
            <text x="5" y="16" className="text-xs fill-current">A</text>
            <text x="5" y="45" className="text-xs fill-current">B</text>
            <text x="85" y="35" className="text-xs fill-current">Y</text>
          </svg>
        );
      case "NOR":
        return (
          <svg viewBox="0 0 100 60" className={`w-32 h-24 ${className}`}>
            <path
              d="M10 10 Q20 10 30 30 Q20 50 10 50 Q25 30 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M30 30 Q40 20 60 30 Q40 40 30 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="65" cy="30" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="40" x2="15" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="68" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
            <text x="5" y="16" className="text-xs fill-current">A</text>
            <text x="5" y="45" className="text-xs fill-current">B</text>
            <text x="85" y="35" className="text-xs fill-current">Y</text>
          </svg>
        );
      case "XOR":
        return (
          <svg viewBox="0 0 100 60" className={`w-32 h-24 ${className}`}>
            <path
              d="M5 10 Q15 10 25 30 Q15 50 5 50 Q20 30 5 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M15 10 Q25 10 35 30 Q25 50 15 50 Q30 30 15 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M35 30 Q45 20 65 30 Q45 40 35 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line x1="0" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="65" y1="30" x2="80" y2="30" stroke="currentColor" strokeWidth="2" />
            <text x="5" y="16" className="text-xs fill-current">A</text>
            <text x="5" y="45" className="text-xs fill-current">B</text>
            <text x="85" y="35" className="text-xs fill-current">Y</text>
          </svg>
        );
      case "XNOR":
        return (
          <svg viewBox="0 0 100 60" className={`w-32 h-24 ${className}`}>
            <path
              d="M5 10 Q15 10 25 30 Q15 50 5 50 Q20 30 5 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M15 10 Q25 10 35 30 Q25 50 15 50 Q30 30 15 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M35 30 Q45 20 65 30 Q45 40 35 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="70" cy="30" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2" />
            <line x1="0" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="73" y1="30" x2="85" y2="30" stroke="currentColor" strokeWidth="2" />
            <text x="5" y="16" className="text-xs fill-current">A</text>
            <text x="5" y="45" className="text-xs fill-current">B</text>
            <text x="90" y="35" className="text-xs fill-current">Y</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center p-6 bg-secondary/30 rounded-lg border border-border">
      <div className="text-primary">
        {getGateSymbol(gate)}
      </div>
    </div>
  );
};