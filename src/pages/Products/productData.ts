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
  hair: '美发产品',
  pet: '宠物用品',
  sound: '声学',
  watch: '手表',
  invehicle: '车载用品',
  home: '主页产品'
};

// 模拟产品数据
export const productData: ProductData = {
  featured: [
    {
      id: 'featured-1',
      numericId: 1,
      name: '粉丝合集 BORK T782',
      description: '高效双面烤制，智能温控系统',
      price: '¥9,999',
      image: '/images/products/1.png',
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
      image: '/images/products/2.png',
      gallery: [
        {
          src: '/images/products/2.png',
          alt: '台扇 BORK P513 gg - 正面视图',
          caption: '现代简约设计，完美融入各种家居风格'
        },
        {
          src: '/images/products/5.png',
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
  ],
  news: [
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
  ],
  tools: [
    {
      id: 'tools-1',
      numericId: 201,
      name: '智能电动螺丝刀',
      description: '自动识别螺丝类型，精准调节扭矩',
      price: '¥599',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能电动螺丝刀',
      tag: '新品'
    },
    {
      id: 'tools-2',
      numericId: 202,
      name: '多功能电钻',
      description: '无刷电机，40V锂电池，持久耐用',
      price: '¥1,299',
      image: 'https://via.placeholder.com/400x300/333/fff?text=多功能电钻'
    },
    {
      id: 'tools-3',
      numericId: 203,
      name: '激光水平仪',
      description: '绿光技术，高精度自动校准，户内户外均可使用',
      price: '¥899',
      image: 'https://via.placeholder.com/400x300/333/fff?text=激光水平仪'
    },
    {
      id: 'tools-4',
      numericId: 204,
      name: '电动抛光机',
      description: '智能恒速控制，多种抛光头可更换',
      price: '¥799',
      image: 'https://via.placeholder.com/400x300/333/fff?text=电动抛光机'
    }
  ],
  scooter: [
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
  ],
  hair: [
    {
      id: 'hair-1',
      numericId: 401,
      name: '智能空调',
      description: '变频节能，远程控制，空气净化功能',
      price: '¥5,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能空调',
      gallery: [
        {
          src: 'https://via.placeholder.com/800x600/333/fff?text=智能空调-正面',
          alt: '智能空调-正面视图',
          caption: '简约现代设计，隐藏式显示屏'
        },
        {
          src: 'https://via.placeholder.com/800x600/333/fff?text=智能空调-侧面',
          alt: '智能空调-侧面视图',
          caption: '超薄机身设计，完美融入家居环境'
        },
        {
          src: 'https://via.placeholder.com/800x600/333/fff?text=智能空调-内部',
          alt: '智能空调-内部结构',
          caption: '高效变频压缩机，节能环保'
        },
        {
          src: 'https://via.placeholder.com/800x600/333/fff?text=智能空调-遥控器',
          alt: '智能空调-遥控器',
          caption: 'E-ink显示屏遥控器，低功耗长续航'
        }
      ],
      features: [
        '全直流变频技术，高效节能',
        '智能温控系统，精准控温至0.1℃',
        '内置空气净化功能，过滤PM2.5',
        '智能风向调节，避免直吹',
        '静音设计，低至18dB运行噪音',
        '远程控制，随时调节家中温度',
        '自清洁功能，防止细菌滋生'
      ],
      specifications: {
        '型号': 'ES-AC001',
        '尺寸': '900 × 300 × 195 毫米',
        '制冷量': '3500W',
        '制热量': '4200W',
        '能效等级': '一级能效',
        '适用面积': '15-25平方米',
        '噪音': '18-38dB',
        '制冷剂': 'R32环保冷媒',
        '控制方式': '触控/遥控/APP远程控制',
        '特殊功能': '空气净化、自清洁、除湿',
        '颜色': '象牙白',
        '保修': '5年压缩机，3年整机保修'
      }
    },
    {
      id: 'hair-2',
      numericId: 402,
      name: '智能窗帘',
      description: '自动感应，定时控制，静音电机',
      price: '¥1,599',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能窗帘'
    },
    {
      id: 'hair-3',
      numericId: 403,
      name: '智能门锁',
      description: '多种解锁方式，防盗报警，远程控制',
      price: '¥2,399',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能门锁'
    },
    {
      id: 'hair-4',
      numericId: 404,
      name: '智能扫地机器人',
      description: '激光导航，深度清洁，自动回充',
      price: '¥3,299',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能扫地机器人'
    }
  ],
  pet: [
    {
      id: 'pet-1',
      numericId: 501,
      name: '智能喂食器',
      description: '精准测量，多项身体数据分析，健康管理',
      price: '7,199₽',
      image: '/images/pet/GF1.png',
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
      image: '/images/pet/GW1.png'
    },
    {
      id: 'pet-3',
      numericId: 503,
      name: '宠物智能烘干箱',
      description: '全面监测睡眠质量，提供改善建议',
      price: '35,999₽',
      image: '/images/pet/PD1.png'
    },
    {
      id: 'pet-4',
      numericId: 504,
      name: '宠物智能厕所',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '34,999₽',
      image: '/images/pet/CT1.png'
    },
    {
      id: 'pet-5',
      numericId: 505,
      name: '宠物毛发洗护套装',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '14,999₽',
      image: '/images/pet/NM1.png'
    },
    {
      id: 'pet-6',
      numericId: 506,
      name: '宠物电动梳毛器',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '8,999₽',
      image: '/images/pet/PC1.png'
    },
    {
      id: 'pet-7',
      numericId: 507,
      name: '宠物电动剃毛器',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '2,899₽',
      image: '/images/pet/GS1.png'
    },
    {
      id: 'pet-8',
      numericId: 508,
      name: '宠物手动梳毛器',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '699₽',
      image: '/images/pet/GC1.png'
    },
    {
      id: 'pet-9',
      numericId: 509,
      name: '宠物指甲剪',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '299₽',
      image: '/images/pet/NC1.png'
    },
    {
      id: 'pet-10',
      numericId: 510,
      name: '宠物牵引背带',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '2,499₽',
      image: '/images/pet/DH1.png'
    },
    {
      id: 'pet-11',
      numericId: 511,
      name: '宠物牵引绳',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '1,999₽',
      image: '/images/pet/TR1.png'
    },
    {
      id: 'pet-12',
      numericId: 512,
      name: '宠物粪便垃圾袋',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '349₽',
      image: '/images/pet/GB1.png'
    },
    {
      id: 'pet-13',
      numericId: 513,
      name: '宠物遥控玩具',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '1,999₽',
      image: '/images/pet/Snail_Car.png'
    }
  ],
  sound: [
    {
      id: 'sound-1',
      numericId: 601,
      name: '智能扫地机器人',
      description: '激光导航，智能规划路径，自动回充',
      price: '¥2,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能扫地机器人'
    },
    {
      id: 'sound-2',
      numericId: 602,
      name: '洗碗机',
      description: '大容量，低噪音，高温除菌',
      price: '¥4,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=洗碗机'
    },
    {
      id: 'sound-3',
      numericId: 603,
      name: '智能洗衣机',
      description: '变频电机，智能投放洗涤剂，APP远程控制',
      price: '¥3,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能洗衣机'
    },
    {
      id: 'sound-4',
      numericId: 604,
      name: '垃圾处理器',
      description: '强力粉碎，静音设计，抗菌材质',
      price: '¥1,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=垃圾处理器'
    }
  ],
  watch: [
    {
      id: 'watch-1',
      numericId: 701,
      name: 'EtherSpark智能家居套装',
      description: '全套智能家居解决方案，一键控制全屋设备',
      price: '¥9,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能家居套装'
    },
    {
      id: 'watch-2',
      numericId: 702,
      name: '智能厨房套装',
      description: '厨房设备智能化解决方案，提升烹饪体验',
      price: '¥7,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能厨房套装'
    },
    {
      id: 'watch-3',
      numericId: 703,
      name: '智能卧室套装',
      description: '营造舒适睡眠环境，智能调节光线和温度',
      price: '¥5,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能卧室套装'
    },
    {
      id: 'watch-4',
      numericId: 704,
      name: '智能办公套装',
      description: '提升办公效率，创造舒适办公环境',
      price: '¥6,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能办公套装'
    }
  ],
  invehicle: [
    {
      id: 'invehicle-1',
      numericId: 801,
      name: '车载空气净化器',
      description: '高效过滤车内空气污染物，降低甲醛浓度',
      price: '¥999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=车载空气净化器'
    },
    {
      id: 'invehicle-2',
      numericId: 802,
      name: '车载冰箱',
      description: '快速制冷，静音设计，大容量收纳',
      price: '¥1,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=车载冰箱'
    },
    {
      id: 'invehicle-3',
      numericId: 803,
      name: '车载咖啡机',
      description: '便携设计，快速制作咖啡，多种口味选择',
      price: '¥899',
      image: 'https://via.placeholder.com/400x300/333/fff?text=车载咖啡机'
    },
    {
      id: 'invehicle-4',
      numericId: 804,
      name: '车载吸尘器',
      description: '强大吸力，无线设计，方便清洁车内卫生',
      price: '¥599',
      image: 'https://via.placeholder.com/400x300/333/fff?text=车载吸尘器'
    }
  ],
  home: [
    {
      id: 'home-1',
      numericId: 1,
      name: '粉丝合集 BORK T782',
      description: '高效双面烤制，智能温控系统',
      price: '¥9,999',
      image: '/images/products/1.png',
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
      image: '/images/products/2.png',
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
      image: '/images/products/5.png',
      tag: '即将上市'
    },
    {
      id: 'home-4',
      numericId: 4,
      name: '空气净化加湿器 BORK A802 RAIN',
      description: '高效净化，智能加湿，静音设计',
      price: '36,720元',
      image: '/images/products/7.png'
    },
    {
      id: 'home-5',
      numericId: 5,
      name: '加湿器 BORK H503',
      description: '大容量水箱，智能湿度控制',
      price: '24,000元',
      image: '/images/products/humidifier.png',
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
      image: '/images/products/speaker.png'
    },
    {
      id: 'home-7',
      numericId: 7,
      name: '自主空气清洁站 BORK V850',
      description: '高效过滤，智能控制，静音设计',
      price: '29,760元',
      image: '/images/products/air-cleaner.png'
    }
  ],
};

// 为featured产品添加颜色选项
productData.featured[0].colorOptions = [
  { color: '#E2DFDA', name: '米白色' },
  { color: '#544F45', name: '深灰色' },
  { color: '#9A8678', name: '棕色' }
];

productData.featured[1].colorOptions = [
  { color: '#1A1A1A', name: '黑色' },
  { color: '#FFFFFF', name: '白色' }
];

// 添加主页产品数据
productData.home = [
  {
    id: 'home-1',
    numericId: 1,
    name: '粉丝合集 BORK T782',
    description: '高效双面烤制，智能温控系统',
    price: '¥9,999',
    image: '/images/products/1.png',
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
    image: '/images/products/2.png',
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
    image: '/images/products/5.png',
    tag: '即将上市'
  },
  {
    id: 'home-4',
    numericId: 4,
    name: '空气净化加湿器 BORK A802 RAIN',
    description: '高效净化，智能加湿，静音设计',
    price: '36,720元',
    image: '/images/products/7.png'
  },
  {
    id: 'home-5',
    numericId: 5,
    name: '加湿器 BORK H503',
    description: '大容量水箱，智能湿度控制',
    price: '24,000元',
    image: '/images/products/humidifier.png',
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
    image: '/images/products/speaker.png'
  },
  {
    id: 'home-7',
    numericId: 7,
    name: '自主空气清洁站 BORK V850',
    description: '高效过滤，智能控制，静音设计',
    price: '29,760元',
    image: '/images/products/air-cleaner.png'
  }
]; 