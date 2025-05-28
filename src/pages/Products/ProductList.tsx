import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ProductListContainer,
  ProductListHeader,
  ProductListTitle,
  ProductGrid,
  EmptyState
} from './ProductListStyles';

import { Product, productData, categoryTitles } from './data';
import { 
  ProductCard, 
  ProductImageContainer,
  ProductImage, 
  ProductInfo, 
  ProductName,
  ProductPrice,
  AddToCartButton
} from '../../components/shared/ProductCardStyles';

// 引入翻译组件和钩子
import TranslatedTag from '../../components/shared/TranslatedTag';
import { 
  useProductNameTranslation, 
  useProductDescriptionTranslation 
} from '../../components/shared/withTranslation';

// 调试函数 - 检查所有可用的翻译资源
const debugTranslations = (i18n: any, productId: string) => {
  try {
    const productResources = i18n.getDataByLanguage(i18n.language)?.products?.products;
    console.log('当前语言:', i18n.language);
    console.log('产品ID:', productId);
    console.log('翻译资源结构:', productResources ? 'Available' : 'Not Available');
    if (productResources) {
      console.log('当前产品翻译:', productResources[productId]);
    }
    
    // 检查其他语言的翻译
    const allLangs = ['zh', 'en', 'ru'];
    allLangs.forEach(lang => {
      const langResources = i18n.getDataByLanguage(lang)?.products?.products;
      if (langResources && langResources[productId]) {
        console.log(`${lang}语言的产品翻译:`, langResources[productId]);
      }
    });
  } catch (error) {
    console.error('调试错误:', error);
  }
};

// 单个产品卡片组件，处理翻译
const TranslatedProductCard: React.FC<{product: Product}> = ({ product }) => {
  const { i18n } = useTranslation(['products']);
  // 直接使用t函数获取翻译，确保每次语言变化时都会更新
  const [translatedName, setTranslatedName] = useState("");
  
  // 监听语言变化，强制更新翻译
  useEffect(() => {
    try {
      // 使用useProductNameTranslation的内部逻辑直接获取翻译
      const { t } = i18n;
      
      // 通过t函数获取
      const translated = t(`products.${product.id}.name`, { 
        ns: 'products', 
        defaultValue: product.name 
      });
      
      // 记录当前语言和翻译结果
      console.log(`Language: ${i18n.language}, Product: ${product.id}, Original: ${product.name}, Translated: ${translated}`);
      
      // 只有在翻译结果与当前值不同时才更新状态，避免不必要的重渲染
      if (translated !== translatedName) {
        setTranslatedName(translated);
      }
    } catch (error) {
      console.error(`Translation error for ${product.id}:`, error);
      // 出错时使用原始名称
      setTranslatedName(product.name);
    }
  }, [product.id, product.name, i18n.language, i18n, translatedName]);
  
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = product.cardImage;
    img.onload = () => setImageLoaded(true);
  }, [product.cardImage]);

  return (
    <ProductCard 
      key={product.id} 
      to={`/product/${product.numericId}`}
      data-product-id={product.id} // 添加数据属性，便于调试
      data-translated-name={translatedName}
    >
      <AddToCartButton />
      <ProductImageContainer>
        <ProductImage 
          style={{ 
            backgroundImage: `url(${product.cardImage})`,
            opacity: imageLoaded ? 1 : 0.8,
            transition: 'opacity 0.3s ease, transform 0.3s ease'
          }} 
        />
      </ProductImageContainer>
      <ProductInfo>
        <ProductName>
          {translatedName || product.name}
        </ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        {product.tag && (
          <TranslatedTag tag={product.tag} />
        )}
      </ProductInfo>
    </ProductCard>
  );
};

const ProductList: React.FC = () => {
  const { t, i18n } = useTranslation(['common', 'products']);
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (category && productData[category]) {
      setProducts(productData[category]);
      // 使用翻译获取分类标题
      const translatedCategory = t(`categories.${category}`, { ns: 'products', defaultValue: categoryTitles[category] || category });
      setCategoryTitle(translatedCategory as string);
      
      // 预加载图片
      const imageUrls = productData[category].map(product => product.cardImage);
      preloadImages(imageUrls);
    } else {
      setProducts([]);
      setCategoryTitle('未找到分类');
    }
  }, [category, t]);

  // 监听语言变化，强制重新渲染
  useEffect(() => {
    console.log('Language changed in ProductList:', i18n.language);
    // 语言变化时重新获取数据
    if (category && productData[category]) {
      // 不需要重新设置数据，但需要让组件知道要重新渲染
      setProducts([...productData[category]]);
      // 更新分类标题的翻译
      const translatedCategory = t(`categories.${category}`, { ns: 'products', defaultValue: categoryTitles[category] || category });
      setCategoryTitle(translatedCategory as string);
    }
  }, [i18n.language, category, t]);

  // 图片预加载函数
  const preloadImages = (urls: string[]) => {
    urls.forEach(url => {
      if (!loadedImages.has(url)) {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(url));
        };
      }
    });
  };

  if (!products.length) {
    return (
      <ProductListContainer>
        <EmptyState>{t('products.category.notFound')}</EmptyState>
      </ProductListContainer>
    );
  }

  return (
    <ProductListContainer>
      <ProductListHeader>
        <ProductListTitle>{categoryTitle}</ProductListTitle>
      </ProductListHeader>
      
      <ProductGrid>
        {products.map((product) => (
          <TranslatedProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </ProductListContainer>
  );
};

export default ProductList; 