"use client";

import { Card, CardContent } from "../components/card";
import { Button } from "../components/button";
import { Plus } from "lucide-react";
import { useCart } from "../contexts/CartContext";

const Services = () => {
  const { addPackage, addItem } = useCart();

  const packages = [
    {
      image: "/assets/chill-pill-package.jpg",
      title: "The Chill Pill",
      description: "Perfect for a simple beach day.",
      items: ["1 Chair", "1 Umbrella", "1 Small Cooler with Ice"],
      price: "Starting at $34.99",
      accent: "bg-[#A8DADC]"
    },
    {
      image: "/assets/sandy-duo-package.jpg",
      title: "The Sandy Duo",
      description: "Great for two people looking to relax.",
      items: ["2 Chairs", "1 Umbrella", "1 Small Cooler with Ice"],
      price: "Starting at $44.99",
      accent: "bg-[#FFE4C2]"
    },
    {
      image: "/assets/shady-bunch-package.jpg",
      title: "The Shady Bunch",
      description: "A well-rounded setup for a small group.",
      items: ["4 Chairs", "1 Tent", "1 Large Cooler with Ice"],
      price: "Starting at $59.99",
      accent: "bg-[#FF7860]"
    },
    {
      image: "/assets/mega-drop-package.jpg",
      title: "The Mega Drop",
      description: "The ultimate beach experience for big groups.",
      items: ["7 Chairs", "2 Tents", "2 Large Coolers with Ice"],
      price: "Starting at $119.99",
      accent: "bg-[#CAF0F8]"
    }
  ];

  const customItems = [
    { image: "/assets/beach-chair.jpg", name: "Chair", price: "$15", description: "" },
    { image: "/assets/beach-tent.jpg", name: "Tent", price: "$25", description: "" },
    { image: "/assets/beach-umbrella.jpg", name: "Umbrella", price: "$30", description: "" },
    { image: "/assets/beach-towel.jpg", name: "Towel", price: "$3", description: "" },
    { image: "/assets/small-cooler.jpg", name: "Small Cooler with Ice", price: "$15"},
    { image: "/assets/large-cooler.jpg", name: "Large Cooler with Ice", price: "$25"}
  ];

  return (
    <section className="py-32" style={{ backgroundColor: "#FFF7EE" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light mb-6" style={{ color: "#003049" }}>
            Beach Packages
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: "#6C7A89" }}>
            Choose the perfect setup for your beach day. All packages include premium equipment delivered directly to your spot.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 group shadow-lg hover:shadow-xl"
            >
              <CardContent className="p-8 flex flex-col h-full gap-6">
                <div className="w-full h-40 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-4 flex-1 flex flex-col">
                  <div className="space-y-2 min-h-[88px]">
                    <h3 className="text-xl font-semibold" style={{ color: "#003049" }}>
                      {pkg.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#6C7A89" }}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium" style={{ color: "#003049" }}>
                      Includes:
                    </p>
                    <ul className="space-y-2">
                      {pkg.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm flex items-start" style={{ color: "#6C7A89" }}>
                          <div
                            className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0"
                            style={{ backgroundColor: "#A8DADC" }}
                          ></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold" style={{ color: "#003049" }}>
                        {pkg.price}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Build Your Own Setup */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-light mb-4" style={{ color: "#003049" }}>
              Build Your Own Setup
            </h3>
            <p className="text-lg max-w-xl mx-auto" style={{ color: "#6C7A89" }}>
              Customize your perfect beach day with individual items
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {customItems.map((item, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 group shadow-lg hover:shadow-xl"
              >
                <CardContent className="p-4 space-y-3">
                  <div className="w-full h-20 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold leading-tight" style={{ color: "#003049" }}>
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-xs" style={{ color: "#6C7A89" }}>
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold" style={{ color: "#003049" }}>
                        {item.price}
                      </span>
                
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
