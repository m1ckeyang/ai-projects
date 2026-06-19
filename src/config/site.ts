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
    stars: 38263,
    language: "Python",
    color: "#3572A5",
    author: "chopratejas",
    '通俗讲解': '给你的 AI 聊天省"脑细胞"！LLM 是按字数收钱的——这个工具在你把内容发给 AI 之前，先压缩一遍，去掉废话，保留精华。结果就是：少花 token，同样答得好。支持库、代理、MCP Server 三种方式，今天暴涨 3,938 颗星，爆涨到 Trending 第一！',
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
    name: "timesfm",
    fullName: "google-research/timesfm",
    description: "Google 时间序列基础模型 TimesFM：预训练的预测模型，覆盖金融、气象、销量等多领域，已集成到 BigQuery ML 和 Google Sheets",
    stars: 24030,
    language: "Python",
    color: "#3572A5",
    author: "google-research",
    '通俗讲解': 'Google 搞了个"时间预测神器"！不管你是预测股票走势、天气变化、还是电商销量，这个模型都能帮你搞定。它是预训练过的——不需要重新训练，直接用就行。而且已经集成到了 BigQuery ML 和 Google Sheets 里，连表格都能预测！今天暴涨 1,516 颗星。',
    tutorial: `🎯 今天我们要搭建"时间预测引擎"！

📦 第一步：安装
pip install timesfm

✨ 第二步：加载预训练模型
import timesfm
tfm = timesfm.TimesFM(context_length=512, horizon_length=128)
tfm.load_from_checkpoint(checkpoint_path="path/to/checkpoint")

🎮 第三步：预测
predictions = tfm.forecast(input_series)
看看 AI 预测的未来数据！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 3,
    name: "codebase-memory-mcp",
    fullName: "DeusData/codebase-memory-mcp",
    description: "高性能代码智能 MCP 服务器：把代码库索引成知识图谱，158种语言，毫秒级响应，零依赖，单文件二进制",
    stars: 8071,
    language: "C",
    color: "#dea584",
    author: "DeusData",
    '通俗讲解': '给你的 AI 编程助手装上"超级大脑"！这个工具把你整个代码库变成知识图谱，AI 提问时毫秒级回答。支持 158 种编程语言，而且是独立二进制文件——不用装任何依赖！今天暴涨 1,055 颗星，Claude Code、Cursor 等编程 AI 的神器搭档。',
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
    id: 4,
    name: "LTX-2",
    fullName: "Lightricks/LTX-2",
    description: "LTX-2 音视频生成模型：首个 DiT 架构的多模态基础模型，同步音视频生成，支持 LoRA 微调",
    stars: 7649,
    language: "Python",
    color: "#3572A5",
    author: "Lightricks",
    '通俗讲解': 'Lightricks 搞了个"AI 影视工厂"！LTX-2 是一个能同时生成音视频的 AI 模型——你给它一段文字描述，它就能生成带声音的视频。还支持 LoRA 微调，你可以用自己的数据训练专属风格。今天新增 196 颗星，视频创作者的终极武器。',
    tutorial: `🎯 今天我们要搭建"AI 影视工厂"！

📦 第一步：克隆项目
git clone https://github.com/Lightricks/LTX-2.git
cd LTX-2

✨ 第二步：安装依赖
uv sync --frozen
source .venv/bin/activate

