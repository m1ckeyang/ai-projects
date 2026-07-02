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

// 2026年7月3日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "ECC",
    fullName: "affaan-m/ECC",
    description: "Agent Harness 性能优化系统——技能、本能、记忆、安全和研究优先开发，支持 Claude Code、Codex、Cursor 等 12+ 语言生态",
    stars: 211900,
    language: "TypeScript",
    color: "#3178C6",
    author: "affaan-m",
    '通俗讲解': 'AI 编程助手的"健身房"！ECC 让你的 Claude Code、Cursor 等 AI 助手变得更聪明——优化技能、记忆管理、安全防护一条龙。21 万星的超级大项目，多语言支持（Shell/TypeScript/Python/Go/Java 等），开发者效率神器！',
    tutorial: `🎯 今天我们要给 AI 助手"升级打怪"！

📦 第一步：安装 ECC
npm install -g ecc-universal

✨ 第二步：选择你的 AI 工具
支持 Claude Code、Codex、Cursor、OpenCode、Gemini、Zed、Copilot 等

🎮 第三步：开始优化
ECC 自动为你的 Agent 加载技能、本能和记忆优化——像给手机装加速器一样简单！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 2,
    name: "caveman",
    fullName: "JuliusBrussee/caveman",
    description: "让 AI 像穴居人一样说话——Claude Code 技能，砍掉 65-75% 的 token 消耗，保持 100% 技术准确性",
    stars: 80633,
    language: "JavaScript",
    color: "#F59E0B",
    author: "JuliusBrussee",
    '通俗讲解': '让 AI 说话变"短"的神器！Caveman 让 Claude Code 变成穴居人风格——用最少的词表达最多的意思。原来 100 个词的回复变成 25 个词，token 费用直接砍掉 75%！8 万颗星的爆款项目，一天涨 866 颗星，省钱达人的必备！',
    tutorial: `🎯 今天我们要让 AI 学会"少说话多办事"！

📦 第一步：安装 Caveman
在 Claude Code 中运行：agy plugin install https://github.com/JuliusBrussee/caveman

✨ 第二步：选择穴居人风格
Lite（精简废话）、Full（标准穴居人）、Ultra（极简电报风）、Wenyan（文言文）

🎮 第三步：感受 token 暴涨
同样的技术内容，75% 更少的词——省下的 token 都是钱啊！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 3,
    name: "career-ops",
    fullName: "santifer/career-ops",
    description: "AI 驱动的求职系统——基于 Claude Code 构建，14 种技能模式，Go 仪表盘，PDF 简历生成，批量处理岗位投递",
    stars: 57712,
    language: "JavaScript",
    color: "#10B981",
    author: "santifer",
    '通俗讲解': '找工作太痛苦？Career-Ops 来帮你！这是一个人真实经历——花了好几个月海投简历，于是干脆写了个 AI 系统来自动筛选公司、生成个性化简历。5.7 万颗星，14 种技能模式，支持 Claude Code 和各种 CLI 工具，一天涨 322 颗星，打工人必备！',
    tutorial: `🎯 今天我们要让 AI 帮你"找工作"！

📦 第一步：克隆 Career-Ops
git clone https://github.com/santifer/career-ops && cd career-ops

✨ 第二步：配置你的 AI 工具
支持 Claude Code、OpenCode 等任何兼容 Agent Skill 标准的 CLI

🎮 第三步：让 AI 帮你筛选岗位
上传简历，AI 自动分析岗位匹配度、生成定制化简历——一天投递 100 份不是梦！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 4,
    name: "strix",
    fullName: "usestrix/strix",
    description: "开源 AI 渗透测试工具——用 AI 自动发现并修复应用的漏洞，安全测试从此智能化",
    stars: 31896,
    language: "Python",
    color: "#E74C3C",
    author: "usestrix",
    '通俗讲解': '以前安全测试要找专家花几万块？现在用 AI 自动跑！Strix 是个开源的 AI 渗透测试工具，能自动扫描你的应用漏洞并给出修复建议。近 3.2 万颗星的明星项目，一天就涨了 2,167 颗星，安全圈的新宠！',
    tutorial: `🎯 今天我们要让 AI 当"白帽黑客"！

