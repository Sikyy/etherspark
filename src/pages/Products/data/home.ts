import { Product } from './types';

export const homeProducts: Product[] = [
  {
    id: 'home-1',
    numericId: 1,
    name: '粉丝合集 BORK T782',
    description: '高效双面烤制，智能温控系统',
    price: '¥9,999',
    image: '/images/home/scene/T782/T782_main.jpg',
    cardImage: '/images/home/T782.png',
    featured: true,
    tag: '新品',
    colorOptions: [
      { color: '#E2DFDA', name: '米白色' },
      { color: '#544F45', name: '深灰色' },
      { color: '#9A8678', name: '棕色' }
    ]
  },
  {
    id: 'home-2',
    numericId: 2,
    name: '台扇 BORK P513 gg',
    description: '智能控温静音设计，远程控制',
    price: '14,000元',
    image: '/images/home/scene/P513/P513_main.jpg',
    cardImage: '/images/home/P513.png',
    colorOptions: [
      { color: '#1A1A1A', name: '黑色' },
      { color: '#FFFFFF', name: '白色' }
    ]
  },
  {
    id: 'home-3',
    numericId: 3,
    name: '空气净化加湿器 BORK A705',
    description: '高效净化，智能加湿，静音设计',
    price: '14,000元',
    image: '/images/home/scene/A705/A705_main.jpg',
    cardImage: '/images/home/A705.png',
    tag: '即将上市'
  },
  {
    id: 'home-4',
    numericId: 4,
    name: '空气净化加湿器 BORK A802 RAIN',
    description: '高效净化，智能加湿，静音设计',
    price: '36,720元',
    image: '/images/home/scene/A802/A802_main.jpg',
    cardImage: '/images/home/A802.png'
  },
  {
    id: 'home-5',
    numericId: 5,
    name: '加湿器 BORK H503',
    description: '大容量水箱，智能湿度控制',
    price: '24,000元',
    image: '/images/home/scene/H503/H503_main.jpg',
    cardImage: '/images/home/H503.png',
    tag: '折扣',
    colorOptions: [
      { color: '#FE5000', name: '橙色' },
      { color: '#E2DFDA', name: '米白色' }
    ]
  },
  {
    id: 'home-6',
    numericId: 6,
    name: '音箱机 BORK HF700',
    description: '高保真音质，智能语音控制',
    price: '36,720元',
    image: '/images/home/scene/HF700/HF700_main.jpg',
    cardImage: '/images/home/HF700.png'
  },
  {
    id: 'home-7',
    numericId: 7,
    name: '自主空气清洁站 BORK V850',
    description: '高效过滤，智能控制，静音设计',
    price: '29,760元',
    image: '/images/home/scene/V850/V850_main.jpg',
    cardImage: '/images/home/V850.png'
  }
]; 