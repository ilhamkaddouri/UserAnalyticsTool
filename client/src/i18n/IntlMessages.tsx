import supportedLocales from './locales.json';

export default supportedLocales.reduce((bundle:any, langId) => {
  bundle[langId] = require(`./Common/${langId}.json`);
  return bundle;
}, {});