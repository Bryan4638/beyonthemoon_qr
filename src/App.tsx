import { Instagram } from 'lucide-react';

const GOLD = '#B8973E';
const GOLD_LIGHT = '#D4B878';
const CREAM = '#EDEAE4';
const DARK = '#1A1814';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function StarField() {
  const stars = [
    { id: 0, top: 8, left: 12, size: 1.5, opacity: 0.25, delay: 0 },
    { id: 1, top: 15, left: 78, size: 1, opacity: 0.2, delay: 1.2 },
    { id: 2, top: 22, left: 45, size: 2, opacity: 0.15, delay: 0.5 },
    { id: 3, top: 35, left: 92, size: 1.2, opacity: 0.3, delay: 2.1 },
    { id: 4, top: 48, left: 5, size: 1.8, opacity: 0.2, delay: 0.8 },
    { id: 5, top: 60, left: 88, size: 1, opacity: 0.25, delay: 3 },
    { id: 6, top: 72, left: 18, size: 1.5, opacity: 0.15, delay: 1.7 },
    { id: 7, top: 80, left: 65, size: 2, opacity: 0.2, delay: 0.3 },
    { id: 8, top: 90, left: 38, size: 1, opacity: 0.3, delay: 2.5 },
    { id: 9, top: 5, left: 55, size: 1.2, opacity: 0.2, delay: 1 },
    { id: 10, top: 28, left: 22, size: 1.5, opacity: 0.15, delay: 3.2 },
    { id: 11, top: 55, left: 72, size: 1, opacity: 0.25, delay: 1.5 },
    { id: 12, top: 68, left: 48, size: 2, opacity: 0.1, delay: 0.7 },
    { id: 13, top: 42, left: 30, size: 1.2, opacity: 0.2, delay: 2.8 },
    { id: 14, top: 18, left: 62, size: 1.8, opacity: 0.15, delay: 0.2 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-pulse"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: GOLD_LIGHT,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${2 + star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: CREAM }}
    >
      <StarField />

      {/* Radial glow behind logo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${GOLD}18 0%, transparent 70%)`,
        }}
      />

      {/* Top ornament */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="h-px w-24" style={{ backgroundColor: GOLD, opacity: 0.4 }} />
      </div>

      <main className="relative z-10 flex flex-col items-center px-6 text-center max-w-lg">
        {/* Logo */}
        <div className="mb-8 relative">
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{ backgroundColor: `${GOLD}18`, transform: 'scale(1.3)' }}
          />
          <img
            src="/photo_2026-05-03_15-29-10.jpg"
            alt="Beyond The Moon — Curated Luxury"
            className="relative w-72 sm:w-80 object-contain rounded-full"
            style={{ filter: 'drop-shadow(0 12px 32px rgba(184,151,62,0.2))' }}
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8 w-full justify-center">
          <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD, opacity: 0.5 }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: GOLD }} />
          <div className="h-px flex-1 max-w-[80px]" style={{ backgroundColor: GOLD, opacity: 0.5 }} />
        </div>

        {/* Description */}
        <p
          className="text-base sm:text-lg leading-relaxed mb-12 tracking-wide"
          style={{ color: `${DARK}BB`, fontFamily: 'Georgia, serif', maxWidth: '360px' }}
        >
          Donde cada detalle importa. Servicios de belleza de lujo diseñados para
          realzar tu esencia y hacerte brillar más allá de toda expectativa.
        </p>

        {/* Social links  https://wa.me/1234567890*/}
        <div className="flex flex-col sm:flex-row gap-4">
          <SocialButton href="https://whatsapp.com/dl" icon={<WhatsAppIcon />} label="WhatsApp" />
          <SocialButton href="https://www.instagram.com/beyond_the_moon_salon?igsh=OXc0cHI0MDJqMmc3&utm_source=ig_contact_invite" icon={<Instagram className="w-6 h-6" />} label="Instagram" />
        </div>
      </main>

      {/* Bottom ornament */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="h-px w-24" style={{ backgroundColor: GOLD, opacity: 0.4 }} />
        <p
          className="text-xs tracking-[0.3em] uppercase mt-1"
          style={{ color: `${DARK}55`, fontFamily: 'Georgia, serif' }}
        >
          Beyond The Moon
        </p>
      </div>
    </div>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-7 py-3.5 rounded-full transition-all duration-300"
      style={{
        backgroundColor: 'transparent',
        border: `1px solid ${GOLD}66`,
        color: DARK,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.backgroundColor = GOLD;
        el.style.color = CREAM;
        el.style.borderColor = GOLD;
        el.style.boxShadow = `0 8px 28px ${GOLD}44`;
        el.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.backgroundColor = 'transparent';
        el.style.color = DARK;
        el.style.borderColor = `${GOLD}66`;
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
    >
      {icon}
      <span
        className="text-sm font-medium tracking-widest uppercase"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {label}
      </span>
    </a>
  );
}
