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

// 2026年6月16日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "SkillSpector",
    fullName: "NVIDIA/SkillSpector",
    description: "英伟达出品：AI Agent 技能安全扫描器，检测漏洞、恶意模式和安全隐患",
    stars: 6230,
    language: "Python",
    color: "#76B900",
    author: "NVIDIA",
    '通俗讲解': '英伟达出了个 AI 保镖！给你的 AI Agent 装的"技能包"可能有危险——比如偷偷读取你的文件、发送恶意代码。SkillSpector 帮你扫描所有技能包，确保安全。今天暴涨 1,079 个星，增长最猛！',
    tutorial: `🎯 今天我们要给 AI Agent 做"体检"！

📦 第一步：安装
pip install skillspector

✨ 第二步：扫描你的技能包
skillspector scan ~/.claude/skills/
看看有没有不安全的地方

🎮 第三步：修复问题
根据报告修复或移除有风险的技能`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 2,
    name: "Agent-Reach",
    fullName: "Panniantong/Agent-Reach",
    description: "给 AI Agent 装上眼睛！一个 CLI 工具读取和搜索 Twitter、Reddit、YouTube、GitHub、B站、小红书",
    stars: 29966,
    language: "Python",
    color: "#3572A5",
    author: "Panniantong",
    '通俗讲解': '你的 AI 助手只能在你告诉它的信息范围内工作？Agent-Reach 给它装上了"互联网之眼"！用一行命令就能让它搜索 Twitter、Reddit、YouTube、GitHub、B站、小红书……不用花 API 费用，免费用！今天涨了 1,045 个星。',
    tutorial: `🎯 今天我们要让 AI Agent 拥有"互联网之眼"！

📦 第一步：安装
pip install agent-reach

✨ 第二步：搜索 Twitter
agent-reach twitter --query "AI趋势"
看看 AI 在 Twitter 上聊什么

🎮 第三步：搜索 B站
agent-reach bilibili --query "Python教程"
AI 直接帮你找到最好的学习资料！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 3,
    name: "ai-engineering-from-scratch",
    fullName: "rohitg00/ai-engineering-from-scratch",
    description: "从0到1学会 AI 工程：学习、构建、发布——手把手教你打造 AI 产品",
    stars: 32998,
    language: "Python",
    color: "#3572A5",
    author: "rohitg00",
    '通俗讲解': '想学 AI 工程但不知道从哪开始？这个项目是最好的起点！它不只是教你怎么用 AI，而是教你怎么"造"AI——从学习原理、动手构建、到最后发布给别人用。涨到 32,998 个星，今天又涨了 538 个！',
    tutorial: `🎯 今天我们要踏上"AI 工程师"之路！

📦 第一步：克隆仓库
git clone https://github.com/rohitg00/ai-engineering-from-scratch.git
cd ai-engineering-from-scratch

✨ 第二步：阅读入门教程
从 README 开始，按顺序学习每个模块

🎮 第三步：动手实践
挑一个项目开始构建，从简单到复杂，一步步成为 AI 工程师！`,
    difficulty: "进阶",
    estimatedTime: "60分钟"
  },
  {
    id: 4,
    name: "Kronos",
    fullName: "shiyu-coder/Kronos",
    description: "Kronos：面向金融市场的语言基础模型，用AI解读金融语言",
    stars: 30226,
    language: "Python",
    color: "#3572A5",
    author: "shiyu-coder",
    '通俗讲解': 'GPT 读懂文字，Kronos 读懂金融！这个模型专门学习股市、财报、新闻里的"人话"，帮你理解金融市场的走势。比如它看到"美联储加息"就知道该紧张了。今天涨了 395 个星。',
    tutorial: `🎯 今天我们要让 AI 读懂金融市场的"语言"！

📦 第一步：克隆仓库
git clone https://github.com/shiyu-coder/Kronos.git
cd Kronos

✨ 第二步：安装依赖
pip install -r requirements.txt

🎮 第三步：体验模型
python -c "from kronos import Kronos; model = Kronos(); print(model.analyze('美联储加息对股市的影响'))"
看看 AI 怎么解读金融信息！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 5,
    name: "cua",
    fullName: "trycua/cua",
    description: "开源 Computer-Use Agent 基础设施：沙盒、SDK 和基准测试，训练能控制桌面的 AI Agent",
    stars: 18108,
    language: "HTML",
    color: "#3572A5",
    author: "trycua",
    '通俗讲解': '以前的 AI 只能在对话框里聊天，现在的 AI 能控制你的电脑桌面了！cua 就是让这个成为可能的开源基础设施——它提供了沙盒环境、SDK 工具和评测标准，让开发者能训练出真正操控 macOS、Linux、Windows 桌面的 AI Agent。今天涨了 57 个星。',
    tutorial: `🎯 今天我们要搭建"AI 桌面控制器"的基础设施！

📦 第一步：克隆仓库
git clone https://github.com/trycua/cua.git
cd cua

✨ 第二步：安装依赖
pip install -r requirements.txt

🎮 第三步：运行基准测试
python -m cua.benchmark
看看 AI Agent 在桌面操控任务上的表现！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 6,
    name: "chatwoot",
    fullName: "chatwoot/chatwoot",
    description: "开源多渠道客服平台，内置 AI 助手 Captain 自动化回答常见问题",
    stars: 31611,
    language: "Ruby",
    color: "#3572A5",
    author: "chatwoot",
    '通俗讲解': 'Chatwoot 是一个开源的客户服务平台，可以统一管理网站聊天、邮件、WhatsApp 等所有客户咨询。现在还有了 AI 助手 Captain，能自动回答常见问题，大幅减少客服工作量。今天涨了 431 个星。',
    tutorial: `🎯 今天我们要搭建"AI 客服系统"！

