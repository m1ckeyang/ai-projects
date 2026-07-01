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

// 2026年7月2日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "AI-For-Beginners",
    fullName: "microsoft/AI-For-Beginners",
    description: "微软官方 AI 入门课程——12 周、24 课时的 AI 通识教育，从零开始学 AI，适合所有背景的学习者",
    stars: 50325,
    language: "Jupyter Notebook",
    color: "#4285F4",
    author: "microsoft",
    '通俗讲解': '微软爸爸亲自出教材了！12 周、24 节课，从机器学习基础到大模型应用，全覆盖。5 万颗星的经典课程，每天涨 1,086 颗星，说明越来越多的人想学 AI 了。无论你是程序员还是小白，跟着学就能入门 AI！',
    tutorial: `🎯 今天我们要加入"微软 AI 学院"！

📦 第一步：访问课程仓库
github.com/microsoft/AI-For-Beginners

✨ 第二步：选择你的起点
从 Week 1 开始循序渐进，或者直接跳到感兴趣的章节

🎮 第三步：动手实践
每节课都有 Jupyter Notebook 练习，边学边做，效果翻倍！`,
    difficulty: "入门",
    estimatedTime: "持续学习"
  },
  {
    id: 2,
    name: "strix",
    fullName: "usestrix/strix",
    description: "开源 AI 渗透测试工具——用 AI 自动发现并修复应用的漏洞，安全测试从此智能化",
    stars: 29504,
    language: "Python",
    color: "#E74C3C",
    author: "usestrix",
    '通俗讲解': '以前安全测试要找专家花几万块？现在用 AI 自动跑！Strix 是个开源的 AI 渗透测试工具，能自动扫描你的应用漏洞并给出修复建议。近 3 万颗星的明星项目，一天就涨了 1,195 颗星，安全圈的新宠！',
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
    id: 3,
    name: "AiToEarn",
    fullName: "yikart/AiToEarn",
    description: "一站式 AI 内容变现平台——用 AI Agent 自动化创作、分发、变现内容，覆盖抖音/小红书/TikTok/YouTube 等 10+ 平台",
    stars: 22492,
    language: "TypeScript",
    color: "#F59E0B",
    author: "yikart",
    '通俗讲解': '想用 AI 赚钱？这个项目就是干这个的！AiToEarn 帮你用 AI Agent 自动生成内容、一键分发到抖音/小红书/YouTube/TikTok 等 10+ 平台，还能自动互动运营。2.2 万颗星的爆款项目，一天涨 149 颗星，内容创作者的搞钱利器！',
    tutorial: `🎯 今天我们要搭建"AI 赚钱机器"！

📦 第一步：打开 AiToEarn 网站
访问 aitoearn.cn（国内）或 aitoearn.ai（国际）

✨ 第二步：获取 API Key
注册账号后在设置中创建 API Key

🎮 第三步：开始自动化变现
AI 自动生成内容 → 一键分发到多个平台 → 自动互动 → 赚钱！就这么简单！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 4,
    name: "herdr",
    fullName: "ogulcancelik/herdr",
    description: "终端里的 AI Agent 多路复用器——在命令行中同时运行和管理多个 AI Agent，一个终端掌控所有智能助手",
    stars: 9530,
    language: "Rust",
    color: "#7C3AED",
    author: "ogulcancelik",
    '通俗讲解': '开了 5 个 AI 聊天窗口太乱了？Herdr 来救场！它让你在终端里同时管理多个 AI Agent，像用 tmux 管理终端窗口一样管理 AI 对话。Rust 写的，速度快到飞起。一天涨 611 颗星，开发者效率神器！',
    tutorial: `🎯 今天我们要让终端"分身有术"！

📦 第一步：安装 Herdr
cargo install herdr 或从 releases 下载

✨ 第二步：配置你的 Agent 连接
连接 OpenAI、Anthropic、Google 等多个 AI 提供商

🎮 第三步：在终端里同时对话
打开 Herdr，同时管理多个 AI Agent——像 tmux 一样丝滑！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 5,
    name: "OmniRoute",
    fullName: "diegosouzapw/OmniRoute",
    description: "免费 AI 网关：一个端点接入 231+ 提供商（50+ 免费），支持 Claude Code/Codex/Cursor，RTK 压缩节省 15-95% token 消耗",
    stars: 9432,
    language: "TypeScript",
    color: "#0EA5E9",
    author: "diegosouzapw",
    '通俗讲解': 'AI API 太贵？OmniRoute 帮你省钱！一个接口接入了 231 个 AI 提供商，其中 50+ 免费。最牛的是它的压缩技术——能把 token 消耗降低 15-95%！还能自动切换备用提供商，不怕挂。一天涨 1,012 颗星，省钱达人的福音！',
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
    id: 6,
    name: "CubeSandbox",
    fullName: "TencentCloud/CubeSandbox",
    description: "腾讯云的 AI Agent 沙箱方案——即时、并发、安全、轻量级的 AI Agent 运行环境，为 AI 应用提供隔离执行空间",
    stars: 6752,
    language: "Rust",
    color: "#10B981",
    author: "TencentCloud",
    '通俗讲解': '腾讯云搞了个 AI Agent 的"安全屋"！CubeSandbox 让 AI Agent 在一个隔离的沙箱里运行，既安全又高效。Rust 写的，启动快如闪电。虽然一天只涨了 46 颗星，但大厂出品，值得信赖，适合企业级 AI 应用！',
    tutorial: `🎯 今天我们要给 AI Agent 建个"安全屋"！

📦 第一步：了解 CubeSandbox
访问 github.com/TencentCloud/CubeSandbox 查看文档

✨ 第二步：部署沙箱环境
按官方文档部署 CubeSandbox

🎮 第三步：让 AI Agent 在沙箱中运行
安全隔离、即时启动、高并发支持——企业级 AI Agent 的完美运行时！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 7,
    name: "FluidVoice",
    fullName: "altic-dev/FluidVoice",
    description: "最快的 macOS 离线语音输入应用——完全本地运行的语音转文字，支持 AI 增强排版，无需联网无需 API Key",
    stars: 5419,
    language: "Swift",
    color: "#10B981",
    author: "altic-dev",
    '通俗讲解': 'Mac 用户的语音输入神器！不用联网、不用花钱买 API、数据全在你电脑上。说话的时候几乎零延迟看到文字，而且 AI 会自动帮你加标点、大写、分段。一天涨 568 颗星，用 Homebrew 一条命令就能装：brew install --cask fluidvoice。隐私党的最爱！',
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
    id: 8,
    name: "astryx",
    fullName: "facebook/astryx",
    description: "Facebook 开源的可定制设计系统——专为 AI Agent 打造，支持 Agent 自动理解和操作 UI 界面",
    stars: 2465,
    language: "TypeScript",
    color: "#1877F2",
    author: "facebook",
    '通俗讲解': 'Facebook 出的设计系统，但和普通设计系统不一样——它是专门为 AI Agent 设计的！让 AI 能自动理解你的 UI 界面、操作按钮、填写表单。一天涨 714 颗星，总星标 2,400+，做 AI 产品的开发者必备！',
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
    name: "council-of-high-intelligence",
    fullName: "0xNyk/council-of-high-intelligence",
    description: "18 个 AI 人格帮你做决策——亚里士多德、费曼、卡尼曼、托尔茨等思想家齐聚一堂，结构化多轮 deliberation 帮你做出最佳选择",
    stars: 2577,
    language: "Shell",
    color: "#F59E0B",
    author: "0xNyk",
    '通俗讲解': '遇到难题不知道选哪个？让 18 个 AI 大佬帮你开会讨论！这个项目模拟了亚里士多德、费曼、卡尼曼、托尔茨等 18 位思想家的 AI 人格，围绕你的问题展开多轮辩论，最后给你一个综合建议。一天涨 473 颗星，决策困难症患者的福音！',
    tutorial: `🎯 今天我们要组建"AI 智囊团"！

📦 第一步：安装 Council
按照仓库 README 安装 CLI 工具

✨ 第二步：提出你的问题
比如"我该不该换工作？"或"选 A 还是 B？"

🎮 第三步：看 18 位 AI 大佬辩论
亚里士多德讲哲学、费曼讲物理、卡尼曼讲心理学……最后综合出最佳建议！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 10,
    name: "VulnClaw",
    fullName: "Unclecheng-li/VulnClaw",
    description: "基于 AI Agent + MCP 工具链的自动化渗透测试框架——自然语言输入，自动完成信息收集、漏洞发现、漏洞利用、报告生成全流程",
    stars: 1552,
    language: "Python",
    color: "#E74C3C",
    author: "Unclecheng-li",
    '通俗讲解': '中国开发者做的 AI 安全神器！VulnClaw 用 AI Agent + MCP 工具链，你把目标扔给它，它自动完成"信息收集→漏洞发现→漏洞利用→报告生成"全流程。就像请了个 24 小时在线的白帽黑客。一天涨 123 颗星，国产 AI 安全工具的新力量！',
    tutorial: `🎯 今天我们要体验"AI 白帽黑客"！

📦 第一步：克隆 VulnClaw
git clone https://github.com/Unclecheng-li/VulnClaw && cd VulnClaw

✨ 第二步：安装依赖
pip install -r requirements.txt

🎮 第三步：自然语言输入目标
告诉 AI 你想测试的目标，它自动完成全流程——从信息收集到报告生成，一气呵成！`,
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
