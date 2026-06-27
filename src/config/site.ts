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

// 2026年6月28日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "design.md",
    fullName: "google-labs-code/design.md",
    description: "Google Labs 出品的视觉规范格式：用结构化 YAML + Markdown 描述设计系统，让 AI 编程助手精准理解你的视觉风格",
    stars: 22261,
    language: "TypeScript",
    color: "#27AE60",
    author: "google-labs-code",
    '通俗讲解': 'Google 给 AI 编程助手准备的"设计说明书"模板！以前你用自然语言描述"要简约大气"，AI 可能理解成一万个样子。现在你用 DESIGN.md 精确告诉 AI 配色、字体、间距——AI 生成的界面跟你的设计稿一模一样。今天暴涨 1,542 颗星，总星标突破 2.2 万，设计师+开发者必备！',
    tutorial: `🎯 今天我们要给 AI 编程助手一份"设计说明书"！

📦 第一步：创建 DESIGN.md
在你的项目根目录新建 DESIGN.md 文件

✨ 第二步：填写设计令牌
用 YAML front matter 定义颜色、字体、间距等设计元素

🎮 第三步：让 AI 读取并应用
把 DESIGN.md 放在项目目录，AI 编程助手会自动读取并按规范生成界面！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 2,
    name: "ai-website-cloner-template",
    fullName: "JCodesMore/ai-website-cloner-template",
    description: "一条命令用 AI 编程助手克隆任何网站：支持 Claude、Cursor 等 AI Agent，自动生成完整前端代码",
    stars: 22051,
    language: "TypeScript",
    color: "#E74C3C",
    author: "JCodesMore",
    '通俗讲解': '想复刻任何网站但不会写代码？这个工具让你用 AI 编程助手一键克隆！输入网址，AI 自动分析页面结构、样式、交互，生成完整的前端代码。支持 Claude Code、Cursor 等多种 AI 编程工具。今天新增 750 颗星，总星标突破 2.2 万，设计师和开发者的效率神器！',
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
    id: 3,
    name: "ai-berkshire",
    fullName: "xbtlin/ai-berkshire",
    description: "AI 时代的伯克希尔：基于 Claude Code 的价值投资研究框架，巴菲特·芒格·段永平·李录四大师方法论 + 多 Agent 并行研究",
    stars: 4030,
    language: "Python",
    color: "#27AE60",
    author: "xbtlin",
    '通俗讲解': '用 AI 重新定义投资研究！这个工具把巴菲特、芒格、段永平、李录四位大师的投资方法论系统化，通过 Claude Code 实现专业级投研。4 个 Agent 同时研究一家公司，各自独立搜索、独立判断、互相挑战。实盘数据显示跑赢全球主要指数，今天新增 686 颗星，金融人的 AI 利器！',
    tutorial: `🎯 今天我们要组建"AI 投研团队"！

📦 第一步：安装 AI Berkshire
在 Claude Code 中安装 AI Berkshire Skill 合集

✨ 第二步：选择分析方法
输入你想研究的公司，比如"帮我分析拼多多"

🎮 第三步：看 4 位大师的 AI 化身辩论
段永平看商业模式、巴菲特看财务估值、芒格逆向思考、李录看长期确定性——最终综合报告出炉！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 4,
    name: "Open-Generative-AI",
    fullName: "Anil-matcha/Open-Generative-AI",
    description: "免费开源的 AI 图像和视频生成平台：200+ 模型（Flux、Midjourney、Kling、Sora、Veo），无内容过滤，自托管 MIT 协议",
    stars: 21333,
    language: "JavaScript",
    color: "#E67E22",
    author: "Anil-matcha",
    '通俗讲解': '不想为 Midjourney 每月花 30 刀？Open-Generative-AI 来了！自托管、MIT 协议、200+ AI 模型任选——图像生成、视频生成统统免费。无内容过滤，自由创作。今天新增 254 颗星，总星标突破 2.1 万，AI 创作爱好者的福音！',
    tutorial: `🎯 今天我们要搭建"免费 AI 创作工作室"！

📦 第一步：部署 Open-Generative-AI
docker compose up -d  或按 README 自行部署

✨ 第二步：选择模型
Flux、Midjourney、Kling、Sora、Veo……200+ 模型任你挑选

🎮 第三步：开始创作
输入描述，AI 自动为你生成图像或视频！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 5,
    name: "open-seo",
    fullName: "every-app/open-seo",
    description: "Semrush 和 Ahrefs 的开源替代品：一站式 SEO 工具，支持 AI Agent 集成，按用量付费",
    stars: 3332,
    language: "TypeScript",
    color: "#10B981",
    author: "every-app",
    '通俗讲解': '不想为 Semrush 每月花几百刀？OpenSEO 来了！开源、按用量付费、支持 Claude Code 等 AI Agent 集成。关键词研究、竞品分析、网站审计——该有的都有。今天新增 230 颗星，总星标突破 3,300，SEO 从业者和开发者的省钱利器！',
    tutorial: `🎯 今天我们要搭建"AI 驱动的 SEO 工具箱"！

📦 第一步：安装 OpenSEO
npm install open-seo 或自行部署

✨ 第二步：配置 DataForSEO API Key
按用量付费，没有订阅费用

