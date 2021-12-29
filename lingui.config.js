module.exports = {
  locales: ["en", "fr", "zh", "ja", "pseudo"],
  pseudoLocale: "pseudo",
  sourceLocale: "en",
  fallbackLocales: {
    default: "en"
  },
  catalogs: [
    {
      path: "src/translations/locales/{locale}/messages",
      // include: ["src/pages", "src/components"],
      include: ["src/pages", "src/components", "<rootDir>/"],
      exclude: ["**/node_modules/**"]
    }
  ],
  format: "po"
};

// {
//   "locales": ["en", "cs"],
//   "sourceLocale": "en",
//   "catalogs": [
//     {
//       "path": "<rootDir>/locale/{locale}/messages",
//       "include": ["<rootDir>/"],
//       "exclude": ["**/node_modules/**"]
//     }
//   ]
// }
