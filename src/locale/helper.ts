export const setHtmlLang = (lang: string) => {
  document.querySelector('html')?.setAttribute('lang', lang);
};
