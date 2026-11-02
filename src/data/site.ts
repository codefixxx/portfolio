export type CaseBodySection = {
  heading: string;
  text: string;
};

export type Experience = {
  period: string;
  role: string;
  organization: string;
  location: string;
  focus: string;
  description: string;
  bullets: string[];
  technologies: string[];
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: number;
  roles: string[];
  summary: string;
  liveUrl?: string;
  codeUrl?: string;
  cover: {
    seed: number;
    colors: [string, string, string];
    alt: string;
  };
  metrics: { label: string; value: string }[];
  bullets: string[];
  body: CaseBodySection[];
  placeholder?: boolean;
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  coursework: string[];
};

export type Certification = {
  title: string;
  issuer: string;
};

export type SkillCategory = {
  category: string;
  skills: string[];
};

export const site = {
  name: 'Ayush',
  surname: 'Mishra',
  fullName: 'Ayush Mishra',
  role: 'AI Engineer',
  location: 'Remote / India',
  coordinates: '28.6139° N, 77.2090° E',
  url: 'https://ayushmishra.dev',
  description:
    'AI Engineer building production LLM applications, multi-agent workflows, and scalable full-stack software.',
  email: 'ayushkmishra332@gmail.com',
  phone: '+91-9821508733',
  phoneCall: '+919821508733',
  status: 'Open for AI Engineer & Full Stack roles',
  bio: [
    'I am an AI Engineer passionate about designing and building intelligent, high-impact software systems. My work spans generative AI, multi-agent architectures, computer vision, and modern full-stack development.',
    'I focus on translating state-of-the-art models into reliable, production-ready applications—combining LLMs, agentic orchestration, asynchronous data pipelines, and scalable backend services to solve real-world problems.',
  ],
  capabilities: [
    {
      title: 'Generative AI & LLM Systems',
      desc: 'Building intelligent applications with LLMs, RAG pipelines, prompt engineering, and conversational interfaces.',
    },
    {
      title: 'Multi-Agent Orchestration',
      desc: 'Designing coordinated multi-agent workflows with state persistence, tool calling, and automated verification.',
    },
    {
      title: 'Computer Vision & Applied ML',
      desc: 'Implementing practical vision pipelines, real-time feature tracking, and efficient client/server inference.',
    },
    {
      title: 'Full-Stack & Backend Engineering',
      desc: 'Developing scalable REST APIs, async job queues, real-time WebSockets, and secure database architectures.',
    },
  ],
  education: {
    institution: 'Central University of Karnataka',
    degree: 'B.Tech in Mathematics and Computing',
    period: '2023 – 2027',
    gpa: 'CGPA: 7.9',
    coursework: ['Linear Algebra', 'Mathematics for Machine Learning', 'Optimization Theory'],
  } as Education,
  certifications: [
    { title: 'GCP (Hack2Skill)', issuer: 'Google Cloud Platform / Hack2Skill' },
    { title: 'Deep Learning', issuer: 'Specialization' },
  ] as Certification[],
  skills: [
    { category: 'AI / ML', skills: ['LLMs', 'RAG', 'Multi-Agent Systems', 'LangGraph', 'Embeddings', 'Computer Vision', 'MediaPipe'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'WebSockets (Socket.io)', 'SSE', 'WebRTC', 'Celery', 'BullMQ', 'JWT', 'RBAC'] },
    { category: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
    { category: 'Frontend', skills: ['React', 'Vite', 'SVG', 'Vitest'] },
    { category: 'Data & Storage', skills: ['PostgreSQL', 'PostGIS', 'MongoDB', 'Redis'] },
    { category: 'Systems & Concepts', skills: ['Distributed Systems', 'Idempotency', 'Async Pipelines', 'Low-Latency Systems', 'Chaos Testing', 'Load Testing (k6)'] },
    { category: 'Cloud & Tools', skills: ['Google Cloud Platform', 'Git', 'Playwright'] },
  ] as SkillCategory[],
  socials: [
    { label: 'GitHub', href: 'https://github.com/codefixxx' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-mishra-2072961a3/' },
    { label: 'Email', href: 'mailto:ayushkmishra332@gmail.com' },
    { label: 'Phone', href: 'tel:+919821508733' },
  ],
  channels: [
    {
      id: 'github',
      label: 'GitHub',
      handle: 'github.com/codefixxx',
      href: 'https://github.com/codefixxx',
      badge: 'OPEN SOURCE & CODE',
      action: 'Inspect Repositories',
      description: 'Production code repositories for distributed multi-agent systems, WebRTC voice pipelines, and civic-tech platforms.',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'linkedin.com/in/ayush-mishra',
      href: 'https://www.linkedin.com/in/ayush-mishra-2072961a3/',
      badge: 'CAREER & NETWORK',
      action: 'View Professional Profile',
      description: 'Professional experience, recommendations, engineering updates, and AI system architecture insights.',
    },
    {
      id: 'email',
      label: 'Email',
      handle: 'ayushkmishra332@gmail.com',
      href: 'mailto:ayushkmishra332@gmail.com',
      badge: 'DIRECT INBOX',
      action: 'Send Message',
      description: 'Direct communication channel for engineering opportunities, technical discussions, and collaborations.',
    },
    {
      id: 'phone',
      label: 'Telephone & Direct Line',
      handle: '+91-9821508733',
      href: 'tel:+919821508733',
      badge: 'DIRECT CONTACT',
      action: 'Initiate Direct Call',
      description: 'Direct telephone line for interviews, urgent inquiries, and project coordination.',
    },
  ],
  glPalette: ['#090a0d', '#10b981', '#06b6d4'] as [string, string, string],
};

export const experiences: Experience[] = [
  {
    period: 'Jun. 2026 – Aug. 2026',
    role: 'AI Engineer Intern',
    organization: 'Infosys Springboard',
    location: 'Remote',
    focus: 'Conversational Voice AI & On-Device Computer Vision',
    description:
      'Engineered a sub-second conversational voice system and moved vision inference into the browser with WASM, eliminating cold starts and cloud GPU dependencies.',
    bullets: [
      'Built a sub-second conversational voice system (<700ms latency) using WebRTC and Ultravox, with an async pre-caching pipeline that removed 6s of LLM cold-start delay',
      'Moved computer vision into the browser with MediaPipe WASM (473-landmark gaze and head-pose inference in 15–25ms), removing cloud GPU inference and cutting telemetry payload by 80%',
      'Improved LLM evaluation throughput by 65% by batching multi-turn interview threads with Celery, with idempotent scoring and <15ms API query times',
    ],
    technologies: ['WebRTC', 'Ultravox', 'MediaPipe WASM', 'Celery', 'LLMs', 'Python'],
  },
  {
    period: 'Open Source',
    role: 'Open Source Contributor',
    organization: 'Tenali (Adaptive Math Learning Platform)',
    location: 'Remote',
    focus: 'DAG Learning Paths & Centralized Validation Engine',
    description:
      'Designed DAG-based topological learning paths across 90+ modules, added non-invasive telemetry across micro-apps, and engineered a parsing and validation engine with Vitest coverage.',
    bullets: [
      'Designed DAG-based learning paths with topological sorting across 90+ interactive modules; built a React roadmap UI with SVG progress tracking and adaptive mastery detection',
      'Added non-invasive telemetry to track quiz performance across 90+ micro-apps without modifying legacy APIs',
      'Built a centralized math parser and validation engine (fractions, mixed numbers, scientific notation, coordinates) with Vitest coverage, fixing validation false positives',
    ],
    technologies: ['React 19', 'Node.js', 'Express', 'Vitest', 'SVG', 'Vite'],
  },
  {
    period: 'Jan. 2026 – Mar. 2026',
    role: 'Full Stack Developer Intern',
    organization: 'VLED Lab – Vi-Slides (AI-Powered Classroom Platform)',
    location: 'Remote',
    focus: 'TypeScript Backend & Generative AI Classroom Integration',
    description:
      'Developed a TypeScript Express backend using repository pattern and dependency injection, implemented real-time classroom synchronization with Socket.io, and integrated Google Generative AI for student Q&A.',
    bullets: [
      'Developed a TypeScript Express backend using the repository pattern and dependency injection; designed RESTful APIs and managed MongoDB transactions',
      'Implemented real-time classroom sync with Socket.io; built JWT authentication and role-based access control',
      'Integrated Google Generative AI for student Q&A with teacher escalation',
    ],
    technologies: ['TypeScript', 'Express', 'Socket.io', 'Google Generative AI', 'MongoDB', 'JWT', 'RBAC'],
  },
];

export const projects: Project[] = [
  {
    slug: 'multiagent-research-assistant',
    title: 'Multiagent Research Assistant',
    client: 'Distributed Multi-Agent Architecture',
    year: 2026,
    roles: ['LangGraph', 'FastAPI', 'Redis 8', 'Playwright', 'SSE'],
    summary:
      'Distributed multi-agent research assistant running 5 specialized agents via parallel fan-out/fan-in, Redis checkpointers, and an automated Citation Validator & RAG Scorer.',
    liveUrl: 'https://multiagent-research-assistant-wmli.onrender.com/dashboard',
    codeUrl: 'https://github.com/codefixxx/Multiagent_Research_Assistant',
    cover: {
      seed: 3.42,
      colors: ['#090a0d', '#10b981', '#06b6d4'],
      alt: 'Multiagent Research Assistant parallel orchestration graph and streaming pipeline topology',
    },
    metrics: [
      { label: 'Latency Reduction', value: '70% (<30s execution)' },
      { label: 'Cache Hits', value: '0.5ms (Redis Checkpointers)' },
      { label: 'Verification', value: '202 Automated Tests' },
    ],
    bullets: [
      'Built a distributed multi-agent system with 5 specialized agents running via parallel fan-out/fan-in, cutting research latency by 70% (<30s execution)',
      'Prevented state loss on crashes with Redis checkpointers and an idempotency cache (0.5ms cache hits), with recovery validated through chaos testing',
      'Built a 3-tier scraping fallback pipeline (HTTPX → Jina Reader → Playwright Stealth) with URL deduplication',
      'Built a Citation Validator & RAG Scorer that checks claims against source snippets to catch unsupported citations',
      'Secured BYOK keys with AES-256-GCM encryption and in-memory zeroization; <250ms SSE streaming backed by 202 automated tests',
    ],
    body: [
      {
        heading: 'Distributed Multi-Agent Orchestration',
        text: 'Architected and built a distributed multi-agent system utilizing LangGraph and FastAPI, coordinating 5 specialized agents through parallel fan-out/fan-in execution. This parallelized research workflow cut overall latency by 70%, completing rigorous multi-source inquiries in under 30 seconds.',
      },
      {
        heading: 'State Preservation & Chaos-Tested Recovery',
        text: 'Engineered an idempotency cache and integrated Redis checkpointers to eliminate state loss during unexpected node crashes or process interruptions. Achieving 0.5ms cache hits, full system state recovery was rigorously validated through automated chaos testing scenarios.',
      },
      {
        heading: '3-Tier Scraping Fallback Pipeline',
        text: 'Built a resilient web extraction pipeline that cascades gracefully across three layers: fast HTTPX requests, Jina Reader extraction, and Playwright Stealth for anti-bot protected domains, paired with automated canonical URL deduplication.',
      },
      {
        heading: 'Citation Verification & Enterprise Security',
        text: 'Developed a Citation Validator & RAG Scorer that systematically verifies generated claims against retrieved source snippets to catch and eliminate hallucinated or unsupported citations. Secured Bring-Your-Own-Key (BYOK) inputs with AES-256-GCM encryption and in-memory zeroization, streaming real-time tokens via <250ms Server-Sent Events (SSE) backed by 202 automated tests.',
      },
    ],
  },
  {
    slug: 'pothole-map',
    title: 'PotholeMap',
    client: 'Full-Stack Civic-Tech Platform',
    year: 2026,
    roles: ['PostgreSQL', 'PostGIS', 'Redis', 'BullMQ', 'Node.js', 'k6'],
    summary:
      'Full-stack civic-tech platform linking citizens and municipal authorities with PostGIS spatial routing, 512-dim embedding duplicate detection, and Redis + BullMQ workers.',
    liveUrl: 'https://pothole-map-one.vercel.app/',
    codeUrl: 'https://github.com/codefixxx/Pothole_map',
    cover: {
      seed: 8.19,
      colors: ['#090a0d', '#06b6d4', '#10b981'],
      alt: 'PotholeMap spatial routing and vector duplicate clustering topology',
    },
    metrics: [
      { label: 'Spatial Routing', value: '512-dim Embeddings + PostGIS' },
      { label: 'Rate-Limit Policies', value: '7 API Enforcement Rules' },
      { label: 'Load Test Proof', value: '0 → 150 VUs (k6 Validated)' },
    ],
    bullets: [
      'Built a full-stack civic-tech platform linking citizens and municipal authorities; designed a 4-role RBAC system with a 5-stage lifecycle, governed transitions and audit logging',
      'Implemented PostGIS municipal routing and hybrid duplicate detection using 512-dim embeddings plus spatial proximity',
      'Offloaded image optimization, embeddings and notifications to Redis + BullMQ; enforced 7 API rate-limit policies',
      'Validated performance with k6 load tests (0 → 150 VUs) and a 30-VU, 90-second soak test',
    ],
    body: [
      {
        heading: 'Civic Governance & 4-Role RBAC',
        text: 'Engineered a comprehensive civic-tech platform connecting citizens and municipal authorities. Designed a 4-role role-based access control (RBAC) system governing a 5-stage ticket lifecycle with strictly validated transitions and tamper-evident audit logging.',
      },
      {
        heading: 'PostGIS Routing & Hybrid Vector Deduplication',
        text: 'Implemented intelligent municipal dispatch routing using PostGIS spatial geography queries coupled with hybrid duplicate detection that clusters incoming citizen reports based on 512-dimensional embeddings alongside geographic spatial proximity.',
      },
      {
        heading: 'Asynchronous Workers & Queue Optimization',
        text: 'Offloaded heavy image compression, embedding calculations, and outbound push notifications to Redis + BullMQ background queues, while enforcing 7 distinct API rate-limiting policies to safeguard municipal service availability.',
      },
      {
        heading: 'Load Testing & Soak Test Validation',
        text: 'Validated high-traffic resilience and backend throughput with k6 load testing suites, simulating instant spikes from 0 to 150 Virtual Users (VUs) and proving zero-memory-leak stability through a sustained 30-VU, 90-second soak test.',
      },
    ],
  },
];
