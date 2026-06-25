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

// 2026年6月26日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "OpenMontage",
    fullName: "calesthio/OpenMontage",
    description: "全球首个开源 Agentic 视频制作系统：12 条管道、52 个工具、500+ Agent 技能，把你的 AI 编程助手变成完整视频工作室",
    stars: 21899,
    language: "Python",
    color: "#3572A5",
    author: "calesthio",
    '通俗讲解': '今天 GitHub Trending 第一！想让 AI 帮你做视频？OpenMontage 做到了！它把 AI 编程助手变成一个完整的视频制作工作室——有 12 条制作管道、52 个工具、500 多种技能。你只需要描述想要的视频，AI 自动完成脚本、画面、配音、剪辑。今天暴涨 3,553 颗星，直接登顶 Trending！视频创作者的梦中情工。',
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
    name: "design.md",
    fullName: "google-labs-code/design.md",
    description: "Google Labs 出品的视觉规范格式：用结构化 YAML + Markdown 描述设计系统，让 AI 编程助手精准理解你的视觉风格",
    stars: 18944,
    language: "TypeScript",
    color: "#27AE60",
    author: "google-labs-code",
    '通俗讲解': 'Google 给 AI 编程助手准备的"设计说明书"模板！以前你用自然语言描述"要简约大气"，AI 可能理解成一万个样子。现在你用 DESIGN.md 精确告诉 AI 配色、字体、间距——AI 生成的界面跟你的设计稿一模一样。今天新增 1,407 颗星，总星标近 1.9 万，设计师+开发者必备！',
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
    id: 3,
    name: "ai-website-cloner-template",
    fullName: "JCodesMore/ai-website-cloner-template",
    description: "一条命令用 AI 编程助手克隆任何网站：支持 Claude、Cursor 等 AI Agent，自动生成完整前端代码",
    stars: 20313,
    language: "TypeScript",
    color: "#E74C3C",
    author: "JCodesMore",
    '通俗讲解': '想复刻任何网站但不会写代码？这个工具让你用 AI 编程助手一键克隆！输入网址，AI 自动分析页面结构、样式、交互，生成完整的前端代码。支持 Claude Code（推荐 Opus 4.7）、Codex CLI 等多种 AI 编程工具。今天新增 1,021 颗星，总星标突破 2 万，设计师和开发者的效率神器！',
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
    id: 4,
    name: "page-agent",
    fullName: "alibaba/page-agent",
    description: "阿里巴巴出品：JavaScript 页面内 GUI Agent，用自然语言控制网页界面，无需浏览器插件",
    stars: 19753,
    language: "TypeScript",
    color: "#1677FF",
    author: "alibaba",
    '通俗讲解': '阿里搞了个大招！PageAgent 让你直接用自然语言控制任何网页——不用装浏览器插件、不用 Python、不用 Headless 浏览器。就在网页里加一行 JS，就能让 AI 帮你填表单、点按钮、操作页面。支持通义千问等模型，今天新增 196 颗星，总星标近 2 万，网页自动化从此变简单！',
    tutorial: `🎯 今天我们要给网页装上"AI 操控手"！

📦 第一步：引入 PageAgent
<script src="https://cdn.jsdelivr.net/npm/page-agent@1.10.0/dist/iife/page-agent.demo.js"></script>

✨ 第二步：配置模型
const agent = new PageAgent({ model: 'qwen3.5-plus', apiKey: 'YOUR_KEY' })

🎮 第三步：用自然语言操控网页
agent.execute('点击登录按钮') —— 就这么简单！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 5,
    name: "ai-berkshire",
    fullName: "xbtlin/ai-berkshire",
    description: "AI 时代的伯克希尔：基于 Claude Code 的价值投资研究框架，巴菲特·芒格·段永平·李录四大师方法论 + 多 Agent 并行研究",
    stars: 1781,
    language: "Python",
    color: "#27AE60",
    author: "xbtlin",
    '通俗讲解': '用 AI 重新定义投资研究！这个工具把巴菲特、芒格、段永平、李录四位大师的投资方法论系统化，通过 Claude Code 实现专业级投研。4 个 Agent 同时研究一家公司，各自独立搜索、独立判断、互相挑战。实盘数据显示跑赢全球主要指数，今天新增 201 颗星，金融人的 AI 利器！',
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
    id: 6,
    name: "MinerU",
    fullName: "opendatalab/MinerU",
    description: "高精度文档解析引擎：将 PDF、Office 文档转换为 LLM 可用的 Markdown/JSON，支持 109 种语言 OCR",
    stars: 15000,
    language: "Python",
    color: "#E67E22",
    author: "opendatalab",
    '通俗讲解': '你的"文档翻译官"！MinerU 能把各种复杂文档——PDF、Word、PPT、Excel、图片——全部转换成 AI 能读懂的结构化格式。支持公式转 LaTeX、表格转 HTML，还能识别手写体和扫描件。内置 VLM+OCR 双引擎，支持 109 种语言。对做 RAG（检索增强生成）和 AI Agent 来说，这是必备的基础设施！',
    tutorial: `🎯 今天我们要搭建"AI 文档解析流水线"！

