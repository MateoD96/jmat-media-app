"use client";

const logos = [
  "Meta Ads",
  "HubSpot",
  "ActiveCampaign",
  "Klaviyo",
  "GoHighLevel",
  "Zapier",
  "Google Ads",
  "Shopify",
  "Notion",
  "Stripe",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-8 py-3 min-w-[160px] rounded-xl border border-[rgba(138,81,187,0.2)] bg-[rgba(138,81,187,0.04)] mx-3 shrink-0">
      <span className="text-sm font-medium text-[#B9A8F6] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function SocialProof() {
  // Triple copy so -33.33% always lands on an identical frame — seamless on any screen width
  const tripled = [...logos, ...logos, ...logos];

  return (
    <section className="pt-6 pb-16 overflow-hidden border-y border-[rgba(138,81,187,0.1)]">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee 10s linear infinite;
        }
        @media (max-width: 768px) {
          .marquee-track { animation-duration: 12s; }
        }
      `}</style>

      <p className="text-center text-xs text-[#5A3793] uppercase tracking-widest mb-8 font-medium">
        Stack de herramientas que dominamos
      </p>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #1E1E23, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #1E1E23, transparent)",
          }}
        />

        <div className="marquee-track flex">
          {tripled.map((name, i) => (
            <LogoItem key={i} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
