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
  ProductCard,
  FeaturedProductCard,
  ProductImageWrapper,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductDescription,
  ProductTag,
  AddToCartButton,
  FadeInContainer,
  NewsletterSection,
  NewsletterContent,
  NewsletterTitle,
  NewsletterDescription
} from './HomeStyles';

// 产品类型定义
interface Product {
  id: number;
  numericId: number;
  name: string;
  image: string;
  price: string;
  featured?: boolean;
  tag?: string;
}

const Home: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

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

  const products: Product[] = [
    {
      id: 1,
      numericId: 1,
      name: '粉丝合集 BORK T782',
      image: '/images/products/1.png',
      price: '¥9,999',
      featured: true,
      tag: '新品'
    },
    {
      id: 2,
      numericId: 2,
      name: '台扇 BORK P513 gg',
      image: '/images/products/2.png',
      price: '14,000元'
    },
    {
      id: 3,
      numericId: 3,
      name: '空气净化加湿器 BORK A705',
      image: '/images/products/5.png',
      price: '14,000元',
      tag: '即将上市'
    },
    {
      id: 4,
      numericId: 4,
      name: '空气净化加湿器 BORK A802 RAIN',
      image: '/images/products/7.png',
      price: '36,720元'
    },
    {
      id: 5,
      numericId: 5,
      name: '加湿器 BORK H503',
      image: '/images/products/humidifier.png',
      price: '24,000元',
      tag: '折扣'
    },
    {
      id: 6,
      numericId: 6,
      name: '音箱机 BORK HF700',
      image: '/images/products/speaker.png',
      price: '36,720元'
    },
    {
      id: 7,
      numericId: 7,
      name: '自主空气清洁站 BORK V850',
      image: '/images/products/air-cleaner.png',
      price: '29,760元'
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
              height: index === 0 ? '795px' : '801px',
              minHeight: index === 0 ? '795px' : '801px'
            }}
          >
            <HeroContent>
              <HeroTitle>{hero.title}</HeroTitle>
              <HeroSubtitle>{hero.subtitle}</HeroSubtitle>
              {index < heroImages.length - 1 && (
                <ScrollIndicator 
                  onClick={() => {
                    const nextSection = document.getElementById(`hero-${index + 1}`);
                    if (nextSection) {
                      nextSection.scrollIntoView();
                    }
                  }}
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
              gridRow: product.featured ? 'span 2' : 'auto'
            }}
          >
            {product.featured ? (
              <FeaturedProductCard to={`/product/${product.numericId}`}>
                <ProductImageWrapper>
                  <ProductImage style={{backgroundImage: `url("${product.image}")`}} />
                </ProductImageWrapper>
                <AddToCartButton />
                {product.tag && <ProductTag>{product.tag}</ProductTag>}
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  {product.price && <ProductDescription>{product.price}</ProductDescription>}
                </ProductInfo>
              </FeaturedProductCard>
            ) : (
              <ProductCard to={`/product/${product.numericId}`}>
                <ProductImageWrapper>
                  <ProductImage style={{backgroundImage: `url("${product.image}")`}} />
                </ProductImageWrapper>
                <AddToCartButton />
                {product.tag && <ProductTag>{product.tag}</ProductTag>}
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  {product.price && <ProductDescription>{product.price}</ProductDescription>}
                </ProductInfo>
              </ProductCard>
            )}
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