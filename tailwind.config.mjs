import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { height: "0vh" },
          "100%": { height: "100vh" },
        },
      },
      animation: {
        slideDown: "slideDown 1s ease-in forwards",
      },
    },
  },
  plugins: [animations],
};
