import { useState, useEffect } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ExitIntentPopupProps {
  timeLeft: { hours: number; minutes: number; seconds: number };
  onEmailSubmit: (email: string) => void;
}

const ExitIntentPopup = ({ timeLeft, onEmailSubmit }: ExitIntentPopupProps) => {
  const [email, setEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const formatTime = (value: number) => value.toString().padStart(2, '0');

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

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        console.log("Opening exit intent popup");
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="sm:max-w-[500px]">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl text-center mb-4">
            Wait! Don't Miss Out on This Exclusive Offer
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-6">
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
            
            <div className="space-y-4">
              <p className="text-sm">
                Enter your email to extend this offer for an additional 48 hours!
              </p>
              <form onSubmit={handleSubmit}>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4"
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                  Extend My Offer
                </Button>
              </form>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExitIntentPopup;