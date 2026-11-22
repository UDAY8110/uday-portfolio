import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        {project.motif === 'book' && (
          <g transform="translate(205 70)" fill="none" stroke={a} strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 16 Q44 0 80 20 V155 Q44 135 8 151 Z" strokeWidth="3" />
            <path d="M80 20 Q116 0 152 16 V151 Q116 135 80 155 Z" strokeWidth="3" />
            <path d="M24 42 Q49 34 66 44 M24 62 Q49 54 66 64 M96 44 Q119 34 137 42 M96 64 Q119 54 137 62" strokeWidth="2" strokeOpacity="0.7" />
          </g>
        )}
        {project.motif === 'helmet' && (
          <g transform="translate(205 68)" fill="none" stroke={a} strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 100 C16 49 48 16 93 16 C137 16 167 48 167 93 L132 93 C123 73 107 64 84 64 C63 64 46 77 40 100 Z" strokeWidth="3" />
            <path d="M40 100 H168 L151 120 H57 C46 120 40 113 40 100 Z M66 121 L76 150 H112 L124 121" strokeWidth="3" />
            <path d="M77 36 Q106 32 124 48" strokeWidth="2" strokeOpacity="0.6" />
          </g>
        )}
        {project.motif === 'travel' && (
          <g transform="translate(202 60)" fill="none" stroke={a} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="112" cy="56" r="31" strokeWidth="2" strokeOpacity="0.75" />
            <path d="M15 157 Q57 112 93 145 T173 139 M19 177 Q67 132 102 164 T176 159" strokeWidth="3" />
            <path d="M23 119 L65 82 L94 105 L134 67 L174 102" strokeWidth="2" strokeDasharray="5 8" />
            <circle cx="23" cy="119" r="6" fill={a} /><circle cx="174" cy="102" r="6" fill={a} />
          </g>
        )}
        {project.motif === 'air' && (
          <g transform="translate(198 76)" fill="none" stroke={a} strokeLinecap="round">
            {[0, 1, 2, 3].map((i) => (
              <path key={i} d={`M20 ${42 + i * 32} C52 ${20 + i * 32} 72 ${64 + i * 32} 106 ${42 + i * 32} S158 ${20 + i * 32} 182 ${42 + i * 32}`} strokeWidth={i === 0 ? 3 : 2} strokeOpacity={1 - i * 0.16} />
            ))}
            <circle cx="52" cy="24" r="4" fill={a} /><circle cx="145" cy="20" r="3" fill={a} /><circle cx="166" cy="174" r="4" fill={a} />
          </g>
        )}
        {project.motif === 'calculator' && (
          <g transform="translate(230 36)" fill="none" stroke={a} strokeLinecap="round" strokeLinejoin="round">
            <rect x="14" y="12" width="116" height="208" rx="14" strokeWidth="3" />
            <rect x="29" y="28" width="86" height="42" rx="5" strokeWidth="2" />
            {[0, 1, 2].map((row) => [0, 1, 2].map((col) => (
              <rect key={`${row}-${col}`} x={31 + col * 27} y={91 + row * 34} width="16" height="18" rx="4" strokeWidth="2" />
            )))}
            <rect x="112" y="91" width="14" height="86" rx="5" strokeWidth="2" />
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Small fictional platform mark used in the nav and on cards. */
export function SeriesMark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 24 32" className="h-[1.1em] w-auto" aria-hidden>
        <path d="M5 5v14c0 5 2.8 8 7 8s7-3 7-8V5" fill="none" stroke="#e5132b" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="font-sans text-[0.62em] font-bold tracking-[0.36em] text-mist">SERIES</span>
    </span>
  );
}
