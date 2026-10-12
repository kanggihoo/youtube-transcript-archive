---
title: "Vercel CEO는 AI를 이렇게 씁니다 | 실제 개발 워크플로 공개"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=21do1LvDNFI"
domain: "youtube.com"
language: "en"
description: "Vercel CEO 기예르모 라우치가 실제로 AI 에이전트와 함께 일하는 방식을 살펴봅니다.리서치 폴더와 AGENTS.md, 새 프로젝트 시작, fx0의 앱 구조, 에이전트가 만든 결과를 이해하는 방법, 보안과 실행 환경까지 원본 인터뷰의 주요 구간을 한국어 번역 자막과 짧은 해설..."
word_count: 2844
---

![](https://www.youtube.com/watch?v=21do1LvDNFI)

Vercel CEO 기예르모 라우치가 실제로 AI 에이전트와 함께 일하는 방식을 살펴봅니다.리서치 폴더와 AGENTS.md, 새 프로젝트 시작, fx0의 앱 구조, 에이전트가 만든 결과를 이해하는 방법, 보안과 실행 환경까지 원본 인터뷰의 주요 구간을 한국어 번역 자막과 짧은 해설...

## Transcript

### AI 에이전트와 어떻게 일할까?

**0:15** · I'm Today I'm using effects, which is the coding CLI of Versel Labs.

**0:23** · One one of the design principles of this CLI is that it almost feels like a shell.

**0:29** · So, when I open a new tab and go see like or I open a split, like it boots into ZSH.

**0:36** · But one of the things that we obsessed about is like can this boot as fast as a shell itself?

**0:42** · So, it's a very tiny binary.

**0:46** · Install is 11 megabytes if you download it today, which I'm going to show you.

**0:51** · It's actually 6 megabytes. It's 11 megabytes on disk. And it's incredibly fast to start up. So, like the idea was like if if I started a shell within a shell, like can I make it like just as fast?

### 리서치 폴더와 새 프로젝트

**1:16** · I'm using effects for a range of things.

**1:18** · One is anytime I have a question about virtually anything, instead of going to like I actually it's replaced Google for me incidentally because instead of having to go to like this cloud thing, I can keep a lot of my sort of experimentation in in the file system. I can have the agent look at it.

**1:37** · I also, you know, and this I think it's also like a little bit of like the future of of software is becomes a lot more like English driven.

**1:44** · The fact that my agents.md file in this research folder sort of like creates the convention for if I ask the agent a question, reads up the instructions, and then dumps my research into this folder.

**1:57** · um and I can sort of basically improve it over time. Um the other thing that I've done is that um I have this alias, which is like literally one letter, r, which goes into this directory and launches it. Basically, there's not much to do here. It's like if I said like "Tell me more about tech podcasts."

**2:20** · Um there's basically nothing to do, right? Cuz like it's CDing into a folder and opening effects, but it still cuts down on all the latency. Like it gets addicting because anytime I have a question that I want to go deep into, like it just fire it off and then move on with my life.

**2:36** · Um the other alias that I created is p.

**2:41** · So, this is similar to what Toby does with try. I don't know if you've seen his CLI, Toby from Shopify.

**2:47** · Uh it's very common that I'll have an idea to create a new project. And so, anytime I have such an idea, I do the same thing, but it creates a project in my projects folder.

**2:58** · And then um yeah, I I can do anything here from like I will do a lot of experiments with like local Mac apps. I will create new Next.js applications. I will uh you know, create new Zig or Rust programs. I will I do a lot of benchmarking to help our teams.

**3:15** · Okay.

**3:16** · So, anytime we create a new piece of infrastructure, I try to validate it from first principles and like how an agent would approach it. A good example is when we announced drives, I had an agent go and try to like break it. Uh you know, try to find race conditions, try to measure latency, try to compare it with alternatives. Um I do a lot of what I call agentic inquiry, which is like I'll have an agent go and try out one of our technologies, and then I'll have it reflect on "Tell me what Vercel could have done better."

**3:48** · That's great.

**3:49** · for this experiment. And it's been it's been doing wonders for me. Um Tim Casina One of the ideas of effects is that you should be able to embed it, right? And one of the inspirations for live effects was when we created V0, we needed to build a harness from scratch.

### 에이전트 실행 구조를 앱 안에 넣기

**4:20** · If I were to create something like V0 today, or any kind of application like imagine like Gamma, which like has like built a slides, uh if I were to build something like Notion, or anything that requires sort of agentic intelligence to be embedded, I would want to pick a harness off the shelf.

**4:38** · And so, we created this um example that we're going to open source. I think you're going to be one of the first people to see it.

### fx0 결과 화면과 샌드박스 구조

**4:53** · So, what was really cool about building this demo of FX0 was, you know, back when we built V0 for the first time, I think the amount of time that we spent just on the harness was disproportion, like 90% of the engineering time went into, you know, like figuring out AISDK and the models and the prompts and the tool calls and all of this.

**5:15** · Whereas, this example is probably like I don't know, 100 lines of code on top of the create effects agent API. Um and so, right now So, I I was mentioning this is just like using the ability of the model to like output HTML.

**5:31** · Um but uh the second thing we we did was like, "Hey, using this mental model like brain and hands." I don't know if you if you've heard of it, but like the architecture that we recommend at Vercel is that you run the harness and then you give it tools. So, in this example, the tool that we're giving it is the Vercel sandbox. So, um this prompt said, "Build a landing page for a CLI coding agent."

**6:01** · It's I mean, it look kind of looks like the previous one that I showed you, but behind the scenes it's actually running a full Next.js application.

**6:08** · Previous was just HTML.

**6:10** · Just HTML. And then we gave it a third one, which is agent, and it creates an Eve agent when you give it a prompt. Now, what's really cool is what perhaps took us like a a couple of years of engineering with V0, like it's now part of the infrastructure that you can use off the shelf.

**6:29** · And we've had a lot of customers come to us saying, "Hey, like I would love to add like app generation capabilities within my system of record. Or I like what you're doing with V0, but I want to have one that's sort of like internal, like imagine sort of having your own quote-unquote software factory where one of the capabilities is design."

**6:49** · Mhm.

### 에이전트가 한 일을 이해하기

**7:01** · And so, the the the phrase that I've coined, I think I've coined this is agentic inquiry, which is I'm not advocating that you read every line of code, but when you do get something done, try to understand what just happened.

**7:14** · Yeah, I think this is the biggest nuance because people see such a binary, like either you're reading the code and it's like line by line, like what does this line do? Or you're just like fully yellowing and never looking at it. But what you said, I think that's like really the key. It's like if you if you know how to use the agent to understand this file or this module, like that's enough.

**7:32** · You don't need to like know all the function.

**7:34** · And by the way, I think nature will heal. I see a lot of great advocates of this on X. Um uh I've seen folks create skills that help them diagram their code.

**7:47** · This guy Dylan posted um, I think he created it Dylan Monroe. He He was showing like a call stack diagrammed so that I think the agent was sort of doing like pseudo static analysis and I think this is a skill or maybe a skill plus an AST grab style tool that was after it cooked, it gives you a sense of like the symbolic space of your program.

**8:13** · Oh, this method calls this method calls this method calls this method and like and this is like agents at their finest because to do that only with syntactic tools and and AST parsing, you would have to every time create a new program to visualize what you just did or have a very rigid tool. It's amazing that AI's can sort of like dive deep, call some tools and then give you back an understanding that's sort of like digested.

**8:41** · And it could be things like measuring latency. It could be things like uh, measuring allocations. It could be things like understanding the new API shape.

**8:53** · And so those are the things that like you definitely want to be kept in the loop about. And by the way, this in itself and this is the crazy thing about like AI like this in itself could be turned into like any genetic process where like I've seen folks set it up such that they call the Slack MCP anytime you do something, you could put this into your agent side of the world, right? Like anytime you do something that alters the let's call it like for an example, the public facing API shape of this program let me know. Ping me on Slack or Discord.

**9:22** · That and that alone is just I think better quote unquote agentic engineering than just do it, make no mistakes. Please auto merge and let's keep building a huge pile of slop.

**9:35** · So basically knowing what matters for that system.

**9:37** · Yeah.

**9:38** · And then building like automated software factories or like things, whatever, to use agents to help you.

### 빠르게 만들면서 보안 확인하기

**9:53** · You know, I think something that will backfire for a lot of people that are embracing, you know, extreme vibe coding is that if I'm an enterprise, I need you to build very strong conviction in the security profile of your product. In in that my data is going to be safe. And so, I actually think security and in some ways almost like communicating that you're doing the opposite of vibe coding can really play in your favor.

**10:23** · I've had this experience where I will have effects research something and I'll ask it, "Find me a bunch of projects that have already done this because I don't want to reinvent the wheel from first principles." One of my biggest challenges today in adopting new software, both personally and as per sale, is understanding the security that that I'm taking on.

**10:45** · Because, you know, supply chain attacks, because vibe coding, because, you know, just the surface of attack has become so massive as of recently. And so, I think again, there's areas of your code base, there's areas of your product where you want to do the opposite of like, you know, no questions asked. You actually want to be extremely diligent and communicate that to the world.

### 클라우드와 로컬 실행 환경

**11:19** · Let's talk about cloud agents. What do you think? Is it inevitable just like, you know, from on prem to cloud for the previous generation of cloud that agents will go from, you know, a laptop which even if you go with the high spec, you're going to hit a bottleneck, whether it's annoying, just agents popping up, you know, with windows or changing tabs, or just overheating or draining battery if you're in a coffee shop, you don't want to burn all your battery because agent decided to run 1,000 tests, right?

**11:43** · So like, do you think moving agents from like, okay, cloud code in your terminal or effects on a computer to a cloud is inevitable or how you think about this?

**11:54** · It's inevitable, it's already here, right? Even Deep Sage as an example, like it in order to scale itself in very large code bases, it's not tenable to run it on your own computer. So it uses sandboxes. Uh code bases get really large at scale. And uh you know, processing a bunch of branches and permutations of a program on your local computer, like I said, you run out of memory, you run out of CPU.

**12:20** · There are a lot of security concerns around the supply chain.

**12:24** · So if I'm running something on my own computer, my computer gets popped, you know, what what does what does the attacker get access to?

**12:33** · Password manager, everything.

**12:34** · Right? And so it's much easier to compartmentalize and contain the blast radius of a supply chain attack. Or even, I would even argue, you we might be able to completely make sup- I mean, that's it's a bold statement, but like, we could eradicate supply chain attacks uh if if we move more and more of this development life cycle to to sandboxes. Why? Because we can have more careful firewall and security policy monitoring the network.

**13:03** · Like what happens with the classic malware uh or RAT or remote access Trojan is it gets some stuff from your computer and it exfiltrates it to some kind of host name or S3 bucket or whatever.

**13:21** · I think keeping your development in a secure cloud environment allows you to like make much stronger assertions around the security of the network, doing scans, uh you know, containing the the damage if something does get popped. So, I think from a security perspective, cloud is infinitely better. It's very clear that agents are really good at attacking problems in parallel. For paralyzing, also better. Uh there you can scatter them across multiple sandboxes, they can share state, etc.

**13:56** · From an efficiency perspective, right?

**13:58** · Like they can do work while you're asleep, so \[laughter\] um when we're thinking about this world of like self-healing software and like an exception that happens and whatever, like there's just like what are we going to do? Like turn your computer back on because we started getting like uh a bunch of these errors or or you're under attack or whatever. So, that's the element of like, "Hey, it's already happening."

**14:22** · Now, what I do, maybe I'm contrarian on this, is that I do think that you still want to be able to pull things down into into a computer. I think that's a use case that's important. I think people again try to go into one extreme or the other. And I believe that um reality ends up being a lot more complicated than we expect, like sometimes you need to like look at things under the microscope.

**14:50** · This is also incidentally also why I like CLIs because I need to be as close to the metal as possible. I need to look at the file system, I need to run a process monitor. Um I want to see it interact with other applications that I've installed. I want to I want to see it on a Mac.

**15:06** · And and yes, like you can do all these things in the cloud in theory, but uh I do think that sometimes you just want the Yeah, all right, pull it into local, lowest latency as as I as as we can with regards to like me monitoring the system. Um and so, that option should stay open.

### 마무리

**15:24** · It's toggle switch.

**15:25** · It's toggle switch.

**15:27** · It's toggle switch.

**15:30** · It's toggle switch.

**15:33** · It's toggle switch.

**15:35** · It's toggle switch.
