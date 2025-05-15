import React from 'react';
import styled from 'styled-components';
import { 
  ProductCard, 
  ProductImageContainer,
  ProductImage, 
  ProductInfo, 
  ProductName, 
  ProductPrice, 
  ProductStatus,
  AddToCartButton
} from '../../components/shared/ProductCardStyles';

const LinksContainer = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;
  min-height: 100vh;
  padding: 60px 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 60px;
  text-align: center;
`;

const ProductLinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1300px;
  margin: 0 auto;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

// 产品数据
const products = [
  {
    id: 1,
    numericId: 1,
    name: '搅拌机 B 781',
    model: 'BORK B781',
    image: '/images/products/1.png',
    price: '33万卢布',
    featured: true,
    tag: '新品'
  },
  {
    id: 2,
    numericId: 2,
    name: '台扇 BORK P513 gg',
    model: 'BORK P513 gg',
    image: '/images/products/2.png',
    price: '14,000元'
  }
];

const ProductLinks: React.FC = () => {
  return (
    <LinksContainer>
      <Title>精选产品</Title>
      <ProductLinksGrid>
        {products.map(product => (
          <ProductCard key={product.id} to={`/product/${product.numericId}`}>
            <AddToCartButton />
            <ProductImageContainer>
              <ProductImage style={{ backgroundImage: `url(${product.image})` }} />
            </ProductImageContainer>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              {product.tag && <ProductStatus>{product.tag}</ProductStatus>}
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductLinksGrid>
    </LinksContainer>
  );
};

export default ProductLinks;