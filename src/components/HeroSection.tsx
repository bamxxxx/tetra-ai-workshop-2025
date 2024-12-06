import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/80 to-secondary" />
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <Badge className="mb-4 bg-accent text-white">
            Course begins January 10, 2025
          </Badge>
          <h1 className="heading-xl mb-6 text-white">
            AI for Research & Insights Workshop
          </h1>
          <p className="text-2xl md:text-4xl mb-8 text-white/90 font-semibold">
            12 Weeks to Become an AI Power User
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-black font-semibold"
            >
              Register Now
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/80">
            Register before December 7th to get $500 off using code EARLY500
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;