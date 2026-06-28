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

// 2026年6月29日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "ai-berkshire",
    fullName: "xbtlin/ai-berkshire",
    description: "AI 时代的伯克希尔：基于 Claude Code / Codex 的价值投资研究框架。巴菲特·芒格·段永平·李录四大师方法论 + 多Agent并行研究",
    stars: 5225,
    language: "Python",
    color: "#27AE60",
    author: "xbtlin",
    '通俗讲解': '用 AI 重新定义投资研究！这个工具把巴菲特、芒格、段永平、李录四位大师的投资方法论系统化，通过 Claude Code / Codex 实现专业级投研。4 个 Agent 同时研究一家公司，各自独立搜索、独立判断、互相挑战。今天新增 1,456 颗星，冲上 GitHub 热门榜首，金融人的 AI 利器！',
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
    id: 2,
    name: "codebase-memory-mcp",
    fullName: "DeusData/codebase-memory-mcp",
    description: "高性能代码智能 MCP 服务器：将代码库索引为持久化知识图谱，平均仓库毫秒级完成索引，158 种语言支持，零依赖单文件二进制",
    stars: 3800,
    language: "",
    color: "#7C3AED",
    author: "DeusData",
    '通俗讲解': '给你的 AI 编程助手装上一个"代码大脑"！过去 AI 读代码像翻书一样一页页看，又慢又费 token。这个工具把整个代码库瞬间变成知识图谱——函数关系、类继承、跨服务调用一目了然。Linux 内核 2800 万行代码只要 3 分钟就索引完！支持 Claude Code、Cursor、Codex 等 11 种 AI 编程工具，今天刚上榜 GitHub Trending！',
    tutorial: `🎯 今天我们要给 AI 编程助手装上"超级大脑"！

📦 第一步：一行命令安装
curl -fsSL https://raw.githubusercontent.com/DeusData/codebase-memory-mcp/main/install.sh | bash

✨ 第二步：重启你的 AI 编程助手
Claude Code / Cursor / Codex 会自动检测到 MCP 服务器

🎮 第三步：问它"这个函数在哪里被调用？"
毫秒级回答，比 grep 快 100 倍！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 3,
    name: "FluidVoice",
    fullName: "altic-dev/FluidVoice",
    description: "最快的 macOS 离线语音输入应用——完全本地运行的语音转文字，支持 AI 增强排版，无需联网无需 API Key",
    stars: 3620,
    language: "Swift",
    color: "#E74C3C",
    author: "altic-dev",
    '通俗讲解': 'Mac 用户的语音输入神器！不用联网、不用花钱买 API、数据全在你电脑上。说话的时候几乎零延迟看到文字，而且 AI 会自动帮你加标点、大写、分段。今天新增 491 颗星，用 Homebrew 一条命令就能装：brew install --cask fluidvoice。隐私党的最爱！',
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
    name: "MinerU",
    fullName: "opendatalab/MinerU",
    description: "高精度文档解析引擎：将 PDF、Office 文档、网页转化为 LLM 可用的 Markdown/JSON，支持 VLM+OCR 双引擎、109 种语言、MCP Server 集成",
    stars: 18500,
    language: "Python",
    color: "#10B981",
    author: "opendatalab",
    '通俗讲解': 'PDF 转 AI 能读懂的格式？MinerU 一键搞定！不管是扫描版 PDF、Word、PPT 还是网页，它都能精准提取文字、表格、公式，输出成 Markdown 或 JSON。特别适合给 RAG 系统和 AI Agent 喂文档。支持国产 AI 芯片（昇腾、寒武纪等），今天新增 300+ 颗星，国内 AI 圈超火的项目！',
    tutorial: `🎯 今天我们要让 AI "读懂"任何文档！

📦 第一步：安装 MinerU
pip install mineru 或 docker 部署

✨ 第二步：上传你的文档
PDF、Word、PPT、Excel、图片——统统支持

