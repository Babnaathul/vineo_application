import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   // Add a custom class for your wine bottle background
      //   'wine-bottle': 'url(\'/assets/glass-bottle.png\')',
      // },
      // spacing: {
      //   // Add custom spacing values if needed
      //   '5%': '5%',
      //   '10%': '10%',
      // },
    },
  },
  plugins: [],
} satisfies Config;