🎮 第三步：连接 AI Agent
Claude Code 或 OpenClaw 一键安装 Skills，让 AI 帮你做 SEO 分析！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 6,
    name: "OpenSpec",
    fullName: "Fission-AI/OpenSpec",
    description: "规范驱动开发（SDD）：为 AI 编程助手提供结构化规范，让 AI 严格按照规格说明书生成代码",
    stars: 57076,
    language: "TypeScript",
    color: "#7C3AED",
    author: "Fission-AI",
    '通俗讲解': '让 AI 写代码不再"放飞自我"！OpenSpec 用结构化规范告诉 AI 到底要做什么——不是模糊的自然语言，而是精确的工程规格。AI 严格按照规范生成代码，减少返工。总星标 5.7 万，AI 编程领域最火项目之一，今天新增 167 颗星。',
    tutorial: `🎯 今天我们要学会"管住"AI 编程助手！

📦 第一步：安装 OpenSpec
npm install -g @fissionhq/openspec-cli

✨ 第二步：创建规范文件
openspec init 初始化项目，编写你的 AI 开发规范

🎮 第三步：让 AI 按规范执行
把规范文件交给 Claude Code 或 Cursor，AI 严格按规范生成代码！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 7,
    name: "ppt-master",
    fullName: "hugohe3/ppt-master",
    description: "AI 从任意文档生成真实可编辑的 PowerPoint：原生形状和动画、演讲者备注配语音旁白，支持自定义 .pptx 模板",
    stars: 32991,
    language: "Python",
    color: "#1677FF",
    author: "hugohe3",
    '通俗讲解': '再也不用熬夜做 PPT 了！上传 PDF、Word、Markdown 甚至一段文字，AI 自动生成真正的可编辑 PPT——不是截图拼凑，而是原生形状和动画。还能把演讲者备注变成语音旁白。总星标 3.3 万，打工人必备神器！',
    tutorial: `🎯 今天我们要让 AI 帮我们做 PPT！

📦 第一步：安装 PPT Master
pip install ppt-master 或按 README 部署

✨ 第二步：准备你的文档
上传 PDF、Word 或 Markdown 文件，或者直接把文字丢给它

🎮 第三步：一键生成 PPT
AI 自动分析内容、设计版式、生成动画——下载即可直接使用！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 8,
    name: "claude-howto",
    fullName: "luongnv89/claude-howto",
    description: "Claude Code 可视化教程：从基础概念到高级 Agent，含可复制粘贴的模板，涵盖 Hooks、Skills、MCP、Subagents 等",
    stars: 38574,
    language: "Python",
    color: "#F59E0B",
    author: "luongnv89",
    '通俗讲解': '装了 Claude Code 不知道下一步干嘛？这份教程手把手教你！从基础命令到高级 Agent 编排，图文并茂，直接复制粘贴就能用。支持中、英、日、韩等多语言。总星标 3.8 万，Claude Code 学习者的最佳入门指南！',
    tutorial: `🎯 今天我们要系统学习 Claude Code！

📦 第一步：阅读教程
打开 README，从"Get Started in 15 Minutes"开始

✨ 第二步：找到你的水平
初学者看基础概念，进阶者学 Hooks 和 Skills，高手玩 MCP 和 Subagents

🎮 第三步：复制粘贴模板
每个教程都有可直接复制的模板，改改就能用在你的项目里！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 9,
    name: "cognee",
    fullName: "topoteretes/cognee",
    description: "开源 AI 记忆平台：给 AI Agent 持久化的长期记忆，基于自托管知识图谱引擎，支持向量嵌入+图推理+本体生成",
    stars: 23922,
    language: "Python",
    color: "#E67E22",
    author: "topoteretes",
    '通俗讲解': 'AI 也有"失忆症"？Cognee 给 AI Agent 装上持久化记忆！不管会话怎么断开，AI 都能记住之前学过的东西。基于知识图谱+向量搜索，让你的 AI 越用越聪明。总星标 2.3 万，AI Agent 开发者的基础设施级项目！',
    tutorial: `🎯 今天我们要给 AI Agent 装上"永久记忆"！

📦 第一步：安装 Cognee
pip install cognee

✨ 第二步：注入你的知识
把文档、笔记、网页等内容喂给 Cognee，它自动构建知识图谱

🎮 第三步：连接你的 AI Agent
Cognee 作为记忆层接入 Claude Code 或其他 Agent，AI 从此拥有持久记忆！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 10,
    name: "Vibe-Trading",
    fullName: "HKUDS/Vibe-Trading",
    description: "港大出品：你的个人 AI 交易 Agent，一键命令赋予 Agent 全面的交易能力，支持多策略回测和影子账户",
    stars: 13657,
    language: "Python",
    color: "#FF9900",
    author: "HKUDS",
    '通俗讲解': '港大的科研级 AI 交易工具！Vibe-Trading 让你的 AI Agent 瞬间变成交易员——支持多种交易策略、回测验证、影子账户模拟。今天刚更新了内容过滤器弹性和影子账户功能。总星标 1.3 万，量化交易爱好者的宝藏项目！',
    tutorial: `🎯 今天我们要搭建"AI 交易员"！

📦 第一步：安装 Vibe-Trading
pip install vibe-trading-ai 或按 README 部署

✨ 第二步：配置交易 API
接入券商 API 或先用影子账户模拟交易

🎮 第三步：让 AI 帮你交易
"帮我分析 AAPL 的走势"、"用动量策略跑个回测"——AI 自动执行！⚠️ 投资有风险，仅供学习研究`,
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
