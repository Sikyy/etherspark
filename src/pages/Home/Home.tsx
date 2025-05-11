import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeContainer,
  HeroBanner,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  CategoriesSection,
  CategoryGrid,
  CategoryCard,
  CategoryTitle,
  FeaturedSection,
  FeaturedTitle,
  FeaturedGrid,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductDescription,
  PromotionSection,
  PromotionContent,
  PromotionTitle,
  PromotionDescription,
  PromotionButton,
  CollectionSection,
  CollectionTitle,
  CollectionGrid,
  CollectionCard,
  CollectionCardContent,
  CollectionCardTitle,
  NewsletterSection,
  NewsletterContent,
  NewsletterTitle,
  NewsletterDescription
} from './HomeStyles';

const Home: React.FC = () => {
  const heroBannerStyle = {
    backgroundImage: 'url("/images/products/1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <HomeContainer>
      <HeroBanner style={heroBannerStyle}>
        <HeroContent>
          <HeroTitle>创新科技的未来</HeroTitle>
          <HeroSubtitle>EtherSpark - 智能生活的全新定义</HeroSubtitle>
        </HeroContent>
      </HeroBanner>

      <CategoriesSection>
        <CategoryGrid>
          <CategoryCard to="/kitchen">
            <CategoryTitle>智能厨房</CategoryTitle>
          </CategoryCard>
          <CategoryCard to="/home">
            <CategoryTitle>智能家居</CategoryTitle>
          </CategoryCard>
          <CategoryCard to="/health">
            <CategoryTitle>健康科技</CategoryTitle>
          </CategoryCard>
          <CategoryCard to="/outdoor">
            <CategoryTitle>户外科技</CategoryTitle>
          </CategoryCard>
        </CategoryGrid>
      </CategoriesSection>

      <FeaturedSection>
        <FeaturedTitle>精选产品</FeaturedTitle>
        <FeaturedGrid>
          <ProductCard to="/products/smart-home-hub">
            <ProductImage />
            <ProductTitle>智能家庭控制中心</ProductTitle>
            <ProductDescription>
              全方位控制您的智能家居，简化您的日常生活
            </ProductDescription>
          </ProductCard>
          <ProductCard to="/products/air-purifier">
            <ProductImage />
            <ProductTitle>高效空气净化器</ProductTitle>
            <ProductDescription>
              清新空气，健康呼吸，打造理想的居住环境
            </ProductDescription>
          </ProductCard>
          <ProductCard to="/products/smart-lighting">
            <ProductImage />
            <ProductTitle>智能照明系统</ProductTitle>
            <ProductDescription>
              根据您的喜好和需求调整照明，创造完美氛围
            </ProductDescription>
          </ProductCard>
        </FeaturedGrid>
      </FeaturedSection>

      <PromotionSection>
        <PromotionContent>
          <PromotionTitle>智能生活季</PromotionTitle>
          <PromotionDescription>
            探索EtherSpark带来的智能科技，体验未来生活方式
          </PromotionDescription>
          <PromotionButton to="/collection/smart-living">
            了解更多
          </PromotionButton>
        </PromotionContent>
      </PromotionSection>

      <CollectionSection>
        <CollectionTitle>精选系列</CollectionTitle>
        <CollectionGrid>
          <CollectionCard to="/collection/home">
            <CollectionCardContent>
              <CollectionCardTitle>EtherSpark家居系列</CollectionCardTitle>
            </CollectionCardContent>
          </CollectionCard>
          <CollectionCard to="/collection/office">
            <CollectionCardContent>
              <CollectionCardTitle>办公空间解决方案</CollectionCardTitle>
            </CollectionCardContent>
          </CollectionCard>
          <CollectionCard to="/collection/outdoor">
            <CollectionCardContent>
              <CollectionCardTitle>户外科技系列</CollectionCardTitle>
            </CollectionCardContent>
          </CollectionCard>
        </CollectionGrid>
      </CollectionSection>

      <NewsletterSection>
        <NewsletterContent>
          <NewsletterTitle>订阅我们的新闻通讯</NewsletterTitle>
          <NewsletterDescription>
            获取最新产品信息、技术资讯和独家优惠
          </NewsletterDescription>
        </NewsletterContent>
      </NewsletterSection>
    </HomeContainer>
  );
};

export default Home; 