# SEO 与 GEO 优化检查报告

检查日期：2026-06-21

项目：`madeinguangdong.com`

代码仓库：`https://github.com/coolcbq/madeinguangdong_com`

## 一、当前结论

当前代码已经具备基础 SEO 框架，包括：

- 每个页面都有 `title`
- 每个页面都有 `meta description`
- 每个页面都有 `canonical`
- 中英文页面已有 `hreflang`
- 每个页面都有 H1、H2、H3 层级
- `sitemap.xml` 已存在并使用标准 sitemap 协议
- `robots.txt` 已存在并指向 sitemap
- GA4 统计代码 `G-657MTWVKL2` 已保留在所有 HTML 页面中

当前网站已经完成一轮基础内容扩写，核心页面不再只是占位式简介。对传统搜索引擎 SEO 和 AI 搜索/生成式搜索 GEO 来说，下一步最大机会是继续建设更细的城市、产业、旅游和 FAQ 专题页。

## 二、已完成的优化项

### 1. Canonical URL

状态：已修复。

每个 HTML 页面已经添加自指向 canonical，可以减少重复 URL 对搜索引擎造成的干扰。

示例：

```html
<link rel="canonical" href="https://madeinguangdong.com/">
```

### 2. Hreflang

状态：已添加。

中英文页面之间已经增加 `hreflang`，有助于搜索引擎理解语言版本关系。

示例：

```html
<link rel="alternate" hreflang="en" href="https://madeinguangdong.com/">
<link rel="alternate" hreflang="zh-CN" href="https://madeinguangdong.com/cn/index_cn.html">
```

### 3. H3 内容层级

状态：已修复。

每个页面已经增加 H3，不再是只有 H1/H2 的扁平结构。

### 4. Sitemap

状态：已修复。

`sitemap.xml` 已改为标准 sitemap 协议，并包含英文和中文页面。

### 5. Robots

状态：已新增。

`robots.txt` 已允许搜索引擎抓取，并声明 sitemap 地址。

### 6. GA4

状态：已保留。

所有 10 个 HTML 页面均保留 GA4 代码：

```text
G-657MTWVKL2
```

## 三、仍需优化的 SEO 问题

### P0：确认 Vercel 是否部署 coolcbq 仓库

当前 GitHub 仓库已经更新，但线上 `madeinguangdong.com` 之前检查仍显示旧代码。需要确认 Vercel 项目是否已经绑定到：

```text
https://github.com/coolcbq/madeinguangdong_com
```

如果没有绑定，GitHub 的 SEO 更新不会出现在生产站。

### P1：继续扩展专题内容

当前核心页面已经扩写，但专题页仍不足。搜索引擎和 AI 搜索会更偏好稳定、细分、可引用的专题内容，例如城市制造、产业分类、广东美食、广东旅游路线等。

建议继续新增或扩展专题页面，每个重点专题保持清晰结构、FAQ、更新时间和内部链接。

优先扩展方向：

- Guangzhou products / 广州特色产品
- Foshan manufacturing / 佛山制造
- Dongguan manufacturing / 东莞制造
- Shenzhen electronics / 深圳电子产业
- Guangdong cuisine / 广东美食
- Guangdong travel guide / 广东旅游攻略

### P1：首页 title 需要重写

状态：已完成。

原英文首页 title 偏堆关键词：

```text
Made in Guangdong Discover Unique Features,China,guangzhou,foshan,shenzheng...
```

已改成更自然的品牌 + 主题格式：

```text
Made in Guangdong | Products, Culture and Travel in Guangdong
```

中文首页已使用：

```text
广东制造 | 广东特色产品、旅游文化与地方资讯
```

### P1：增加 Open Graph 分享标签

状态：已完成。

当前页面已增加：

- `og:title`
- `og:description`
- `og:url`
- `og:type`
- `og:image`
- `twitter:card`

这对社交传播、AI 摘要和外部引用有帮助。当前使用的分享图为 `images/og-made-in-guangdong.svg`。

### P1：增加结构化数据 Schema

建议至少增加以下 JSON-LD：

- `WebSite`
- `Organization`
- `BreadcrumbList`
- 未来产品页可增加 `Product`
- 未来新闻页可增加 `Article` 或 `NewsArticle`
- 未来旅游文化页可增加 `TouristDestination` 或 `Place`

### P2：增加面包屑导航

当前页面只有返回首页按钮，没有清晰面包屑。

建议增加：

```text
Home > Unique Products
```

中文：

```text
首页 > 广东特色产品
```

### P2：增加内部链接矩阵

状态：已完成第一轮。

