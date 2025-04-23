/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "rgb(96 165 250 / 0.2)",
        background: "#000000",
        foreground: "#FFFFFF",
        muted: "#172554",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'star-movement-top': 'starMovementTop 6s linear infinite',
        'star-movement-bottom': 'starMovementBottom 6s linear infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        starMovementTop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(500%)' },
        },
        starMovementBottom: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-500%)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        glow: {
          '0%': { opacity: 0.8, transform: 'scale(0.98)' },
          '100%': { opacity: 1, transform: 'scale(1.02)' },
        },
      },
      boxShadow: {
        'inner-white': 'inset 0 2px 4px 0 rgba(96, 165, 250, 0.05)',
      },
    },
  },
  plugins: [],
};