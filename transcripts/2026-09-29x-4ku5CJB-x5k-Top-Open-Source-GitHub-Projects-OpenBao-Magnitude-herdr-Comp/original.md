---
title: "Top Open-Source GitHub Projects : OpenBao, Magnitude, herdr, Compositor, WeKnora & BongoCat #296"
author: "ManuAGI - AutoGPT Tutorials"
site: "YouTube"
source: "https://www.youtube.com/watch?v=4ku5CJB-x5k"
domain: "youtube.com"
language: "en"
description: "👉 AI Agents Studio : https://www.youtube.com/channel/UCAawqobkJZ28OLcYcMgqYaw?sub_confirmation=1\"This video covers the top trending open-source GitHub proje..."
word_count: 2155
---

![](https://www.youtube.com/watch?v=4ku5CJB-x5k)

👉 AI Agents Studio : https://www.youtube.com/channel/UCAawqobkJZ28OLcYcMgqYaw?sub\_confirmation=1"This video covers the top trending open-source GitHub proje...

## Transcript

### Intro Part

**0:00** · Every week, developers release new open-source projects on GitHub, and this is our weekly GitHub project update video covering the best of them. Top trending open-source GitHub projects this week, you'll discover useful and trending developer tools from local AI agents to self-hosted platforms. Without wasting time, let's get started.

**0:20** · Before we jump into today's project updates, here's a quick announcement for everyone. We've launched a brand new YouTube channel called AI Agent Studio, dedicated entirely to AI agent projects, tutorials, and tools. So, if you're interested in staying up to date with the latest AI agent open-source projects, learning how to build your own agents, or exploring cutting-edge agent frameworks, make sure to check it out.

**0:46** · Subscribe now to get weekly videos, in-depth guides, and real-time project breakdowns. The link is right there in the description. Don't miss it. All right, let's get into today's video.

### hindsight

**0:57** · Project number one, Hindsight, long-term memory for AI agents that learns.

**1:02** · Hindsight is open-source long-term memory for AI agents that learns. For coding agents, one package builds a per repo memory bank from your Git history and past sessions, injects it as the agent starts, and adds knowledge pages, SDKs, and a REST API expose, retain, recall, and reflect with light LLM covering 100 plus models. It integrates with Claude code, Codex, Cursor, LangGraph, and CrewAI. A local daemon runs it all in one command. Install it and give your agent memory.

**1:33** · Project number two, Non-Nvidia Model Optimizer. Compress models for faster inference on Nvidia GPUs. Nvidia Model Optimizer, or Model Opt, is an open-source library of model optimization techniques for compressing models and speeding up inference on Nvidia GPUs. You feed it a PyTorch or ONNX model and stack techniques through Python APIs.

### NVIDIA Model Optimizer

**1:56** · quantization and FP8, INT8, INT4, and NVFQP4 with post-training and quantization-aware training, plus sparsity, pruning, and distillation. The checkpoint deploys in TensorRT-LLM, TensorArt-VLLM, and SGLang with Hugging Face export for transformers and diffusers. Install it with pip and optimize a model. Project number three, Asian OpenBow, open-source secrets management forked from HashiCorp Vault. OpenBow is an open-source secrets management platform for storing and distributing sensitive data, secrets, certificates, and keys under open governance forked from HashiCorp Vault.

### OpenBao

**2:36** · It stores arbitrary key-value secrets encrypted before they touch disk, generates dynamic short-lived credentials on demand for AWS and SQL databases, and revokes them after their lease, and offers encryption as a service so apps encrypt data without managing keys. It adds audit logs, PKI and transit engines, and HSM/KMS-backed keys. Deploy it and centralize your secrets. Project number four, Reverse Skill, skill router for reverse engineering and authorized pen testing.

### reverse-skill

**3:07** · Reverse Skill is an open-source skill router that turns AI coding agents into assistants for reverse engineering, authorized penetration testing, and security research. When an agent hits an APK, a binary, front-end JS crypto, CTF, or a pen test task, it routes to the right methodology, then calls tools like Ghidra, Radare2, and Frida. Routing is a client-agnostic config with a read-only case review layer for scope and findings. It works in Claude Code and Cursor. Install it and route your security work.

**3:38** · Project number five, MobileNext, MCP server for iOS and Android automation. MobileNext is an open-source MCP server for mobile automation and scraping across iOS and Android emulators, simulators, and real devices through one platform-agnostic API. It's accessibility first, and agent drives apps from the native accessibility tree with no vision model, falling back to screenshots and coordinates when needed. An LLM can automate user journeys, fill forms, and extract data from the screen.

### Mobile Next

**4:10** · It works with Claude Code, Codex, Gemini, and Copilot against local or cloud devices. Install it and automate your app. Project number six, Wik Nora. Turn documents into RAG agents and auto wiki.

### WeKnora

**4:25** · Wik Nora is an open-source LLM-powered knowledge platform from Tencent that turns documents into knowledge three ways. RAG-based Q&amp;A for lookups, a react agent that orchestrates retrieval, MCP tools, and web search for multi-step tasks, and a wiki mode where agents distill documents into a self-maintaining interlinked markdown wiki with a knowledge graph. It ingests 10 plus formats, auto syncs from Feishu, Notion, and UK, works with 20 plus LLM providers, and swaps vector databases.

**4:58** · Self-host it with Docker and query your documents. Project number seven, open code review. AI code review CLI from Alibaba. Open code review is an open-source AI-powered code review CLI from Alibaba. It's hybrid design pairs deterministic pipelines with an LLM agent. It reads your git diff, and the agent reads full files, searches the codebase, and inspects changes, then returns line-level comments.

### OpenCodeReview

**5:23** · A multi-language rule set catches issues like null pointer bugs, thread safety, XSS, and SQL injection, and it can auto apply fixes. It works with OpenAI and Anthropic with plugins for Claude Code and Codex. Install it and review your code. Project number eight, God's Eye View. Live open-source spatial intelligence on a 3D globe. God's eye view is an open-source, browser-based spatial intelligence console. A spy satellite simulator with real data.

### God's Eye View

**5:53** · On a 3D globe, it layers live aircraft, ships, satellites, wildfires, and CCTV.

**6:02** · So, you move between a global view and a single object. You ride a tracked flight, lock onto anything to see its trail, and hand off to the nearest camera. It runs locally on public data, and by design, it tracks assets and systems, not people. Build it and watch the world. Project number nine, magnitude, private offline AI agent with local models built in. Magnitude is an open-source AI agent that runs on local models with its inference engine. So, it's private and offline with no token costs or API keys.

### Magnitude

**6:32** · It profiles your hardware, recommends the models your machine can run, then downloads, configures, and tunes them. Its rust engine, built on llama.cpp, calculates memory before loading and keeps parallel agents responsive. It uses your shell and edits files and skills at Excel, PowerPoint, PDFs, and Chrome. Install it and run agents locally. Project number 10, vphone-kexli, run a virtual iPhone on Apple silicon.

### vphone-cli

**7:01** · vphone-kexli is an open-source command-line tool for creating and running a virtual iPhone on an Apple silicon Mac. It uses Apple's virtualization framework and research VM infrastructure, and a bundle handles firmware preparation and restore. You point it at iPhone and cloud OS firmware, and it prepares, patches, restores, and boots the VM. The touch-enabled \[clears throat\] window supports file transfer, IPA install, screen recording, location, and an optional guest API. It ships an optional launchpad GUI.

**7:31** · Build it and boot a virtual iPhone. Project number 11, deskcom-crm, self-hosted AI sales CRM for selling by chat. DeskCom CRM is an open-source, self-hosted CRM for businesses that sell by chat, an alternative to Komo, Octadesk, and Intercom. It combines a sales pipeline with AI agents and WhatsApp through WAHA, so leads flow from chat and forms. The AI replies and books appointments, and a human can take over to stop the bot.

### DeskcommCRM

**8:01** · It's MCP-ready and multi-tenant with automations, scheduling, Google Calendar sync, and LGPD compliance. One command installs the stack on a VPS. Deploy it and sell by chat. Project number 12, Llama Soup. Fine-tune an 8B model on a 4GB laptop.

### Soup

**8:20** · Soup is an open-source tool that fine-tunes LLMs from a YAML file. One config, one command, no SSH. Its layer streaming keeps the frozen base out of VRAM and feeds the GPU one decoder layer at a time, so an 8B model fine-tunes on a 4GB laptop card. It auto-handles batching and quantization, ships templates for chat, code, reasoning, vision, and preference tuning, and lets you chat with, merge, and export to GGUF. Install it and fine-tune from one file. Project number 13, Compositor.

### Compositor

**8:53** · Free, open-source Photoshop alternative for Mac. Compositor is a free, open-source image editor for Mac, a Photoshop alternative for compositing and post-processing. It gives layers and folders with Photoshop's blend modes, layer masks, adjustment layers like curves, levels, and gradient map, and GPU-rendered layer effects like drop shadow, editable anytime. Moves, scales, and rotations stay non-destructive, and it imports PSD files with blend modes intact. AI agents can build projects, too.

**9:23** · A .comp is a folder of PNG layers plus a manifest. Download it and start compositing. Project number 14, Dend Search. A small, fast, minimal WebKit browser for macOS. Search is a fast, open-source WebKit browser for macOS with no toolbar, start page, or account, just tabs and the page. One field does it all. Type an address and go, or words to search, completing from your history and sending nothing until return.

### Search

**9:53** · Because it uses WebKit, the engine in every Mac, the app is 3 MB and opens instantly with no Chromium in memory. It keeps passwords in the keychain and runs Chrome extensions. Download it and browse quietly. Project number 15, The Ashen's QM, multiplayer agent harness for a whole company. QM is an open-source multiplayer AI agent harness, open-sourced by Y Combinator and used internally at YC.

### qm

**10:17** · Built for a company, it gives each employee their isolated workspace, scoped memory, files, credentials, crons, and a durable sandbox while people collaborate with the agent in Slack channels and projects. Pi, open code, Codex, and Claude code all drive the same core, so you pick your harness and model.

**10:37** · Security postures range from per-call approval to screened autonomy. It's early. Deploy it to your cloud. Project number 16, Heard is our the always-running terminal runtime for coding agents. Heard is an open-source multiplexer, the runtime your coding agents live on. It's a background server owning their terminals, so agents survive a closed lid, dropped network, or restart, reattach from any terminal, or over SSH. Every pane is marked working, blocked, or idle, so you never hunt for the stuck one.

### herdr

**11:07** · Agents drive it through a CLI and socket API, and it runs what you run, Claude code, Codex, Cursor, and more. One Rust binary, install it and herd your agents. Project number 17, Eshan Open Muse, personal agent with a browser, terminal, and files. Open Muse is an open-source personal agent with a browser, terminal, and files from Copilot Kit. You ask for an outcome, follow the plan, and come back to the result. It runs a server and workers, giving the agent a computer, Chromium plus a Linux workspace.

### OpenMuse

**11:39** · So, it browses pages, runs commands, and handles files. Take over its browser or terminal anytime. It speaks AGUI, so you can swap the agent harness. It's a template for iOS, Android, web. Build your agent. Project number 18, Bance Open Glean, self-hostable AI knowledge workspace over Hydra DB. Open Glean is an open-source AI workspace for knowledge work, built over Hydra DB, an Open Glean alternative.

### Open Glean

**12:06** · Ask a question across your memories, files, and connected apps, and it retrieves context, streams an answer with inline citations, and a sources panel, plus optional web search. A deep research mode plans a DAG of sub-questions, runs them against Hydra in parallel, and merges findings into one cited answer. You bring your own OpenAI compatible model, deploy it and ask your knowledge. Project number 19, Bongo Cat, desktop Bongo Cat that plays along as you type.

### BongoCat

**12:37** · Bongo Cat is an open-source desktop pet, the Bongo Cat overlay that plays along with your keyboard and mouse, reacting as you type and click. It's a native app built in C C++, with SDL 3 and OpenGL, and stays lightweight. Input is read locally only to drive animations and shortcuts. It never records or uploads keystrokes, and there are no ads, analytics, or tracking. It supports Live2D models and runs on Windows, with macOS and Linux in testing. Download it and boop.

**13:06** · Project number 20, Mini AGI, continual learning model trained from scratch on 8 GB. Mini AGI is an open-source continual learning byte-level language model that trains from scratch on a single 8 GB laptop GPU, and keeps learning from everything it reads. It assembles its own architecture and stores weights as files on disk, paging them onto the card as needed. So, its size is bounded by free disk space, not VRAM. It grows capacity, prunes what's unused, and reads through the same code path it serves on.

### mini-AGI

**13:37** · It's an experiment. Clone it and watch it learn. Thanks for watching. See you in the next update.
