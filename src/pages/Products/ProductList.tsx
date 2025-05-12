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
  ColorOptions,
  ColorOption,
  AddToCartButton
} from '../../components/shared/ProductCardStyles';

// 模拟颜色选项数据
const colorOptionsMap: { [key: string]: { color: string; name: string }[] } = {
  'default': [
    { color: '#E2DFDA', name: '米白色' },
    { color: '#544F45', name: '深灰色' },
    { color: '#9A8678', name: '棕色' }
  ],
  'news': [
    { color: '#E2DFDA', name: '米白色' },
    { color: '#544F45', name: '深灰色' },
    { color: '#9A8678', name: '棕色' }
  ],
  'tools': [
    { color: '#1A1A1A', name: '黑色' },
    { color: '#544F45', name: '深灰色' }
  ],
  'kitchen': [
    { color: '#E2DFDA', name: '米白色' },
    { color: '#1A1A1A', name: '黑色' },
    { color: '#FE5000', name: '橙色' }
  ]
};

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

  // 获取产品类别的颜色选项，如果没有特定分类的颜色，则使用默认颜色
  const getColorOptions = (category: string | undefined) => {
    if (!category || !colorOptionsMap[category]) {
      return colorOptionsMap.default;
    }
    return colorOptionsMap[category];
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
          <ProductCard key={product.id} to={`/product/${product.numericId}`}>
            <AddToCartButton />
            <ProductImageContainer>
              <ProductImage style={{ backgroundImage: `url(${product.image})` }} />
              <ColorOptions>
                {getColorOptions(category).map((colorOption, index) => (
                  <ColorOption 
                    key={index} 
                    color={colorOption.color} 
                    active={index === 0}
                    title={colorOption.name}
                  />
                ))}
              </ColorOptions>
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