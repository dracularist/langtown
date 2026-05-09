# 产品需求文档

> 本文档记录产品功能讨论和需求变更，随每次沟通自动更新。

## 项目概况

- **项目类型**：H5 网页应用
- **部署方式**：Vercel 自动部署
- **访问方式**：微信内置浏览器打开链接
- **首个目标用户**：留学生群体
- **产品名称**：LangTown
- **数据存储**：Supabase（PostgreSQL，免费额度）

## 产品想法

### 核心概念：场景化语言学习工具
为有真实需求的成年人提供基于具体生活/工作/兴趣场景的语言学习体验，而非通用课本内容。

### 首个切入客群：留学生

- **特征**：雅思/托福分数达标但真实场景沟通能力不足
- **核心痛点**：考试英语与实际生活英语严重脱节

---

## 产品设计

### 用户引导流程

1. **登录页**：输入用户名即可登录（无需密码），localStorage 缓存用户名，退出后自动填充上次输入
2. **Step 1 — 选择去向**：用户选择来此的目的（留学/移居/工作/兴趣）
3. **Step 2 — 选择优先级**：从 8 个方向中选择最渴望提升的 1-3 个
4. **进入小镇**：根据选择生成个性化 LangTown 地图

### "建筑"场景体系

每个建筑对应一个 CEFR 难度方向，建筑内包含多个 Unit，每个 Unit 是一章故事。

| # | 建筑 | 关键词 | CEFR 参考 | 优先级 |
|---|------|--------|-----------|--------|
| 1 | Neighbourhood | Daily life, feelings, making friends | A1-A2 | ★★★★★ |
| 2 | Café | Social talk, dining culture, small talk | A1-A2 | ★★★★★ |
| 3 | Accommodation | Renting, contract, flatmates, landlord | A1-A2 | ★★★★★ |
| 4 | Station | Travel, directions, transport, immigration | A1-A2 | ★★★★☆ |
| 5 | Campus | Study, academic discussion, office hours | A2-B1 | ★★★★☆ |
| 6 | Hospital | Health, wellbeing, mental health, GP | A2-B1 | ★★★★☆ |
| 7 | Admin | Banking, visa, council, registration | B1 | ★★★☆☆ |
| 8 | Office | Career, workplace, internship, business | B1-B2 | ★★★☆☆ |

### 地图交互逻辑

- 选中的 1-3 个建筑：高亮显示，可点击，右上角有绿色圆点标记
- 未选中的建筑：置灰 + 锁图标，不可点击
- 点击建筑后进入课程列表页

### 课程节点设计

每个建筑内包含 2-3 个 Unit，每个 Unit 包含 2-3 个课程节点：
- **已完成**（绿色节点）：显示完成状态
- **当前可学**（蓝色节点，带呼吸动画）：点击进入
- **未解锁**（灰色节点）：按顺序逐步解锁

### 底部导航栏

- **Town**（当前页）：小镇地图
- **Progress**：学习进度统计（待设计）
- **Profile**：个人设置（待设计）

---

## Unit 1 详细设计：Accommodation — "Two Suitcases and Nowhere to Sleep"

### 故事梗概

主角是一个刚到的留学生，拖着两个行李箱来到陌生城市。中介告诉他"我们不再接受国际学生"，取消了已安排好的住宿。他需要在没有地方过夜的情况下，自己搜索房源、学习租房术语、打电话咨询，却因为"没有担保人"被拒，最终在咖啡馆度过第一夜。

### 角色设定

| 角色 | 说明 |
|------|------|
| **你（主角）** | 刚到的留学生，预算有限，英语 B1 水平 |
| **Mrs. Fletcher** | 房东老太太，说话快，有点难懂，人其实不坏 |
| **Sam** | 现有室友，本地人，研究生，看起来友善但生活习惯… |
| **Priya** | 印度留学生老鸟，比主角早来半年，充当导师角色 |
| **Jake** | 维修工，随叫随到，口头禅 "Should be sorted by Tuesday" |

### Unit 1 分章设计（7 章）

| Unit | 故事标题 | 学习主题 |
|------|---------|---------|
| 1 | "Two Suitcases and Nowhere to Sleep" | 看房源、读懂 listing 缩写和术语 |
| 2 | "The View That Wasn't What It Seemed" | 实地看房、提问技巧、描述空间 |
| 3 | "Mrs. Fletcher's Fine Print" | 读懂合同、法律术语、谈判 |
| 4 | "Home Sweet Empty Room" | 买家具、开通水电燃气 |
| 5 | "Sam's Midnight Kitchen Experiments" | 室友沟通、设定边界、家务分配 |
| 6 | "The Leak" | 报修、紧急处理、跟进催促 |
| 7 | "House Meeting" | 冲突调解、妥协、建立归属感 |

