/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        color_1 : "white",
        color_2 : "#909497",
        color_3 : "#6547D7",
        color_4 : "black"
      },
    fontSize: {
      xs_ftext: '0.875rem',   // Extra Small
      sm_ftext: '1.2375rem',  // Small
      base_ftext: '1rem',    // Default/Base
      lg_ftext: '3.5rem',  // Large
      m_ftext: '2.475',   // medium
      m2_ftext: '1.75rem',   //medium 2
      // Add more custom font sizes as needed
    },
  },
},
  plugins: [],
}