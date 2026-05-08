# LangTown 开发环境搭建指南

> 从零到部署，照着做就行。

---

## 1. 安装 Git

1. 下载：https://git-scm.com/download/win
2. 安装时全部选默认即可
3. 安装完成后打开 **PowerShell** 或 **CMD**，输入：
   ```bash
   git --version
   ```
   看到 `git version 2.x.x` 说明装好了

4. 配置你的用户名和邮箱（换成你自己的）：
   ```bash
   git config --global user.name "你的用户名"
   git config --global user.email "你的邮箱"
   ```

---

## 2. 注册 GitHub

1. 打开 https://github.com/signup
2. 注册一个免费账号
3. 记住你的用户名（后面会用到）

---

## 3. 注册 Vercel（用 GitHub 登录）

1. 打开 https://vercel.com
2. 点击 **Sign Up**，选择 **Continue with GitHub**
3. 授权即可

---

## 4. 注册 Supabase（免费数据库）

1. 打开 https://supabase.com
2. 点击 **Start your project**，用 GitHub 登录
3. 点击 **New project**
4. 填写：
   - **Project name**：任意，比如 `langtown`
   - **Database Password**：点 **Generate** 自动生成
   - **Region**：选离你最近的（Asia Pacific 有 Tokyo / Singapore）
5. 点 **Create new project**，等待几分钟创建完成

### 4.1 获取 Supabase 连接信息

项目创建好后：

1. 进入 **Project Settings → API**
2. 复制这两个值（后面会用到）：
   - **Project URL**（格式：`https://xxxx.supabase.co`）
   - **anon public key**（一段很长的字符串）

### 4.2 创建数据库表

1. 打开 https://supabase.com/dashboard/project/你的项目ID
2. 左边菜单点击 **SQL Editor**
3. 点击 **New query**
4. 粘贴以下 SQL 并点击 **Run**：

```sql
CREATE TABLE IF NOT EXISTS users (
    username TEXT PRIMARY KEY,
    progress JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read" ON users FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON users FOR UPDATE USING (true);
```

---

## 5. 克隆项目

在终端（PowerShell/CMD）中执行：

```bash
git clone https://github.com/dracularist/langtown.git
cd langtown
```

### 5.1 网络代理（如果国内连不上 GitHub）

如果 push/pull 报错 `Failed to connect to github.com port 443`，需要设置代理：

```bash
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy http://127.0.0.1:7890
```

> `7890` 是常见代理端口，请根据实际情况修改。
> 如果不想用了可以删除：`git config --global --unset http.proxy`

---

## 6. 配置 Supabase 连接

打开项目中的 `src/app.js` 文件，修改最开头的两行：

```javascript
const SUPABASE_URL = 'https://你的项目.supabase.co';
const SUPABASE_ANON_KEY = '你的anon public key';
```

把第 4.1 步复制的 URL 和 Key 填进去。

---

## 7. 推送到你自己的 GitHub

### 7.1 在 GitHub 创建新仓库

1. 打开 https://github.com/new
2. **Repository name**：填 `langtown`（或你喜欢的名字）
3. 选 **Public**
4. **不要** 勾选 "Add a README"
5. 点 **Create repository**

### 7.2 修改远程仓库地址并推送

```bash
git remote set-url origin https://github.com/你的用户名/langtown.git
git push -u origin main
```

---

## 8. 部署到 Vercel

1. 打开 https://vercel.com/new
2. **Import Git Repository** — 找到你刚创建的 `langtown` 仓库，点 **Import**
3. 设置：
   - **Framework Preset**：Other
   - **Root Directory**：`./`（默认）
   - **Output Directory**：`src`
4. 点 **Deploy**

部署完成后 Vercel 会给你一个链接，类似：

```
https://langtown-xxx.vercel.app
```

把这个链接分享到微信，就能在手机上访问了。

---

## 9. 后续开发流程

以后每次改完代码后，只需三步：

```bash
git add -A
git commit -m "描述你改了什么"
git push
```

Vercel 会自动检测代码变化并重新部署，一般 1-3 分钟完成。

---

## 项目结构

```
langtown/
├── src/
│   ├── index.html      ← 主页面
│   ├── styles.css      ← 样式
│   └── app.js          ← 交互逻辑 + Supabase 连接
├── PRD.md              ← 产品需求文档
├── vercel.json         ← Vercel 部署配置
└── .gitignore
```

---

## 常见问题

| 问题 | 解决 |
|------|------|
| `git push` 报 443 错误 | 设置代理（见第 5.1 节） |
| 微信里刷新后看不到更新 | 清除微信内置浏览器缓存，或在 Chrome 中访问链接 |
| Vercel 部署失败 | 检查 `vercel.json` 中 `outputDirectory` 是否为 `src` |
| Supabase 报 API key 错误 | 确认 `app.js` 中的 URL 和 Key 是否正确（注意是 anon public key，不是 service role key） |
