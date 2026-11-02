# Portfolio

A high-performance personal portfolio website built with Next.js (App Router), TypeScript, GSAP, and procedural WebGL shaders.

## Overview

- **Design Philosophy:** Minimalist obsidian dark aesthetic, typography with Space Grotesk & Space Mono, and responsive fluid motion.
- **Visuals:** Custom procedural WebGL vector/flow-field canvas with mouse interaction and zero external asset dependencies.
- **Motion:** GSAP-driven scroll and entrance choreographies with smooth transitions and reduced-motion fallbacks.

## Featured Projects

### 1. [Multiagent Research Assistant](https://github.com/codefixxx/Multiagent_Research_Assistant)
* **Stack:** LangGraph, FastAPI, Redis 8, Playwright, SSE
* **Live Demo:** [Render Dashboard](https://multiagent-research-assistant-wmli.onrender.com/dashboard)
* Distributed multi-agent research workflow orchestrating 5 specialized agents via parallel fan-out/fan-in with Redis checkpointers and automated citation verification.

### 2. [PotholeMap](https://github.com/codefixxx/Pothole_map)
* **Stack:** PostgreSQL, PostGIS, Redis, BullMQ, Node.js, k6
* **Live Demo:** [Vercel Deployment](https://pothole-map-one.vercel.app/)
* Full-stack civic-tech platform connecting citizens and municipal authorities with PostGIS spatial routing, 512-dim embedding deduplication, and resilient BullMQ queues.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Custom CSS with fluid typography & CSS variables
- **Motion & Interactions:** GSAP, ScrollTrigger, SplitText
- **Graphics:** WebGL / OGL procedural shaders

## Getting Started

### Prerequisites

- Node.js 18.17+ or later
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/codefixxx/portfolio.git
cd portfolio
npm install
```

### Development

Run the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build & Production

Create an optimized production build:

```bash
npm run build
npm run start
```

## License

MIT
