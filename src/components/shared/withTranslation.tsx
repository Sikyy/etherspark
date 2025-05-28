import React from 'react';
import { useTranslation } from 'react-i18next';

// 用于翻译产品名称
export const useProductNameTranslation = (productId: string, defaultName: string) => {
  const { t } = useTranslation(['products']);
  return t(`products.${productId}.name`, { ns: 'products', defaultValue: defaultName });
};

// 用于翻译产品描述
export const useProductDescriptionTranslation = (productId: string, defaultDescription: string) => {
  const { t } = useTranslation(['products']);
  return t(`products.${productId}.description`, { ns: 'products', defaultValue: defaultDescription });
};

// 用于翻译产品标签
export const useProductTagTranslation = (tag: string) => {
  const { t } = useTranslation(['products']);
  return t(`tags.${tag}`, { ns: 'products', defaultValue: tag });
};

// 用于翻译产品特性
export const useProductFeaturesTranslation = (productId: string, defaultFeatures: string[]) => {
  const { t } = useTranslation(['products']);
  try {
    const features = t(`products.${productId}.features`, { ns: 'products', returnObjects: true });
    return Array.isArray(features) ? features : defaultFeatures;
  } catch (error) {
    return defaultFeatures;
  }
};

// 用于翻译规格参数名称
export const useSpecificationNameTranslation = (name: string) => {
  const { t } = useTranslation(['products']);
  return t(`specifications.${name}`, { ns: 'products', defaultValue: name });
};

// 用于安全地获取翻译的工具函数（不是hooks）
export const getProductTranslation = (t: any, key: string, defaultValue: string) => {
  return t(key, { ns: 'products', defaultValue: defaultValue });
};

// 一个包装组件用于产品卡片标签
interface TranslatedTagProps {
  tag: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TranslatedTag: React.FC<TranslatedTagProps> = ({ tag, className, style }) => {
  const { t } = useTranslation(['products']);
  const translatedTag = t(`tags.${tag}`, { ns: 'products', defaultValue: tag });
  
  return (
    <div className={className} style={style}>
      {translatedTag}
    </div>
  );
};

export default {
  useProductNameTranslation,
  useProductDescriptionTranslation,
  useProductTagTranslation,
  useProductFeaturesTranslation,
  useSpecificationNameTranslation,
  getProductTranslation,
  TranslatedTag
}; 