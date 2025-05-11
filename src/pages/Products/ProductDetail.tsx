import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ProductDetailContainer,
  ProductDetailHeader,
  ProductImageGallery,
  ProductMainImage,
  ProductThumbnailsContainer,
  ProductThumbnail,
  ImageCaption,
  ProductInfo,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductFeatures,
  FeaturesTitle,
  FeatureList,
  FeatureItem,
  BuyButton,
  BackButton,
  SpecificationSection,
  ProductSpecifications,
  SpecificationTitle,
  SpecificationList,
  SpecificationItem,
  SpecificationName,
  SpecificationValue,
  RelatedProducts,
  RelatedProductsTitle,
  RelatedProductsGrid,
  RelatedProductCard,
  RelatedProductImage,
  RelatedProductName,
  RelatedProductPrice
} from './ProductDetailStyles';

import { Product, productData } from './productData';

interface ProductParams {
  category: string;
  productId: string;
}

const ProductDetail: React.FC = () => {
  const { category, productId } = useParams<keyof ProductParams>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState<{src: string, alt: string}>({
    src: '',
    alt: ''
  });

  // 处理产品数据加载
  useEffect(() => {
    if (category && productId && productData[category]) {
      const foundProduct = productData[category].find(p => p.id === productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImageIndex(0);
        
        // 设置当前图片
        if (foundProduct.gallery && foundProduct.gallery.length > 0) {
          setCurrentImage({
            src: foundProduct.gallery[0].src,
            alt: foundProduct.gallery[0].alt || foundProduct.name
          });
        } else {
          setCurrentImage({
            src: foundProduct.image,
            alt: foundProduct.name
          });
        }
        
        // 获取相关产品
        const related = productData[category]
          .filter(p => p.id !== productId)
          .slice(0, 3);
        setRelatedProducts(related);
      }
    }
  }, [category, productId]);

  // 处理缩略图点击，更新选中的图片
  useEffect(() => {
    if (product && product.gallery && product.gallery.length > selectedImageIndex) {
      setCurrentImage({
        src: product.gallery[selectedImageIndex].src,
        alt: product.gallery[selectedImageIndex].alt || product.name
      });
    }
  }, [selectedImageIndex, product]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  if (!product) {
    return (
      <ProductDetailContainer>
        <ProductDetailHeader>
          <BackButton onClick={handleGoBack}>返回</BackButton>
        </ProductDetailHeader>
        <div>产品未找到</div>
      </ProductDetailContainer>
    );
  }

  // 获取当前选中图片的说明文字
  const currentCaption = product.gallery && product.gallery.length > selectedImageIndex
    ? product.gallery[selectedImageIndex].caption
    : undefined;

  return (
    <ProductDetailContainer>
      <ProductDetailHeader>
        <BackButton onClick={handleGoBack}>返回</BackButton>
      </ProductDetailHeader>

      <div className="product-detail-content">
        <ProductImageGallery>
          {currentImage.src && (
            <ProductMainImage 
              src={currentImage.src} 
              alt={currentImage.alt} 
            />
          )}
          {currentCaption && <ImageCaption>{currentCaption}</ImageCaption>}
          
          {product.gallery && product.gallery.length > 0 && (
            <ProductThumbnailsContainer>
              {product.gallery.map((image, index) => (
                <ProductThumbnail 
                  key={index}
                  src={image.src}
                  alt={image.alt || `${product.name} - 图片 ${index + 1}`}
                  active={index === selectedImageIndex}
                  onClick={() => handleThumbnailClick(index)}
                />
              ))}
            </ProductThumbnailsContainer>
          )}
        </ProductImageGallery>

        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPrice>{product.price}</ProductPrice>
          
          {product.features && product.features.length > 0 && (
            <ProductFeatures>
              <FeaturesTitle>产品特点</FeaturesTitle>
              <FeatureList>
                {product.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature}</FeatureItem>
                ))}
              </FeatureList>
            </ProductFeatures>
          )}
          
          <BuyButton>立即购买</BuyButton>
        </ProductInfo>
      </div>

      <SpecificationSection>
        <ProductSpecifications>
          <SpecificationTitle>特征</SpecificationTitle>
          <SpecificationList>
            {product.specifications ? (
              Object.entries(product.specifications).map(([key, value], index) => (
                <SpecificationItem key={index}>
                  <SpecificationName>{key}</SpecificationName>
                  <SpecificationValue>{value}</SpecificationValue>
                </SpecificationItem>
              ))
            ) : (
              <>
                <SpecificationItem>
                  <SpecificationName>型号</SpecificationName>
                  <SpecificationValue>ES-{product.id}</SpecificationValue>
                </SpecificationItem>
                <SpecificationItem>
                  <SpecificationName>功率</SpecificationName>
                  <SpecificationValue>45W</SpecificationValue>
                </SpecificationItem>
                <SpecificationItem>
                  <SpecificationName>电压</SpecificationName>
                  <SpecificationValue>100-220V</SpecificationValue>
                </SpecificationItem>
                <SpecificationItem>
                  <SpecificationName>重量</SpecificationName>
                  <SpecificationValue>350克</SpecificationValue>
                </SpecificationItem>
                <SpecificationItem>
                  <SpecificationName>尺寸</SpecificationName>
                  <SpecificationValue>280 × 180 × 120 毫米</SpecificationValue>
                </SpecificationItem>
              </>
            )}
          </SpecificationList>
        </ProductSpecifications>
      </SpecificationSection>
    </ProductDetailContainer>
  );
};

export default ProductDetail; 