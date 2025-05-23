export interface ProductImage {
  src: string;
  alt?: string;
  caption?: string;
}

// 颜色选项类型定义
export interface ColorOption {
  color: string;
  name: string;
}

export interface Product {
  id: string;
  numericId: number;
  name: string;
  description: string;
  price: string;
  image: string;
  cardImage: string;
  gallery?: ProductImage[];
  features?: string[];
  specifications?: { [key: string]: string };
  tag?: string;
  featured?: boolean;
  colorOptions?: ColorOption[];
}

export interface ProductData {
  [category: string]: Product[];
}

// 分类标题
export const categoryTitles: { [key: string]: string } = {
  news: '新品',
  tools: '工具',
  scooter: '电动滑板车',
  life: '生活产品',
  pet: '宠物用品',
  sound: '声学',
  watch: '手表',
  invehicle: '车载用品',
  home: '主页产品'
}; 