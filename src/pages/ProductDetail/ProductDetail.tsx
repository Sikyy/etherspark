import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ProductDetailContainer,
  ProductName,
  ProductModel,
  ProductSubTitle,
  ProductPrice,
  ProductInfo,
  BuyButton,
  MainContent,
  ProductSection,
  ProductHero,
  ProductHeroImage,
  FeatureSection,
  FeatureImage,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
  SpecsSection,
  SpecsTitle,
  SpecsGrid,
  SpecItem,
  SpecName,
  SpecValue,
  RelatedProductsSection,
  RelatedProductsTitle,
  RelatedProductsGrid,
  RelatedProductCard,
  RelatedProductImage,
  RelatedProductInfo,
  RelatedProductName,
  RelatedProductPrice,
} from './ProductDetailStyles';

// 导入产品数据
import { productData, Product as ProductDataType} from '../Products/data';

// 导入翻译函数
import { 
  useProductNameTranslation, 
  useProductDescriptionTranslation,
  useProductFeaturesTranslation,
  useSpecificationNameTranslation
} from '../../components/shared/withTranslation';

// 产品类型定义
interface ProductFeature {
  title: string;
  description: string;
  image: string;
}

interface ProductSpec {
  name: string;
  value: string | number;
}

interface RelatedProduct {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface Product {
  id: number;
  originalId: string;
  name: string;
  subTitle?: string;
  model: string;
  price: string;
  heroImage: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  relatedProducts: RelatedProduct[];
}

// 将产品数据从productData.ts转换为当前组件需要的结构
const convertProductData = (productId: number): Product | null => {
  // 在所有分类中查找匹配numericId的产品
  let foundProduct: ProductDataType | null = null;
  let foundCategory = '';
  
  for (const category in productData) {
    const product = productData[category].find((p: ProductDataType) => p.numericId === productId);
    if (product) {
      foundProduct = product;
      foundCategory = category;
      break;
    }
  }
  
  if (!foundProduct) return null;
  
  // 使用非空断言，因为我们已经检查了foundProduct不为null
  const product = foundProduct as ProductDataType;
  
  // 构造特性数据
  const features: ProductFeature[] = product.features 
    ? product.features.map((feature: string, index: number) => ({
      title: 'features.title',
        description: feature,
        image: product.gallery && product.gallery.length > index 
          ? product.gallery[index].src 
          : '/images/products/feature-placeholder.png'
      }))
    : [];
  
  // 构造规格数据
  const specs: ProductSpec[] = product.specifications
    ? Object.entries(product.specifications).map(([name, value]) => ({
        name,
        value: value as string
      }))
    : [];
  
  // 构造相关产品
  const relatedProducts: RelatedProduct[] = [];
  if (foundCategory) {
    const categoryProducts = productData[foundCategory]
      .filter((p: ProductDataType) => p.numericId !== productId)
      .slice(0, 3);
      
    for (const relatedProduct of categoryProducts) {
      relatedProducts.push({
        id: relatedProduct.numericId,
        name: relatedProduct.name,
        image: relatedProduct.image,
        price: relatedProduct.price
      });
    }
  }
  
  // 记录调试信息
  console.log('Converting product data:', product.id, product.name);
  
  // 返回产品详情
  return {
    id: product.numericId,
    originalId: product.id,
    name: product.name,
    subTitle: product.description,
    model: `${product.id}`, // 简化模型名称，让EtherSpark文本在显示时翻译
    price: product.price,
    heroImage: product.image,
    features,
    specs,
    relatedProducts
  };
};

// 产品详情页组件
const ProductDetail: React.FC = () => {
  const { t, i18n } = useTranslation(['common', 'products']);
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // 获取产品数据
    if (productId) {
      const numericId = parseInt(productId);
      const convertedProduct = convertProductData(numericId);
      setProduct(convertedProduct);
    }
  }, [productId]);

  // 监听语言变化，强制重新渲染
  useEffect(() => {
    console.log('Language changed in ProductDetail:', i18n.language);
    // 语言变化时重新获取数据
    if (productId) {
      const numericId = parseInt(productId);
      const convertedProduct = convertProductData(numericId);
      setProduct(convertedProduct);
    }
  }, [i18n.language, productId]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!product) {
    return (
      <ProductDetailContainer>
        <MainContent>
          <div style={{ padding: '40px' }}>{t('notFound', { ns: 'products' })}</div>
        </MainContent>
      </ProductDetailContainer>
    );
  }

  // 预先获取翻译数据
  const productName = product.originalId 
    ? t(`products.${product.originalId}.name`, { ns: 'products', defaultValue: product.name })
    : product.name;
    
  const productDescription = product.originalId && product.subTitle 
    ? t(`products.${product.originalId}.description`, { ns: 'products', defaultValue: product.subTitle })
    : product.subTitle || '';

  // 获取翻译后的特性列表
  let translatedFeatures: string[] = [];
  if (product.originalId) {
    try {
      const features = t(`products.${product.originalId}.features`, { ns: 'products', returnObjects: true });
      translatedFeatures = Array.isArray(features) ? features : product.features.map(f => {
        // 尝试使用特性翻译
        return t(`features.translations.${f.description}`, { ns: 'products', defaultValue: f.description });
      });
    } catch (error) {
      translatedFeatures = product.features.map(f => 
        t(`features.translations.${f.description}`, { ns: 'products', defaultValue: f.description })
      );
    }
  } else {
    translatedFeatures = product.features.map(f => 
      t(`features.translations.${f.description}`, { ns: 'products', defaultValue: f.description })
    );
  }

  // 预先翻译所有规格名称和值
  const translatedSpecs = product.specs.map(spec => {
    const translatedName = t(`specifications.${spec.name}`, { ns: 'products', defaultValue: spec.name });
    // 尝试翻译规格值
    const translatedValue = t(`specifications.values.${spec.value}`, { ns: 'products', defaultValue: String(spec.value) });
    
    return {
      name: translatedName,
      value: translatedValue
    };
  });

  // 预先翻译相关产品名称
  const relatedProductsData = product.relatedProducts.map(relatedProduct => {
    const originalProduct = Object.values(productData)
      .flat()
      .find((p: ProductDataType) => p.numericId === relatedProduct.id);
    const originalId = originalProduct ? originalProduct.id : '';
    
    const translatedName = originalId 
      ? t(`products.${originalId}.name`, { ns: 'products', defaultValue: relatedProduct.name })
      : relatedProduct.name;
      
    return {
      ...relatedProduct,
      translatedName
    };
  });

  // 添加调试日志
  console.log('Current language:', i18n.language);
  console.log('Product ID:', product.originalId);
  console.log('Translated Name:', productName);
  console.log('Translated Description:', productDescription);
  console.log('Translated Features:', translatedFeatures);
  console.log('Translated Specs:', translatedSpecs);

  return (
    <ProductDetailContainer>
      <MainContent>
        <ProductSection>
          <ProductHero>
            <ProductHeroImage src={product.heroImage} alt={productName} />
          </ProductHero>

          <ProductInfo>
            <ProductName>
              {productName}
            </ProductName>
            {product.subTitle && (
              <ProductSubTitle>
                {productDescription}
              </ProductSubTitle>
            )}
            <ProductModel>{t('common:brandName')} {product.model}</ProductModel>
            <ProductPrice data-price-label={`${t('products.price', { ns: 'common' })}: `}>
              {product.price}
            </ProductPrice>
            <BuyButton>{t('products.buy', { ns: 'common' })}</BuyButton>
          </ProductInfo>
        </ProductSection>

        {product.features.map((feature, index) => (
          <FeatureSection key={index}>
            <FeatureImage src={feature.image} alt={feature.title} />
            <FeatureContent>
              <FeatureTitle>{t('features.title', { ns: 'products' })}</FeatureTitle>
              <FeatureDescription>
                {translatedFeatures[index] || feature.description}
              </FeatureDescription>
            </FeatureContent>
          </FeatureSection>
        ))}

        <SpecsSection>
          <SpecsTitle>{t('specifications.title', { ns: 'products' })}</SpecsTitle>
          <SpecsGrid>
            {translatedSpecs.map((spec, index) => (
              <SpecItem key={index}>
                <SpecName>{spec.name}</SpecName>
                <SpecValue>{spec.value}</SpecValue>
              </SpecItem>
            ))}
          </SpecsGrid>
        </SpecsSection>

        {relatedProductsData.length > 0 && (
          <RelatedProductsSection>
            <RelatedProductsTitle>{t('relatedProducts', { ns: 'products' })}</RelatedProductsTitle>
            <RelatedProductsGrid>
              {relatedProductsData.map((relatedProduct) => (
                <RelatedProductCard key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <RelatedProductImage style={{ backgroundImage: `url(${relatedProduct.image})` }} />
                  <RelatedProductInfo>
                    <RelatedProductName>
                      {relatedProduct.translatedName}
                    </RelatedProductName>
                    <RelatedProductPrice>{relatedProduct.price}</RelatedProductPrice>
                  </RelatedProductInfo>
                </RelatedProductCard>
              ))}
            </RelatedProductsGrid>
          </RelatedProductsSection>
        )}
      </MainContent>
    </ProductDetailContainer>
  );
};

export default ProductDetail; 