🎮 第三步：生成你的第一个视频
按照仓库示例，输入文字描述，看看 AI 生成的视频！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 5,
    name: "OpenMontage",
    fullName: "calesthio/OpenMontage",
    description: "全球首个开源 Agentic 视频制作系统：12 条管道、52 个工具、500+ Agent 技能，把你的 AI 编程助手变成完整视频工作室",
    stars: 6194,
    language: "Python",
    color: "#3572A5",
    author: "calesthio",
    '通俗讲解': '想让 AI 帮你做视频？OpenMontage 做到了！它把 AI 编程助手变成一个完整的视频制作工作室——有 12 条制作管道、52 个工具、500 多种技能。你只需要描述想要什么视频，AI 自动完成脚本、画面、配音、剪辑。今天新增 236 颗星，视频创作者的梦中情工。',
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
    id: 6,
    name: "flue",
    fullName: "withastro/flue",
    description: "沙盒 Agent 框架：给 AI Agent 提供完整的 TypeScript 运行时环境，支持会话、工具、技能、文件系统隔离",
    stars: 5796,
    language: "TypeScript",
    color: "#3572A5",
    author: "withastro",
    '通俗讲解': 'Astronomy 团队搞的 AI Agent 框架！它不只是让 AI 回答问题，而是给 AI 一个完整的"工作环境"——有会话管理、工具调用、技能加载，还有安全的沙盒环境。就像给 AI 配了一个带防护栏的工作台。今天新增 305 颗星，开发 AI Agent 的首选框架。',
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
    name: "GLM-5",
    fullName: "zai-org/GLM-5",
    description: "智谱 GLM-5 系列模型：从 Vibe Coding 到 Agentic Engineering，编程能力开源最强，支持百万 token 上下文",
    stars: 4514,
    language: "",
    color: "#3572A5",
    author: "zai-org",
    '通俗讲解': '智谱的 GLM-5 系列大模型，编程能力直接拉满！在 SWE-bench Pro 上超过了大部分闭源模型，还能处理 100 万 token 的超长上下文——相当于一次性读完几百本书。今天新增 478 颗星，做 AI 编程的终极武器。',
    tutorial: `🎯 今天我们要体验"AI 编程大师"！

📦 第一步：获取 API Key
去 Z.ai 平台注册并获取 API Key

✨ 第二步：调用 GLM-5
from openai import OpenAI
client = OpenAI(base_url="https://open.bigmodel.cn/api/paas/v4/", api_key="your-key")
response = client.chat.completions.create(
    model="glm-5",
    messages=[{"role": "user", "content": "帮我写一个快速排序"}]
)

🎮 第三步：感受编程能力
试试让它帮你重构复杂项目、调试 Bug，看看 AI 的编程水平！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 8,
    name: "worldmonitor",
    fullName: "koala73/worldmonitor",
    description: "实时全球情报仪表盘：AI 驱动的新闻聚合、地缘政治监控和基础设施追踪，统一态势感知界面",
    stars: 57148,
    language: "TypeScript",
    color: "#3572A5",
    author: "koala73",
    '通俗讲解': '给世界装了个"AI 雷达"！这个工具用 AI 实时监控全球新闻、地缘政治事件和基础设施动态，把所有信息整合到一个仪表盘里。就像看新闻有了超级英雄视角——一眼看透全球局势。今天新增 300 颗星，适合关注国际形势的朋友。',
    tutorial: `🎯 今天我们要搭建"全球情报站"！

📦 第一步：克隆项目
git clone https://github.com/koala73/worldmonitor.git
cd worldmonitor

✨ 第二步：安装依赖
npm install

🎮 第三步：启动仪表盘
npm run dev
打开浏览器看看 AI 实时追踪的全球动态！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 9,
    name: "palmier-pro",
    fullName: "palmier-io/palmier-pro",
    description: "专为 AI 打造的 macOS 视频编辑器：AI 驱动的剪辑、转场、特效，让视频创作像聊天一样简单",
    stars: 1760,
    language: "Swift",
    color: "#3572A5",
    author: "palmier-io",
    '通俗讲解': 'macOS 上的"AI 视频剪辑神器"！传统视频编辑要学很多技巧，但这个工具用 AI 帮你搞定一切——你说"把这段剪短一点"，它自己就办了。支持 AI 转场、AI 特效、智能配音，让视频创作像聊天一样简单。今天暴涨 749 颗星，Mac 用户的福音！',
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
    id: 10,
    name: "agent-native",
    fullName: "BuilderIO/agent-native",
    description: "Agent-Native 应用框架：专门为 AI Agent 设计的开发框架，让应用原生支持 Agent 交互模式",
    stars: 987,
    language: "TypeScript",
    color: "#3572A5",
    author: "BuilderIO",
    '通俗讲解': 'Builder.IO 团队搞的新框架——专门给 AI Agent 用的！以前我们写应用是给"人"用的，现在这个框架让应用天生就能和 AI Agent 对话。你的后端 API 可以直接被 Agent 调用，Agent 也能直接操作你的应用。今天新增 210 颗星，未来 AI 原生应用的必备框架。',
    tutorial: `🎯 今天我们要搭建"AI 原生应用"！

📦 第一步：初始化项目
npm create agent-native@latest my-app
cd my-app

✨ 第二步：定义你的 Agent 接口
按照模板配置 API 端点和 Agent 交互逻辑

🎮 第三步：运行并测试
npm run dev
看看 AI Agent 如何和你的应用无缝交互！`,
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
