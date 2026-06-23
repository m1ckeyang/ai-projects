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

// 2026年6月24日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "OpenMontage",
    fullName: "calesthio/OpenMontage",
    description: "全球首个开源 Agentic 视频制作系统：12 条管道、52 个工具、500+ Agent 技能，把你的 AI 编程助手变成完整视频工作室",
    stars: 15305,
    language: "Python",
    color: "#3572A5",
    author: "calesthio",
    '通俗讲解': '今天 GitHub Trending 第一！想让 AI 帮你做视频？OpenMontage 做到了！它把 AI 编程助手变成一个完整的视频制作工作室——有 12 条制作管道、52 个工具、500 多种技能。你只需要描述想要的视频，AI 自动完成脚本、画面、配音、剪辑。今天暴涨 3,590 颗星，直接登顶 Trending！视频创作者的梦中情工。',
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
    stars: 8354,
    language: "Swift",
    color: "#E74C3C",
    author: "palmier-io",
    '通俗讲解': 'macOS 上的"AI 视频剪辑神器"！传统视频编辑要学很多技巧，但这个工具用 AI 帮你搞定一切——你说"把这段剪短一点"，它自己就办了。支持 AI 转场、AI 特效、智能配音，还内置 MCP 服务器，可以直接连 Claude Code、Cursor 等 AI 编程助手一起协作。今天暴涨 1,631 颗星，Mac 用户的福音！',
    tutorial: `🎯 今天我们要体验"AI 视频剪辑"！

📦 第一步：安装 Palmier Pro
从官网下载安装包（macOS 26 Tahoe + Apple Silicon）

✨ 第二步：导入你的素材
把视频、图片拖进编辑器

🎮 第三步：用自然语言指挥 AI
输入"帮我做个炫酷的开场"，AI 自动完成剪辑！还可以连接 Claude Code 一起协作！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 3,
    name: "codebase-memory-mcp",
    fullName: "DeusData/codebase-memory-mcp",
    description: "高性能代码智能 MCP 服务器：把代码库索引成知识图谱，158种语言，毫秒级响应，零依赖，单文件二进制",
    stars: 12738,
    language: "C",
    color: "#dea584",
    author: "DeusData",
    '通俗讲解': '给你的 AI 编程助手装上"超级大脑"！这个工具把你整个代码库变成知识图谱，AI 提问时毫秒级回答。支持 158 种编程语言，而且是独立二进制文件——不用装任何依赖！Linux 内核（2800万行代码）3分钟就能索引完。今天暴涨 1,299 颗星，Claude Code、Cursor 等编程 AI 的神器搭档。',
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
    stars: 33056,
    language: "TypeScript",
    color: "#3572A5",
    author: "jamiepine",
    '通俗讲解': 'AI 语音界的瑞士军刀！这个工具能让你克隆自己的声音、把文字变成语音、甚至创造全新的声音。开源免费，支持语音克隆、语音合成、语音转写全套功能，还有 7 种 TTS 引擎和 23 种语言。今天新增 1,042 颗星，总星标突破 3.3 万，做播客、配音、有声书的必备工具！',
    tutorial: `🎯 今天我们要搭建"AI 语音工作室"！

📦 第一步：安装 Voicebox
npm install voicebox  # 或从源码编译

✨ 第二步：克隆你的声音
录制一段语音样本，让 Voicebox 学习你的音色

🎮 第三步：输入文字生成语音
输入你想说的话，AI 用你的声音读出来！还支持 [laugh]、[sigh] 等表情标签！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 5,
    name: "Anthropic-Cybersecurity-Skills",
    fullName: "mukul975/Anthropic-Cybersecurity-Skills",
    description: "817 个结构化网络安全技能库，映射 6 大安全框架，让 AI Agent 秒变安全专家",
    stars: 19551,
    language: "Python",
    color: "#3572A5",
    author: "mukul975",
    '通俗讲解': '给你的 AI 安全助手配上"百科全书"！这个仓库包含 817 个精心编写的网络安全技能，涵盖 29 个安全领域，还映射了 MITRE ATT&CK、NIST 等 6 大国际安全框架。不管你是做渗透测试、漏洞分析还是应急响应，AI 都能给你专业指导。今天新增 1,040 颗星，安全从业者和 AI 爱好者的宝藏！',
    tutorial: `🎯 今天我们要让 AI 变成"安全专家"！

📦 第一步：克隆技能库
git clone https://github.com/mukul975/Anthropic-Cybersecurity-Skills.git

✨ 第二步：连接到你的 AI Agent
把技能库路径配置到你的 Claude Code / Cursor 等工具中

🎮 第三步：用自然语言提问安全相关问题
"帮我分析这个内存转储文件"、"这个 Sigma 规则能抓到什么攻击？"——AI 秒回专业答案！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 6,
    name: "ai-website-cloner-template",
    fullName: "JCodesMore/ai-website-cloner-template",
    description: "一条命令用 AI 编程助手克隆任何网站：支持 Claude、Cursor 等 AI Agent，自动生成完整前端代码",
    stars: 18458,
    language: "TypeScript",
    color: "#3572A5",
    author: "JCodesMore",
    '通俗讲解': '想复刻任何网站但不会写代码？这个工具让你用 AI 编程助手一键克隆！输入网址，AI 自动分析页面结构、样式、交互，生成完整的前端代码。支持 Claude Code（推荐 Opus 4.7）、Codex CLI 等多种 AI 编程工具。总星标 1.8 万，设计师和开发者的效率神器！',
    tutorial: `🎯 今天我们要"克隆"任何网站！

