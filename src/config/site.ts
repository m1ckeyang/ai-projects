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

// 2026年7月1日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "simplex-chat",
    fullName: "simplex-chat/simplex-chat",
    description: "首个无需任何用户标识的隐私通讯网络——完全去中心化设计，iOS/Android/Desktop 全平台支持，100% 隐私保护",
    stars: 17298,
    language: "Haskell",
    color: "#27AE60",
    author: "simplex-chat",
    '通俗讲解': '微信、Telegram 都在收集你的数据？SimpleX 说"不"！它是全球第一个完全不依赖任何用户标识的通讯应用——没有手机号、没有邮箱、没有用户 ID。你和朋友聊天就像在空气中传纸条，没人知道你是谁。今天新增 1,229 颗星，总星标 1.7 万，隐私至上者的终极选择！',
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
    stars: 7442,
    language: "Python",
    color: "#E74C3C",
    author: "xbtlin",
    '通俗讲解': '用 AI 重新定义投资研究！这个工具把巴菲特、芒格、段永平、李录四位大师的投资方法论系统化，通过 Claude Code / Codex 实现专业级投研。4 个 Agent 同时研究一家公司，各自独立搜索、独立判断、互相挑战。今天新增 966 颗星，冲上 GitHub 热门榜，金融人的 AI 利器！',
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
    name: "herdr",
    fullName: "ogulcancelik/herdr",
    description: "终端里的 AI Agent 多路复用器——在命令行中同时运行和管理多个 AI Agent，一个终端掌控所有智能助手",
    stars: 8929,
    language: "Rust",
    color: "#7C3AED",
    author: "ogulcancelik",
    '通俗讲解': '你装了 5 个 AI 助手，每个都要开一个窗口？Herdr 说"别闹了"！它让你在终端里同时运行多个 AI Agent，像管理终端窗口一样管理 AI 对话。Rust 写的，快得飞起。今天新增 485 颗星，总星标近 9 千，开发者效率工具的新选择！',
    tutorial: `🎯 今天我们要让终端"分身有术"！

📦 第一步：安装 Herdr
cargo install herdr 或从 releases 下载预编译版本

✨ 第二步：配置你的 Agent
连接 OpenAI、Anthropic、Google 等多个 AI 提供商

🎮 第三步：在终端里同时对话
打开 Herdr，同时管理多个 AI Agent——像 tmux 一样丝滑！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 4,
    name: "OmniRoute",
    fullName: "diegosouzapw/OmniRoute",
    description: "免费 AI 网关：一个端点接入 231+ 提供商（50+ 免费），支持 Claude Code/Codex/Cursor，RTK 压缩节省 15-95% token 消耗",
    stars: 8399,
    language: "TypeScript",
    color: "#0EA5E9",
    author: "diegosouzapw",
    '通俗讲解': 'AI API 太贵？OmniRoute 帮你省钱！一个接口接入了 231 个 AI 提供商，其中 50+ 免费。最厉害的是它的压缩技术——能把 token 消耗降低 15-95%！还能自动切换到备用提供商，不怕挂。今天新增 459 颗星，总星标 8,300+，省钱达人的福音！',
    tutorial: `🎯 今天我们要让 AI 调用"更便宜"！

📦 第一步：部署 OmniRoute
docker compose up -d 或按官方文档安装

✨ 第二步：接入你的 AI 工具
支持 Claude Code、Codex、Cursor、Cline、Copilot 等

