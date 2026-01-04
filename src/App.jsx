import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Sponsors from './pages/Sponsors';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">{/* offset for sticky navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />        <Route path="/sponsors" element={<Sponsors />} />          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
