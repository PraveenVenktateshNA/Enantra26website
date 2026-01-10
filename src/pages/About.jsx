import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const missionRef = useScrollReveal({ threshold: 0.3 });
  const cedRef = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {/* OUR MISSION - from left */}
      <div ref={missionRef} className="reveal-left mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wider font-mono uppercase" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
          <span className="text-neutral-500">&gt;&gt;</span> OUR MISSION
        </h2>
        <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest">
          ━━━━━━━━━━━━━━━━━━━━━━
        </div>
        <p className="mt-6 text-neutral-300 font-mono text-sm md:text-base leading-relaxed">
          THE CLUB'S FOCUS IS ON HOSTING EVENTS THAT NURTURE ENTREPRENEURIAL SPIRIT, OFFERING STUDENTS A PLATFORM TO THRIVE AND NAVIGATE THEIR SPOT IN THE WORLD OF BUSINESS.
        </p>
        <p className="mt-4 text-neutral-300 font-mono text-sm md:text-base leading-relaxed">
          WE BRIDGE THE GAP BETWEEN AMBITION AND OPPORTUNITY, EMPOWERING STUDENTS TO EXPLORE, INNOVATE, AND INSPIRE.
        </p>
      </div>

      {/* ABOUT CED - from right */}
      <div ref={cedRef} className="reveal-right mb-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wider font-mono uppercase text-right" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
          ABOUT CED <span className="text-neutral-500">&lt;&lt;</span>
        </h2>
        <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest text-right">
          ━━━━━━━━━━━━━━━━━━━━━━
        </div>
        <p className="mt-6 text-neutral-300 font-mono text-sm md:text-base leading-relaxed text-right">
          THE CENTRE FOR ENTREPRENEURSHIP DEVELOPMENT (CED) AT ANNA UNIVERSITY IS DEDICATED TO INSPIRING AND NURTURING ENTREPRENEURIAL SPIRIT AMONG ENGINEERING STUDENTS ACROSS TAMILNADU.
        </p>
        <p className="mt-4 text-neutral-300 font-mono text-sm md:text-base leading-relaxed text-right">
          ADDITIONAL INITIATIVES LIKE THE CED MAKERS' LAB SERVE AS VITAL SUPPORT HUBS, ENABLING STUDENTS TO BRING THEIR PROJECTS TO LIFE AND GAIN PRACTICAL EXPERIENCE IN INNOVATION AND ENTREPRENEURSHIP.
        </p>
      </div>
    </section>
  );
}