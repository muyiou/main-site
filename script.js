const chromeMilestones = [
  {
    version: "Chrome 1",
    period: "2008",
    title: "速度与多进程成为第一张名片",
    summary:
      "Chrome 初代通过 Omnibox、多进程标签页和 V8 引擎建立了明显的性能与稳定性差异。",
    features: [
      "标签页独立进程，单页异常不再轻易拖垮整个浏览器。",
      "Omnibox 把地址栏和搜索入口合并，交互更直接。",
      "V8 在 JavaScript 执行效率上带来早期决定性优势。"
    ]
  },
  {
    version: "Chrome 8",
    period: "2010",
    title: "从浏览器转向平台化起点",
    summary:
      "扩展、同步和开发者工具成熟，Chrome 开始具备明显的平台属性，而不只是一个浏览器壳。",
    features: [
      "扩展生态让浏览器具备可组合能力。",
      "Chrome Sync 让书签、设置和历史在设备间流动。",
      "内置 DevTools 逐步成为前端调试主力。"
    ]
  },
  {
    version: "Chrome 28",
    period: "2013",
    title: "Blink 时代开启独立演进路线",
    summary:
      "Blink 分叉后，Chrome 获得更高的渲染演进自主性，后续大量新 API 和渲染优化都建立在这条路线之上。",
    features: [
      "渲染引擎路线更加独立，迭代速度提高。",
      "更积极地推进图形、动画和现代布局能力。",
      "为之后的 PWA 和复杂 Web 应用打下基础。"
    ]
  },
  {
    version: "Chrome 57",
    period: "2017",
    title: "PWA 从概念进入可交付阶段",
    summary:
      "Service Worker、Manifest、离线能力和安装体验逐步形成闭环，Web 应用开始获得接近原生的交付方式。",
    features: [
      "支持离线缓存与更稳定的后台能力。",
      "添加到主屏幕和安装体验更完整。",
      "Lighthouse 与性能审计流程逐步工程化。"
    ]
  },
  {
    version: "Chrome 76",
    period: "2019",
    title: "安全隔离进入更严格阶段",
    summary:
      "在 Spectre 等背景下，Chrome 进一步强化 Site Isolation 和跨站点边界，把安全默认值整体抬高。",
    features: [
      "跨站点隔离策略成为关键防线。",
      "权限与敏感能力的默认授权更收紧。",
      "HTTPS 与安全上下文的重要性进一步提升。"
    ]
  },
  {
    version: "Chrome 108",
    period: "2022",
    title: "现代响应式与设备能力显著增强",
    summary:
      "Container Queries、新视口单位、文件系统能力和媒体能力迭代，让前端开发体验更接近真实应用设计需求。",
    features: [
      "Container Queries 改变组件式响应式布局写法。",
      "更准确的视口单位改善移动端适配。",
      "桌面级文件访问与应用集成能力继续增强。"
    ]
  },
  {
    version: "Chrome 121+",
    period: "2024-2025",
    title: "浏览器向高性能应用运行时继续推进",
    summary:
      "WebGPU、View Transitions、隐私沙箱与更完整的开发工具链，体现 Chrome 继续承担平台级运行环境角色。",
    features: [
      "WebGPU 为图形和通用计算打开更大空间。",
      "View Transitions 让跨页面动效更自然。",
      "隐私沙箱推动广告与归因模型转向新机制。"
    ]
  }
];

const eras = [
  {
    range: "2008-2010",
    title: "建立速度心智",
    description: "Chrome 以更快的 JavaScript、更稳定的多进程模型和简洁交互迅速切入市场。"
  },
  {
    range: "2011-2013",
    title: "补齐现代 Web 能力",
    description: "HTML5、图形 API、开发者工具和渲染能力不断扩展，浏览器不再只是文档查看器。"
  },
  {
    range: "2014-2018",
    title: "走向应用平台",
    description: "PWA、推送、离线缓存和安装体验逐步成型，Web 开始具备应用交付路径。"
  },
  {
    range: "2019-2025",
    title: "安全、隐私与高性能并进",
    description: "站点隔离、隐私沙箱、WebGPU 与现代 CSS 能力共同定义新一代浏览器基线。"
  }
];

