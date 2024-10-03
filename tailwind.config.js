
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        prBlue: {
          100: "#0061B2",
          75: "#4089C5",
          50: "#80B0D9",
          25: "#BFD8EC"
        },
        prGreen: {
          100: "#00ACA5",
          75: "#40C1BC",
          50: "#80D6D2",
          25: "#BFEAE9"
        },
        prOrange: {
          100: "#FFAB00",
          75: "#FFC040",
          50: "#FFD580",
          25: "#FFEABF"
        },
        prRed: {
          100: "#FF5630",
          75: "#FF8064",
          50: "#FFAB98",
          25: "#FFD5CB"
        },
        prPurple: {
          100: "#6554C0",
          75: "#8C7FD0",
          50: "#B2AAE0",
          25: "#D9D4EF"
        },
        prDarkBlue: {
          100: "#162254",
          75: "#50597F",
          50: "#8B91AA",
          25: "#C5C8D4"
        },

      },
      width: {
        144: '36rem'
      }
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}