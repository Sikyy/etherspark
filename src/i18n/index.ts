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
import productsEN from './locales/en/products.json';
import productsZH from './locales/zh/products.json';
import productsRU from './locales/ru/products.json';

// 静态资源
const resources = {
  en: {
    common: translationEN,
    header: headerEN,
    footer: footerEN,
    products: productsEN
  },
  zh: {
    common: translationZH,
    header: headerZH,
    footer: footerZH,
    products: productsZH
  },
  ru: {
    common: translationRU,
    header: headerRU,
    footer: footerRU,
    products: productsRU
  }
};

// 获取本地存储的语言或浏览器默认语言
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('i18nextLng');
  if (savedLanguage && ['zh', 'en', 'ru'].includes(savedLanguage)) {
    return savedLanguage;
  }
  // 检测浏览器语言
  const browserLang = navigator.language.split('-')[0];
  return ['zh', 'en', 'ru'].includes(browserLang) ? browserLang : 'zh';
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
    lng: getInitialLanguage(),
    fallbackLng: 'zh',
    // 支持的语言
    supportedLngs: ['zh', 'en', 'ru'],
    debug: process.env.NODE_ENV === 'development',
    // 本地化命名空间
    ns: ['common', 'header', 'footer', 'products'],
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

// 监听语言变化，确保所有组件重新渲染
i18n.on('languageChanged', (lng) => {
  console.log('Language changed to:', lng);
  document.documentElement.setAttribute('lang', lng);
  localStorage.setItem('i18nextLng', lng);
});

console.log('i18n initialized with language:', i18n.language);

export default i18n; 