# LangTown - Claude Code Project Rules

> 本文件在每次 Claude Code session 启动时自动加载。遵循以下规则。

---

## 项目概况

- **产品名称**：LangTown
- **类型**：H5 单页应用（纯 HTML/CSS/JS），移动端优先
- **部署**：Vercel（output directory: `src`）
- **数据库**：Supabase（PostgreSQL），连接信息在 `src/app.js` 顶部
- **仓库**：`https://github.com/dracularist/langtown.git`
- **目标用户**：留学生群体，场景化语言学习

## 文档自动更新规则

### 每次 commit 包含功能变更时，必须同步完成以下操作：

**1. 更新 CHANGELOG.md**
- 在文件顶部（第一个 `---` 之后）追加新版本记录
- 格式：`## [版本号] - YYYY-MM-DD`
- 分类：### 新增 / ### 修复 / ### 变更 / ### 文档
- 版本号规则：
  - 修订号 +1：bug 修复（如 0.4.0 → 0.4.1）
  - 次版本 +1：新功能/大模块变化（如 0.4.0 → 0.5.0）
  - 主版本 +1：架构级变更（如 0.x → 1.0.0）

**2. 更新 PRD.md 底部变更日志表格**
- 在表格最后追加一行：`| 日期 | 内容 |`
- 内容简洁描述做了什么

**3. commit message 结尾附带版本号**
- 格式示例：`feat: integrate slide renderer into SPA (v0.4.0)`

## 开发工作流

- 三步提交：`git add -A` → `git commit` → `git push`
- Vercel 自动检测 push 并重新部署，无需手动操作
- 国内 GitHub 代理（如需）：`http.proxy http://127.0.0.1:7890`

## 技术约定

- 数据驱动内容：Unit 内容存在 `slides/unitN-data.json`，改文案只需改 JSON
- Slide 独立预览：`slides/unit1/slide-XX.html` 双击即可打开
- 渲染器：`slides/renderer.html` 读取 JSON 动态渲染
- 用户登录：localStorage 缓存用户名，Supabase 存储进度
- 版本号标签显示在 SPA 页面中用于验证部署状态

## 当前工作状态（2026-05-09）

- 最新版本：v0.5.2
- 已完成：登录 → 引导 → 小镇地图 → 建筑详情 → Unit 子节点列表 → Slide 体验完整流程
- Slide 布局已修复：场景 30vh，题板 flex:1，覆盖层独立容器
- 顺序揭示系统已实现：场景 → 覆盖层 → 文本，逐步点击揭示
- 判断题已修复：必须答完全部才能前进
- 待完成：Unit 2+ 内容、Progress 页、Profile 页
