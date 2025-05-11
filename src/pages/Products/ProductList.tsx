import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ProductListContainer,
  ProductListHeader,
  ProductListTitle,
  ProductGrid,
  ProductCard,
  ProductImageContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductButton,
  EmptyState
} from './ProductListStyles';

import { Product, productData, categoryTitles } from './productData';

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
          <ProductCard key={product.id}>
            <ProductImageContainer>
              <ProductImage src={product.image} alt={product.name} />
            </ProductImageContainer>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
              <Link to={`/${category}/${product.id}`}>
                <ProductButton>了解更多</ProductButton>
              </Link>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductListContainer>
  );
};

export default ProductList; 