📦 第一步：安装 Strix
pip install strix 或从 GitHub 下载

✨ 第二步：配置目标应用
输入你的应用 URL 或上传代码

🎮 第三步：让 AI 自动渗透测试
AI 自动扫描漏洞、生成报告、甚至帮你修复——安全测试从未如此简单！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 5,
    name: "codex-plugin-cc",
    fullName: "openai/codex-plugin-cc",
    description: "在 Claude Code 中使用 OpenAI Codex——一键代码审查、任务委派、后台执行，让两个最强 AI 编程助手强强联手",
    stars: 22542,
    language: "JavaScript",
    color: "#0EA5E9",
    author: "openai",
    '通俗讲解': 'Claude Code 和 Codex 的"联姻"！OpenAI 官方出了个插件，让你在 Claude Code 里直接用 Codex 做代码审查和任务委派。2.2 万颗星，一天涨 448 颗星，相当于给 Claude Code 装了个"外挂"——两个最强的 AI 编程助手合体了！',
    tutorial: `🎯 今天我们要让 Claude Code "召唤" Codex！

📦 第一步：安装 Codex（如果还没装）
npm install -g @openai/codex && codex login

✨ 第二步：在 Claude Code 中添加市场源
/plugin marketplace add openai/codex-plugin-cc

🎮 第三步：安装插件并开始使用
/plugin install codex@openai-codex && /reload-plugins && /codex:setup
以后用 /codex:review 就能让 Codex 帮你审查代码了！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 6,
    name: "chrome-devtools-mcp",
    fullName: "ChromeDevTools/chrome-devtools-mcp",
    description: "Chrome DevTools for Coding Agents——让 AI 编程助手通过 MCP 协议直接控制 Chrome 浏览器，进行调试、性能分析和自动化",
    stars: 45055,
    language: "TypeScript",
    color: "#1877F2",
    author: "ChromeDevTools",
    '通俗讲解': 'Google 官方出品！让 AI 编程助手（Claude、Cursor、Copilot 等）直接操控 Chrome 浏览器——就像给人装了双眼睛。能抓性能分析、看网络请求、截图、甚至自动点击按钮。4.5 万颗星，一天涨 141 颗星，前端开发者的梦中情具！',
    tutorial: `🎯 今天我们要让 AI "看到"网页！

📦 第一步：安装 chrome-devtools-mcp
npm install -g chrome-devtools-mcp

✨ 第二步：配置到你的 AI 工具
在 Claude Code / Cursor / Copilot 中注册为 MCP 服务器

🎮 第三步：让 AI 调试你的网页
AI 现在能看到控制台报错、分析性能瓶颈、截图对比——前端调试从未如此直观！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 7,
    name: "agency-agents",
    fullName: "msitarzewski/agency-agents",
    description: "完整的 AI 代理团队——从前端开发到社区运营，每个 Agent 都是带人格的专业专家，一键安装到 Claude Code / Cursor / Codex",
    stars: 15200,
    language: "Markdown",
    color: "#7C3AED",
    author: "msitarzewski",
    '通俗讲解': '你的 AI "外包团队"！Agency Agents 提供了一整套 AI Agent 人格——前端开发、安全审计、社区运营、产品经理……每个 Agent 都有独特的性格和工作流程。原生桌面应用一键安装，支持 Claude Code、Cursor、Codex 等 7+ 工具。一天涨 500+ 颗星，一个人就是一支团队！',
    tutorial: `🎯 今天我们要组建"AI 外包团队"！

📦 第一步：安装 Agency Agents 应用
Mac: brew install --cask msitarzewski/agency-agents/agency-agents
Windows/Linux: 从 releases 页面下载

✨ 第二步：选择你的团队
浏览所有 Agent 角色，选你需要的——前端、安全、测试、产品……

🎮 第三步：一键安装到 AI 工具
安装完成后，在 Claude Code 中说"激活前端开发者模式"即可使用！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 8,
    name: "video-use",
    fullName: "browser-use/video-use",
    description: "用编码 Agent 剪辑视频——把原始素材扔进文件夹，和 Claude Code 聊天，自动获得精剪版 final.mp4，支持字幕、调色、动画叠加",
    stars: 12800,
    language: "Python",
    color: "#10B981",
    author: "browser-use",
    '通俗讲解': '让 AI 帮你剪视频！把拍摄素材丢进文件夹，告诉 Claude Code "把这些剪成一支宣传片"，它就自动完成——删废话、自动调色、加字幕、做动画叠加。基于 ElevenLabs 语音识别 + FFmpeg，100% 开源。一天涨 300+ 颗星，内容创作者的终极武器！',
    tutorial: `🎯 今天我们要让 AI 当"剪辑师"！