const capabilityTracks = [
  {
    title: "渲染与图形",
    description: "从 Blink 到 WebGL、再到 WebGPU，Chrome 不断把页面渲染推进成高性能图形平台。"
  },
  {
    title: "JavaScript 与应用规模",
    description: "V8 的优化和 DevTools 的成熟，支撑了复杂前端框架、SPA 和大型工程实践。"
  },
  {
    title: "安全与隐私",
    description: "多进程沙箱、Site Isolation、HTTPS 基线和隐私沙箱持续抬高默认安全标准。"
  },
  {
    title: "Web 平台能力",
    description: "PWA、文件系统、媒体、安装体验和系统级 API 让 Web 更像可交付的软件平台。"
  }
];

const eraList = document.querySelector("#era-list");
const eraTemplate = document.querySelector("#era-card-template");

eras.forEach((era, index) => {
  const node = eraTemplate.content.cloneNode(true);
  node.querySelector(".era-range").textContent = era.range;
  node.querySelector(".era-title").textContent = era.title;
  node.querySelector(".era-description").textContent = era.description;
  const card = node.querySelector(".era-card");
  card.style.transitionDelay = `${index * 80}ms`;
  eraList.appendChild(node);
});

const capabilityList = document.querySelector("#capability-list");
const capabilityTemplate = document.querySelector("#capability-card-template");

capabilityTracks.forEach((item, index) => {
  const node = capabilityTemplate.content.cloneNode(true);
  node.querySelector(".capability-index").textContent = `0${index + 1}`;
  node.querySelector("h3").textContent = item.title;
  node.querySelector("p").textContent = item.description;
  const card = node.querySelector(".capability-card");
  card.style.transitionDelay = `${index * 90}ms`;
  capabilityList.appendChild(node);
});

const timelineList = document.querySelector("#timeline-list");
const timelineTemplate = document.querySelector("#timeline-card-template");

chromeMilestones.forEach((item, index) => {
  const node = timelineTemplate.content.cloneNode(true);
  node.querySelector(".timeline-version").textContent = item.version;
  node.querySelector(".timeline-period").textContent = item.period;
  node.querySelector(".timeline-title").textContent = item.title;
  node.querySelector(".timeline-summary").textContent = item.summary;
  const card = node.querySelector(".timeline-card");
  card.style.transitionDelay = `${index * 70}ms`;
  timelineList.appendChild(node);
});

const spotlightVersion = document.querySelector("#spotlight-version");
const spotlightPeriod = document.querySelector("#spotlight-period");
const spotlightTitle = document.querySelector("#spotlight-title");
const spotlightSummary = document.querySelector("#spotlight-summary");
const spotlightFeatures = document.querySelector("#spotlight-features");
const spotlightTabs = document.querySelector("#spotlight-tabs");

function renderSpotlight(index) {
  const item = chromeMilestones[index];
  spotlightVersion.textContent = item.version;
  spotlightPeriod.textContent = item.period;
  spotlightTitle.textContent = item.title;
  spotlightSummary.textContent = item.summary;
  spotlightFeatures.innerHTML = "";

  item.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    spotlightFeatures.appendChild(li);
  });

  spotlightTabs.querySelectorAll(".spotlight-tab").forEach((tab, tabIndex) => {
    tab.classList.toggle("is-active", tabIndex === index);
  });
}

chromeMilestones.forEach((item, index) => {
  const tab = document.createElement("button");
  tab.className = "spotlight-tab reveal";
  tab.type = "button";
  tab.style.transitionDelay = `${index * 70}ms`;
  tab.innerHTML = `
    <span class="spotlight-tab-title">${item.version}</span>
    <span class="spotlight-tab-copy">${item.title}</span>
  `;
  tab.addEventListener("click", () => renderSpotlight(index));
  spotlightTabs.appendChild(tab);
});

renderSpotlight(2);

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
