import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ProductListContainer,
  ProductListHeader,
  ProductListTitle,
  ProductGrid,
  EmptyState
} from './ProductListStyles';

import { Product, productData, categoryTitles } from './productData';
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

const ProductList: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryTitle, setCategoryTitle] = useState('');

  useEffect(() => {
    if (category && productData[category]) {
      setProducts(productData[category]);
      setCategoryTitle(categoryTitles[category] || category);
    } else {
      setProducts([]);
      setCategoryTitle('未找到分类');
    }
  }, [category]);

  if (!products.length) {
    return (
      <ProductListContainer>
        <EmptyState>该分类下暂无产品</EmptyState>
      </ProductListContainer>
    );
  }

  return (
    <ProductListContainer>
      <ProductListHeader>
        <ProductListTitle>{categoryTitle}</ProductListTitle>
      </ProductListHeader>
      
      <ProductGrid>
        {products.map((product) => (
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
      </ProductGrid>
    </ProductListContainer>
  );
};

export default ProductList; 