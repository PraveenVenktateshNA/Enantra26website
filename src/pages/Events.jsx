import useScrollReveal from '../hooks/useScrollReveal';
import Card from '../components/Card';
import { useState } from 'react';
import EventModal from '../components/EventModal';

export default function Events() {
  const headerRef = useScrollReveal({ threshold: 0.4 });
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const events = [
    { 
      id: 1,
      title: '6 DEGREE TALKS', 
      text: 'ENANTRA’s flagship event spotlighting bold young entrepreneurs and their journeys.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+1',
      fullDescription: '6-Degree Talks is the flagship event of ENANTRA where we bring stories of fearless young entrepreneurs who have dared to dream, create, and make their mark on the business world from the makers of the ideas itself.',
      rules: ['Open to all participants. Team size: 2-4 members. Prior registration required.'],
      dateTime: 'January 15, 2025 | 10:00 AM - 5:00 PM',
      venue: 'Main Auditorium, Building A',
      contact: 'John Doe | +91 98765 43210 | john@example.com',
      registerLink: 'https://unstop.com/event1'
    },
    { 
      id: 2,
      title: 'AUCTION HOUSE', 
      text: 'Student teams run startups and tackle challenges through competitive auctions.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+2',
      fullDescription: 'Teams of students take up different roles to form startups/companies. They kickstart their business and navigate through problems their company could face by embarking on a journey where they auction items while bidding against competitors.',
      rules: ['Open to all participants. Individual participation only. No prior experience needed.'],
      dateTime: 'January 16, 2025 | 2:00 PM - 6:00 PM',
      venue: 'Conference Hall, Building B',
      contact: 'Jane Smith | +91 98765 43211 | jane@example.com',
      registerLink: 'https://unstop.com/event2'
    },
    { 
      id: 3,
      title: 'IDEA CRUNCH', 
      text: 'A mega ideathon where ideas become startups, with winners earning seed funding.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+3',
      fullDescription: 'A mega ideathon organized by the Startup Team where aspiring entrepreneurs, tech wizards, and visionary thinkers converge to transform their groundbreaking ideas into fully-fledged startups. The winners of the event receive seed funding for their winning idea.',
      rules: ['Students only. Team size: 1-3 members. ID card mandatory.'],
      dateTime: 'January 17, 2025 | 9:00 AM - 1:00 PM',
      venue: 'Lab Complex, Building C',
      contact: 'Mike Johnson | +91 98765 43212 | mike@example.com',
      registerLink: 'https://unstop.com/event3'
    },
    { 
      id: 4,
      title: 'GEN Z BAZZAR', 
      text: 'A next-gen marketplace celebrating young entrepreneurs through unique products, artisanal creations, and innovative services.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+4',
      fullDescription: "An exceptional marketplace showcasing the creativity of the nextgen entrepreneurs through unique products, artisanal creations, and innovative services. It's a celebration of the entrepreneurial spirit fuelling these small-scale businesses.",
      rules: ['Open to all. Limited seats available. First come first serve basis.'],
      dateTime: 'January 18, 2025 | 11:00 AM - 4:00 PM',
      venue: 'Seminar Hall, Building D',
      contact: 'Sarah Williams | +91 98765 43213 | sarah@example.com',
      registerLink: 'https://unstop.com/event4'
    },
    { 
      id: 5,
      title: '20 QUESTIONS', 
      text: 'A fast-paced event testing old-school entrepreneurial thinking and pitching in a pre-digital setting.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+5',
      fullDescription: '20 Questions – Retro Market Edition is a fast-paced, interactive mini-event that blends logical deduction, business intuition, and creative pitching, all set in a pre-2000 retro business environment.',
      rules: [
              'The event consists of 2 rounds.',
              'Each team must have 3–4 members.'
            ],
      dateTime: 'January 19, 2025 | 3:00 PM - 7:00 PM',
      venue: 'Workshop Area, Building E',
      contact: 'Swarup (9789086940) | Cathrin Cynthia (8825430997) | Nikitha (9342971237)',
      registerLink: 'https://unstop.com/event5'
    },
    { 
      id: 6,
      title: 'ARENA HUNT', 
      text: 'A two-round challenge combining bluff-based elimination and a retro-tech startup scavenger hunt.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+6',
      fullDescription: 'Arena Hunt consists of two rounds. The first round is a mass-participation elimination stage inspired by bluffing games, while the second round is a full outdoor scavenger hunt that simulates a startup journey using retro technology concepts applied to modern campus problems.',
      rules: [
              'The event consists of 2 rounds.',
              'Each team must have 3–4 members.'
            ],
      dateTime: 'January 20, 2025 | 10:00 AM - 3:00 PM',
      venue: 'Open Ground, Campus',
      contact: 'Emily Davis | +91 98765 43215 | emily@example.com',
      registerLink: 'https://unstop.com/event6'
    },
    { 
      id: 7,
      title: 'FIND THE FAKE FOUNDER', 
      text: 'A social deduction game where players uncover the Fake Founder by questioning who truly understands the startup scenario.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+7',
      fullDescription: 'Find the Fake Founder is a social deduction game inspired by Mafia/Among Us, built around a realistic startup situation. One participant is a Fake Founder who does not know the real problem. The rest are Real Founders who share the same hidden backstory.The group asks indirect Yes, No, Maybe questions. Only those who truly know the situation can answer consistently.',
      rules: [
              'Its ideal to have 6-8 players per round.'
            ],
      dateTime: 'January 21, 2025 | 1:00 PM - 5:00 PM',
      venue: 'Innovation Lab, Building F',
      contact: 'Robert Miller | +91 98765 43216 | robert@example.com',
      registerLink: 'https://unstop.com/event7'
    },
    { 
      id: 8,
      title: "REBOOT '94", 
      text: 'An immersive 1994-themed escape room where teams save a failing startup by solving puzzles under pressure.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+8',
      fullDescription: 'Reboot’94 is an immersive escape room style entrepreneurship event set in 1994 for a startup that is moments away from being shut down. Teams must fix the company department by department, unlock clues, solve puzzles and escape in the shortest time. Participants gain a practical understanding of how startups survive under pressure.',
      rules: [
              'The event consists of 2 rounds.',
              'Each team must have 3–4 members.'
            ],
      dateTime: 'January 22, 2025 | 4:00 PM - 8:00 PM',
      venue: 'Executive Lounge, Building G',
      contact: 'Linda Wilson | +91 98765 43217 | linda@example.com',
      registerLink: 'https://unstop.com/event8'
    },
    { 
      id: 9,
      title: 'Doordarshan', 
      text: 'A constraint-based challenge where teams build and adapt a product idea without discussion, simulating pre-internet, mass-market innovation under real-world limits.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+9',
      fullDescription: 'This event is a constraint-driven innovation challenge designed to simulate real-world product development under limited communication, evolving requirements, and affordability-focused design. Teams build a product idea sequentially on paper without discussion, adapting continuously to new constraints while maintaining clarity and feasibility for a mass-market Indian audience inspired by a pre-internet mindset.',
      rules: [
              'Teams of four participants',
              'Each team is assigned a separate desk',
              'Team members are positioned apart to prevent verbal or non-verbal communication'
      ],
      dateTime: 'January 23, 2025 | 9:00 AM - 6:00 PM',
      venue: 'Computer Center, Building H',
      contact: 'Chris Anderson | +91 98765 43218 | chris@example.com',
      registerLink: 'https://unstop.com/event9'
    },
    { 
      id: 10,
      title: 'Event 10', 
      text: 'This is event 10 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+10',
      fullDescription: 'This is the full detailed description of Event 10. It provides comprehensive information about what attendees can expect.',
      rules: ['Advanced level participants. Certificate of completion provided.'],
      dateTime: 'January 24, 2025 | 11:00 AM - 2:00 PM',
      venue: 'Training Room, Building I',
      contact: 'Patricia Taylor | +91 98765 43219 | patricia@example.com',
      registerLink: 'https://unstop.com/event10'
    },
    { 
      id: 11,
      title: 'Event 11', 
      text: 'This is event 11 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+11',
      fullDescription: 'This is the full detailed description of Event 11. It provides comprehensive information about what attendees can expect.',
      rules: ['Groups of 3-6 members. Accommodation available for outstation participants.'],
      dateTime: 'January 25, 2025 | 10:00 AM - 4:00 PM',
      venue: 'Sports Complex, Campus',
      contact: 'Mark Thompson | +91 98765 43220 | mark@example.com',
      registerLink: 'https://unstop.com/event11'
    },
    { 
      id: 12,
      title: 'Event 12', 
      text: 'This is event 12 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+12',
      fullDescription: 'This is the full detailed description of Event 12. It provides comprehensive information about what attendees can expect.',
      rules: ['Solo participation only. Materials provided. Photography allowed.'],
      dateTime: 'January 26, 2025 | 3:00 PM - 9:00 PM',
      venue: 'Art Gallery, Building J',
      contact: 'Nancy White | +91 98765 43221 | nancy@example.com',
      registerLink: 'https://unstop.com/event12'
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-12 grid-pattern">
        <div ref={headerRef} className="reveal">
          <h2 className="text-3xl font-bold font-mono tracking-wider uppercase" style={{ textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>
            <span className="text-neutral-500">&gt;&gt;</span> Events
          </h2>
          <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest">
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          </div>
          <p className="mt-6 text-neutral-300 max-w-3xl font-mono text-sm leading-relaxed">
            Explore our upcoming events, workshops, and conferences. Click on any event for more details.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {events.map((event, i) => (
            <RevealCard 
              key={event.id} 
              title={event.title}
              onClick={() => setSelectedEvent(event)}
            >
              {event.text}
            </RevealCard>
          ))}
        </div>
      </section>
      
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </>
  );
}

function RevealCard({ title, children, onClick }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className="reveal h-full cursor-pointer" onClick={onClick}>
      <Card title={title}>{children}</Card>
    </div>
  );
}
