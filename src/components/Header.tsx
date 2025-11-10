import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-xl">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Escola Municipal Fazendo Arte
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Festa de Final de Ano - Pré 2
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("evento")}
              className="font-medium hover:text-primary"
            >
              O Evento
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("formandos")}
              className="font-medium hover:text-primary"
            >
              Nossos Alunos
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("galeria")}
              className="font-medium hover:text-primary"
            >
              Galeria
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
