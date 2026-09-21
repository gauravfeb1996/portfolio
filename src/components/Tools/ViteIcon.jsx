export function ViteIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="vite-body" x1="3" y1="3" x2="19" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="vite-bolt" x1="12" y1="7" x2="12" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFEA83" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
      <path fill="url(#vite-body)" d="M3 4.6 11.7 2l7.8 2.5-6.9 16.9a.65.65 0 0 1-1.2 0L3 4.6Z" />
      <path fill="url(#vite-bolt)" d="m12.9 5.8-4.4 7.4h3.1l-.6 5 4.7-7.7h-3.2l.4-4.7Z" />
    </svg>
  );
}
