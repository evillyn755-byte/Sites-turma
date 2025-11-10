import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

// Importando as imagens
import seteDeSentembro from "../assets/Projetos/7 de setenbro.jpeg";
import diadasCriancas from "../assets/Projetos/dias das crianças.jpeg";
import festaPijama from "../assets/Projetos/festa do pijama.jpeg";
import festaJunina from "../assets/Projetos/festa junima.jpeg";
import maquete from "../assets/Projetos/maquete.jpeg";
import momentos from "../assets/Projetos/Monetos.jpeg";
import museu from "../assets/Projetos/Museu.jpeg";
import museuAlunos from "../assets/Projetos/museuAlunos.jpeg";
import pantanalSemChamas from "../assets/Projetos/pantanal sem chman.jpeg";
import pascoa from "../assets/Projetos/Pascoa.jpeg";
import povosOriginais from "../assets/Projetos/Povos Originais.jpeg";
import povosOriginarios from "../assets/Projetos/Povos originarios.jpeg";
import turma from "../assets/Projetos/turma.jpeg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<null | {
    image: string;
    title: string;
    description: string;
  }>(null);
  const [isOpen, setIsOpen] = useState(false);

  const galleryItems = [
    { image: seteDeSentembro, title: "Desfile 7 de Setembro", description: "Participação especial no desfile cívico" },
    { image: diadasCriancas, title: "Dia das Crianças", description: "Comemorações e brincadeiras especiais" },
    { image: festaPijama, title: "Festa do Pijama", description: "Uma noite mágica e divertida" },
    { image: festaJunina, title: "Festa Junina", description: "Tradições e alegria junina" },
    { image: maquete, title: "Projeto Maquete", description: "Aprendendo com criatividade" },
    { image: momentos, title: "Momentos Especiais", description: "Memórias do nosso ano" },
    { image: museu, title: "Visita ao Museu", description: "Descobrindo nossa história" },
    { image: museuAlunos, title: "Alunos no Museu", description: "Explorando e aprendendo" },
    { image: pantanalSemChamas, title: "Pantanal sem Chamas", description: "Projeto de conscientização ambiental" },
    { image: pascoa, title: "Páscoa", description: "Celebração e compartilhamento" },
    { image: povosOriginais, title: "Povos Originais", description: "Aprendendo sobre nossa cultura" },
    { image: povosOriginarios, title: "Cultura Indígena", description: "Respeito e valorização" },
    { image: turma, title: "Nossa Turma", description: "Unidos e felizes" }
  ];

  const gradients = [
    "from-primary/20 to-accent/20",
    "from-accent/20 to-secondary/20",
    "from-secondary/20 to-success/20",
    "from-success/20 to-primary/20",
  ];

  return (
    <section id="galeria" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            📸 Galeria de Fotos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Momentos inesquecíveis do nosso ano letivo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-border/50 cursor-pointer group"
              onClick={() => {
                setSelectedImage(item);
                setIsOpen(true);
              }}
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          {selectedImage && (
            <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] p-0 bg-background rounded-xl overflow-hidden">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                {/* Coluna da imagem */}
                <div className="relative">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                {/* Coluna das informações */}
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {selectedImage.title}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default GallerySection;
