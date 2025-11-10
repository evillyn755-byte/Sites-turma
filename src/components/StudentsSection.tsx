import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star } from "lucide-react";
import { useState } from "react";

// Importando as imagens
import calebe from "../assets/Alunos/Calebe.jpeg";
import eloa from "../assets/Alunos/Eloa.jpeg";
import daviLucas from "../assets/Alunos/Davi Lucas.jpeg";
import anaLuiza from "../assets/Alunos/Ana Luiza.jpeg";
import mariaFlor from "../assets/Alunos/Maria-Flor.jpeg";
import alice from "../assets/Alunos/Alice.jpeg";
import kaue from "../assets/Alunos/Kaue.jpeg";
import lorenzzo from "../assets/Alunos/Lorenzzo.jpeg";
import lucas from "../assets/Alunos/Lucas.jpeg";
import aylla from "../assets/Alunos/Aylla.jpeg";
import samuel from "../assets/Alunos/Samuel.jpeg";
import emanuelle from "../assets/Alunos/Emanuelly.jpeg";
import layze from "../assets/Alunos/Layze.jpeg";
import yasmim from "../assets/Alunos/Yasmim.jpeg";
import joaoDavi from "../assets/Alunos/Joao Davi.jpeg";
import joaoFelipe from "../assets/Alunos/Joao Felipe.jpeg";
import joaoVitor from "../assets/Alunos/Joao vitor.jpeg";
import bruna from "../assets/Alunos/Bruna.jpeg";
import isaque from "../assets/Alunos/Isaque.jpeg";
import alicia from "../assets/Alunos/Alicia.jpeg";
import profEvillyn from "../assets/Alunos/profes.png";

const AlunosSection = () => {
    const [selectedStudent, setSelectedStudent] = useState<null | {
      name: string;
      dream: string;
      image: string;
    }>(null);
    const [isOpen, setIsOpen] = useState(false);

    const students = [
    { name: "Prof: Evillyn + Prof Aux: Antonielle", dream: "Em nome das Professoras Evillyn e Antonielle, agradecemos a cada criança desta turma por encher nossos dias de alegria, aprendizado e momentos que guardaremos para sempre no coração.", image: profEvillyn },
    { name: "Calebe", dream: "Entra trazendo sua alegria e curiosidade que encantam todos os dias.", image: calebe },
    { name: "Eloa", dream: "Chega com sua doçura e criatividade que iluminam a sala.", image: eloa },
    { name: "Davi Lucas", dream: "Entra mostrando sua energia e vontade linda de aprender.", image: daviLucas },
    { name: "Ana Luiza", dream: "Vem com seu carinho e delicadeza que fazem tudo mais leve.", image: anaLuiza },
    { name: "Maria Flor", dream: "Chega com seu brilho especial e seu jeito sempre gentil.", image: mariaFlor },
    { name: "Alice", dream: "Entra com sua imaginação viva e seu sorriso que contagia.", image: alice },
    { name: "Kaue", dream: "Vem com sua coragem e entusiasmo em cada descoberta.", image: kaue },
    { name: "Lorenzzo", dream: "Chega trazendo sua alegria e seu jeito participativo.", image: lorenzzo },
    { name: "Lucas", dream: "Entra com sua esperteza e vontade de explorar o novo.", image: lucas },
    { name: "Aylla", dream: "Vem com sua meiguice e seu coração cheio de afeto.", image: aylla },
    { name: "Samuel", dream: "Chega com sua energia boa e sua dedicação nas atividades.", image: samuel },
    { name: "Emanuelly", dream: "Entra com sua simpatia e criatividade encantadora.", image: emanuelle },
    { name: "Layze", dream: "Vem com seu jeitinho doce e sua responsabilidade admirável.", image: layze },
    { name: "Yasmim", dream: "Chega com sua alegria vibrante e imaginação colorida.", image: yasmim },
    { name: "João Davi", dream: "Entra trazendo sua curiosidade e seu sorriso sincero.", image: joaoDavi },
    { name: "João Felipe", dream: "Vem com seu jeito carismático e vontade bonita de aprender.", image: joaoFelipe },
    { name: "João Vitor", dream: "Chega mostrando sua determinação e carinho.", image: joaoVitor },
    { name: "Isaque ", dream: "vem com sua energia cativante e seu jeito inteligente de aprender.", image: isaque },
    { name: "Alicia", dream: "chega com sua doçura e criatividade que encantam a todos.", image: alicia },
    { name: "Bruna", dream: "Entra com sua delicadeza e seu brilho especial em cada detalhe.", image: bruna }
  ];

  const gradients = [
    "from-primary to-accent",
    "from-accent to-secondary",
    "from-secondary to-success",
    "from-success to-primary",
  ];

  return (
    <section id="formandos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-secondary fill-secondary" />
            <Star className="w-8 h-8 text-primary fill-primary" />
            <Star className="w-6 h-6 text-secondary fill-secondary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Conheça Nossa Turminha!
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Nossos queridos formandos 2025
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-border/50 cursor-pointer"
              onClick={() => {
                setSelectedStudent(student);
                setIsOpen(true);
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Avatar className={`w-24 h-24 mx-auto bg-gradient-to-br ${gradients[index % gradients.length]} border-4 border-background shadow-lg`}>
                    <AvatarImage src={student.image} alt={student.name} />
                    <AvatarFallback className="text-2xl font-bold text-white bg-transparent">
                      {student.name[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {student.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold"></span> {student.dream}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          {selectedStudent && (
            <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] p-0 bg-background rounded-xl overflow-hidden">
              <div className="md:grid md:grid-cols-2 md:gap-6">
                {/* Coluna da imagem */}
                <div className="relative">
                  <div className="aspect-square relative overflow-hidden md:rounded-tr-none">
                    <img
                      src={selectedStudent.image}
                      alt={selectedStudent.name}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Coluna das informações */}
                <div className="p-6 flex flex-col justify-center">
                  <DialogHeader>
                    <DialogTitle className="text-2xl md:text-3xl font-bold mb-4">
                      {selectedStudent.name}
                    </DialogTitle>
                  </DialogHeader>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {selectedStudent.dream}
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

export default AlunosSection;
