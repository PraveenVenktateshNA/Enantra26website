import useScrollReveal from '../hooks/useScrollReveal';

const items = [
  { time: '09:00', title: 'Opening', desc: 'Placeholder opening remarks.' },
  { time: '10:00', title: 'Keynote', desc: 'Placeholder keynote description.' },
  { time: '11:30', title: 'Panel', desc: 'Placeholder panel discussion.' },
];

export default function Schedule() {
  const ref = useScrollReveal({ threshold: 0.3 });
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 grid-pattern">
      <h2 className="text-3xl font-bold font-mono tracking-wider uppercase" style={{ textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>
        <span className="text-neutral-500">&gt;&gt;</span> Schedule
      </h2>
      <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest">
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      </div>
      <div ref={ref} className="reveal mt-8 border-l-2 border-white/30 pl-8 space-y-8" style={{ boxShadow: '-5px 0 15px rgba(255,255,255,0.05)' }}>
        {items.map((i, idx) => (
          <div key={idx} className="group relative">
            <div className="absolute -left-9 top-0 w-3 h-3 bg-white rounded-full" style={{ boxShadow: '0 0 10px rgba(255,255,255,0.8)' }}></div>
            <div className="text-neutral-400 text-xs font-mono tracking-widest">[{i.time}]</div>
            <div className="text-xl font-bold font-mono tracking-wide uppercase group-hover:text-white transition retro-hover mt-1">{i.title}</div>
            <div className="text-neutral-300 text-sm font-mono mt-1">{i.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}