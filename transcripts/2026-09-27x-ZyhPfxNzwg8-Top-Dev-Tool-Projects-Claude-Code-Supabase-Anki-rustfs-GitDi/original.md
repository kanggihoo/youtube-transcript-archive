---
title: "Top Dev Tool Projects : Claude Code, Supabase, Anki, rustfs, GitDiagram & OpenSpec"
author: "ManuAGI - AutoGPT Tutorials"
site: "YouTube"
source: "https://www.youtube.com/watch?v=ZyhPfxNzwg8"
domain: "youtube.com"
language: "en"
description: "👉 AI Agents Studio : https://www.youtube.com/channel/UCAawqobkJZ28OLcYcMgqYaw?sub_confirmation=1\"This video covers top trending open-source Dev Tool project..."
word_count: 2367
---

![](https://www.youtube.com/watch?v=ZyhPfxNzwg8)

👉 AI Agents Studio : https://www.youtube.com/channel/UCAawqobkJZ28OLcYcMgqYaw?sub\_confirmation=1"This video covers top trending open-source Dev Tool project...

## Transcript

### Intro Part

**0:00** · Every week developers release powerful open-source dev tools, and this weekly dev tool project update video brings them together in one place. Top trending open-source and best dev tool projects this week cover coding agents, agent skills, back-end platforms, object storage, and repo diagramming. You'll discover useful and trending developer tools you can start using right away, explained fast and to the point. Without wasting time, let's get started.

**0:27** · Before we jump into today's project updates, here's a quick announcement for everyone. We've launched a brand new YouTube channel called AI Agent Studio, dedicated entirely to AI agent projects, tutorials, and tools. So, if you're interested in staying up to date with the latest AI agent open-source projects, learning how to build your own agents, or exploring cutting-edge agent frameworks, make sure to check it out.

**0:53** · Subscribe now to get weekly videos, in-depth guides, and real-time project breakdowns. The link is right there in the description. Don't miss it. All right, let's get into today's video.

### security-audit-skill

**1:04** · Project number one, security audit skill. Turn your coding agent into a security auditor. Security audit skill is a Cloudflare skill that makes a coding agent run a structured security audit of a code base. It works in six phases, mapping the code, hunting for issues with isolated sub-agents, then having a separate agent try to disprove each finding, so the checker is never the finder. Results are written as machine-readable records, split into confirmed, needs validation, and rejected, with severity based on real impact.

**1:35** · It runs risky target code only inside a sandbox, and repeated runs widen coverage. Released under MIT. Install it and audit your code base.

**1:45** · This one appeared in an earlier video, video two, item two, but you're numbering it fresh here with the new short format. So, here's the 40-80 word version. Project number two, agent skills, production engineering workflows for coding agents. Agent skills is a pack of 25 engineering skills that make an AI coding agent follow the discipline workflows senior engineers use across the whole life cycle from spec to ship.

### agent-skills

**2:10** · Nine {slash} commands cover defining, planning, building, testing, reviewing, and shipping. And skills also activate automatically by task. Each encode steps, verification gates, and anti-shortcut rules, and installs into Claude code, Cursor, CodeX, and many other agents. Released under MIT. Install it and start with a spec.

### Claude Code

**2:32** · Project number three, Claude code, Anthropic's agentic coding tool in your terminal. Claude code is Anthropic's agentic coding tool that lives in your terminal, understands your code base, and works through plain natural language commands. It runs routine tasks, explains complex code, and handles get workflows for you, and can be used in the terminal, in your IDE, or by tagging it on GitHub. It installs with a single script on macOS, Linux, or Windows, extends through plugins that add custom commands and agents, and connects external tools.

**3:03** · Start it and code by describing what you want. Project number four, Bend, a language that blocks AI mistakes with proof. Bend is a fast parallel programming language built so you can trust AI written code without reading it. You declare rules your app must never break in a laws file, and the compiler demands a mathematical proof that every edit still holds them. So, an AI mistake that would violate a rule is blocked rather than merged.

### bend

**3:28** · It runs code across CPU and GPU cores automatically with Python-like syntax and dependent types, Apache 2.0, and still young.

**3:39** · Install it and tell your agent to use Bend. Project number five, NAS-AAHE, open speech model that generates and edits by instruction. AAHE is an open-source 1.5 billion parameter foundation model from Tencent for generating and editing speech through plain natural language instructions. One interface covers many tasks. Zero-shot and description-based text-to-speech, editing what is said, and changing pitch, speed, volume, emotion, timbre, or accent. Plus speech enhancement and separating one speaker from a mix.

### AuK

**4:10** · It runs on Nvidia GPUs through a command line, a web demo, comfy UI, or Python with a fast distilled variant released under MIT. Install it and speak text in any voice. Project number six, SoLP, cut token waste in the Pi coding agent. SoLP is an Nvidia extension for the Pi coding agent that reduces token cost on long-running tasks without cutting the actual work.

### SoL-Pi

**4:36** · It adds four opt-in efficiency mechanisms, running a follow-up validation command inside the same edit call, turning repeated large results into recallable handles, compacting long logs into receipts only when quotes match the source, and compacting finished plan steps out of context. It installs on an unmodified Pi and preserves all evidence released under MIT. Install it and trim your agent's token bill. Project number seven, Cadex Astra Orchestrator.

### Codex Astra Orchestrator

**5:05** · Two-model Cadex setup that plans and builds. Cadex Astra Orchestrator is a ready-made Cadex configuration that splits work between two models. A stronger Astra model acts as the orchestrator that plans and integrates, while a Luna model runs the specialized sub agents that do the actual work. It ships role files for explorer, worker, tester, reviewer, and researcher agents, each pinned to Luna, plus a skill that Cadex can invoke to run the whole flow.

**5:32** · You copy the config into your repo or global setup and tune reasoning effort and concurrency. Install it and orchestrate your first task. Project number eight, Zeta, self-evolving harness for robot policies. Zeta is a closed-loop embodied harness that lets a robot policy improve itself online while the base model stays frozen.

### Zetta

**5:51** · Instead of retraining, it writes code-based runtime critics and recovery skills using three time scale separated loops that govern action frequency, propose critic recovery fixes from failed rollouts, and promote them only after passing same seed and held out validation gates. It targets simulated robotics benchmarks like Libero and Robocasa with learned skills transferring zero-shot.

**6:16** · Python-based research project, set up a campaign and evolve your policy. Project number nine, Rune. GPU-accelerated IDE and terminal multiplexer. Rune is a fast GPU-accelerated development environment that combines a full-featured IDE with a terminal multiplexer. Built as a native application rather than on Electron, it suits both manual coding and driving AI agents with production-grade language intelligence built in and a flexible screen layout of workspace slots, terminals, tabs, and windows.

### rune

**6:45** · Every instance forms an end-to-end encrypted peer network, so you can connect between your machines and continue work from anywhere. And it extends through official or Git-hosted plugins written in Go, GPL 3.0. Install it and organize your workspace. Project number 10, Agent Skills. Senior engineer discipline for your coding agent. Agent Skills is a pack of 25 reusable skills that push an AI coding agent to work like a senior engineer instead of taking the shortest path.

### Agent Skills

**7:16** · It spans the full life cycle, defining, planning, building, testing, reviewing, and shipping. Reach through nine {slash} commands or triggered automatically by the task. Each skill is a step-by-step workflow with verification gates and tables that rebut the excuses agents use to skip steps. And it installs into Claude Code, Cursor, Codex, and dozens more. MIT licensed. Install it and run your first spec. Project number 11, Open Spec.

### OpenSpec

**7:44** · Agree on a spec before the AI writes code. Open Spec is a lightweight spec-driven development tool that gets you and your AI coding assistant to agree on what to build before any code is written. Through {slash} commands, you explore an idea, then generate a change folder holding a proposal, plain markdown requirements with concrete scenarios, a design, and a task checklist, which you review before implementation. It archives completed changes and updates specs, works across 30-plus AI tools, and offers shared cross-repo planning stores for teams.

**8:16** · Node-based, MIT licensed. Install it and propose your first change. Project number 12, Anki. Spaced repetition flash cards that time your reviews. Anki is a spaced repetition flash card program that helps you memorize and retain information efficiently. Instead of reviewing everything equally, it schedules each card based on how well you know it, showing material just before you would forget it. So, you study less and remember more.

### Anki

**8:41** · This repository holds the source for the computer version, built with Rust, Python, and TypeScript, and it syncs with companion mobile and web apps. Open source. Build it or download it and study your first deck. Project number 13, RustFS. S3 compatible object storage built in Rust. RustFS is an open-source distributed object storage system written in Rust, positioned as a memory-safe Apache 2.0 licensed alternative to MinIO.

### rustfs

**9:09** · It offers broad S3 API compatibility, so existing S3 clients and tools work with it, and it can migrate from or run alongside other S3 compatible platforms like MinIO and Ceph. It supports versioning, bucket replication, event notifications, bit rot protection, multi-tenancy, and the OpenStack Swift and Keystone protocols, running single node or distributed. You install it with a script, Docker, Helm, or Nix, and manage it through a web console. Deploy it and create your first bucket.

**9:40** · Project number 14, Disapops, Postgres backend platform, an open Firebase alternative. Disapops is an open-source development platform that gives you a dedicated Postgres database with the surrounding features to build web, mobile, and AI apps. Positioned as an open alternative to Firebase, around the database it adds authentication, auto-generated REST and GraphQL APIs, real-time subscriptions over WebSockets, file storage, edge functions, and a vector toolkit for embeddings, all managed through a dashboard.

### Supabase

**10:12** · It is assembled from open-source tools, offers client libraries in many languages, and runs hosted or self-hosted Apache 2.0.

**10:22** · Sign up or self-host and create your first project. Project number 15, GitDiagram, turn any GitHub repo into an architecture diagram. GitDiagram turns any public or private GitHub repository into an interactive architecture diagram in seconds, so you can grasp a codebase's structure instead of reading through folders. It reads the repository tree and readme, has an AI model write a plain English explanation, then generates a validated system-level graph where clicking a component opens its real file on GitHub. You can swap hub for diagram in any repo URL to open it.

### GitDiagram

**10:56** · Use a local token for private repos and export the diagram as mermaid or PNG. Built with Next.js, MIT licensed. Paste a repo and see its diagram. Project number 16, Bird's Eye View, map the architecture before an AI edits it.

### Birdview

**11:12** · Bird's Eye View is a skill that makes an AI coding agent map a project's architecture before it changes any code, so you see which modules a change will touch before it happens. From an architecture file and the agent's declared activity, it renders a standalone interactive HTML view showing modules, ownership, evidence, and plan scope with architecture, changes, and comparison views. It validates both inputs against JSON schemas and works with any agent through agents.md guidance. Node-based, MIT licensed, install it and map your project first.

### Video Gen Client

**11:46** · Project number 17, VideoGen Client. One Python client for four video generation services. VideoGen Client is an async Python wrapper that gives you one interface to several AI video generation providers. Covering Sea Dance, Kling, Minimax/Halue, and Wyan across many model versions. Instead of learning each provider's API, you generate text-to-video or image-to-video clips through one client, adding your own provider keys.

**12:12** · It offers a command-line tool to list providers and models, start jobs, and poll status, plus a local fast API web UI with model selection, prompts, and MP4 download. And it includes an MCP server. MIT licensed, install it and generate your first clip. Project number 18, AgentVerse OS.

### AgentVerse-OS

**12:33** · Personal cloud OS for you and your agents. AgentVerse OS is a personal cloud operating system that runs on a single Ubuntu server and gives one developer and their AI agents a full environment reached entirely through the browser. One command installs it, then you get a window desktop that adapts to laptop, tablet, or phone. Isolated per project workspaces with browser VS Code plus Claude Code and Code X. A store of 940 for self-hosted apps, backups, and updates.

**13:02** · Access goes only through Tailscale, nothing exposed to the internet. Rust core, Svelte UI, Apache 2.0 alpha. Install it and open your cloud in the browser. Project number 19, Page Mascot. An interactive character that follows your cursor. Page Mascot is a small web component that puts an interactive character on your page that watches the cursor and blinks when you poke it.

### page-mascot

**13:26** · Each mascot is two sprite sheets, nine head directions, and nine expressions, and the pointer's angle picks the direction while a click plays a reaction. You install it from NPM and point it at two image sheets, choosing from ready-made characters or drawing your own through an installable agent skill that generates and aligns the sheets. It respects reduced motion and fine pointer settings. MIT licensed.

**13:50** · Install it and add a mascot to your page. Project number 20, type safe.computer use. Drive your Mac cheaply without screenshots to a big model. Type safe.computer use drives a Mac toward a plain English goal for about a 50th of a cent per step without sending screenshots to a large model.

### typesafe-computer-use

**14:06** · It reads the screen deterministically with OCR and accessibility data, then asks a small type safe classifier which action comes next from a fixed list, clicking, scrolling, or opening a site, and only calls a writing model when a text field genuinely needs free text. Each step logs an annotated screenshot and payload for replay. Python, Mac OS only. MIT licensed. Install it and give your Mac a goal. Thanks for watching. See you in the next update.
