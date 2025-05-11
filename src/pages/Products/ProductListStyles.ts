import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductListContainer = styled.div`
  width: 100%;
  padding: ${props => props.theme.spacing.xxlarge} ${props => props.theme.spacing.large};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing.xlarge} ${props => props.theme.spacing.medium};
  }
`;

export const ProductListHeader = styled.div`
  margin-bottom: ${props => props.theme.spacing.xlarge};
  text-align: center;
`;

export const ProductListTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 28px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.xlarge};
  
  @media (max-width: ${props => props.theme.breakpoints.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.xxlarge};
  }
`;

export const ProductCard = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: ${props => props.theme.spacing.medium};
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${ProductCard}:hover &:after {
    opacity: 1;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductInfo = styled.div`
  padding: ${props => props.theme.spacing.large};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.small};
`;

export const ProductName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.small};
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.5;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const ProductButton = styled.button`
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  border: 1px solid ${props => props.theme.colors.border};
  background-color: transparent;
  color: ${props => props.theme.colors.text};
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: ${props => props.theme.colors.buttonHover};
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xxlarge} 0;
  font-size: 18px;
  color: ${props => props.theme.colors.textSecondary};
`; 