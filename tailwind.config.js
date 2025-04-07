/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "treibgut": {
          "main": "#D1F1FD",      // Main background color (Light Blue)
          "accent": "#00A6E0",     // Primary accent color (Vibrant Blue)
          "light": "#E8FDFF",      // Secondary background (Very Light Blue)
          "neutral": "#E6F4F1",    // Tertiary/neutral color (Soft Blue-Gray)
          "text": "#333333",       // Dark text color
        },
        "sea-blue": "#6D5F5B",  // Replacing sea-blue with brown for consistency
        "sea-blue-light": "#8C7B76", 
        "sea-blue-dark": "#473B37",
        "coastal-grey": {
          100: "#F9F6F0",
          200: "#D1F1FD",  // Updated to light blue
          300: "#E6DFD3", 
          400: "#D7CFC3",
          500: "#B5A99A",
          600: "#8C7B76",
          700: "#6D5F5B",
          800: "#473B37",
          900: "#342C29",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
}; 