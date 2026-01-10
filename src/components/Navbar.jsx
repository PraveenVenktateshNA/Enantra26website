import { NavLink } from 'react-router-dom';
import whiteLogo from '../assets/AUSEC white logo.png';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/90 border-b-2 border-white/30" style={{ boxShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
      <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-mono text-sm tracking-widest retro-hover cursor-pointer flex items-center">
          <img src={whiteLogo} alt="AUSEC Logo" className="h-12" />
        </NavLink>
        <ul className="flex items-center gap-8">
          {[
            { to: '/events', label: 'Events' },
            { to: '/about', label: 'About' },            { to: '/team', label: 'Team' },            { to: '/schedule', label: 'Schedule' },
            { to: '/sponsors', label: 'Sponsors' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `font-mono text-sm tracking-wider ${
                    isActive ? 'text-white' : 'text-neutral-400'
                  } hover:text-white transition-all retro-hover`
                }
              >
                {'>'} {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}