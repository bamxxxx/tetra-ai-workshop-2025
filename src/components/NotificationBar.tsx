import { useState, useEffect } from 'react';
import { Timer, ArrowRight } from 'lucide-react';

const NotificationBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-accent py-2 text-white text-sm font-medium">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <Timer className="w-4 h-4" />
        <span className="font-bold">LIMITED TIME OFFER</span>
        <span className="mx-2">
          {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)} remaining
        </span>
        <span>|</span>
        <span className="font-extrabold text-red-400">Get $500 off</span>
        <span>with code</span>
        <span className="font-bold">VIPX500</span>
        <a
          href="https://buy.stripe.com/6oE8yCbfMbPB7Li9AD?prefilled_promo_code=VIPX500"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 font-semibold hover:bg-white/20 px-2 py-1 rounded-full transition-colors"
        >
          Claim Now
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default NotificationBar;