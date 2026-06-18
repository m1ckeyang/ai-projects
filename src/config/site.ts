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

// 2026年6月19日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "codebase-memory-mcp",
    fullName: "DeusData/codebase-memory-mcp",
    description: "高性能代码智能 MCP 服务器：把代码库索引成知识图谱，158种语言，毫秒级响应，零依赖，今天暴涨 2,308 颗星",
    stars: 6892,
    language: "C",
    color: "#dea584",
    author: "DeusData",
    '通俗讲解': '给你的 AI 编程助手装上"超级大脑"！这个工具把你整个代码库变成知识图谱，AI 提问时毫秒级回答。支持 158 种编程语言，而且是独立二进制文件——不用装任何依赖！今天暴涨 2,308 颗星，增长猛到离谱，Claude Code、Cursor 等编程 AI 的神器搭档。',
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
    id: 2,
    name: "kilocode",
    fullName: "Kilo-Org/kilocode",
    description: "Kilo 是全栈 AI 编程平台：最受欢迎的开源编程 Agent，VS Code / JetBrains / CLI 全覆盖，今天暴涨 1,339 颗星",
    stars: 21986,
    language: "TypeScript",
    color: "#3572A5",
    author: "Kilo-Org",
    '通俗讲解': '目前最火的开源 AI 编程助手！它在 VS Code、JetBrains 和命令行里都能用，像一个真正的编程搭档——你给它任务，它就自己搞定。今天暴涨 1,339 颗星，稳居开源编程 Agent 第一名！',
    tutorial: `🎯 今天我们要安装"AI 编程搭档"！

📦 第一步：安装 VS Code 扩展
在 VS Code 扩展市场搜索 "Kilo Code"，一键安装

✨ 第二步：配置 AI 模型
支持 Claude、GPT 等多种模型，按需选择

🎮 第三步：开始对话
在编辑器里用自然语言描述你想做什么，AI 直接帮你写代码！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 3,
    name: "zvec",
    fullName: "alibaba/zvec",
    description: "阿里巴巴开源的超轻量级向量数据库：嵌入式、毫秒级搜索十亿级向量，今天暴涨 344 颗星",
    stars: 11183,
    language: "C++",
    color: "#dea584",
    author: "alibaba",
    '通俗讲解': '阿里搞了个"AI 记忆引擎"！向量数据库是 AI 记住东西的关键技术——比如你的 RAG 系统、语义搜索都靠它。zvec 超快超轻量，不需要额外服务器，直接嵌入到你的程序里。今天暴涨 344 颗星，做 AI 应用的必备组件。',
    tutorial: `🎯 今天我们要搭建"AI 记忆引擎"！

📦 第一步：安装
pip install zvec  # Python SDK
npm install @zvec/zvec  # Node.js SDK

✨ 第二步：创建向量数据库
import zvec
db = zvec.VectorDatabase(path="./my_db")
db.add_vectors(embeddings, metadata)

