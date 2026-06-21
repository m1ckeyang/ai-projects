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

// 2026年6月22日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "headroom",
    fullName: "chopratejas/headroom",
    description: "压缩工具输出、日志、文件和 RAG 块后再送入 LLM，减少 60-95% token 消耗，同时保持答案质量。Library、Proxy、MCP Server 三种形态",
    stars: 44007,
    language: "Python",
    color: "#3572A5",
    author: "chopratejas",
    '通俗讲解': '给你的 AI 聊天省"脑细胞"！LLM 是按字数收钱的——这个工具在你把内容发给 AI 之前，先压缩一遍，去掉废话，保留精华。结果就是：少花 token，同样答得好。支持库、代理、MCP Server 三种方式，今天暴涨 2,617 颗星，爆涨到 Trending 第一！',
    tutorial: `🎯 今天我们要让 AI 对话"瘦身"！

📦 第一步：安装
pip install headroom  # 或者作为 MCP Server 使用

✨ 第二步：压缩你的内容
把日志、工具输出、RAG 检索结果丢进去
headroom compress --input your_log.txt

🎮 第三步：发给 LLM
压缩后的内容只有原来的 5-40%，但答案质量不变！看看省了多少 token！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 2,
    name: "Pake",
    fullName: "tw93/Pake",
    description: "一条命令把任何网页变成桌面应用：打包 Electron 桌面 App，支持 macOS / Windows / Linux，内置 AI 助手集成",
    stars: 56029,
    language: "Rust",
    color: "#dea584",
    author: "tw93",
    '通俗讲解': '想把你常用的网页变成独立桌面软件？Pake 一行命令搞定！不管是 AI 聊天网页、在线文档、还是任何网站，它都能打包成原生桌面 App。今天暴涨 1,850 颗星，AI 工具快速部署的必备神器。',
    tutorial: `🎯 今天我们要把网页变"桌面软件"！

📦 第一步：安装 Pake
npm install -g @tw93/pake-cli

✨ 第二步：打包网页
pake https://chat.openai.com -n "ChatGPT"

🎮 第三步：运行桌面版
双击生成的 App，享受离线可用的桌面版 AI 助手！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 3,
    name: "skills",
    fullName: "mattpocock/skills",
    description: "真实工程师的 Claude 技能库：从 .claude 目录提取的结构化技能集合，覆盖编程、调试、架构等全方位场景",
    stars: 139557,
    language: "Shell",
    color: "#3572A5",
    author: "mattpocock",
    '通俗讲解': '这是编程大神 Matt Pocock 把他用 Claude 写代码的"独门秘籍"开源了！里面全是实战技能——怎么写代码、怎么调试、怎么搭架构。今天暴涨 1,441 颗星，总星标突破 13 万，是目前 GitHub 上最火的 AI 编程技能库！',
    tutorial: `🎯 今天我们要获取"AI 编程大师秘籍"！

📦 第一步：克隆仓库
git clone https://github.com/mattpocock/skills.git
cd skills

✨ 第二步：浏览技能
看看每个 .md 文件里的技能描述，都是实战经验

🎮 第三步：导入到你的 AI 助手
把 skills 目录配置到你的 Claude Code / Cursor 等工具中，立刻提升编程效率！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 4,
    name: "palmier-pro",
    fullName: "palmier-io/palmier-pro",
    description: "专为 AI 打造的 macOS 视频编辑器：AI 驱动的剪辑、转场、特效，让视频创作像聊天一样简单",
    stars: 4875,
    language: "Swift",
    color: "#3572A5",
    author: "palmier-io",
    '通俗讲解': 'macOS 上的"AI 视频剪辑神器"！传统视频编辑要学很多技巧，但这个工具用 AI 帮你搞定一切——你说"把这段剪短一点"，它自己就办了。支持 AI 转场、AI 特效、智能配音，让视频创作像聊天一样简单。今天暴涨 1,829 颗星，Mac 用户的福音！',
    tutorial: `🎯 今天我们要体验"AI 视频剪辑"！

📦 第一步：安装 Palmier Pro
从官网下载安装包

✨ 第二步：导入你的素材
把视频、图片拖进编辑器

