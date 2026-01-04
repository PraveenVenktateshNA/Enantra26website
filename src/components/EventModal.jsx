export default function EventModal({ event, onClose }) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 event-modal-backdrop"
      data-event-id={event.id}
      onClick={onClose}
    >
      <div 
        className={`event-modal-content relative max-w-2xl w-full p-8 max-h-[90vh] overflow-y-auto`}
        data-event-id={event.id}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner brackets */}
        <div className="modal-corner absolute top-0 left-0 w-6 h-6 border-l-3 border-t-3"></div>
        <div className="modal-corner absolute top-0 right-0 w-6 h-6 border-r-3 border-t-3"></div>
        <div className="modal-corner absolute bottom-0 left-0 w-6 h-6 border-l-3 border-b-3"></div>
        <div className="modal-corner absolute bottom-0 right-0 w-6 h-6 border-r-3 border-b-3"></div>
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="modal-close-btn absolute top-4 right-4 font-mono text-xl transition"
        >
          [X]
        </button>
        
        {/* Event Image */}
        {event.image && (
          <div className="mb-6 w-full flex justify-center">
            <img 
              src={event.image} 
              alt={event.title}
              className="max-w-full h-auto max-h-75 md:max-h-100 object-contain border-2"
              style={{ 
                borderColor: 'inherit',
                boxShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}
            />
          </div>
        )}
        
        {/* Event Title */}
        <h2 
          className="text-2xl md:text-3xl font-bold font-mono tracking-wider uppercase mb-6 pr-8"
          style={{ textShadow: '0 0 15px rgba(255,255,255,0.3)' }}
        >
          <span className="text-neutral-500">&gt;&gt;</span> {event.title}
        </h2>
        
        <div className="space-y-6 font-mono text-sm">
          {/* Description */}
          <div>
            <div className="text-neutral-400 text-xs tracking-widest mb-2">// DESCRIPTION</div>
            <p className="text-white leading-relaxed">{event.fullDescription}</p>
          </div>
          
          {/* Rules */}
          <div>
            <div className="text-neutral-400 text-xs tracking-widest mb-2">// RULES & ELIGIBILITY</div>
            <p className="text-white leading-relaxed">{event.rules}</p>
          </div>
          
          {/* Date & Time */}
          <div>
            <div className="text-neutral-400 text-xs tracking-widest mb-2">// DATE & TIME</div>
            <p className="text-white">{event.dateTime}</p>
          </div>
          
          {/* Venue */}
          <div>
            <div className="text-neutral-400 text-xs tracking-widest mb-2">// VENUE</div>
            <p className="text-white">{event.venue}</p>
          </div>
          
          {/* Contact */}
          <div>
            <div className="text-neutral-400 text-xs tracking-widest mb-2">// CONTACT PERSON</div>
            <p className="text-white">{event.contact}</p>
          </div>
          
          {/* Register Button */}
          <div className="pt-4">
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white/40 px-6 py-3 hover:border-white/60 hover:bg-white/5 transition font-mono text-xs tracking-widest uppercase"
              style={{ boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}
            >
              &gt; Register / Buy Ticket
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}