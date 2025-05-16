import { Product } from './types';

export const newsProducts: Product[] = [
  {
    id: 'news-1',
    numericId: 101,
    name: '智能家居控制中心',
    description: '全方位智能家居管理系统，支持多种设备连接',
    price: '¥2,999',
    image: '/images/products/1.png',
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
    id: 'news-2',
    numericId: 102,
    name: '空气净化系统',
    description: '高效过滤PM2.5，杀菌除味，智能监测空气质量',
    price: '¥3,499',
    image: '/images/products/5.png',
    gallery: [
      {
        src: 'https://via.placeholder.com/800x600/333/fff?text=空气净化系统-正面',
        alt: '空气净化系统-正面视图',
        caption: '简约现代设计，触摸控制面板'
      },
      {
        src: 'https://via.placeholder.com/800x600/333/fff?text=空气净化系统-侧面',
        alt: '空气净化系统-侧面视图',
        caption: '360°进风口设计，提高净化效率'
      },
      {
        src: 'https://via.placeholder.com/800x600/333/fff?text=空气净化系统-滤网',
        alt: '空气净化系统-滤网特写',
        caption: 'H13级HEPA滤网，有效过滤99.97%的微粒'
      },
      {
        src: 'https://via.placeholder.com/800x600/333/fff?text=空气净化系统-使用场景',
        alt: '空气净化系统-使用场景',
        caption: '适用于客厅、卧室等多种场景，提供清新空气'
      }
    ],
    features: [
      '高效H13级HEPA滤网，过滤率达99.97%',
      '活性炭滤网，有效去除异味和有害气体',
      '智能空气质量监测，实时显示PM2.5数值',
      '超静音设计，睡眠模式下仅25dB',
      '手机APP远程控制，随时查看空气质量',
      '滤网更换提醒，确保净化效果'
    ],
    specifications: {
      '重量': '8.5 千克',
      '电压': '220 伏',
      '功率': '45 瓦',
      'CADR值': '450 立方米/小时',
      '噪音': '25-55 分贝'
    }
  },
  {
    id: 'news-3',
    numericId: 103,
    name: '智能音响系统',
    description: '360°环绕音效，智能语音控制，多房间同步播放',
    price: '¥4,299',
    image: 'https://via.placeholder.com/400x300/333/fff?text=智能音响系统',
    gallery: [
      {
        src: 'https://via.placeholder.com/800x600/333/fff?text=智能音响系统-正面',
        alt: '智能音响系统-正面视图',
        caption: '圆柱形设计，360°环绕音效'
      },
      {
        src: 'https://via.placeholder.com/800x600/333/fff?text=智能音响系统-顶部',
        alt: '智能音响系统-顶部视图',
        caption: '触摸控制面板，轻松调节音量和播放模式'
      },
      {
        src: 'https://via.placeholder.com/800x600/333/fff?text=智能音响系统-接口',
        alt: '智能音响系统-接口视图',
        caption: '丰富的接口，支持多种连接方式'
      }
    ],
    features: [
      '360°环绕立体声，8单元扬声器设计',
      '智能语音控制，支持多种语言',
      '多房间音频同步，打造全屋音乐体验',
      '自适应音频技术，根据房间声学特性调整音效',
      '高保真音质，支持24bit/96kHz高清音频',
      '内置流媒体服务，支持多种音乐平台'
    ],
    specifications: {
      '重量': '4.5 千克',
      '电压': '100-240 伏',
      '功率': '100 瓦',
      '频率响应': '30-20k 赫兹',
      '扬声器单元': '8 单元'
    }
  },
  {
    id: 'news-4',
    numericId: 104,
    name: '全自动咖啡机',
    description: '智能研磨，精准控温，多种咖啡模式一键制作',
    price: '¥5,999',
    image: 'https://via.placeholder.com/400x300/333/fff?text=全自动咖啡机'
  },
  {
    id: 'news-5',
    numericId: 105,
    name: '全自动咖啡机-2',
    description: '智能研磨，精准控温，多种咖啡模式一键制作',
    price: '¥5,999',
    image: 'https://via.placeholder.com/400x300/333/fff?text=全自动咖啡机'
  }
]; 