import useScrollReveal from '../hooks/useScrollReveal';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

// Team member photos
import abhijithPhoto from '../assets/OB Pics/abhijith.jpg';
import adithyaPhoto from '../assets/OB Pics/Adithya.jpeg';
import adityaRPhoto from '../assets/OB Pics/AdityaRajasekaran.PNG';
import akshayaPhoto from '../assets/OB Pics/Akshaya.jpg';
import dakshinyaPhoto from '../assets/OB Pics/Dakshinya.jpeg';
import faheeraPhoto from '../assets/OB Pics/Faheera.jpeg';
import duraiprabakaranPhoto from '../assets/OB Pics/Durai prabakaran.webp';
import hareshPhoto from '../assets/OB Pics/Haresh P J.jpg';
import harishPhoto from '../assets/OB Pics/Harish.jpeg';
import krishnarajPhoto from '../assets/OB Pics/Krishnaraj .jpg';
import krishnenduPhoto from '../assets/OB Pics/Krishnendu.jpg';
import lokeshwarPhoto from '../assets/OB Pics/lokeshwar.jpeg';
import madhanakumarPhoto from '../assets/OB Pics/Madhanakumar.jpeg';
import manimaranPhoto from '../assets/OB Pics/Manimaran.JPG';
import prasannaPhoto from '../assets/OB Pics/prasanna.jpg';
import reemaPhoto from '../assets/OB Pics/Reema.jpeg';
import rishabhPhoto from '../assets/OB Pics/RishabhKarthik.jpg';
import sarveshwaranPhoto from '../assets/OB Pics/Sarveshwaran.jpg';
import sohamPhoto from '../assets/OB Pics/soham.JPG';
import sreenithikaPhoto from '../assets/OB Pics/Sreenithika.jpg';
import thiyaneshwarPhoto from '../assets/OB Pics/Thiyaneshwar-Ops.jpg';
import vandanaPhoto from '../assets/OB Pics/Vandana.jpg';

