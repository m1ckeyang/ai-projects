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

// 2026年6月10日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "last30days-skill",
    fullName: "mvanhorn/last30days-skill",
    description: "AI Agent 技能，能从 Reddit、X、YouTube、HN、Polymarket 等平台研究任何话题并生成总结",
    stars: 38969,
    language: "Python",
    color: "#3572A5",
    author: "mvanhorn",
    '通俗讲解': '想象一下你有一个全能的研究助手，你问它"最近有什么热门话题"，它就去 Reddit、Twitter、YouTube 上逛一圈，然后把最重要的信息整理好给你。今天又涨了 2,561 个星，增长最猛！',
    tutorial: `🎯 今天我们要做一个"AI 调研助手"！\n\n📦 第一步：安装\ngit clone https://github.com/mvanhorn/last30days-skill.git\ncd last30days-skill\n\n✨ 第二步：设置\npip install -r requirements.txt\n\n🎮 第三步：运行\n给它一个话题，它就去全网搜索并给你报告！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 2,
    name: "system-prompts-and-models-of-ai-tools",
    fullName: "x1xhlol/system-prompts-and-models-of-ai-tools",
    description: "汇集 30+ 主流 AI 工具的内部系统提示词和模型配置，包括 Cursor、Claude Code、Windsurf、Replit 等",
    stars: 15200,
    language: "TypeScript",
    color: "#3178C6",
    author: "x1xhlol",
    '通俗讲解': '每个 AI 工具都有"内心独白"（系统提示词），这个仓库帮你收集了 Cursor、Claude Code、Windsurf 等 30 多个工具的提示词！学会这些，你就掌握了让 AI 变强的秘诀。',
    tutorial: `🎯 今天我们要学习"AI 的工具秘密"！\n\n📦 第一步：克隆仓库\ngit clone https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools.git\ncd system-prompts-and-models-of-ai-tools\n\n✨ 第二步：浏览提示词\ncd prompts && ls\n看看各个工具的"内心独白"长什么样\n\n🎮 第三步：应用到你的 AI\n复制你最感兴趣的提示词到你的 AI 工具配置中`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 3,
    name: "train-llm-from-scratch",
    fullName: "FareedKhan-dev/train-llm-from-scratch",
    description: "从头训练你的 LLM 大语言模型，从下载数据到生成文本，完整流程",
    stars: 5178,
    language: "Python",
    color: "#3572A5",
    author: "FareedKhan-dev",
    '通俗讲解': '想自己训练一个大模型吗？这个项目手把手教你！从下载训练数据、清洗数据，到训练模型、生成文字，全流程都有。今天又涨了 241 个星。',
    tutorial: `🎯 今天我们要自己"训练 AI"！\n\n📦 第一步：克隆仓库\ngit clone https://github.com/FareedKhan-dev/train-llm-from-scratch.git\ncd train-llm-from-scratch\n\n✨ 第二步：安装依赖\npip install -r requirements.txt\n\n🎮 第三步：开始训练\npython train.py\n跟着教程一步步来，就能训练出自己的第一个模型！`,
    difficulty: "进阶",
    estimatedTime: "60分钟"
  },
  {
    id: 4,
    name: "agent-skills",
    fullName: "addyosmani/agent-skills",
    description: "Production-grade 工程技能，专为 AI 编码 Agent 设计，包含 7 个斜杠命令覆盖完整开发流程",
    stars: 8500,
    language: "JavaScript",
    color: "#F8DB5C",
    author: "addyosmani",
    '通俗讲解': 'Google 工程师 Addy Osmani 做了一套让 AI 编程工具像高级工程师一样工作的技能包！有 /spec、/plan、/build 等命令，让 AI 写代码前先规划、先写测试。今天又涨了 400 多个星。',
    tutorial: `🎯 今天我们要给 AI 装上"高级工程师技能包"！\n\n📦 第一步：安装\n在 Claude Code 中执行：\n/plugin marketplace add addyosmani/agent-skills\n/plugin install agent-skills@addy-agent-skills\n\n✨ 第二步：试试命令\n/spec "帮我做一个待办事项列表" - 先规划\n/build - 然后自动实现！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 5,
    name: "MoneyPrinterTurbo",
    fullName: "harry0703/MoneyPrinterTurbo",
    description: "利用 AI 大模型一键生成高清短视频，自动生成文案、素材、字幕、背景音乐",
    stars: 12500,
    language: "Python",
    color: "#4285F4",
    author: "harry0703",
    '通俗讲解': '给一个视频主题或关键词，它就能自动写文案、找素材、配音、加字幕，最后合成一个高清短视频！支持抖音竖屏和B站横屏，简直是短视频创作者的神器。',
    tutorial: `🎯 今天我们要搭建"AI 短视频工厂"！\n\n📦 第一步：安装\npip install MoneyPrinterTurbo\n\n✨ 第二步：配置\n注册一个 API Key（支持 OpenAI、通义千问等）\n\n🎮 第三步：生成视频\n给一个主题比如"秋天的风景"，它就自动帮你生成完整视频！`,
    difficulty: "入门",
    estimatedTime: "20分钟"
  },
  {
    id: 6,
    name: "superpowers",
    fullName: "obra/superpowers",
    description: 'Agentic skills 框架和软件开发方法论，让 AI 编码工具拥有超能力，自动规划+测试+实现',
    stars: 6200,
    language: "Python",
    color: "#3572A5",
    author: "obra",
    '通俗讲解': '普通的 AI 编程助手一上来就写代码，但 superpowers 让 AI 先问"你到底想做什么"，然后写计划、做测试、再一步步实现。就像雇佣了一个真正靠谱的高级工程师！',
    tutorial: `🎯 今天我们要给 AI 装上"超能力"！\n\n📦 第一步：安装\n在 Claude Code 中：\n/plugin install superpowers@claude-plugins-official\n\n✨ 第二步：试试\n打开你的项目，AI 会自动问你"你想做什么"，然后自己规划、实施！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 7,
    name: "pm-skills",
    fullName: "phuryn/pm-skills",
    description: "PM Skills Marketplace：100+ agentic skills，68个产品经理技能、42个工作流，从发现到发布全流程",
    stars: 4200,
    language: "Python",
    color: "#3572A5",
    author: "phuryn",
    '通俗讲解': '做产品管理太累了？pm-skills 就是帮你自动写 PRD、做竞品分析、规划发布策略的 AI 产品经理助手！68个技能、42个工作流，装了就像雇了一个资深产品经理。',
    tutorial: `🎯 今天我们要安装"AI 产品经理"！\n\n📦 第一步：安装\npip install pm-skills\n\n✨ 第二步：配置\n在 Claude Code 中安装插件：\n/plugin marketplace add phuryn/pm-skills\n\n🎮 第三步：使用\n/discover 发现新想法\n/write-prd 写产品需求文档`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 8,
    name: "claude-howto",
    fullName: "luongnv89/claude-howto",
    description: "Claude Code 可视化教程，从基础概念到高级 Agent，有复制粘贴模板，附带中文文档",
    stars: 3500,
    language: "TypeScript",
    color: "#3178C6",
    author: "luongnv89",
    '通俗讲解': '装了 Claude Code 但不知道怎么用？这个教程手把手教你从入门到精通，有中文文档！教你怎么用 hooks、skills、MCP、subagent 组合出强大的工作流。',
    tutorial: `🎯 今天我们要系统学习"Claude Code"！\n\n📦 第一步：打开教程\ngit clone https://github.com/luongnv89/claude-howto.git\n打开 zh/README.md 就是中文版！\n\n✨ 第二步：跟着做\n每个模板都可以直接复制到你的项目\n\n🎮 第三步：进阶学习\n从 hooks → skills → MCP → subagent 逐步深入`,
    difficulty: "入门",
    estimatedTime: "20分钟"
  },
  {
    id: 9,
    name: "openmed",
    fullName: "maziyarpanahi/openmed",
    description: "开源医疗 AI 工具，1000+ 医疗模型在本地运行，无需云端，保护患者隐私",
    stars: 2240,
    language: "Python",
    color: "#3572A5",
    author: "maziyarpanahi",
    '通俗讲解': '医疗数据太敏感不能上传到云端？openmed 帮你把 AI 完全跑在你的电脑或手机上！提取病历信息、去除个人隐私数据、做医学诊断分析——全部离线完成，患者数据一分都不离开你的设备。',
    tutorial: `🎯 今天我们要搭建"隐私医疗 AI"！\n\n📦 第一步：安装\npip install openmed\n\n✨ 第二步：使用\nfrom openmed import extract\nresult = extract("患者主诉：头痛、发热两天")\nprint(result)  # 自动提取医疗实体\n\n🎮 第三步：在 iPhone 上试试\n下载 OpenMedKit，本地运行医疗文本分析`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 10,
    name: "hivemind",
    fullName: "activeloopai/hivemind",
    description: "One brain for all your agents — 为所有 AI Agent 打造的统一大脑和知识库",
    stars: 773,
    language: "TypeScript",
    color: "#4285F4",
    author: "activeloopai",
    '通俗讲解': '如果你用了好几个 AI 助手（比如一个写代码、一个做设计、一个管文档），hivemind 让它们共享同一个大脑和知识库！不再各搞各的，团队协作效率翻倍。今天涨了 47 个星。',
    tutorial: `🎯 今天我们要搭建"AI 团队的大脑"！\n\n📦 第一步：安装\npip install hivemind\n\n✨ 第二步：配置\n连接你的知识库和向量数据库\n\n🎮 第三步：让多个 Agent 共享知识\n给每个 Agent 接入 hivemind，它们就能互相学习了！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
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
