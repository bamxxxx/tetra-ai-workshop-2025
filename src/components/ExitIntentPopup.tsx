import { useState, useEffect, useRef } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Timer, X, ArrowDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ExitIntentPopupProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
  onEmailSubmit: (email: string) => void;
}

const ExitIntentPopup = ({ timeLeft, onEmailSubmit }: ExitIntentPopupProps) => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  // Focus the input when the popup opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to extend the offer.",
        variant: "destructive",
      });
      return;
    }
    onEmailSubmit(email);
    setIsOpen(false);
    toast({
      title: "Offer Extended!",
      description: "We've extended your discount for an additional 48 hours.",
    });
  };

  // Set up exit intent detection
  useState(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('exitIntentShown')) {
        setIsOpen(true);
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  });

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="sm:max-w-[500px] relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 rounded-full hover:bg-accent/20"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
        
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-center mb-4">
            Wait! Don't Miss Out on This Exclusive Offer
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center space-y-6">
            <div className="bg-accent/10 p-6 rounded-lg">
              <div className="flex items-center justify-center gap-2 text-xl font-bold mb-2">
                <Timer className="w-6 h-6" />
                <span>Time Remaining:</span>
              </div>
              <div className="text-3xl font-mono font-bold text-accent">
                {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
              </div>
            </div>
            
            <div className="text-lg font-semibold">
              Get $500 off with code: <span className="text-red-500">VIPX500</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <ArrowDown className="absolute -top-8 right-4 w-6 h-6 text-accent animate-bounce" />
                <p className="text-sm mb-2">
                  Enter your email to extend this offer for an additional 48 hours!
                </p>
                <Input
                  ref={inputRef}
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-lg p-6 border-2 border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-300"
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                Extend My Offer
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExitIntentPopup;