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

// 2026年7月4日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "caveman",
    fullName: "JuliusBrussee/caveman",
    description: "让 AI 像穴居人一样说话——Claude Code 技能，砍掉 65% 的 token 消耗，保持 100% 技术准确性",
    stars: 82814,
    language: "JavaScript",
    color: "#F59E0B",
    author: "JuliusBrussee",
    '通俗讲解': '让 AI 说话变"短"的神器！Caveman 让 Claude Code 变成穴居人风格——用最少的词表达最多的意思。原来 100 个词的回复变成 25 个词，token 费用直接砍掉 65%！8.2 万颗星的爆款项目，一天涨 2,851 颗星，支持 30+ AI 工具（Claude Code、Codex、Cursor、Gemini 等），省钱达人的必备！',
    tutorial: `🎯 今天我们要让 AI 学会"少说话多办事"！

📦 第一步：安装 Caveman
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash

✨ 第二步：选择穴居人风格
Lite（精简废话）、Full（标准穴居人）、Ultra（极简电报风）、Wenyan（文言文）

🎮 第三步：感受 token 暴涨
同样的技术内容，65% 更少的词——省下的 token 都是钱啊！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 2,
    name: "strix",
    fullName: "usestrix/strix",
    description: "开源 AI 渗透测试工具——用 AI 自动发现并修复应用的漏洞，安全测试从此智能化",
    stars: 34417,
    language: "Python",
    color: "#E74C3C",
    author: "usestrix",
    '通俗讲解': '以前安全测试要找专家花几万块？现在用 AI 自动跑！Strix 是个开源的 AI 渗透测试工具，能自动扫描你的应用漏洞并给出修复建议。3.4 万颗星的明星项目，一天就涨了 2,804 颗星，支持多 AI 模型（OpenAI、Anthropic、Google 等），安全圈的新宠！',
    tutorial: `🎯 今天我们要让 AI 当"白帽黑客"！

📦 第一步：安装 Strix
curl -sSL https://strix.ai/install | bash

✨ 第二步：配置你的 AI 提供商
export STRIX_LLM="openai/gpt-5.4"
export LLM_API_KEY="你的API密钥"

🎮 第三步：让 AI 自动渗透测试
strix --target ./你的项目目录
AI 自动扫描漏洞、生成报告、甚至帮你修复——安全测试从未如此简单！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 3,
    name: "chrome-devtools-mcp",
    fullName: "ChromeDevTools/chrome-devtools-mcp",
    description: "Chrome DevTools for Coding Agents——让 AI 编程助手通过 MCP 协议直接控制 Chrome 浏览器，进行调试、性能分析和自动化",
    stars: 45450,
    language: "TypeScript",
    color: "#1877F2",
    author: "ChromeDevTools",
    '通俗讲解': 'Google 官方出品！让 AI 编程助手（Claude、Cursor、Copilot 等）直接操控 Chrome 浏览器——就像给人装了双眼睛。能抓性能分析、看网络请求、截图、甚至自动点击按钮。4.5 万颗星，一天涨 404 颗星，前端开发者的梦中情具！',
    tutorial: `🎯 今天我们要让 AI "看到"网页！

📦 第一步：配置到你的 AI 工具
在你的 MCP 客户端配置中添加 chrome-devtools-mcp：
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}

✨ 第二步：启动 Chrome
确保 Chrome 浏览器正在运行

🎮 第三步：让 AI 调试你的网页
AI 现在能看到控制台报错、分析性能瓶颈、截图对比——前端调试从未如此直观！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 4,
    name: "codex-plugin-cc",
    fullName: "openai/codex-plugin-cc",
    description: "在 Claude Code 中使用 OpenAI Codex——一键代码审查、任务委派、后台执行，让两个最强 AI 编程助手强强联手",
    stars: 23137,
    language: "JavaScript",
    color: "#0EA5E9",
    author: "openai",
    '通俗讲解': 'Claude Code 和 Codex 的"联姻"！OpenAI 官方出了个插件，让你在 Claude Code 里直接用 Codex 做代码审查和任务委派。2.3 万颗星，一天涨 629 颗星，相当于给 Claude Code 装了个"外挂"——两个最强的 AI 编程助手合体了！',
    tutorial: `🎯 今天我们要让 Claude Code "召唤" Codex！

📦 第一步：在 Claude Code 中添加市场源
/plugin marketplace add openai/codex-plugin-cc

✨ 第二步：安装插件
/plugin install codex@openai-codex
/reload-plugins
/codex:setup

🎮 第三步：开始使用
/codex:review 就能让 Codex 帮你审查代码了！支持后台运行、任务委派等多种功能。`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 5,
    name: "herdr",
    fullName: "ogulcancelik/herdr",
    description: "终端里的 Agent 多路复用器——在一个终端窗口同时运行多个 AI 编程助手，实时查看每个 Agent 的状态（阻塞/工作中/完成）",
    stars: 10673,
    language: "Rust",
    color: "#DEA584",
    author: "ogulcancelik",
    '通俗讲解': '一个终端管所有 AI 助手！Herdr 就像给终端装了个"AI 调度中心"——你可以同时运行 Claude Code、Cursor、Codex 等多个 AI 编程助手，在侧边栏实时看到谁在忙、谁卡住了、谁完成了。1 万颗星的 Rust 项目，一天涨 513 颗星，适合需要同时用多个 AI 工具的开发者！',
    tutorial: `🎯 今天我们要搭建"AI 指挥中心"！

📦 第一步：安装 Herdr
curl -fsSL https://herdr.dev/install.sh | sh

