import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        limelight: ['limelight', 'sans-serif'],
      },
      backgroundImage: {
        'image': "url('/bg.svg')",
      },
    },
  },
  plugins: [],
}
export default config
