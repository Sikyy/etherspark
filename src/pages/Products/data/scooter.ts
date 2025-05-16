import { Product } from './types';

export const scooterProducts: Product[] = [
  {
    id: 'scooter-1',
    numericId: 301,
    name: '食物搅拌机',
    description: '高速马达，多功能附件，易于清洁',
    price: '¥1,299',
    image: '/images/products/1.png'
  },
  {
    id: 'scooter-2',
    numericId: 302,
    name: '高速破壁机',
    description: '强劲马达，多功能搅拌，智能程序控制',
    price: '¥2,799',
    image: 'https://via.placeholder.com/400x300/333/fff?text=高速破壁机'
  },
  {
    id: 'scooter-3',
    numericId: 303,
    name: '智能电饭煲',
    description: 'IH加热技术，智能控温，多种煮饭模式',
    price: '¥1,999',
    image: 'https://via.placeholder.com/400x300/333/fff?text=智能电饭煲'
  },
  {
    id: 'scooter-4',
    numericId: 304,
    name: '冷萃咖啡机',
    description: '精准控温，定时浸泡，保留咖啡原香',
    price: '¥899',
    image: 'https://via.placeholder.com/400x300/333/fff?text=冷萃咖啡机'
  }
]; 