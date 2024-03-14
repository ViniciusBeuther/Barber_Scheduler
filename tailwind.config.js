const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: {
          500: '#2D3142',
          300: '#4F5D75'
        },
        customGray: {
          500: '#BFC0C0'
        },
        customOrange: {
          500: '#EF8354'
        }
      }
    },
  },
  plugins: [],
  }

)