🎮 第三步：享受免费+压缩
一个端点搞定所有 AI 提供商，token 费用直降 90%！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 5,
    name: "FluidVoice",
    fullName: "altic-dev/FluidVoice",
    description: "最快的 macOS 离线语音输入应用——完全本地运行的语音转文字，支持 AI 增强排版，无需联网无需 API Key",
    stars: 4856,
    language: "Swift",
    color: "#10B981",
    author: "altic-dev",
    '通俗讲解': 'Mac 用户的语音输入神器！不用联网、不用花钱买 API、数据全在你电脑上。说话的时候几乎零延迟看到文字，而且 AI 会自动帮你加标点、大写、分段。今天新增 586 颗星，总星标 4,800+，用 Homebrew 一条命令就能装：brew install --cask fluidvoice。隐私党的最爱！',
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
    id: 6,
    name: "agents-cli",
    fullName: "google/agents-cli",
    description: "Google 出品的 CLI 工具——把任何编程助手变成创建、评估和部署 AI Agent 的专家，附带 Skills 系统",
    stars: 4109,
    language: "Python",
    color: "#4285F4",
    author: "google",
    '通俗讲解': 'Google 官方出的 AI Agent 开发工具包！有了它，Claude Code、Cursor、Copilot 等编程助手瞬间变身 AI Agent 专家。自带 Skills 系统，帮你创建、评估、部署 AI Agent。今天新增 433 颗星，大厂出品，值得信赖！适合想认真做 AI Agent 的开发者。',
    tutorial: `🎯 今天我们要用 Google 的工具"造 Agent"！

📦 第一步：安装 agents-cli
pip install agents-cli 或按官方文档安装

✨ 第二步：连接到你的编程助手
支持 Claude Code、Cursor、Cline 等主流工具

🎮 第三步：开始创建 AI Agent
用自然语言描述你的 Agent，Google 的工具帮你落地！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 7,
    name: "video-use",
    fullName: "browser-use/video-use",
    description: "用 Claude Code 等编码 Agent 编辑视频：自动删废话、调色、加字幕、生成动画叠加层，100% 开源",
    stars: 2800,
    language: "Python",
    color: "#EC4899",
    author: "browser-use",
    '通俗讲解': '让 AI 帮你剪视频！把原始素材扔进文件夹，告诉 Claude Code "帮我剪成一支产品介绍"，它自动删掉口误和停顿、调色、加字幕、生成动画特效。全程不用打开剪辑软件——AI 读视频通过音频转录+关键帧，不是真的"看"视频，省 token 又快速。视频创作者福音！',
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
    id: 8,
    name: "astryx",
    fullName: "facebook/astryx",
    description: "Facebook 开源的可定制设计系统——专为 AI Agent 打造，支持 Agent 自动理解和操作 UI 界面",
    stars: 1695,
    language: "TypeScript",
    color: "#1877F2",
    author: "facebook",
    '通俗讲解': 'Facebook 出的设计系统，但和普通设计系统不一样——它是专门为 AI Agent 设计的！让 AI 能自动理解你的 UI 界面、操作按钮、填写表单。今天新增 399 颗星，总星标 1,600+，做 AI 产品的开发者必备！如果你的应用要让 AI 帮你操作界面，Astryx 就是那个桥梁。',
    tutorial: `🎯 今天我们要让 AI "看懂"你的界面！

📦 第一步：安装 Astryx
npm install @facebook/astryx 或 yarn add @facebook/astryx

✨ 第二步：配置你的组件
Astryx 支持主流 UI 框架，开箱即用

🎮 第三步：让 Agent 自动操作
AI Agent 现在能理解你的按钮、表单、导航栏了——自动化程度直线上升！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 9,
    name: "agency-agents",
    fullName: "msitarzewski/agency-agents",
    description: "完整的 AI Agency 工具集——前端专家、Reddit 社区运营、创意注入器、现实核查员，每个 Agent 都是具备个性和流程的领域专家",
    stars: 3200,
    language: "Python",
    color: "#F59E0B",
    author: "msitarzewski",
    '通俗讲解': '想开一家 AI Agency 但不知道从哪里开始？Agency Agents 帮你组建了一支完整的虚拟团队！前端开发专家帮你做 UI、Reddit 社区运营帮你推广、创意注入器帮你 brainstorm、现实核查员帮你把关质量……每个 Agent 都有自己的性格和工作流程。刚上榜 GitHub Trending，创业者的 AI 团队雏形！',
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
    id: 10,
    name: "lingbot-map",
    fullName: "Robbyant/lingbot-map",
    description: "前馈式 3D 基础模型——从流式数据重建 3D 场景，比传统 NeRF 快 100 倍，实时渲染 streaming 数据",
    stars: 8821,
    language: "Python",
    color: "#10B981",
    author: "Robbyant",
    '通俗讲解': '3D 重建一直很慢？这个模型说"太慢了"！lingbot-map 是一个前馈式 3D 基础模型，能从流式数据（比如视频）实时重建 3D 场景，比传统的 NeRF 方法快了 100 倍！今天新增 210 颗星，总星标 8,800+，游戏开发、VR/AR、数字孪生的核心技术。想象一下——拍一段视频，AI 立刻给你建出一个 3D 世界！',
    tutorial: `🎯 今天我们要让 AI "秒建" 3D 世界！

📦 第一步：克隆 lingbot-map
git clone https://github.com/Robbyant/lingbot-map && cd lingbot-map

✨ 第二步：安装依赖
pip install -r requirements.txt

🎮 第三步：输入视频/流式数据
AI 实时重建 3D 场景——速度比传统方法快 100 倍！`,
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
