// 全站内容集中管理：后续替换文案、图片、视频、证书只改这里
// 统一口径：只做产品经理 / 数据分析，不出现任何设计师、品牌、视觉相关字眼
// 图片字段为 null 时，组件渲染抽象占位；放图后填入路径，如 '/works/project1.jpg'

export const profile = {
  name: '韩贺同',
  nameEn: 'HAN HETONG',
  portrait: `${import.meta.env.BASE_URL}images/portrait.jpg?v=3`, // 人物图路径；为 null 时显示占位
  roles: ['产品经理', '数据分析'],
  location: '天津 · 北京',
  email: '18341933037@163.com',
  phone: '18341933037',
  courses: ['管理信息系统', '数据库原理', '计算机网络', '数据结构', 'Python 程序设计', '数据挖掘', '信息检索'],
  intro:
    '信息管理与信息系统专业背景，意向产品经理 / 数据分析方向。擅长需求拆解、业务流程梳理与高保真原型设计，能使用 SQL、Excel 完成数据处理与指标分析。做事严谨、注重逻辑与落地，具备 B 端系统、营销活动与 AI 产品的完整实践。',
  stats: [
    { value: '3+', label: '产品实践项目' },
    { value: '1200+', label: '样本数据处理分析' },
    { value: '2', label: '网页设计' },
    { value: '4', label: '核心能力方向' }
  ]
}

export const navItems = [
  { id: 'hero', label: '封面' },
  { id: 'about', label: '个人信息' },
  { id: 'projects', label: '项目作品' },
  { id: 'skills', label: '技能证书' },
  { id: 'contact', label: '联系我' }
]

// 专业技能
export const skillLevels = [
  { name: '需求拆解与 PRD', note: '需求分析 / 文档 / 优先级' },
  { name: '原型与信息架构', note: 'Axure / 墨刀 / 原型' },
  { name: '业务流程梳理', note: 'ProcessOn / XMind / 流程' },
  { name: 'SQL 数据查询', note: 'Navicat / 多表查询' }
]

// 证书：来自简历的真实证书（年份可按实际取得时间调整）
export const certificates = [
  { id: 'c1', name: '计算机三级 · 网络安全', issuer: '全国计算机等级考试', year: '2025', placeholder: false },
  { id: 'c2', name: '计算机三级 · 数据库', issuer: '全国计算机等级考试', year: '2025', placeholder: false },
  { id: 'c3', name: '数客杯二等奖', issuer: '天津市数客杯竞赛', year: '2026', placeholder: false },
  { id: 'c4', name: '大学英语四级 CET-4', issuer: '大学英语四六级考试', year: '2025', placeholder: false }
]

// 技能知识说明（左栏文字）
export const skillSummary = [
  { label: '产品设计', text: '熟练使用 Axure RP 制作高保真可交互原型，使用 XMind 梳理信息架构、绘制业务流程图，掌握 PRD 撰写。' },
  { label: '需求分析', text: '可独立完成需求拆解、用户旅程梳理、功能优先级判断，熟悉用户旅程、AARRR、KANO 等方法。' },
  { label: '数据分析', text: '熟练 Excel（透视表、VLOOKUP），掌握 MySQL 基础查询与多表联查，会用 Python Pandas 进行数据处理。' },
  { label: '工具', text: 'Axure RP、XMind、Visio/ProcessOn、Excel、PowerPoint。' },
  { label: '综合能力', text: '具备需求调研、流程梳理、文档撰写、跨部门沟通协同与项目复盘能力。' }
]

export const projects = [
  {
    id: 'p1',
    index: '01',
    title: '津门清咽 · 音浪假日活动 H5',
    category: '产品实践 / 营销活动',
    year: '2026',
    description:
      '老字号中药企业 × 音乐节联名活动，独立负责活动 H5 方案，梳理“社媒种草—投稿审核—积分兑换—O2O 引流—私域复购”业务闭环，输出信息架构、高保真原型与完整 PRD，并围绕 UV、转化率、积分兑换率、券核销率规划埋点。',
    tags: ['需求分析', '活动 H5', 'PRD', '原型'],
    image: null,
    tone: 'gold'
  },
  {
    id: 'p2',
    index: '02',
    title: '企业设备资产管理系统',
    category: 'B 端产品实践',
    year: '2026',
    description:
      '面向企业设备管理人员，梳理设备多条件查询、新增、编辑、删除与分页的全流程，定义列表字段、使用状态（使用中 / 闲置）与操作权限规则，输出业务流程图、后台原型与精简 PRD，支撑行政与产研日常管理。',
    tags: ['B 端', '后台', '业务流程', '权限'],
    image: null,
    tone: 'azure'
  },
  {
    id: 'p3',
    index: '03',
    title: 'AI 智能客服与营销助手',
    category: 'AI 产品实践',
    year: '2026',
    description:
      '基于 Dify 设计智能体会话流程、知识库与异常兜底方案，覆盖电商客服问答与营销数据解读，重点处理边界场景与回答可靠性。',
    tags: ['AI 产品', '工作流', '知识库', '兜底设计'],
    image: null,
    tone: 'bronze'
  },
  {
    id: 'p4',
    index: '04',
    title: 'Axure 自制开场动画',
    category: '原型交互 / 个人实践',
    year: '2026',
    description:
      '使用 Axure 搭建作品开场页的可点击原型，梳理元素入场顺序与页面衔接节奏，完成开场动画的交互流程与跳转反馈，便于演示与走查。',
    tags: ['Axure', '原型', '交互流程', '开场页'],
    image: null,
    tone: 'rose'
  },
  {
    id: 'p5',
    index: '05',
    title: '李叔同数字人文可视化',
    category: '知识图谱 / 网页设计',
    year: '2026',
    description:
      '围绕李叔同数字人文主题，梳理人物、作品、交游与典故等实体及其关联，设计网页端知识图谱的节点与连线结构、信息分层与交互浏览方式，支撑关系网络的直观呈现与检索。',
    tags: ['知识图谱', '实体关系', '信息可视化', '网页原型'],
    image: null,
    tone: 'azure'
  },
  {
    id: 'p6',
    index: '06',
    title: '个人作品简历网站',
    category: '个人实践 / 作品集网站',
    year: '2026',
    description:
      '个人作品集简历网站，集中呈现个人信息、产品与数据分析实践项目、技能证书及联系方式；梳理站点信息架构与页面层级，组织项目案例与能力标签，完成页面结构、内容编排与交互浏览，便于访问者快速了解实践经历与能力方向。',
    tags: ['作品集网站', '信息架构', '内容梳理', '响应式页面'],
    image: null,
    tone: 'gold'
  }
]
