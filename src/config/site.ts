// 站点配置
export const siteConfig = {
  name: "AI项目百科",
  tagline: "每天带你玩转10个最酷的AI项目",
  description: "用小学生都能懂的语言，讲解最火的AI项目，手把手教你复制实现",
  
  hero: {
    badge: "🔥 每日更新",
    title: "每天10个AI项目",
    subtitle: "用最通俗的语言讲解，手把手教你做出来",
    cta: { text: "查看今日项目", href: "#projects" },
  },
  
  features: [
    { icon: "📚", title: "通俗易懂", description: "没有专业术语，用讲故事的方式让你理解每个项目" },
    { icon: "🎮", title: "边学边做", description: "每个项目都有手把手教程，跟着做就能成功" },
    { icon: "🚀", title: "今日热门", description: "每天自动更新GitHub上最火的AI项目" },
  ],
  
  footer: {
    description: "用爱发电，让每个人都能玩转AI项目",
    copyright: "2026 AI项目百科",
  }
}

// 按日期归档的项目数据
export interface Project {
  id: number
  name: string
  fullName: string
  description: string
  stars: number
  language: string
  color: string
  author: string
  '通俗讲解': string
  tutorial: string
  difficulty: string
  estimatedTime: string
}

export interface DailyProjects {
  date: string  // YYYY-MM-DD 格式
  dateLabel: string  // 显示用，如 "6月8日"
  projects: Project[]
}

// 生成最近7天的日期数据
const generateDates = () => {
  const dates: string[] = []
  const today = new Date()
  for (let i = 0; i < 7; i++) {
    const d = new Date(today)
    d.setDate(d.getDate() - i)
    dates.push(d.toISOString().split('T')[0])
  }
  return dates
}

// 2026年6月17日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "VoxCPM2",
    fullName: "OpenBMB/VoxCPM",
    description: "Tokenizer-Free 多语言语音合成：30种语言、创意声音设计、真实声音克隆，48kHz录音棚级音质",
    stars: 12800,
    language: "Python",
    color: "#3572A5",
    author: "OpenBMB",
    '通俗讲解': '阿里巴巴旗下 OpenBMB 团队出的语音合成神器！你说"一个温柔的女声"，它就能凭空变出一个声音来读文字。还支持声音克隆——录10秒别人的声音，AI 就能用那个人的声音念任何文字。支持30种语言和方言，包括粤语、四川话、东北话！今天暴涨 413 颗星，声音赛道最火的项目没有之一。',
    tutorial: `🎯 今天我们要搭建"AI 配音工作室"！

📦 第一步：安装
pip install voxcpm

✨ 第二步：一句话生成语音
from voxcpm import VoxCPM
model = VoxCPM.from_pretrained("openbmb/VoxCPM2")
wav = model.generate(text="(温柔女声)你好，欢迎来到AI配音世界！")
保存成 wav 文件就能听了！

🎮 第三步：声音克隆
上传一段10秒的参考音频，AI 就能用那个声音念任何文字——中英文都可以！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 2,
    name: "Understand-Anything",
    fullName: "Egonex-AI/Understand-Anything",
    description: "把任何代码库变成交互式知识图谱：用 AI 分析项目结构，可视化探索代码关系",
    stars: 15600,
    language: "TypeScript",
    color: "#3178C6",
    author: "Egonex-AI",
    '通俗讲解': '刚加入一个新项目，代码几万行不知道从哪看起？这个项目帮你把整个代码库变成一张"关系地图"！每个文件、函数、类都是地图上的一个点，你能看到它们之间的关系。支持 Claude Code、Cursor、Copilot 等主流 AI 编程工具。今天暴涨 1,222 颗星，增长最猛！',
    tutorial: `🎯 今天我们要给代码库"画地图"！

📦 第一步：安装
curl -fsSL https://raw.githubusercontent.com/Egonex-AI/Understand-Anything/main/install.sh | bash

✨ 第二步：进入你的项目目录
cd your-project

