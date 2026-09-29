/** Dibuja los iconos compartidos sin depender de una biblioteca externa. */
export default function Icon({ name, size = 20 }) {
  const paths = {
    arrow: <path d="M7 17 17 7M7 7h10v10" />,
    down: <path d="M12 4v16m-6-6 6 6 6-6" />,
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
    github: (
      <path d="M9 19c-4 1-4-2-6-2m12 5v-4a3.5 3.5 0 0 0-1-3c3 0 6-1.5 6-5a4 4 0 0 0-1-3 4 4 0 0 0 0-4s-1 0-3 1a11 11 0 0 0-8 0C6 3 5 3 5 3a4 4 0 0 0 0 4 4 4 0 0 0-1 3c0 3.5 3 5 6 5a3.5 3.5 0 0 0-1 3v4" />
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1" />
      </>
    ),
    moon: <path d="M20 15A9 9 0 0 1 9 4a9 9 0 1 0 11 11Z" />,
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),
    cloud: <path d="M7 18a5 5 0 1 1 0-10 6 6 0 0 1 11 1 4.5 4.5 0 0 1 0 9Z" />,
    share: <path d="M12 16V3m-4 4 4-4 4 4M6 11H4v10h16V11h-2" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.code}
    </svg>
  )
}
