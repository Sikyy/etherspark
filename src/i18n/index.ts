import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入翻译资源
import translationEN from './locales/en/common.json';
import translationZH from './locales/zh/common.json';
import translationRU from './locales/ru/common.json';
import headerEN from './locales/en/header.json';
import headerZH from './locales/zh/header.json';
import headerRU from './locales/ru/header.json';
import footerEN from './locales/en/footer.json';
import footerZH from './locales/zh/footer.json';
import footerRU from './locales/ru/footer.json';

// 静态资源
const resources = {
  en: {
    common: translationEN,
    header: headerEN,
    footer: footerEN
  },
  zh: {
    common: translationZH,
    header: headerZH,
    footer: footerZH
  },
  ru: {
    common: translationRU,
    header: headerRU,
    footer: footerRU
  }
};

i18n
  // 将i18n实例传递给react-i18next
  .use(initReactI18next)
  // 检测用户语言
  .use(LanguageDetector)
  // 初始化i18next
  .init({
    resources,
    // 默认语言
    fallbackLng: 'zh',
    // 支持的语言
    supportedLngs: ['zh', 'ru', 'en'],
    debug: process.env.NODE_ENV === 'development',
    // 本地化命名空间
    ns: ['common', 'header', 'footer'],
    defaultNS: 'common',
    // 检测语言的选项
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // 不转义（React已经处理）
    },
    react: {
      useSuspense: false, // 禁用Suspense，因为我们不是使用后端加载资源
    },
  });

console.log('i18n initialized with languages:', i18n.languages);

export default i18n; 