/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        // Legacy – keeps existing components working
        poppins: ['Poppins', 'sans-serif'],
      },

      // Map Tailwind colour classes → CSS variables so the palette
      // can be changed from one place (:root in index.css)
      colors: {
        canvas: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        ink: {
          DEFAULT: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          muted: 'var(--color-accent-muted)',
          surface: 'var(--color-accent-surface)',
        },
        line: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
        },
        // Legacy colours – keep so old purple/pink classes still compile
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },

      // Editorial typography scale (clamp-based, responsive)
      fontSize: {
        // Display — DM Serif Display
        'display-2xl': ['clamp(4.5rem,10vw,9rem)', { lineHeight: '0.92', letterSpacing: '-0.035em' }],
        'display-xl': ['clamp(3.5rem,7.5vw,7rem)', { lineHeight: '0.95', letterSpacing: '-0.030em' }],
        'display-lg': ['clamp(2.75rem,5.5vw,5rem)', { lineHeight: '1.00', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(2rem,3.5vw,3.25rem)', { lineHeight: '1.10', letterSpacing: '-0.020em' }],
        'display-sm': ['clamp(1.5rem,2.5vw,2rem)', { lineHeight: '1.20', letterSpacing: '-0.015em' }],
        // Body
        'body-xl': ['clamp(1.0625rem,1.5vw,1.1875rem)', { lineHeight: '1.75' }],
        'body-md': ['1rem', { lineHeight: '1.70' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.65' }],
        // Utility
        'caption': ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'overline': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.16em' }],
      },

      maxWidth: {
        site: '1320px',
        content: '720px',
        prose: '640px',
      },

      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },

      animation: {
        // Legacy – keep for existing components
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'typing': 'typing 3s steps(20) infinite, blink 0.75s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        // New editorial
        'reveal': 'revealUp 0.9s cubic-bezier(0.16,1,0.3,1) both',
      },

      keyframes: {
        // Legacy
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        typing: { '0%': { width: '0%' }, '50%': { width: '100%' }, '100%': { width: '0%' } },
        blink: { '0%,50%': { borderColor: 'transparent' }, '51%,100%': { borderColor: 'currentColor' } },
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        // New
        revealUp: { '0%': { opacity: '0', transform: 'translateY(28px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
