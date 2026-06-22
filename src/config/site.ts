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

// 2026年6月23日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "OpenMontage",
    fullName: "calesthio/OpenMontage",
    description: "全球首个开源 Agentic 视频制作系统：12 条管道、52 个工具、500+ Agent 技能，把你的 AI 编程助手变成完整视频工作室",
    stars: 11668,
    language: "Python",
    color: "#3572A5",
    author: "calesthio",
    '通俗讲解': '今天 GitHub Trending 第一！想让 AI 帮你做视频？OpenMontage 做到了！它把 AI 编程助手变成一个完整的视频制作工作室——有 12 条制作管道、52 个工具、500 多种技能。你只需要描述想要的视频，AI 自动完成脚本、画面、配音、剪辑。今天暴涨 2,935 颗星，直接登顶 Trending！视频创作者的梦中情工。',
    tutorial: `🎯 今天我们要搭建"AI 视频工作室"！

📦 第一步：安装 OpenMontage
git clone https://github.com/calesthio/OpenMontage.git
cd OpenMontage

✨ 第二步：配置你的 AI 助手
按照 README 配置模型和工具链

🎮 第三步：描述你想要的视频
输入自然语言描述，看 AI 自动完成整个视频制作流程！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 2,
    name: "palmier-pro",
    fullName: "palmier-io/palmier-pro",
    description: "专为 AI 打造的 macOS 视频编辑器：AI 驱动的剪辑、转场、特效，让视频创作像聊天一样简单",
    stars: 7168,
    language: "Swift",
    color: "#E74C3C",
    author: "palmier-io",
    '通俗讲解': 'macOS 上的"AI 视频剪辑神器"！传统视频编辑要学很多技巧，但这个工具用 AI 帮你搞定一切——你说"把这段剪短一点"，它自己就办了。支持 AI 转场、AI 特效、智能配音，让视频创作像聊天一样简单。今天暴涨 2,462 颗星，Mac 用户的福音！',
    tutorial: `🎯 今天我们要体验"AI 视频剪辑"！

📦 第一步：安装 Palmier Pro
从官网下载安装包

✨ 第二步：导入你的素材
把视频、图片拖进编辑器

🎮 第三步：用自然语言指挥 AI
输入"帮我做个炫酷的开场"，AI 自动完成剪辑！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 3,
    name: "codebase-memory-mcp",
    fullName: "DeusData/codebase-memory-mcp",
    description: "高性能代码智能 MCP 服务器：把代码库索引成知识图谱，158种语言，毫秒级响应，零依赖，单文件二进制",
    stars: 11385,
    language: "C",
    color: "#dea584",
    author: "DeusData",
    '通俗讲解': '给你的 AI 编程助手装上"超级大脑"！这个工具把你整个代码库变成知识图谱，AI 提问时毫秒级回答。支持 158 种编程语言，而且是独立二进制文件——不用装任何依赖！今天暴涨 1,186 颗星，Claude Code、Cursor 等编程 AI 的神器搭档。',
    tutorial: `🎯 今天我们要给 AI 编程工具装上"超级大脑"！

📦 第一步：下载二进制
去 GitHub Releases 页面下载对应系统的二进制文件

✨ 第二步：索引代码库
./codebase-memory-mcp index --path /path/to/your-project

🎮 第三步：连接 MCP 服务器
在 Claude Code 或其他 MCP 客户端中配置，现在 AI 能瞬间理解你的整个项目了！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 4,
    name: "voicebox",
    fullName: "jamiepine/voicebox",
    description: "开源 AI 语音工作室：克隆声音、语音转文字、创造语音，一站式 AI 音频解决方案",
    stars: 32120,
    language: "TypeScript",
    color: "#3572A5",
    author: "jamiepine",
    '通俗讲解': 'AI 语音界的瑞士军刀！这个工具能让你克隆自己的声音、把文字变成语音、甚至创造全新的声音。开源免费，支持语音克隆、语音合成、语音转写全套功能。今天新增 508 颗星，总星标突破 3.2 万，做播客、配音、有声书的必备工具！',
    tutorial: `🎯 今天我们要搭建"AI 语音工作室"！

📦 第一步：安装 Voicebox
npm install voicebox  # 或从源码编译

✨ 第二步：克隆你的声音
录制一段语音样本，让 Voicebox 学习你的音色

🎮 第三步：输入文字生成语音
输入你想说的话，AI 用你的声音读出来！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 5,
    name: "hyperframes",
    fullName: "heygen-com/hyperframes",
    description: "HeyGen 开源的 AI 视频渲染引擎：写 HTML 就能生成视频，专为 AI Agent 打造",
    stars: 29896,
    language: "TypeScript",
    color: "#3572A5",
    author: "heygen-com",
    '通俗讲解': '视频巨头 HeyGen 开源了他们的核心技术！以前做视频要先拍素材再剪辑，现在你只需要写 HTML——就像写网页一样——就能让 AI 自动生成视频。特别适合 AI Agent 自动化生产视频内容。今天新增 369 颗星，总星标近 3 万，AI 视频赛道的重磅玩家。',
    tutorial: `🎯 今天我们要用 HTML 生成视频！

📦 第一步：安装 Hyperframes
npm install hyperframes

✨ 第二步：写你的 HTML 脚本
描述视频的每一帧画面、文字、转场

🎮 第三步：渲染成视频
运行命令，HTML 自动变成精美的视频！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 6,
    name: "firecrawl",
    fullName: "firecrawl/firecrawl",
    description: "大规模 AI 网络爬虫 API：搜索、抓取、结构化网页数据，AI 时代的网络数据采集利器",
    stars: 137117,
    language: "TypeScript",
    color: "#E67E22",
    author: "firecrawl",
    '通俗讲解': 'AI 时代最火的网络爬虫！想让你的 AI 知道网上发生了什么？Firecrawl 帮你批量抓取网页、搜索信息、提取结构化数据。总星标 13.7 万，是 GitHub 上最火的 AI 工具之一。今天新增 736 颗星，做 RAG、AI 研究、数据分析的必备工具。',
    tutorial: `🎯 今天我们要搭建"AI 网络爬虫"！

