import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cpu, Zap } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-primary rounded-lg group-hover:shadow-glow-primary transition-all duration-300">
              <Cpu className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Digital Logic Lab
            </span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              asChild
              className="hover:shadow-glow-primary transition-all duration-300"
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant={isActive("/logic-gates") ? "default" : "ghost"}
              asChild
              className="hover:shadow-glow-primary transition-all duration-300"
            >
              <Link to="/logic-gates">Logic Gates</Link>
            </Button>
            <Button
              variant={isActive("/adders") ? "default" : "ghost"}
              asChild
              className="hover:shadow-glow-primary transition-all duration-300"
            >
              <Link to="/adders">Adders</Link>
            </Button>
            <Button
              variant={isActive("/encoder-decoder") ? "default" : "ghost"}
              asChild
              className="hover:shadow-glow-primary transition-all duration-300"
            >
              <Link to="/encoder-decoder">Encoder/Decoder</Link>
            </Button>
            <Button
              variant={isActive("/multiplexer") ? "default" : "ghost"}
              asChild
              className="hover:shadow-glow-primary transition-all duration-300"
            >
              <Link to="/multiplexer">Mux/Demux</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};