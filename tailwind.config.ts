import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      "primary": "var(--primary)",
      "bg-start": "var(--bg-start)",
      "bg-end": "var(--bg-end)",
      "primary-contrast": "var(--primary-contrast)",
      "secondary": "var(--secondary)",
      "secondary-contrast": "var(--secondary-contrast)",
      "text": "var(--text)",
      "icon-contrast": "var(--icon-contrast)",
      "hover-background": "var(--hover-background)",
      "active": "var(--active)",
      "soft-contrast": "var(--soft-contrast)",
      "inactive": "var(--inactive)",
      "text-contrast": "var(--text-contrast)",
      "next-icon": "var(--next-icon)",
      "react-icon": "var(--react-icon)",
      "expo-icon": "var(--expo-icon)",
      "container-start": "var(--container-start)",
      "container-end": "var(--container-end)",
      
      "dark-primary": "var(--dark-primary)",
      "dark-bg-start": "var(--dark-bg-start)",
      "dark-bg-end": "var(--dark-bg-end)",
      "dark-primary-contrast": "var(--dark-primary-contrast)",
      "dark-secondary": "var(--dark-secondary)",
      "dark-secondary-contrast": "var(--dark-secondary-contrast)",
      "dark-text": "var(--dark-text)",
      "dark-icon-contrast": "var(--dark-icon-contrast)",
      "dark-hover-background": "var(--dark-hover-background)",
      "dark-active": "var(--dark-active)",
      "dark-soft-contrast": "var(--dark-soft-contrast)",
      "dark-inactive": "var(--dark-inactive)",
      "dark-text-contrast": "var(--dark-text-contrast)",
      "dark-next-icon": "var(--dark-next-icon)",
      "dark-react-icon": "var(--dark-react-icon)",
      "dark-expo-icon": "var(--dark-expo-icon)",
      "dark-container-start": "var(--dark-container-start)",
      "dark-container-end": "var(--dark-container-end)",
     }
    },
  },
  plugins: [],
}
export default config
