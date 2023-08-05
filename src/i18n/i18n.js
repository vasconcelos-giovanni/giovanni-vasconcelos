import { createI18n } from 'vue-i18n';
import en from './locale/en.json';

const languages = { en };

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: languages,
});

export { i18n };