🎮 第三步：生成知识图谱
在 Claude Code 中输入 /understand
就能看到一个交互式网页，展示整个项目的代码关系！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 3,
    name: "zvec",
    fullName: "alibaba/zvec",
    description: "阿里巴巴出品：轻量级进程内向量数据库，毫秒级搜索数十亿向量，支持全文检索+混合搜索",
    stars: 10500,
    language: "C++",
    color: "#3572A5",
    author: "alibaba",
    '通俗讲解': '阿里搞了个超快的"向量搜索引擎"，直接嵌在你的程序里就能用，不用单独部署服务器！搜十亿条数据只要几毫秒。最新还加了全文搜索功能——既能搜语义又能搜关键词，一个工具全搞定。今天涨了 188 颗星，RAG 应用的完美搭档。',
    tutorial: `🎯 今天我们要搭建"超级搜索引擎"！

📦 第一步：安装
pip install zvec

✨ 第二步：创建向量数据库
import zvec
schema = zvec.CollectionSchema(name="my_vectors", vectors=zvec.VectorSchema("emb", zvec.DataType.VECTOR_FP32, 768))
collection = zvec.create_and_open(path="./my_db", schema=schema)

🎮 第三步：搜索
results = collection.query(zvec.VectorQuery("emb", vector=[0.1, 0.2, ...]))
看看最相似的结果！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 4,
    name: "NocoBase",
    fullName: "nocobase/nocobase",
    description: "AI + 低代码平台：用 AI Agent 自动搭建业务系统，所见即所得的界面编辑器",
    stars: 18200,
    language: "TypeScript",
    color: "#3178C6",
    author: "nocobase",
    '通俗讲解': '想用 AI 自动搭建企业管理系统？NocoBase 就是答案！你告诉 AI "帮我做一个CRM系统"，它就能自动生成数据库、页面、工作流。普通人也能通过拖拽界面修改。支持 Claude Code、Cursor 等 AI 编程工具直接操作。今天涨了 118 颗星，低代码+AI 的代表作。',
    tutorial: `🎯 今天我们要用 AI 自动搭建业务系统！

📦 第一步：安装 CLI
npm install -g @nocobase/cli@beta

✨ 第二步：初始化项目
mkdir my-app && cd my-app
nb init --ui

🎮 第三步：让 AI 帮你搭建
打开 Codex/Claude Code，在当前目录运行，AI 会自动理解 NocoBase 的架构并开始搭建！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 5,
    name: "Meshery",
    fullName: "meshery/meshery",
    description: "CNCF 云原生管理平台：AI 驱动的 Kubernetes 可视化运维，380+ 集成",
    stars: 10817,
    language: "TypeScript",
    color: "#3178C6",
    author: "meshery",
    '通俗讲解': '公司有几十个 Kubernetes 集群管不过来？Meshery 就是你的"云原生指挥中心"！它能统一管理 K8s、服务网格、多云环境，还能用 AI 帮你自动优化配置。支持 380+ 种云原生工具的集成。今天涨了 229 颗星，DevOps 团队的必备工具。',
    tutorial: `🎯 今天我们要搭建"云原生指挥中心"！

📦 第一步：一键安装
curl -L https://meshery.io/install | bash

✨ 第二步：启动服务
mesheryctl system start

🎮 第三步：连接你的集群
在浏览器打开 Meshery Dashboard，连接你的 Kubernetes 集群，看看 AI 怎么帮你优化！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 6,
    name: "claude-code",
    fullName: "anthropics/claude-code",
    description: "Anthropic 官方 AI 编程助手：终端里的 Coding Agent，理解你的代码库，加速开发",
    stars: 42500,
    language: "TypeScript",
    color: "#3572A5",
    author: "anthropics",
    '通俗讲解': 'Anthropic 官方的 AI 编程工具！直接在终端里跟它说话，它就能帮你写代码、改 bug、提交 git。理解你的整个项目结构，不是简单的代码补全，而是真正的"编程搭档"。支持 Claude Code 插件生态，今天依然稳居 AI 编程工具榜首。',
    tutorial: `🎯 今天我们要安装"AI 编程搭档"！

📦 第一步：安装（Mac/Linux）
curl -fsSL https://claude.ai/install.sh | bash

✨ 第二步：进入你的项目目录
cd your-project

