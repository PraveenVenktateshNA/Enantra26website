import useScrollReveal from '../hooks/useScrollReveal';

// Signature Events Data
const signatureEvents = [
  {
    id: 1,
    name: 'STARTUP WEEKEND',
    description: 'Startup Weekend is a dynamic three-day program that immerses aspiring entrepreneurs in the world of startups. This event is held in collaboration with Techstars and Google for Startups, providing identified startups with nurturing and support to establish a strong foundation. The winning ideas from the event are supported in the prototype development process and rewarded with prizes.',
    image: 'https://placehold.co/400x300/0a0a0a/ffffff/png?text=STARTUP+WEEKEND'
  },
  {
    id: 2,
    name: 'STARTIFY',
    description: 'Startify is a two-day event designed to ignite entrepreneurial spirit and foster innovation among students. It connects aspiring entrepreneurs with industry leaders, offering mentorship and a platform to pitch their ideas and seek funding. Participants can collaborate on innovative solutions, refine their skills, and explore opportunities that shape the future of entrepreneurship.',
    image: 'https://placehold.co/400x300/0a0a0a/ffffff/png?text=STARTIFY'
  },
  {
    id: 3,
    name: 'STARTUP TOUR',
    description: 'Startup tours are organized visits to various companies that aim to connect students with innovative ventures. These tours provide students with an opportunity to learn about the inner workings of these enterprises and gain insights from the visionaries behind them.',
    image: 'https://placehold.co/400x300/0a0a0a/ffffff/png?text=STARTUP+TOUR'
  },
  {
    id: 4,
    name: 'AU MUN',
    description: "MUN (Model United Nations) is an educational platform for students to develop diplomacy, international relations, and UN-related skills. Participants represent countries or personalities and collaborate to address global issues. AU-MUN, AU's version of MUN, has consistently attracted diverse participants through its past editions.",
    image: 'https://placehold.co/400x300/0a0a0a/ffffff/png?text=AU+MUN'
  }
];

export default function About() {
  const missionRef = useScrollReveal({ threshold: 0.3 });
  const signatureTitleRef = useScrollReveal({ threshold: 0.3 });
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

      {/* SIGNATURE EVENTS */}
      <div className="mb-20">
        {/* Section Title - centered */}
        <div ref={signatureTitleRef} className="reveal text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider font-mono uppercase" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
            <span className="text-neutral-500">[</span> SIGNATURE EVENTS <span className="text-neutral-500">]</span>
          </h2>
          <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest">
            ━━━━━━━━━━━━━━━━━━━━━━
          </div>
          <p className="mt-4 text-neutral-400 font-mono text-xs md:text-sm tracking-wide">
            FLAGSHIP EXPERIENCES THAT DEFINE AUSEC
          </p>
        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          {signatureEvents.map((event, index) => (
            <SignatureEventCard key={event.id} event={event} index={index} />
          ))}
        </div>
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

// Individual event card component with its own scroll reveal
function SignatureEventCard({ event, index }) {
  const cardRef = useScrollReveal({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef} 
      className={`sig-event-card ${isEven ? 'reveal-left' : 'reveal-right'}`}
    >
      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-neutral-900/30 border border-neutral-800 hover:border-neutral-600 transition-all duration-500`}>
        {/* Image */}
        <div className="w-full md:w-2/5 flex-shrink-0 relative overflow-hidden">
          <div className="aspect-video md:aspect-auto md:h-full">
            <img 
              src={event.image} 
              alt={event.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Number overlay */}
          <div className={`absolute bottom-3 ${isEven ? 'left-3' : 'right-3'} font-mono text-4xl md:text-5xl font-bold text-white/10`}>
            0{event.id}
          </div>
        </div>

        {/* Content */}
        <div className={`flex-1 p-5 md:p-8 flex flex-col justify-center ${isEven ? 'md:border-l' : 'md:border-r'} border-neutral-800`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-neutral-500 font-mono text-xs">0{event.id}</span>
            <div className="h-px flex-1 bg-neutral-700 max-w-[40px]"></div>
          </div>
          
          <h3 className="text-lg md:text-xl font-bold font-mono tracking-wider text-white">
            {event.name}
          </h3>
          
          <p className="mt-4 text-neutral-400 font-mono text-xs md:text-sm leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}