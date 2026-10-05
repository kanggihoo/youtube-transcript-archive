---
title: "[한영자막] AI 에이전트를 위한 문서 컨텍스트 레이어 구축하는 법 — Jerry Liu, LlamaIndex"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=S-bRN-avZ4Q"
domain: "youtube.com"
language: "en"
description: "LlamaIndex의 공동창업자이자 CEO인 Jerry Liu가 2026년 AI 에이전트 시대를 맞아 RAG와 문서 컨텍스트 레이어가 나아갈 방향을 명쾌하게 제시합니다.10조 페이지 이상의 PDF, 워드, 파워포인트에 갇힌 비정형 지식을 에이전트가 완벽하게 소화할 수 있도록 만드는..."
word_count: 4461
---

![](https://www.youtube.com/watch?v=S-bRN-avZ4Q)

LlamaIndex의 공동창업자이자 CEO인 Jerry Liu가 2026년 AI 에이전트 시대를 맞아 RAG와 문서 컨텍스트 레이어가 나아갈 방향을 명쾌하게 제시합니다.10조 페이지 이상의 PDF, 워드, 파워포인트에 갇힌 비정형 지식을 에이전트가 완벽하게 소화할 수 있도록 만드는...

## Transcript

### 2026년의 RAG: 에이전트 하네스와 컨텍스트 레이어

**0:00** · everyone, I'm Jerry, co-founder and CEO of today I'm excited to give a talk called building the document context layer for AI agents.

**0:08** · Really big shout out to the AI Engineer World Fair for hosting.

**0:12** · And if you've seen some of my earlier talks from the previous AI Engineer conferences, we've kind of traced through a lot of the evolution of how, you know, agent advances have correlated with, you know, how you inject context into evolving applications. And so today in 2026, we'll kind of talk about three main topics. One is, you know, what is RAG in 2026?

**0:32** · Two, basically that basically decomposes into an agent harness plus a context layer. So kind of going into the modern document context layer for agents.

**0:40** · And giving you a little bit of sense of kind of some of the core capabilities today, especially unlocking, you know, the vast trove of document-based data today, and giving you a glimpse of what's next.

**0:50** · All right. RAG in 2026. But before that, just a little bit about the company and I'll kind of get on with the main talk.

**0:55** · You might have seen us as a RAG framework. We started in 2023, got pretty popular, and kind of created a lot of techniques around like advanced RAG, that type of stuff. Today, we're basically the main document infrastructure for AI agents. We deliver the best platform for agents to actually read and operate over documents, and we see ourselves as unlocking basically the vast troves of document context even as agents and models themselves get better.

### 단순 Top-K 검색에서 스스로 검색어를 고민하는 에이전트로

**1:19** · All right. So, what does RAG actually mean in 2026, and how are agents actually inhaling and addressing context today?

**1:26** · This is a snapshot from actually 3 years ago, when I first gave a talk on this.

**1:31** · And naive RAG was basically just building a simple chatbot over your private corpus of data. If you flash back all the way to January of like 2023, you know, this technique basically consisted of you have some corpus of documents, you chunk it up, embed it, and put it into a vector database. You do some naive top K retrieval, and then you generate some stuff with an LLM. All the steps are fixed, you use kind of like a fixed set of techniques, and then with that you actually get some basic application results by just being able to chat over a corpus of documents.

**2:00** · Of course, the agent landscape has changed quite a bit and quite dramatically since then. Uh one is agent loops and tool use have gotten a lot a lot better, especially as both the models and agent harnesses have increased. And there's basically a cleaner separation now between agent reasoning and how they actually interact with context. If you look at what I call kind of the modern generalized agent, which includes, you know, all your favorite applications and tools out there from Claude code, Claude code work, open claw, codex, and a few others.

**2:29** · Um you know, the retrieval complexity has started to get baked into the agent layer. So, instead of coming up with a variety of hacks to really work around the limitations of naive top-k retrieval, you can start getting the agent to really reason about, for instance, about key best keyword to search for, best like, you know, search term to actually get back good results.

**2:48** · Even if the retrieval tools are basic, uh the agent can input the right queries to basically loop upon itself and helps solve the task at hand.

**2:55** · Number two, context is moving up the stack. Um there's been a lot of conversations, I think, uh for the first two and a half years of gen AI of how do you actually manage the agent context window, make sure it doesn't overflow, that type of thing. But, I think as, you know, a lot of the evolving techniques, compaction, long context, um have evolved, I think it's more and more of the conversation is actually how do you just hook up the right MCP servers and skills and tasks to the agent to enable it to do various types of tasks.

### 상위 스택으로 이동하는 컨텍스트와 자연어 프로그래밍

**3:23** · And so, that also applies to agent orchestration, right? Coding agents have gotten better. Um abstractions of actually defining what types of tasks and programs you want to build have moved a little bit upwards towards English as opposed to through code. And so, maybe in 2023 to 2025, you define programs and you still build stuff via like importing Python, using TypeScript through code.

**3:43** · It's pretty clear these days more and more people are just building stuff uh using English, whether you're a software engineer um or you're a non-technical function, like go-to-market marketing and you're defining run books through English and kind of like defining the right goals and making sure the AI is aligned on the right task and we see that carrying over going forward as well.

**4:05** · So in terms of just like general evolving knowledge work patterns and this kind of forms a foundation for what we how we think about the context layer, you know, in the past maybe you could use AI to just like ask simple questions get it resolved.

**4:18** · Today you're starting to be able to define and solve more end-to-end like tasks just through English and also use English to start compiling repeatable programs to actually execute something at scale.

**4:31** · Obviously there's been a lot of discussion on how this will evolve even more and we do see AI agents as behaving even more autonomously through solving long horizon tasks looping upon themselves to be able to achieve a goal.

**4:43** · So the future will move towards a state where you actually might not even have to define the task in English but actually more of the goal and a scoring rubric and then the agent will use all available context available to it to actually solve the task.

**4:57** · So with that overall framing let's talk about what kind of what is a pretty core focus for us as a company which is basically helping to unlock unstructured context to basically feed into these agents even as they get really really good both in terms of the core model capabilities as well as the agent harness and we'll focus a lot on our core focus area which is document context but of course there's plenty of other sources of context as well.

### 컨텍스트가 전부다: 문서에 갇힌 10조 페이지의 지식

**5:18** · In fact we do think context really is everything in the end you could have a infinitely smart agent but your ability to actually get value out of this infinitely smart agent that's able to do more and more stuff end-to-end is actually you know giving it the right things to do and the right things to do include the actual task the goal but also access to the vast troves of organizational context available to it.

**5:47** · Whether that is web search, web context, whether that is connectors through, you know, like tools and skills and MCP servers, whether it's connectors through Snowflake or Databricks warehouses, um or for us, whether it's access to the vast trove, like the 90% of documents that are stored within SharePoint, Box, Dropbox, S3, um you know, all the unstructured uh data that's locked up within document containers. Um and so for us, you know, we care a lot about how do you actually build the right tools and unlock the right context here.

**6:17** · We see documents as universal containers for unstructured context. Uh there's over 10 trillion plus pages of human native knowledge locked up within PDFs, PowerPoints, Word documents, and Excel sheets. And at the same time, agents are also starting to generate exponentially more data in terms of, you know, more agent native formats in terms of markdown and HTML.

### 문서 인프라의 3대 레이어: 파싱, 시맨틱 저장소, 워크플로

**6:38** · For us, building an agent native document platform contains three main pieces. Uh it contains the document parsing layer, actually digitalizing um the vast troves of PDFs, PowerPoints, and Word documents into kind of accurate, token-efficient context, um and feeding it, you know, either markdown, metadata, and other forms that actually enable agents to do stuff over your documents.

**7:01** · The next is actually what we call the semantic and storage layer, um which is kind of like this concept of document management for humans and agents.

**7:09** · Instead of humans opening up Microsoft Word, using your file system or file storage, how do you create some sort of agent interface that actually captures, stores all your documents, and enables agents to actually manage and operate over them in various ways? Um and then there's still room for actually kind of repeatable document workflows at the agent layer. They can actually encode within the um with um within like this type of platform, too.

**7:31** · If there is a repeatable workflow, like invoice processing, KYC, or claims, instead of always offloading it to a generalized agent, how do you actually develop some sort of specialized workflow for it and really carefully tune cost and accuracy to make sure that you achieve your goal.

**7:49** · So, when we talk about like the concepts today in in terms of these three layers, um we'll talk about this concept of document OCR, which is one of the core concepts of this track, um to document extraction, document search, and document workflows. There's still a variety of topics yet left unsolved from agent native document formats, document versioning, document editing, you know, hill climbing as a service, and just like a wide set of uh kind of remaining concepts actually create a comprehensive piece of software where agents and humans can collaborate on documents and actually do work over them.

### 문서 OCR이 어려운 이유: PDF는 쓰인 것이 아니라 그려진 것

**8:22** · So, we'll start with the first section, um and maybe start kind of with uh the document OCR piece.

**8:27** · Um first off, uh you know, document OCR is hard. Um some of you might have seen a blog post that we put out a few months ago related to this topic. But, the reason this problem even exists is an agent cannot actually take the like the raw PDF like file binary and make sense of it. Um that's because the like the way PDFs are actually stored as a format is it's rendered for kind of like display purposes, um and not really for uh you know, machine consumption in an interpretable manner.

**8:56** · Um they're designed for printing. So, basically text are represented as almost like individual glyphs with coordinates.

**9:03** · Um tables are not represented as tables, they're represented as like typically line segments uh drawn with various types of borders, and also text drawn at certain cell positions. And so, if you're kind of an agent that's trying to make sense of this like document, you're going to have a really hard time actually trying to reason about what character and what shapes like map to what.

**9:22** · Um so, the whole point of document OCR, um you know, it's been around for like 20 plus years, is to really try to create some sort of uh digitalized well-interpretable uh representation um that's both interpretable to humans um as well as AI agents.

**9:37** · Also, reading order itself, if you have a multi-column layout, there is no uh, guarantee that the way it's represented in the PDF um, actually corresponds to the typical ways that humans would read it. Cuz again, it's basically just an arbitrary sequence of characters drawn with uh, coordinate positions.

**9:54** · Related to this, you know, even Word doc parsing is hard. Um, they're a little bit more structured than PDFs, but they're in kind of like this uh, custom bespoke XML format and this applies to PowerPoints as well. Um, it contains more structural information, but still there's a ton of like fluff. Like you don't actually need to ingest all the tags to actually have the agent make sense of the Word document. It still needs to infer a bunch of structure from it. It needs like the right uh, kind of to lift the right metadata around like formatting, semantics, that type of stuff.

**10:22** · But also being able to ignore the tags and actually be able to render the document so that the agent can see the overall structure of the page. Um, it's still generally hard problem and there's a lot of uplift you can get by actually parsing it into a more interpretable format instead of just using the native uh, OXM and feeding that to an agent.

### 파이프라인 방식과 단발성 VLM, 그리고 하이브리드 접근법

**10:41** · Um, if you're familiar with document understanding, um, you know, it's been around for quite a bit of time. Um, there's a lot of these like heuristic and pipeline-based approaches which uh, focused on kind of more uh, I guess like human-driven hand-handwritten like techniques to analyze like kind of various pieces of text, group them into clusters, and identify tables, paragraphs, and be able to kind of like uh, generate some sort of output representation.

**11:04** · Um, a lot of basic techniques if you use open source libraries like PyPDF, PyMuPDF, um, and of course like some of the uh, more recent approaches um, basically use this type of approach. There's also of course using a VL 1 to one-shot a document um, into text. Uh, that's what we call like a vision-based approach. Um, this works decently well. Obviously, you know, I think there's kind of a lot of uplift you can get by being able to read the visual structure, but there's uh, a lot of uh, suboptimal pieces about it. It can hallucinate on text only pages. It costs a ton of money.

**11:38** · And also, it still lacks a lot of the semantics and grounding that you typically expect with some sort of document processing tool.

**11:44** · And so, for us, we really think about combining both the pipeline based approaches of deeply understanding the file containers and binaries with the vision based approaches to help generate, you know, kind of a hybrid approach that we think is at the Pareto frontier of cost and accuracy.

**12:02** · A quick note on this, I'll probably just like skim the high level, but the Pareto frontier for document OCR will always be like much more accurate and cheap compared to the Pareto frontier for, you know, wherever the frontier models are in terms of document understanding. It's because it's a very specific data type and there's always ways to kind of like distill the latest visual understanding capabilities from, you know, Gemini, GPT, Opus into kind of a carefully tailored workflow that's able to process your documents at scale and in a highly accurate manner.

**12:32** · To some extent, that's exactly what we do. You know, we both optimize the underlying like PDF engines plus like Word, PowerPoint, and others.

**12:41** · We have an agentic harness that's like carefully tuned for auto routing between cheaper specialized models to frontier models.

**12:48** · And also kind of specialized fine-tuned document VLMs that are parameter efficient and focus on specific classes of documents, elements like tables, charts, and others.

**13:00** · That's our commercial service called Lama Parse, which I'll talk about in a bit. But, I think in general, you know, we're extremely committed to advancing the frontier of just document understanding cuz basically, if you're within an enterprise organization and you have a massive long tail of documents across financial services, insurance, manufacturing, legal, government, and a bunch of others, there's just a lot of complexity in a lot of these document types. And if you're actually trying to unlock context at scale, most of the models are not up for the task.

### ParseBench: 인간 검증 2,000페이지와 50개 모델 벤치마크

**13:29** · And so, we've created this thing called ParseBench, which is a comprehensive enterprise document benchmark for agents.

**13:37** · We we think about it as the most comprehensive enterprise document benchmark. You know, it contains 2,000 human verified pages. It measures tables, charts, content faithfulness, semantic formatting, and it's optimized for just how AI agents are actually able to understand these documents instead of like syntactic correctness.

**13:55** · We've If you look at parsebench.ai, which is you know, kind of the it's a fully public page on the internet. It's also available on Hugging Face and Kaggle.

**14:04** · We benchmark probably like 50 different frontier models, open way models, specialized OCR solutions. And you really want the Pareto curve to kind of be towards the left and up in terms of accuracy, like extremely high accuracy, but also extremely low cost.

**14:20** · And there's just so many different types of documents where some are a little bit simpler. Maybe some are a little bit more complex. And ideally, you want to cover all the points on the curve to deal with the dynamic distribution of various types of documents out there.

**14:33** · It's pretty clear, even if you look at this graph, that it's like you can increase the complexity of the benchmark, and that document understanding is definitely not 100% solved. But, you know, you fundamentally need to kind of advance a lot of the core capabilities to make sure they're able to process, unlock the vast trove of enterprise contacts out there.

### 고정확도, 저비용, 초저지연의 3가지 처리 영역

**14:54** · There's kind of like a few different points on this accuracy cost latency Pareto curve. There's what I call like the high accuracy regime, where like you know, some institutions basically need like 99 to almost 100% accuracy. Because basically, the downside of an incorrect extraction is you completely mess up your financial model. You completely, you know, you basically get flagged for fraud or a bunch of other really, really bad things.

**15:16** · In regulated industries like insurance and financial services, we see this a decent amount. This typically means you're willing to pay a little bit more money per page for like deeper agentic reasoning. To at least make sure that you get back the the information in the right format.

**15:30** · There's also like the low-cost regime.

**15:32** · Let's say you're just trying to index, you know, the million plus documents uh per day within your that's, you know, being continually updated within your SharePoint just for like rag knowledge base search. You know, in these cases, you obviously want it to be not like terribly inaccurate, but even if it's a little bit messed up, it's okay, too, because in the end if you have a sufficiently good agent, it can always dive deeper into the document and surface the right information with the right citations and grounding.

**15:56** · So, for these, you know, being able to create some sort of scalable offline indexing pipeline that has the best like cost constraints um is something that is optimal.

**16:06** · One thing about VLN based approaches, though, is that, you know, they're typically not very fast. Um, and I think a lot of times if you have like real-time file uploads, let's say you're using Cloud Co-work, you upload a thousand documents and you need to process it within a minute uh a minute, like having a bunch of VLNs process that at scale is really tough for basically every single OCR service out there. Um, and and to be fair, that includes ours, too.

**16:28** · Um, I think in general, um there's also some sort of need for an extremely low latency solution so that you can actually process stuff in real time even if you have like deeper VLN enabled processing for kind of like deeper visual inspection and analysis.

### 에이전트 루프에 탑재되는 Rust 파서 LightParse

**16:44** · And so, that's what I call kind of being in the agent loop. So, besides Lava Parse, which is kind of our commercial service around like document processing and extraction, we also created this tool called Light Parse. Um, it is surprisingly really, really good.

**16:57** · Um, I don't know if you've been following some of the Twitter threads, but um it is Rust based. Um, it is the fastest open source parser out there. It is completely free, um and there's basically no strings attached. I think it's like MIT or Apache license. Um, and it basically is the most accurate like Markdown parser out there that doesn't use a VLN or any sort of kind of like deeper model.

**17:17** · And so this is kind of nice because you can use it as a default in the assistive agent loop. Let's say you're uploading a bunch of documents to Quad Code, Quad Co-work, Codex, and you want it to process like a thousand PDFs extremely quickly. You can always do that and then, you know, equip a VLM based parser like Llama Parser or other frontier models as a tool. So what these agents will do is they'll do like a fast pass over all the documents first kind of like just scan through all the contents extremely efficiently.

**17:48** · And then if actually needs to dive into a page with like tables, with like charts, and actually needs to more deeply understand the values, it'll use a VLM based tool, slower processing, to actually make sure it reads the information correctly.

**17:59** · This is available as a one-click installable skill, complements kind of any other deeper VLM based OCR tool you want to use.

**18:06** · And we kind of designed to make it as fast as possible and also easy to plug in to your favorite AI agent.

**18:15** · So I kind of speed ran through a bunch of this stuff, but basically, you know, we spent a bunch of time on the parsing layer. There's also other general components around like the semantic and storage layer in terms of document extraction and search, and of course like document workflows.

**18:31** · I think due to time I'll probably kind of just skip some of the unexplored areas like agent native document formats, hill climbing as a service, and others. But I'll share the full set of slides online.

### 출처 기반 정보 추출과 문서 검색의 미래

**18:41** · In terms of the semantic and storage layer, you know, besides document parsing, a lot of use cases also require actually getting back structured information at scale from documents. Whether you're processing, you know, a million invoices or expense reports or receipts or claims, you need to make sure that, you know, you want to actually get back structured outputs that you can put into a downstream database or system.

**19:02** · And so a lot of these use cases basically revolve around the form of, you know, how do you automate a lot of workflows that humans typically do in scanning a lot of paperwork and doing data entry. Whether it is kind of again invoices, claims, contracts, receipts, or others.

**19:18** · We kind of created these capabilities within Llama Parse as well.

**19:21** · A lot of our capabilities are actually tuned towards like low cost while extremely high accuracy. And you get back granular citations all the way back to the source document for every extracted output. And of course you can run this in a pipeline at scale with confidence scores and also you know being able to actually flag whether or not we're certain about a certain value before deciding to put it into some sort of system.

**19:46** · There's also document search which is a basically expanded tool set as I mentioned around retrieval, BM25, grep, vector search, reading and scrolling.

**19:55** · And so all these capabilities are available within some of our commercial platforms as well as open source offerings. But I also just wanted to paint a picture of the general concepts out there today.

**20:04** · So I'll skip this section about kind of what's next and then maybe just go all the way to the end. I know I'm a little bit over time. So really appreciate you all spending time today and then let me just how do I get to this part really quick? Oh right.

**20:19** · I'm going to skip this piece. I'll put put this online.

**20:22** · Our booth is at LG47 if you guys are interested in stopping by and we're hosting a giant pickleball tournament today. So thank you for your time.
