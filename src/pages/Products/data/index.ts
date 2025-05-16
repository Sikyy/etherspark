import { ProductData } from './types';
import { featuredProducts } from './featured';
import { newsProducts } from './news';
import { toolsProducts } from './tools';
import { scooterProducts } from './scooter';
import { lifeProducts } from './life';
import { petProducts } from './pet';
import { soundProducts } from './sound';
import { watchProducts } from './watch';
import { invehicleProducts } from './invehicle';
import { homeProducts } from './home';

export * from './types';
export * from './featured';
export * from './news';
export * from './tools';
export * from './scooter';
export * from './life';
export * from './pet';
export * from './sound';
export * from './watch';
export * from './invehicle';
export * from './home';

// 整合所有产品数据
export const productData: ProductData = {
  featured: featuredProducts,
  news: newsProducts,
  tools: toolsProducts,
  scooter: scooterProducts,
  life: lifeProducts,
  pet: petProducts,
  sound: soundProducts,
  watch: watchProducts,
  invehicle: invehicleProducts,
  home: homeProducts
}; 