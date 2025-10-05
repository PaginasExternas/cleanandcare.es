import esTranslations from './locales/es.json';
import enTranslations from './locales/en.json';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: esTranslations,
  en: enTranslations,
} as const;

export function getLangFromUrl(url: URL) {
  let pathname = url.pathname;
  
  // Obtener la base URL dinámicamente
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Debug logs
  console.log('🔍 Debug getLangFromUrl:');
  console.log('  Original pathname:', pathname);
  console.log('  BASE_URL:', baseUrl);
  
  // Remover la base URL si está presente (para GitHub Pages)
  if (baseUrl !== '/' && pathname.startsWith(baseUrl)) {
    pathname = pathname.substring(baseUrl.length);
    console.log('  Pathname after removing BASE_URL:', pathname);
  }
  
  // Asegurar que pathname empiece con /
  if (!pathname.startsWith('/')) {
    pathname = '/' + pathname;
  }
  
  // Ahora extraer el idioma de la ruta limpia
  const segments = pathname.split('/').filter(segment => segment !== '');
  const lang = segments[0];
  
  console.log('  Segments:', segments);
  console.log('  Detected lang:', lang);
  console.log('  Is lang in ui?', lang && lang in ui);
  
  // Verificar si el primer segmento es un idioma válido
  if (lang && lang in ui) {
    console.log('  ✅ Returning detected lang:', lang);
    return lang as keyof typeof ui;
  }
  
  console.log('  ⚠️ Fallback to default lang:', defaultLang);
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = ui[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to default language if key not found
        value = ui[defaultLang];
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            return key; // Return key if not found in any language
          }
        }
        break;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}