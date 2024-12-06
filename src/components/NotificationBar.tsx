import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

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
    <div className="bg-accent py-2 text-white text-sm font-medium">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <Timer className="w-4 h-4" />
        <span className="font-bold">LIMITED TIME OFFER</span>
        <span className="mx-2">
          {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)} remaining
        </span>
        <span>|</span>
        <span>Get $500 off with code</span>
        <span className="font-bold">VIPX500</span>
        <a
          href="https://buy.stripe.com/6oE8yCbfMbPB7Li9AD?prefilled_promo_code=VIPX500"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline ml-2"
        >
          Claim Now
        </a>
      </div>
    </div>
  );
};

export default NotificationBar;