🎮 第三步：开始对话
输入 claude，然后用自然语言告诉它你想做什么——"帮我重构这个函数"、"写个单元测试"，它直接执行！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 7,
    name: "server",
    fullName: "music-assistant/server",
    description: "开源 AI 音乐助手：连接 Spotify/Apple Music，智能推荐和管理你的音乐库",
    stars: 2537,
    language: "Python",
    color: "#3572A5",
    author: "marcelveldt",
    '通俗讲解': '把你的所有音乐账号（Spotify、Apple Music、网易云…）统一管理到一个地方！AI 会根据你的听歌习惯智能推荐歌曲，还能控制各种智能音箱播放。支持树莓派、NAS 部署，今天涨了 157 颗星。音乐发烧友+AI 爱好者的完美结合。',
    tutorial: `🎯 今天我们要搭建"AI 音乐管家"！

📦 第一步：安装
pip install music-assistant

✨ 第二步：启动服务
music-assistant --config /path/to/config

🎮 第三步：连接音乐平台
连接你的 Spotify 或 Apple Music 账号，AI 就开始学习你的音乐品味了！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 8,
    name: "OpenWA",
    fullName: "rmyndharis/OpenWA",
    description: "自托管 WhatsApp API 网关：免费开源的 WhatsApp 机器人开发框架",
    stars: 9027,
    language: "TypeScript",
    color: "#3178C6",
    author: "rmyndharis",
    '通俗讲解': '想给 WhatsApp 做个 AI 机器人？这个项目帮你免费搞定！它是一个自托管的 WhatsApp API 网关，你可以用它发送消息、接收消息、甚至接入 AI 做智能客服。今天涨了 185 颗星，适合想做 WhatsApp 自动化的人。',
    tutorial: `🎯 今天我们要搭建"WhatsApp AI 机器人"！

📦 第一步：克隆仓库
git clone https://github.com/rmyndharis/OpenWA.git
cd OpenWA

✨ 第二步：安装依赖
npm install

🎮 第三步：运行服务
npm start
扫码登录后，你就能通过 API 发送和接收 WhatsApp 消息了！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 9,
    name: "iroh",
    fullName: "n0-computer/iroh",
    description: "模块化网络协议栈：IP 地址会失效？用密钥拨号！Rust 编写的下一代 P2P 通信方案",
    stars: 9225,
    language: "Rust",
    color: "#dea584",
    author: "n0-computer",
    '通俗讲解': '传统的网络连接靠 IP 地址，但 IP 会变、会断。iroh 换了个思路——用"密钥"代替 IP 地址来建立连接，特别适合 P2P 场景。用 Rust 写的，速度飞快！今天暴涨 326 颗星，是分布式系统和 Web3 开发者的新宠。',
    tutorial: `🎯 今天我们要学习"下一代网络协议"！

📦 第一步：了解项目
打开 https://github.com/n0-computer/iroh 阅读 README

✨ 第二步：运行示例
cargo run --example hello-world
看看 P2P 连接是怎么建立的！

🎮 第三步：深入学习
iroh 的核心概念是"节点密钥"代替"IP地址"，理解了这一点你就入门了！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 10,
    name: "universal-android-debloater-next-generation",
    fullName: "Universal-Debloater-Alliance/universal-android-debloater-next-generation",
    description: "Android 去广告/隐私保护工具：Rust 编写的跨平台 ADB GUI，清理预装软件保护隐私",
    stars: 7238,
    language: "Rust",
    color: "#dea584",
    author: "Universal-Debloater-Alliance",
    '通俗讲解': '手机里一堆删不掉的预装软件？这个工具帮你一键清理！用 Rust 写的，跨平台（Windows/Mac/Linux），通过 ADB 连接安卓手机，可以安全地卸载系统应用、关闭遥测、保护隐私。今天涨了 146 颗星，安卓玩家的必备工具。',
    tutorial: `🎯 今天我们要给手机"大扫除"！

📦 第一步：下载安装
去 GitHub Releases 页面下载适合你系统的安装包

✨ 第二步：开启手机 ADB 调试
手机设置 → 开发者选项 → 开启 USB 调试

🎮 第三步：连接并清理
打开 UAD-NG，连接手机，勾选你想卸载的预装应用，一键清理！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  }
]

// 生成最近7天的数据
export const generateDailyProjects = (): DailyProjects[] => {
  const dates = generateDates()
  return dates.map((date, index) => {
    const d = new Date(date)
    const month = d.getMonth() + 1
    const day = d.getDate()
    return {
      date,
      dateLabel: `${month}月${day}日`,
      projects: trendingProjects.map(p => ({ ...p, id: p.id + index * 10 }))
    }
  })
}

export { trendingProjects }
