---
title: "[한글자막] 세계 최고 AI 엔지니어 카파시가 실제로 AI를 쓰는 법"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=lcp0_GnT54o"
domain: "youtube.com"
language: "en"
description: "OpenAI 공동 창업자이자 '바이브 코딩'이라는 말을 만든 안드레이 카파시는 AI를 실제로 어떻게 쓸까요? 크리에이터 닉 사라예프(Nick Saraev)가 지난 2주 동안 카파시의 글과 댓글에서 확인한 AI 활용 방식을 정리한 영상을 한국어 자막으로 소개합니다.▶ 핵심 내용- C..."
word_count: 1304
---

![](https://www.youtube.com/watch?v=lcp0_GnT54o)

OpenAI 공동 창업자이자 '바이브 코딩'이라는 말을 만든 안드레이 카파시는 AI를 실제로 어떻게 쓸까요? 크리에이터 닉 사라예프(Nick Saraev)가 지난 2주 동안 카파시의 글과 댓글에서 확인한 AI 활용 방식을 정리한 영상을 한국어 자막으로 소개합니다.▶ 핵심 내용- C...

## Transcript

### 소개

### 카파시는 AI를 어떻게 쓸까

**0:24** · Andrej Karpathy, also referred to colloquially as Uncle Andrej by me, is one of the world's foremost engineers.

**0:31** · He co-founded OpenAI, then ran AI at Tesla, then invented the term vibe coding, and now he works at Anthropic.

**0:38** · So, when Uncle Andrej talks about how he uses AI agents, I for one listen. And here is exactly what I've heard him doing over the course of the last 2 weeks. First, he uses Claude Code, the Mac desktop app, with Opus 5.5 exclusively on medium effort as his default. He does not use max effort. He doesn't touch any code whatsoever and basically has a long-standing rule where he doesn't read the code, he doesn't write it, and he also doesn't run terminal commands. He only talks to Claude, and he lets Claude do all that stuff behind the scenes.

### 기본 설정과 코드 안 보기 원칙

**1:07** · Then he makes models explain things to him in ASD-STE100.

### 쉬운 영어와 짧은 프롬프트

**1:13** · This is sort of the aircraft repair manual English that drops the vast majority of like unnecessary words. The vocabulary is very, very strict. His prompts nowadays are getting really short and really dumb. He says that adding requirements into the prompt can often make the model do worse work since us puny humans don't really understand, but a lot of our requests actually are inverse or opposites of other requests we make earlier on in the prompt. To beef up his security on one of his recent projects, he literally just texted, "Check recent cyber stuff," and then Claude sent out a few sub agents to do it and then beef up his projects.

**1:47** · Another example is when he was asked how he deployed a project, he just said, "I gave Claude the server IP address and then said the words update, deploy, secure, harden, and optimize," and then away it went. Because you can like digest an image a lot faster than you can necessarily read.

### 긴 설명보다 그림 한 장

**2:03** · Andre will ask for a diagram or maybe HTML pages or even like custom explainer videos if he doesn't understand something. The idea here is a picture is worth a thousand words. So why read a thousand words if Opus 5.5 or an equivalent model can make the picture in less time that it would take to to read a thousand words. He also really doesn't trust public benchmarks. He made a Hacker News comment just a few days ago actually where he pointed people to Epoch's ECI instead. For those of you guys that don't know, Epoch's ECI is basically a benchmark of benchmarks.

### 공개 벤치마크를 믿지 않는 이유

**2:31** · And they went through and then rigorously analyzed every benchmark, how models scored, and ultimately whether or not they're worth paying attention to.

**2:40** · I don't know if you guys could tell here, but a lot of these benchmarks are supposedly flawed. So presumably he believes models are intelligent based off how they interact and communicate with them more more so than any weird kind of benchmark. Speaking of, he runs lots of weird tests with models. One time he asked a model a simple question, "Land or water?" And then gave it a coordinate, latitude and longitude. And then he took all of the answers, whether it was land or water, and then if it was like land, I believe he made it black, and then if it was water, he made it white. And then he used that to actually create an entire world map.

### 카파시의 독특한 모델 실험

**3:10** · He used this to demonstrate that most of the world's knowledge is now compressed in the neurons of these models like Opus 5.5.

**3:20** · And he is not scared of doing these sorts of tests to either reinforce or you know, reject whatever benchmark say. Uncle Andre will build fixes the moment something annoys him. So for example, he was on YouTube a few days ago and he saw presumably a lot of Nick Szabo thumbnails and he said, "Boy, what slop." So he decided to make a new type of YouTube called Hacker Tube, which basically just scraped the best news from Hacker News.

### 거슬리면 직접 만든다: HackerTube

**3:45** · Turned that into like an archive of high-quality long-standing high-quality content. And then you know, basically created his own YouTube with that. He just put that up online. If he has like data projects, he uses Claude to create filters that you know, filter out things like URLs or regexes or spam. And then he takes whatever's left, even if it's not super nicely formatted, sends it to Sonnet primarily using Claude code workflows, uh and then that way it runs on his subscription box while also being orchestrated by a cheaper model.

### 싼 필터 뒤 Sonnet 서브에이전트

**4:12** · And to that end, he very much likes this sort of delegation structure where you have Opus 5.5 maybe on medium effort delegating to a bunch of Sonnet subagents. Unk is very much beyond like sharing, you know, app code because he thinks that it's just an abstraction.

### 앱 대신 데이터를 공유한다

**4:29** · So, you know, when people want, let's say, something that he built, he doesn't actually share the app. What he does is he'll just share the data source, and then the prompt. And the idea is, well, you can just customize your own now with Claude, so just go and do it. That way you'll have basically your own customized build, and then I don't actually have to share the app with you.

**4:45** · And I think this points to a deeper understanding that most specific implementations are just sort of wrappers around a core truth, which is the data. And so, if you have a model that is capable of whipping up any interface or any app around the data, well, it's basically the same thing if not better. He's also very polite to Claude. Um when he built his recent project that he shared called Hacker Tube, he legitimately said, "Hi Claude, good morning. How are you? I'm great, thanks. Build me a YouTube-style site, but restricted to videos that have been repeatedly recommended on Hacker News over the years.

### Claude에게도 예의 바르게

**5:15** · Please don't make any mistakes." So, I don't know how empirical the don't make any mistakes sign is, but suffice to say, I think we should all probably be polite to Claude.

**5:26** · I mean, this thing is going to be building God knows how many eons of infrastructure for us, and Unk appears to believe that as well.
