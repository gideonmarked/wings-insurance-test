module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: [
    {
      pattern: /(bg|text)-(red|green|yellow|blue|gray)-\d{3}/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
