import { defineI18nLocale } from '#i18n'

export default defineI18nLocale((locale) => {
  //console.log("LANGUAGE: ", locale)

  return $fetch(`/api/locales/${locale}`);
})