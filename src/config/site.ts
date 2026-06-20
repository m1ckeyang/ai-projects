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

// 2026年6月20日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "headroom",
    fullName: "chopratejas/headroom",
    description: "压缩工具输出、日志、文件和 RAG 块后再送入 LLM，减少 60-95% token 消耗，同时保持答案质量。Library、Proxy、MCP Server 三种形态",
    stars: 41568,
    language: "Python",
    color: "#3572A5",
    author: "chopratejas",
    '通俗讲解': '给你的 AI 聊天省"脑细胞"！LLM 是按字数收钱的——这个工具在你把内容发给 AI 之前，先压缩一遍，去掉废话，保留精华。结果就是：少花 token，同样答得好。支持库、代理、MCP Server 三种方式，今天暴涨 3,786 颗星，爆涨到 Trending 第一！',
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
    name: "codebase-memory-mcp",
    fullName: "DeusData/codebase-memory-mcp",
    description: "高性能代码智能 MCP 服务器：把代码库索引成知识图谱，158种语言，毫秒级响应，零依赖，单文件二进制",
    stars: 9210,
    language: "C",
    color: "#dea584",
    author: "DeusData",
    '通俗讲解': '给你的 AI 编程助手装上"超级大脑"！这个工具把你整个代码库变成知识图谱，AI 提问时毫秒级回答。支持 158 种编程语言，而且是独立二进制文件——不用装任何依赖！今天暴涨 1,267 颗星，Claude Code、Cursor 等编程 AI 的神器搭档。',
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
    id: 3,
    name: "OpenMontage",
    fullName: "calesthio/OpenMontage",
    description: "全球首个开源 Agentic 视频制作系统：12 条管道、52 个工具、500+ Agent 技能，把你的 AI 编程助手变成完整视频工作室",
    stars: 6946,
    language: "Python",
    color: "#3572A5",
    author: "calesthio",
    '通俗讲解': '想让 AI 帮你做视频？OpenMontage 做到了！它把 AI 编程助手变成一个完整的视频制作工作室——有 12 条制作管道、52 个工具、500 多种技能。你只需要描述想要什么视频，AI 自动完成脚本、画面、配音、剪辑。今天新增 677 颗星，视频创作者的梦中情工。',
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
    id: 4,
    name: "palmier-pro",
    fullName: "palmier-io/palmier-pro",
    description: "专为 AI 打造的 macOS 视频编辑器：AI 驱动的剪辑、转场、特效，让视频创作像聊天一样简单",
    stars: 3137,
    language: "Swift",
    color: "#3572A5",
    author: "palmier-io",
    '通俗讲解': 'macOS 上的"AI 视频剪辑神器"！传统视频编辑要学很多技巧，但这个工具用 AI 帮你搞定一切——你说"把这段剪短一点"，它自己就办了。支持 AI 转场、AI 特效、智能配音，让视频创作像聊天一样简单。今天暴涨 904 颗星，Mac 用户的福音！',
    tutorial: `🎯 今天我们要体验"AI 视频剪辑"！

📦 第一步：安装 Palmier Pro
从 Mac App Store 或官网下载安装

✨ 第二步：导入你的素材
把视频、图片拖进编辑器

🎮 第三步：用自然语言指挥 AI
输入"帮我做个炫酷的开场"，AI 自动完成剪辑！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 5,
    name: "kilocode",
    fullName: "Kilo-Org/kilocode",
    description: "Kilo 全栈 AI 编程平台：在 VS Code、JetBrains、CLI 中使用 500+ 模型进行编程，开源免费，支持多模型切换",
    stars: 23295,
    language: "TypeScript",
    color: "#3572A5",
    author: "Kilo-Org",
    '通俗讲解': 'Kilo Code 是个"AI 编程全能王"！你可以在 VS Code、JetBrains 甚至命令行里用它，支持 500 多种 AI 模型随便换——GPT、Claude、Gemini 全都有。关键是开源免费，没有中间商赚差价。今天新增 470 颗星，程序员必备神器。',
    tutorial: `🎯 今天我们要体验"AI 编程全能王"！

📦 第一步：安装
npm install -g @kilocode/cli

✨ 第二步：启动 Kilo
在任何项目目录下运行 kilo

