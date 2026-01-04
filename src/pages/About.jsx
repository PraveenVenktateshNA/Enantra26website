import useScrollReveal from '../hooks/useScrollReveal';

export default function About() {
  const headerRef = useScrollReveal({ threshold: 0.4 });
  
  const teamMembers = [
    { id: 1, name: 'Abhijith Varma', role: 'President', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=ABHIJITH' },
    { id: 2, name: 'Sarveshwaran S', role: 'Vice President', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=SARVESHWARAN' },
    { id: 3, name: 'J SOHAM', role: 'Vice President', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=SOHAM' },
    { id: 4, name: 'Lokeshwar', role: 'General Secretary', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=LOKESHWAR' },
    { id: 5, name: 'Phavankumar RL', role: 'Treasurer', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=PHAVANKUMAR' },
    { id: 6, name: 'Rishabh Karthik', role: 'Treasurer', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=RISHABH' },
    { id: 7, name: 'Krishnendu M R', role: 'Tech', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=KRISHNENDU' },
    { id: 8, name: 'Adithya Arumugam', role: 'Events', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=ADITHYA' },
    { id: 9, name: 'Reema', role: 'Events', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=REEMA' },
    { id: 10, name: 'V Vandana', role: 'Events', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=VANDANA' },
    { id: 11, name: 'Faheera', role: 'External Relations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=FAHEERA' },
    { id: 12, name: 'Aditya Rajasekaran', role: 'External Relations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=ADITYA' },
    { id: 13, name: 'Thiyaneshwar T', role: 'Operations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=THIYANESHWAR' },
    { id: 14, name: 'Prasanna raj J', role: 'Operations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=PRASANNA' },
    { id: 15, name: 'Harish', role: 'Operations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=HARISH' },
    { id: 16, name: 'Dakshinya D', role: 'Marketing', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=DAKSHINYA' },
    { id: 17, name: 'Bhoomith', role: 'Marketing', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=BHOOMITH' },
    { id: 18, name: 'Haresh P J', role: 'Marketing', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=HARESH' },
    { id: 19, name: 'Duraiprabakaran', role: 'Outreach', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=DURAIPRABAKARAN' },
    { id: 20, name: 'Krishnaraj C', role: 'Outreach', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=KRISHNARAJ' },
    { id: 21, name: 'MANIMARAN TS', role: 'Startup', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=MANIMARAN' },
    { id: 22, name: 'Mohamed Uduman', role: 'Startup', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=MOHAMED' },
    { id: 23, name: 'Akshaya G', role: 'Media', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=AKSHAYA' },
    { id: 24, name: 'Madhanakumar k', role: 'Media', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=MADHANAKUMAR' },
    { id: 25, name: 'Sreenithika', role: 'Creativity', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=SREENITHIKA' },
    { id: 26, name: 'Poojitha J', role: 'Creativity', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=POOJITHA' },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div ref={headerRef} className="reveal mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider font-mono text-center" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
          <span className="text-white">&gt;&gt;</span> OUR TEAM
        </h2>
        <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest text-center">
          ━━━━━━━━━━━━━━━━━━━━━━
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {teamMembers.map((member, index) => {
          const RevealMember = () => {
            const ref = useScrollReveal({ threshold: 0.1 });
            return (
              <div
                ref={ref}
                key={member.id}
                className="reveal flex flex-col items-center justify-center p-6 border-2 border-white bg-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <div className="w-full h-48 flex items-center justify-center mb-4 bg-white p-4">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h3 className="text-center font-mono text-sm tracking-wide uppercase text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-center font-mono text-xs tracking-wide text-neutral-400">
                  {member.role}
                </p>
              </div>
            );
          };
          return <RevealMember key={member.id} />;
        })}
      </div>
    </section>
  );
}