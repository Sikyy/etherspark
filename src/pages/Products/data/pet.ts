import { Product } from './types';

export const petProducts: Product[] = [
  {
    id: 'pet-1',
    numericId: 501,
    name: '智能喂食器',
    description: '精准测量，多项身体数据分析，健康管理',
    price: '7,199₽',
    image: '/images/pet/GF1.png',
    cardImage: '/images/pet/GF1.png',
    tag: '新品',
    gallery: [
      {
        src: '/images/products/1.png',
        alt: '智能家居控制中心-正面视图',
        caption: '简约现代的设计，触摸屏控制面板'
      },
      {
        src: '/images/products/2.png',
        alt: '智能家居控制中心-侧面视图',
        caption: '超薄机身设计，易于安装在墙面'
      },
      {
        src: '/images/products/3.png',
        alt: '智能家居控制中心-背面视图',
        caption: '多接口设计，支持各类智能设备连接'
      },
      {
        src: '/images/products/4.png',
        alt: '智能家居控制中心-使用场景',
        caption: '一键控制全屋智能设备，提升生活品质'
      }
    ],
    features: [
      '7英寸高清触摸屏',
      '支持Wi-Fi、蓝牙、ZigBee等多种连接协议',
      '语音控制功能，支持多种语言',
      '定时场景设置，一键启动预设模式',
      '远程控制，随时随地管理家居设备',
      '安全加密技术，保护隐私数据'
    ],
    specifications: {
      '重量': '350 克',
      '电压': '100-220 伏',
      '程序数量': '15',
      '强度等级': '9',
      '调节等级': '3',
      '尺寸': '1000*1000*1000',
    }
  },
  {
    id: 'pet-2',
    numericId: 502,
    name: '宠物智能饮水器',
    description: '多种按摩模式，热敷功能，智能控制',
    price: '2,899₽',
    image: '/images/pet/scene/GW1/GW1_main.jpg',
    cardImage: '/images/pet/GW1.png',
    gallery: [
      {
        src: '/images/pet/scene/GW1/1.jpg',
        alt: '智能家居控制中心-正面视图',
        caption: '简约现代的设计，触摸屏控制面板'
      },
      {
        src: '/images/pet/scene/GW1/2.jpg',
        alt: '智能家居控制中心-侧面视图',
        caption: '超薄机身设计，易于安装在墙面'
      },
      {
        src: '/images/pet/scene/GW1/3.jpg',
        alt: '智能家居控制中心-背面视图',
        caption: '多接口设计，支持各类智能设备连接'
      },
      {
        src: '/images/pet/scene/GW1/4.jpg',
        alt: '智能家居控制中心-使用场景',
        caption: '一键控制全屋智能设备，提升生活品质'
      }
    ],
    features: [
      '7英寸高清触摸屏',
      '支持Wi-Fi、蓝牙、ZigBee等多种连接协议',
      '语音控制功能，支持多种语言',
      '定时场景设置，一键启动预设模式',
    ],
    specifications: {
      '重量': '350 克',
      '电压': '100-220 伏',
      '程序数量': '15',
      '强度等级': '9',
      '调节等级': '3',
      '尺寸': '1000*1000*1000',
    }
  },
  {
    id: 'pet-3',
    numericId: 503,
    name: '宠物智能烘干箱',
    description: '全面监测睡眠质量，提供改善建议',
    price: '35,999₽',
    image: '/images/pet/scene/PD1/PD1_main.jpg',
    cardImage: '/images/pet/PD1.png',
  },
  {
    id: 'pet-4',
    numericId: 504,
    name: '宠物智能厕所',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '34,999₽',
    image: '/images/pet/scene/CT1/CT1_main.jpg',
    cardImage: '/images/pet/CT1.png',
  },
  {
    id: 'pet-5',
    numericId: 505,
    name: '宠物毛发洗护套装',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '14,999₽',
    image: '/images/pet/scene/NM1/NM1_main.jpg',
    cardImage: '/images/pet/NM1.png',
  },
  {
    id: 'pet-6',
    numericId: 506,
    name: '宠物电动梳毛器',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '8,999₽',
    image: '/images/pet/scene/PC1/PC1_main.jpg',
    cardImage: '/images/pet/PC1.png',
  },
  {
    id: 'pet-7',
    numericId: 507,
    name: '宠物电动剃毛器',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '2,899₽',
    image: '/images/pet/scene/GS1/GS1_main.jpg',
    cardImage: '/images/pet/GS1.png',
  },
  {
    id: 'pet-8',
    numericId: 508,
    name: '宠物手动梳毛器',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '699₽',
    image: '/images/pet/scene/GC1/GC1_main.jpg',
    cardImage: '/images/pet/GC1.png',
  },
  {
    id: 'pet-9',
    numericId: 509,
    name: '宠物指甲剪',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '299₽',
    image: '/images/pet/scene/NC1/NC1_main.jpg',
    cardImage: '/images/pet/NC1.png',
  },
  {
    id: 'pet-10',
    numericId: 510,
    name: '宠物牵引背带',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '2,499₽',
    image: '/images/pet/scene/DH1/DH1_main.jpg',
    cardImage: '/images/pet/DH1.png',
  },
  {
    id: 'pet-11',
    numericId: 511,
    name: '宠物牵引绳',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '1,999₽',
    image: '/images/pet/scene/TR1/TR1_main.jpg',
    cardImage: '/images/pet/TR1.png',
  },
  {
    id: 'pet-12',
    numericId: 512,
    name: '宠物粪便垃圾袋',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '349₽',
    image: '/images/pet/scene/GB1/GB1_main.jpg',
    cardImage: '/images/pet/GB1.png',
  },
  {
    id: 'pet-13',
    numericId: 513,
    name: '宠物遥控玩具',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '1,999₽',
    image: '/images/pet/scene/Snail_Car/Snail_Car_main.jpg',
    cardImage: '/images/pet/Snail_Car.png',
  }
]; 