import { useState, useEffect } from 'react';
import { Timer, ArrowRight } from 'lucide-react';

const NotificationBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Check if this is the first visit
    const endTime = localStorage.getItem('timerEndTime');
    
    if (!endTime) {
      // First visit - set end time to 12 hours from now
      const end = new Date();
      end.setHours(end.getHours() + 12);
      localStorage.setItem('timerEndTime', end.toISOString());
    }

    const timer = setInterval(() => {
      const endTimeStr = localStorage.getItem('timerEndTime');
      if (!endTimeStr) return;

      const endTime = new Date(endTimeStr);
      const now = new Date();
      const totalSeconds = Math.max(0, Math.floor((endTime.getTime() - now.getTime()) / 1000));

      if (totalSeconds <= 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor((totalSeconds % 3600) / 60),
        seconds: totalSeconds % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-accent py-2 text-white text-sm font-medium">
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