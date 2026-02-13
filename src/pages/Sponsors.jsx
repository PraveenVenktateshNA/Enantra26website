import useScrollReveal from '../hooks/useScrollReveal';

export default function Sponsors() {
  const titleRef = useScrollReveal({ threshold: 0.8 });

  const sponsors = [
    { id: 1, name: 'Company Name 1', designation: 'Title Sponsor', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+1' },
    { id: 2, name: 'Company Name 2', designation: 'Co Sponsor', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+2' },
    { id: 3, name: 'Company Name 3', designation: 'Platinum Sponsor', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+3' },
    { id: 4, name: 'Company Name 4', designation: 'Gold Sponsor', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+4' },
    { id: 5, name: 'Company Name 5', designation: 'Silver Sponsor', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+5' },
    { id: 6, name: 'Company Name 6', designation: 'Bronze Sponsor', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+6' },
    { id: 7, name: 'Company Name 7', designation: 'Event Sponsor', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+7' },
    { id: 8, name: 'Company Name 8', designation: 'Merchandise Partner', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+8' },
    { id: 9, name: 'Company Name 9', designation: 'Food Partner', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+9' },
    { id: 10, name: 'Company Name 10', designation: 'Beverage and Refreshment Partner', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+10' },
    { id: 11, name: 'Company Name 11', designation: 'T-shirt Partner', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+11' },
    { id: 12, name: 'Company Name 12', designation: 'Digital Marketing Partner', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+12' },
    { id: 13, name: 'Company Name 13', designation: 'Community Partner', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+13' },
    { id: 14, name: 'Company Name 14', designation: 'Gift Partner', logo: 'https://via.placeholder.com/200x100/000000/FFFFFF?text=LOGO+14' },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div ref={titleRef} className="reveal mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider font-mono text-center" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
          <span className="text-white">&gt;&gt;</span> OUR SPONSORS
        </h2>
        <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest text-center">
          ━━━━━━━━━━━━━━━━━━━━━━
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {sponsors.map((sponsor, index) => {
          const RevealSponsor = () => {
            const ref = useScrollReveal({ threshold: 0.3 });
            return (
              <div
                ref={ref}
                key={sponsor.id}
                className="reveal flex flex-col items-center justify-center p-6 border-2 border-white bg-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="w-full h-32 flex items-center justify-center mb-4 bg-white p-4">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-center font-mono text-sm tracking-wide uppercase text-white">
                  {sponsor.name}
                </h3>
                <p className="text-center font-mono text-xs tracking-widest uppercase text-neutral-400 mt-2">
                  {sponsor.designation}
                </p>
              </div>
            );
          };
          return <RevealSponsor key={sponsor.id} />;
        })}
      </div>
    </section>
  );
}
