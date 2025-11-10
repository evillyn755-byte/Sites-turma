import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface RSVPDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RSVPDialog = ({ open, onOpenChange }: RSVPDialogProps) => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Atenção",
        description: "Por favor, preencha seu nome.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Presença Confirmada! 🎉",
      description: `Obrigado, ${name}! Sua presença e de ${guests} acompanhante(s) foi confirmada.`,
    });

    setName("");
    setGuests("1");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Confirmar Presença
          </DialogTitle>
          <DialogDescription>
            Ficaremos muito felizes com sua presença! Por favor, preencha os dados abaixo.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base font-semibold">
              Nome Completo
            </Label>
            <Input
              id="name"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-base"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="guests" className="text-base font-semibold">
              Número de Acompanhantes
            </Label>
            <Input
              id="guests"
              type="number"
              min="0"
              max="5"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="text-base"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 font-bold text-base py-6"
          >
            Confirmar Presença ✓
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RSVPDialog;
