export default function Footer() {
  return (
    <footer className="w-full border-t border-white/20 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <span className="font-mono text-xs md:text-sm tracking-wide opacity-80">
          Developed by AUSEC Tech
        </span>
        <span className="font-mono text-xs md:text-sm tracking-wide opacity-80">
          Copyright to AUSEC<sup>©</sup>
        </span>
      </div>
    </footer>
  );
}
