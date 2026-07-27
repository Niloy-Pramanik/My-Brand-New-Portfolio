import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        sawad: {
          bg: '#0c1220',
          card: '#ffffff',
          accent: '#e8622c',
          'accent-hover': '#d4551f',
          text: '#ffffff',
          muted: 'rgba(255,255,255,0.50)',
          'muted-strong': 'rgba(255,255,255,0.70)',
          border: 'rgba(255,255,255,0.08)',
          surface: 'rgba(255,255,255,0.04)',
          'surface-hover': 'rgba(255,255,255,0.07)',
          input: 'rgba(255,255,255,0.06)',
          lime: '#c8ee44',
          coral: '#e8734a',
          'card-dark': '#111827',
        },
      },
      letterSpacing: {
        tightest: '-0.04em',
        widest: '0.28em',
      },
      maxWidth: {
        content: '1440px',
        sidebar: '380px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
