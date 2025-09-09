type GlobeWireProps = {
  className?: string;
  size?: number;
};

export default function GlobeWire({ className = "", size = 220 }: GlobeWireProps) {
  const s = size;
  const stroke = "hsl(var(--primary))";
  return (
    <div className={`relative grid place-items-center ${className}`} style={{ width: s, height: s }}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10 blur-2xl" />
      <svg
        width={s}
        height={s}
        viewBox="0 0 200 200"
        className="relative animate-spin-slow drop-shadow-sm"
        aria-label="globe-terrestre-ligne"
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.9" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill="none" stroke="url(#g)" strokeWidth="1.5" />
        {Array.from({ length: 5 }).map((_, i) => (
          <ellipse
            key={`lat-${i}`}
            cx="100"
            cy="100"
            rx={95 - i * 12}
            ry={95 - i * 28}
            fill="none"
            stroke={stroke}
            strokeOpacity={0.25 + i * 0.12}
            strokeWidth="1"
          />
        ))}
        {[-60, -30, 0, 30, 60].map((deg, idx) => (
          <g key={`lon-${idx}`} transform={`rotate(${deg} 100 100)`}>
            <ellipse cx="100" cy="100" rx="35" ry="95" fill="none" stroke={stroke} strokeOpacity="0.3" strokeWidth="1" />
          </g>
        ))}
      </svg>
    </div>
  );
}
