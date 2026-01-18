export default function Card({ title, children }) {
  return (
    <div className="card-minimal rounded-none p-6 h-full flex flex-col md:hover:scale-[1.02] md:transition">
      {title && (
        <h3 className="card-title text-lg font-bold mb-3 text-white font-mono tracking-wider uppercase retro-hover">
          {title}
        </h3>
      )}
      <p className="text-neutral-300 text-xs leading-relaxed font-mono flex-1">{children}</p>
    </div>
  );
}