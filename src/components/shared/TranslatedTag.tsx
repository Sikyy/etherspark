import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProductStatus } from './ProductCardStyles';

interface TranslatedTagProps {
  tag: string;
  fontSize?: string;
}

const TranslatedTag: React.FC<TranslatedTagProps> = ({ tag, fontSize }) => {
  const { t } = useTranslation(['products']);
  const translatedTag = t(`tags.${tag}`, { ns: 'products', defaultValue: tag });

  return (
    <ProductStatus style={{ fontSize: fontSize || '12px' }}>
      {translatedTag}
    </ProductStatus>
  );
};

export default TranslatedTag; 