🎮 第三步：搜索
results = db.search(query_vector, top_k=10)
看看 AI 是怎么"记住"和"回忆"信息的！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 4,
    name: "GLM-5",
    fullName: "zai-org/GLM-5",
    description: "智谱 GLM-5 系列模型：从 Vibe Coding 到 Agentic Engineering，编程能力开源最强，今天新增 286 颗星",
    stars: 4063,
    language: "",
    color: "#3572A5",
    author: "zai-org",
    '通俗讲解': '智谱的 GLM-5 系列大模型，编程能力直接拉满！在 SWE-bench Pro 上超过了大部分闭源模型，还能处理 100 万 token 的超长上下文——相当于一次性读完几百本书。今天新增 286 颗星，做 AI 编程的终极武器。',
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
    id: 5,
    name: "flue",
    fullName: "withastro/flue",
    description: "沙盒 Agent 框架：给 AI Agent 提供完整的 TypeScript 运行时环境，支持会话、工具、技能、文件系统隔离",
    stars: 5457,
    language: "TypeScript",
    color: "#3572A5",
    author: "withastro",
    '通俗讲解': 'Astronomy 团队搞的 AI Agent 框架！它不只是让 AI 回答问题，而是给 AI 一个完整的"工作环境"——有会话管理、工具调用、技能加载，还有安全的沙盒环境。就像给 AI 配了一个带防护栏的工作台。今天新增 164 颗星，开发 AI Agent 的首选框架。',
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
    id: 6,
    name: "Hyper-Extract",
    fullName: "yifanfeng97/Hyper-Extract",
    description: "LLM 驱动的知识提取工具：一行命令把非结构化文档变成知识图谱、超图、时空图，今天新增 124 颗星",
    stars: 1706,
    language: "Python",
    color: "#3572A5",
    author: "yifanfeng97",
    '通俗讲解': '读文档读到头疼？这个工具一行命令搞定！你把论文、财报、合同丢进去，它能自动提取出知识图谱、实体关系、甚至时空信息。支持 80+ 种模板，覆盖金融、法律、医疗等各个领域。今天新增 124 颗星，知识工作者的效率神器。',
    tutorial: `🎯 今天我们要让 AI 帮我们"读懂"文档！

📦 第一步：安装
pip install hyperextract

✨ 第二步：解析论文
he parse paper.pdf -t general/academic_graph -o ./paper_kb/

🎮 第三步：查询知识
he search ./paper_kb/ "这篇论文的核心贡献是什么？"
看看 AI 是怎么从一堆文字里提炼知识的！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 7,
    name: "superpowers",
    fullName: "obra/superpowers",
    description: "Agentic 技能框架：一套让 AI 编程 Agent 真正具备自主开发能力的软件方法论，支持 Claude Code、Cursor 等主流工具",
    stars: 4200,
    language: "",
    color: "#3572A5",
    author: "obra",
    '通俗讲解': '市面上的 AI 编程工具这么多，但大多只是"猜代码"。superpowers 是一套"Agent 技能框架"——让你的 AI Agent 像真正的工程师一样工作：先理解需求、制定计划、写测试、再编码。支持 Claude Code、Cursor、Gemini CLI 等 10+ 工具。今天刚上 Trending，增长势头很猛！',
    tutorial: `🎯 今天我们要让 AI Agent 变成"高级工程师"！

📦 第一步：安装 Superpowers
按照 GitHub 仓库的说明安装到你的 AI 编程工具中

✨ 第二步：理解核心流程
需求分析 → 规格说明 → 实施计划 → 子 Agent 驱动开发

🎮 第三步：在自己的项目中试用
告诉 AI 你想做什么，看看它如何像真正的工程师一样规划和执行！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 8,
    name: "timesfm",
    fullName: "google-research/timesfm",
    description: "Google 时间序列基础模型：预训练的预测模型，覆盖金融、气象、销量等多领域，已集成到 BigQuery ML 和 Google Sheets",
    stars: 8500,
    language: "Python",
    color: "#3572A5",
    author: "google-research",
    '通俗讲解': 'Google 搞了个"时间预测神器"！不管你是预测股票走势、天气变化、还是电商销量，这个模型都能帮你搞定。它是预训练过的——不需要重新训练，直接用就行。而且已经集成到了 BigQuery ML 和 Google Sheets 里，连表格都能预测！今天新增 92 颗星。',
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
    id: 9,
    name: "LTX-2",
    fullName: "Lightricks/LTX-2",
    description: "LTX-2 音视频生成模型：首个 DiT 架构的多模态基础模型，同步音视频生成，支持 LoRA 微调",
    stars: 7470,
    language: "Python",
    color: "#3572A5",
    author: "Lightricks",
    '通俗讲解': 'Lightricks 搞了个"AI 影视工厂"！LTX-2 是一个能同时生成音视频的 AI 模型——你给它一段文字描述，它就能生成带声音的视频。还支持 LoRA 微调，你可以用自己的数据训练专属风格。今天新增 47 颗星，视频创作者的终极武器。',
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
    id: 10,
    name: "LibreTranslate",
    fullName: "LibreTranslate/LibreTranslate",
    description: "免费开源机器翻译 API：自托管、离线可用，基于 Argos Translate 引擎，不依赖任何商业服务",
    stars: 3500,
    language: "Python",
    color: "#3572A5",
    author: "LibreTranslate",
    '通俗讲解': '不想用 Google 翻译或 Azure 翻译？LibreTranslate 是你的最佳选择！完全开源、可以自己部署、支持离线翻译。底层用的是 Argos Translate 引擎，隐私安全有保障。今天也在 Trending 榜上，自建翻译服务的首选。',
    tutorial: `🎯 今天我们要搭建"私人翻译引擎"！

📦 第一步：一键部署
docker run -p 5000:5000 libretranslate/libretranslate

✨ 第二步：测试翻译
curl -X POST http://localhost:5000/translate \\
  -d '{"q":"Hello world","source":"en","target":"zh"}'

🎮 第三步：集成到你的应用
在代码中调用 API，你的翻译服务完全掌握在自己手里！`,
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
