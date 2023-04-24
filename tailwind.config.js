/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        openAI_Primary: "#202123",
        openAI_Secondary: "#343541",
        openAI_Hover: "#2A2B32",
      },
    },
  },
  plugins: [],
};
