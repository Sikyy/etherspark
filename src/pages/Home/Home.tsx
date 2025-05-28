import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  ColorOptions,
  ColorOption,
  AddToCartButton
} from '../../components/shared/ProductCardStyles';

// 引入TranslatedTag组件
import TranslatedTag from '../../components/shared/TranslatedTag';

// 引入产品数据
import { productData, Product } from '../../pages/Products/data';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation(['common', 'products']);
  const [loaded, setLoaded] = useState(false);
  // 使用productData中的home分类产品数据
  const products = productData.home;

  // 根据当前语言获取合适的英雄图片数据
  const getHeroImages = () => {
    return [
      {
        url: '/images/products/1.png',
        title: t('home.hero1.title', '创新科技的未来'),
        subtitle: t('home.hero1.subtitle', 'EtherSpark - 智能生活的全新定义')
      },
      {
        url: '/images/products/2.png',
        title: t('home.hero2.title', '连接智能家居'),
        subtitle: t('home.hero2.subtitle', '打造无缝连接的智慧生活体验')
      },
      {
        url: '/images/products/3.png',
        title: t('home.hero3.title', '科技改变生活'),
        subtitle: t('home.hero3.subtitle', '让科技成为生活的得力助手')
      }
    ];
  };

  const heroImages = getHeroImages();

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

  // 当语言改变时，确保英雄图片数据更新
  useEffect(() => {
    // 这里不需要额外操作，React 会在语言改变时自动重新渲染组件
    console.log('Language changed in Home component:', i18n.language);
    // 强制重新渲染产品列表
    const newProducts = [...products];
    // 刷新组件
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, [i18n.language]);

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
        {products.map((product: Product, index: number) => (
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
                    {product.colorOptions.map((colorOption: { color: string, name: string }, index: number) => (
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
                  {t(`products.products.${product.id}.name`, { ns: 'products', defaultValue: product.name })}
                </ProductName>
                <ProductPrice style={{
                  fontSize: product.featured ? '16px' : '14px'
                }}>
                  {product.price}
                </ProductPrice>
                {product.tag && (
                  <TranslatedTag 
                    tag={product.tag} 
                    fontSize={product.featured ? '14px' : '12px'} 
                  />
                )}
              </ProductInfo>
            </ProductCard>
          </FadeInContainer>
        ))}
      </ProductsGrid>

      <NewsletterSection>
        <NewsletterContent>
          <NewsletterTitle>{t('home.newsletter.title', '订阅我们的新闻通讯')}</NewsletterTitle>
          <NewsletterDescription>
            {t('home.newsletter.description', '获取最新产品信息、技术资讯和独家优惠')}
          </NewsletterDescription>
          {/* <Link to="/products" style={{ 
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
          </Link> */}
        </NewsletterContent>
      </NewsletterSection>
    </HomeContainer>
  );
};

export default Home; 