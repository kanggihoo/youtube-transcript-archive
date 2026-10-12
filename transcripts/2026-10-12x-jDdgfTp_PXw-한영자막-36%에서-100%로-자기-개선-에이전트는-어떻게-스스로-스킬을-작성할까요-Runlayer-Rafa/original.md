---
title: "[한영자막] 36%에서 100%로: 자기 개선 에이전트는 어떻게 스스로 스킬을 작성할까요? — Runlayer Rafal Wilinski"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=jDdgfTp_PXw"
domain: "youtube.com"
language: "en"
description: "AI 에이전트가 문제를 해결한 경험을 스킬로 저장하고, MCP로 회사 전체에 공유하는 방법을 살펴봅니다.Runlayer의 Rafal Wilinski가 자기 개선 에이전트와 조직의 학습 순환, 성공률 36%에서 100%로 개선된 테스트 사례를 소개합니다.주요 포인트• 에이전트가 오래..."
word_count: 3259
---

![](https://www.youtube.com/watch?v=jDdgfTp_PXw)

AI 에이전트가 문제를 해결한 경험을 스킬로 저장하고, MCP로 회사 전체에 공유하는 방법을 살펴봅니다.Runlayer의 Rafal Wilinski가 자기 개선 에이전트와 조직의 학습 순환, 성공률 36%에서 100%로 개선된 테스트 사례를 소개합니다.주요 포인트• 에이전트가 오래...

## Transcript

### 스스로 발전하는 회사

**0:00** · Today I want to talk about self-improving agents but not in a single player mode where just one agent gets smarter. I want to talk about how we can apply that concept and mix it with network effects to get a self-improving company or maybe even an enterprise that self-improves while you sleep.

### 문제 해결 경험을 실행 지침으로

**0:21** · Um imagine the best engineer you ever worked with or a salesperson or a lawyer. um the one that every time they cracked a genuinely hard problem, they wrote down exactly how they did that and handed over the playbook to the team. So whenever they faced a similar problem, they don't have to figure it out from the scratch, right? And imagine that happening for every hard problem across your whole company and that happening automatically uh each time. That's a dream, right? But it almost never works that way.

**0:54** · Um even when you crack a really hard problem um often times the knowledge um all that debugging um all the all the reasoning behind that is just gone. Oh sorry um all that uh all that reasoning is just gone when you move on to the next the next task or close the session. But I wanted to convince you that this is actually possible and we already have all the primitives in place to make it happen.

### 발표자와 Runlayer

**1:23** · If it sounds interesting, let me try to introduce myself once again. Hi, I'm Rafal. I'm a founding engineer at Rumlayer. We are making the golden path for AI at your company. Before that, I was leading Zapier agents and different AI teams. But generally speaking, my previous work was about making agents not just flashy demos, but reliable things in production.

**1:46** · Um before we go into interesting parts, I want to break down my topic into three separate pieces and start by just improving agents. There are many ways to do that. We can use better models. We can use better prompting tools, harnesses and whatnot. But I want to focus today only just on skills because they are super accessible, right? At least in theory. um to make sure that we are all on the same page.

### 스킬과 점진적 공개

**2:08** · A skill to me is a playbook that essentially agent can read um when it thinks that the knowledge is relevant from the technical perspective that the term is called progressive disclosure and it means that at the very beginning the harness or a client sees just a summary of the skill or a short description of the skill. But when it thinks that the knowledge inside the skill can be useful, it can read the whole of the skill, inject it to the main context and based on that knowledge, it can change the trajectory of the agent. Why is this so important?

### 에이전트의 작업 시간이 길어지다

**2:43** · Well, if you haven't been living under a rock for the past 6 or 12 months, your workflow probably has changed a lot. Uh, and that's because the agents got so much better. Actually, the models got so much better. And and it's not just vibes, it's measurable. Um here you can see a chart that probably you have seen too many times already. For those who don't know, it's meter benchmark. It measures for how long agents can work independently while still having a decent chance of completing a task. And the word chance is essential here.

**3:13** · Um we are going to go back to in a moment, but the trend is clear. The frontier capabilities, the frontier intelligence is getting better and better. They are better at multi-step deep work. There's only one caveat if that frontier intelligence is not being taken from you. And I'm fable probably just like you.

**3:36** · But there is a catch. With great power or long task horizon comes great responsibility. If an agent can reason for much longer, it also means that it can dig a really really uh deep rabbit hole. um it can spend hundreds of tool calls trying to defend a wrong thesis reason for hours and the next agent can do exactly the same thing or maybe even do something wrong worse.

### 잘못된 방향으로 깊어지는 추론

**3:59** · Um so the initial trajectory matters a lot and that's why skills are so important because they guide the agent towards the right target otherwise you'll waste time, you'll waste tokens and most importantly you'll also waste money.

### 다시 알아내고 싶지 않은 지식

**4:17** · Um, valuable skills are the rituals that nobody wants rediscovered. That knowledge is often not glamorous. It's probably deeply embedded within your company. And if agents would try to rediscover that knowledge from scratch, like for instance, the sequence of scripts and feature flags in order to make a nice roll back or what's the exact wording and language to use when dealing with that pesky uh enterprise customer that's about to churn. Um, yeah, if agents would try to figure out that from scratch, they are likely going to fail.

**4:48** · And often times that failure can be really costly. That's why I believe so many AIPS PC's are failing because you're not giving agents the relevant context and the playbooks how to act within your company.

**5:03** · So SKS are great, but I feel like they are not problem free. Um there are three most important problems and the first one is that they are local first and defcentric. What I mean by that is that um when you look at the skills ecosystem, you're going to find uh markdown files, JSON files, CLI commands, git repositories, and if you're a developer, that's great.

### 스킬의 세 가지 문제

**5:25** · But if you're um adop uh VP of AI or AI adoption lead, you need to think more empathetically about how you can roll out the AI strategy across your whole company, which includes nontechnical people, right? And the challenge here is how nontechnical people can actually create and share uh the skills.

### 스킬 설치의 위험

**5:49** · Uh I love this meme. Um this is the junior developer or nontechnical person discovering command npx skills which is the most important the most popular command to install them. That's the only command I know that installs just uh not just a skill but also free prompt injections. um a wild script that requires root permissions and someone else's API key all in one run. Trust me at run layer we are scanning thousands of skills every day and there is really weird stuff inside.

**6:21** · Okay, second problem is that I think we all like we all love the situation where we are facing a hard problem and there's already pray on how to deal with that situation, right? But often times there's there's no playbook, right?

**6:34** · Because it time it takes time and effort and intention and energy to reflect on a problem and leave something useful for posterity behind.

**6:44** · And the third problem is that not every LLM client support skills, right? If you're in cloud ecosystem, it's probably great. If you're a developer, you're probably going to manage even if the skills support is weird depending on which client you're using. Um, and once again, if you think about marketing, HR, legal, finance, those departments are probably still using chat GPT or some other weird LM client and skills might be not supported there.

### 스킬과 MCP

**7:13** · And some time ago there was this big heated debate when the skills were introduced. Um some people proclaimed that thank god MCP is finally dead because I'm not interested in dealing with oath. I can now hardcode a bunch of CLI commands um hardcode my API key inside markdown file and call it a progress right um but I think everyone missed the point. Skills can be delivering um the knowledge how to do something and tools gives us capabilities. tools from MCPS give us capability to do those things.

### MCP로 스킬 배포하기

**7:41** · But MCP can be also used as a protocol to deliver the knowledge to deliver the skills. We can use MCP as the distribution layer.

**7:54** · So instead of installing skills locally, you can create a remote MCP server which can become the source of truth across your whole company. Clients can connect to that. They can they can search for the right skills. uh server can enforce the policy and make sure that everyone gets the best version of the skill possible depending on a query and for instance the role that they have assigned. We've been doing that internally at run layer for the past 6 months and it's been working quite well.

**8:21** · Um but it's no longer just an internal thing. We see that the broader MCP ecosystem is also going that direction.

### Skills over MCP 워킹 그룹

**8:28** · Um there's already a working group called skills over MCP and while the exact API is not final direction is clear MCP can be used to deliver the skills to deliver the knowledge across your whole company.

**8:43** · Um yeah and while the official spec is leaning towards MCP resources the support for resources is also mixed. So we are going with tools. Um and yeah if you remember the problem the first problem I mentioned and the third problem I mentioned which is um the problem that they are deathcentric and the lack of uh support for clients. MCP as a distribution layer fixes that because it's unified in and works in almost every single client not just developer clients.

**9:13** · So the problem of devel of distributing skills to nontechnical people is essentially solved right plus you have now a centralized API. So as a VP of AI or like AI adoption, you you have one place to govern and manage what's the knowledge that's getting shared and distributed across your company.

**9:33** · Okay. So now we know how we can improve agents because we have um skills. We know that we can use MCP to distribute those skills across all the clients and agents. But let's talk about something more interesting which is how agents can improve themselves. And whenever I uh see a new paper or a framework speaking about this topic, I always go back to um Voyager paper. Unfortunately, you cannot see the video, but it's Minecraft gameplay in in background.

### 자기 개선 에이전트

### Voyager의 스킬 라이브러리

**9:59** · So, in in 2023, right after GPT4 was released, so ages ago, the question was for how long multiple agents or harnesses can explore Minecraft space, right? Um they dropped the agent into Minecraft with no instructions. they set its own goals. It just just kept getting better without even touching the weights or or model and the prompts. And in 2023, I think it was pretty groundbreaking. How did they pull it off? Um, the key thing to notice here is the skill library.

**10:33** · So, Voyager did not just explore the Minecraft space care carefully and throw the trace away.

**10:41** · when the agent figured out something um it saved the recipe as a code that uh that consisted of the tool calls that lead it that lead the agent to the discovery. So later on when the agent decided that hey I need to create a a crafting table or a diamond pickaxe. It didn't have to figure it out this whole knowledge from scratch. It could simply go to the skill uh library and retrieve it as a code as a recipe um that can be reused. And this is really important.

**11:11** · This is the core idea that I want to carry forward is that um exploration should be turned into reusable procedural knowledge and we started doing something very similar at run layer um we let the agents do the real work and when the run succeeds and when there is something interesting in this run there's multiple tool calls um we just take that trace and we ask frontier LLM to simply distill a skill Right.

### 실행 기록에서 스킬 추출

**11:41** · And while it's super simple to distill a skill from a single run, um I think we humans and agents learn the most from mistakes, right? The real sharpening happens when the agent fails. Um so a roundout goes sideways is actually the richest signal that you can get because it exposes the missing guardrail, the missing library, some kind of edge case that you haven't thought about up front.

### 실패에서 더 많이 배우다

**12:07** · Um and every run or or pass or fail just feeds our distiller mechanism constantly making our skill better. Um the successes are making the skill more trustworthy because if the agent achieved the goal it means that hey this skill works and if it doesn't it actually makes skilled more robust because now we know what's missing in here and it all happens completely autonomously asynchronously without human in loop and the initial results were great uh we

### 성공률 36%에서 100%로

**12:38** · had uh this task of trying to run some chromium fork inside AWS Lambda and we were trying to do that using sonet 4.6.

**12:47** · So not the most intelligent model but sometimes it succeeded. Um but it was just you know it's not production ready to have 36% success rate. Um so what we did is we flipped the flag for self-improving agents. Um and once in one run the one of the agent invocations cracked the code our skill distiller create a reusable skill. It was uh then included in all the future runs and the success ratio went to 100%. So yeah, that's great. It's like a developer with better attitude towards documentation.

**13:22** · Um and the success rate is the easiest number to show. But good skill is narrowing the search space. It makes the agent uh it narrows the search space and agents starts doing uh stops doing tool calls and it's exploring less branches.

**13:39** · it's wast wasting less tokens and and less money.

**13:45** · But putting savings and accuracy aside, I think there's also a deeper reason why you should be distilling skills. Um the problem is that frontier intelligence is rented or borrowed. It can disappear. I think yeah, we all miss Fable. It was a great model, right? It can deprecate it or it can get dumber. Like we complain every single day on Twitter, on Slack that Opus is really dumb today, right?

### 빌려 쓰는 최첨단 지능

**14:10** · So while we have the access to the best version of that intelligence, we should be using that to discover and persist those useful procedures. We should be building a catalog of how the works gets done inside our company as a collective subconscious.

**14:28** · And how we do it? Well, I believe we already have all the pieces of the puzzle here. Um, we have skills as a way to retain procedures and improve agents and guide models. We have MCP as a unified distribution layer for those skills. And you also have a central repository, the knowledge base for all of those skills, which is constantly being updated and fed with new data. Um, yeah, we also have the continuous learning flywheel for one agent.

**14:56** · But what's interesting is what I promised you at the very beginning, the network effect. Um, so what happens when you multiply that by every agent and every single client in the entire company?

### 조직의 학습 순환

**15:11** · At run later, we called it self-improving organizational flywheel.

**15:15** · Um, we group a bunch of similar runs and try to distill a skill. It passes through our various series of checks like whether it's not containing some kind of prompt injection or maybe PII um and bunch of other stuff. Once it's good, it's landing in our skill library and thanks to our MCB gateway, it's being served to each and every client and agent within the company. What we end up having is a constantly evolving knowledge base which is always up to date, continuously updated with new alpha fed with new age edge cases.

**15:44** · So once one agent figure outs a really hard problem, it's getting distilled into a skill persistent in all or organizational library library. So whenever someone else um has the same problem in the future, they don't have to figure out the solution from scratch. They don't have to know uh what's the exact sequence of this magical commands that are going to restart the database or roll back the production. They can simply um reach out to the playbook.

**16:17** · they have.

**16:19** · And why is this so important? Because I believe like 50% of us probably already had an existential crisis thanks to the models. And the thinking goes along the lines of uh okay so models are becoming commodity. Everyone here has access to them. Um cost of software is going to zero. Everyone is can be rebuilding my product. Um at least on the surface.

### 복제할 수 없는 경쟁 우위

**16:42** · In fact, so many people are walking today across the expo and they are thinking, hey, everyone's building the same thing, right? So, what is my moat? Um, and I believe the mode can be in building this flywheel and distilling the knowledge through this flywheel because it's like your own hard one lessons distilled

**17:06** · governed of how your company uh does things you know and it's captured compounding raising the floor for everyone across the company giving them access to the best knowledge available.

**17:19** · Um, it is also a way to be resistant against model intelligence deprecation and it's a great way to lowers your costs without ever changing a model. So yeah, that's probably one thing that competitor can't copy your internal culture and your identity.
