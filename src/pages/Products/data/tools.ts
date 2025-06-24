import { Product } from './types';

export const toolsProducts: Product[] = [
  {
    id: 'TH1',
    numericId: 201,
    name: '激光投线测距仪',
    description: '自动识别螺丝类型，精准调节扭矩',
    price: '1,499₽',
    image: '/images/tools/scene/TH1/TH1_main.jpg',
    cardImage: '/images/tools/TH1.png',
    tag: '新品',
    gallery: [
      {
        src: '/images/tools/scene/TH1/TH1场景图1.jpg',
      },
      {
        src: '/images/tools/scene/TH1/TH1场景图2.jpg',
      },
      {
        src: '/images/tools/scene/TH1/TH1场景图3.jpg',
      },
      {
        src: '/images/tools/scene/TH1/TH1场景图4.jpg',
      },
      {
        src: '/images/tools/scene/TH1/TH1场景图5.jpg',
      }
    ],
    features: [
        "大屏显示，数据清晰易读",
        "超灵敏感应，精准检测",
        "大容量锂电池，持久续航",
        "断电时间记忆，无需重复设置",
        "多种使用方式，可磁吸、可粘贴、可站立"
      ],
    specifications: {
        '产品尺寸': '86*86*13.3mm',
        '产品净重' : '75g',
        '主要材质': '尼龙 + ABS',
        "温度范围": "-9.9～60℃（14～140°F）",
        "湿度范围": "10%～99%RH",
        "分辨率": "0.1℃ / 1%RH",
        "刷新频率": "60秒 / 次",
        "电池容量": "450mAh",
        "充电接口": "Type-c"
    }
  },
  {
    id: 'LR1',
    numericId: 202,
    name: 'Лазерный дальномер',
    description: '无刷电机，40V锂电池，持久耐用',
    price: '5,699₽',
    image: '/images/tools/scene/LR1/LR1主图.jpg',
    cardImage: '/images/tools/LR1.png',
    gallery: [
      {
        src: '/images/tools/scene/LR1/LR1场景图1.jpg',
      },
      {
        src: '/images/tools/scene/LR1/LR1场景图2.jpg',
      },
      {
        src: '/images/tools/scene/LR1/LR1场景图3.jpg',
      },
      {
        src: '/images/tools/scene/LR1/LR1场景图4.jpg',
      }
    ],
    features: [
        "彩色屏显，读数更清晰",
        "测距、投线、角度，功能三合一",
        "大容量锂电池，持久续航",
        "全铝金属机身，精工质感",
        "整机小巧，携带方便"
      ],
    "specifications": {
        "产品尺寸": "100*33.5*16.5mm",
        "产品净重": "62g",
        "主要材质": "铝合金",
        "测量范围": "0～40m",
        "测量精度": "±2mm",
        "单位": "0m / in / ft",
        "电池容量": "480mAh",
        "充电接口": "Type-c"
      }
  },
  {
    id: 'FR1',
    numericId: 203,
    name: '柔性电子尺',
    description: '绿光技术，高精度自动校准，户内户外均可使用',
    price: '1,799₽',
    image: '/images/tools/scene/FR1/FR1_main.jpg',
    cardImage: '/images/tools/FR1.png',
    gallery: [
      {
        src: '/images/tools/scene/FR1/FR1场景图1.jpg',
      },
      {
        src: '/images/tools/scene/FR1/FR1场景图2.jpg',
      },
      {
        src: '/images/tools/scene/FR1/FR1场景图3.jpg',
      },
      {
        src: '/images/tools/scene/FR1/FR1场景图4.jpg',
      },
      {
        src: '/images/tools/scene/FR1/FR1场景图5.jpg',
      }
    ],
    features: [
        "多场景适用，曲面也能测",
        "滚轮式测量，实时数据显示",
        "99.9米长距测量，0.5%精度误差",
        "大容量锂电池，180天超长待机",
        "历史记录查询，不错过重要数据",
        "小巧圆润，易于携带"
      ],
    specifications: {
        "产品尺寸": "114*50*25mm",
        "产品净重": "31g",
        "主要材质": "ABS",
        "测量范围": "0～99m",
        "测量精度": "±0.5%，支持校准",
        "单位": "m / in / ft",
        "电池容量": "480mAh",
        "充电接口": "Type-c"
      }
  },
  {
    id: 'IP1',
    numericId: 204,
    name: 'Индукционная ручка',
    description: '智能恒速控制，多种抛光头可更换',
    price: '799₽',
    image: '/images/tools/scene/IP1/IP1主图.jpg',
    cardImage: '/images/tools/IP1.png',
    gallery: [
      {
        src: '/images/tools/scene/IP1/IP1场景图1.jpg',
      },
      {
        src: '/images/tools/scene/IP1/IP1场景图2.jpg',
      },
      {
        src: '/images/tools/scene/IP1/IP1场景图3.jpg',
      },
      {
        src: '/images/tools/scene/IP1/IP1场景图4.jpg',
      },
      {
        src: '/images/tools/scene/IP1/IP1场景图5.jpg',
      }
    ],
    features: [
        "非接触检测，绝缘排查更安全",
        "智能零火线识别，声、光双重报警",
        "纯铜感应管，更灵敏、少误报",
        "独立按键，一键轻松查电",
        "笔式设计，小巧袖珍",
        "超低功耗，持久检测"
      ],
    specifications: {
        "产品尺寸": "148*18*18mm",
        "产品净重": "19g",
        "主要材质": "PC、ABS",
        "检测电压": "100～380V AC",
        "频率": "50 / 60Hz",
        "报警方式": "声音和灯光报警",
        "工作温度": "0～40℃",
        "电池规格": "AG13纽扣电池"
      }

  },
  {
    id: 'WP1',
    numericId: 205,
    name: 'Ручка для проверки качества воды',
    description: '绿光技术，高精度自动校准，户内户外均可使用',
    price: '899₽',
    image: '/images/tools/scene/WP1/WP1主图.jpg',
    cardImage: '/images/tools/WP1.png',
    gallery: [
      {
        src: '/images/tools/scene/WP1/WP1场景图1.jpg',
        alt: '智能家居控制中心-正面视图',
        caption: '简约现代的设计，触摸屏控制面板'
      },
      {
        src: '/images/tools/scene/WP1/WP1场景图2.jpg',
        alt: '智能家居控制中心-侧面视图',
        caption: '超薄机身设计，易于安装在墙面'
      },
      {
        src: '/images/tools/scene/WP1/WP1场景图3.jpg',
        alt: '智能家居控制中心-背面视图',
        caption: '多接口设计，支持各类智能设备连接'
      },
      {
        src: '/images/tools/scene/WP1/WP1场景图4.jpg',
        alt: '智能家居控制中心-使用场景',
        caption: '一键控制全屋智能设备，提升生活品质'
      }
    ],
    features: [
        "即测即显，放心用水",
        "钛合金灵敏探头，更快更准",
        "可检测水中三类杂质：重金属离子、离子型有机物、可溶性盐类",
        "TDS / 温度多功能检测和显示",
        "笔式设计，随心检测"
      ],
    specifications: {
        "产品尺寸": "150*ø16mm",
        "产品净重": "28g",
        "主要材质": "ABS",
        "测量范围": "0～4990PPM（mg/L）",
        "测量精度": "±10%F.S.",
        "分辨率": "1PPM",
        "温度范围": "0～60℃",
        "电池规格": "LR44纽扣电池"
      }
  },
  {
    id: 'ES1',
    numericId: 206,
    name: 'Электрическая отвёртка',
    description: '绿光技术，高精度自动校准，户内户外均可使用',
    price: '3,499₽',
    image: '/images/tools/scene/ES1/ES1主图.jpg',
    cardImage: '/images/tools/ES1.png',
    gallery: [
      {
        src: '/images/tools/scene/ES1/ES1场景图1.jpg',
      },
      {
        src: '/images/tools/scene/ES1/ES1场景图2.jpg',
      },
      {
        src: '/images/tools/scene/ES1/ES1场景图3.jpg',
      },
      {
        src: '/images/tools/scene/ES1/ES1场景图4.jpg',
      }
    ],
    features: [
        "正反转设计，一键启动",
        "210转每分钟，高转速，不费力",
        "10大类、25颗批头，匹配95%家庭工况",
        "磁吸收纳盒，取用方便",
        "大容量锂电池，一次可拧350颗螺丝",
        "手自一体，轻易便携"
      ],
    specifications: {
        "产品尺寸": "194*80*28mm",
        "手柄尺寸": "167*ø20mm",
        "产品净重": "309g",
        "主要材质": "S2合金钢",
        "额定电压": "3.7V",
        "电动扭矩": "0.2N-m",
        "空载转速": "210r / min",
        "电池容量": "300mAh",
        "电池规格": "Type-c"
      }
  },
  {
    id: 'EB1',
    numericId: 207,
    name: 'Электрический полировщик',
    description: '绿光技术，高精度自动校准，户内户外均可使用',
    price: '7,199₽',
    image: '/images/tools/scene/EB1/EB1主图.jpg',
    cardImage: '/images/tools/EB1.png',
    gallery: [
      {
        src: '/images/tools/scene/EB1/EB1场景图1.jpg',
      },
      {
        src: '/images/tools/scene/EB1/EB1场景图2.jpg',
      },
      {
        src: '/images/tools/scene/EB1/EB1场景图3.jpg',
      },
      {
        src: '/images/tools/scene/EB1/EB1场景图4.jpg',
      }
    ],
    features: [
        "高能动力电机，超大扭矩",
        "大容量锂电池，50分钟高速空载续航",
        "42种常用磨头配件，5档转速调节，满足不同操作的需求",
        "高精密转动轴承，一键锁紧，稳定不抖",
        "高效散热风道设计，快速降温，不易烧机",
        "航空铝合金坚固机身，握感舒适，轻易便携"
      ],
    specifications: {
        "产品尺寸": "250*97*45mm",
        "手柄尺寸": "207*ø37mm",
        "产品净重": "260g",
        "主要材质": "铝合金",
        "转速": "5档 10000～28000r/min",
        "电机电压": "7.2V",
        "电池容量": "1100mAh",
        "充电接口": "Type-c"
      }
  },
  {
    id: 'SI1',
    numericId: 208,
    name: 'Портативный электрический паяльник',
    description: '绿光技术，高精度自动校准，户内户外均可使用',
    price: '3,899₽',
    image: '/images/tools/scene/SI1/SI1主图.jpg',
    cardImage: '/images/tools/SI1.png',
    gallery: [
      {
        src: '/images/tools/scene/SI1/SI1场景图1.jpg',
      },
      {
        src: '/images/tools/scene/SI1/SI1场景图2.jpg',
      },
      {
        src: '/images/tools/scene/SI1/SI1场景图3.jpg',
      },
      {
        src: '/images/tools/scene/SI1/SI1场景图4.jpg',
      }
    ],
    features: [
        "65W高功率，8S迅速升温",
        "PID精准控温",
        "PD / QC协议，支持丰富供电方式",
        "10000次插拔测试，超长寿命",
        "全铝金属机身，精工质感"
      ],
    specifications: {
        "产品尺寸": "170*17.5*14mm",
        "产品净重": "37g",
        "主要材质": "铝合金",
        "工作电压": "9～20V",
        "加热功率": "65W",
        "控温范围": "80～420℃",
        "温度精度": "±1%℃ 支持±50℃ 手动校准",
        "充电接口": "Type-c",
        "快充协议": "PD / QC"
      }
  },
  {
    id: 'PI1',
    numericId: 209,
    name: '等离子点火笔',
    description: '绿光技术，高精度自动校准，户内户外均可使用',
    price: '1,499₽',
    image: '/images/tools/scene/PI1/PI1主图.jpg',
    cardImage: '/images/tools/PI1.png',
    gallery: [
      {
        src: '/images/tools/scene/PI1/PI1场景图1.jpg',
      },
      {
        src: '/images/tools/scene/PI1/PI1场景图2.jpg',
      },
      {
        src: '/images/tools/scene/PI1/PI1场景图3.jpg',
      },
      {
        src: '/images/tools/scene/PI1/PI1场景图4.jpg',
      }
    ],
    features: [
        "等离子点火，无气、无油、无明火",
        "加长手柄设计，点火更安全",
        "双保险开关，防误触",
        "可视化电量，一目了然",
        "全铝金属机身，经久耐用"
      ],
    specifications: {
        "产品尺寸": "157*19*13mm",
        "产品净重": "59g",
        "主要材质": "铝合金",
        "电池容量": "1.1Wh",
        "充电接口": "Type-c"
      }
  },
  {
    id: 'MF1',
    numericId: 210,
    name: '多功能手电筒',
    description: '绿光技术，高精度自动校准，户内户外均可使用',
    price: '3,399₽',
    image: '/images/tools/scene/MF1/MF1主图.jpg',
    cardImage: '/images/tools/MF1.png',
    gallery: [
      {
        src: '/images/tools/scene/MF1/MF1场景图1.jpg',
      },
      {
        src: '/images/tools/scene/MF1/MF1场景图2.jpg',
      },
      {
        src: '/images/tools/scene/MF1/MF1场景图3.jpg',
      },
      {
        src: '/images/tools/scene/MF1/MF1场景图4.jpg',
      }
    ],
    features: [
        "7档灯光模式，一键切换",
        "大容量锂电池，3.5小时强光续航，43小时弱光续航",
        "15°光源设计，轻松照明",
        "全铝合金外壳，坚固耐用",
        "防水防尘设计，户外无忧",
        "可视化电量提醒",
        "背部强磁，稳定吸附不掉落"
      ],
    "specifications": {
        "产品尺寸": "131*36.8*23mm",
        "产品净重": "150.5g",
        "主要材质": "铝合金",
        "额定功率": "2W",
        "流明": "270",
        "电池容量": "2150mAh",
        "充电接口": "Type-c"
      }
  },
  {
    id: 'S1',
    numericId: 211,
    name: '多功能螺丝刀',
    description: '绿光技术，高精度自动校准，户内户外均可使用',
    price: '1,399₽',
    image: '/images/tools/scene/S1/S1主图.jpg',
    cardImage: '/images/tools/S1.png',
    gallery: [
      {
        src: '/images/tools/scene/S1/S1场景图1.jpg',
        alt: '智能家居控制中心-正面视图',
        caption: '简约现代的设计，触摸屏控制面板'
      },
      {
        src: '/images/tools/scene/S1/S1场景图2.jpg',
        alt: '智能家居控制中心-侧面视图',
        caption: '超薄机身设计，易于安装在墙面'
      },
      {
        src: '/images/tools/scene/S1/S1场景图3.jpg',
        alt: '智能家居控制中心-背面视图',
        caption: '多接口设计，支持各类智能设备连接'
      },
      {
        src: '/images/tools/scene/S1/S1场景图4.jpg',
        alt: '智能家居控制中心-使用场景',
        caption: '一键控制全屋智能设备，提升生活品质'
      }
    ],
    "features": [
        "一体设计，取用方便",
        "强磁吸附，一盒收纳 ",
        "5个常用批头，1个延长杆",
        "S2合金钢批头，硬度高、韧性好",
        "轻巧设计，迷你便捷"
      ],
      specifications: {
        "产品尺寸": "98*33*29mm",
        "产品净重": "179g",
        "批头材质": "S2合金钢",
        "外壳材质": "锌合金、铝合金"
      }
  },
  {
    id: 'R1',
    numericId: 212,
    name: 'Многофункциональный рычажный инструмент',
    description: '绿光技术，高精度自动校准，户内户外均可使用',
    price: '2,099₽',
    image: '/images/tools/scene/R1/R1主图.jpg',
    cardImage: '/images/tools/R1.png',
    gallery: [
      {
        src: '/images/tools/scene/R1/R1场景图1.jpg',
        alt: '智能家居控制中心-正面视图',
        caption: '简约现代的设计，触摸屏控制面板'
      },
      {
        src: '/images/tools/scene/R1/R1场景图2.jpg',
        alt: '智能家居控制中心-侧面视图',
        caption: '超薄机身设计，易于安装在墙面'
      },
      {
        src: '/images/tools/scene/R1/R1场景图3.jpg',
        alt: '智能家居控制中心-背面视图',
        caption: '多接口设计，支持各类智能设备连接'
      },
      {
        src: '/images/tools/scene/R1/R1场景图4.jpg',
        alt: '智能家居控制中心-使用场景',
        caption: '一键控制全屋智能设备，提升生活品质'
      }
    ],
    "features": [
        "5大类、24颗批头，满足各种实用需求",
        "S2合金钢批头，硬度高、韧性好",
        "40齿正反转棘轮结构设计，省力80%",
        "6.2°棘轮设计，狭小空间同样游刃有余",
        "铝合金手柄一体成型，手感舒适"
      ],
    "specifications": {
        "产品尺寸": "98*33*29mm",
        "产品净重": "179g",
        "批头材质": "S2合金钢",
        "手柄材质":"铝合金",
        "外壳材质": "锌合金、铝合金",
        "锁定结构":"弹性臂+锁扣"
      }
  },
  {
    id: 'VC1',
    numericId: 213,
    name: '无线吸尘器 VC1',
    description: '',
    price: '4,299₽',
    image: '/images/tools/scene/VC1/VC1-main.png',
    cardImage: '/images/tools/VC1.png',
    gallery: [
      {
        src: '/images/tools/scene/VC1/VC1场景图1.png',
      },
      {
        src: '/images/tools/scene/VC1/VC1场景图2.png',
      },
      {
        src: '/images/tools/scene/VC1/VC1场景图3.png',
      },
      {
        src: '/images/tools/scene/VC1/VC1场景图4.png',
      }
    ],
    features: [
        "全铝一体化机身，无线设计，家车两用",
        "新型高速无刷电机，强大吸力16000Pa，深度清洁",
        "创新刷头组合，轻松除尘无死角，配件易于清洁和拆卸",
        "一键倒灰，操作快捷，不脏手"
      ],
    specifications: {
        "产品尺寸": "60*55*290mm",
        "产品净重": "680g",
        "主要材质": "铝合金、ABS",
        "尘盒容量": "170mL",
        "电池容量": "6000mAh",
        "最大吸力功率": "16000Pa",
        "充电接口": "Type-c"
      }
  },
  {
    id: 'AP2',
    numericId: 214,
    name: '充气泵 AP2',
    description: '',
    price: '5,699₽',
    image: '/images/tools/scene/AP2/AP2-main.png',
    cardImage: '/images/tools/AP2.png',
    gallery: [
      {
        src: '/images/tools/scene/AP2/AP2场景图1.png',
      },
      {
        src: '/images/tools/scene/AP2/AP2场景图2.png',
      },
      {
        src: '/images/tools/scene/AP2/AP2场景图3.png',
      },
      {
        src: '/images/tools/scene/AP2/AP2场景图4.png',
      },
      {
        src: '/images/tools/scene/AP2/AP2场景图5.png',
      }
    ],
    features: [
        "采用第三代高性能充气引擎，充满1条高尔夫汽车轮胎仅需约7分钟，满电状态下，可将3条205/55 R16汽车轮胎从0bar充至2.5bar",
        "高精度镜面研磨金属缸体加持，从0psi加压至150psi约14秒，LED照明，夜间自如操作",
        "预设压力值，精准充好自动停",
        "自动海拔校正，不同海拔同样精准",
        "全新的风道设计，提高散热效率，无需休息，可持续工作"
      ],
    specifications: {
        "产品尺寸": "123.5*74*45mm",
        "产品净重": "450g",
        "主要材质": "PC",
        "充气压力范围": "0.2-10.3bar/3-150psi",
        "电池容量": "2500mAh",
        "充电接口": "USB Type-c"
      }
  },
  {
    id: 'MC1',
    numericId: 215,
    name: '多功能车充头 MC1',
    description: '',
    price: '499₽',
    image: '/images/tools/scene/MC1/MC1-main.png',
    cardImage: '/images/tools/MC1.png',
    gallery: [
      {
        src: '/images/tools/scene/MC1/MC1场景图1.png',
      },
      {
        src: '/images/tools/scene/MC1/MC1场景图2.png',
      },
      {
        src: '/images/tools/scene/MC1/MC1场景图3.png',
      },
      {
        src: '/images/tools/scene/MC1/MC1场景图4.png',
      }
    ],
    features: [
        "快充黑科技，智能芯片，稳定快充",
        "即插即用，满电出行",
        "USB+Type-C双口输出，终结电量焦虑",
        "隐藏式设计，不占空间，客货通用"
      ],
    specifications: {
        "产品尺寸": "Ф25*63.5mm",
        "产品净重": "35g",
        "主要材质": "铝合金、ABS",
        "输入电压": "DV12-24V",
        "输出电压": "3A-6.8A 超级快速充电",
        "功率": "A端口100W，C端口25W",
        "充电接口": "USB+Type-c"
      }
  },
]; 