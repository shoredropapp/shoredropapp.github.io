import { Button } from "../components/button";
import { Smartphone, ArrowRight } from "lucide-react";
import { IOS_APP_STORE_URL } from "../lib/app-links";
const brandedImage = "/lovable-uploads/8cb1bdbc-787a-463c-9ad8-13203c8d57fa.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center" style={{ background: "linear-gradient(180deg, hsl(210 60% 95%) 0%, hsl(0 0% 100%) 100%)" }}>


      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-light text-[#083b6c] leading-tight">
                Your Beach Day,
                <span className="block font-medium text-[#083b6c]">Delivered.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Build your own beach setup with premium chairs, umbrellas, and gear — and get meals from your favorite local restaurants delivered on demand, right to your spot.
              </p>
              
              <p className="bg-[#e6f9ff] border border-[#bbefff] rounded-2xl p-6 text-lg font-medium text-[#083b6c]">
                ShoreDrop is live on the App Store — beach delivery in Virginia Beach.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                className="text-lg px-8 py-6 rounded-full bg-[#bbefff] hover:bg-[#083b6c] transition-all duration-300 text-[#083b6c] hover:text-white"
                asChild
              >
                <a href={IOS_APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download on the App Store
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full text-[#083b6c] hover:bg-[#e6f9ff]/50 transition-all duration-300"
                onClick = {(e)=>{
                   e.preventDefault();
                   const target = document.querySelector("#learn-more");
                   if (target) {
                    window.scrollTo({
                     top: (target as HTMLElement).offsetTop,
                     behavior: "smooth",
                    });
                   }
                }}
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-[#bbefff]/10 rounded-3xl blur-3xl transform rotate-6"></div>
            <img 
              src={brandedImage} 
              alt="ShoreDrop branded beach equipment including umbrella, chairs, and cooler"
              className="relative w-full h-auto rounded-2xl shadow-wave"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;