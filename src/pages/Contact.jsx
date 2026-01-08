import useScrollReveal from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal({ threshold: 0.4 });
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 grid-pattern">
      <div ref={ref} className="reveal">
        <h2 className="text-3xl font-bold font-mono tracking-wider uppercase" style={{ textShadow: '0 0 15px rgba(255,255,255,0.3)' }}>
          <span className="text-neutral-500">&gt;&gt;</span> Contact
        </h2>
        <div className="mt-2 text-neutral-500 font-mono text-xs tracking-widest">
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          <div className="border-2 border-white/30 rounded-none p-6 h-full flex flex-col justify-between" style={{ boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}>
            <div>
              <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase">// Email</div>
              <div className="mt-2 font-mono retro-hover text-white">ausec.official@gmail.com</div>
            </div>
          </div>
          <div className="border-2 border-white/30 rounded-none p-6 h-full flex flex-col justify-between" style={{ boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}>
            <div>
              <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase">// Phone</div>
              <div className="mt-2 font-mono retro-hover text-white">
                <div>Abhijith Varma</div>
                <div className="mt-1">+91 63835 47450</div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-12">
          <div className="font-mono text-xs text-neutral-400 tracking-widest uppercase mb-4">// Location</div>
          <div className="border-2 border-white/30 overflow-hidden" style={{ boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}>
            <iframe
              src="https://maps.google.com/maps?q=Anna%20University,%20Guindy,%20Chennai&t=&z=15&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anna University Location"
              className="w-full h-64 md:h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}