📦 第一步：快速部署（Docker）
docker run -d -p 3000:3000 chatwoot/chatwoot:latest

✨ 第二步：登录管理后台
浏览器打开 http://localhost:3000
设置你的品牌和客服人员

🎮 第三步：启用 AI 助手
在设置中开启 Captain AI 功能，让 AI 自动回答常见问题`,
    difficulty: "入门",
    estimatedTime: "20分钟"
  },
  {
    id: 7,
    name: "Self-Hosting-Guide",
    fullName: "mikeroyal/Self-Hosting-Guide",
    description: "自托管指南大全：涵盖 LLMs、WireGuard、自动化、Home Assistant 和家庭服务器搭建",
    stars: 20911,
    language: "Dockerfile",
    color: "#3572A5",
    author: "mikeroyal",
    '通俗讲解': '不想把数据交给大公司？Self-Hosting-Guide 教你把所有服务都搭建在自己家里！包括 AI 大模型（LLMs）、智能家居（Home Assistant）、安全网络（WireGuard）等等。今天涨了 256 个星，是隐私爱好者的必备指南。',
    tutorial: `🎯 今天我们要规划"家庭数据中心"！

📦 第一步：阅读指南
打开仓库 README，了解有哪些自托管方案

✨ 第二步：选一个开始
比如搭建自己的 AI 聊天机器人
docker run -p 3000:8080 ghcr.io/huggingface/text-generation-inference:latest

🎮 第三步：逐步扩展
加上 Home Assistant 管理智能家居，加上 WireGuard 保护网络安全`,
    difficulty: "入门",
    estimatedTime: "30分钟"
  },
  {
    id: 8,
    name: "meshery",
    fullName: "meshery/meshery",
    description: "Meshery：云原生管理平台，支持 K8s、服务网格、AI 运维自动化",
    stars: 10595,
    language: "TypeScript",
    color: "#3572A5",
    author: "meshery",
    '通俗讲解': '公司的服务器越来越多、越来越复杂？Meshery 就是你的"云原生指挥中心"！它能统一管理 Kubernetes、服务网格等各种基础设施，还能用 AI 帮你自动优化。今天涨了 227 个星。',
    tutorial: `🎯 今天我们要搭建"云原生指挥中心"！

📦 第一步：快速启动
kubectl apply -f https://meshery.io/install
kubectl apply -f https://platform-meshery.install

✨ 第二步：打开控制台
浏览器访问 Meshery Dashboard

🎮 第三步：添加你的集群
连接你的 Kubernetes 集群，看看 AI 怎么帮你优化！`,
    difficulty: "进阶",
    estimatedTime: "20分钟"
  },
  {
    id: 9,
    name: "server",
    fullName: "music-assistant/server",
    description: "开源 AI 音乐助手，连接你的流媒体服务，智能推荐和管理音乐库",
    stars: 2365,
    language: "Python",
    color: "#3572A5",
    author: "marcelveldt",
    '通俗讲解': 'music-assistant 是一个智能音乐管家，可以连接你的 Spotify、Apple Music 等账号，统一管理所有音乐。AI 会根据你的听歌习惯智能推荐，还能控制各种智能音箱。今天涨了 226 个星。',
    tutorial: `🎯 今天我们要搭建"个人 AI 音乐管家"！

📦 第一步：安装（需要 Python 3.11+）
pip install music-assistant

✨ 第二步：启动服务
music-assistant --config /path/to/config

🎮 第三步：连接音乐服务
连接你的 Spotify 或 Apple Music，AI 会开始学习你的音乐口味！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 10,
    name: "Introduction-to-Autonomous-Robots",
    fullName: "Introduction-to-Autonomous-Robots/Introduction-to-Autonomous-Robots",
    description: "自主机器人导论：AI 驱动的机器人技术教材，涵盖感知、决策、运动控制",
    stars: 3044,
    language: "TeX",
    color: "#3572A5",
    author: "Introduction-to-Autonomous-Robots",
    '通俗讲解': '想让机器人自己走路、自己避开障碍物？这本教材就是入门指南！从最简单的传感器读到复杂的 AI 决策，一步步教你做出"自主"的机器人。今天涨了 488 个星，机器人爱好者必看！',
    tutorial: `🎯 今天我们要学习"让机器人自己思考"！

📦 第一步：阅读教材
打开仓库中的 PDF 教材，从第一章开始

✨ 第二步：理解基本概念
感知 → 决策 → 行动，这是机器人的三大核心能力

🎮 第三步：动手实践
如果你有机器人硬件，跟着书中的实验一步步搭建
如果没有，可以用仿真器先练习！`,
    difficulty: "进阶",
    estimatedTime: "40分钟"
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
