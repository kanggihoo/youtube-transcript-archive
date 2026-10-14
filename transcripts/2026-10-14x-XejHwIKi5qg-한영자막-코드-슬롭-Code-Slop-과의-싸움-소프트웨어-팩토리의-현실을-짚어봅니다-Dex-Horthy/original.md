---
title: "[한영자막] 코드 슬롭(Code Slop)과의 싸움: 소프트웨어 팩토리의 현실을 짚어봅니다 - Dex Horthy"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=XejHwIKi5qg"
domain: "youtube.com"
language: "en"
description: "HumanLayer의 CEO이자 공동 창업자인 Dex Horthy가 AI 코딩 시대의 화두인 '소프트웨어 팩토리'의 현실과 코드 슬롭(Code Slop) 문제의 본질을 날카롭게 짚어봅니다.AI 모델이 아무리 발전해도 사람의 감독 없는 '무인 공장(Lights-off Factory)..."
word_count: 4174
---

![](https://www.youtube.com/watch?v=XejHwIKi5qg)

HumanLayer의 CEO이자 공동 창업자인 Dex Horthy가 AI 코딩 시대의 화두인 '소프트웨어 팩토리'의 현실과 코드 슬롭(Code Slop) 문제의 본질을 날카롭게 짚어봅니다.AI 모델이 아무리 발전해도 사람의 감독 없는 '무인 공장(Lights-off Factory)...

## Transcript

### 오프닝 및 소프트웨어 팩토리의 현주소

**0:00** · Hi everybody.

**0:01** · Morning.

**0:04** · Uh it's funny this actually uh this talk was going to have a much longer title, uh but then I found out it was 10 minutes and not 25, so uh yes, state of the software factory. What's going on?

**0:14** · What's happening? Uh raise your hand if you're writing 100% of your code with AI.

**0:20** · Okay, good. Some of you got the memo.

**0:21** · The rest of you, you know, you'll you'll get there. Leave your hand up if you're trying pretty hard to read all of that code. Maybe not every single line, but you're trying. Okay, good.

**0:31** · Um all right, my least favorite part.

**0:33** · Andrew did a good job. Uh I yap about coding agents on YouTube a lot. I think we have over like a million views, probably 1.5 now. Uh I'll post a link at the end. You don't have to screenshot this. I'll put it up for longer later, but we have a list of everything we've ever written or said about coding agents and agentic AI and 12-factor agents and context engineering and all that stuff. Uh I am the CEO and co-founder of a company called HumanLayer. We build a multi multi-agent coding sorry.

**0:57** · We build a multiplayer coding agent workspace. Uh and our goal is to help everyone be awesome at agentic coding and make it accessible to everybody. Uh we are building building blocks for software factory builders. Uh and we're really focused on an area that I think is underserved is uh hard problems in complex code bases. You have hundreds of engineers, you have hundreds of repos, a lot of out-of-the-box coding systems.

**1:18** · You have to do a lot of stuff to actually get them working in that environment. Um and I think like anyone can really build it's it's not trivial, but you can build a ticket to PR or Slack message to PR pipeline for the small stuff. Our our focus is really like how do we as engineers and teams collaborate meaningfully on the big stuff? Cuz we're all trying to get this AI coding thing working. Uh and there's a ton of hype and noise and FOMO on the internet that we have to cut through. There was this whole Loops thing last summer of like just build Loops, don't even prompt anymore.

### 무한 루프 환상과 현실의 데이터 (리뷰 품질 저하와 인시던트 증가)

**1:48** · Uh at the same time there was a report that came out in May that, you know, since uh January when we all picked up Opus 4.5 and decided this stuff was good enough.

**1:57** · Uh code review uh uh quality is way down. A lot of PRs just skipping review, longer comments, more comments. Uh incidents per PR is way up. Bugs per developers way up. Um a lot of people will say, "Do you think this is a skill issue?" Raise your hand if you think that's a skill issue.

**2:15** · Okay, we got a couple. Nice. Uh I say the data says otherwise, that data and more data.

**2:19** · Um I want to do We talk about software factory a lot. I want to do like a quick little history here.

**2:24** · Uh cuz software factory is not an AI thing. This has been around since 1968.

**2:27** · Uh the same the same year that we invented the word software engineering.

### 2022년 표준 소프트웨어 팩토리 구조

**2:31** · Um I'm going to zoom to 2022 just to show you that most of what you see about software factories and AI is actually kind of like the same thing we've been doing as engineers for decades.

**2:42** · Um so, your standard circa 2022 software factory.

**2:46** · You've got a team. You've got some engineers. You probably got some product managers. You have GMs or a CEO or someone who's kind of like driving the vision. And you come up with stuff to build and you put it in a tracker, whether it's Linear or Jira or Beads or whatever it is. Uh and then someone pulls things off the list and they go build the thing. And they maybe do some automated testing and unit tests and integration testing. They might pull it up in a browser or poke it with curl or whatever the manual testing steps are.

**3:11** · Make a pull request. And then we run this battery of checks, you know, the the the top-of-the-line software factory was doing, you know, hundreds of CI checks and security scans and all of this. Maybe a human pulls it down and tests it. Probably a human reviews the code before it goes in.

**3:24** · If anything is wrong, we loop it back to the builder. If it's ready to go, we send it to prod. We have some fancy rollouts and feature flags and canary systems to like safely get it out to all our users. At which point they use it and they do what users love to do. Uh they file feature requests. Uh they complain. They tell us what's broken.

**3:40** · And then that goes back to the team, back onto the queue.

**3:43** · Uh at a certain point we decide, "You know what would be great?

**3:46** · What if we had a monitoring system that could wake up our engineers at 3:00 in the morning when something breaks?"

**3:51** · Uh the getting woken up part sucks if the person, but technically it is nice to be able to fix your site cuz it's down at 3:00 in the morning.

**3:57** · Um, but this is our software factory.

**4:00** · Um, and then we get to the agentic software factory. Not much changes here.

### 에이전트가 도입된 소프트웨어 팩토리의 변화

**4:03** · We take this thing we had before.

**4:05** · Um, and then we do this hype cycle on it and everyone has one and yes, yeah, I know you did Who has a little ticket to PR agent in their company that they're super proud of?

**4:15** · Um, no. You should get one. They're cool. Everyone Everyone has one. You're falling behind.

**4:21** · Uh, no. Uh, Okay, so you you take this thing and you do The person building the thing becomes uh, agent builds the thing.

**4:28** · Um, so instead of a human going and doing the code, the agent does the thing. And this part now takes minutes or hours, but this part over here still takes hours or days.

**4:37** · Uh, and so we bring in more agentic stuff. We have, you know, agentic code review, agentic regression testing, and that makes the review part faster. You catch all the small stuff, uh, but it may still be the bottleneck.

**4:47** · Um, which brings us to uh, this funny idea called the lights-off software factory, uh, where we just say, "You know what?

### '무인 공장(Lights-off Factory)'의 환상과 한계

**4:54** · I don't I'm tired of reviewing code.

**4:56** · This too much. I'm burned out. Uh, all the senior engineers hate it. What if we just didn't review the code anymore?

**5:01** · What if we just let it go in?"

**5:03** · Uh, and like, theoretically, if you invest into all this other stuff, you could like, probably get uh, close to a place where where this would actually work.

**5:12** · Um, there's some challenges though. I think my core thesis here and like, I'll share some data on this, but like, unattended models will not improve or maintain your code base quality over time. And whenever seen like slop in a pull request that someone tried to merge, someone tried to get back? Yeah.

**5:27** · A lot of slop. Um, models got really, really good in 2026 at like solving problems and doing interesting things. I don't think they got very good at improving code base quality. You could tell them to go improve it, but then you have to know what to tell them to do and that means you have to understand the code base, which means it's not unattended. You're paying attention.

**5:43** · Um, there's at least one good benchmark that proves this, um, but you probably have this vibe and if you go catch this talk from June, I gave sort of a intuition-based explanation of like how we do RL and how how the benchmarks are shaped that might incentivize sort of cheating. Uh, just trying to get the test to pass without really like rewarding good architecture.

**6:04** · Um, because the cost of bad architecture is measured measured in months and years. And to do reinforcement learning, you need an oracle. You need a verifier.

### SlopCodeBench 벤치마크: 모델이 장기적 코드 품질을 떨어뜨리는 이유

**6:10** · You need something to say, is this code maintainable or not? And maintainability has no fast oracle. There's no way to know We don't find out that the code was ugly until 2 months later when someone again is paged at 3:00 in the morning trying to figure out how this made it into the codebase.

**6:23** · Um, which brings me to a really cool benchmark called Slop Code Bench, um, published out of a lab in the University of Wisconsin, uh, in the US. And, uh, they basically, instead of telling the model the whole problem to solve up front, it gives the model the challenges. It discloses like parts of the challenge in bits and makes it write the code and then do another feature and then do another feature.

**6:44** · Which maps much more closely to how everyone in this room builds software.

**6:47** · You don't design the whole thing up front, ship it, and never never touch it again. You're constantly iterating and evolving and adding things.

**6:53** · Uh, when they launched this, GPT-5.5 was the best model on the market. It got a 14.8%.

**6:59** · So, when you see terminal bench scores and everyone's getting 95% of it saying coding is solved, there is a small lab in the US came up with a at a university came up with a benchmark that is full very much unsaturated. Um, there's a post I can share that is, uh, a bunch of data you can go check it out.

**7:16** · Um, the labs actually admitted this. Um, uh, Anthropic did a postmortem. They're like, yeah, we had a security issue, uh, cuz we had a bunch of like messy code that accumulated over time. To which the benchmark creator, of course, pointed out that there was a benchmark that would prove that models create sloppy code over time. Uh, and even Astra and Fable, you know, we in I remember in the Opus 4 days, uh, or maybe even Sonnet 3.5, you would write the code and it would be a little sloppy and you would say, "You know what? The code is slop, but that'll be GPT-7's problem."

### 최신 모델들의 슬롭 코드 생성 실태 (Anthropic 회고 사례)

**7:48** · Folks, we're at GPT-6, and I don't think we've gotten that much better at this.

**7:52** · I think there's a lot of reports that like they're getting better at random things like video game slop and and computer use and like blender demos or whatever, but that the coding workflows there's like we're people are online begging like please someone produce RL tasks about abstraction and centralization cuz these models still can't do it.

**8:12** · Does anyone remember this guy?

### 스티브 예지(Steve Yegge)마저 입장을 바꾼 이유

**8:15** · Steve, what did what is Steve famous for?

**8:18** · Gas Town, which apparently is only good for building other Gas Towns.

**8:23** · But only did he build Gas Town, he went around the internet telling people for a year that if you're still trying to read the code, you are going to fall behind. You're not going to make it.

**8:33** · And here he is in last week.

**8:36** · Yeah, if you don't pay attention to the models, they're going to write slop code. They're going to build something so complex that they themselves can't debug it. So even Steve's come around.

**8:43** · And here's the numbers by the way on Astra and Sol X I. Astra is one percentage point or 1.5% percentage points higher than GPT-5.5. So we are getting better at writing maintainable code or being able to maintain the code we wrote, but not as fast as some people would have you have you believe.

**9:01** · So if unattended model code gets worse over time, then for now we should probably read the code, which leads us to what I like to call well, they told me I couldn't call this, but 12 factor factories.

**9:12** · I will come up with a better title than that.

**9:16** · We have 12-ish great practices for software factories.

**9:19** · Number one is plan before you build. 20 minutes 30 minutes up front can save you hours during review.

**9:24** · So we take our software factory. This is a team this is a thing teams figured out before AI. It's if it takes hours or days to build something, and if it takes hours or days to review something, then we better get together as a team and talk about it before we start building and talk about the architecture and do what's some kind of sprint planning or refinement or whatever it is. Talk to people on the team and figure it out in the hopes in the hopes that we can carve off some time at review time, reduce the chance we have to rework all this stuff.

### 12-팩터 팩토리: 개발 전 사전 계획(Pre-implementation Loop)

**9:55** · Um, don't over plan though. You can easily put too much time planning. I think of this is like if you YOLO a two-sentence prompt, there's probably a 50% chance you're going to be doing more prompting later. You're going to have to like rework some stuff. If you handwrite a detailed spec for 10 for 5 hours, maybe there's only a 10% chance that you have to You just do a little bit of polish at the end.

**10:14** · Uh, or you can go write all the code by hand for 20 hours. Uh, and then there's a 0% chance Well, there's a 0% chance you have to rework it because of something the agent did.

**10:22** · Uh, you might still have to fix stuff.

**10:24** · Uh, this is why we had code review before.

**10:26** · Uh, I think of this in terms of expected pain, right? How how likely will you have to change something and how painful is that change? I'm not arguing with a with with my coding agent in the uh the middle of building. Uh, sorry, in the middle of planning.

**10:38** · Uh, about what color the button's going to be cuz I know I can go change that later. That's not going to be hard. As you got to find your way up and down this curve depending on the task and depending on the code base and depending on the problem you're trying to solve.

**10:48** · But planning is about eliminating expected pain.

**10:52** · Um, you should align visually. Um, we published a skill called show me. Uh, there's a bunch of examples of like this is built into human layer but you can go get the open source as well.

### 관측 가능성과 시각적 검증 (Show me 스킬)

**11:00** · Uh, find ways to let the model give you information in a way that doesn't make you have to read like walls and walls of like agentic paragraphs and prose. Uh, talk about how you're going to break down your stack PR's and what how what order you're going to make the changes in.

**11:13** · Uh, this is open source you can go get it today. It's probably up to like 20K installs at this point.

**11:17** · Um, help agents test their work. This one's easy. Give them a browser, let them run the app, let them use curl, let them record videos, whatever it is. Like give them back pressure.

**11:25** · Um, if you are Anyone here writing in TypeScript?

### 타입스크립트 코드베이스를 위한 안티 슬롭 규칙

**11:28** · Yeah, okay, cool. Uh, go get this repo right now. This is Dylan Mulroy. There's about a hundred anti-slop rules. He literally just like went through and cataloged every anti-pattern that agents put in the TypeScript code base and built excellent rules for them.

**11:42** · Um, there's also a bunch of stuff in the Slop Code Bench paper that you can steal.

**11:45** · Um, you should feed user feedback into the factory instead of like reading support tickets and then turning them into Jira tickets. You should just uh read the support ticket and the PR that the agent made for you. For incidents, when you get paged at 3:00 in the morning, like have have the pager alert come with the PR the agent thinks will fix it. Even if you can only merge 50% of those, that's a huge difference in your throughput and you know, you wake up, you merge the PR, you go back to bed.

### 피드백 루프: 순방향 압력과 역방향 피드백의 결합

**12:08** · Um, let models experiment. Uh, give them feature flagging tooling so that they can experiment and say, "Hey, here's three versions of this feature." Uh, models, of course, are not good at UI.

**12:17** · They I mean, they can make beautiful UIs, but they can't really see them in the way that you and I see them. But if you want to test UIs, give three UIs to all of your users and figure out which one people can figure out. This is how you give people back your models back pressure for UI.

**12:30** · Um, I think loops are basically a combination of forward pressure and back pressure. This idea of loops was a little mystical. I think if you disentangle it into like, how do you kick off new work? What triggers cause new work to happen? And then, how do you give the agent like feedback while it's working so it can hill climb an outcome without having to go to a human? That's like the core of loops, I think. It's how do you get more stuff to start, whether it's schedules or automations or webhooks. Uh, and then you should compound over time. I think it's only nine. It's not even close to 12.

**12:56** · But anyways, compound over time, learn from past sessions, go read what your engineer go analyze the sessions of your team, figure out what they're struggling with, figure out how to get that into your skills or your memory or whatever it is.

### 차세대 소프트웨어 포지와 SDLC 4개 레이어

**13:09** · Um, I think this has some interesting implications for tooling. I think the new software forge, you know, has anyone has anyone remember the days when we used to send get patches around on like email lists?

**13:19** · I think I think Linus still does this to build the Linux kernel, uh, but almost everybody now uses GitHub. Uh, Uh and so we have a centralized the protocol is is decentralized, but we have a centralized place to do this. Um and now there's other parts of the SDLC that I think are first class. So, you have session traces, you have architecture docs, the the AI native version of this Git mailing list thing is like I'm talking to my agent and I copy something out and I paste it into Slack or Teams. My my teammate reads it, they paste it into their agent, they get an answer, they paste it back to me. I paste that into my agent. Hopefully, we only have to do one round of that.

**13:50** · Uh but this is the idea of like we need a place where our sessions and plans and prompts and all this stuff kind of lives in in a centralized sort of system of record.

**14:01** · This is kind of my vision. I think this ends up I'm going to speed up a little bit, but uh I know. I know. It's already really fast. Uh well, like I said, I'll link a bunch of resources. We go deeper on this in some There's like an hour-long deep dive on just this slide. Angie says, "Take my time."

**14:17** · Uh Um so, you have the compute layer, which you can buy or build. Um where, you know, you can Oh, we have some spare pods in our Kubernetes cluster.

### HumanLayer: 코딩 에이전트를 위한 협업 워크스페이스

**14:27** · And uh and and we're just going to run agents there or you can go buy Daytona or E2B or whatever it is. Um you have your dev environment. How do you get your language set up? Your runtime? Your preview environments? Do I need to connect to internal services in our VPC in order to even run a dev environment so an agent can test its work? You have, of course, the harness, which you can buy or build. There's a ton of options here.

**14:47** · Um and then there's a control plane uh where you like, "How do I dispatch work?

**14:50** · How do I collaborate on sessions and plans?" Each of these layers you can buy or build. Um human layer, we're kind of working very closely in this control plane. We're going to open source We also have a custom harness that we really like. We're going to open source it in the next couple weeks.

**15:02** · Um Uh basically, human layer is a shared collaborative workspace. I can see everything my team is working on. I can jump into a teammate session. I can invite people to co-prompt my session.

**15:12** · Not even in the cloud, like it can be running on my laptop and I can pull somebody into my cloud code session.

**15:16** · It's got sort of a Google Docs Notion-shaped uh artifact collaboration built into the session view.

**15:22** · Uh and then every agent running anywhere as it's writing code the diffs are streaming to the cloud. So we can do code review uh without waiting for pull request. And it's been architected like this. We've been building this for a year basically mostly in secret uh so that we can do these really interesting building blocks stuff. This cool architecture again come find me in the hallway. I'll I'll I we can go deeper on this. Um come say hi. I'm Dex.

**15:44** · Uh there is a list humanlayer.dev/resources for everything that's kind of chronological and broken into eras of like hey we learned a new thing and we kind of like revised our thinking on some stuff. Um so thank you. If you want to meet this week shoot me an email. Uh go check out the resources. Thank you all so much for your energy.

**16:05** · \[applause\]
