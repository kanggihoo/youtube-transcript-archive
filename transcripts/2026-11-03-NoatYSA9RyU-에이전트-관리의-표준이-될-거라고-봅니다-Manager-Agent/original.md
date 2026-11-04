---
title: "에이전트 관리의 표준이 될 거라고 봅니다 | Manager Agent"
author: "개발동생"
site: "YouTube"
published: 2026-11-03T02:16:44-08:00
source: "https://www.youtube.com/watch?v=NoatYSA9RyU"
domain: "youtube.com"
language: "en"
description: "Claude Code, Codex, Cursor 세션을 여러 개 띄워 쓰다 보면, 에이전트는 빠른데 병목은 결국 사람이 됩니다. 그래서 사람과 코딩 에이전트 사이에 매니저 에이전트를 두는 구조를 정리해봤습니다. 제가 표준이 될 거라고 보는 건 특정 도구가 아니라, 에이전트가 에이전..."
word_count: 3871
---

![](https://www.youtube.com/watch?v=NoatYSA9RyU)

## Transcript

### 에이전트는 빠른데, 병목은 나

**0:00** · One of my biggest concerns lately is that agents are fast, but I'm the bottleneck.

**0:05** · I think about that a lot.

**0:07** · In this video, I want to explain a structure that can solve this problem.

**0:13** · As I wrote in the thumbnail, to solve this, in the end, humans shouldn't be approving or reviewing everything.

**0:20** · Ultimately, we need to build agents that manage other agents.

**0:24** · That's what I believe.

**0:25** · Usually, when we talk about working with agents, we open a Claude Code session, a Codex session, and a Cursor session, give them some tasks, and when they finish, or need a check partway through, a human has to handle all of it, so that's where a huge bottleneck forms.

**0:46** · In my case, for example, I usually run 5 to 10 sessions at the same time, and with those 10 sessions, if I'm the one approving everything along the way, that creates a massive bottleneck.

**0:59** · So even if agents have made generating code faster, you can't go one step further from there.

### 가운데에 매니저 에이전트를 두자

**1:05** · So the idea I want to share in this video, the idea behind the structure, is to put a manager agent in the middle like this.

**1:15** · Here I used Grok Bot as an example, but it doesn't have to be Grok Bot.

**1:19** · Later, I'll go over what kinds of structures let you place a manager agent in the middle.

**1:24** · With this setup, I don't approve everything myself.

**1:28** · First, the manager agent, on my behalf, approves everything an agent can approve on its own, and then only what the manager agent asks me to check is what I approve myself.

### 결정 대기 13개, 내가 판단할 건 6개

**1:43** · Recently, I actually counted how many agent sessions I had running and how many things I needed to approve right then.

**1:51** · There were about 28 idle sessions, and among them, about 13 sessions were waiting on a decision.

**1:59** · So I had to go into all 13 and make decisions one by one.

**2:03** · But when I looked closer at those waiting sessions, only about 6 needed my own judgment, and if I designed some criteria, about 7 could pass with those criteria alone.

**2:18** · Some of these still need my judgment, but ones with criteria that can pass don't really need my judgment, so I wouldn't have to go into each session to approve the agent's work or make its decisions anymore.

**2:33** · For sessions that, given criteria, can move forward or be merged, instead of me going in to figure them all out, if I put something in the middle, in my place, that approves or allows merges based on criteria, a manager agent with that role, productivity goes up a lot, and it really cuts down human cognitive load.

### 석 달 사이 나온 매니저 에이전트 셋

**2:58** · But this idea of putting a manager agent in the middle isn't just mine.

**3:03** · In the last three months, services that can act as a manager agent have launched.

**3:09** · Grok Bot came out on August 11, OpenAI released something called dots on September 29, and recently, on October 21, Claude also launched Duet.

**3:19** · All of these can act as manager agents, and they're out now.

**3:23** · What these products have in common is that they can work 24 hours a day.

**3:28** · So I think that instead of us humans handing tasks directly to coding agents, we now need something in between that hands off work and gets results back: a manager agent layer.

**3:40** · I think that's where we are now.

**3:42** · So rather than handing work to coding agents ourselves, between humans and these coding agents, we put a separate manager agent layer that hands off the work, and when each coding agent finishes its task, the manager agent layer receives the results too. With that structure, I think a lot of problems can be solved.

**4:05** · And I'd even say this idea of running agents with a manager agent in the middle, this structure, could become the standard, or rather, it already is.

**4:15** · That's my personal view.

**4:17** · So today, I'll cover what exactly this structure does, and later, the engineer who actually built Grok Bot uses this kind of manager agent layer to merge 2,500 PRs a month, working in this kind of pattern.

**4:31** · I'll walk through that case and also look at how you can take this structure and use it yourself.

### 3단 구조: 매니저, 코디네이터, 코딩 에이전트

**4:39** · First, I drew a diagram.

**4:41** · It can be split into three layers in total.

**4:45** · Normally, when we use coding agents, a human handles each session in the coding agent layer directly.

**4:53** · We open a Claude Code session, give Claude Code a task, give Codex a task, give Cursor a task, and like this, each session is controlled by a human. That's the usual way, but I think two more layers can be added here.

**5:09** · The first is the top layer, the manager agent layer.

**5:14** · This is Grok Bot, OpenAI dots, and Claude Duet: agents that never shut down or rest, 24 hours a day.

**5:25** · This layer stays on all day, pulling in Slack, Gmail, issues, and so on, continuously, finding work to do, and it's the layer that can talk directly with humans.

**5:35** · Think of it that way.

**5:37** · In the middle, you can add a coordinator layer.

**5:41** · When you give it work at the project level, what this coordinator agent does is not code directly.

**5:49** · Its only role is to distribute tasks appropriately to each coding agent in the coding agent layer below.

**5:58** · These already exist as products.

**6:00** · Cursor has a feature called Projects, and Claude Code also has a feature called Projects.

**6:06** · In these top two layers, the important thing is that they don't code directly.

**6:12** · That's the key part.

**6:13** · These top two layers take in work, create tasks, distribute them, and delegate them to agents, and when those agents finish their work, the completed results are sent back up to these layers, and the coordinator or manager agent, at that upper layer, before anything reaches the human layer,

**6:41** · in other words, to minimize human cognitive load and reduce bottlenecks, can make most of the decisions here.

**6:49** · That's the structure.

### 위 두 층이 코딩하지 않는 이유

**6:51** · You could have the manager or coordinator agent do the work, do the coding, directly.

**6:58** · But one reason you shouldn't is that they all cost money in the end, this one costs money too, and each one gets its own context window.

**7:10** · Each layer has its own role, and if this layer does the coding too, the context from that coding ends up using the manager agent's context window, so when it comes to managing, the manager is bound to do worse and gets confused.

**7:29** · So split up the layers like this, and remember: don't make the top two layers do any coding.

### 그록봇 엔지니어 Lauren의 PR 2,500개

**7:37** · Someone is already working with this exact structure.

**7:40** · Grok Bot engineer Lauren recently posted a video like this, titled "How I shipped 2,500 PRs to production last month."

**7:50** · It's a talk about how to ship 2,500 PRs on your own, and I went through it myself.

**7:59** · In that video and in Lauren's X posts, Lauren talked about the workflow currently used with Grok Bot to get work done.

**8:10** · So first I'll explain what structure the Grok Bot engineer actually works with, and then how we can bring that structure into the setups we use.

**8:22** · Lauren says 2,500 PRs were shipped last month by one person.

**8:28** · After posting this, it got a huge amount of attention.

**8:33** · Lauren originally had fewer than 30,000 X followers, but after posting things like that post and video, it's grown to over 250,000, a huge jump in followers.

### Lauren의 하루

**8:45** · So this is how Lauren spends the day.

**8:48** · When feedback comes in on Slack, it becomes a Linear ticket, then a cloud agent is spun up to reproduce the bug, and after the cloud agent fixes it, on purpose, to break that work, several agents are launched to try to break it.

**9:04** · If there's still no problem, that PR is merged one hour later.

**9:08** · That's the workflow.

### 세 회사의 매니저와 코디네이터

**9:09** · Earlier I mentioned three layers, right?

**9:12** · Leaving out the coding agent layer, I listed the manager agent and coordinator layers by product.

**9:20** · The ones that can act as manager agents now are SpaceX's Grok Bot, Anthropic's Claude Duet, and OpenAI's dots.

**9:28** · The coordinator layer has its own products too: SpaceX has Cursor's Projects feature, and Anthropic has Claude Code's Projects feature.

**9:38** · OpenAI doesn't have a separate product, and I think dots kind of doubles in that role.

### SpaceX가 Cursor를 인수한 이유

**9:45** · When SpaceX acquired Cursor a while back, quite a few people asked why.

**9:51** · But looking at this structure now, by acquiring Cursor, SpaceX gained one more of these layers, so personally, I think it was a really good choice.

**10:03** · These days, when developers work with coding agents, they might use Claude Code, some use Codex alongside it, or since Grok's model quality has improved a lot lately, plenty of people use Grok too, right?

**10:16** · But Claude Code and Codex only work with their own models, while Cursor lets you use not just its own models but many models in one product, which I think is a big strength.

**10:28** · Each model is good at different tasks, so I subscribe to Claude Code, Codex, and Cursor too, and when you actually use Cursor itself, it's really well made.

**10:41** · Some people look at Cursor as just an AI wrapper product, but if you actually use it, the product itself is pretty good, and I think you'll feel that too.

**10:52** · Anyway, in this video, when explaining the structure that connects the manager agent and coordinator agent layers, I'll use Grok Bot as the example.

**11:02** · Anthropic has Claude Duet, and OpenAI has dots, but Grok Bot can connect directly to Cursor's Projects really easily.

**11:12** · So in this video, I'll explain it on existing products, and beyond that, no matter which products you subscribe to, I'll explain the structure itself that can connect them, so think of it that way.

### Lauren의 방식: outer loop와 inner loop

**11:27** · First, according to Lauren, Grok Bot is called the outer loop, and Cursor's Projects the inner loop.

**11:35** · That's how Lauren describes it.

**11:36** · These are the manager and coordinator agents I mentioned earlier.

**11:41** · As for the manager agent's role, with Grok Bot, you can connect all kinds of connectors.

**11:46** · For example, Slack, Linear, X, Sentry, you can connect all of these connectors, and once they're connected, Grok Bot's role is to gather context from these external connectors and organize it.

**12:00** · Grok Bot also has a routines feature, so at set times you can have it repeat certain tasks.

**12:06** · Then at set times, or when some event happens, Grok Bot wakes up and keeps collecting this context.

**12:14** · And with the coordinator agent, Cursor Projects, using the context passed from the previous step, it makes a development plan, delegates tasks to cloud agents and hands off the work.

**12:27** · And if needed, it spins up a local agent for work that can only be checked locally.

**12:34** · But by default, it spins up cloud agents.

**12:39** · Because with cloud agents, the work doesn't stop even when you close your laptop.

**12:45** · So all work goes to cloud agents first, and local agents are used only when needed as a supplement. That's the approach.

**12:54** · So this coordinator agent doesn't code itself.

**12:57** · Instead, it passes work to the coding agents, and once a coding agent finishes, humans don't do all the verification directly either.

**13:07** · Cursor released pstack, a repo that gathers several verification-related skills.

**13:16** · Using those skills, multiple agents are spun up to try to break the work made here, putting it through thorough verification.

**13:25** · If it's verified clean, a Slack notification is sent, like this.

**13:30** · And merging happens automatically an hour later, because verification is already done.

**13:37** · So humans step in when we give Grok Bot some work context, or review the plan made in Cursor Projects, those kinds of steps.

**13:47** · In the inner loop and outer loop, that's where humans step in, and in the rest of the inner loop, the agents themselves verify, merge PRs, and even deploy all on their own.

### 하루 83개 PR, 사람이 리뷰할 수 있을까

**14:01** · Lauren said 2,500 PRs get merged a month, right?

**14:05** · But even working all 30 days, that means merging about 83 PRs a day.

**14:11** · Realistically, as you know if you've done PR reviews, it's hard for a person to even create 83 PRs by hand, and to merge them you'd need code review, and the moment you go through each one in code review, you could never hit that number.

**14:26** · So in the end, to reduce human cognitive load, we add the manager agent and coordinator agent layers up front.

**14:35** · And building this structure doesn't require Grok Bot or Cursor Projects specifically, as I mentioned earlier.

**14:42** · Whatever you subscribe to, Claude Code, Codex, build the layers that fit it and use them.

### 제 방식: 그록봇, Paseo, 세 코딩 에이전트

**14:50** · I actually have things connected this way and use it.

**14:53** · I also use Grok Bot as my manager agent, and for the coordinator, I use Paseo, a unified environment for agents.

**15:02** · Besides this, you can use things like Orca or Herdr.

**15:06** · So if you're like me and don't just use Claude Code, but also Codex and Cursor, using several agents together, you'll likely need a control tool in the middle to move between agents and coordinate them.

**15:20** · And in Grok Bot, external services, for example, Slack, Gmail, Google Calendar, Notion, get connected to pull in context, development info too, and even metrics into Grok Bot, and once context builds up here, it regularly pulls out issues, and once an issue comes up, it sends it to the coordinator agent, which creates a plan, and figures out how the work should be delegated. That's the idea.

**15:53** · In my case, there are two layers, and sometimes I use the Grok Bot manager agent layer, but sometimes I give tasks directly right here.

**16:02** · When I'm sitting at my computer, I have a manager session running in Paseo, so I give tasks straight into that manager session and have it delegate the work.

**16:12** · When those finish, they report back to the Paseo session on what's been completed, and following rules I've defined in Paseo, anything that can be handled right away, the manager session just handles, and only the rest gets flagged to me.

**16:28** · That's how I've set it up and use it.

### 무엇을 물어보게 할지, 승인 카드

**16:31** · But the important part here is this approval card.

**16:34** · You could have the manager or coordinator agent handle everything on its own, but honestly, doing that creates a lot of risk.

**16:43** · So you have to design it like: handle these tasks yourselves, and only report these tasks to me, that kind of design, and for those reports, we need a system where we can press approve.

### 신뢰 역피라미드

**16:55** · So how well you design this part is really the core of it, and Lauren says we should design the trust pyramid upside down.

**17:05** · This is something I covered in my recent video on escaping review hell, explaining in more detail, layer by layer, how to build these things and raise the trust level, so please check out that video.

**17:19** · I'm a bit embarrassed every time I see this thumbnail, but when I posted it recently, the click-through rate dropped a lot.

**17:25** · But personally, I thought this was a video I really wanted you to watch, so I shaved my head with AI and put that up.

**17:35** · It actually helped a bit, and a lot of you came and watched it, so I was relieved.

**17:41** · Anyway, back to this inverted trust pyramid, the first is building a good code structure.

**17:47** · Writing well-structured code is number one.

**17:49** · This doesn't cost anything extra.

**17:51** · Next, at the lint, test, or CI stage, keep adding safety nets.

**17:57** · This is rule-based too, since you're adding rules, so think of it as an essential layer.

**18:03** · And things that code structure or required CI checks don't catch, for example, you create a file like AGENTS.md, and what rules don't catch, we need to catch by giving instructions as prompts.

**18:17** · And the very last is human review.

**18:20** · Human review is really hard to make more efficient, and much of it is realistically impossible, so if you can, verify everything thoroughly in the layers above so humans review only the essential core parts.

**18:33** · Designing that kind of system is really important, and for that, just watch this video.

**18:39** · Going from 1 to 5 agents is easy, but going from 5 to 100 is really hard.

**18:46** · And the reason that doesn't work is, I personally think, a lack of trust.

**18:52** · So how can we build up trust layers for agents?

**18:57** · I think that's the most fundamental problem we have to solve these days.

### pstack으로 실수를 검사로 바꾸기

**19:02** · There's one thing you can apply to this trust layer right away.

**19:06** · The Cursor team shared something called pstack.

**19:09** · Think of it as a skill collection, install it as a plugin like this and use it right away.

**19:15** · There are many skills, but among them, there's a skill called /correct.

**19:20** · This skill gathers mistakes an agent made in the past and groups them by type.

**19:27** · And for frequently occurring types of issues, it turns them from text into checks.

**19:33** · That is, it raises them to CI level.

**19:35** · That's what this skill does, and I tried running it.

**19:38** · I ran it on the video editing app I'm building, and it gathered 1,054 commits and 777 reviews and analyzed them.

**19:48** · It found about 13 types of mistakes, and turned two of them into checks.

**19:55** · One was putting UI text in directly without translating it.

**20:00** · The other: under certain conditions, the space for a button disappeared.

**20:05** · For those two mistakes, I'd originally written them in AGENTS.md as rules, but it suggested moving them up to the check stage.

### 16분 뒤 같은 실수를 CI가 잡았다

**20:16** · So after building the check and fixing this, about 16 minutes later, in another session, the exact same mistake came up during some work, and the CI step I'd added at the check stage caught the problem right away.

**20:32** · It's a skill that actually worked, so I'd recommend you try pstack too.

### 관제실 문이 열려 있었다

**20:38** · But setting up checks well doesn't solve everything.

**20:42** · Security weaknesses are bound to show up.

**20:45** · For example, to manage multiple coding agents, I use an app called Paseo, and one thing I'd missed before: I mainly use three devices, a Mac mini, a MacBook, and an iPhone.

**21:00** · To let them share the same Paseo sessions, something called a relay was open.

**21:08** · So to fix this, I just shut that relay down, set Paseo sessions to require a password to connect, and to reach Paseo sessions from outside, instead of being reachable over the internet, only devices connected through Tailscale can connect.

**21:25** · That's how I changed it.

**21:27** · The reason I'm sharing this case is that when we use a manager agent or a coordinator agent like this, relying on these two layers as a security boundary is very dangerous.

**21:37** · In a way, they act as the control room, so the moment the control room is breached, everything in our system is breached.

**21:45** · The host can be completely compromised, so how we design this part safely is one of the things we need to think about.

**21:53** · So, wherever possible, the control room's door should never be open to the internet.

**21:59** · If possible, use something like Tailscale so that only our own devices can communicate, or so it only works inside our internal network.

**22:07** · Designing it that way is really important, I'd say.

### 마무리

**22:11** · So in this video, I talked about agents that manage other agents, and the key point is that humans have clear limits, so reducing human cognitive load and building a trustworthy system for agents is what matters.

**22:24** · So by adopting a manager agent, we can minimize human cognitive load, and it can be a really important layer that breaks up work bottlenecks. That's what I think.

**22:34** · I'm planning to further refine how I design these layers, and if you're using Claude Code, Codex, or similar coding agents and feel like a bottleneck is forming somewhere, I'd suggest trying out a manager agent or a coordinator agent.

**22:50** · I'll be back next time with more good info.
