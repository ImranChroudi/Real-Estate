/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        color_1 : "#F0EFFB",
        color_2 : "#909497",
        color_3 : "#6547D7",
        color_4 : "black",
        color_text : "#9da4b0"
      },
    fontSize: {
      xs_ftext: '0.875rem',   // Extra Small
      sm_ftext: '14px',  // Small
      base_ftext: '1rem',    // Default/Base
      lg_ftext: '47px',  // Large
      m_ftext: '2.475',   // medium
      m2_ftext: '1.75rem',   //medium 2
      // Add more custom font sizes as needed
    },
  },
},
  plugins: [],
}