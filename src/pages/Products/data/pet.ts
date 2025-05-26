import { Product } from './types';

export const petProducts: Product[] = [
  {
    id: 'GF1',
    numericId: 501,
    name: 'Умная кормушка для питомцев',
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
      'WiFi-соединение, удалённое управление через приложение',
      'Кормление в одно касание，Планирование кормления，Напоминание о нехватке корма',
      'Разборная и моющаяся конструкция',
      'Все материалы — пищевого качества',
      'Опциональная камера'
    ],
    specifications: {
      'Размер': '178мм * 177мм * 335мм',
      'Вес': '1761г',
      'Ёмкость': '4л',
      'Цвет': 'Белый',
      'Материал': 'ABS + SUS304',
      'Подходит для питомцев': 'кошек, а также мелких и средних собак',
    }
  },
  {
    id: 'GW1',
    numericId: 502,
    name: 'Умная поилка-фонтан для питомцев',
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
      'Автоматическое отключение при отсутствии воды, бесшумный насос',
      'Питание: USB-зарядка и аккумулятор (4000 мАч)',
      'Лёгкость разборки и очистки',
      '3 режима работы: индукционный, таймерный и непрерывный',
    ],
    specifications: {
      'Размер': '210мм * 210мм * 142мм',
      'Вес': '650г',
      'Ёмкость': '3,2л',
      'Цвет': 'Белый',
      'Материал': 'ABS',
      'Подходит для питомцев': 'кошек, а также мелких и средних собак',
    }
  },
  {
    id: 'PD1',
    numericId: 503,
    name: 'Умная сушилка для питомцев',
    description: '全面监测睡眠质量，提供改善建议',
    price: '35,999₽',
    image: '/images/pet/scene/PD1/PD1_main.jpg',
    cardImage: '/images/pet/PD1.png',
  },
  {
    id: 'CT1',
    numericId: 504,
    name: 'Автоматический лоток для кошек',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '34,999₽',
    image: '/images/pet/scene/CT1/CT1_main.jpg',
    cardImage: '/images/pet/CT1.png',
  },
  {
    id: 'NM1',
    numericId: 505,
    name: 'Умная машинка для ухода за питомцами',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '14,999₽',
    image: '/images/pet/scene/NM1/NM1_main.jpg',
    cardImage: '/images/pet/NM1.png',
  },
  {
    id: 'PC1',
    numericId: 506,
    name: 'Умная расчёска для питомцев',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '8,999₽',
    image: '/images/pet/scene/PC1/PC1_main.jpg',
    cardImage: '/images/pet/PC1.png',
  },
  {
    id: 'GS1',
    numericId: 507,
    name: 'Машинка для стрижки питомцев',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '2,899₽',
    image: '/images/pet/scene/GS1/GS1_main.jpg',
    cardImage: '/images/pet/GS1.png',
  },
  {
    id: 'GC1',
    numericId: 508,
    name: 'Расчёска для питомцев',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '699₽',
    image: '/images/pet/scene/GC1/GC1_main.jpg',
    cardImage: '/images/pet/GC1.png',
  },
  {
    id: 'NC1',
    numericId: 509,
    name: 'Когтерез-секатор для питомцев',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '299₽',
    image: '/images/pet/scene/NC1/NC1_main.jpg',
    cardImage: '/images/pet/NC1.png',
  },
  {
    id: 'DH1',
    numericId: 510,
    name: 'Шлейка для питомцев',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '2,499₽',
    image: '/images/pet/scene/DH1/DH1_main.jpg',
    cardImage: '/images/pet/DH1.png',
  },
  {
    id: 'TR1',
    numericId: 511,
    name: 'Поводок для питомцев',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '1,999₽',
    image: '/images/pet/scene/TR1/TR1_main.jpg',
    cardImage: '/images/pet/TR1.png',
  },
  {
    id: 'GB1',
    numericId: 512,
    name: 'Диспенсер пакетов для уборки за питомцем',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '349₽',
    image: '/images/pet/scene/GB1/GB1_main.jpg',
    cardImage: '/images/pet/GB1.png',
  },
  {
    id: 'Snail Car',
    numericId: 513,
    name: 'Игрушка для питомцев',
    description: '实时监测空气质量，智能提醒，历史数据分析',
    price: '1,999₽',
    image: '/images/pet/scene/Snail_Car/Snail_Car_main.jpg',
    cardImage: '/images/pet/Snail_Car.png',
  }
]; 