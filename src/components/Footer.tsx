import { Heart, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-primary">
              Escola Municipal Fazendo Arte
            </h3>
          </div>
          
          <p className="text-muted-foreground text-lg">
            Festa de Final de Ano - Turma Pré 2 🎉
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>para nossos queridos alunos</span>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2024 Escola Municipal Fazendo Arte. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
