---
title: "[한영자막] 에이전트 프레임워크는 해롭다고 봅니다 — Rémi Louf"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=Nt2aeDlzk4U"
domain: "youtube.com"
language: "en"
description: "에이전트 프레임워크를 무작정 늘리기보다, 실제로 작동하는 작은 런타임을 먼저 만드는 방법을 Rémi Louf의 발표로 살펴봅니다.프롬프트를 해시 기반으로 관리하고, Cron 대신 이벤트로 에이전트를 연결하며, 로그·큐·타입 경계를 통해 운영 가능한 시스템을 만드는 실전 이야기입니다..."
word_count: 4201
---

![](https://www.youtube.com/watch?v=Nt2aeDlzk4U)

에이전트 프레임워크를 무작정 늘리기보다, 실제로 작동하는 작은 런타임을 먼저 만드는 방법을 Rémi Louf의 발표로 살펴봅니다.프롬프트를 해시 기반으로 관리하고, Cron 대신 이벤트로 에이전트를 연결하며, 로그·큐·타입 경계를 통해 운영 가능한 시스템을 만드는 실전 이야기입니다...

## Transcript

### 에이전트로 할 수 있는 일을 알아보기 위해 비운 2주

**0:00** · Hi everyone. So, originally, I thought I was going to give a very technical talk, but I saw I was in the leadership track, which I'm not sure what it means, but I was like, "Okay, I'm going to do half high-level and half technical."

**0:13** · So, it's more a story about what I, you know, what I did in January because in around December, um agents kind of became really good. Uh you know, there was a step function, something happened.

**0:26** · Uh I think it was Opus 4.6.

**0:28** · And that's when I realized, and I work in the AI world, I was like, "Okay, this thing is really happening." And so, I took 2 weeks out. I took 2 weeks away.

**0:36** · So, I'm the CEO of dot text, uh you know, which is 15 people company. I just told my CTO, I was like, "Okay, I'm just going to go away for 2 weeks, and I'm just going to dive in this thing and try to understand what we can get out of it and how good it is." And so, the story is, you know, it is a story of me scratching my own itch for 2 weeks and trying to figure out how we can use actually use agents and what are good primitives to build agents and whether, you know, it already exist.

**1:04** · Um this was a really clickbait title, but actually, it turns out to be a good title even for this talk.

**1:12** · Um so, what you can see here on the left of castle is my office. Uh that's true. I do rent an office in a castle. And the small thing with an arrow uh that you can see is like this robot mower, which kind of works unattended all day, every day. Uh it just does its stuff in the background without anyone having to use a remote control or think about it or anything. And I kind of wanted the same thing for my morning because my mornings are always the same thing.

**1:43** · The first couple hours, it's browse market news, review of like linear, could be Jira, my CRM. And also, I like to walk for an hour about an hour in the morning, and then the next hour is spent trying to process the really long voice note that, you know, was recorded while walking.

### 원했던 아침과 로봇 잔디깎이

**2:02** · And you know, all I wanted was my morning briefing with my coffee. And that's kind of what we've been told for couple of years what the future would be.

**2:14** · Um but then when you really start working with it, even if you're not coding, all you get is a TUI today. Uh so it's amazing. You can code, you can actually, you know, I started doing things that were not coding in it.

**2:29** · They're great for this. Uh agents are great for this.

**2:32** · But it's kind of the equivalent of having a robot, like a tractor mower, that you still have to stay on even if it's driving by itself, right? It's kind of very frustrating because you have to It can do many things, but you still have to be on.

### 여전히 앞에 앉아 있어야 하는 터미널

**2:46** · And so, of course, the labs didn't stop there.

**2:49** · And they came up with apps, uh which I call basically SSH with vibes. That's great, but in this situation, when that came up, I was like, "Woah, that's awesome. I don't have to use like a like SSH on my phone anymore. Code X is great."

**3:05** · However, I noticed I just started, you know, when I was on my walk and I was just instructing the agent to do things while I was walking. And so I wasn't thinking, you know, very clearly anymore. I just started running agents on my phone during my morning walk. And this is not great because this is the equivalent of this. It's you kind of midway, uh you It's not the tractor that you have to stay on. It can actually do something without you being right next to it. But you still have this remote control that, you know, you kind of have to change your trajectory every now and then. Uh that's useful.

**3:34** · It's kind of absurd uh when you think about it. And actually, when you look at people like on their phone all the time just doing this, it's kind of absurd and it's clearly transitional. Like surely we're not It's not It's not going to stop there. Um and so I did a very dumb thing as a CEO, which is I started coding. Uh don't tell my board. And I started to build the dumbest thing that could possibly work.

**3:59** · And of course it became a really a crazy rabbit hole. Uh the repo is there if you want to take a look at it. The code is not amazing, uh but it works. Um So, the first thing is that you know, I started using frameworks. Uh I mean, there are great frameworks and I'm not going to name any frameworks because they're all good in their own way and they all have flaws in their own way, which is fine. Uh but I spent all my time actually editing the prompt within the code and I was like, this is actually not very useful.

### 프롬프트를 코드가 아닌 Markdown에 둔 이유

**4:31** · So, I'm like everyone here, I hate YAML uh like the next guy, but I still found that this was actually a lot easier to start implementing agents without code.

**4:41** · Uh you can version it, you can diff it, uh you can review in the PR. Um but it's just and it's just so easy. You can just, you know, write your file, you drop it in a folder, and then it just magically appears once you have the runtime and it just magically works. Um and you know, then I needed like my market watch to run every morning while I'm, you know, while I'm walking in the fields. And for that we have things that, you know, uh have been around for a while, which is cron jobs.

**5:12** · Uh and schedules specify, you know, when the agents need to be run.

**5:19** · And also we'll see it's very important later, uh they publish uh they publish events. And you know, markdown and cron obviously, you know, it's much more complicated than that under the hood, but the interface is this. You don't write code. And that's the whole product so far. And honestly, just mostly worked at this point. I'll I'll come back on mostly uh later.

**5:42** · And so, this is actually a real picture of my one of my morning walks. And so, what I do is I record voice notes while I'm walking.

**5:52** · But cron, you know, cron jobs, I mean, people would use cron jobs for this because that's what's available in Cortex today. But they're not ideal.

### Cron은 언제, 이벤트는 왜를 다룬다

**5:59** · Because they cover when, but this is just one point in time. It doesn't cover because this happened.

**6:06** · And, you know, things that happened in our system like automatically when you drop the voice note now in the system, it will emit an event.

**6:16** · And an agent will react to that event.

**6:18** · And it's the same thing when you have a new email, a new entry in the CRM, I mean, anything, a new PR that's open, a new PR that's merged, etc. It just reacts to events. It's not just a cron job. And that And that means that, you know, agents of the voice note processor is just, you know, not a cron job. But here you have accepts and returns. So, it just declare what it accepts and what it returns as an event. And here it accepts a voice note, transcribes it, turn it into durable notes on the right, and it emits a new event.

**6:50** · And for that, I use the structured output, so we'll come back to this.

**6:53** · And you know, now we finally have the future we're promised because that voice note agent emits voice note processed. And then I have my daily brief agent that I actually will take the output of the cron job, will take the output of the voice note agents, and we create my daily brief, which is posted as as a Slack message.

**7:13** · So, the Slack message.post event is actually is actually like a a process actually subscribes to this and emits and sends a Slack message to me. So, actually this is a real This is a real thing. It's working. I can show you after on my phone.

**7:33** · And, you know, there are frameworks that are going to sell you the fact that you need graphs for this in code. You do not need graph.

**7:43** · Uh in this case, all you need is events.

**7:45** · You have no edges to maintain. Agents simply subscribe to events.

**7:50** · Anyone can come in and edit this. You don't need to Yeah, you don't need to know how to code. You just need to know what events exist in the system. Funnel in and funnel out are free, no code, and it's just drop a file and the topology emerges.

**8:04** · Whatever the log says happened.

**8:07** · And you know, then of course I I tried to run it. So, the first version took about I mean, you know, I cheated. I cheated. I used uh I used CodeX. And it took about like a day to write like the first thing uh out of my week. But of course I tried it and it broke.

**8:26** · Uh so, it's These are real examples, actually. The dates, no, but it's real examples. It's like the first day, daily brief was posted to Slack twice.

### 첫 주에 망가진 것들

**8:35** · Um On Wednesday, one of my voice notes completely vanished. And then, you know, towards the end of the week, I I kind of like played with the prompts all week and the market brief was garbage. But I didn't version uh I didn't version my changes and I couldn't remember actually what I changed in the prompt that made the thing completely useless. Now, if there are distributed or ex-distributed engineers in the room, you probably know this shopping list already.

**9:05** · Uh there is nothing new under the sun.

**9:09** · And, you know, each failure, so each of these failure modes that you found actually led to building one piece of what turned out to be a runtime.

**9:21** · So, the lost note actually turned into a log. I just wanted everything to be saved forever so that I could go back to it and look into into what happened. The duplicates it was because I was not following, you know, it did several attempts and I was not following them. I didn't have a proper queue. I wasn't counting the attempts, etc., etc. And then, uh probably the most interesting part is the last prompt, I got into a really deep rabbit hole in there, and I just ended up uh building a content like a content-addressed system for this.

### 로그: 아무것도 잃지 않고 인과관계로 연결하기

**9:54** · A content-addressed system, you can think of Git, uh you can think of Nix, and any other build system. And, you know, that was an I didn't do this because I wanted to design a one-time I mean, by that point, I still just wanted my agents to work. And I also liked the distraction.

**10:12** · Uh and I just paid off that as it appeared, like errors as they appeared.

**10:18** · I hope my board won't see this talk.

**10:22** · Uh so, the log. The log is the system's memory. Uh nothing is lost and everything is observed. Uh you can, you know, you only have one append-only events table. On the left, it's a real command line uh in like command is it a events and you get all the events.

**10:40** · They are causally linked as well, like you know which event triggered which event, which happens to be super useful when you're debugging. And, you know, even with three full agents, you start having like major debugging headaches.

**10:54** · So, that was super super helpful. Um and everything is queryable, which again is for debugging.

**11:04** · The second thing is, you know, okay, we have a log, so we can trace back things, etc. But it's still really hard to know what went into the like what went to the model, what prompt was sent to the model again.

**11:19** · Because what you see when you're using Codex, it's kind of a lie. Like you kind of have like a live chat session with the model, and so you tend to think that oh, that's what the model saw, and you know, that's exactly so I can understand what happened. But the truth is that's not exactly what the model saw.

**11:36** · Um there are many reasons for that. One is, I mean, compaction, obviously, is a big pro- is a big thing, but also, you know, there are just quirks. Also, you know, OpenAI doesn't share or Anthropic, for that matter, don't share the thinking with you, the thinking traces.

**11:48** · So, you have no idea I mean, kind of have an idea of what went in, but not completely either.

**11:53** · And so, you need something different.

**11:56** · Uh you need something different, and that was the big rabbit hole, which is trying to find a way to build a system where you can trace back to what the model saw internally.

### 프롬프트의 content addressing, diff와 replay

**12:07** · And so, what I did was basically built I mean, nothing new. This is basically how built system works. Uh so, you have different parts for prompt. You have your system prompt. You have a description of your first skill, of a second skill. Then, you have the description of your tools.

**12:23** · You have your user message, which is the question to the model. Each one of those is stored and addressed and, you know, stored somewhere as an identifier, which is a hash. And so, when we build a prompt, instead of building a piece of I mean, before rendering the text, we actually represent the prompt as a list of these uh of these hashes.

**12:46** · And so, what that means is that down the line, when I have a model answer, which, by the way, is also stored in the same way, we can trace back to the prompt very easily. And then, from that prompt, we can know exactly what went into the model's context, which actually matters a lot. I mean, it matters a lot for debugging, but it also matters I mean, it makes compaction a lot easier. You're just manipulating a graph, right? You're not manipulating strings. It's just a lot easier, and it makes KV cache management a lot easier, as well, indirectly.

**13:16** · And but, I think that when, you know, I guess, probably, the main advantage that's when you use that scale is really auditability. It's like you can know exactly what happened with our agent and why it returned what it returned.

### 프레임워크가 아닌 커널

**13:34** · And so, you know, I'm just going to go pretty pretty quickly over this. Uh what you get once you have this graph is you get diffs. Like you can say, "Okay, what changed between these two runs? Like what which components changed? Was it just my message? Did I like give the model a different skill? Did I give it a different tool?" So, you can just yeah, you can just run this function and it will show you, you know, the difference between uh the runs. So, here you have you know, three components that were identical.

**14:05** · There's one which is, you know, the user message changed. And then you had all these other messages that were actually, you know, that were continuing it's continuation of a single session.

**14:16** · Uh then you have another thing for free which is replay.

**14:20** · Uh replay turned out to be really useful for me because after a while, I mean, when I saw the cost ramp up, like the thing when you have observability is that you do realize that cost increase very quickly.

**14:34** · I wanted to try with open source models.

**14:35** · And so, I wanted to rebuild all requests for to eval and see if I got the same thing out, if I got something satisfactory, if I need to change anything.

**14:44** · And turns out that once you have uh you know, this content addressing system, you can rebuild the request from the graph and you can just replay it exactly the same. And you can, you know, resend, you can use a different model. Uh you can use a different request if you want.

**15:00** · You can you can change it. And so, yeah, you get actually a lot of things I mean, for free. You need to implement the thing. Um and so, this is kind of different um from what you find I mean, what I found when I started doing this.

**15:14** · It might be different today because it was a couple of months ago.

**15:17** · Is that out there you had a lot of libraries. So, it's just frameworks. And frameworks just call code.

**15:23** · Your agents live inside their abstractions.

**15:27** · And I don't like analogies with, you know, operating system. Okay, everyone has used that analogy, but okay, let's say a kernel like runs processes and your agent kind of is a process. It doesn't matter what it does actually.

**15:41** · But the system can schedule it, can build to isolate it. It can isolate it and journal is it with the log. And the agent definition, so the markdown is user land. Like you don't need to use it with that system if you don't want to.

**15:52** · Actually, I have a front end that doesn't use this markdown this markdown format at all.

### 타입이 있는 호출과 이벤트라는 경계

**15:57** · And Okay, here's a very important point. And you know, that's kind of a takeaway and it's also what justifies me working on this because disclaimer structured outputs is our specialty. We've been working on this for 3 years. And it just ended up being a big dog fooding project. And the reason why I did this at the beginning was not because I absolutely wanted to use our software. I didn't necessarily want to, you know, fork llama.cpp to our software, etc.

### 배운 점: 구매하기 전에 먼저 만들어 보기

**16:25** · It's just because Anthropic was terrible at structured outputs. And so like 20% of my events were wrong and were rejected by the system. So that's why I ended up doing this. And the goal, you know, job of the kernel is actually to make bad actions impossible, not just unlikely. And so you have these two boundaries with the between agents and the external world. The first one is type tool calls the two tool calls. You don't want to, you know, you don't want to call tools that don't exist, etc.

**16:51** · etc. And also the boundary with other agents, which is typed events. And this is non-negotiable I found. Like you can get a lot of errors just from this. I wrote a really long blog post about this. It's if you follow the QR code, you'll find it. And Yeah.

**17:08** · And the result of that is actually deployed within the company after I built this.

**17:13** · And now today after a month of deploying it, we have 20 agents on the left that are not just contributed by technical people, by the way, uh which is kind of what markdown uh what markdown gives you. And then on the right is, you know, we deploy it called the internet.

**17:28** · There's the briefs, there's a bunch of I mean, there's a bunch of things, as you can know as you can see.

**17:33** · Kind of like a few, you know, as a conclusion, a few lessons. Uh the first one is that well-executed background agents are really magical. Uh they feel like this, you know, robot mode that I had at the beginning is I really just sit down and I come back and I have this morning brief that is probably even better than what I would have had just doing it manually. And it just appears in my inbox every day and processes my, you know, random thoughts. Uh the difficulties that you meet during this kind of thing is just good old engineering problems.

**18:04** · I mean, there's really nothing new under the sun when it comes to orchestrating these things.

**18:09** · It's just good old software orchestration. Uh open source models are there. Uh they're good enough. I replaced, so I don't have any third-party APIs anymore. Now I just use open source models, and even on my laptop I use uh local model. Uh so, it's good enough for what I do with it. For coding, I don't know but for what I do with this, it's good enough.

**18:31** · The infra category is definitely unsettled. Uh I tried a few things before I started building myself.

**18:37** · And I would advise that today, like definitely start building before you buy. Uh so, if you're a small company, if you're a tech CEO, it's kind of an advantage because you can just do this without, you know, tasking engineers to do this and get them off track, but I would definitely try to build before I buy just to know exactly what I need and, you know, the limitations of what exist. Uh also, I will say that to people building uh frameworks for this is please eat your own dog food.

**19:07** · Uh sometimes it's pretty clear that people are building, you know, agent orchestration frameworks, etc., but not eating their own dog food, so please do.

**19:16** · And the other thing is I'm really glad I took these 2 weeks off to play with the field because that completely changed I mean, that changed the trajectory of the company. I know we're in the AI company, we should be in it, etc., but you know, business is such that you're always thinking about the next thing, the next thing, the next thing, and it's the same everywhere, but what I'm urging you to do is to stop and actually immerse yourself in this and try to see how useful it can be for your company.

**19:42** · Uh so, you can steal the code. Uh it's not a product that we sell, and we don't intend to sell this. Uh you can read our blog as well. Uh so, I haven't explained uh this yet, but I will publish something about it. And thank you for your attention.

**19:59** · Okay.
