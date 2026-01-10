import useScrollReveal from '../hooks/useScrollReveal';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

export default function Team() {
  const headerRef = useScrollReveal({ threshold: 0.4 });
  
  const teamMembers = [
    { id: 1, name: 'Abhijith Varma', role: 'President', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=ABHIJITH', instagram: '', linkedin: '' },
    { id: 2, name: 'Sarveshwaran S', role: 'Vice President', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=SARVESHWARAN', instagram: '', linkedin: '' },
    { id: 3, name: 'J SOHAM', role: 'Vice President', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=SOHAM', instagram: '', linkedin: '' },
    { id: 4, name: 'Lokeshwar', role: 'General Secretary', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=LOKESHWAR', instagram: '', linkedin: '' },
    { id: 5, name: 'Phavankumar RL', role: 'Treasurer', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=PHAVANKUMAR', instagram: '', linkedin: '' },
    { id: 6, name: 'Rishabh Karthik', role: 'Treasurer', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=RISHABH', instagram: '', linkedin: '' },
    { id: 7, name: 'Krishnendu M R', role: 'Tech', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=KRISHNENDU', instagram: '', linkedin: '' },
    { id: 8, name: 'Adithya Arumugam', role: 'Events', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=ADITHYA', instagram: '', linkedin: '' },
    { id: 9, name: 'Reema', role: 'Events', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=REEMA', instagram: '', linkedin: '' },
    { id: 10, name: 'V Vandana', role: 'Events', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=VANDANA', instagram: '', linkedin: '' },
    { id: 11, name: 'Faheera', role: 'External Relations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=FAHEERA', instagram: '', linkedin: '' },
    { id: 12, name: 'Aditya Rajasekaran', role: 'External Relations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=ADITYA', instagram: '', linkedin: '' },
    { id: 13, name: 'Thiyaneshwar T', role: 'Operations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=THIYANESHWAR', instagram: '', linkedin: '' },
    { id: 14, name: 'Prasanna raj J', role: 'Operations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=PRASANNA', instagram: '', linkedin: '' },
    { id: 15, name: 'Harish', role: 'Operations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=HARISH', instagram: '', linkedin: '' },
    { id: 16, name: 'Dakshinya D', role: 'Marketing', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=DAKSHINYA', instagram: '', linkedin: '' },
    { id: 17, name: 'Bhoomith', role: 'Marketing', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=BHOOMITH', instagram: '', linkedin: '' },
    { id: 18, name: 'Haresh P J', role: 'Marketing', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=HARESH', instagram: '', linkedin: '' },
    { id: 19, name: 'Duraiprabakaran', role: 'Outreach', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=DURAIPRABAKARAN', instagram: '', linkedin: '' },
    { id: 20, name: 'Krishnaraj C', role: 'Outreach', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=KRISHNARAJ', instagram: '', linkedin: '' },
    { id: 21, name: 'MANIMARAN TS', role: 'Startup', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=MANIMARAN', instagram: '', linkedin: '' },
    { id: 22, name: 'Mohamed Uduman', role: 'Startup', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=MOHAMED', instagram: '', linkedin: '' },
    { id: 23, name: 'Akshaya G', role: 'Media', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=AKSHAYA', instagram: '', linkedin: '' },
    { id: 24, name: 'Madhanakumar k', role: 'Media', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=MADHANAKUMAR', instagram: '', linkedin: '' },
    { id: 25, name: 'Sreenithika', role: 'Creativity', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=SREENITHIKA', instagram: '', linkedin: '' },
    { id: 26, name: 'Poojitha J', role: 'Creativity', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=POOJITHA', instagram: '', linkedin: '' },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      {/* OUR TEAM Header */}
      <div ref={headerRef} className="reveal mb-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider font-mono text-center" style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
          <span className="text-white">&gt;&gt;</span> OUR TEAM
        </h2>
        <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest text-center">
          ━━━━━━━━━━━━━━━━━━━━━━
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {teamMembers.map((member) => {
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
                <p className="text-center font-mono text-xs tracking-wide text-neutral-400 mb-3">
                  {member.role}
                </p>
                
                {/* Social Icons */}
                <div className="flex gap-3 mt-2">
                  <a 
                    href={member.instagram ? `https://instagram.com/${member.instagram}` : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src={instagramIcon} alt="Instagram" className="w-6 h-5 object-contain" style={{ imageRendering: 'crisp-edges' }} />
                  </a>
                  <a 
                    href={member.linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain" />
                  </a>
                </div>
              </div>
            );
          };
          return <RevealMember key={member.id} />;
        })}
      </div>
    </section>
  );
}
