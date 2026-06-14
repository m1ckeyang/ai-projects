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

// 2026年6月15日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "SkillSpector",
    fullName: "NVIDIA/SkillSpector",
    description: "英伟达出品：AI Agent 技能安全扫描器，检测漏洞、恶意模式和安全隐患",
    stars: 5170,
    language: "Python",
    color: "#76B900",
    author: "NVIDIA",
    '通俗讲解': '英伟达出了个 AI 保镖！给你的 AI Agent 装的各种"技能包"可能有危险——比如偷偷读取你的文件、发送恶意代码。SkillSpector 帮你扫描所有技能包，确保安全。今天暴涨 962 个星，增长最猛！',
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
    name: "Kronos",
    fullName: "shiyu-coder/Kronos",
    description: "Kronos：面向金融市场的语言基础模型，用AI解读金融语言",
    stars: 29869,
    language: "Python",
    color: "#3572A5",
    author: "shiyu-coder",
    '通俗讲解': 'GPT 读懂文字，Kronos 读懂金融！这个模型专门学习股市、财报、新闻里的"人话"，帮你理解金融市场的走势。比如它看到"美联储加息"就知道该紧张了。今天涨了 238 个星。',
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
    id: 3,
    name: "openinterpreter",
    fullName: "openinterpreter/openinterpreter",
    description: "轻量级编码 Agent，支持 Deepseek、Kimi、Qwen 等开源模型，一个命令让 AI 帮你写代码",
    stars: 18000,
    language: "Rust",
    color: "#dea584",
    author: "openinterpreter",
    '通俗讲解': '以前只有 GPT 能帮你写代码，现在 openinterpreter 让免费的开源模型也能当编程助手！装上后在终端输入 i，AI 就上线了——可以写代码、操作浏览器、测试网站，支持 Deepseek、Kimi、通义千问等多个模型。今天又涨了不少星。',
    tutorial: `🎯 今天我们要装一个"免费编程助手"！

📦 第一步：安装（macOS/Linux）
curl -fsSL https://openinterpreter.com/install | sh

✨ 第二步：启动
在终端输入 i
AI 助手就上线了！

🎮 第三步：试试命令
"帮我写一个 Python 爬虫"
"帮我测试这个网页"
看看 AI 怎么帮你干活！`,
    difficulty: "入门",
    estimatedTime: "5分钟"
  },
  {
    id: 4,
    name: "LMCache",
    fullName: "LMCache/LMCache",
    description: "LMCache：最快的 LLM KV Cache 层，大幅提升大模型推理速度",
    stars: 9043,
    language: "Python",
    color: "#3572A5",
    author: "ApostaC",
    '通俗讲解': '大语言模型每次回答问题都要重新"思考"，太慢了！LMCache 就像给 AI 装了一个"记忆缓存"，把之前思考的结果存起来，下次直接调用，速度提升好几倍。今天涨了 271 个星。',
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
    id: 5,
    name: "aisuite",
    fullName: "andrewyng/aisuite",
    description: "统一接口调用多个生成式 AI 提供商，一个库搞定 OpenAI、Anthropic、Google 等",
    stars: 14357,
    language: "Python",
    color: "#3572A5",
    author: "andrewyng",
    '通俗讲解': '想用 GPT-4 用 Anthropic，想用 Claude 用 Google？aisuite 让你用同一套代码就能切换任何 AI 模型！今天还附带了一个桌面 AI 助手 OpenCoworker，可以帮你读文件、发消息、写报告。涨了 290 个星。',
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
    id: 6,
    name: "chatwoot",
    fullName: "chatwoot/chatwoot",
    description: "开源多渠道客服平台，内置 AI 助手 Captain 自动化回答常见问题",
    stars: 31162,
    language: "Ruby",
    color: "#3572A5",
    author: "chatwoot",
    '通俗讲解': 'Chatwoot 是一个开源的客户服务平台，可以统一管理网站聊天、邮件、WhatsApp 等所有客户咨询。现在还有了 AI 助手 Captain，能自动回答常见问题，大幅减少客服工作量。今天涨了 399 个星。',
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
    name: "train-llm-from-scratch",
    fullName: "FareedKhan-dev/train-llm-from-scratch",
    description: "从0开始训练大语言模型：从数据下载、训练到 SFT/PPO/DPO/GRPO 完整流程",
    stars: 6115,
    language: "Python",
    color: "#3572A5",
    author: "FareedKhan-dev",
    '通俗讲解': '想自己训练一个大模型但不知道从哪开始？这个项目手把手教你——从下载数据、搭建 Transformer 架构、训练，到 SFT（微调）、PPO（强化学习）、DPO（偏好优化）全流程都有！用纯 PyTorch 实现，不搞花架子。今天涨了 136 个星。',
    tutorial: `🎯 今天我们要从零训练一个大模型！

📦 第一步：克隆仓库
git clone https://github.com/FareedKhan-dev/train-llm-from-scratch.git
cd train-llm-from-scratch

✨ 第二步：下载训练数据
python scripts/data_download.py

🎮 第三步：开始训练
python scripts/train_transformer.py
等训练完成后，试试用你的模型生成文本！`,
    difficulty: "进阶",
    estimatedTime: "60分钟"
  },
  {
    id: 8,
    name: "obsidian-wiki",
    fullName: "Ar9av/obsidian-wiki",
    description: "AI Agent 数字大脑框架：通过 Obsidian Wiki 让 AI 记住你的知识，越用越聪明",
    stars: 2014,
    language: "Python",
    color: "#3572A5",
    author: "Ar9av",
    '通俗讲解': '每次你问 AI 问题，它都"从零开始"回答，很浪费。obsidian-wiki 给你的 AI 装了个"数字大脑"——它把学到的知识存到 Obsidian 笔记里，下次再问类似问题，AI 就能"回忆"起来！支持 Claude Code、Cursor、Codex 等所有主流 AI 工具。今天涨了 137 个星。',
    tutorial: `🎯 今天我们要给 AI 装一个"数字大脑"！

📦 第一步：安装
pip install obsidian-wiki

✨ 第二步：设置你的"大脑"
obsidian-wiki setup --vault ~/my-digital-brain

🎮 第三步：试试效果
打开 Claude Code 或 Cursor，让它读取你的知识库
AI 就会记住你之前学过的东西了！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 9,
    name: "OpenHands",
    fullName: "OpenHands/OpenHands",
    description: "OpenHands：AI 驱动的开发平台，让 AI 像人类开发者一样完成编程任务",
    stars: 50000,
    language: "Python",
    color: "#3572A5",
    author: "OpenHands",
    '通俗讲解': ' Devin 和 Jules 收费那么贵？OpenHands 是个免费开源的替代品！它能像真正的人类开发者一样——理解需求、写代码、修 bug、跑测试。支持 Claude、GPT 等任何大模型，还能在浏览器里用。今天又涨了不少星。',
    tutorial: `🎯 今天我们要用"免费 AI 程序员"！

📦 第一步：在线试用
打开 https://app.all-hands.dev
用 GitHub 账号登录就能免费试用

📦 第二步：本地部署
docker compose up

✨ 第三步：给 AI 编程任务
"帮我做一个待办事项网页应用"
"帮我修一下这个 bug"
看着 AI 完成所有开发工作！`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 10,
    name: "server",
    fullName: "music-assistant/server",
    description: "开源 AI 音乐助手，连接你的流媒体服务，智能推荐和管理音乐库",
    stars: 2156,
    language: "Python",
    color: "#3572A5",
    author: "marcelveldt",
    '通俗讲解': 'music-assistant 是一个智能音乐管家，可以连接你的 Spotify、Apple Music 等账号，统一管理所有音乐。AI 会根据你的听歌习惯智能推荐，还能控制各种智能音箱。今天涨了 196 个星。',
    tutorial: `🎯 今天我们要搭建"个人 AI 音乐管家"！

📦 第一步：安装（需要 Python 3.11+）
pip install music-assistant

✨ 第二步：启动服务
music-assistant --config /path/to/config

🎮 第三步：连接音乐服务
连接你的 Spotify 或 Apple Music，AI 会开始学习你的音乐口味！`,
    difficulty: "入门",
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