📦 第一步：安装 MinerU
pip install mineru

✨ 第二步：配置模型
下载 VLM 和 OCR 模型（支持本地部署，完全离线运行）

🎮 第三步：解析你的文档
mineru your-document.pdf —— 输出结构化 Markdown/JSON，AI 直接可用！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 7,
    name: "agent-toolkit-for-aws",
    fullName: "aws/agent-toolkit-for-aws",
    description: "AWS 官方 AI Agent 工具包：MCP Server、Skills 和插件，帮助 AI Agent 在 AWS 上构建、部署和管理应用",
    stars: 1105,
    language: "Python",
    color: "#FF9900",
    author: "aws",
    '通俗讲解': 'AWS 官方给 AI Agent 发的"上岗证"！有了这个工具包，Claude Code、Codex、Cursor 等 AI 编程助手可以直接操作 AWS 服务——选服务、写 CDK、部署容器、查账单、做安全扫描。今天新增 15 颗星，总星标破 1,100，用 AWS 的开发者福音！',
    tutorial: `🎯 今天我们要让 AI Agent 管理 AWS！

📦 第一步：安装 AWS Agent Toolkit
在 Claude Code 中运行：/plugin install aws-core@claude-plugins-official

✨ 第二步：配置 AWS 凭证
设置 AWS_ACCESS_KEY_ID 和 AWS_SECRET_ACCESS_KEY

🎮 第三步：让 AI 帮你管理云资源
"帮我创建一个 S3 桶"、"部署一个 Lambda 函数"——AI 直接操作！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 8,
    name: "claude-code-best-practice",
    fullName: "shanraisshan/claude-code-best-practice",
    description: "从 Vibe Coding 到 Agentic Engineering：Claude Code 最佳实践大全，涵盖 Agents、Commands、Skills 等 300+ 技巧",
    stars: 5000,
    language: "Markdown",
    color: "#7C3AED",
    author: "shanraisshan",
    '通俗讲解': 'Claude Code 的"百科全书"！从入门到精通，涵盖 Subagents、Commands、Skills、Orchestration 等方方面面。从"随便聊聊写代码"升级到"系统化 AI 工程"。这个仓库本身就是用 Claude Code 生成的——实践出真知！今天上榜 Trending，想学好 Claude Code 必看！',
    tutorial: `🎯 今天我们要从"Vibe Coding"升级为"Agentic Engineering"！

📦 第一步：Fork 项目
点击右上角 Fork 按钮

✨ 第二步：阅读最佳实践
从 best-practice/ 目录开始，按顺序学习 Agents、Commands、Skills

🎮 第三步：应用到你的项目
把学到的技巧直接用在 Claude Code 里，效率翻倍！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 9,
    name: "open-seo",
    fullName: "every-app/open-seo",
    description: "Semrush 和 Ahrefs 的开源替代品：一站式 SEO 工具，支持 AI Agent 集成，按用量付费",
    stars: 2444,
    language: "TypeScript",
    color: "#10B981",
    author: "every-app",
    '通俗讲解': '不想为 Semrush 每月花几百刀？OpenSEO 来了！开源、按用量付费、支持 Claude Code 等 AI Agent 集成。关键词研究、竞品分析、网站审计——该有的都有。今天新增 57 颗星，总星标突破 2,400，SEO 从业者和开发者的省钱利器！',
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
    id: 10,
    name: "MediaCrawler",
    fullName: "NanmiCoder/MediaCrawler",
    description: "多平台自媒体数据采集工具：支持小红书、抖音、快手、B站、微博、贴吧、知乎，AI Agent Skill 一键安装",
    stars: 12000,
    language: "Python",
    color: "#F59E0B",
    author: "NanmiCoder",
    '通俗讲解': '全网自媒体数据"挖掘机"！支持小红书、抖音、快手、B站、微博、贴吧、知乎等平台，关键词搜索、指定帖子爬取、二级评论、创作者主页全覆盖。基于 Playwright 浏览器自动化，无需 JS 逆向。还支持 AI Agent Skill——Claude Code 或 OpenClaw 一键安装，让 AI 帮你自动爬取数据。学习爬虫技术的绝佳项目！',
    tutorial: `🎯 今天我们要搭建"自媒体数据采集器"！

📦 第一步：安装 MediaCrawler
git clone https://github.com/NanmiCoder/MediaCrawler.git
cd MediaCrawler && uv sync

✨ 第二步：配置浏览器
启动 Chrome 并开启远程调试（CDP 模式）

🎮 第三步：运行爬虫
选择平台、设置关键词，AI 自动帮你采集公开数据！⚠️ 仅供学习使用`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
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
