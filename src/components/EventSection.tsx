import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import RSVPDialog from "./RSVPDialog";

const EventSection = () => {
  const [isRSVPOpen, setIsRSVPOpen] = useState(false);

  const eventDetails = [
    {
      icon: Calendar,
      title: "Data",
      info: "Sexta-feira, 12 de Dezembro",
      gradient: "from-primary to-primary/70",
    },
    {
      icon: Clock,
      title: "Horário",
      info: "19:00 horas",
      gradient: "from-accent to-accent/70",
    },
    {
      icon: MapPin,
      title: "Local",
      info: "Clube Lions",
      subinfo: "Av. 7 de Setembro, 1289, Cáceres - MT",
      gradient: "from-secondary to-secondary/70",
      mapUrl: "https://www.google.com/maps?q=-16.07212794665085,-57.67447590656242",
    },
  ];

  return (
    <section id="evento" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            🎉 Detalhes da Festa
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha celebrar o final de ano com muita diversão e alegria!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {eventDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <Card
                key={index}
                className={`overflow-hidden hover:shadow-xl transition-all border-2 border-border/50 hover:border-primary/30 ${detail.mapUrl ? 'cursor-pointer hover:-translate-y-1' : ''}`}
                onClick={() => {
                  if (detail.mapUrl) {
                    window.open(detail.mapUrl, '_blank');
                  }
                }}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${detail.gradient} flex items-center justify-center mb-4 mx-auto animate-float`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-center mb-3 text-foreground">
                    {detail.title}
                  </h3>
                  <p className="text-center text-foreground font-medium text-lg">
                    {detail.info}
                  </p>
                  {detail.subinfo && (
                    <p className="text-center text-muted-foreground text-sm mt-2">
                      {detail.subinfo}
                    </p>
                  )}
                  {detail.mapUrl && (
                    <p className="text-center text-primary text-sm mt-3 font-medium">
                      Clique para ver no mapa
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          
        </div>

        <RSVPDialog open={isRSVPOpen} onOpenChange={setIsRSVPOpen} />
      </div>
    </section>
  );
};

export default EventSection;
