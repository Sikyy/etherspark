export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  gallery?: ProductImage[];
  features?: string[];
  specifications?: Record<string, string>;
}

export interface ProductImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProductData {
  [key: string]: Product[];
}

// 模拟产品数据
export const productData: ProductData = {
  news: [
    {
      id: 'news-1',
      name: '智能家居控制中心',
      description: '全方位智能家居管理系统，支持多种设备连接',
      price: '¥2,999',
      image: '/images/products/1.png',
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
      name: '空气净化系统',
      description: '高效过滤PM2.5，杀菌除味，智能监测空气质量',
      price: '¥3,499',
      image: 'https://via.placeholder.com/400x300/333/fff?text=空气净化系统',
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
      name: '全自动咖啡机',
      description: '智能研磨，精准控温，多种咖啡模式一键制作',
      price: '¥5,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=全自动咖啡机'
    },
    {
      id: 'news-5',
      name: '全自动咖啡机-2',
      description: '智能研磨，精准控温，多种咖啡模式一键制作',
      price: '¥5,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=全自动咖啡机'
    }
  ],
  tools: [
    {
      id: 'tools-1',
      name: '智能手表礼盒',
      description: '高精度健康监测，长续航，多种表盘可选',
      price: '¥2,499',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能手表礼盒'
    },
    {
      id: 'tools-2',
      name: '便携式投影仪',
      description: '高清画质，智能对焦，内置扬声器',
      price: '¥3,299',
      image: 'https://via.placeholder.com/400x300/333/fff?text=便携式投影仪'
    },
    {
      id: 'tools-3',
      name: '多功能按摩椅',
      description: '全身按摩，热敷功能，智能定制按摩方案',
      price: '¥8,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=多功能按摩椅'
    },
    {
      id: 'tools-4',
      name: '智能厨房秤',
      description: '精准测量，多种单位转换，食谱推荐',
      price: '¥399',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能厨房秤'
    }
  ],
  scooter: [
    {
      id: 'scooter-1',
      name: '智能烤箱',
      description: '精准温控，多种烹饪模式，远程控制',
      price: '¥4,599',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能烤箱',
      gallery: [
        {
          src: 'https://via.placeholder.com/800x600/333/fff?text=智能烤箱-正面',
          alt: '智能烤箱-正面视图',
          caption: '大容量设计，触控操作面板'
        },
        {
          src: 'https://via.placeholder.com/800x600/333/fff?text=智能烤箱-内部',
          alt: '智能烤箱-内部视图',
          caption: '多层烤架设计，均匀受热'
        },
        {
          src: 'https://via.placeholder.com/800x600/333/fff?text=智能烤箱-控制面板',
          alt: '智能烤箱-控制面板特写',
          caption: '高清触控显示屏，直观操作界面'
        },
        {
          src: 'https://via.placeholder.com/800x600/333/fff?text=智能烤箱-烹饪效果',
          alt: '智能烤箱-烹饪效果',
          caption: '完美烘焙效果，色香味俱全'
        }
      ],
      features: [
        '40升大容量，满足多种烹饪需求',
        '精准温控系统，温差控制在±1℃',
        '14种烹饪模式，一键切换',
        'AI智能识别食材，自动推荐烹饪程序',
        '远程控制功能，手机APP实时监控烹饪过程',
        '内置食谱库，300+精选菜谱'
      ],
      specifications: {
        '型号': 'ES-SO001',
        '尺寸': '590 × 450 × 400 毫米',
        '容量': '40升',
        '重量': '15千克',
        '额定功率': '2000W',
        '温控范围': '30-250℃',
        '定时范围': '1-120分钟',
        '烹饪模式': '14种',
        '控制方式': '触控屏/APP远程控制',
        '电源': 'AC 220V',
        '颜色': '银灰色',
        '保修': '3年全球联保'
      }
    },
    {
      id: 'scooter-2',
      name: '高速破壁机',
      description: '强劲马达，多功能搅拌，智能程序控制',
      price: '¥2,799',
      image: 'https://via.placeholder.com/400x300/333/fff?text=高速破壁机'
    },
    {
      id: 'scooter-3',
      name: '智能电饭煲',
      description: 'IH加热技术，智能控温，多种煮饭模式',
      price: '¥1,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能电饭煲'
    },
    {
      id: 'scooter-4',
      name: '冷萃咖啡机',
      description: '精准控温，定时浸泡，保留咖啡原香',
      price: '¥899',
      image: 'https://via.placeholder.com/400x300/333/fff?text=冷萃咖啡机'
    }
  ],
  hair: [
    {
      id: 'hair-1',
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
      name: '智能窗帘',
      description: '自动感应，定时控制，静音电机',
      price: '¥1,599',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能窗帘'
    },
    {
      id: 'hair-3',
      name: '智能门锁',
      description: '多种解锁方式，防盗报警，远程控制',
      price: '¥2,399',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能门锁'
    },
    {
      id: 'hair-4',
      name: '智能扫地机器人',
      description: '激光导航，深度清洁，自动回充',
      price: '¥3,299',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能扫地机器人'
    }
  ],
  pet: [
    {
      id: 'pet-1',
      name: '智能体脂秤',
      description: '精准测量，多项身体数据分析，健康管理',
      price: '¥599',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能体脂秤'
    },
    {
      id: 'pet-2',
      name: '智能按摩器',
      description: '多种按摩模式，热敷功能，智能控制',
      price: '¥1,299',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能按摩器'
    },
    {
      id: 'pet-3',
      name: '智能睡眠监测仪',
      description: '全面监测睡眠质量，提供改善建议',
      price: '¥899',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能睡眠监测仪'
    },
    {
      id: 'pet-4',
      name: '空气质量检测仪',
      description: '实时监测空气质量，智能提醒，历史数据分析',
      price: '¥799',
      image: 'https://via.placeholder.com/400x300/333/fff?text=空气质量检测仪'
    }
  ],
  sound: [
    {
      id: 'sound-1',
      name: '便携式净水器',
      description: '高效过滤，便携设计，长效使用',
      price: '¥699',
      image: 'https://via.placeholder.com/400x300/333/fff?text=便携式净水器'
    },
    {
      id: 'sound-2',
      name: '智能登山背包',
      description: '防水材质，智能定位，太阳能充电',
      price: '¥1,499',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能登山背包'
    },
    {
      id: 'sound-3',
      name: '便携式烧烤炉',
      description: '高效加热，易于清洁，便携设计',
      price: '¥899',
      image: 'https://via.placeholder.com/400x300/333/fff?text=便携式烧烤炉'
    },
    {
      id: 'sound-4',
      name: '智能保温杯',
      description: '长效保温，温度显示，智能提醒饮水',
      price: '¥399',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能保温杯'
    }
  ],
  'watch': [
    {
      id: 'watch-1',
      name: 'EtherSpark智能家居套装',
      description: '全套智能家居解决方案，一键控制全屋设备',
      price: '¥9,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能家居套装'
    },
    {
      id: 'watch-2',
      name: '智能厨房套装',
      description: '厨房设备智能化解决方案，提升烹饪体验',
      price: '¥7,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能厨房套装'
    },
    {
      id: 'watch-3',
      name: '智能卧室套装',
      description: '营造舒适睡眠环境，智能调节光线和温度',
      price: '¥5,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能卧室套装'
    },
    {
      id: 'watch-4',
      name: '智能办公套装',
      description: '提升办公效率，创造舒适办公环境',
      price: '¥6,999',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能办公套装'
    }
  ],
  invehicle: [
    {
      id: 'invehicle-1',
      name: '便携式翻译机',
      description: '实时翻译，支持多种语言，离线使用',
      price: '¥1,299',
      image: 'https://via.placeholder.com/400x300/333/fff?text=便携式翻译机'
    },
    {
      id: 'invehicle-2',
      name: '智能旅行箱',
      description: '指纹解锁，GPS定位，内置电子秤',
      price: '¥2,499',
      image: 'https://via.placeholder.com/400x300/333/fff?text=智能旅行箱'
    },
    {
      id: 'invehicle-3',
      name: '便携式蓝牙音箱',
      description: '高品质音效，防水设计，长效电池',
      price: '¥899',
      image: 'https://via.placeholder.com/400x300/333/fff?text=便携式蓝牙音箱'
    },
    {
      id: 'invehicle-4',
      name: '旅行适配器',
      description: '全球通用，多口输出，智能识别电压',
      price: '¥299',
      image: 'https://via.placeholder.com/400x300/333/fff?text=旅行适配器'
    }
  ],
};

// 分类名称映射
export const categoryTitles: Record<string, string> = {
  news: '新品',
  tools: '工具',
  scooter: '电动滑板车',
  hair: '美发产品',
  pet: '宠物用品',
  sound: '声学',
  watch: '手表',
  invehicle: '车载用品'
}; 