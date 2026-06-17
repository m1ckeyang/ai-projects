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

// 2026年6月18日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "Agent-Reach",
    fullName: "Panniantong/Agent-Reach",
    description: "给AI Agent装上眼睛：一个CLI工具让它能浏览Twitter、Reddit、YouTube、GitHub、B站、小红书——零API费用",
    stars: 33053,
    language: "Python",
    color: "#3572A5",
    author: "Panniantong",
    '通俗讲解': '你的 AI 助手只会搜 Google？这个工具直接给它装上"眼睛"！一条命令行，AI 就能去 Twitter、Reddit、YouTube、GitHub、B站、小红书上看内容。重点是——零 API 费用，直接抓网页数据！今天暴涨 1,154 颗星，增长猛到离谱，AI Agent 信息获取的终极方案。',
    tutorial: `🎯 今天我们要让 AI 看遍全世界！

📦 第一步：安装
pip install agent-reach

✨ 第二步：简单查询
agent-reach search --platform twitter --query "AI news"
agent-reach search --platform bilibili --query "深度学习教程"

🎮 第三步：集成到 Agent
在 LangChain / AutoGen / CrewAI 中直接调用，AI Agent 就能自主浏览网页获取信息了！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 2,
    name: "UI-TARS-desktop",
    fullName: "bytedance/UI-TARS-desktop",
    description: "字节跳动开源多模态 AI Agent 框架：连接前沿 AI 模型与 Agent 基础设施，让 AI 能操作桌面",
    stars: 36673,
    language: "TypeScript",
    color: "#3572A5",
    author: "bytedance",
    '通俗讲解': '字节跳动搞了个大招！这个框架能让 AI 像人一样操作电脑——看到屏幕截图就能理解并执行操作。相当于给 AI 装上了"眼睛和手"，它可以看到你的桌面然后帮你点按钮、打字、移动鼠标。今天涨了 148 颗星，桌面自动化的新纪元。',
    tutorial: `🎯 今天我们要搭建"AI 桌面助手"！

📦 第一步：克隆项目
git clone https://github.com/bytedance/UI-TARS-desktop.git
cd UI-TARS-desktop

✨ 第二步：安装依赖
npm install

🎮 第三步：运行
npm start
AI 就能通过截图理解你的屏幕并自动操作了！试试让它打开一个文件夹看看！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 3,
    name: "codebase-memory-mcp",
    fullName: "DeusData/codebase-memory-mcp",
    description: "高性能代码智能 MCP 服务器：把代码库索引成知识图谱，158种语言，毫秒级响应，零依赖",
    stars: 5031,
    language: "C",
    color: "#dea584",
    author: "DeusData",
    '通俗讲解': '给 AI 编程工具装上"超级大脑"！这个工具把你的整个代码库变成知识图谱，AI 提问时毫秒级回答。支持 158 种编程语言，而且是一个独立的二进制文件——不用装任何依赖！今天暴涨 718 颗星，Claude Code、Cursor 等编程 AI 的神器搭档。',
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
    name: "OpenMontage",
    fullName: "calesthio/OpenMontage",
    description: "全球首个开源 AI 视频制作系统：500+ Agent 技能，12条管线，把 AI 编程助手变成完整视频工作室",
    stars: 5212,
    language: "Python",
    color: "#3572A5",
    author: "calesthio",
    '通俗讲解': '想自己做 AI 视频？这个就是"AI 视频工厂"！500+ 个 AI 技能，12 条自动化管线——从脚本、配音、画面到剪辑，AI 全自动搞定。把你现有的 AI 编程助手变成视频工作室！今天涨了 71 颗星，短视频创作者的最强武器。',
    tutorial: `🎯 今天我们要搭建"AI 视频工厂"！

📦 第一步：克隆项目
git clone https://github.com/calesthio/OpenMontage.git
cd OpenMontage

✨ 第二步：安装依赖
pip install -r requirements.txt

🎮 第三步：生成你的第一个视频
python generate.py --script "你的视频脚本"
AI 会自动生成配音、画面、字幕，一条龙搞定！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 5,
    name: "continue",
    fullName: "continuedev/continue",
    description: "开源 AI 编程 Agent：理解你的代码库，在 IDE 中直接对话、生成代码、调试，开发者必备",
    stars: 33857,
    language: "TypeScript",
    color: "#3572A5",
    author: "continuedev",
    '通俗讲解': 'VS Code / Cursor 里最好的开源 AI 编程助手！它不像 Copilot 那样只是猜代码，而是真正理解你的整个项目。你可以直接问它"这个函数怎么工作的？"、"帮我重构这段代码"，它真的能看懂并执行。今天涨了 38 颗星，稳居 AI 编程工具前三。',
    tutorial: `🎯 今天我们要安装"AI 编程搭档"！

📦 第一步：安装 VS Code 扩展
在 VS Code 扩展市场搜索 "Continue"，一键安装

✨ 第二步：配置 AI 模型
支持 Claude、GPT-4、本地 LLM 等多种模型，按需选择

