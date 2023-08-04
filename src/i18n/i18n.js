import { createI18n } from 'vue-i18n';
import { en } from './locale';

const languages = { en };
const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: languages,
  interpolate: /\{\{(.+?)\}\}/g,
});

export { i18n };
