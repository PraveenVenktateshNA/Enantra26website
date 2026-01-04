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
      title: 'Event 1', 
      text: 'This is event 1 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+1',
      fullDescription: 'This is the full detailed description of Event 1. It provides comprehensive information about what attendees can expect.',
      rules: 'Open to all participants. Team size: 2-4 members. Prior registration required.',
      dateTime: 'January 15, 2025 | 10:00 AM - 5:00 PM',
      venue: 'Main Auditorium, Building A',
      contact: 'John Doe | +91 98765 43210 | john@example.com',
      registerLink: 'https://unstop.com/event1'
    },
    { 
      id: 2,
      title: 'Event 2', 
      text: 'This is event 2 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+2',
      fullDescription: 'This is the full detailed description of Event 2. It provides comprehensive information about what attendees can expect.',
      rules: 'Open to all participants. Individual participation only. No prior experience needed.',
      dateTime: 'January 16, 2025 | 2:00 PM - 6:00 PM',
      venue: 'Conference Hall, Building B',
      contact: 'Jane Smith | +91 98765 43211 | jane@example.com',
      registerLink: 'https://unstop.com/event2'
    },
    { 
      id: 3,
      title: 'Event 3', 
      text: 'This is event 3 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+3',
      fullDescription: 'This is the full detailed description of Event 3. It provides comprehensive information about what attendees can expect.',
      rules: 'Students only. Team size: 1-3 members. ID card mandatory.',
      dateTime: 'January 17, 2025 | 9:00 AM - 1:00 PM',
      venue: 'Lab Complex, Building C',
      contact: 'Mike Johnson | +91 98765 43212 | mike@example.com',
      registerLink: 'https://unstop.com/event3'
    },
    { 
      id: 4,
      title: 'Event 4', 
      text: 'This is event 4 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+4',
      fullDescription: 'This is the full detailed description of Event 4. It provides comprehensive information about what attendees can expect.',
      rules: 'Open to all. Limited seats available. First come first serve basis.',
      dateTime: 'January 18, 2025 | 11:00 AM - 4:00 PM',
      venue: 'Seminar Hall, Building D',
      contact: 'Sarah Williams | +91 98765 43213 | sarah@example.com',
      registerLink: 'https://unstop.com/event4'
    },
    { 
      id: 5,
      title: 'Event 5', 
      text: 'This is event 5 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+5',
      fullDescription: 'This is the full detailed description of Event 5. It provides comprehensive information about what attendees can expect.',
      rules: 'Professional experience required. Registration fee applicable.',
      dateTime: 'January 19, 2025 | 3:00 PM - 7:00 PM',
      venue: 'Workshop Area, Building E',
      contact: 'David Brown | +91 98765 43214 | david@example.com',
      registerLink: 'https://unstop.com/event5'
    },
    { 
      id: 6,
      title: 'Event 6', 
      text: 'This is event 6 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+6',
      fullDescription: 'This is the full detailed description of Event 6. It provides comprehensive information about what attendees can expect.',
      rules: 'All age groups welcome. Free entry. Refreshments provided.',
      dateTime: 'January 20, 2025 | 10:00 AM - 3:00 PM',
      venue: 'Open Ground, Campus',
      contact: 'Emily Davis | +91 98765 43215 | emily@example.com',
      registerLink: 'https://unstop.com/event6'
    },
    { 
      id: 7,
      title: 'Event 7', 
      text: 'This is event 7 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+7',
      fullDescription: 'This is the full detailed description of Event 7. It provides comprehensive information about what attendees can expect.',
      rules: 'College students only. Valid ID required. Team limit: 5 members.',
      dateTime: 'January 21, 2025 | 1:00 PM - 5:00 PM',
      venue: 'Innovation Lab, Building F',
      contact: 'Robert Miller | +91 98765 43216 | robert@example.com',
      registerLink: 'https://unstop.com/event7'
    },
    { 
      id: 8,
      title: 'Event 8', 
      text: 'This is event 8 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+8',
      fullDescription: 'This is the full detailed description of Event 8. It provides comprehensive information about what attendees can expect.',
      rules: 'Industry professionals preferred. Networking session included.',
      dateTime: 'January 22, 2025 | 4:00 PM - 8:00 PM',
      venue: 'Executive Lounge, Building G',
      contact: 'Linda Wilson | +91 98765 43217 | linda@example.com',
      registerLink: 'https://unstop.com/event8'
    },
    { 
      id: 9,
      title: 'Event 9', 
      text: 'This is event 9 description.',
      image: 'https://placehold.co/800x600/000000/FFFFFF/png?text=EVENT+9',
      fullDescription: 'This is the full detailed description of Event 9. It provides comprehensive information about what attendees can expect.',
      rules: 'Beginners welcome. Laptops required. Power backup available.',
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
      rules: 'Advanced level participants. Certificate of completion provided.',
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
      rules: 'Groups of 3-6 members. Accommodation available for outstation participants.',
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
      rules: 'Solo participation only. Materials provided. Photography allowed.',
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