🎮 第三步：开始对话
在 VS Code 里打开 /chat，用自然语言描述你想做什么，AI 直接帮你写代码！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 6,
    name: "rlm",
    fullName: "alexzhang13/rlm",
    description: "递归语言模型通用推理库：支持多种沙箱环境，即插即用，灵活调用 LLM",
    stars: 4890,
    language: "Python",
    color: "#3572A5",
    author: "alexzhang13",
    '通俗讲解': '想让 LLM 自己调用自己？rlm 是一个"递归语言模型"推理库——它让 AI 可以在推理过程中反复"思考-调用-再思考"。就像一个学霸做数学题，做不出来就回退一步重新想。支持各种沙箱环境，即插即用。今天涨了 37 颗星，复杂推理任务的秘密武器。',
    tutorial: `🎯 今天我们要让 AI "反复思考"！

📦 第一步：安装
pip install rlm

✨ 第二步：简单推理
from rlm import RecursiveLM
agent = RecursiveLM(model="gpt-4")
result = agent.reason("解决一个复杂的逻辑推理问题")

🎮 第三步：自定义沙箱
支持 Docker、Jupyter Notebook 等多种沙箱，AI 可以在安全环境中运行代码来辅助推理！`,
    difficulty: "进阶",
    estimatedTime: "15分钟"
  },
  {
    id: 7,
    name: "superpowers",
    fullName: "obra/superpowers",
    description: "Agentic 技能框架：一套真正能用的 AI Agent 软件开发方法论，让 Agent 拥有自主能力",
    stars: 4200,
    language: "Python",
    color: "#3572A5",
    author: "obra",
    '通俗讲解': '市面上 AI Agent 框架这么多，但真正好用的不多。superpowers 是一套"Agent 技能框架"——不是代码库，而是一种方法论，教你怎么让 AI Agent 真正具备自主能力。从工具调用、记忆管理到任务规划，一站式搞定。今天刚上 Trending，增长势头很猛！',
    tutorial: `🎯 今天我们要学习"Agent 技能框架"！

📦 第一步：阅读文档
打开 https://github.com/obra/superpowers 阅读 README 和方法论说明

✨ 第二步：理解核心概念
超链接 → 技能注册 → Agent 编排 → 自主决策

🎮 第三步：在自己的项目中集成
参考示例代码，把这套方法论应用到你的 AI Agent 项目中！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 8,
    name: "timesfm",
    fullName: "google-research/timesfm",
    description: "Google 时间序列基础模型：预训练的时间序列预测模型，覆盖金融、气象、销量等多领域",
    stars: 8500,
    language: "Python",
    color: "#3572A5",
    author: "google-research",
    '通俗讲解': 'Google 搞了个"时间预测神器"！不管你是预测股票走势、天气变化、还是电商销量，这个模型都能帮你搞定。它是预训练过的——不需要重新训练，直接用就行。今天涨了 92 颗星，金融分析、供应链预测必备。',
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
    name: "meshery",
    fullName: "meshery/meshery",
    description: "CNCF 云原生管理平台：AI 驱动的 K8s 可视化运维，380+ 云原生工具集成",
    stars: 10991,
    language: "TypeScript",
    color: "#3178C6",
    author: "meshery",
    '通俗讲解': '公司有几十个 Kubernetes 集群管不过来？Meshery 就是你的"云原生指挥中心"！它用 AI 帮你自动优化 K8s 配置，统一管理 380+ 种云原生工具。今天涨了 199 颗星，DevOps 团队的必备神器。',
    tutorial: `🎯 今天我们要搭建"云原生指挥中心"！

📦 第一步：一键安装
curl -L https://meshery.io/install | bash

✨ 第二步：启动服务
mesheryctl system start

🎮 第三步：连接 Kubernetes 集群
浏览器打开 Dashboard，连上你的 K8s 集群，看看 AI 怎么帮你一键优化配置！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 10,
    name: "iroh",
    fullName: "n0-computer/iroh",
    description: "模块化网络协议栈：用密钥替代 IP 地址的 P2P 通信方案，Rust 编写，性能怪兽",
    stars: 9604,
    language: "Rust",
    color: "#dea584",
    author: "n0-computer",
    '通俗讲解': '传统的网络连接靠 IP 地址，但 IP 会变、会断。iroh 换了个思路——用"密钥"代替 IP 来建立 P2P 连接。虽然不算纯 AI 项目，但很多 AI Agent 架构用它来做去中心化的通信层。用 Rust 写的，速度飞快！今天暴涨 422 颗星。',
    tutorial: `🎯 今天我们要学习"去中心化网络"！

📦 第一步：了解项目
打开 https://github.com/n0-computer/iroh 阅读 README

✨ 第二步：运行示例
cargo run --example hello-world
看看 P2P 连接是怎么通过密钥建立的！

🎮 第三步：理解核心概念
iroh 的核心是"节点密钥"代替"IP地址"，理解了这一点你就入门了！`,
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
