import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductDetailContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.large} ${props => props.theme.spacing.medium};
  }

  .product-detail-content {
    display: grid;
    grid-template-columns: 55% 45%;
    gap: ${props => props.theme.spacing.large};
    margin-bottom: 0;
    min-height: 80vh;
    align-items: flex-start;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      grid-template-columns: 1fr;
      gap: ${props => props.theme.spacing.large};
      min-height: auto;
    }
  }
`;

export const ProductDetailHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.large};
  padding: 0 ${props => props.theme.spacing.small};
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.small} 0;
  font-size: 14px;
  border: none;
  background: transparent;
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:before {
    content: '←';
    font-size: 18px;
    margin-right: 8px;
    display: inline-block;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: ${props => props.theme.colors.text};
    
    &:before {
      transform: translateX(-3px);
    }
  }
`;

export const ProductImageGallery = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.small};
  padding: ${props => props.theme.spacing.small};
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: normal;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
`;

export const ProductMainImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 4px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 400px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 300px;
  }
`;

export const ProductThumbnailsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing.small};
  margin-top: ${props => props.theme.spacing.small};
  overflow-x: auto;
  padding-bottom: ${props => props.theme.spacing.small};
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.secondary};
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: 2px;
  }
`;

export const ProductThumbnail = styled.img<{ active?: boolean }>`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid ${props => props.active ? props.theme.colors.accent : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const ImageCaption = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  margin-top: ${props => props.theme.spacing.small};
  font-style: italic;
  text-align: center;
  padding: 0 ${props => props.theme.spacing.medium};
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
  padding: 0px 0 ${props => props.theme.spacing.medium} 0;
`;

export const ProductName = styled.h1`
  font-size: 36px;
  font-weight: bold;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 28px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${props => props.theme.colors.textSecondary};
`;

export const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: ${props => props.theme.spacing.medium};
`;

export const ProductFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
  margin-top: ${props => props.theme.spacing.large};
`;

export const FeaturesTitle = styled.h3`
  font-size: 18px;
  margin-bottom: ${props => props.theme.spacing.small};
`;

export const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-position: inside;
`;

export const FeatureItem = styled.li`
  padding: ${props => props.theme.spacing.small} 0;
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  
  &:before {
    content: "•";
    color: ${props => props.theme.colors.accent};
    font-weight: bold;
    margin-right: ${props => props.theme.spacing.small};
  }
`;

export const BuyButton = styled.button`
  margin-top: ${props => props.theme.spacing.large};
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.xlarge};
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: #555555;
  }
`;

export const SpecificationSection = styled.div`
  margin-top: 0px;
  position: relative;
  background-color: ${props => props.theme.colors.primary};
  padding-top: 60px;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${props => props.theme.colors.border},
      transparent
    );
  }
`;

export const ProductSpecifications = styled.div`
  margin-bottom: ${props => props.theme.spacing.xxlarge};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 ${props => props.theme.spacing.large};
`;

export const SpecificationTitle = styled.h2`
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing.xlarge};
  color: ${props => props.theme.colors.accent};
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 24px;
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const SpecificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium};
`;

export const SpecificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.medium} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

export const SpecificationName = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.textSecondary};
  flex: 1;
`;

export const SpecificationValue = styled.div`
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  text-align: right;
  flex: 1;
`;

export const RelatedProducts = styled.div`
  margin-top: 120px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: ${props => props.theme.spacing.xxlarge};
`;

export const RelatedProductsTitle = styled.h2`
  font-size: 24px;
  margin-bottom: ${props => props.theme.spacing.xlarge};
  text-align: center;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 24px;
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const RelatedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const RelatedProductCard = styled(Link)`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const RelatedProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const RelatedProductName = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: ${props => props.theme.spacing.medium};
`;

export const RelatedProductPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  padding: 0 ${props => props.theme.spacing.medium} ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.textSecondary};
`; 