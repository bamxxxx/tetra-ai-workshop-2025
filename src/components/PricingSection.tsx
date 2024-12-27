import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="heading-lg mb-12">Simple, Transparent Pricing</h2>
          <Card className="glass-card p-8">
            <div className="flex items-baseline justify-center gap-2 mb-4">
              <span className="text-3xl font-bold">$1,299</span>
              <span className="text-muted-foreground line-through">$1,499</span>
            </div>
            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90"
              onClick={() => window.open("https://buy.stripe.com/6oE8yCbfMbPB7Li9AD?prefilled_promo_code=VIPX500", "_blank")}
            >
              Secure Your Spot
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Use code VIPX500 to save $500
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;