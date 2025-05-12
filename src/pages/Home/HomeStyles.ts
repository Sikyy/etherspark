import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

export const HeroCarousel = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: visible;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  height: auto;
`;

export const HeroBanner = styled.div`
  height: 793px;
  min-height: 793px;
  width: 100%;
  flex-shrink: 0;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  background-color: ${props => props.theme.colors.secondary};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${props => props.theme.spacing.large};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
    z-index: 1;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 793px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 793px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScrollIndicator = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  position: relative;
  margin-top: 30px;
  cursor: pointer;
  animation: bounce 1.5s infinite;
  
  &:after {
    content: '';
    width: 12px;
    height: 12px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

export const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 36px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 24px;
  color: ${props => props.theme.colors.textSecondary};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 20px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

export const CategoriesSection = styled.section`
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const CategoryCard = styled(Link)`
  height: 200px;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  z-index: 1;
`;

export const FeaturedSection = styled.section`
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
  }
`;

export const FeaturedTitle = styled.h2`
  font-size: 28px;
  margin-bottom: ${props => props.theme.spacing.xlarge};
  text-align: center;
`;

export const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #2b2b2b;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000), 
              box-shadow 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    
    &::after {
      opacity: 1;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

export const ProductImageWrapper = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const ProductImage = styled.div`
  height: 100%;
  width: 100%;
  background-color: #2b2b2b;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: transform 0.5s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.15);
  }
`;

export const AddToCartButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ff6b00;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transform: scale(0);
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  ${ProductCard}:hover & {
    transform: scale(1);
  }
  
  &::after {
    content: '+';
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const ProductTag = styled.span`
  position: absolute;
  bottom: 70px;
  right: 15px;
  padding: 4px 8px;
  background-color: #ff5c00;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  border-radius: 2px;
  z-index: 5;
  transform: translateY(5px);
  opacity: 0;
  animation: fadeInUp 0.5s forwards 0.2s;
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProductInfo = styled.div`
  position: relative;
  z-index: 2;
  background-color: #2b2b2b;
  padding: 15px;
`;

export const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: width 0.3s ease;
  }
  
  ${ProductCard}:hover & {
    &::after {
      width: 30px;
    }
  }
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #999;
  margin-top: 5px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  max-width: 1500px;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const FeaturedProductCard = styled(ProductCard)`
  position: relative;
  
  ${ProductImageWrapper} {
    height: 450px;
  }
  
  ${ProductTitle} {
    font-size: 22px;
    font-weight: 500;
  }

  ${ProductDescription} {
    font-size: 16px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    ${ProductImageWrapper} {
      height: 280px;
    }
    
    ${ProductTitle} {
      font-size: 16px;
    }
    
    ${ProductDescription} {
      font-size: 14px;
    }
  }
`;

export const PromotionSection = styled.section`
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.colors.secondary};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
  }
`;

export const PromotionContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const PromotionTitle = styled.h2`
  font-size: 32px;
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const PromotionDescription = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: ${props => props.theme.spacing.xlarge};
`;

export const PromotionButton = styled(Link)`
  display: inline-block;
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.buttonHover};
  }
`;

export const CollectionSection = styled.section`
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
  }
`;

export const CollectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: ${props => props.theme.spacing.xlarge};
  text-align: center;
`;

export const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const CollectionCard = styled(Link)`
  height: 300px;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: flex-end;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CollectionCardContent = styled.div`
  padding: ${props => props.theme.spacing.large};
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  width: 100%;
`;

export const CollectionCardTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

export const NewsletterSection = styled.section`
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.colors.secondary};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
  }
`;

export const NewsletterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export const NewsletterTitle = styled.h2`
  font-size: 28px;
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const NewsletterDescription = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
`;

// 页面加载动画
export const FadeInContainer = styled.div`
  opacity: 0;
  animation: fadeIn 0.8s forwards;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`; 