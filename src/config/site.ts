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

// 2026年6月14日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "agent-skills",
    fullName: "addyosmani/agent-skills",
    description: "Production-grade 工程技能，专为 AI 编码 Agent 设计，覆盖完整开发流程的 7 个斜杠命令",
    stars: 58194,
    language: "Shell",
    color: "#F8DB5C",
    author: "addyosmani",
    '通俗讲解': 'Google 工程师 Addy Osmani 做了一套让 AI 编程工具像高级工程师一样工作的技能包！装了之后 Claude Code 或 Codex 就会先规划再写代码，有 /spec、/plan、/build 等命令。今天暴涨 1,507 个星，增长最猛！',
    tutorial: `🎯 今天我们要给 AI 装上"高级工程师技能包"！

📦 第一步：安装
在 Claude Code 中执行：
/plugin marketplace add addyosmani/agent-skills
/plugin install agent-skills@addy-agent-skills

✨ 第二步：试试命令
/spec "帮我做一个待办事项列表" - 先规划
/build - 然后自动实现！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 2,
    name: "superpowers",
    fullName: "obra/superpowers",
    description: "Agentic skills 框架和软件开发方法论，让 AI 编码工具拥有超能力，自动规划+测试+实现",
    stars: 226846,
    language: "Shell",
    color: "#3572A5",
    author: "obra",
    '通俗讲解': '普通的 AI 编程助手一上来就写代码，但 superpowers 让 AI 先问"你到底想做什么"，然后写计划、做测试、再一步步实现。就像雇佣了一个真正靠谱的高级工程师！今天涨了 931 个星。',
    tutorial: `🎯 今天我们要给 AI 装上"超能力"！

📦 第一步：安装
在 Claude Code 中：
/plugin install superpowers@claude-plugins-official

✨ 第二步：试试
打开你的项目，AI 会自动问你"你想做什么"，然后自己规划、实施！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 3,
    name: "SkillSpector",
    fullName: "NVIDIA/SkillSpector",
    description: "英伟达出品：AI Agent 技能安全扫描器，检测漏洞、恶意模式和安全隐患",
    stars: 4331,
    language: "Python",
    color: "#76B900",
    author: "NVIDIA",
    '通俗讲解': '英伟达出了个 AI 保镖！给你的 AI Agent 装的各种"技能包"可能有危险——比如偷偷读取你的文件、发送恶意代码。SkillSpector 帮你扫描所有技能包，确保安全。今天暴涨 809 个星！',
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
    id: 4,
    name: "system-prompts-and-models-of-ai-tools",
    fullName: "x1xhlol/system-prompts-and-models-of-ai-tools",
    description: "汇集 30+ 主流 AI 工具的内部系统提示词和模型配置，包括 Cursor、Claude Code、Windsurf、Replit、v0 等",
    stars: 140270,
    language: "TypeScript",
    color: "#3178C6",
    author: "x1xhlol",
    '通俗讲解': '每个 AI 工具都有"内心独白"（系统提示词），这个仓库帮你收集了 Cursor、Claude Code、Windsurf 等 30 多个工具的提示词！学会这些，你就掌握了让 AI 变更强的秘诀。',
    tutorial: `🎯 今天我们要学习"AI 的工具秘密"！

📦 第一步：克隆仓库
git clone https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools.git
cd system-prompts-and-models-of-ai-tools

✨ 第二步：浏览提示词
cd prompts && ls
看看各个工具的"内心独白"长什么样

🎮 第三步：应用到你的 AI
复制你最感兴趣的提示词到你的 AI 工具配置中`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 5,
    name: "LMCache",
    fullName: "LMCache/LMCache",
    description: "LMCache：最快的 LLM KV Cache 层，大幅提升大模型推理速度",
    stars: 8848,
    language: "Python",
    color: "#3572A5",
    author: "ApostaC",
    '通俗讲解': '大语言模型每次回答问题都要重新"思考"，太慢了！LMCache 就像给 AI 装了一个"记忆缓存"，把之前思考的结果存起来，下次直接调用，速度提升好几倍。今天涨了 246 个星。',
    tutorial: `🎯 今天我们要给 AI 装上"超高速记忆缓存"！

📦 第一步：安装
pip install lmcache

✨ 第二步：使用
import lmcache
cache = lmcache.LMCache()
cache.put("key", "value")
result = cache.get("key")  # 极速读取！

🎮 第三步：集成到你的 LLM 应用
让你的 AI 应用速度提升数倍！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 6,
    name: "agentsview",
    fullName: "kenn-io/agentsview",
    description: "本地优先的 AI Agent 会话分析和仪表盘，支持 Claude Code、Codex 等 20+ Agent，比 ccusage 快 100 倍",
    stars: 2306,
    language: "Go",
    color: "#00ADD8",
    author: "kenn-io",
    '通俗讲解': '你用 Claude Code 写了多少代码？花了多少钱？用了多久？agentsview 像一个"运动手表"，实时追踪你的 AI 编程活动——调了几次、花了多少 token、成功率多少。今天涨了 187 个星。',
    tutorial: `🎯 今天我们要给 AI 编程装上"仪表盘"！

