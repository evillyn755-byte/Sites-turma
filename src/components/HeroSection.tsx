import Countdown from "./Countdown";
import heroImage from "@/assets/hero-graduation.jpg";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16 md:py-24">
      <div className="absolute inset-0 opacity-20">
        <img
          src={heroImage}
          alt="Formatura"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-bounce-slow">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Turma Pré 2 - 2025
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Festa de Final de Ano
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-medium mb-2">
            Turma Pré 2 rumo ao 1º Ano!
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Vamos celebrar juntos esse ano incrível! <br className="hidden md:block" />
            Você está convidado para nossa festa especial! 🎉🎈
          </p>
        </div>

        <div className="mb-8">
          <p className="text-center text-lg md:text-xl font-semibold text-primary mb-6">
            Contagem regressiva para a festa:
          </p>
          <Countdown />
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
