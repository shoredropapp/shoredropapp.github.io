"use client";

import { useState } from "react";
import { Button } from "../components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/card";
import { Checkbox } from "../components/checkbox";
import { RadioGroup, RadioGroupItem } from "../components/radio-group";
import { Label } from "../components/label";
import { Textarea } from "../components/textarea";
import { Input } from "../components/input";
import { Separator } from "../components/separator";
import { useToast } from "../hooks/use-toast";

const Survey = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    beachHassles: [] as string[],
    preferredPackage: "",
    priceRating: "",
    buildOwn: "",
    foodDelivery: "",
    restaurants: [] as string[],
    otherRestaurant: "",
    addOns: [] as string[],
    overallExperience: "",
    usageFrequency: ""
  });

  const handleCheckboxChange = (field: keyof typeof formData, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Survey Submitted!",
      description: "Thank you for your feedback. We'll use this to improve ShoreDrop.",
    });
    console.log("Survey data:", formData);
  };

  return (
    <section id="survey" className="py-20" style={{ background: "linear-gradient(to bottom, #ffffff, #FFF7EE)" }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-light mb-4" style={{ color: "#003049" }}>
              Help Us Perfect Your Beach Experience
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6C7A89" }}>
              Your feedback shapes the future of ShoreDrop. Take a moment to share your thoughts.
            </p>
          </div>

          <Card className="shadow-lg border-0">
            <CardHeader style={{ backgroundColor: "#003049", color: "#ffffff", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}>
              <CardTitle className="text-2xl font-light">ShoreDrop Website Feedback Survey</CardTitle>
              <CardDescription style={{ color: "rgba(255,255,255,0.8)" }}>
                Help us understand what matters most to beachgoers like you
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Beach Experience */}
                <div className="space-y-5">
                  <h3 className="text-xl font-medium" style={{ color: "#003049" }}>1. Beach Experience</h3>
                  <div className="space-y-6">
                    <Label className="text-base font-medium mb-4" style={{ fontWeight: 500, fontSize: "1rem" }}>What's the biggest hassle for you at the beach?</Label>
                    
                    <div className="mt-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        "Carrying gear",
                        "Getting food/drinks without leaving your beach spot",
                        "Setting up/tearing down equipment",
                        "Other"
                      ].map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <Checkbox
                            id={`hassle-${option}`}
                            checked={formData.beachHassles.includes(option)}
                            onCheckedChange={(checked) => handleCheckboxChange("beachHassles", option, checked as boolean)}
                          />
                          <Label htmlFor={`hassle-${option}`} style={{ fontSize: "0.875rem", fontWeight: 400 }}>
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {formData.beachHassles.includes("Other") && (
                      <Input placeholder="Please specify..." className="mt-2" />
                    )}
                  </div>
                </div>
                </div>

                <Separator />

                {/* Package Appeal */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium" style={{ color: "#003049" }}>2. Package Appeal</h3>
                  
                  <div className="space-y-4">
                    <Label style={{ fontWeight: 500, fontSize: "1rem" }}>Which ShoreDrop package would you most likely choose?</Label>

                    <div className="mt-4">

                    <RadioGroup value={formData.preferredPackage} onValueChange={(value) => setFormData(prev => ({ ...prev, preferredPackage: value }))}>
                      {[
                        { name: "The Chill Pill", price: "$45", description: "1 chair, 1 umbrella, 1 cooler w ice" },
                        { name: "The Sandy Duo", price: "$55", description: "2 chairs, 1 umbrella, 1 cooler w ice" },
                        { name: "The Shady Bunch", price: "$75", description: "4 chairs, 1 tent, 1 cooler w ice" },
                        { name: "The Mega Drop", price: "$125", description: "7 chairs, 2 tents, 2 coolers w ice" }
                      ].map((pkg) => (
                        <div key={pkg.name} className="flex items-center space-x-3 p-4 rounded-lg border" style={{ borderColor: "#E0E0E0", transition: "background-color 0.3s" }}>
                          <RadioGroupItem value={pkg.name} id={pkg.name} />
                          <Label htmlFor={pkg.name} className="flex-1 cursor-pointer">
                            <div style={{ fontWeight: 500 }}>{pkg.name} – {pkg.price}</div>
                            <div style={{ fontSize: "0.875rem", color: "#6C7A89" }}>({pkg.description})</div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                  </div>
                  </div>

                  <div className="space-y-4">
                    <Label style={{ fontWeight: 500, fontSize: "1rem" }}>How fair do you feel these prices are?</Label>
                    <div style={{ fontSize: "0.875rem", color: "#6C7A89", marginBottom: "0.75rem" }}>(1 = Too expensive, 5 = Great value)</div>
                    <RadioGroup value={formData.priceRating} onValueChange={(value) => setFormData(prev => ({ ...prev, priceRating: value }))} className="flex space-x-6">
                      {[1,2,3,4,5].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                          <RadioGroupItem value={rating.toString()} id={`rating-${rating}`} />
                          <Label htmlFor={`rating-${rating}`}>{rating}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <div className="mt-4">
                    <Label style={{ fontWeight: 500, fontSize: "1rem" }}>Would you prefer to build your own setup instead of buying a preset package?</Label>
                    <RadioGroup value={formData.buildOwn} onValueChange={(value) => setFormData(prev => ({ ...prev, buildOwn: value }))} className="flex space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="build-yes" />
                        <Label htmlFor="build-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="build-no" />
                        <Label htmlFor="build-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  </div>
                </div>

                <Separator />

                {/* Food & Drink Delivery */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium" style={{ color: "#003049" }}>3. Food & Drink Delivery</h3>
                  <div className="space-y-4">
                    <Label style={{ fontWeight: 500, fontSize: "1rem" }}>If ShoreDrop could bring food directly to your beach spot, would you use the service?</Label>
                    <RadioGroup value={formData.foodDelivery} onValueChange={(value) => setFormData(prev => ({ ...prev, foodDelivery: value }))}>
                      {["Yes, definitely","Maybe, depends on price","No"].map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <RadioGroupItem value={option} id={`food-${option}`} />
                          <Label htmlFor={`food-${option}`}>{option}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <Label style={{ fontWeight: 500, fontSize: "1rem" }}>Which of these local restaurants would you want ShoreDrop to deliver from?</Label>
                    <div className="space-y-3">
                      {["Taste (sandwiches, salads, sides)","Pelon's (Mexican food)"].map((restaurant) => (
                        <div key={restaurant} className="flex items-center space-x-3">
                          <Checkbox id={`restaurant-${restaurant}`} checked={formData.restaurants.includes(restaurant)} onCheckedChange={(checked) => handleCheckboxChange("restaurants", restaurant, checked as boolean)} />
                          <Label htmlFor={`restaurant-${restaurant}`} style={{ fontSize: "0.875rem", fontWeight: 400 }}>{restaurant}</Label>
                        </div>
                      ))}
                      <div className="flex items-center space-x-3">
                        <Checkbox id="restaurant-other" checked={formData.restaurants.includes("Other")} onCheckedChange={(checked) => handleCheckboxChange("restaurants", "Other", checked as boolean)} />
                        <Label htmlFor="restaurant-other" style={{ fontSize: "0.875rem", fontWeight: 400 }}>Other:</Label>
                        <Input placeholder="Please specify..." value={formData.otherRestaurant} onChange={(e) => setFormData(prev => ({ ...prev, otherRestaurant: e.target.value }))} style={{ maxWidth: "16rem" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Add-Ons */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium" style={{ color: "#003049" }}>4. Add-Ons</h3>
                  <div className="space-y-4">
                    <Label style={{ fontWeight: 500, fontSize: "1rem" }}>What extras would you be likely to order with your package? (select all that apply)</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Cold drinks (water, lemonade, Gatorade)",
                        "Towels",
                        "Beach games (Spikeball, bucketball, football)",
                        "Extra umbrellas/tents"
                      ].map((addon) => (
                        <div key={addon} className="flex items-center space-x-3">
                          <Checkbox id={`addon-${addon}`} checked={formData.addOns.includes(addon)} onCheckedChange={(checked) => handleCheckboxChange("addOns", addon, checked as boolean)} />
                          <Label htmlFor={`addon-${addon}`} style={{ fontSize: "0.875rem", fontWeight: 400 }}>{addon}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Overall Experience */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium" style={{ color: "#003049" }}>5. Overall Experience</h3>
                  <div className="space-y-4">
                    <Label style={{ fontWeight: 500, fontSize: "1rem" }}>What would make ShoreDrop a service you'd use every beach trip?</Label>
                    <Textarea placeholder="Share your thoughts..." value={formData.overallExperience} onChange={(e) => setFormData(prev => ({ ...prev, overallExperience: e.target.value }))} style={{ minHeight: "100px" }} />
                  </div>

                  <div className="space-y-4">
                    <Label style={{ fontWeight: 500, fontSize: "1rem" }}>If ShoreDrop were available at your beach trips, how often would you use the service?</Label>
                    <RadioGroup value={formData.usageFrequency} onValueChange={(value) => setFormData(prev => ({ ...prev, usageFrequency: value }))}>
                      {[
                        "Every time I go to the beach",
                        "Most trips",
                        "Occasionally (1-2 times per month)",
                        "Rarely (a few times per season)",
                        "Only once or twice"
                      ].map((frequency) => (
                        <div key={frequency} className="flex items-center space-x-3">
                          <RadioGroupItem value={frequency} id={`frequency-${frequency}`} />
                          <Label htmlFor={`frequency-${frequency}`}>{frequency}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>

                <div className="pt-8">
                  <Button type="submit" size="lg" style={{ width: "100%", backgroundColor: "#003049", color: "#ffffff", fontWeight: 500, padding: "1rem", borderRadius: "9999px", transition: "all 0.3s" }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#A8DADC"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#003049"}
                  >
                    Submit Survey
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Survey;
