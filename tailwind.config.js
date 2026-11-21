/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      'dancing': ['Dancing Script', 'cursive'],
      'pacifico': ['Pacifico', 'cursive'],
      'lobster': ['Lobster', 'cursive'],
      'greatvibes': ['Great Vibes', 'cursive'],
      'satisfy': ['Satisfy', 'cursive'],
      'marck': ['Marck Script', 'cursive'],
      'alexbrush': ['Alex Brush', 'cursive'],
      'shadows': ['Shadows Into Light', 'cursive'],
      'cookie': ['Cookie', 'cursive'],
      'allura': ['Allura', 'cursive'],
    },
    
    extend: {
      colors: {
        primary: '#035E88',     // Deep Indigo
        secondary: '#513C8D',   // Royal Purple
        accent: '#896DB8',      // Soft Lavender
        muted: '#493686',       // Midnight Blue
        "primary-hover": "#7716e8",
        "brand-blue": "#4338CA",
      },
    },
  },
  plugins: [],
}