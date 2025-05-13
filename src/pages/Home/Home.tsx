import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeContainer,
  HeroBanner,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCarousel,
  ScrollIndicator,
  ProductsGrid,
  FadeInContainer,
  NewsletterSection,
  NewsletterContent,
  NewsletterTitle,
  NewsletterDescription
} from './HomeStyles';

// 引入Tab页面下的产品卡样式
import { 
  ProductCard, 
  ProductImageContainer,
  ProductImage, 
  ProductInfo, 
  ProductName,
  ProductPrice,
  ProductStatus,
  ColorOptions,
  ColorOption,
  AddToCartButton
} from '../../components/shared/ProductCardStyles';

// 引入产品数据
import { productData, Product } from '../../pages/Products/productData';

const Home: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  // 使用productData中的home分类产品数据
  const products = productData.home;

  const heroImages = [
    {
      url: '/images/products/1.png',
      title: '创新科技的未来',
      subtitle: 'EtherSpark - 智能生活的全新定义'
    },
    {
      url: '/images/products/2.png',
      title: '连接智能家居',
      subtitle: '打造无缝连接的智慧生活体验'
    },
    {
      url: '/images/products/3.png',
      title: '科技改变生活',
      subtitle: '让科技成为生活的得力助手'
    }
  ];

  useEffect(() => {
    // 添加平滑滚动
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // 页面加载动画
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
      clearTimeout(timer);
    };
  }, []);

  // 产品卡片渐入动画的延迟
  const getAnimationDelay = (index: number) => `${0.1 + index * 0.1}s`;

  // 处理滚动到下一张图片的函数
  const scrollToNextSection = (nextIndex: number) => {
    const nextSection = document.getElementById(`hero-${nextIndex}`);
    if (nextSection) {
      // 直接使用scrollIntoView方法，确保完全对齐
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <HomeContainer>
      <HeroCarousel>
        {heroImages.map((hero, index) => (
          <HeroBanner 
            key={index}
            id={`hero-${index}`}
            style={{
              backgroundImage: `url("${hero.url}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '100vh', // 使用视口高度确保一致性
              minHeight: '800px'
            }}
          >
            <HeroContent>
              <HeroTitle>{hero.title}</HeroTitle>
              <HeroSubtitle>{hero.subtitle}</HeroSubtitle>
              {index < heroImages.length - 1 && (
                <ScrollIndicator 
                  onClick={() => scrollToNextSection(index + 1)}
                />
              )}
            </HeroContent>
          </HeroBanner>
        ))}
      </HeroCarousel>

      <ProductsGrid>
        {products.map((product, index) => (
          <FadeInContainer 
            key={product.id} 
            style={{ 
              animationDelay: getAnimationDelay(index),
              gridColumn: product.featured ? 'span 2' : 'auto',
              gridRow: 'auto'
            }}
          >
            <ProductCard to={`/product/${product.numericId}`} style={{ height: '100%' }}>
              <AddToCartButton />
              <ProductImageContainer style={{ 
                height: '400px',
                borderRadius: '12px'
              }}>
                <ProductImage style={{ backgroundImage: `url("${product.image}")` }} />
                {product.colorOptions && product.colorOptions.length > 0 && (
                  <ColorOptions>
                    {product.colorOptions.map((colorOption, index) => (
                      <ColorOption 
                        key={index} 
                        color={colorOption.color} 
                        active={index === 0}
                        title={colorOption.name}
                      />
                    ))}
                  </ColorOptions>
                )}
              </ProductImageContainer>
              <ProductInfo>
                <ProductName style={{ 
                  fontSize: product.featured ? '20px' : '16px',
                  fontWeight: product.featured ? '500' : '400'
                }}>
                  {product.name}
                </ProductName>
                <ProductPrice style={{
                  fontSize: product.featured ? '16px' : '14px'
                }}>
                  {product.price}
                </ProductPrice>
                {product.tag && (
                  <ProductStatus style={{
                    fontSize: product.featured ? '14px' : '12px'
                  }}>
                    {product.tag}
                  </ProductStatus>
                )}
              </ProductInfo>
            </ProductCard>
          </FadeInContainer>
        ))}
      </ProductsGrid>

      <NewsletterSection>
        <NewsletterContent>
          <NewsletterTitle>订阅我们的新闻通讯</NewsletterTitle>
          <NewsletterDescription>
            获取最新产品信息、技术资讯和独家优惠
          </NewsletterDescription>
          <Link to="/products" style={{ 
            display: 'inline-block',
            marginTop: '20px',
            padding: '12px 30px',
            backgroundColor: '#ff6b00',
            color: '#fff',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '16px',
            transition: 'background-color 0.3s ease'
          }}>
            查看所有产品详情页
          </Link>
        </NewsletterContent>
      </NewsletterSection>
    </HomeContainer>
  );
};

export default Home; 