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

// 2026年6月25日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "OpenMontage",
    fullName: "calesthio/OpenMontage",
    description: "全球首个开源 Agentic 视频制作系统：12 条管道、52 个工具、500+ Agent 技能，把你的 AI 编程助手变成完整视频工作室",
    stars: 19007,
    language: "Python",
    color: "#3572A5",
    author: "calesthio",
    '通俗讲解': '今天 GitHub Trending 第一！想让 AI 帮你做视频？OpenMontage 做到了！它把 AI 编程助手变成一个完整的视频制作工作室——有 12 条制作管道、52 个工具、500 多种技能。你只需要描述想要的视频，AI 自动完成脚本、画面、配音、剪辑。今天暴涨 3,703 颗星，直接登顶 Trending！视频创作者的梦中情工。',
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
    name: "ai-website-cloner-template",
    fullName: "JCodesMore/ai-website-cloner-template",
    description: "一条命令用 AI 编程助手克隆任何网站：支持 Claude、Cursor 等 AI Agent，自动生成完整前端代码",
    stars: 19213,
    language: "TypeScript",
    color: "#E74C3C",
    author: "JCodesMore",
    '通俗讲解': '想复刻任何网站但不会写代码？这个工具让你用 AI 编程助手一键克隆！输入网址，AI 自动分析页面结构、样式、交互，生成完整的前端代码。支持 Claude Code（推荐 Opus 4.7）、Codex CLI 等多种 AI 编程工具。今天新增 693 颗星，总星标突破 1.9 万，设计师和开发者的效率神器！',
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
    name: "design.md",
    fullName: "google-labs-code/design.md",
    description: "Google Labs 出品的视觉规范格式：用结构化 YAML + Markdown 描述设计系统，让 AI 编程助手精准理解你的视觉风格",
    stars: 17185,
    language: "TypeScript",
    color: "#27AE60",
    author: "google-labs-code",
    '通俗讲解': 'Google 给 AI 编程助手准备的"设计说明书"模板！以前你用自然语言描述"要简约大气"，AI 可能理解成一万个样子。现在你用 DESIGN.md 精确告诉 AI 配色、字体、间距——AI 生成的界面跟你的设计稿一模一样。今天新增 504 颗星，总星标近 1.7 万，设计师+开发者必备！',
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
    id: 4,
    name: "daily_stock_analysis",
    fullName: "ZhuLinsen/daily_stock_analysis",
    description: "LLM 驱动的多市场股票智能分析系统：A股/港股/美股/日股/韩股，自动推送决策看板到企业微信/飞书/Telegram",
    stars: 3200,
    language: "Python",
    color: "#E67E22",
    author: "ZhuLinsen",
    '通俗讲解': '你的"AI 炒股分析师"！这个系统每天早上自动分析你关注的股票，用 LLM 生成决策报告——买还是卖、目标价多少、风险在哪，然后推送到你的企业微信或飞书。支持 A 股、港股、美股、日股、韩股，零成本用 GitHub Actions 定时运行。今天上榜 Trending，金融人的 AI 利器！',
    tutorial: `🎯 今天我们要搭建"AI 炒股助手"！

📦 第一步：Fork 项目
点击右上角 Fork 按钮

✨ 第二步：配置 API Key
在 Settings → Secrets 中配置 Anspire 或 OpenAI 等 LLM 的 API Key

🎮 第三步：设置自选股和推送渠道
填写 STOCK_LIST 和 WECHAT_WEBHOOK_URL / FEISHU_WEBHOOK_URL，每天早上自动收到分析报告！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 5,
    name: "harness",
    fullName: "revfactory/harness",
    description: "Claude Code 的元技能工厂：一句话生成专业 AI Agent 团队，自动分配角色和技能，六大架构模式可选",
    stars: 7689,
    language: "HTML",
    color: "#9B59B6",
    author: "revfactory",
    '通俗讲解': '给 Claude Code 装上"团队组建器"！你说一句"帮我建一个前端团队"，它自动创建多个专业 Agent——产品经理、设计师、前端工程师、测试工程师，每个都有专属技能。支持 6 种团队架构模式，今天新增 274 颗星，总星标突破 7,600，让 AI 帮你管理团队！',
    tutorial: `🎯 今天我们要组建"AI 虚拟团队"！

📦 第一步：安装 Harness
在 Claude Code 中安装 harness 插件

✨ 第二步：描述你的需求
输入"帮我建一个前端团队"或"配置一个 DevOps 团队"