🎮 第三步：选择模型
Kilo 支持 500+ 模型，你可以随时切换，看看哪个模型最适合你的项目！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 6,
    name: "flue",
    fullName: "withastro/flue",
    description: "沙盒 Agent 框架：给 AI Agent 提供完整的 TypeScript 运行时环境，支持会话、工具、技能、文件系统隔离",
    stars: 6058,
    language: "TypeScript",
    color: "#3572A5",
    author: "withastro",
    '通俗讲解': 'Astronomy 团队搞的 AI Agent 框架！它不只是让 AI 回答问题，而是给 AI 一个完整的"工作环境"——有会话管理、工具调用、技能加载，还有安全的沙盒环境。就像给 AI 配了一个带防护栏的工作台。今天新增 313 颗星，开发 AI Agent 的首选框架。',
    tutorial: `🎯 今天我们要搭建"AI Agent 工作台"！

📦 第一步：初始化项目
npm create flue@latest my-agent
cd my-agent

✨ 第二步：创建你的第一个 Agent
按照模板配置 model、tools、skills

🎮 第三步：运行 Agent
npm run dev
看看 AI 在你的沙盒里自主完成任务！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 7,
    name: "voicebox",
    fullName: "jamiepine/voicebox",
    description: "开源 AI 语音工作室：克隆声音、语音合成、全局听写，23 种语言，7 个 TTS 引擎，本地运行完全隐私",
    stars: 30959,
    language: "TypeScript",
    color: "#3572A5",
    author: "jamiepine",
    '通俗讲解': 'Voicebox 是个"AI 语音全能工作室"！它能克隆任何人的声音、用 23 种语言生成语音、甚至全局听写——按个快捷键就能说话打字。关键是全部本地运行，你的声音数据不会离开电脑。今天新增 140 颗星，替代 ElevenLabs 的最佳选择。',
    tutorial: `🎯 今天我们要搭建"AI 语音工作室"！

📦 第一步：下载 Voicebox
去 voicebox.sh 下载对应系统的安装包

✨ 第二步：克隆你的声音
录几秒自己的声音，Voicebox 就能克隆

🎮 第三步：生成语音或全局听写
试试用克隆的声音说一句话，或者按快捷键直接语音打字！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 8,
    name: "twenty",
    fullName: "twentyhq/twenty",
    description: "开源 CRM，为 AI 而生：Salesforce 的免费替代品，内置 AI 功能，支持自动化客户管理",
    stars: 50809,
    language: "TypeScript",
    color: "#3572A5",
    author: "twentyhq",
    '通俗讲解': 'Twenty 是个"AI 驱动的免费 CRM"！它是 Salesforce 的开源替代品，天生为 AI 设计——能自动分析客户数据、生成销售预测、智能推荐下一步行动。今天新增 140 颗星，创业公司和自由职业者的客户管理神器。',
    tutorial: `🎯 今天我们要搭建"AI 客户管理系统"！

📦 第一步：部署 Twenty
docker compose up -d  # 一键启动

✨ 第二步：访问控制台
打开浏览器访问 http://localhost:3000

🎮 第三步：体验 AI 功能
导入你的客户数据，看看 AI 怎么帮你分析和管理！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 9,
    name: "timesfm",
    fullName: "google-research/timesfm",
    description: "Google 时间序列基础模型 TimesFM 2.5：预训练预测模型，200M 参数，支持 16K 上下文，已集成 BigQuery ML 和 Google Sheets",
    stars: 24475,
    language: "Python",
    color: "#3572A5",
    author: "google-research",
    '通俗讲解': 'Google 搞了个"时间预测神器"！不管你是预测股票走势、天气变化、还是电商销量，这个模型都能帮你搞定。最新版本 TimesFM 2.5 只用 2 亿参数（之前 5 亿），但支持 16 倍长的上下文，精度反而更高。已经集成到 BigQuery ML 和 Google Sheets 里了！',
    tutorial: `🎯 今天我们要搭建"时间预测引擎"！

📦 第一步：安装
pip install timesfm[torch]

✨ 第二步：加载预训练模型
import timesfm
model = timesfm.TimesFM_2p5_200M_torch.from_pretrained("google/timesfm-2.5-200m-pytorch")

🎮 第三步：预测
predictions = model.forecast(horizon=12, inputs=[your_data])
看看 AI 预测的未来数据！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 10,
    name: "jcode",
    fullName: "1jehuang/jcode",
    description: "Coding Agent Harness：让 AI 编程 Agent 安全执行代码的工具箱，支持沙盒执行和权限控制",
    stars: 7372,
    language: "Rust",
    color: "#dea584",
    author: "1jehuang",
    '通俗讲解': 'JCode 是给 AI 编程 Agent 配的"安全保险栓"！AI 写的代码直接运行太危险了——这个工具提供沙盒环境和权限控制，让 AI 可以在安全的环境下执行代码、调试程序。支持 Rust 编写的高性能执行引擎，今天新增 108 颗星，AI 编程安全必备。',
    tutorial: `🎯 今天我们要搭建"AI 编程安全沙盒"！

📦 第一步：安装 JCode
cargo install jcode  # 或者从 Release 下载二进制

✨ 第二步：配置沙盒环境
按照 README 配置执行权限和安全策略

🎮 第三步：让 AI 安全执行代码
把 AI 生成的代码丢进沙盒，看看它在受限环境中能不能跑通！`,
    difficulty: "进阶",
    estimatedTime: "15分钟"
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
