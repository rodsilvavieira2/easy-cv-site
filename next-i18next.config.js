module.exports = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['default', 'en', 'pt'],
    defaultLocale: 'default',
  },
  // localePath,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}