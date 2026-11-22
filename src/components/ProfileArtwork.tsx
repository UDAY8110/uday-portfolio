export default function ProfileArtwork() {
  return (
    <div aria-hidden className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-[8%] h-[76%] w-[76%] rounded-full border border-crimson-2/20 shadow-[0_0_120px_rgba(229,19,43,0.25),inset_0_0_80px_rgba(229,19,43,0.12)]" />
      <div className="absolute h-[54%] w-[54%] rounded-full border border-white/10" />
      <img
        src="/uday.png"
        alt=""
        className="absolute bottom-0 left-1/2 h-[96%] max-w-[90%] -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
      />
      <div className="absolute inset-x-[14%] bottom-[18%] h-px bg-gradient-to-r from-transparent via-crimson-2/50 to-transparent" />
    </div>
  );
}
