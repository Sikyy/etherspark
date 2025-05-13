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
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  height: auto;
`;

export const HeroBanner = styled.div`
  height: 100vh;
  min-height: 800px;
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
    height: 100vh;
    min-height: 700px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 100vh;
    min-height: 600px;
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
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  animation: bounce 1.5s infinite;
  z-index: 10;
  
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
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
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

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 60px 40px;
  max-width: 1500px;
  margin: 0 auto;
  background-color: rgb(0, 0, 0);
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 30px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 30px 20px;
  }
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