📦 第一步：安装 Firecrawl
npm install firecrawl

✨ 第二步：抓取网页
firecrawl crawl https://example.com

🎮 第三步：拿到结构化数据
看看 AI 是怎么把网页变成干净数据的！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 7,
    name: "airllm",
    fullName: "lyogavin/airllm",
    description: "AirLLM：单张 4GB 显卡即可推理 70B 参数大模型，让普通人也能跑起超大 AI",
    stars: 20995,
    language: "Jupyter Notebook",
    color: "#3572A5",
    author: "lyogavin",
    '通俗讲解': '想跑 700 亿参数的超大 AI 模型？通常要几万块的显卡……但 AirLLM 告诉你：一张 4GB 的卡就够了！它通过智能内存管理，让普通电脑也能运行超大模型。今天新增 187 颗星，总星标近 2.1 万，预算有限的 AI 爱好者的救星！',
    tutorial: `🎯 今天我们要在"小显卡"上跑"大模型"！

📦 第一步：安装 AirLLM
pip install airllm

✨ 第二步：加载 70B 模型
model = AirLLM("70B-model-path")

🎮 第三步：开始推理
看看你的 4GB 显卡是怎么跑动超大模型的！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 8,
    name: "daily_stock_analysis",
    fullName: "ZhuLinsen/daily_stock_analysis",
    description: "LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行",
    stars: 44330,
    language: "Python",
    color: "#3572A5",
    author: "ZhuLinsen",
    '通俗讲解': '这是一个"AI 股票分析师"！它能自动抓取多市场（A股、港股、美股）行情数据，结合实时新闻，用 LLM 分析给出投资决策建议。还支持自动推送到飞书/微信，最关键的是——支持零成本定时运行！特别适合关注投资的你，今天新增 519 颗星。',
    tutorial: `🎯 今天我们要搭建"AI 股票分析师"！

📦 第一步：克隆项目
git clone https://github.com/ZhuLinsen/daily_stock_analysis.git
cd daily_stock_analysis

✨ 第二步：配置 API Key
在配置文件中填入你的 LLM API Key 和数据源密钥

🎮 第三步：运行分析
python main.py
看看 AI 给你的投资建议！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 9,
    name: "ai-website-cloner-template",
    fullName: "JCodesMore/ai-website-cloner-template",
    description: "一条命令用 AI 编程助手克隆任何网站：支持 Claude、Cursor 等 AI Agent，自动生成完整前端代码",
    stars: 17642,
    language: "TypeScript",
    color: "#3572A5",
    author: "JCodesMore",
    '通俗讲解': '想复刻任何网站但不会写代码？这个工具让你用 AI 编程助手一键克隆！输入网址，AI 自动分析页面结构、样式、交互，生成完整的前端代码。支持 Claude、Cursor 等主流 AI 编程工具。总星标 1.7 万，设计师和开发者的效率神器！',
    tutorial: `🎯 今天我们要"克隆"任何网站！

📦 第一步：安装模板
git clone https://github.com/JCodesMore/ai-website-cloner-template.git

✨ 第二步：输入目标网站 URL
告诉 AI 你想克隆哪个网站

🎮 第三步：拿到完整前端代码
AI 自动生成 HTML/CSS/JS，开箱即用！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 10,
    name: "deer-flow",
    fullName: "bytedance/deer-flow",
    description: "字节跳动开源的长周期 SuperAgent 框架：研究、编码、创作全能型 AI 智能体，支持沙箱、记忆、工具、子智能体和消息网关",
    stars: 72486,
    language: "Python",
    color: "#27AE60",
    author: "bytedance",
    '通俗讲解': '字节跳动搞了个大招——"超级 AI 智能体"！它能自己研究问题、写代码、做创作，还能调动手下多个"子 AI"一起干活。有记忆、有工具、有沙箱环境，处理复杂任务从几分钟到几小时都能搞定。总星标 7 万多，大厂开源的 AI Agent 标杆项目。',
    tutorial: `🎯 今天我们要搭建"AI 超级智能体"！

📦 第一步：克隆项目
git clone https://github.com/bytedance/deer-flow.git
cd deer-flow

✨ 第二步：配置模型
在配置文件中设置你的 LLM API Key

🎮 第三步：让 AI 自主完成任务
输入一个复杂任务，比如"调研 XX 技术并写报告"，看 Deer-Flow 如何分解任务、调度子智能体完成！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
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
