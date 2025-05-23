import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ProductListContainer,
  ProductListHeader,
  ProductListTitle,
  ProductGrid,
  EmptyState
} from './ProductListStyles';

import { Product, productData, categoryTitles } from './data';
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
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (category && productData[category]) {
      setProducts(productData[category]);
      setCategoryTitle(categoryTitles[category] || category);
      
      // 预加载图片
      const imageUrls = productData[category].map(product => product.cardImage);
      preloadImages(imageUrls);
    } else {
      setProducts([]);
      setCategoryTitle('未找到分类');
    }
  }, [category]);

  // 图片预加载函数
  const preloadImages = (urls: string[]) => {
    urls.forEach(url => {
      if (!loadedImages.has(url)) {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          setLoadedImages(prev => new Set(prev).add(url));
        };
      }
    });
  };

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
          <ProductCard 
            key={product.id} 
            to={`/product/${product.numericId}`}
          >
            <AddToCartButton />
            <ProductImageContainer>
              <ProductImage 
                style={{ 
                  backgroundImage: `url(${product.cardImage})`,
                  opacity: loadedImages.has(product.cardImage) ? 1 : 0.8,
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }} 
              />
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