import { Language } from "../components/LanguageSwitcher";

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  trustValues: {
    title: string;
    values: {
      quality: {
        title: string;
        description: string;
      };
      reliability: {
        title: string;
        description: string;
      };
      expertise: {
        title: string;
        description: string;
      };
      commitment: {
        title: string;
        description: string;
      };
    };
  };
  industries: {
    title: string;
    oilGas: string;
    mining: string;
    petrochemical: string;
    forestry: string;
  };
  visualCredibility: {
    title: string;
    subtitle: string;
  };
  companyIdentity: {
    title: string;
    description: string;
    mission: {
      title: string;
      content: string;
    };
    vision: {
      title: string;
      content: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
    send: string;
  };
  footer: {
    about: string;
    aboutText: string;
    contact: string;
    address: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    hero: {
      title: "Trusted Industrial Supply Partner",
      subtitle: "Comprehensive general supplier for Oil & Gas, Petrochemical, Mining, Forestry, and major industrial operations",
      cta: "Get In Touch"
    },
    trustValues: {
      title: "Why Choose Us",
      values: {
        quality: {
          title: "Premium Quality",
          description: "Certified products from trusted global manufacturers"
        },
        reliability: {
          title: "Proven Reliability",
          description: "Decades of experience serving major industrial sectors"
        },
        expertise: {
          title: "Technical Expertise",
          description: "Specialized knowledge in industrial supply solutions"
        },
        commitment: {
          title: "Customer Commitment",
          description: "Dedicated support and timely delivery guaranteed"
        }
      }
    },
    industries: {
      title: "Industries We Serve",
      oilGas: "Oil & Gas",
      mining: "Mining",
      petrochemical: "Petrochemical",
      forestry: "Forestry"
    },
    visualCredibility: {
      title: "Trusted by Industry Leaders",
      subtitle: "Delivering excellence across major industrial sectors throughout Southeast Asia"
    },
    companyIdentity: {
      title: "About PT Dempo Bilmar Sejahtera",
      description: "PT Dempo Bilmar Sejahtera is a leading general supplier specializing in comprehensive industrial solutions for Oil & Gas, Petrochemical, Mining, and Forestry sectors. With years of proven track record, we deliver quality products and reliable services to support your operational excellence.",
      mission: {
        title: "Our Mission",
        content: "To provide comprehensive, high-quality industrial supply solutions that exceed expectations and support the operational success of our clients across critical sectors."
      },
      vision: {
        title: "Our Vision",
        content: "To be the most trusted and preferred industrial supply partner in Southeast Asia, recognized for excellence, reliability, and commitment to customer success."
      }
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss how we can support your industrial needs",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      company: "Company Name",
      message: "Your Message",
      send: "Send Message"
    },
    footer: {
      about: "About Us",
      aboutText: "Leading industrial supplier serving Oil & Gas, Petrochemical, Mining, and Forestry sectors.",
      contact: "Contact Information",
      address: "Jakarta, Indonesia",
      rights: "All rights reserved."
    }
  },
  id: {
    hero: {
      title: "Mitra Penyedia Industri Terpercaya",
      subtitle: "Penyedia umum komprehensif untuk Oil & Gas, Petrokimia, Pertambangan, Kehutanan, dan operasi industri besar",
      cta: "Hubungi Kami"
    },
    trustValues: {
      title: "Mengapa Memilih Kami",
      values: {
        quality: {
          title: "Kualitas Premium",
          description: "Produk bersertifikat dari produsen global terpercaya"
        },
        reliability: {
          title: "Keandalan Terbukti",
          description: "Puluhan tahun pengalaman melayani sektor industri besar"
        },
        expertise: {
          title: "Keahlian Teknis",
          description: "Pengetahuan khusus dalam solusi penyediaan industri"
        },
        commitment: {
          title: "Komitmen Pelanggan",
          description: "Dukungan dedikasi dan pengiriman tepat waktu terjamin"
        }
      }
    },
    industries: {
      title: "Industri yang Kami Layani",
      oilGas: "Minyak & Gas",
      mining: "Pertambangan",
      petrochemical: "Petrokimia",
      forestry: "Kehutanan"
    },
    visualCredibility: {
      title: "Dipercaya oleh Pemimpin Industri",
      subtitle: "Memberikan keunggulan di seluruh sektor industri besar di Asia Tenggara"
    },
    companyIdentity: {
      title: "Tentang PT Dempo Bilmar Sejahtera",
      description: "PT Dempo Bilmar Sejahtera adalah penyedia umum terkemuka yang mengkhususkan diri dalam solusi industri komprehensif untuk sektor Minyak & Gas, Petrokimia, Pertambangan, dan Kehutanan. Dengan rekam jejak yang terbukti selama bertahun-tahun, kami memberikan produk berkualitas dan layanan yang dapat diandalkan untuk mendukung keunggulan operasional Anda.",
      mission: {
        title: "Misi Kami",
        content: "Menyediakan solusi penyediaan industri yang komprehensif dan berkualitas tinggi yang melebihi ekspektasi dan mendukung kesuksesan operasional klien kami di sektor-sektor kritis."
      },
      vision: {
        title: "Visi Kami",
        content: "Menjadi mitra penyedia industri yang paling dipercaya dan diutamakan di Asia Tenggara, diakui karena keunggulan, keandalan, dan komitmen terhadap kesuksesan pelanggan."
      }
    },
    contact: {
      title: "Hubungi Kami",
      subtitle: "Mari diskusikan bagaimana kami dapat mendukung kebutuhan industri Anda",
      name: "Nama Lengkap",
      email: "Alamat Email",
      phone: "Nomor Telepon",
      company: "Nama Perusahaan",
      message: "Pesan Anda",
      send: "Kirim Pesan"
    },
    footer: {
      about: "Tentang Kami",
      aboutText: "Penyedia industri terkemuka yang melayani sektor Minyak & Gas, Petrokimia, Pertambangan, dan Kehutanan.",
      contact: "Informasi Kontak",
      address: "Jakarta, Indonesia",
      rights: "Hak cipta dilindungi."
    }
  },
  "zh-CN": {
    hero: {
      title: "值得信赖的工业供应合作伙伴",
      subtitle: "为石油天然气、石化、采矿、林业及主要工业运营提供全面的通用供应",
      cta: "联系我们"
    },
    trustValues: {
      title: "为什么选择我们",
      values: {
        quality: {
          title: "优质品质",
          description: "来自可信全球制造商的认证产品"
        },
        reliability: {
          title: "可靠性验证",
          description: "数十年为主要工业部门服务的经验"
        },
        expertise: {
          title: "技术专长",
          description: "工业供应解决方案的专业知识"
        },
        commitment: {
          title: "客户承诺",
          description: "保证提供专业支持和准时交付"
        }
      }
    },
    industries: {
      title: "我们服务的行业",
      oilGas: "石油天然气",
      mining: "采矿",
      petrochemical: "石化",
      forestry: "林业"
    },
    visualCredibility: {
      title: "受行业领导者信赖",
      subtitle: "在东南亚主要工业部门提供卓越服务"
    },
    companyIdentity: {
      title: "关于PT Dempo Bilmar Sejahtera",
      description: "PT Dempo Bilmar Sejahtera是一家领先的通用供应商，专门为石油天然气、石化、采矿和林业部门提供全面的工业解决方案。凭借多年的良好记录，我们提供优质产品和可靠服务，支持您的卓越运营。",
      mission: {
        title: "我们的使命",
        content: "提供全面、高质量的工业供应解决方案，超越期望，支持我们客户在关键领域的运营成功。"
      },
      vision: {
        title: "我们的愿景",
        content: "成为东南亚最值得信赖和首选的工业供应合作伙伴，以卓越、可靠和对客户成功的承诺而闻名。"
      }
    },
    contact: {
      title: "联系我们",
      subtitle: "让我们讨论如何支持您的工业需求",
      name: "全名",
      email: "电子邮件地址",
      phone: "电话号码",
      company: "公司名称",
      message: "您的信息",
      send: "发送消息"
    },
    footer: {
      about: "关于我们",
      aboutText: "领先的工业供应商，为石油天然气、石化、采矿和林业部门提供服务。",
      contact: "联系信息",
      address: "印度尼西亚雅加达",
      rights: "版权所有。"
    }
  },
  "zh-HK": {
    hero: {
      title: "值得信賴的工業供應合作夥伴",
      subtitle: "為石油天然氣、石化、採礦、林業及主要工業運營提供全面的通用供應",
      cta: "聯絡我們"
    },
    trustValues: {
      title: "為什麼選擇我們",
      values: {
        quality: {
          title: "優質品質",
          description: "來自可信全球製造商的認證產品"
        },
        reliability: {
          title: "可靠性驗證",
          description: "數十年為主要工業部門服務的經驗"
        },
        expertise: {
          title: "技術專長",
          description: "工業供應解決方案的專業知識"
        },
        commitment: {
          title: "客戶承諾",
          description: "保證提供專業支援和準時交付"
        }
      }
    },
    industries: {
      title: "我們服務的行業",
      oilGas: "石油天然氣",
      mining: "採礦",
      petrochemical: "石化",
      forestry: "林業"
    },
    visualCredibility: {
      title: "受行業領導者信賴",
      subtitle: "在東南亞主要工業部門提供卓越服務"
    },
    companyIdentity: {
      title: "關於PT Dempo Bilmar Sejahtera",
      description: "PT Dempo Bilmar Sejahtera是一家領先的通用供應商，專門為石油天然氣、石化、採礦和林業部門提供全面的工業解決方案。憑藉多年的良好記錄，我們提供優質產品和可靠服務，支援您的卓越運營。",
      mission: {
        title: "我們的使命",
        content: "提供全面、高質量的工業供應解決方案，超越期望，支援我們客戶在關鍵領域的運營成功。"
      },
      vision: {
        title: "我們的願景",
        content: "成為東南亞最值得信賴和首選的工業供應合作夥伴，以卓越、可靠和對客戶成功的承諾而聞名。"
      }
    },
    contact: {
      title: "聯絡我們",
      subtitle: "讓我們討論如何支援您的工業需求",
      name: "全名",
      email: "電郵地址",
      phone: "電話號碼",
      company: "公司名稱",
      message: "您的訊息",
      send: "發送訊息"
    },
    footer: {
      about: "關於我們",
      aboutText: "領先的工業供應商，為石油天然氣、石化、採礦和林業部門提供服務。",
      contact: "聯絡資訊",
      address: "印尼雅加達",
      rights: "版權所有。"
    }
  },
  ja: {
    hero: {
      title: "信頼できる産業用サプライパートナー",
      subtitle: "石油・ガス、石油化学、鉱業、林業、主要産業運営のための総合的なサプライヤー",
      cta: "お問い合わせ"
    },
    trustValues: {
      title: "当社を選ぶ理由",
      values: {
        quality: {
          title: "プレミアム品質",
          description: "信頼できるグローバルメーカーからの認定製品"
        },
        reliability: {
          title: "実証された信頼性",
          description: "主要産業部門へのサービス提供の数十年の経験"
        },
        expertise: {
          title: "技術的専門知識",
          description: "産業用供給ソリューションにおける専門知識"
        },
        commitment: {
          title: "お客様への取り組み",
          description: "専門的なサポートと時間厳守の配送を保証"
        }
      }
    },
    industries: {
      title: "サービス提供業界",
      oilGas: "石油・ガス",
      mining: "鉱業",
      petrochemical: "石油化学",
      forestry: "林業"
    },
    visualCredibility: {
      title: "業界リーダーから信頼されています",
      subtitle: "東南アジア全域の主要産業部門で卓越したサービスを提供"
    },
    companyIdentity: {
      title: "PT Dempo Bilmar Sejahteraについて",
      description: "PT Dempo Bilmar Sejahteraは、石油・ガス、石油化学、鉱業、林業部門向けの包括的な産業ソリューションを専門とする大手総合サプライヤーです。長年にわたる実績により、お客様の卓越した運営をサポートする高品質な製品と信頼できるサービスを提供しています。",
      mission: {
        title: "私たちの使命",
        content: "期待を超える包括的で高品質な産業用供給ソリューションを提供し、重要な分野におけるお客様の運営成功をサポートします。"
      },
      vision: {
        title: "私たちのビジョン",
        content: "卓越性、信頼性、お客様の成功へのコミットメントで認識される、東南アジアで最も信頼され好まれる産業用サプライパートナーになることです。"
      }
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "お客様の産業ニーズをどのようにサポートできるかご相談ください",
      name: "氏名",
      email: "メールアドレス",
      phone: "電話番号",
      company: "会社名",
      message: "メッセージ",
      send: "送信"
    },
    footer: {
      about: "会社概要",
      aboutText: "石油・ガス、石油化学、鉱業、林業部門にサービスを提供する大手産業サプライヤー。",
      contact: "連絡先情報",
      address: "インドネシア、ジャカルタ",
      rights: "無断転載禁止。"
    }
  }
};
