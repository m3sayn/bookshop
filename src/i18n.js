import { createI18n } from 'vue-i18n'
import en from "./locales/en";
import ru from "./locales/ru";

function loadLocaleMessages() {
  const locales = [{ en: en }, { ru: ru }];
  const messages = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  });
  return messages
}

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: process.env.VUE_APP_I18N_LOCALE || 'ru',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'ru',
  messages: loadLocaleMessages()
})
