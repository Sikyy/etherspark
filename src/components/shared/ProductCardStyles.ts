import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductCard = styled(Link)`
  position: relative;
  display: block;
  text-decoration: none;
  height: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  padding: 0;
  overflow: hidden;
  background-color: #161516;
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #161516;
  transition: transform 0.5s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ColorOptions = styled.div`
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 10px;
  z-index: 2;
`;

export const ColorOption = styled.div<{ color: string; active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  cursor: pointer;
  border: ${props => props.active ? '1px solid #fff' : 'none'};
`;

export const ProductInfo = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: transparent;
`;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  margin: 0;
`;

export const ProductModel = styled.div`
  display: none;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
  color: #fff;
  opacity: 0.7;
  margin-top: 5px;
`;

export const ProductStatus = styled.div`
  font-size: 12px;
  color: #ff6b00;
  text-transform: uppercase;
  margin-top: 5px;
`;

export const ViewButton = styled.div`
  display: none;
`;

export const AddToCartButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s ease;
  
  ${ProductCard}:hover & {
    background-color: #ff6b00;
    transform: scale(1.05);
  }
  
  &::before {
    content: '+';
    font-size: 24px;
    font-weight: 300;
  }
`; 