✨ 第二步：启动 Herdr
herdr

🎮 第三步：在终端里运行你的 AI 助手
在每个 pane 里启动不同的 AI 工具，侧边栏实时显示状态：🔴 阻塞、🟡 工作中、🔵 完成、🟢 空闲。就像 tmux 但专为 AI Agent 设计！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 6,
    name: "astryx",
    fullName: "facebook/astryx",
    description: "Facebook 开源的设计系统——150+ 可访问组件，支持 AI Agent 直接构建 UI，人和 AI 用同一套工具",
    stars: 4483,
    language: "TypeScript",
    color: "#1877F2",
    author: "facebook",
    '通俗讲解': 'Facebook 花了 8 年打磨的设计系统开源了！Astryx 提供 150+ 个开箱即用的 UI 组件，支持深色模式、品牌主题定制，最重要的是——人和 AI 助手用同一套 API 和 CLI 来构建界面。一天涨 943 颗星，React + StyleX 技术栈，前端开发者的福利！',
    tutorial: `🎯 今天我们要用"大厂级"设计系统！

📦 第一步：安装 Astryx
npm install @astryxdesign/core @astryxdesign/theme-neutral
npm install -D @astryxdesign/cli

✨ 第二步：导入预构建 CSS 并使用组件
不需要 build plugin，不需要 PostCSS，直接 import！

🎮 第三步：人和 AI 一起构建
无论是人还是 AI 助手，都用同一套 CLI 和 API——AI 说"创建一个导航栏"，Astryx 直接给你现成的组件！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 7,
    name: "graphify",
    fullName: "safishamsi/graphify",
    description: "AI 编程助手知识图谱技能——把你的整个代码库、文档、数据库 schema 变成可查询的知识图谱，让 AI 更懂你的项目",
    stars: 15000,
    language: "Python",
    color: "#8B5CF6",
    author: "safishamsi",
    '通俗讲解': '给 AI 编程助手装个"大脑地图"！Graphify 把你的代码、文档、SQL 脚本甚至论文图片全部转换成一张可查询的知识图谱。在 Claude Code 里打个 /graphify 命令，AI 就能理解整个项目的结构和关联。Y Combinator 支持项目，支持 20+ 种 AI 工具，一天涨 200+ 颗星！',
    tutorial: `🎯 今天我们要让 AI "读懂"整个项目！

📦 第一步：安装 Graphify
pip install graphifyy 或 uv add graphify

✨ 第二步：在你的 AI 工具里使用
在 Claude Code 中输入：/graphify .

🎮 第三步：探索知识图谱
你会得到三个文件：graph.html（浏览器打开可视化图谱）、GRAPH_REPORT.md（关键发现）、graph.json（完整图谱数据）。AI 现在能理解项目全貌了！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 8,
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

✨ 第二步：浏览 Agent 阵容
前端开发者、安全专家、产品经理、社区运营……16 个专业角色任你选

🎮 第三步：一键安装到 AI 工具
安装完成后，在 Claude Code 中说"激活前端开发者模式"即可使用！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 9,
    name: "CubeSandbox",
    fullName: "TencentCloud/CubeSandbox",
    description: "腾讯开源的 AI Agent 沙箱服务——60ms 极速启动，硬件级隔离，支持 E2B 迁移，适合大规模部署 AI Agent",
    stars: 7139,
    language: "Rust",
    color: "#059669",
    author: "TencentCloud",
    '通俗讲解': '腾讯出品的"AI 保险箱"！CubeSandbox 能在 60 毫秒内创建一个完全隔离的安全沙箱环境，每个沙箱只有 5MB 内存开销——一台机器就能跑上千个 AI Agent。硬件级隔离（不是 Docker），支持快照、克隆、回滚，还有凭证保险箱功能。一天涨 86 颗星，CNCF 观察项目，企业级安全首选！',
    tutorial: `🎯 今天我们要搭建"AI 安全沙箱"！

📦 第一步：安装 CubeSandbox
pip install cubesandbox

✨ 第二步：启动沙箱服务
cubesandb start

🎮 第三步：创建隔离环境
每个 AI Agent 都在独立的 Guest OS 内核中运行——即使 Agent 执行恶意代码也不会影响宿主机。支持 E2B SDK 无缝迁移！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 10,
    name: "agentskills",
    fullName: "agentskills/agentskills",
    description: "Agent Skills 标准化规范——让 AI 编程助手通过 SKILL.md 文件扩展专业能力，已被 Claude Code、Cursor、Codex 等 30+ 工具支持",
    stars: 12000,
    language: "Markdown",
    color: "#6366F1",
    author: "agentskills",
    '通俗讲解': 'AI 编程助手的"应用商店"！Agent Skills 是一套开放标准，让任何 AI 编程助手（Claude Code、Cursor、Codex、Gemini 等 30+ 工具）都能通过简单的 SKILL.md 文件扩展专业能力。就像手机装 App 一样，给你的 AI 助手安装"技能包"——法律审查、数据分析、PPT 格式化……应有尽有！',
    tutorial: `🎯 今天我们要给 AI 助手"装 App"！

📦 第一步：了解 Agent Skills 格式
一个 skill 就是一个文件夹，里面有个 SKILL.md 文件，包含元数据和操作指令

✨ 第二步：浏览现有 Skills
访问 agentskills.io 查看社区贡献的技能包，或者自己写一个！

🎮 第三步：在你的 AI 工具中安装
大多数工具支持 npx skills add 或 /plugin marketplace add 命令安装技能包
安装后，AI 助手就能执行专业技能了！`,
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
