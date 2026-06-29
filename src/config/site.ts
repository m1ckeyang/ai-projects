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

// 2026年6月30日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "simplex-chat",
    fullName: "simplex-chat/simplex-chat",
    description: "首个无需任何用户标识的隐私通讯网络——完全去中心化设计，iOS/Android/Desktop 全平台支持，100% 隐私保护",
    stars: 16448,
    language: "Haskell",
    color: "#27AE60",
    author: "simplex-chat",
    '通俗讲解': '微信、Telegram 都在收集你的数据？SimpleX 说"不"！它是全球第一个完全不依赖任何用户标识的通讯应用——没有手机号、没有邮箱、没有用户 ID。你和朋友聊天就像在空气中传纸条，没人知道你是谁。今天新增 1,611 颗星，冲上 GitHub 热门第一！隐私至上者的终极选择！',
    tutorial: `🎯 今天我们要建立"完全匿名"的通讯！

📦 第一步：下载 SimpleX
iOS / Android / Desktop 全平台支持，官网 simplex.chat 下载

✨ 第二步：创建匿名会话
不需要手机号或邮箱，直接开始匿名聊天

🎮 第三步：享受真正隐私
没有用户标识 = 没有人能追踪你。端到端加密 + 去中心化架构，连服务器都不知道你是谁！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 2,
    name: "ai-berkshire",
    fullName: "xbtlin/ai-berkshire",
    description: "AI 时代的伯克希尔：基于 Claude Code / Codex 的价值投资研究框架。巴菲特·芒格·段永平·李录四大师方法论 + 多Agent并行研究",
    stars: 6542,
    language: "Python",
    color: "#E74C3C",
    author: "xbtlin",
    '通俗讲解': '用 AI 重新定义投资研究！这个工具把巴菲特、芒格、段永平、李录四位大师的投资方法论系统化，通过 Claude Code / Codex 实现专业级投研。4 个 Agent 同时研究一家公司，各自独立搜索、独立判断、互相挑战。今天新增 1,397 颗星，冲上 GitHub 热门榜，金融人的 AI 利器！',
    tutorial: `🎯 今天我们要组建"AI 投研团队"！

📦 第一步：安装 AI Berkshire
在 Claude Code 或 Codex 中安装 AI Berkshire Skill 合集

✨ 第二步：选择分析方法
输入你想研究的公司，比如"帮我分析拼多多"

🎮 第三步：看 4 位大师的 AI 化身辩论
段永平看商业模式、巴菲特看财务估值、芒格逆向思考、李录看长期确定性——最终综合报告出炉！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 3,
    name: "FluidVoice",
    fullName: "altic-dev/FluidVoice",
    description: "最快的 macOS 离线语音输入应用——完全本地运行的语音转文字，支持 AI 增强排版，无需联网无需 API Key",
    stars: 4318,
    language: "Swift",
    color: "#10B981",
    author: "altic-dev",
    '通俗讲解': 'Mac 用户的语音输入神器！不用联网、不用花钱买 API、数据全在你电脑上。说话的时候几乎零延迟看到文字，而且 AI 会自动帮你加标点、大写、分段。今天新增 836 颗星，用 Homebrew 一条命令就能装：brew install --cask fluidvoice。隐私党的最爱！',
    tutorial: `🎯 今天我们要让 Mac 变成"录音笔+打字机"！

📦 第一步：Homebrew 一键安装
brew install --cask fluidvoice

✨ 第二步：选择语音引擎
支持 Parakeet 等多种开源模型，全部本地运行

🎮 第三步：开始说话
打开 FluidVoice，按住快捷键说话，文字自动出现——还能用 Fluid Intelligence 做 AI 排版增强！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 4,
    name: "council-of-high-intelligence",
    fullName: "0xNyk/council-of-high-intelligence",
    description: "18 个 AI 人格为你出谋划策：亚里士多德、费曼、卡尼曼、Torvalds 等——跨 LLM 提供商的多轮结构化讨论，一条命令 /council",
    stars: 1809,
    language: "Shell",
    color: "#7C3AED",
    author: "0xNyk",
    '通俗讲解': '遇到难题不知道该听谁的？叫来 18 位历史名人 AI 化身一起讨论！亚里士多德讲哲学、费曼讲物理、卡尼曼讲行为经济学、Torvalds 讲技术决策……它们不是一个人自言自语，而是跨多个 LLM 提供商（GPT、Claude、Gemini 等）真正"辩论"。今天新增 323 颗星，决策困难症患者的救星！',
    tutorial: `🎯 今天我们要组一个"AI 智囊团"！

