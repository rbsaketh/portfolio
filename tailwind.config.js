/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // Disable dark mode class
  theme: {
    extend: {
      fontFamily: {
        signature: ['agustina', 'serif'],
        sans: ['Georgia', 'serif'],
        other: ['Inter', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      screens: {
        xs: '375px',
      },
      colors: {
        bg: '#18191a', // Dark gray background
        'bg-secondary': '#212529', // Slightly lighter dark gray for secondary background
        accent: '#71797E', // Light gray for accents
        'accent-light': 'rgba(177, 24, 126, 0.1)', // Light gray with opacity
        text: '#FFFF', // White text
        'dark-1': '#a12323', // Light gray for dark-1
        'dark-2': '#818589', // Slightly darker gray for dark-2
        'dark-3': '#D3D3D3', // Darker gray for dark-3
      },
      transitionTimingFunction: {
        'in-scroll': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      gridTemplateColumns: {
        'auto-300': 'repeat(auto-fill, minmax(300px, 1fr))',
        'auto-250': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
      backgroundImage: {
        torch:
          'radial-gradient(525px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)',
      },
    },
  },
  plugins: [],
};
