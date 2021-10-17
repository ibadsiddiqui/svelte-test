const production = !process.env.ROLLUP_WATCH;
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [

  ],
  darkMode: false,
  purge: {
    content: [
      "./src/**/*.svelte",

    ],
    enabled: production // disable purge in dev
  },
};