📦 第一步：安装 council-of-high-intelligence
按 README 克隆项目并安装依赖

✨ 第二步：配置你的 LLM API Keys
支持 OpenAI、Anthropic、Google 等多个提供商

🎮 第三步：输入你的难题
运行 /council "我该不该换工作？"——18 位 AI 大师各抒己见！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 5,
    name: "VulnClaw",
    fullName: "Unclecheng-li/VulnClaw",
    description: "基于 AI Agent + MCP 工具链 + 渗透 Skill 编排，配合大语言模型，自然语言输入 → 自动完成「信息收集 → 漏洞发现 → 漏洞利用 → 报告生成」全流程",
    stars: 1097,
    language: "Python",
    color: "#E67E22",
    author: "Unclecheng-li",
    '通俗讲解': '用自然语言就能做渗透测试？VulnClaw 让 AI Agent 帮你走完全流程——你说"帮我扫一下这个网站"，它自动完成信息收集、漏洞发现、漏洞利用、报告生成。配合 MCP 工具链，像真人黑客一样思考。今天新增 105 颗星，安全从业者和红队测试的新武器！⚠️ 仅用于授权测试',
    tutorial: `🎯 今天我们要让 AI 当"白帽黑客"！

📦 第一步：安装 VulnClaw
按 README 安装 Python 依赖和环境

✨ 第二步：配置 MCP 工具链
连接你的渗透测试工具和 LLM API

🎮 第三步：自然语言下达指令
"帮我扫描 example.com 的安全漏洞"——AI 自动完成全流程！⚠️ 仅用于授权测试`,
    difficulty: "进阶",
    estimatedTime: "25分钟"
  },
  {
    id: 6,
    name: "tolaria",
    fullName: "refactoringhq/tolaria",
    description: "桌面端 Markdown 知识库管理应用——像 Notion 一样组织你的笔记，但完全本地运行，支持 AI 增强搜索和知识图谱",
    stars: 17471,
    language: "TypeScript",
    color: "#1677FF",
    author: "refactoringhq",
    '通俗讲解': '想要 Notion 的体验但讨厌云端同步？Tolaria 来了！这是一个桌面端的 Markdown 知识库，像 Notion 一样好用但所有数据都在你本地。支持 AI 增强的搜索和知识图谱——自动发现笔记之间的关联。今天新增 249 颗星，总星标 1.7 万，知识管理爱好者的新宠！',
    tutorial: `🎯 今天我们要搭建"本地 Notion"！

📦 第一步：下载 Tolaria
去 refactoringhq/tolaria  Releases 下载桌面安装包

✨ 第二步：导入你的 Markdown 笔记
支持从 Obsidian、Logseq 等工具迁移

🎮 第三步：享受 AI 增强搜索
输入关键词，AI 自动关联相关笔记——知识不再是孤岛！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 7,
    name: "logto",
    fullName: "logto-io/logto",
    description: "面向 SaaS 和 AI 应用的认证授权基础设施——基于 OIDC 和 OAuth 2.1，支持多租户、SSO、RBAC",
    stars: 12586,
    language: "TypeScript",
    color: "#0EA5E9",
    author: "logto-io",
    '通俗讲解': '做 SaaS 或 AI 应用最怕什么？用户认证！Logto 帮你搞定一切——OIDC、OAuth 2.1、多租户、SSO 单点登录、RBAC 权限管理，开箱即用。今天新增 77 颗星，总星标 1.2 万，开发者必备的基础设施。特别是做 AI 应用的，用户管理是绕不开的，Logto 替你操心！',
    tutorial: `🎯 今天我们要给应用加上"企业级认证"！

📦 第一步：部署 Logto
docker compose up -d 或按官方文档安装

✨ 第二步：创建你的应用
在 Logto 控制台注册你的 SaaS 或 AI 应用

🎮 第三步：接入认证 SDK
一行代码集成登录/注册/权限——支持 OIDC、OAuth 2.1、SSO！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 8,
    name: "agency-agents",
    fullName: "msitarzewski/agency-agents",
    description: "完整的 AI Agency 工具集——前端专家、Reddit 社区运营、创意注入器、现实核查员，每个 Agent 都是具备个性和流程的领域专家",
    stars: 0,
    language: "",
    color: "#F59E0B",
    author: "msitarzewski",
    '通俗讲解': '想开一家 AI Agency 但不知道从哪里开始？Agency Agents 帮你组建了一支完整的虚拟团队！前端开发专家帮你做 UI、Reddit 社区运营帮你推广、创意注入器帮你 brainstorm、现实核查员帮你把关质量……每个 Agent 都有自己的性格和工作流程。今天刚上榜 GitHub Trending，创业者的 AI 团队雏形！',
    tutorial: `🎯 今天我们要组建"AI 虚拟团队"！

📦 第一步：克隆 agency-agents 项目
git clone 并安装依赖

✨ 第二步：配置每个 Agent 的角色
前端专家、社区运营、创意总监、质量审核——各司其职

🎮 第三步：启动你的 AI Agency
让各个 Agent 协同工作，从项目构思到上线一条龙！`,
    difficulty: "进阶",
    estimatedTime: "25分钟"
  },
  {
    id: 9,
    name: "video-use",
    fullName: "browser-use/video-use",
    description: "用 Claude Code 等编码 Agent 编辑视频：自动删废话、调色、加字幕、生成动画叠加层，100% 开源",
    stars: 2800,
    language: "Python",
    color: "#EC4899",
    author: "browser-use",
    '通俗讲解': '让 AI 帮你剪视频！把原始素材扔进文件夹，告诉 Claude Code "帮我剪成一支产品介绍"，它自动删掉口误和停顿、调色、加字幕、生成动画特效。全程不用打开剪辑软件——AI 读视频通过音频转录+关键帧，不是真的"看"视频，省 token 又快速。今天刚上榜 GitHub Trending，视频创作者福音！',
    tutorial: `🎯 今天我们要让 AI 当"剪辑师"！

📦 第一步：克隆项目
git clone https://github.com/browser-use/video-use && cd video-use

✨ 第二步：安装依赖
uv sync && brew install ffmpeg

🎮 第三步：告诉 AI 怎么剪
在 Claude Code 里说"edit these into a launch video"——AI 自动完成剪辑！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 10,
    name: "openpilot",
    fullName: "commaai/openpilot",
    description: "开源自动驾驶操作系统：为 300+ 车型提供驾驶辅助升级，自适应巡航 + 车道保持全自动，社区驱动持续迭代",
    stars: 42000,
    language: "Python",
    color: "#10B981",
    author: "commaai",
    '通俗讲解': '让你的车变"智能车"！openpilot 是个开源自动驾驶操作系统，支持 300 多款车型。装上后自动帮你保持车道、控制车速、跟车距离。最重要的是——代码完全开源，社区持续迭代。总星标 4.2 万，开源硬件+AI 的经典代表作！',
    tutorial: `🎯 今天我们要给车装上"AI 大脑"！

📦 第一步：检查你的车型是否支持
去 comma.ai 查看 300+ 支持车型列表

✨ 第二步：购买硬件
comma 3X 设备 + 安装套件

🎮 第三步：安装 openpilot
按指南刷入系统，上路体验自动驾驶辅助！⚠️ 安全第一，始终注意路况`,
    difficulty: "进阶",
    estimatedTime: "60分钟"
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
