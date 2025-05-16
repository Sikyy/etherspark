import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  AboutLink
} from './ProductDetailStyles';

// 导入产品数据
import { productData, Product as ProductDataType, ProductImage } from '../Products/data';

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
        title: `特性 ${index + 1}`,
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
  
  return {
    id: product.numericId,
    name: product.name,
    subTitle: product.description,
    model: `BORK ${product.id}`,
    price: product.price,
    heroImage: product.image,
    features,
    specs,
    relatedProducts
  };
};

// 产品详情页组件
const ProductDetail: React.FC = () => {
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

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!product) {
    return (
      <ProductDetailContainer>
        <MainContent>
          <div style={{ padding: '40px' }}>产品未找到</div>
        </MainContent>
      </ProductDetailContainer>
    );
  }

  return (
    <ProductDetailContainer>
      <MainContent>
        <ProductSection>
          <ProductHero>
            <ProductHeroImage src={product.heroImage} alt={product.name} />
          </ProductHero>

          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            {product.subTitle && <ProductSubTitle>{product.subTitle}</ProductSubTitle>}
            <ProductModel>{product.model}</ProductModel>
            <ProductPrice>{product.price}</ProductPrice>
            <BuyButton>购买</BuyButton>
            <AboutLink>了解更多关于我们的产品</AboutLink>
          </ProductInfo>
        </ProductSection>

        {product.features.map((feature, index) => (
          <FeatureSection key={index}>
            <FeatureImage src={feature.image} alt={feature.title} />
            <FeatureContent>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureContent>
          </FeatureSection>
        ))}

        <SpecsSection>
          <SpecsTitle>特征</SpecsTitle>
          <SpecsGrid>
            {product.specs.map((spec, index) => (
              <SpecItem key={index}>
                <SpecName>{spec.name}</SpecName>
                <SpecValue>{spec.value}</SpecValue>
              </SpecItem>
            ))}
          </SpecsGrid>
        </SpecsSection>

        <RelatedProductsSection>
          <RelatedProductsTitle>相关产品</RelatedProductsTitle>
          <RelatedProductsGrid>
            {product.relatedProducts.map((relatedProduct) => (
              <RelatedProductCard key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                <RelatedProductImage style={{ backgroundImage: `url(${relatedProduct.image})` }} />
                <RelatedProductInfo>
                  <RelatedProductName>{relatedProduct.name}</RelatedProductName>
                  <RelatedProductPrice>{relatedProduct.price}</RelatedProductPrice>
                </RelatedProductInfo>
              </RelatedProductCard>
            ))}
          </RelatedProductsGrid>
        </RelatedProductsSection>
      </MainContent>
    </ProductDetailContainer>
  );
};

export default ProductDetail; 