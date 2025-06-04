import { Product } from './types';

export const scooterProducts: Product[] = [
  {
    id: 'S2',
    numericId: 301,
    name: '电动滑板车 S2',
    description: '',
    price: '69,999₽',
    image: '/images/scooter/scene/S2/S2-main.png',
    cardImage: '/images/scooter/S2.png',
    gallery: [
      {
        src: '/images/scooter/scene/S2/S2场景图1.jpg',
      },
      {
        src: '/images/scooter/scene/S2/S2场景图2.png',
      },
      {
        src: '/images/scooter/scene/S2/S2场景图3.png',
      }
    ],
    features: [
        "全铝合金车身，轻便强度高，具备很好的耐用性和抗腐蚀性",
        "全新升级电控算法，精准调节电力输出，动力到位，爬坡带劲。500w电机最高时速30km/h，最大爬坡角度可达15°",
        "全新升级设计，仅需3秒轻松折叠，便携出行，前后减震系统，高效滤震，平复颠簸"
      ],
    specifications: {
        "产品尺寸": "116.7*47.2*120.3cm",
        "产品净重": "23kg",
        "主要材质": "铝合金",
        "电池容量": "10.4Ah",
        "轮胎": "10'",
        "最大承重": "120kg",
        "电机": "500W",
        "最高时速": "30km/h",
        "最大续程里航": "40km"
      }
  },
  {
    id: 'A2',
    numericId: 302,
    name: '异形滑板车 A2',
    description: '',
    price: '167,999₽',
    image: '/images/scooter/scene/A2/A2备.png',
    cardImage: '/images/scooter/A2.png',
    gallery: [
      {
        src: '/images/scooter/scene/A2/A2场景图1.jpg',
      },
      {
        src: '/images/scooter/scene/A2/A2场景图2.png',
      },
      {
        src: '/images/scooter/scene/A2/A2场景图3.png',
      },
      {
        src: '/images/scooter/scene/A2/A2场景图4.png',
      }
    ],
    features: [
        "高辨识度设计，颠覆常规的视觉符号，大前轮稳健如磐，小后轮灵动如刃",
        "适用各种复杂路况，通勤场景，颜色可定制",
        "LCD屏幕，按键式便捷操作，三档速度可调",
        "双减震，油碟刹，越野轮胎，锂离子电池，保障安全出行"
      ],
    specifications: {
        "产品尺寸": "205*63.5*123cm",
        "产品净重": "35.9kg",
        "主要材质": "加强型铁车架",
        "电池容量": "20Ah",
        "轮胎": "前26', 后20'",
        "最大承重": "125kg",
        "电机": "750W",
        "最高时速": "40km/h",
        "最大续程里航": "100km"
      }
  }
]; 