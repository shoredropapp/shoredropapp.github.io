import { Card, CardContent } from "../components/card";
import { Calendar, MapPin, Clock, Armchair, Coffee, Truck } from "lucide-react";

const Features = () => {
  const steps = [
    {
      number: "1",
      icon: Calendar,
      title: "Reserve Your Setup",
      description:
        "Pick your favorite package or design your own. Secure your beach day in advance or book-on demand, subject to availability.",
    },
    {
      number: "2",
      icon: MapPin,
      title: "Choose Your Spot",
      description:
        "Pick the street and the time you plan on arriving — we'll reserve a prime spot on the beach for you.",
    },
    {
      number: "3",
      icon: Armchair,
      title: "Relax & Enjoy",
      description:
        "Arrive at the location with the perfect beach day setup. Order from local restaurants and enjoy!",
    },
    {
      number: "4",
      icon: Truck,
      title: "Fast & Stress-Free Pickup",
      description:
        "When your beach day ends, we pack everything up — so you don't have to lift a finger.",
    },
  ];

  return (
    <section
      className="py-32"
      style={{
        backgroundColor: "hsl(200, 20%, 98%)", // matches bg-background from your original :root
      }}
    >
      <div className="container mx-auto px-4">
        <div id="learn-more" className="text-center mb-20">
          <h2
            className="text-5xl font-light mb-6"
            style={{ color: "hsl(210, 85%, 25%)" }} // ocean-deep
          >
            Your easiest beach day ever.
          </h2>

          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "hsl(200, 25%, 50%)" }} // muted-foreground
          >
            Follow these 4 simple steps to reserve your setup, pick your spot,
            and enjoy a hassle-free beach day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-0 transition-all duration-500 group relative"
              style={{
                boxShadow:
                  "0 1px 3px 0 hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)", // shadow-soft
              }}
            >
              <CardContent className="p-8 text-center space-y-6">
                {/* Step bubble */}
                <div
                  className="absolute -top-4 -left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: "hsl(210, 75%, 45%)" }} // ocean-light
                >
                  {step.number}
                </div>

                {/* Icon box */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto transition-colors duration-300 group-hover:bg-[#3586ff]"
                  style={{ backgroundColor: "hsl(210, 60%, 75%)" }} // ocean-lighter
                >
                  <step.icon
                    className="h-8 w-8 transition-colors duration-300 group-hover:text-white"
                    style={{ color: "hsl(210, 85%, 25%)" }} // ocean-deep
                  />
                </div>

                {/* Text */}
                <div className="space-y-3">
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: "hsl(210, 85%, 25%)" }} // ocean-deep
                  >
                    {step.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "hsl(200, 25%, 50%)" }} // muted-foreground
                  >
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