🎮 第三步：用自然语言指挥 AI
输入"帮我做个炫酷的开场"，AI 自动完成剪辑！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 5,
    name: "codebase-memory-mcp",
    fullName: "DeusData/codebase-memory-mcp",
    description: "高性能代码智能 MCP 服务器：把代码库索引成知识图谱，158种语言，毫秒级响应，零依赖，单文件二进制",
    stars: 10154,
    language: "C",
    color: "#dea584",
    author: "DeusData",
    '通俗讲解': '给你的 AI 编程助手装上"超级大脑"！这个工具把你整个代码库变成知识图谱，AI 提问时毫秒级回答。支持 158 种编程语言，而且是独立二进制文件——不用装任何依赖！今天暴涨 1,029 颗星，Claude Code、Cursor 等编程 AI 的神器搭档。',
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
    id: 6,
    name: "OpenMontage",
    fullName: "calesthio/OpenMontage",
    description: "全球首个开源 Agentic 视频制作系统：12 条管道、52 个工具、500+ Agent 技能，把你的 AI 编程助手变成完整视频工作室",
    stars: 8420,
    language: "Python",
    color: "#3572A5",
    author: "calesthio",
    '通俗讲解': '想让 AI 帮你做视频？OpenMontage 做到了！它把 AI 编程助手变成一个完整的视频制作工作室——有 12 条制作管道、52 个工具、500 多种技能。你只需要描述想要什么视频，AI 自动完成脚本、画面、配音、剪辑。今天暴涨 993 颗星，视频创作者的梦中情工。',
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
    id: 7,
    name: "daily_stock_analysis",
    fullName: "ZhuLinsen/daily_stock_analysis",
    description: "LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行",
    stars: 44330,
    language: "Python",
    color: "#3572A5",
    author: "ZhuLinsen",
    '通俗讲解': '这是一个"AI 股票分析师"！它能自动抓取多市场（A股、港股、美股）行情数据，结合实时新闻，用 LLM 分析给出投资决策建议。还支持自动推送到飞书/微信，最关键的是——支持零成本定时运行！今天新增 519 颗星，特别适合关注投资的你。',
    tutorial: `🎯 今天我们要搭建"AI 股票分析师"！

📦 第一步：克隆项目
git clone https://github.com/ZhuLinsen/daily_stock_analysis.git
cd daily_stock_analysis

✨ 第二步：配置 API Key
在配置文件中填入你的 LLM API Key 和数据源密钥

🎮 第三步：运行分析
python main.py
看看 AI 给你的投资建议！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 8,
    name: "Anthropic-Cybersecurity-Skills",
    fullName: "mukul975/Anthropic-Cybersecurity-Skills",
    description: "754 个结构化网络安全技能供 AI Agent 使用：映射 MITRE ATT&CK、NIST CSF 等 5 大框架，兼容 Claude Code、Cursor、Copilot 等 20+ 平台",
    stars: 17559,
    language: "Python",
    color: "#3572A5",
    author: "mukul975",
    '通俗讲解': '这是给 AI 安全助手准备的"百科全书"！754 个专业网络安全技能，覆盖了 MITRE、NIST 等 5 大安全框架。你的 AI 编程助手装上这些技能后，就能自动检测代码漏洞、评估安全风险。今天新增 445 颗星，AI 安全领域的必备资源。',
    tutorial: `🎯 今天我们要给 AI 装上"安全专家"技能！

📦 第一步：克隆仓库
git clone https://github.com/mukul975/Anthropic-Cybersecurity-Skills.git

✨ 第二步：导入技能
将 skills 目录配置到你的 Claude Code / Cursor 等 AI 编程工具中

🎮 第三步：让 AI 审计代码
告诉 AI "帮我审查这段代码的安全风险"，看看它怎么用 754 个安全知识来帮你！`,
    difficulty: "进阶",
    estimatedTime: "15分钟"
  },
  {
    id: 9,
    name: "deer-flow",
    fullName: "bytedance/deer-flow",
    description: "字节跳动开源的长周期 SuperAgent 框架：研究、编码、创作全能型 AI 智能体，支持沙箱、记忆、工具、子智能体和消息网关",
    stars: 72486,
    language: "Python",
    color: "#3572A5",
    author: "bytedance",
    '通俗讲解': '字节跳动搞了个大招——"超级 AI 智能体"！它能自己研究问题、写代码、做创作，还能调动手下多个"子 AI"一起干活。有记忆、有工具、有沙箱环境，处理复杂任务从几分钟到几小时都能搞定。今天新增 415 颗星，总星标 7 万多，大厂开源的 AI Agent 标杆项目。',
    tutorial: `🎯 今天我们要搭建"AI 超级智能体"！

📦 第一步：克隆项目
git clone https://github.com/bytedance/deer-flow.git
cd deer-flow

✨ 第二步：配置模型
在配置文件中设置你的 LLM API Key

🎮 第三步：让 AI 自主完成任务
输入一个复杂任务，比如"调研 XX 技术并写报告"，看 Deer-Flow 如何分解任务、调度子智能体完成！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 10,
    name: "cognee",
    fullName: "topoteretes/cognee",
    description: "开源 AI Agent 记忆平台：让 AI 智能体拥有跨会话的持久长期记忆，基于自托管知识图谱引擎",
    stars: 18587,
    language: "Python",
    color: "#3572A5",
    author: "topoteretes",
    '通俗讲解': '现在的 AI 有个大问题——聊完就忘！Cognee 就是来解决这个问题的。它给 AI 装上"长期记忆"，每次对话都记得之前的事情。基于知识图谱技术，自托管部署，你的数据完全在自己手里。今天新增 361 颗星，是让 AI 变"聪明"的关键基础设施。',
    tutorial: `🎯 今天我们要给 AI 装上"长期记忆"！

📦 第一步：安装 Cognee
pip install cognee

✨ 第二步：初始化记忆引擎
cognee init

🎮 第三步：让 AI 记住对话
把历史对话喂给它，下次再聊的时候，AI 就能回忆起之前的内容了！`,
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
