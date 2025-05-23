import { Product } from './types';

export const featuredProducts: Product[] = [
  {
    id: 'featured-1',
    numericId: 1,
    name: '粉丝合集 BORK T782',
    description: '高效双面烤制，智能温控系统',
    price: '¥9,999',
    image: '/images/home/scene/T782/T782_main.jpg',
    cardImage: '/images/home/T782.png',
    gallery: [
      {
        src: '/images/products/1.png',
        alt: '粉丝合集 BORK T782 - 正面视图',
        caption: '现代简约设计，高品质不锈钢外壳'
      },
      {
        src: '/images/products/2.png',
        alt: '粉丝合集 BORK T782 - 侧面视图',
        caption: '纤薄设计，易于存放'
      },
      {
        src: '/images/products/3.png',
        alt: '粉丝合集 BORK T782 - 使用场景',
        caption: '高效烤制，多种烤制模式'
      }
    ],
    features: [
      '独特的双面烤制技术，缩短烤制时间50%',
      '智能温控系统，精确控温至1°C',
      '6种烤制模式，满足不同食材需求',
      '大尺寸烤盘，一次可烤制多片面包',
      '高品质不锈钢外壳，耐用易清洁',
      '独立式集屑盘，清洁方便'
    ],
    specifications: {
      '尺寸': '32 × 26 × 21 厘米',
      '重量': '2.8 千克',
      '功率': '1500 瓦',
      '电压': '220 伏',
      '烤制模式': '6种',
      '材质': '不锈钢/高温塑料',
      '保修期': '2年'
    },
    featured: true,
    tag: '新品',
    colorOptions: [
      { color: '#E2DFDA', name: '米白色' },
      { color: '#544F45', name: '深灰色' },
      { color: '#9A8678', name: '棕色' }
    ]
  },
  {
    id: 'featured-2',
    numericId: 2,
    name: '台扇 BORK P513 gg',
    description: '智能控温静音设计，远程控制',
    price: '¥14,000',
    image: '/images/home/scene/P513/P513_main.jpg',
    cardImage: '/images/home/P513.png',
    gallery: [
      {
        src: '/images/home/scene/P513/P513_main.jpg',
        alt: '台扇 BORK P513 gg - 正面视图',
        caption: '现代简约设计，完美融入各种家居风格'
      },
      {
        src: '/images/home/scene/P513/P513_control.jpg',
        alt: '台扇 BORK P513 gg - 控制面板',
        caption: '智能触控面板，操作便捷'
      }
    ],
    features: [
      '智能温控，根据环境自动调节风速',
      '超静音设计，运行噪音低至20分贝',
      '9档风速调节，满足不同需求',
      '远程控制，手机APP随时操作',
      '定时功能，支持1-8小时定时',
      '自然风模式，模拟自然微风效果'
    ],
    specifications: {
      '尺寸': '36 × 30 × 88 厘米',
      '重量': '3.5 千克',
      '功率': '45 瓦',
      '电压': '220 伏',
      '风速档位': '9档',
      '噪音': '≤ 20 分贝',
      '摇头范围': '90°'
    },
    featured: true,
    colorOptions: [
      { color: '#1A1A1A', name: '黑色' },
      { color: '#FFFFFF', name: '白色' }
    ]
  }
]; 