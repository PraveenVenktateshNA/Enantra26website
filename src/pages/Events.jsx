import useScrollReveal from '../hooks/useScrollReveal';
import Card from '../components/Card';
import { useState } from 'react';
import EventModal from '../components/EventModal';
import genzBazaarPoster from '../assets/posters/genz_bazaar.jpeg';
import arenaPoster from '../assets/posters/arenahunt.jpeg';
import auctionPoster from '../assets/posters/auctionhouse.png';
import rebootPoster from '../assets/posters/Reboot.jpeg';
import stockPoster from '../assets/posters/stock_Market.png';
import bussPoster from '../assets/posters/Business_Mastery.png';
import question from '../assets/posters/20Questions.jpg';
import doorPoster from '../assets/posters/Doordarshan.png';
import entrePoster from '../assets/posters/keys.png';
import networkPoster from '../assets/posters/Networking.png';
import pitchPoster from '../assets/posters/pitch.jpeg';
import foundPoster from '../assets/posters/Find the fake founder.png';
import bizPoster from '../assets/posters/Biz Quiz.png';

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
      rules: [
              'Open to all participants.' ,
              'Team size: 2-4 members.' ,
              'Prior registration required.'
            ],
      dateTime: 'February 23, 2025',
      venue: 'Vivek Auditorium',
      contact: 'John Doe | +91 98765 43210 | john@example.com',
      registerLink: 'https://unstop.com/o/OmElWRB?lb=eUxCbbeV&utm_medium=Share&utm_source=WhatsApp'
    },
    { 
      id: 2,
      title: 'AUCTION HOUSE', 
      text: 'Student teams run startups and tackle challenges through competitive auctions.',
      image: auctionPoster,
      fullDescription: 'Teams of students take up different roles to form startups/companies. They kickstart their business and navigate through problems their company could face by embarking on a journey where they auction items while bidding against competitors.',
      rules: [
              'Open to all participants.', 
              'Team of 3-5 people allowed.'
            ],
      dateTime: 'February 23, 2025',
      venue: 'Vivek Auditorium',
      contact: 'Upendra | +91 70941 10301 | Vishaka | +91 93454 94912',
      registerLink: 'https://unstop.com/p/auction-house-enantra-100-anna-university-student-entrepreneurship-club-1640298?lb=eUxCbbeV&utm_medium=Share&utm_source=ausec2023&utm_campaign=Competitions'
    },
    { 
      id: 3,
      title: 'Business Mastery', 
      text: 'A practical workshop building real-world business thinking and strategic leadership skills.',
      image: bussPoster,
      fullDescription: 'Business Mastery Workshop is a high-impact session that equips students and aspiring entrepreneurs with practical business insights and strategic thinking skills. Covering key areas such as business models, market positioning, leadership mindset, and growth strategies, the workshop bridges the gap between theory and real-world application. Through interactive discussions and case studies, participants gain actionable knowledge to think strategically and thrive in competitive environments.',
      rules: [ 
              'Induvidual Participation'
            ],
      dateTime: 'February 24, 2025 | 10:30 to 12:30 PM',
      venue: 'Turing Hall',
      contact: 'Swarup | +91 97890 86940 | Thithika | +91 73393 42806',
      registerLink: 'https://unstop.com/o/hUY8RAB?lb=oDYHKpG&utm_medium=Share&utm_source=workshops&utm_campaign=Abhijvar1195'
    },
    { 
      id: 4,
      title: 'GEN-Z BAZAAR', 
      text: 'A next-gen marketplace celebrating young entrepreneurs through unique products, artisanal creations, and innovative services.',
      image: genzBazaarPoster,
      fullDescription: "An exceptional marketplace showcasing the creativity of the nextgen entrepreneurs through unique products, artisanal creations, and innovative services. It's a celebration of the entrepreneurial spirit fuelling these small-scale businesses.",
      rules: [
              'Open to all.', 
              'Limited seats available.', 
              'First come first serve basis.'
            ],
      dateTime: 'February 23, 2025',
      venue: 'Seminar Hall, Building D',
      contact: 'Ragavendran S | +91 96776 56128 | Nikitha | +91 93429 71237',
      registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScDAeH1snvDmb4NEGbkRmSw--dvOjk2zuSxHEGJ9UjPT2OIZg/viewform'
    },
    { 
      id: 5,
      title: '20 QUESTIONS', 
      text: 'A fast-paced event testing old-school entrepreneurial thinking and pitching in a pre-digital setting.',
      image: question,
      fullDescription: '20 Questions – Retro Market Edition is a fast-paced, interactive mini-event that blends logical deduction, business intuition, and creative pitching, all set in a pre-2000 retro business environment.',
      rules: [
              'The event consists of 2 rounds.',
              'Each team must have 2–4 members.'
            ],
      dateTime: 'February 23, 2025',
      venue: 'Workshop Area, Building E',
      contact: 'Swarup | +91 97890 86940 | Nikitha | +91 93429 71237',
      registerLink: 'https://unstop.com/p/20-questions-retro-market-edition-enantra-100-anna-university-student-entrepreneurship-club-1640293?lb=eUxCbbeV&utm_medium=Share&utm_source=ausec2023&utm_campaign=Competitions'
    },
    { 
      id: 6,
      title: 'ARENA HUNT', 
      text: 'A two-round challenge combining bluff-based elimination and a retro-tech startup scavenger hunt.',
      image: arenaPoster,
      fullDescription: 'Arena Hunt consists of two rounds. The first round is a mass-participation elimination stage inspired by bluffing games, while the second round is a full outdoor scavenger hunt that simulates a startup journey using retro technology concepts applied to modern campus problems.',
      rules: [
              'The event consists of 2 rounds.',
              'Each team must have 2–4 members.'
            ],
      dateTime: 'February 23, 2025',
      venue: 'Open Ground, Campus',
      contact: 'Vignesh | +91 72002 39402 | Sam | +91 99404 29443',
      registerLink: 'https://unstop.com/p/arena-hunt-enantra-100-anna-university-student-entrepreneurship-club-1640292?lb=eUxCbbeV&utm_medium=Share&utm_source=ausec2023&utm_campaign=Competitions'
    },
    { 
      id: 7,
      title: 'FIND THE FAKE FOUNDER', 
      text: 'A social deduction game where players uncover the Fake Founder by questioning who truly understands the startup scenario.',
      image: foundPoster,
      fullDescription: 'Find the Fake Founder is a social deduction game inspired by Mafia/Among Us, built around a realistic startup situation. One participant is a Fake Founder who does not know the real problem. The rest are Real Founders who share the same hidden backstory.The group asks indirect Yes, No, Maybe questions. Only those who truly know the situation can answer consistently.',
      rules: [
              'Induvidual Participation'
            ],
      dateTime: 'February 24, 2025',
      venue: 'Innovation Lab, Building F',
      contact: 'Upendra | +91 70941 10301 | Monicka | +91 63801 03269',
      registerLink: 'https://unstop.com/p/find-the-fake-founder-enantra-100-anna-university-student-entrepreneurship-club-1639388?lb=eUxCbbeV&utm_medium=Share&utm_source=ausec2023&utm_campaign=Competitions'
    },
    { 
      id: 8,
      title: "REBOOT '94", 
      text: 'An immersive 1994-themed escape room where teams save a failing startup by solving puzzles under pressure.',
      image: rebootPoster,
      fullDescription: 'Reboot’94 is an immersive escape room style entrepreneurship event set in 1994 for a startup that is moments away from being shut down. Teams must fix the company department by department, unlock clues, solve puzzles and escape in the shortest time. Participants gain a practical understanding of how startups survive under pressure.',
      rules: [
              'The event consists of 2 rounds.',
              'Each team must have 2–4 members.'
            ],
      dateTime: 'February 24, 2025',
      venue: 'Executive Lounge, Building G',
      contact: 'Bhavatharini | +91 99627 00799 | Aadhithya | +91 73056 51790',
      registerLink: 'https://unstop.com/p/reboot-94-the-failing-startup-challenge-enantra-100-anna-university-student-entrepreneurship-club-1640289?lb=eUxCbbeV&utm_medium=Share&utm_source=ausec2023&utm_campaign=Competitions'
    },
    { 
      id: 9,
      title: 'Doordarshan', 
      text: 'A constraint-based challenge where teams build and adapt a product idea without discussion, simulating pre-internet, mass-market innovation under real-world limits.',
      image: doorPoster,
      fullDescription: 'This event is a constraint-driven innovation challenge designed to simulate real-world product development under limited communication, evolving requirements, and affordability-focused design. Teams build a product idea sequentially on paper without discussion, adapting continuously to new constraints while maintaining clarity and feasibility for a mass-market Indian audience inspired by a pre-internet mindset.',
      rules: [
              'Teams of four participants',
              'Each team is assigned a separate desk',
              'Team members are positioned apart to prevent verbal or non-verbal communication'
      ],
      dateTime: 'February 24, 2025 ',
      venue: 'Computer Center, Building H',
      contact: 'Swayamprabha | +91 93846 70972 | Kapil | +91 93848 77833',
      registerLink: 'https://unstop.com/p/doordarshan-twisted-edition-enantra-100-anna-university-student-entrepreneurship-club-1640280?lb=eUxCbbeV&utm_medium=Share&utm_source=ausec2023&utm_campaign=Competitions'
    },
    { 
      id: 10,
      title: 'Stock Market Workshop', 
      text: 'An interactive workshop that equips students with the fundamentals, mindset, and confidence to start investing wisely in the stock market.',
      image: stockPoster,
      fullDescription: 'Stock Market Workshop is a practical, beginner-friendly session that introduces students to how the stock market works and how investing builds long-term wealth. Participants learn the fundamentals of stock analysis, diversification, portfolio building, and risk management—along with the right investor mindset of patience and discipline. Through real-world examples and case discussions, the workshop equips students with the confidence to start their investing journey responsibly.',
      rules: [
              'Induvidual Participation'
      ],
      dateTime: 'February 23, 2025 | 1:30 to 3:00 PM',
      venue: 'Hall of Guines',
      contact: 'Bhavatharini | +91 99627 00799 | Thithika | +91 73393 42806',
      registerLink: 'https://unstop.com/p/stock-market-workshop-enantra-100-anna-university-student-entrepreneurship-club-1642869?lb=eUxCbbeV&utm_medium=Share&utm_source=ausec2023&utm_campaign=Workshops'
    },
    { 
      id: 11,
      title: 'Networking and Co-Elevation', 
      text: 'An engaging workshop that empowers students to build authentic professional networks and unlock career opportunities.',
      image: networkPoster,
      fullDescription: 'Networking for Success is an interactive workshop that helps students build strong professional relationships for career and personal growth. Participants learn effective communication, personal branding, and strategic networking techniques—including leveraging LinkedIn, engaging at professional events, and maintaining meaningful connections. Through practical tips and real-world insights, the session equips students with the confidence to create authentic networks that open doors to internships, jobs, and collaborations.',
      rules: [
              'Induvidual Participation'
      ],
      dateTime: 'February 24, 2025 | 1:30 to 3:00 PM',
      venue: 'Hall of Guines',
      contact: 'Tanish | +91 72002 39402 | Ragavendran S | +91 96776 56128 ',
      registerLink: 'https://unstop.com/p/networking-and-co-elevation-enantra-100-anna-university-student-entrepreneurship-club-1642866?lb=eUxCbbeV&utm_medium=Share&utm_source=ausec2023&utm_campaign=Workshops'
    },
    { 
      id: 12,
      title: 'Keys to Entrepreneurial Success', 
      text: 'An inspiring seminar that empowers students to transform ideas into sustainable and successful businesses.',
      image: entrePoster,
      fullDescription: 'Entrepreneurship Success Seminar is an interactive workshop that equips students with the mindset and practical skills to turn ideas into successful businesses. Participants learn how to identify opportunities, develop innovative concepts, and understand the fundamentals of business planning, funding, and marketing. Through real-world success stories and actionable insights, the session builds confidence to navigate challenges and create sustainable, growth-driven ventures.',
      rules: [
              'Induvidual Participation'
      ],
      dateTime: 'February 23, 2025 | 10:30 to 12:30 PM',
      venue: 'Hall of Guines',
      contact: 'Tanisha | +91 72002 39402 | Sam | +91 99404 29443',
      registerLink: 'https://unstop.com/p/keys-to-entrepreneurial-success-enantra-100-anna-university-au-chennai-1642856?lb=eUxCbbeV&utm_medium=Share&utm_source=ausec2023&utm_campaign=Workshops'
    },
    { 
      id: 13,
      title: 'Pitch & Perish', 
      text: 'A high-intensity competition testing startup strategy, pitching, and decision-making under pressure.',
      image: pitchPoster,
      fullDescription: 'Pitch & Perish is a high-intensity entrepreneurship competition that challenges participants to think creatively, communicate persuasively, and analyze strategically under pressure. Designed to simulate real startup battles, the event pushes teams to make smart investment decisions, pitch convincingly, and defend their business logic in dynamic situations.',
      rules: [
              'Team size 2-3 members'
      ],
      dateTime: 'February 23, 2025 | 9:00 AM to 5:00 PM',
      venue: 'Knowledge Park',
      contact: 'Abijith Varma | +91 63835 47450 | Harini Rajam | +91 83470 89212 | Hemachandran | +91 94440 31643',
      registerLink: ''
    },
    { 
      id: 14,
      title: 'The Biz Quiz', 
      text: 'A high-energy business quiz blending strategy, brand stories, and sharp wit.',
      image: bizPoster,
      fullDescription: 'Biz Quiz is a high-energy business trivia event that takes participants through iconic boardrooms, startup garages, and the fascinating stories behind global brands. Blending wit, nostalgia, and sharp business insight, the quiz challenges your corporate knowledge while connecting you with fellow entrepreneurs and enthusiasts. Compete for the grand prize—and ultimate bragging rights.',
      rules: [
              'Team of 1-3 members',
              'Its a 2 Round event'
      ],
      dateTime: 'February 23, 2025 | 9:30 to 12:30 PM',
      venue: 'Turing Hall',
      contact: 'Bhavatharini | +91 99627 00799 | Thithika | +91 73393 42806',
      registerLink: ''
    }
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
