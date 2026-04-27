const chromeMilestones = [
  {
    version: "Chrome 1",
    period: "2008",
    title: "以速度与简洁重新定义浏览器",
    summary:
      "初代 Chrome 发布时主打地址栏一体化、标签页独立进程与更干净的交互，直接改变了浏览器产品设计范式。",
    features: [
      "采用多进程模型，减少单个标签页崩溃对整体浏览体验的影响。",
      "引入 Omnibox，把搜索与地址输入合并为统一入口。",
      "基于 WebKit 与 V8，早期就建立了页面加载和 JavaScript 执行速度优势。"
    ]
  },
  {
    version: "Chrome 4-8",
    period: "2010 前后",
    title: "扩展生态与同步能力成型",
    summary:
      "Chrome 从单纯的高速浏览器扩展为可个性化的平台，用户数据同步与扩展机制带来了明显粘性。",
    features: [
      "支持浏览器扩展，让开发者可以快速增强标签页、内容脚本和工具栏能力。",
      "Chrome Sync 开始成熟，可同步书签、历史记录、设置等用户数据。",
      "内置开发者工具逐渐完善，前端调试开始摆脱对外部插件的依赖。"
    ]
  },
  {
    version: "Chrome 10-23",
    period: "2011-2012",
    title: "HTML5 与图形能力快速扩张",
    summary:
      "这段时期的 Chrome 不断补齐现代 Web API，推动浏览器从文档容器走向图形和应用承载平台。",
    features: [
      "强化硬件加速、CSS3、Canvas 与更完整的 HTML5 支持。",
      "逐步完善 WebGL、离线存储、文件 API 等富应用能力。",
      "V8 持续升级，使大型前端应用的可行性明显提升。"
    ]
  },
  {
    version: "Chrome 24-49",
    period: "2013-2016",
    title: "移动 Web 与实时通信能力崛起",
    summary:
      "随着移动优先趋势加强，Chrome 开始大力推进 WebRTC、移动性能优化与更强的应用分发能力。",
    features: [
      "WebRTC 逐步成熟，浏览器内音视频通信成为现实。",
      "Blink 引擎分叉后，渲染路线开始更独立地演进。",
      "Service Worker、Push、Manifest 等 PWA 关键基建陆续落地。"
    ]
  },
  {
    version: "Chrome 50-69",
    period: "2016-2018",
    title: "PWA 正式进入主舞台",
    summary:
      "Chrome 把 Progressive Web App 从概念推进为生产实践，并持续抬高性能与安全基线。",
    features: [
      "更完整地支持离线缓存、后台同步、添加到主屏幕等 PWA 能力。",
      "持续推动 HTTPS 普及，并对非安全页面逐步增加风险提示。",
      "新版 Headless Chrome 和 Lighthouse 生态让自动化测试与性能审计更系统。"
    ]
  },
  {
    version: "Chrome 70-89",
    period: "2018-2021",
    title: "安全隔离与应用级 Web 体验强化",
    summary:
      "Spectre 类漏洞背景下，Chrome 在安全架构上明显加码，同时继续扩展浏览器原生应用能力。",
    features: [
      "Site Isolation 成为关键安全策略，提高跨站点数据隔离强度。",
      "Web Components、CSS 变量、现代 JavaScript 特性支持更完善。",
      "桌面安装式 PWA、文件系统访问等能力让 Web 更像本地应用。"
    ]
  },
  {
    version: "Chrome 90-114",
    period: "2021-2023",
    title: "性能指标、隐私与新 API 并行推进",
    summary:
      "Chrome 一边优化 Core Web Vitals 相关体验，一边推进更细颗粒度的隐私、媒体与图形能力。",
    features: [
      "AVIF、改进的视频编解码和媒体 API 提升富媒体传输效率。",
      "隐私沙箱逐步成形，尝试替代第三方 Cookie 的广告与归因方案。",
      "Container Queries、视口单位更新等能力显著提升响应式布局表达力。"
    ]
  },
  {
    version: "Chrome 115+",
    period: "2023-2025",
    title: "浏览器开始承担更重的平台角色",
    summary:
      "Chrome 继续增强 AI 时代的 Web 运行环境，围绕图形、性能、隐私和开发体验推进更深层的平台升级。",
    features: [
      "WebGPU 进入更可用阶段，为浏览器端高性能图形和计算打开空间。",
      "View Transitions、更现代的 CSS 能力让前端交互动效更自然。",
      "隐私沙箱、性能分析工具链和新一代开发者工具继续推动工程实践升级。"
    ]
  }
];

const architectureTracks = [
  {
    title: "渲染引擎演进",
    description:
      "从 WebKit 到 Blink，Chrome 获得了更独立的渲染路线，可以更快推进布局、绘制、动画和实验性 Web API。"
  },
  {
    title: "JavaScript 执行效率",
    description:
      "V8 的即时编译、优化管线和垃圾回收改进，长期支撑了复杂前端框架与大型单页应用的普及。"
  },
  {
    title: "安全默认值提高",
    description:
      "多进程沙箱、Site Isolation、权限收紧与 HTTPS 迁移，使浏览器默认安全边界持续收紧。"
  },
  {
    title: "Web 应用平台化",
    description:
      "从扩展、离线缓存、推送通知到 PWA、WebGPU，Chrome 一直在把浏览器推向应用运行时。"
  }
];

const timelineContainer = document.querySelector("#timeline-list");
const timelineTemplate = document.querySelector("#timeline-card-template");

chromeMilestones.forEach((item, index) => {
  const node = timelineTemplate.content.cloneNode(true);
  node.querySelector(".timeline-version").textContent = item.version;
  node.querySelector(".timeline-period").textContent = item.period;
  node.querySelector(".timeline-title").textContent = item.title;
  node.querySelector(".timeline-summary").textContent = item.summary;

  const featureList = node.querySelector(".feature-list");
  item.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featureList.appendChild(li);
  });

  const card = node.querySelector(".timeline-card");
  card.classList.add("reveal");
  card.style.transitionDelay = `${index * 80}ms`;
  timelineContainer.appendChild(node);
});

const architectureContainer = document.querySelector("#architecture-list");
const architectureTemplate = document.querySelector("#architecture-card-template");

architectureTracks.forEach((item, index) => {
  const node = architectureTemplate.content.cloneNode(true);
  node.querySelector("h3").textContent = item.title;
  node.querySelector("p").textContent = item.description;
  const card = node.querySelector(".architecture-card");
  card.classList.add("reveal");
  card.style.transitionDelay = `${index * 90}ms`;
  architectureContainer.appendChild(node);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});