export default function Team() {
  const headerRef = useScrollReveal({ threshold: 0.4 });
  
  const teamMembers = [
    { id: 1, name: 'Abhijith Varma', role: 'President', photo: abhijithPhoto, instagram: 'https://www.instagram.com/awbhi04?igsh=MTh1NmZqczd2cWY2dQ==', linkedin: 'https://www.linkedin.com/in/abhijith-varma-227881176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 2, name: 'Sarveshwaran S', role: 'Vice President', photo: sarveshwaranPhoto, instagram: 'https://www.instagram.com/sarveshwaran1011?igsh=MWpvaTV4Z2U5YnJqbA==', linkedin: 'https://www.linkedin.com/in/sarveshwaran-s-b40171256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 3, name: 'J SOHAM', role: 'Vice President', photo: sohamPhoto, instagram: 'https://www.instagram.com/soham__2421/', linkedin: 'https://www.linkedin.com/in/j-soham-panda-971b8724b/' },
    { id: 4, name: 'Lokeshwar', role: 'General Secretary', photo: lokeshwarPhoto, instagram: 'https://www.instagram.com/lokeshwar19/', linkedin: 'https://www.linkedin.com/in/lokeshwar-sivakumar/' },
    { id: 5, name: 'Phavankumar RL', role: 'Treasurer', photo: null, instagram: 'https://www.instagram.com/its._.phavan/', linkedin: '' },
    { id: 6, name: 'Rishabh Karthik', role: 'Treasurer', photo: rishabhPhoto, instagram: 'https://www.instagram.com/rishabhkarthik?igsh=cHFncWhqc2M2MGhz&utm_source=qr', linkedin: 'https://www.linkedin.com/in/rishabhkarthik/' },
    { id: 7, name: 'Krishnendu M R', role: 'Tech', photo: krishnenduPhoto, instagram: 'https://www.instagram.com/krishnendu.m.r/', linkedin: 'https://linkedin.com/in/krishnendumr' },
    { id: 8, name: 'Adithya Arumugam', role: 'Events', photo: adithyaPhoto, instagram: 'https://www.instagram.com/__adithya_2004?igsh=d2ZkbGsweXpscWR1', linkedin: 'https://www.linkedin.com/in/adithya-arumugam3572?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 9, name: 'Reema', role: 'Events', photo: reemaPhoto, instagram: 'https://www.instagram.com/reemashivva05?igsh=MTdid3VqcHF4cHN6MA==', linkedin: 'https://www.linkedin.com/in/reema-shivva?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 10, name: 'V Vandana', role: 'Events', photo: vandanaPhoto, instagram: 'https://www.instagram.com/vandana_2304?igsh=MXg0ZDE3b24wajBlaA%3D%3D&utm_source=qr', linkedin: 'https://www.linkedin.com/in/vandana-venugopalan-022b702a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { id: 11, name: 'Faheera', role: 'External Relations', photo: faheeraPhoto, instagram: 'https://www.instagram.com/f.a.h.e.e.r.a?igsh=MXBoaDE5MzY5MThuZg%3D%3D&utm_source=qr', linkedin: 'https://www.linkedin.com/in/faheera-ummu-salma-35052b260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { id: 12, name: 'Aditya Rajasekaran', role: 'External Relations', photo: adityaRPhoto, instagram: 'https://www.instagram.com/aditya.r2003?igsh=eHlna242aW4wcWJq&utm_source=qr', linkedin: 'https://www.linkedin.com/in/aditya-rajasekaran-27345a1b9/' },
    { id: 13, name: 'Thiyaneshwar T', role: 'Operations', photo: thiyaneshwarPhoto, instagram: 'https://www.instagram.com/thiyaneshwart/', linkedin: 'https://www.linkedin.com/in/thiyaneshwar-t?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 14, name: 'Prasanna raj J', role: 'Operations', photo: prasannaPhoto, instagram: 'https://www.instagram.com/_prasanna21__/', linkedin: '' },
    { id: 15, name: 'Harish', role: 'Operations', photo: harishPhoto, instagram: 'https://www.instagram.com/_hxrish_._?igsh=MWRkbWoxOWZ4N2Vicw%3D%3D&utm_source=qr', linkedin: 'https://www.linkedin.com/in/harish-n-994406265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { id: 16, name: 'Dakshinya D', role: 'Marketing', photo: dakshinyaPhoto, instagram: 'https://www.instagram.com/dakshinya_3/', linkedin: 'https://www.linkedin.com/in/dakshinya-d-92a647317/' },
    { id: 17, name: 'Bhoomith', role: 'Marketing', photo: null, instagram: 'https://www.instagram.com/____bhoomith____?igsh=NzhwMmlkcmduNDFp&utm_source=ig_contact_invite', linkedin: 'https://www.linkedin.com/in/bhoomith-muruganantham?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 18, name: 'Haresh P J', role: 'Marketing', photo: hareshPhoto, instagram: 'https://www.instagram.com/haresh_pj?igsh=YXpmaGRqcTBvaTEy', linkedin: 'https://www.linkedin.com/in/hareshpj?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 19, name: 'Duraiprabakaran', role: 'Outreach', photo: duraiprabakaranPhoto, instagram: 'https://www.instagram.com/itzz_me_prabha027?igsh=aXY3YjcycmFmZTlk', linkedin: 'https://www.linkedin.com/in/duraiprabhakaran-p-2b19202a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 20, name: 'Krishnaraj C', role: 'Outreach', photo: krishnarajPhoto, instagram: 'https://www.instagram.com/itz_kd_krish_?igsh=MW96Z2M3ZzZtMXJkag==', linkedin: 'https://www.linkedin.com/in/krishna-raj-951779299?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { id: 21, name: 'MANIMARAN TS', role: 'Startup', photo: manimaranPhoto, instagram: 'https://www.instagram.com/mani.maaraan/', linkedin: '' },
    { id: 22, name: 'Mohamed Uduman', role: 'Startup', photo: null, instagram: 'https://www.instagram.com/uduman__m/', linkedin: '' },
    { id: 23, name: 'Akshaya G', role: 'Media', photo: akshayaPhoto, instagram: 'https://www.instagram.com/vhenn_fynt?igsh=MWxjZTBnNGJ3NzVoaA==', linkedin: 'https://www.linkedin.com/in/akshaya-g-1b607122b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { id: 24, name: 'Madhanakumar k', role: 'Media', photo: madhanakumarPhoto, instagram: 'https://www.instagram.com/ma_d_han?igsh=MXI4dmtoN2N6ZHFjNA%3D%3D&utm_source=qr', linkedin: 'https://www.linkedin.com/in/madhan-kumar-24922b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
    { id: 25, name: 'Sreenithika', role: 'Creativity', photo: sreenithikaPhoto, instagram: 'https://www.instagram.com/sreenithika_/', linkedin: 'https://www.linkedin.com/in/sreenithikasaravanakumar/' },
    { id: 26, name: 'Poojitha J', role: 'Creativity', photo: null, instagram: 'https://www.instagram.com/xxlunacelestiaxx/', linkedin: '' },
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

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch">
        {teamMembers.map((member) => {
          const RevealMember = () => {
            const ref = useScrollReveal({ threshold: 0.1 });
            return (
              <div
                ref={ref}
                key={member.id}
                className="reveal flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 border-2 border-white bg-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300"
              >
                <div className="w-full h-64 sm:h-52 md:h-48 flex items-center justify-center mb-3 sm:mb-4">
                  {member.photo && (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
                <h3 className="text-center font-mono text-sm sm:text-sm tracking-wide uppercase text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-center font-mono text-xs tracking-wide text-neutral-400 mb-3">
                  {member.role}
                </p>
                
                {/* Social Icons */}
                {(member.instagram || member.linkedin) && (
                  <div className="flex gap-4 sm:gap-3 mt-2">
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <img src={instagramIcon} alt="Instagram" className="w-8 h-7 sm:w-6 sm:h-5 object-contain" style={{ imageRendering: 'crisp-edges' }} />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7 sm:w-5 sm:h-5 object-contain" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          };
          return <RevealMember key={member.id} />;
        })}
      </div>
    </section>
  );
}
