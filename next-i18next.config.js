const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
