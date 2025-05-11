import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HeroBanner = styled.div`
  height: 793px;
  background-color: ${props => props.theme.colors.secondary};
  background-image: url('/images/products/1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
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
    height: 640px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 540px;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
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
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  overflow: hidden;
  padding: ${props => props.theme.spacing.large};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.div`
  height: 200px;
  background-color: ${props => props.theme.colors.accent};
  border-radius: 4px;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
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