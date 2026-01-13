import useScrollReveal from '../hooks/useScrollReveal';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

// Team member photos
import adithyaPhoto from '../assets/OB Pics/Adithya.jpeg';
import akshayaPhoto from '../assets/OB Pics/Akshaya.jpg';
import dakshinyaPhoto from '../assets/OB Pics/Dakshinya.jpeg';
import faheeraPhoto from '../assets/OB Pics/Faheera.jpg';
import duraiprabakaranPhoto from '../assets/OB Pics/IMG_20251102_155952_156.webp';
import krishnenduPhoto from '../assets/OB Pics/Krishnendu.jpg';
import lokeshwarPhoto from '../assets/OB Pics/lokeshwar.jpeg';
import madhanakumarPhoto from '../assets/OB Pics/Madhanakumar.jpg';
import manimaranPhoto from '../assets/OB Pics/Manimaran.JPG';
import reemaPhoto from '../assets/OB Pics/Reema.jpeg';
import sarveshwaranPhoto from '../assets/OB Pics/Sarveshwaran.jpg';
import sreenithikaPhoto from '../assets/OB Pics/Sreenithika.jpg';
import vandanaPhoto from '../assets/OB Pics/Vandana.jpg';

export default function Team() {
  const headerRef = useScrollReveal({ threshold: 0.4 });
  
  const teamMembers = [
    { id: 1, name: 'Abhijith Varma', role: 'President', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=ABHIJITH', instagram: 'https://www.instagram.com/awbhi04?igsh=MTh1NmZqczd2cWY2dQ==', linkedin: 'https://www.linkedin.com/in/abhijith-varma-227881176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 2, name: 'Sarveshwaran S', role: 'Vice President', photo: sarveshwaranPhoto, instagram: 'https://www.instagram.com/sarveshwaran1011?igsh=MWpvaTV4Z2U5YnJqbA==', linkedin: 'https://www.linkedin.com/in/sarveshwaran-s-b40171256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 3, name: 'J SOHAM', role: 'Vice President', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=SOHAM', instagram: '', linkedin: '' },
    { id: 4, name: 'Lokeshwar', role: 'General Secretary', photo: lokeshwarPhoto, instagram: 'https://www.instagram.com/lokeshwar19/', linkedin: 'https://www.linkedin.com/in/lokeshwar-sivakumar/' },
    { id: 5, name: 'Phavankumar RL', role: 'Treasurer', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=PHAVANKUMAR', instagram: '', linkedin: '' },
    { id: 6, name: 'Rishabh Karthik', role: 'Treasurer', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=RISHABH', instagram: '', linkedin: '' },
    { id: 7, name: 'Krishnendu M R', role: 'Tech', photo: krishnenduPhoto, instagram: 'https://www.instagram.com/krishnendu.m.r/', linkedin: 'https://linkedin.com/in/krishnendumr' },
    { id: 8, name: 'Adithya Arumugam', role: 'Events', photo: adithyaPhoto, instagram: 'https://www.instagram.com/__adithya_2004?igsh=d2ZkbGsweXpscWR1', linkedin: 'https://www.linkedin.com/in/adithya-arumugam3572?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 9, name: 'Reema', role: 'Events', photo: reemaPhoto, instagram: 'https://www.instagram.com/reemashivva05?igsh=MTdid3VqcHF4cHN6MA==', linkedin: 'https://www.linkedin.com/in/reema-shivva?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 10, name: 'V Vandana', role: 'Events', photo: vandanaPhoto, instagram: 'https://www.instagram.com/vandana_2304?igsh=MXg0ZDE3b24wajBlaA%3D%3D&utm_source=qr', linkedin: 'https://www.linkedin.com/in/vandana-venugopalan-022b702a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { id: 11, name: 'Faheera', role: 'External Relations', photo: faheeraPhoto, instagram: 'https://www.instagram.com/f.a.h.e.e.r.a?igsh=MXBoaDE5MzY5MThuZg%3D%3D&utm_source=qr', linkedin: 'https://www.linkedin.com/in/faheera-ummu-salma-35052b260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { id: 12, name: 'Aditya Rajasekaran', role: 'External Relations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=ADITYA', instagram: '', linkedin: '' },
    { id: 13, name: 'Thiyaneshwar T', role: 'Operations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=THIYANESHWAR', instagram: '', linkedin: '' },
    { id: 14, name: 'Prasanna raj J', role: 'Operations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=PRASANNA', instagram: '', linkedin: '' },
    { id: 15, name: 'Harish', role: 'Operations', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=HARISH', instagram: '', linkedin: '' },
    { id: 16, name: 'Dakshinya D', role: 'Marketing', photo: dakshinyaPhoto, instagram: 'https://www.instagram.com/dakshinya_3/', linkedin: 'https://www.linkedin.com/in/dakshinya-d-92a647317/' },
    { id: 17, name: 'Bhoomith', role: 'Marketing', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=BHOOMITH', instagram: 'https://www.instagram.com/____bhoomith____?igsh=NzhwMmlkcmduNDFp&utm_source=ig_contact_invite', linkedin: 'https://www.linkedin.com/in/bhoomith-muruganantham?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 18, name: 'Haresh P J', role: 'Marketing', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=HARESH', instagram: 'https://www.instagram.com/haresh_pj?igsh=YXpmaGRqcTBvaTEy', linkedin: 'https://www.linkedin.com/in/hareshpj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 19, name: 'Duraiprabakaran', role: 'Outreach', photo: duraiprabakaranPhoto, instagram: 'https://www.instagram.com/itzz_me_prabha027?igsh=aXY3YjcycmFmZTlk', linkedin: 'https://www.linkedin.com/in/duraiprabhakaran-p-2b19202a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 20, name: 'Krishnaraj C', role: 'Outreach', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=KRISHNARAJ', instagram: '', linkedin: '' },
    { id: 21, name: 'MANIMARAN TS', role: 'Startup', photo: manimaranPhoto, instagram: '', linkedin: '' },
    { id: 22, name: 'Mohamed Uduman', role: 'Startup', photo: 'https://via.placeholder.com/300x300/000000/FFFFFF?text=MOHAMED', instagram: '', linkedin: '' },
    { id: 23, name: 'Akshaya G', role: 'Media', photo: akshayaPhoto, instagram: 'https://www.instagram.com/vhenn_fynt?igsh=MWxjZTBnNGJ3NzVoaA==', linkedin: 'https://www.linkedin.com/in/akshaya-g-1b607122b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 24, name: 'Madhanakumar k', role: 'Media', photo: madhanakumarPhoto, instagram: 'https://www.instagram.com/ma_d_han?igsh=MXI4dmtoN2N6ZHFjNA%3D%3D&utm_source=qr', linkedin: 'https://www.linkedin.com/in/madhan-kumar-24922b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { id: 25, name: 'Sreenithika', role: 'Creativity', photo: sreenithikaPhoto, instagram: '', linkedin: '' },
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
                <div className="w-full h-48 flex items-center justify-center mb-4">
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
                    href={member.instagram || '#'}
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
