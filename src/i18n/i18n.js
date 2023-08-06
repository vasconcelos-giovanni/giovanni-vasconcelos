import { createI18n } from 'vue-i18n';
import en from './locale/en.json';
import ptBr from './locale/pt_BR.json';

const languages = { en, ptBr };

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: languages,
});

export { i18n };
