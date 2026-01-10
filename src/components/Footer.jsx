import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/20 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
        {/* Left - Copyright */}
        <span className="font-mono text-xs md:text-sm tracking-wide opacity-80">
          Copyright to AUSEC<sup>©</sup>
        </span>
        
        {/* Middle - Developed by */}
        <span className="font-mono text-xs md:text-sm tracking-wide opacity-80">
          Developed by AUSEC Tech
        </span>
        
        {/* Right - Social Icons */}
        <div className="flex gap-4 items-center">
          <a
            href="https://www.instagram.com/_ausec_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <img src={instagramIcon} alt="Instagram" className="w-7 h-6 md:w-8 md:h-7 rounded object-cover" />
          </a>
          <a
            href="https://www.linkedin.com/in/anna-university-student-entrepreneurship-club-ausec/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 md:w-7 md:h-7 rounded" />
          </a>
        </div>
      </div>
    </footer>
  );
}
