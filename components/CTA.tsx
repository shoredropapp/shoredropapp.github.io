import { Button } from "../components/button";
import { Smartphone } from "lucide-react";
import { IOS_APP_STORE_URL } from "../lib/app-links";

const CTA = () => {
  return (
    <section className="py-32 bg-ocean-deep text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl lg:text-6xl font-light leading-tight">
            Ready to elevate
            <span className="block font-medium">your beach experience?</span>
          </h2>
          
          <p className="text-xl text-white/80 leading-relaxed">
            Join thousands who've discovered the effortless way to enjoy perfect beach days.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-white text-ocean-deep hover:bg-white/90 transition-all duration-300"
              asChild
            >
              <a href={IOS_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                <Smartphone className="mr-2 h-5 w-5" />
                Download on the App Store
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;