🎮 第三步：拿到结构化数据
AI 可以直接用输出的 Markdown/JSON 做 RAG、问答、摘要！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 5,
    name: "lingbot-map",
    fullName: "Robbyant/lingbot-map",
    description: "前馈式 3D 基础模型：从流式视频数据实时重建 3D 场景，支持 10000+ 帧长序列流式推理，性能达 20 FPS",
    stars: 8158,
    language: "Python",
    color: "#F59E0B",
    author: "Robbyant",
    '通俗讲解': '手机边走边拍就能重建 3D 世界？lingbot-map 做到了！它不像传统方案需要来回优化，而是像人眼一样"看一遍就记住"。走在家里、办公室里，边走边拍，AI 实时构建 3D 地图。Linux 内核级别的工程能力——2800 万行代码 3 分钟索引完。今天新增 372 颗星，自动驾驶和 AR 领域的重磅项目！',
    tutorial: `🎯 今天我们要让手机变成"3D 扫描仪"！

📦 第一步：安装环境
conda create -n lingbot-map python=3.10 && pip install torch==2.8.0

✨ 第二步：下载模型
pip install -e . 然后下载预训练权重

🎮 第三步：运行演示
python demo.py --video your_video.mp4 —— 实时 3D 重建！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 6,
    name: "Vibe-Trading",
    fullName: "HKUDS/Vibe-Trading",
    description: "港大出品：你的个人 AI 交易 Agent，一键命令赋予 Agent 全面的交易能力，支持多策略回测和影子账户模拟",
    stars: 13657,
    language: "Python",
    color: "#FF9900",
    author: "HKUDS",
    '通俗讲解': '港大科研级 AI 交易工具！Vibe-Trading 让你的 AI Agent 瞬间变成交易员——支持多种交易策略、回测验证、影子账户模拟。今天刚更新了内容过滤器弹性和影子账户功能。总星标 1.3 万，量化交易爱好者的宝藏项目！⚠️ 仅供学习研究，投资有风险',
    tutorial: `🎯 今天我们要搭建"AI 交易员"！

📦 第一步：安装 Vibe-Trading
pip install vibe-trading-ai 或按 README 部署

✨ 第二步：配置交易 API
接入券商 API 或先用影子账户模拟交易

🎮 第三步：让 AI 帮你交易
"帮我分析 AAPL 的走势"、"用动量策略跑个回测"——AI 自动执行！⚠️ 投资有风险，仅供学习研究`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 7,
    name: "strix",
    fullName: "usestrix/strix",
    description: "开源 AI 黑客：自主 Agent 像真实黑客一样动态运行你的代码、发现漏洞并生成验证 PoC，支持 CI/CD 集成和自动修复",
    stars: 4200,
    language: "Python",
    color: "#E67E22",
    author: "usestrix",
    '通俗讲解': '让 AI 当你的"白帽黑客"！Strix 不是静态扫描工具——它会像真黑客一样运行你的代码、尝试攻击、生成验证报告。团队模式支持多个 AI Agent 协作渗透测试，还能自动提交修复 PR。集成 GitHub Actions，每次 PR 自动扫描。今天新增 200+ 颗星，安全开发者的新宠！',
    tutorial: `🎯 今天我们要让 AI 帮我们"找茬"！

📦 第一步：一行命令安装
curl -sSL https://strix.ai/install | bash

✨ 第二步：配置 LLM API Key
export STRIX_LLM="openai/gpt-5.4" && export LLM_API_KEY="your-key"

🎮 第三步：扫描你的应用
strix --target ./app-directory —— AI 自动发现漏洞、生成 PoC、提交修复 PR！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 8,
    name: "video-use",
    fullName: "browser-use/video-use",
    description: "用 Claude Code 等编码 Agent 编辑视频：自动删废话、调色、加字幕、生成动画叠加层，100% 开源",
    stars: 2800,
    language: "Python",
    color: "#1677FF",
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
    id: 9,
    name: "simplex-chat",
    fullName: "simplex-chat/simplex-chat",
    description: "首个无需任何用户标识的隐私通讯网络——完全去中心化设计，iOS/Android/Desktop 全平台支持，100% 隐私保护",
    stars: 14859,
    language: "Haskell",
    color: "#27AE60",
    author: "simplex-chat",
    '通俗讲解': '微信、Telegram 都在收集你的数据？SimpleX 说"不"！它是全球第一个完全不依赖任何用户标识的通讯应用——没有手机号、没有邮箱、没有用户 ID。你和朋友聊天就像在空气中传纸条，没人知道你是谁。今天新增 1,183 颗星，冲上 GitHub 热门第一！隐私至上者的终极选择！',
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
    id: 10,
    name: "openpilot",
    fullName: "commaai/openpilot",
    description: "开源自动驾驶操作系统：为 300+ 车型提供驾驶辅助升级，自适应巡航 + 车道保持全自动，社区驱动持续迭代",
    stars: 42000,
    language: "Python",
    color: "#10B981",
    author: "commaai",
    '通俗讲解': '让你的车变"智能车"！openpilot 是个开源自动驾驶操作系统，支持 300 多款车型。装上后自动帮你保持车道、控制车速、跟车距离。最重要的是——代码完全开源，社区持续迭代。今天新增 500+ 颗星，开源硬件+AI 的经典代表作！',
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
