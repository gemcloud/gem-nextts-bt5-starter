/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  i18n: {
    // These are all the locales you want to support in your application
    locales: ["en", "fr", "zh", "ja", "pseudo"],
    defaultLocale: "en"
  }
};