📦 第一步：克隆 video-use
git clone https://github.com/browser-use/video-use && cd video-use

✨ 第二步：安装依赖
uv sync && brew install ffmpeg

🎮 第三步：把素材扔进去
claude → "set up video-use for me" → 输入 ElevenLabs API Key → 把视频素材放好 → 说"edit these into a launch video"

AI 自动完成转录→剪辑→调色→字幕→渲染全流程！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 9,
    name: "superpowers",
    fullName: "obra/superpowers",
    description: "Agentic 技能框架和软件开发方法论——让你的编码 Agent 先问你在做什么，再做设计和规划，最后自主执行开发任务",
    stars: 18500,
    language: "JavaScript",
    color: "#F59E0B",
    author: "obra",
    '通俗讲解': '给你的编码 Agent 装上"超能力"！Superpowers 不只是个插件——它是一套完整的软件开发方法论。Agent 不再一上来就写代码，而是先问你"你到底想做什么"，生成设计文档，制定实施计划，然后启动子 Agent 自主开发。支持 Claude Code、Cursor、Codex 等 10+ 工具。一天涨 400+ 颗星，让 AI 开发真正"自动化"！',
    tutorial: `🎯 今天我们要给 Agent "开挂"！

📦 第一步：安装 Superpowers
Claude Code: /plugin install superpowers@claude-plugins-official
Cursor: /add-plugin superpowers
其他工具: 从 agentskills.io 查看安装指南

✨ 第二步：开始一个新项目
告诉你的 Agent "我要做一个 xxx"

🎮 第三步：见证超能力
Agent 会先跟你讨论需求→生成设计文档→制定实施计划→启动子 Agent 分工开发——全程几乎不需要你操心！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 10,
    name: "Vibe-Trading",
    fullName: "HKUDS/Vibe-Trading",
    description: "Vibe-Trading: 你的个人交易 Agent——港大开源的 AI 量化交易系统，一个命令让 Agent 具备完整交易能力，支持 16+ 消息渠道",
    stars: 28500,
    language: "Python",
    color: "#E74C3C",
    author: "HKUDS",
    '通俗讲解': '港大出品的 AI 交易神器！Vibe-Trading 让你的 AI Agent 变成一个完整的量化交易系统——因子分析、策略回测、模拟交易、实盘对接一条龙。支持 Telegram、Discord、飞书、微信等 16+ 消息渠道，Python + FastAPI + React 技术栈。一天涨 200+ 颗星，量化交易爱好者的福音！',
    tutorial: `🎯 今天我们要搭建"AI 交易员"！

📦 第一步：安装 Vibe-Trading
pip install vibe-trading-ai

✨ 第二步：配置交易参数
设置你的 API Key（交易所/数据源）、选择策略因子

🎮 第三步：让 Agent 开始交易
通过 Telegram/Discord/飞书等渠道跟 Agent 对话——"帮我看看 BTC"、"回测这个策略"、"执行买入"，Agent 自动完成分析+交易！`,
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