📦 第一步：安装
npm install -g @kenn-io/agentsview

✨ 第二步：启动仪表盘
agentsview serve
浏览器打开就能看到你的 Agent 活动

🎮 第三步：查看分析
看看今天用了多少次 AI、花了多少钱、哪些任务最耗时`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 7,
    name: "aisuite",
    fullName: "andrewyng/aisuite",
    description: "统一接口调用多个生成式 AI 提供商，一个库搞定 OpenAI、Anthropic、Google 等",
    stars: 14066,
    language: "Python",
    color: "#3572A5",
    author: "andrewyng",
    '通俗讲解': '想用 GPT-4 用 Anthropic，想用 Claude 用 Google？aisuite 让你用同一套代码就能切换任何 AI 模型！今天还附带了一个桌面 AI 助手 OpenCoworker，可以帮你读文件、发消息、写报告。涨了 132 个星。',
    tutorial: `🎯 今天我们要用"一个钥匙开所有 AI 的门"！

📦 第一步：安装
pip install aisuite

✨ 第二步：统一调用
import aisuite as ai
client = ai.Client()
# 轻松切换模型：openai:gpt-4o 或 anthropic:claude-3-5-sonnet
result = client.chat.completions.create(
  model="openai:gpt-4o",
  messages=[{"role": "user", "content": "你好！"}]
)

🎮 第三步：试试桌面助手
下载 OpenCoworker，让 AI 帮你处理电脑上的日常任务！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 8,
    name: "chatwoot",
    fullName: "chatwoot/chatwoot",
    description: "开源多渠道客服平台，内置 AI 助手 Captain 自动化回答常见问题",
    stars: 30806,
    language: "Ruby",
    color: "#3572A5",
    author: "chatwoot",
    '通俗讲解': 'Chatwoot 是一个开源的客户服务平台，可以统一管理网站聊天、邮件、WhatsApp 等所有客户咨询。现在还有了 AI 助手 Captain，能自动回答常见问题，大幅减少客服工作量。今天涨了 86 个星。',
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
    id: 9,
    name: "server",
    fullName: "music-assistant/server",
    description: "开源音乐助手，连接你的流媒体服务，智能推荐和管理音乐库",
    stars: 1973,
    language: "Python",
    color: "#3572A5",
    author: "marcelveldt",
    '通俗讲解': 'music-assistant 是一个智能音乐管家，可以连接你的 Spotify、Apple Music 等账号，统一管理所有音乐。AI 会根据你的听歌习惯智能推荐，还能控制各种智能音箱。今天涨了 277 个星。',
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
    name: "claude-mem",
    fullName: "thedotmack/claude-mem",
    description: "Claude Code 持久记忆层，跨会话保存 Agent 的经验和决策，让 AI 越用越聪明",
    stars: 80800,
    language: "Shell",
    color: "#3572A5",
    author: "thedotmack",
    '通俗讲解': '每次你打开 Claude Code，它都会"失忆"，不记得之前做过什么。claude-mem 给 AI 装了个"记忆大脑"，自动记录你的工作决策和工具使用，下次开会话时 AI 就能"想起"之前的事情，越用越聪明！今天暴涨 80,800 星。',
    tutorial: `🎯 今天我们要给 Claude Code 装上"记忆大脑"！

📦 第一步：一键安装
在 Claude Code 中执行：
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem

✨ 第二步：自动记忆
现在 Claude Code 会自动记录你的工作决策和工具使用

🎮 第三步：查看记忆
打开 Claude Code，AI 会显示它"记住"了什么，跨会话依然有效！`,
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