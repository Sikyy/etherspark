import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductDetailContainer = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;
  min-height: 100vh;
  overflow-x: hidden;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const ProductSection = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ProductHero = styled.div`
  width: 70%;
  position: relative;
  overflow: hidden;
  background-color: #1e1e1e;
  max-width: calc(100vw - 30%);
  height: 793px;
  
  @media (max-width: 992px) {
    width: 100%;
    height: 50vh;
    max-width: 100%;
  }
`;

export const ProductHeroImage = styled.img`
  width: 100%;
  height: 793px;
  object-fit: cover;
  background-color: transparent;
`;

export const ProductInfo = styled.div`
  width: 30%;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: auto;
  
  @media (max-width: 992px) {
    width: 100%;
    padding: 40px 20px;
    position: relative;
    top: 0;
    transform: none;
  }
`;

export const ProductName = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin: 0 0 5px 0;
`;

export const ProductSubTitle = styled.p`
  font-size: 16px;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const ProductModel = styled.div`
  font-size: 16px;
  color: #888;
  margin-bottom: 40px;
`;

export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '价格: ';
    color: #888;
    font-size: 16px;
    margin-right: 10px;
    font-weight: 400;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 14px 0;
  background-color: #ff6b00;
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: auto;
  
  &:hover {
    background-color: #ff8c3f;
  }
`;

export const AboutLink = styled.a`
  display: flex;
  align-items: center;
  color: #aaa;
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
  
  &:after {
    content: '>';
    margin-left: 5px;
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: #ff6b00;
    
    &:after {
      transform: translateX(3px);
    }
  }
`;

export const FeatureSection = styled.section`
  display: flex;
  margin: 120px 0;
  position: relative;
  padding: 0 80px;
  max-width: 1200px;
  width: 100%;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 60px 0;
    padding: 0 20px;
    
    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

export const FeatureImage = styled.img`
  width: 50%;
  object-fit: contain;
  background-color: #1a1a1a;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const FeatureContent = styled.div`
  width: 50%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 0;
  }
`;

export const FeatureTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #aaa;
`;

export const SpecsSection = styled.section`
  margin: 100px 0;
  padding: 0 80px;
  max-width: 1200px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const SpecsTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
  border-bottom: 1px solid #ff6b00;
  display: inline-block;
  padding-bottom: 10px;
`;

export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SpecItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const SpecName = styled.div`
  font-size: 16px;
  color: #aaa;
`;

export const SpecValue = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

export const RelatedProductsSection = styled.section`
  margin: 100px 0 60px;
  padding: 0 80px;
  max-width: 1200px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const RelatedProductsTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const RelatedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const RelatedProductCard = styled(Link)`
  background-color: #2b2b2b;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const RelatedProductImage = styled.div`
  height: 250px;
  background-size: cover;
  background-position: center;
`;

export const RelatedProductInfo = styled.div`
  padding: 20px;
`;

export const RelatedProductName = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const RelatedProductPrice = styled.div`
  font-size: 14px;
  color: #aaa;
`; 