🎮 第三步：看 AI 自动组建
Harness 自动生成分工的 Agent 团队和专属技能，各司其职一起干活！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 6,
    name: "orca",
    fullName: "stablyai/orca",
    description: "并行 AI Agent 编排 IDE：同时运行 Codex、Claude Code、OpenCode，多工作区并行对比，手机随时监控",
    stars: 6696,
    language: "TypeScript",
    color: "#3498DB",
    author: "stablyai",
    '通俗讲解': 'AI 编程的"空中交通管制塔"！以前你用 Claude Code 写代码，现在你可以同时开 5 个 AI 编程助手——每个负责不同模块，最后对比结果选最好的。还有手机 App 随时监控进度，Design Mode 能直接截图给 AI 看界面。今天新增 387 颗星，多 AI 协作的终极方案！',
    tutorial: `🎯 今天我们要体验"多 AI 并行编程"！

📦 第一步：安装 Orca
从 GitHub Releases 下载桌面版（macOS/Windows/Linux）

✨ 第二步：配置你的 AI 订阅
绑定 Codex、Claude Code 或其他编程 AI 的账号

🎮 第三步：扇出提示词
输入一个任务，Orca 自动分发给多个 Agent 并行处理，最后一键对比合并！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 7,
    name: "hermes-agent",
    fullName: "NousResearch/hermes-agent",
    description: "Nous Research 自进化 AI Agent：内置学习循环，从经验中创建技能、自我改进，支持 200+ 模型和多平台",
    stars: 8500,
    language: "Python",
    color: "#2ECC71",
    author: "NousResearch",
    '通俗讲解': 'AI Agent 界的"终身学习者"！Hermes Agent 有个独家功能——内置学习循环。它会从每次交互中学习，自动创建新技能，越用越聪明。支持 Telegram、Discord、Slack、WhatsApp 等平台，还能跑在只要 5 美元的 VPS 上。最重要的是——不绑定任何模型，OpenAI、Anthropic、Kimi、MiniMax 随便换！今天上榜 Trending，小而美的 AI Agent 新秀。',
    tutorial: `🎯 今天我们要打造一个"会学习的 AI 伙伴"！

📦 第一步：一键安装
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash

✨ 第二步：选择你的模型
支持 200+ 模型——OpenRouter、NovitaAI、Kimi、MiniMax 随便选

🎮 第三步：连接你喜欢的平台
Telegram、Discord、Slack 都行，让 Hermes 在你常用的平台上工作！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 8,
    name: "hiring-agent",
    fullName: "interviewstreet/hiring-agent",
    description: "AI 简历评估 Agent：解析 PDF 简历、提取结构化数据、结合 GitHub 信号，输出客观评分和评估报告",
    stars: 2077,
    language: "Python",
    color: "#E74C3C",
    author: "interviewstreet",
    '通俗讲解': 'HR 的 AI 助手来了！这个工具自动解析 PDF 简历，提取个人信息和项目经历，还能去 GitHub 看看候选人的代码质量，最后给出客观评分和详细评估报告。支持本地 Ollama 模型或 Google Gemini，公平、透明、可解释。今天新增 152 颗星，招聘效率翻倍神器！',
    tutorial: `🎯 今天我们要搭建"AI 招聘助手"！

📦 第一步：安装 Hiring Agent
pip install hiring-agent

✨ 第二步：配置 LLM 后端
选择 Ollama（本地免费）或 Google Gemini（云端）

🎮 第三步：批量评估简历
把候选人 PDF 简历丢进去，AI 自动解析、分析 GitHub 信号、输出评分报告！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 9,
    name: "container",
    fullName: "apple/container",
    description: "Apple 官方轻量虚拟机容器工具：用 Swift 编写，在 Mac 上创建和运行 Linux 容器，优化 Apple Silicon 性能",
    stars: 42035,
    language: "Swift",
    color: "#95A5A6",
    author: "apple",
    '通俗讲解': '苹果官方推出的"轻量级 Linux 容器工具"！虽然它本身不是 AI 项目，但在 AI 开发中非常实用——你可以在 Mac 上快速创建隔离的 Linux 环境来训练和部署 AI 模型，而且针对 Apple Silicon 做了深度优化。今天新增 1,746 颗星，总星标突破 4.2 万，Mac 开发者的新宠！',
    tutorial: `🎯 今天我们要在 Mac 上搭建"轻量 Linux 容器"！

📦 第一步：安装 Container
从 Apple 开发者网站下载 container 工具

✨ 第二步：创建你的第一个容器
运行 container 命令创建隔离的 Linux 环境

🎮 第三步：在里面跑 AI 模型
容器内安装 PyTorch/TensorFlow，直接在 Mac 上训练和部署 AI 模型！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 10,
    name: "headunit-revived",
    fullName: "andreknieriem/headunit-revived",
    description: "Android Auto 车机显示应用：在任意屏幕上显示 Android Auto 界面，支持手势控制和 AI 语音交互",
    stars: 1401,
    language: "Kotlin",
    color: "#95A5A6",
    author: "andreknieriem",
    '通俗讲解': '把手机变车载屏幕的神器！这个应用让你在任意屏幕上显示 Android Auto 界面，支持手势控制、AI 语音交互。虽然主要是个工具类项目，但结合了 AI 语音功能——开车时用手势或语音控制导航、音乐、消息，解放双手。今天新增 62 颗星，司机朋友的 AI 好帮手！',
    tutorial: `🎯 今天我们要打造"AI 车载屏幕"！

📦 第一步：下载 headunit-revived
从 GitHub Releases 下载 APK 安装包

✨ 第二步：安装到平板或车载屏幕
把 APK 安装到备用平板或车载显示屏上

🎮 第三步：连接 Android Auto
配对你的手机和屏幕，享受 AI 语音控制的车载体验！`,
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
