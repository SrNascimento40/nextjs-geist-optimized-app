export default function Logo({ className = "w-16 h-8" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 120 60" className="w-full h-full">
        {/* Interconnected circles and spiral design */}
        <g stroke="#000" strokeWidth="2" fill="none">
          {/* Left circle with internal pattern */}
          <circle cx="25" cy="30" r="18" />
          <circle cx="25" cy="30" r="12" />
          <circle cx="25" cy="30" r="6" />
          <path d="M 15 30 Q 25 20, 35 30 Q 25 40, 15 30" />
          
          {/* Connecting wavy line */}
          <path d="M 43 30 Q 55 20, 67 30 Q 79 40, 91 30" strokeWidth="2.5" />
          
          {/* Right spiral */}
          <circle cx="95" cy="30" r="18" />
          <path d="M 95 12 Q 113 30, 95 48 Q 77 30, 95 12 Q 104 21, 95 30 Q 86 30, 95 21" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
