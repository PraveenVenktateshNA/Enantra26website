import useScrollReveal from '../hooks/useScrollReveal';
import { useEffect, useState } from 'react';
import enantraLogo from '../assets/enantra_gold_logo.png';

export default function Home() {
  const heroRef = useScrollReveal({ threshold: 0.6 });
  const ausecRef = useScrollReveal({ threshold: 0.3 });
  const enantraRef = useScrollReveal({ threshold: 0.3 });
  const galleryRef = useScrollReveal({ threshold: 0.2 });
  const socialsRef = useScrollReveal({ threshold: 0.3 });
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
    <>
      <section className="mx-auto max-w-6xl px-4 pt-20 pb-8 md:pt-24 md:pb-12 grid-pattern">
        <div ref={heroRef} className="reveal text-center w-full">
          {/* Enantra Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={enantraLogo} 
              alt="Enantra Logo" 
              className="w-40 h-40 md:w-56 md:h-56 object-contain"
              style={{ filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))' }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider font-mono md:ml-20">
            {showTitle && (
              <span className="typewriter cursor" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
                ENANTRA '26
              </span>
            )}
          </h1>
          
          {/* Countdown Timer */}
          <div className="mt-8 flex justify-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-4xl font-bold font-mono text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}>
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm font-mono text-neutral-400 mt-1 tracking-widest">DAYS</div>
            </div>
            <div className="text-2xl md:text-4xl font-bold font-mono text-neutral-500 self-start">:</div>
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-4xl font-bold font-mono text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}>
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm font-mono text-neutral-400 mt-1 tracking-widest">HOURS</div>
            </div>
            <div className="text-2xl md:text-4xl font-bold font-mono text-neutral-500 self-start">:</div>
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-4xl font-bold font-mono text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}>
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm font-mono text-neutral-400 mt-1 tracking-widest">MINS</div>
            </div>
            <div className="text-2xl md:text-4xl font-bold font-mono text-neutral-500 self-start">:</div>
            <div className="flex flex-col items-center">
              <div className="text-2xl md:text-4xl font-bold font-mono text-white" style={{ textShadow: '0 0 15px rgba(255,255,255,0.4)' }}>
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

      {/* AUSEC Section - Fade from Left */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div ref={ausecRef} className="reveal-left">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider font-mono uppercase" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
            AUSEC
          </h2>
          <div className="mt-4 text-neutral-500 font-mono text-xs tracking-widest">
            ━━━━━━━━━━━━━━━━━━━━━━
          </div>
          <h3 className="mt-8 text-lg md:text-xl font-bold tracking-wide font-mono text-white">
            WHAT IS AUSEC?
          </h3>
          <p className="mt-6 text-neutral-300 max-w-3xl font-mono text-sm md:text-base leading-relaxed">
            ANNA UNIVERSITY STUDENT ENTREPRENEURSHIP CLUB IS THE OFFICIAL ENTREPRENEURSHIP CLUB OF CEG, ACT AND SAP.
          </p>
          <p className="mt-4 text-neutral-300 max-w-3xl font-mono text-sm md:text-base leading-relaxed">
            THE STUDENT RUN CLUB ACTIVELY WORKS ON CULTIVATING A STARTUP CULTURE AMONG STUDENTS ACROSS SOUTH INDIA.
          </p>
        </div>
      </section>

      {/* ENANTRA Section - Fade from Right */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div ref={enantraRef} className="reveal-right text-right">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider font-mono uppercase" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
            ENANTRA
          </h2>
          <div className="mt-4 text-neutral-500 font-mono text-xs tracking-widest flex justify-end">
            <span>━━━━━━━━━━━━━━━━━━━━━━</span>
          </div>
          <p className="mt-8 text-neutral-300 max-w-3xl ml-auto font-mono text-sm md:text-base leading-relaxed">
            Enantra is South India's largest entrepreneurship and management fest.
          </p>
          <p className="mt-4 text-neutral-300 max-w-3xl ml-auto font-mono text-sm md:text-base leading-relaxed">
            Spanning over three days, Enantra connects the best of corporates, startups and student communities from various entrepreneurial domains.
          </p>
          <p className="mt-4 text-neutral-300 max-w-3xl ml-auto font-mono text-sm md:text-base leading-relaxed">
            It takes flight with carefully curated events to explore different niches of entrepreneurship where students can push their boundaries and unlock their potentials.
          </p>
        </div>
      </section>

      {/* Media Gallery - Honeycomb */}
      <section className="w-full py-12 md:py-16 overflow-hidden">
        <div ref={galleryRef} className="reveal text-center">
          <h2 className="text-xl md:text-3xl font-bold tracking-wider font-mono uppercase px-4" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
            <span className="text-neutral-500">&gt;&gt;</span> MEDIA GALLERY
          </h2>
          <div className="mt-4 text-neutral-500 font-mono text-xs tracking-widest">
            ━━━━━━━━━━━━━━━━━━━━━━
          </div>
          
          <div className="honeycomb-gallery mt-8">
            {/* Row 1: 10 hexagons */}
            <div className="hex-row">
              {[...Array(10)].map((_, i) => (
                <div key={`r1-${i}`} className="hexagon">
                  <img src={`https://picsum.photos/200/200?random=${i + 1}`} alt={`Gallery ${i + 1}`} />
                </div>
              ))}
            </div>
            {/* Row 2: 9 hexagons */}
            <div className="hex-row">
              {[...Array(9)].map((_, i) => (
                <div key={`r2-${i}`} className="hexagon">
                  <img src={`https://picsum.photos/200/200?random=${i + 11}`} alt={`Gallery ${i + 11}`} />
                </div>
              ))}
            </div>
            {/* Row 3: 10 hexagons */}
            <div className="hex-row">
              {[...Array(10)].map((_, i) => (
                <div key={`r3-${i}`} className="hexagon">
                  <img src={`https://picsum.photos/200/200?random=${i + 20}`} alt={`Gallery ${i + 20}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beyond This Page - Social Links */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div ref={socialsRef} className="reveal text-center">
          <h2 className="text-xl md:text-3xl font-bold tracking-wider font-mono uppercase" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
            <span className="text-neutral-500">&gt;&gt;</span> BEYOND THIS PAGE
          </h2>
          <div className="mt-4 text-neutral-500 font-mono text-xs tracking-widest">
            ━━━━━━━━━━━━━━━━━━━━━━
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/_ausec_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/30 bg-black p-6 md:p-8 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex flex-col items-center justify-center min-w-[140px] md:min-w-[180px]"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4 font-mono text-white">IG</div>
              <div className="text-xs md:text-sm font-mono tracking-widest text-neutral-400 group-hover:text-white transition">
                INSTAGRAM
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anna-university-student-entrepreneurship-club-ausec/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/30 bg-black p-6 md:p-8 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex flex-col items-center justify-center min-w-[140px] md:min-w-[180px]"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4 font-mono text-white">in</div>
              <div className="text-xs md:text-sm font-mono tracking-widest text-neutral-400 group-hover:text-white transition">
                LINKEDIN
              </div>
            </a>

            {/* Placeholder for future social links */}
            {/* Uncomment and modify as needed
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white/30 p-6 md:p-8 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 flex flex-col items-center justify-center min-w-[140px] md:min-w-[180px]"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4 font-mono">X</div>
              <div className="text-xs md:text-sm font-mono tracking-widest text-neutral-400 group-hover:text-white transition">
                TWITTER
              </div>
            </a>
            */}
          </div>

          <p className="mt-12 text-neutral-400 font-mono text-xs tracking-widest">
            FOLLOW US FOR UPDATES
          </p>
        </div>
      </section>
    </>
  );
}