当前核心页面底部已经增加相关链接。后续新增专题页时，应继续保持页面之间互相推荐。

建议在每个栏目页底部增加：

- 相关产品
- 相关旅游文化
- 相关地方新闻
- 关于广东制造

这有助于爬虫抓取，也能提高页面关联度。

### P2：图片与 Alt 文本

当前页面基本没有内容图片。建议增加真实或高质量图片，并为图片写准确 `alt`。

示例：

```html
<img src="images/guangdong-handicrafts.jpg" alt="Traditional handicrafts made in Guangdong">
```

## 四、GEO 优化建议

这里的 GEO 指 Generative Engine Optimization，也就是面向 ChatGPT、Google AI Overview、Perplexity、Claude 等 AI 搜索/问答系统的内容优化。

### 1. 增加“可被 AI 引用”的事实型内容

AI 更容易引用清晰、结构化、事实明确的内容。

建议增加类似模块：

- What is Made in Guangdong?
- What products is Guangdong known for?
- Why is Guangdong important in China manufacturing?
- 广东制造包括哪些产业？
- 广东有哪些代表性城市和产业带？
- 广东旅游文化有什么特色？

### 2. 增加 FAQ 页面或 FAQ 模块

建议首页和核心栏目页增加 FAQ。

英文示例：

```text
What is Guangdong famous for?
What products are made in Guangdong?
Which cities are important for Guangdong manufacturing?
What makes Guangdong tourism unique?
```

中文示例：

```text
广东制造主要包括哪些产品？
广东有哪些代表性产业带？
广东旅游文化有什么特色？
广东制造和中国制造有什么关系？
```

FAQ 对 AI 搜索特别友好，因为问答结构容易被直接提取。

### 3. 建立实体信息

网站需要明确告诉搜索引擎和 AI：

- Made in Guangdong 是什么
- 服务对象是谁
- 覆盖哪些城市
- 覆盖哪些行业
- 和广东、产品、旅游、文化、新闻之间是什么关系

建议在 About 页面增加：

```text
Made in Guangdong is an independent information website focused on Guangdong products, culture, tourism, local news, and regional business identity.
```

中文：

```text
广东制造是一个关注广东特色产品、旅游文化、地方资讯与区域商业形象的信息网站。
```

### 4. 增加作者、更新时间和来源说明

AI 搜索更偏好可信内容。建议每篇内容页增加：

- Published date
- Updated date
- Author or editorial team
- Source note

例如：

```text
Updated: 2026-06-21
Editorial Team: Made in Guangdong
```

### 5. 增加专题页

建议新增专题页，而不是只保留几个薄栏目。

优先专题：

- Guangdong Manufacturing Cities
- Guangzhou Products
- Foshan Manufacturing
- Dongguan Manufacturing
- Shenzhen Electronics
- Guangdong Cuisine
- Guangdong Travel Guide

中文对应：

- 广东制造城市
- 广州特色产品
- 佛山制造
- 东莞制造
- 深圳电子产业
- 广东美食
- 广东旅游攻略

这些页面更容易覆盖长尾关键词，也更容易被 AI 摘要引用。

## 五、建议执行优先级

### 第一阶段：上线基础技术 SEO

目标：确保当前已推送到 GitHub 的代码真正部署到线上。

任务：

- 确认 Vercel 绑定 `coolcbq/madeinguangdong_com`
- 部署后检查 canonical、H3、robots、sitemap 是否在线生效
- 提交 sitemap 到 Google Search Console

### 第二阶段：补内容深度

状态：已完成第一轮核心页面扩写。

目标：继续建设更细的专题内容。

任务：

- 首页扩展到 800 字以上
- 产品页扩展到 600 字以上
- 旅游文化页扩展到 600 字以上
- 中文页面同步扩展

### 第三阶段：补 GEO 结构

目标：让 AI 搜索更容易理解和引用网站。

任务：

- 增加 FAQ
- 增加 JSON-LD 结构化数据
- 增加实体说明
- 增加作者和更新时间

### 第四阶段：扩展专题页

目标：获得更多长尾搜索流量。

任务：

- 建立广东城市与产业专题
- 建立广东旅游文化专题
- 建立广东产品分类专题

## 六、总体判断

当前网站的技术 SEO 基础已经从“缺关键标签”提升到“可被搜索引擎正常理解”的状态。

但如果目标是明显提升搜索流量，下一步不能只继续改标签，而要重点做内容：

- 更具体的广东产业内容
- 更完整的中文和英文说明
- FAQ
- 结构化数据
- 专题页
- 图片和可信来源

短期最重要的是先确认 Vercel 部署链路，让 `coolcbq` 仓库里的更新真正上线。
