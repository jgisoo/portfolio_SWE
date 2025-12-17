/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Chakra Petch', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        factory: {
          dark: "#0a0a0f",
          panel: "#13131f",
          cyan: "#00f0ff",
          yellow: "#facc15",
          danger: "#ef4444"
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flow': 'flow 1s linear infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', textShadow: '0 0 10px rgba(0, 240, 255, 0.5)' },
          '50%': { opacity: '0.8', textShadow: '0 0 20px rgba(0, 240, 255, 0.8)' },
        },
        flow: {
          '0%': { strokeDashoffset: '20' },
          '100%': { strokeDashoffset: '0' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