### 每个 Unit 的课程结构

每个 Unit 拆成 3 个课：
- **Story Scene** — 沉浸式叙事 + 对话选项
- **Vocabulary Drill** — 8-12 个核心词汇练习
- **Role Play** — 模拟真实场景（打电话、发邮件）

### Unit 1 Slide 结构（20 张）

分为 4 幕：

**Act 1: Arrival（Slide 1-4）**
- 火车站出站 → Priya 语音 → 中介取消邮件 → 理解检查题

**Act 2: The Search（Slide 5-10）**
- 房源网站 → 词汇测验（房屋类型） → 浏览房源 → 词汇测验（furnished/cosy） → bedsit 诱惑 → 选择哪套房

**Act 3: The Call（Slide 11-14）**
- 打电话（deposit/PCM） → 算预算题 → guarantor 被拒 → 下一步决策

**Act 4: Nightfall（Slide 15-20）**
- 咖啡馆独处 → Priya 词汇回顾 → 终测 → 故事时间线回顾 → Unit 2 预告 → Unit 1 Complete

### 词汇引入规则

- **不允许教学卡片**：所有词汇通过剧情自然引入
- 引入方式：角色对话 / 房源描述 / 内心独白 / 视觉提示
- 旁白用词 ≤ 目标词汇难度，不出现旁白比目标词还难的情况

### Unit 1 目标词汇（B1 级别）

| 词汇 | 引入方式 |
|------|---------|
| flat / studio / bedsit | Priya 消息解释 + 筛选框 |
| furnished / unfurnished | 房源描述 + 主角内心独白推理 |
| spacious / cosy | 房源描述 + 内心独白对比 |
| en-suite / shared | Priya 消息解释 |
| deposit / PCM | 电话对话 + 主角计算 |
| guarantor | 电话对话 + 困境 |

---

## 技术实现

### 架构

- **前端**：纯 HTML/CSS/JS 单页应用，移动端优先
- **数据层**：Supabase（PostgreSQL），用户进度存储
- **部署**：Vercel 静态站点
- **版本控制**：语义化版本号（主版本.次版本.修订号）

### Slide 系统

- **数据驱动**：每个 Unit 的内容存储在 `slides/unitN-data.json` 中
- **渲染器**：`slides/renderer.html` 读取 JSON 动态渲染所有 slide
- **独立预览**：`slides/unit1/slide-XX.html` 每个文件可双击直接打开
- **修改流程**：改文案 = 改 JSON，不需要重新生成 HTML

### 文件结构

```
slides/
├── unit1-data.json      ← Unit 1 全部文本/题目/对话
├── renderer.html        ← 数据驱动渲染器
├── index.html           ← Slide 目录页
├── common.css           ← 共用样式
└── unit1/
    ├── slide-01.html    ← 独立预览文件（可双击打开）
    └── ... (20 个)
```

### 变更日志规范

- **修订号 +1**：bug 修复（如 0.2.1 → 0.2.2）
- **次版本 +1**：新功能/大模块变化（如 0.2.1 → 0.3.0）
- **主版本 +1**：架构级变更（如 0.x → 1.0.0）

---

## 变更日志

| 日期 | 内容 |
|------|------|
| 2026-05-08 | 项目初始化，产品形态尚在构思阶段 |
| 2026-05-08 | 明确产品方向：场景化语言学习工具；完成目标用户群体分析（U1-U7） |
| 2026-05-08 | 选定首个切入客群：留学生；确认调整后的 8 建筑方案（v2） |
| 2026-05-08 | 完成交互式原型 v1：包含引导问卷→小镇地图→课程列表三屏流程；确定 Duolingo 清新视觉风格 |
| 2026-05-08 | 新增用户登录系统（Supabase + localStorage）；退出保留用户名功能 |
| 2026-05-08 | 确定 Accommodation Unit 1 故事设计（7 章，5 角色，4 幕结构） |
| 2026-05-08 | 确定 Slide 表现层：CSS 像素风格场景 + Nunito 高清字体 |
| 2026-05-08 | 建立数据驱动 Slide 系统：JSON 数据 + 渲染器 + 独立预览 |
| 2026-05-08 | 建立版本号规范 + CHANGELOG.md + SETUP.md 开发指南 |
| 2026-05-09 | Slide 渲染器集成进 SPA，Unit 1 完整 20 张 slide 体验，Tap-to-advance 交互 |
| 2026-05-09 | 修复 Slide 布局溢出：场景高度缩小至 30vh，覆盖层分离独立容器 |
