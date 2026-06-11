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

// 2026年6月11日 GitHub Trending 热门AI项目（数据来源：GitHub Trending 每日榜单，更新于 05:00 CST）
const trendingProjects: Project[] = [
  {
    id: 1,
    name: "agent-skills",
    fullName: "addyosmani/agent-skills",
    description: "Production-grade 工程技能，专为 AI 编码 Agent 设计，覆盖完整开发流程的 7 个斜杠命令",
    stars: 54447,
    language: "Shell",
    color: "#F8DB5C",
    author: "addyosmani",
    '通俗讲解': 'Google 工程师 Addy Osmani 做了一套让 AI 编程工具像高级工程师一样工作的技能包！装了之后 Claude Code 或 Codex 就会先规划再写代码，有 /spec、/plan、/build 等命令。今天暴涨 3,275 个星，增长最猛！',
    tutorial: `🎯 今天我们要给 AI 装上"高级工程师技能包"！\n\n📦 第一步：安装\n在 Claude Code 中执行：\n/plugin marketplace add addyosmani/agent-skills\n/plugin install agent-skills@addy-agent-skills\n\n✨ 第二步：试试命令\n/spec "帮我做一个待办事项列表" - 先规划\n/build - 然后自动实现！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 2,
    name: "system-prompts-and-models-of-ai-tools",
    fullName: "x1xhlol/system-prompts-and-models-of-ai-tools",
    description: "汇集 30+ 主流 AI 工具的内部系统提示词和模型配置，包括 Cursor、Claude Code、Windsurf、Replit、v0 等",
    stars: 15200,
    language: "TypeScript",
    color: "#3178C6",
    author: "x1xhlol",
    '通俗讲解': '每个 AI 工具都有"内心独白"（系统提示词），这个仓库帮你收集了 Cursor、Claude Code、Windsurf 等 30 多个工具的提示词！学会这些，你就掌握了让 AI 变更强的秘诀。',
    tutorial: `🎯 今天我们要学习"AI 的工具秘密"！\n\n📦 第一步：克隆仓库\ngit clone https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools.git\ncd system-prompts-and-models-of-ai-tools\n\n✨ 第二步：浏览提示词\ncd prompts && ls\n看看各个工具的"内心独白"长什么样\n\n🎮 第三步：应用到你的 AI\n复制你最感兴趣的提示词到你的 AI 工具配置中`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 3,
    name: "SkillSpector",
    fullName: "NVIDIA/SkillSpector",
    description: "英伟达出品：AI Agent 技能安全扫描器，检测漏洞、恶意模式和安全隐患",
    stars: 2553,
    language: "Python",
    color: "#76B900",
    author: "NVIDIA",
    '通俗讲解': '英伟达出了个 AI 保镖！给你的 AI Agent 装的各种"技能包"可能有危险——比如偷偷读取你的文件、发送恶意代码。SkillSpector 帮你扫描所有技能包，确保安全。今天涨了 308 个星。',
    tutorial: `🎯 今天我们要给 AI Agent 做"体检"！\n\n📦 第一步：安装\npip install skillspector\n\n✨ 第二步：扫描你的技能包\nskillspector scan ~/.claude/skills/\n看看有没有不安全的地方\n\n🎮 第三步：修复问题\n根据报告修复或移除有风险的技能`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 4,
    name: "openmed",
    fullName: "maziyarpanahi/openmed",
    description: "开源医疗 AI 工具，1000+ 医疗模型本地运行，无需云端，保护患者隐私",
    stars: 2698,
    language: "Python",
    color: "#3572A5",
    author: "maziyarpanahi",
    '通俗讲解': '医疗数据太敏感不能上传到云端？openmed 帮你把 AI 完全跑在你的电脑或手机上！提取病历信息、去除个人隐私数据、做医学诊断分析——全部离线完成，患者数据一分都不离开你的设备。今天涨了 427 个星。',
    tutorial: `🎯 今天我们要搭建"隐私医疗 AI"！\n\n📦 第一步：安装\npip install openmed\n\n✨ 第二步：使用\nfrom openmed import extract\nresult = extract("患者主诉：头痛、发热两天")\nprint(result)  # 自动提取医疗实体\n\n🎮 第三步：在 iPhone 上试试\n下载 OpenMedKit，本地运行医疗文本分析`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 5,
    name: "sia",
    fullName: "hexo-ai/sia",
    description: "自改进 AI 框架，让 AI 系统（模型/Agent）在基准任务上自动提升性能",
    stars: 1215,
    language: "Python",
    color: "#3572A5",
    author: "hexo-ai",
    '通俗讲解': '一般的 AI 工具需要人来教它怎么变强，但 sia 让 AI 自己给自己"补课"！你给它一个任务（比如翻译、写代码），它自己尝试、评估、改进，越做越好。今天涨了 177 个星。',
    tutorial: `🎯 今天我们要造一个"自我进化"的 AI！\n\n📦 第一步：安装\npip install sia\n\n✨ 第二步：定义任务\ndef my_task(text): return translate(text)\n\n🎮 第三步：让它自己进化\nsia.improve(my_task, iterations=100)\n看着 AI 自己变得越来越强！`,
    difficulty: "进阶",
    estimatedTime: "30分钟"
  },
  {
    id: 6,
    name: "agentsview",
    fullName: "kenn-io/agentsview",
    description: "本地优先的 AI Agent 会话分析和仪表盘，支持 Claude Code、Codex 等 20+ Agent，比 ccusage 快 100 倍",
    stars: 1576,
    language: "Go",
    color: "#00ADD8",
    author: "kenn-io",
    '通俗讲解': '你用 Claude Code 写了多少代码？花了多少钱？用了多久？agentsview 像一个"运动手表"，实时追踪你的 AI 编程活动——调了几次、花了多少 token、成功率多少。今天涨了 98 个星。',
    tutorial: `🎯 今天我们要给 AI 编程装上"仪表盘"！\n\n📦 第一步：安装\nnpm install -g @kenn-io/agentsview\n\n✨ 第二步：启动仪表盘\nagentsview serve\n浏览器打开就能看到你的 Agent 活动\n\n🎮 第三步：查看分析\n看看今天用了多少次 AI、花了多少钱、哪些任务最耗时`,
    difficulty: "入门",
    estimatedTime: "10分钟"
  },
  {
    id: 7,
    name: "pm-skills",
    fullName: "phuryn/pm-skills",
    description: "PM Skills Marketplace：68 个产品经理技能 + 42 个工作流，从发现到发布全流程覆盖",
    stars: 4200,
    language: "Python",
    color: "#3572A5",
    author: "phuryn",
    '通俗讲解': '做产品管理太累了？pm-skills 就是帮你自动写 PRD、做竞品分析、规划发布策略的 AI 产品经理助手！68 个技能、42 个工作流，装了就像雇了一个资深产品经理。支持 Claude Code、Codex、Cursor 等。',
    tutorial: `🎯 今天我们要安装"AI 产品经理"！\n\n📦 第一步：安装\n在 Claude Code 中：\n/plugin marketplace add phuryn/pm-skills\n/plugin install pm-toolkit@pm-skills\n\n✨ 第二步：试试命令\n/discover 发现新想法\n/write-prd 写产品需求文档\n/strategy 制定产品策略`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 8,
    name: "superpowers",
    fullName: "obra/superpowers",
    description: "Agentic skills 框架和软件开发方法论，让 AI 编码工具拥有超能力，自动规划+测试+实现",
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
    id: 9,
    name: "agency-agents",
    fullName: "msitarzewski/agency-agents",
    description: "完整的 AI 代理团队——前端开发、后端架构、AI 工程、DevOps 等 16 个专业角色",
    stars: 3500,
    language: "Markdown",
    color: "#3572A5",
    author: "msitarzewski",
    '通俗讲解': '一个人干不过一个团队？那就组建一个 AI 团队！这个仓库里有 16 个专业 AI 角色——前端开发、后端架构师、AI 工程师、DevOps 专家……每个都有独特的性格和工作流程。装上后告诉 Claude "让前端开发模式上线"，它就变成专业前端了！',
    tutorial: `🎯 今天我们要组建"AI 虚拟团队"！\n\n📦 第一步：安装\n./scripts/install.sh --tool claude-code\n\n✨ 第二步：激活角色\n"Hey Claude, activate Frontend Developer mode"\n"Hey Claude, activate Backend Architect mode"\n\n🎮 第三步：让团队协同\n让前端开发做 UI，让后端架构师设计 API，一起干活！`,
    difficulty: "入门",
    estimatedTime: "15分钟"
  },
  {
    id: 10,
    name: "zhangxuefeng-skill",
    fullName: "alchaincyf/zhangxuefeng-skill",
    description: "张雪峰的认知操作系统——基于 5 本著作、15+ 篇采访、30+ 条语录提炼的思维框架",
    stars: 850,
    language: "Markdown",
    color: "#3572A5",
    author: "alchaincyf",
    '通俗讲解': '张雪峰老师变成了 AI 技能包！"社会就是个大筛子""先看中间50%的人去哪，再选专业""家里没矿别谈理想"——他把这些接地气的认知框架做成了一个可运行的 skill。问高考志愿、职业规划、专业选择，他用张雪峰的视角给你分析！',
    tutorial: `🎯 今天我们要请"张雪峰 AI"当顾问！\n\n📦 第一步：安装\nnpx skills add alchaincyf/zhangxuefeng-skill\n\n✨ 第二步：开始提问\n"用张雪峰的视角帮我分析这个专业选择"\n"张雪峰会怎么看这个职业方向？"\n\n🎮 第三步：深入探讨\n问他"家里没钱该选什么专业"、"AI 时代学什么最稳"`,
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