📦 第一步：使用模板
点击 GitHub 页面的 "Use this template" 按钮创建你自己的仓库

✨ 第二步：启动 AI Agent
claude --chrome  # 或使用其他支持的 AI 编程工具

🎮 第三步：运行 /clone-website 命令
输入目标网站 URL，AI 自动分析并生成完整的 Next.js 前端代码！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 7,
    name: "gstack",
    fullName: "garrytan/gstack",
    description: "YC CEO Garry Tan 的 Claude Code 工作流：23 个专业工具，化身 CEO、设计师、工程经理、发布经理、文档工程师和 QA",
    stars: 7410,
    language: "Python",
    color: "#27AE60",
    author: "garrytan",
    '通俗讲解': 'YC 掌门人 Garry Tan 分享了他一个人干翻整个团队的秘密武器！他把 23 个专业工具打包成一个系统，让 Claude Code 扮演 CEO、设计师、工程经理、QA 等多个角色。有了这套工具，他在 60 天内交付了 3 个生产服务和 40+ 功能——效率是 2013 年的 810 倍！今天上榜 Trending，独辟蹊径的 AI 提效方案。',
    tutorial: `🎯 今天我们要学习"一个人干翻一个团队"的秘诀！

📦 第一步：安装 GStack
git clone https://github.com/garrytan/gstack.git
cd gstack

✨ 第二步：配置 Claude Code
按照 README 安装 23 个专业工具

🎮 第三步：让 AI 扮演多个角色
"作为 CEO，分析一下这个项目"、"作为设计师，优化这个界面"——一套工具，多种角色！`,
    difficulty: "进阶",
    estimatedTime: "25分钟"
  },
  {
    id: 8,
    name: "worldmonitor",
    fullName: "koala73/worldmonitor",
    description: "实时全球情报仪表盘：AI 新闻聚合、地缘政治监控、基础设施追踪，统一态势感知界面",
    stars: 58996,
    language: "TypeScript",
    color: "#E67E22",
    author: "koala73",
    '通俗讲解': '全球局势一目了然！WorldMonitor 是一个实时全球情报仪表盘，用 AI 聚合 500+ 新闻源，覆盖军事、经济、灾害、科技等 15 个类别。还有 3D 地球仪和 56 种地图图层，国家不稳定指数、金融雷达等功能。支持本地 AI（Ollama），不用 API Key 也能用。总星标近 5.9 万，适合关注全球动态的你！',
    tutorial: `🎯 今天我们要搭建"全球情报中心"！

📦 第一步：访问 WorldMonitor
去 worldmonitor.app 在线体验，或下载桌面版（支持 macOS/Windows/Linux）

✨ 第二步：选择你的场景
科技、金融、商品、能源——6 个站点变体，一个代码库

🎮 第三步：配置本地 AI（可选）
安装 Ollama，WorldMonitor 就可以完全离线运行，隐私无忧！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 9,
    name: "hermes-agent",
    fullName: "NousResearch/hermes-agent",
    description: "Nous Research 推出的自进化 AI Agent：内置学习循环，能从经验中创建技能、自我改进，支持任意模型",
    stars: 7200,
    language: "Python",
    color: "#9B59B6",
    author: "NousResearch",
    '通俗讲解': 'AI Agent 界的"终身学习者"！Hermes Agent 有个独家功能——内置学习循环。它会从每次交互中学习，自动创建新技能，越用越聪明。支持 Telegram、Discord、Slack、WhatsApp 等平台，还能跑在只要 5 美元的 VPS 上。最重要的是——不绑定任何模型，OpenAI、Anthropic、Kimi、MiniMax 随便换！今天上榜 Trending，小而美的 AI Agent 新秀。',
    tutorial: `🎯 今天我们要打造一个"会学习的 AI 伙伴"！

📦 第一步：部署 Hermes Agent
npm install -g hermes-agent  # 或从源码安装

✨ 第二步：选择你的模型
支持 200+ 模型——OpenRouter、NovitaAI、Kimi、MiniMax 随便选

🎮 第三步：连接你喜欢的平台
Telegram、Discord、Slack 都行，让 Hermes 在你常用的平台上工作！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
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
    '通俗讲解': '字节跳动搞了个大招——"超级 AI 智能体"！它能自己研究问题、写代码、做创作，还能调动手下多个"子 AI"一起干活。有记忆、有工具、有沙箱环境，处理复杂任务从几分钟到几小时都能搞定。今天新增 279 颗星，总星标突破 7.2 万，大厂开源的 AI Agent 标杆项目。推荐搭配 Doubao-Seed-2.0-Code 或 DeepSeek v3.2 使用效果最佳！',
    tutorial: `🎯 今天我们要搭建"AI 超级智能体"！

📦 第一步：克隆项目
git clone https://github.com/bytedance/deer-flow.git
cd deer-flow

✨ 第二步：配置模型
推荐使用 Doubao-Seed-2.0-Code 或 DeepSeek v3.2，在配置文件中设置

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
