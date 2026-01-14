import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Events from './pages/Events';
import About from './pages/About';
import Team from './pages/Team';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import Sponsors from './pages/Sponsors';

export default function App() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <PageTransition locationKey={location.pathname}>
        <Navbar />
        <main className="pt-20">{/* offset for sticky navbar */}
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
}
