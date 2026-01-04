import useScrollReveal from '../hooks/useScrollReveal';
import { useEffect, useState } from 'react';
import enantraLogo from '../assets/enantra_gold_logo.png';

export default function Home() {
  const heroRef = useScrollReveal({ threshold: 0.6 });
  const [showTitle, setShowTitle] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-02-14T00:00:00');
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-4 grid-pattern min-h-screen flex items-center">
      <div ref={heroRef} className="reveal text-center py-10 w-full">
        {/* Enantra Logo */}
        <div className="flex justify-center mb-6">
          <img 
            src={enantraLogo} 
            alt="Enantra Logo" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))' }}
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-wider font-mono md:ml-20">
          {showTitle && (
            <span className="typewriter cursor" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
              ENANTRA '26
            </span>
          )}
        </h1>
        
        {/* Countdown Timer */}
        <div className="mt-8 flex justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold font-mono text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}>
              {String(timeLeft.days).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm font-mono text-neutral-400 mt-1 tracking-widest">DAYS</div>
          </div>
          <div className="text-3xl md:text-5xl font-bold font-mono text-neutral-500 self-start">:</div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold font-mono text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}>
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm font-mono text-neutral-400 mt-1 tracking-widest">HOURS</div>
          </div>
          <div className="text-3xl md:text-5xl font-bold font-mono text-neutral-500 self-start">:</div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold font-mono text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}>
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm font-mono text-neutral-400 mt-1 tracking-widest">MINS</div>
          </div>
          <div className="text-3xl md:text-5xl font-bold font-mono text-neutral-500 self-start">:</div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-bold font-mono text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}>
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm font-mono text-neutral-400 mt-1 tracking-widest">SECS</div>
          </div>
        </div>

        <p className="mt-6 text-neutral-400 font-mono text-xs tracking-widest uppercase">
          Countdown to Enantra 26
        </p>
        
        <p className="mt-6 text-neutral-300 max-w-2xl mx-auto font-mono text-sm tracking-wide">
          <span className="text-white">[</span> AUSEC's flagship event <span className="text-white">]</span>
        </p>
        <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest">
          ━━━━━━━━━━━━━━━━━━━━━━
        </div>
      </div>
    </section>
  );
}