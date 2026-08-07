/** Generates a deterministic SVG placeholder image as a data URL for product cards. */
const palettes: Record<string, [string, string]> = {
  'gaming-laptop': ['#1e3a8a', '#3b82f6'],
  'gaming-laptop-2': ['#0e7490', '#06b6d4'],
  'ultrabook': ['#1e40af', '#60a5fa'],
  'gaming-pc': ['#7c2d12', '#f97316'],
  'gaming-pc-beast': ['#581c87', '#a855f7'],
  'ssd': ['#0c4a6e', '#0ea5e9'],
  'keyboard': ['#1f2937', '#4b5563'],
  'monitor': ['#1e3a8a', '#3b82f6'],
  'mouse': ['#1a1a2e', '#e11d48'],
  'psu': ['#7f1d1d', '#dc2626'],
  'monitor-4k': ['#0f172a', '#0ea5e9'],
  'budget-laptop': ['#365314', '#84cc16'],
};

export function ProductImage({ name, image, className }: { name: string; image: string; className?: string }) {
  const [c1, c2] = palettes[image] || ['#1e3a8a', '#3b82f6'];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${c1}"/>
        <stop offset="100%" stop-color="${c2}"/>
      </linearGradient>
      <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(255,255,255,0.3)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#bg)"/>
    <rect width="400" height="150" fill="url(#glow)"/>
    <circle cx="320" cy="60" r="80" fill="rgba(255,255,255,0.08)"/>
    <circle cx="80" cy="250" r="60" fill="rgba(255,255,255,0.05)"/>
    <text x="200" y="160" font-family="Space Grotesk, Arial, sans-serif" font-size="20" font-weight="600" fill="rgba(255,255,255,0.9)" text-anchor="middle">${name}</text>
    <text x="200" y="185" font-family="monospace" font-size="10" fill="rgba(255,255,255,0.5)" text-anchor="middle">RK TECH SOLUTIONS</text>
  </svg>`;
  const encoded = encodeURIComponent(svg).replace(/'/g, '%27').replace(/"/g, '%22');

  if (image.startsWith("/")) {
  return (
    <img
      src={image}
      alt={`${name} - RK Tech Solutions`}
      loading="lazy"
      draggable={false}
      className={className}
    />
  );
}

  return (
    <img
      src={`data:image/svg+xml,${encoded}`}
      alt={`${name} - RK Tech Solutions`}
      loading="lazy"
      draggable={false}
      className={className}
    />
  );
}
