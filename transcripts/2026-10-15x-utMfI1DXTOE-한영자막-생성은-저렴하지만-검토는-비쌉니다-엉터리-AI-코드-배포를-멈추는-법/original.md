---
title: "[한영자막] 생성은 저렴하지만 검토는 비쌉니다: 엉터리 AI 코드 배포를 멈추는 법"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=utMfI1DXTOE"
domain: "youtube.com"
language: "en"
description: "AI 코딩 도구로 코드 생성이 너무 쉬워진 시대, 진짜 병목은 어디에 있을까요? G2i의 엔지니어링 매니저 가브리엘 마르티네스가 AI로 만들어진 엉터리 코드(AI Slop)의 본질과 이를 방지하는 실전 아키텍처 원칙을 명쾌하게 설명합니다.📌 주요 내용:• AI 슬롭(Slop)의 ..."
word_count: 3542
---

![](https://www.youtube.com/watch?v=utMfI1DXTOE)

AI 코딩 도구로 코드 생성이 너무 쉬워진 시대, 진짜 병목은 어디에 있을까요? G2i의 엔지니어링 매니저 가브리엘 마르티네스가 AI로 만들어진 엉터리 코드(AI Slop)의 본질과 이를 방지하는 실전 아키텍처 원칙을 명쾌하게 설명합니다.📌 주요 내용:• AI 슬롭(Slop)의 ...

## Transcript

### 도입: 가브리엘 마르티네스 소개

**0:00** · Hi everyone. My name is Gabriel Martinez. I go by Gabo.

**0:04** · I'm an engineering manager and resident slop warden at G2i, and I'm here to talk about slop.

**0:10** · I'm here to talk about slop because I'm rather passionate about the topic. And by passionate, I mean angry.

**0:17** · The term slop has been beaten to a pulp, but the thing it points at has long been around.

**0:22** · Only now it happens at warp speed.

### AI 슬롭(Slop)의 진짜 정의

**0:27** · All right.

**0:29** · Slop is what happens when judgment when generation outruns judgment. Slop is not AI-generated code.

**0:36** · I don't mean to define it as some concrete objective thing that can easily be sniffed out, although there are tells.

**0:43** · Slop is output that looks finished before the thinking is finished. It is work product where ambiguity ambiguity was cleared with guesses, where tradeoffs were left to chance, where ownership was not taken.

**0:56** · Output was produced, sure, but understanding was not.

### 진짜 위험: 아무도 인지하지 못한 선택들

**1:01** · And the real danger is not simply that the machine made a bad choice. The danger is that the engineer never noticed that there was a choice to make.

**1:08** · They never hit the ambiguity. They never felt the constraint. They never discovered the edge case that would have changed the design.

**1:16** · The work arrived already smoothed over, and with it the unknown unknowns stayed unknown.

**1:23** · But software is a record of choices, technical choices, product choices, operational choices, user-facing choices.

**1:31** · If we do not see those choices, we cannot own them. And if we do not own them, we are not really engineering. We are just accepting output. We are just a code monkey hitting the merge button.

### 취기에서 깨어날 시간

**1:42** · I'm not the purist that's come here to tell I to tell you that AI is bad.

**1:46** · It's not bad, okay?

**1:48** · I'm here to describe some of the patterns that have led to our drunken AI stupor.

**1:54** · It's absolutely understandable, given the advancements made since December 25th how we got to where we are.

**2:00** · But we need to dial it in. We need to slow down. We need to sober up.

**2:05** · Agents can seem to make magic. And the internet would make you believe it is so.

**2:10** · They can write code, scaffold screens, and with right tuning can build whole features or systems.

### 에이전트가 대체할 수 없는 인간의 역할

**2:16** · But they cannot replace the human work of deciding what matters, understanding what is being built, interpreting ambiguity, owning the system for the long haul, exercising judgment and restraint at the system architecture level, and arguably the most important important, knowing what not to build.

**2:34** · Slop is not about AI as a tool, rather it is about the absence of judgment. So, let's talk a little bit about what got us here.

### 우리가 여기에 이르게 된 과정

**2:44** · In a world where anything is possible, deciding what to build is more important than ever.

**2:48** · People have gotten overly excited and built behemoths of spaghetti product nonsense.

### 코드는 자산이 아니라 부채다

**2:54** · It's almost as if they've forgotten that any line of code you write is a liability, that the best code is no code at all.

**3:00** · The cost of creating code is falling, but the cost of understanding a software program is not.

**3:06** · And I want to be clear here. I'm not saying every line of code needs to be personally read, blessed, and understood in isolation. That has never really been the standard.

**3:15** · Large systems have always contained more detail than anyone person can hold in their head.

**3:19** · But the logic has to be understood. The main flows, the boundaries, the data model, and product behaviors have to be understood.

**3:27** · Good software has a kind of harmony to it.

**3:30** · Not in some precious aesthetic sense, in a practical sense. The code should reflect the shape of the domain.

**3:36** · AI can generate code, but it cannot magically give a messy system coherence.

**3:41** · An agent can operate with much more effectively inside a code base that has structure, patterns, clear boundaries, and rationale.

**3:48** · But if the system is already a big ball of mud, the agent does not rescue you from the mud. It just builds the ball bigger, faster.

### 더 거대해지는 진흙탕 코드베이스

**3:56** · Just because you can generate another component does not mean the product needs another component.

### 생산된 라인이 아니라 소비된 라인

**4:01** · Dijkstra had this great line.

**4:03** · If we could count lines of code, we would not think of them as lines produced, but as lines spent.

**4:08** · It is the cost of building.

**4:10** · AI makes it easier to spend lines. It makes it easier to spend on files, abstractions, and complexity, but at the end of the day, you own the bill.

**4:19** · That bill shows up as confusion, brittle flows, features nobody wants to touch because they don't fully understand.

**4:26** · It shows up as product surfaces that technically do everything, but feel like a maze.

**4:31** · Think about that special kind of B2 bloated B2B software where every task requires training. Where every screen has 12 escape hatches and nobody can explain whether the complexity is there because users needed it or because teams just kept adding things.

**4:46** · Teams should be held accountable for work they are producing.

### 책임감과 주인의식

**4:49** · Accountability is the keyword here.

**4:51** · Taking ownership over the product you're building and having a way to tie that to positive or negative reinforcement.

**4:57** · Just in the mere fact of knowing that someone else will review your work will force engineers to pay just a little bit more attention to the finer details and be a bit more meticulous.

**5:06** · Especially if there are accountability metrics that can be made visible for each chunk of work product.

**5:11** · We're entering the age of bloated bloated products with spaghetti UX on the order of worst kinds of B2B ERPs you may have ever been trained to use.

### 프로토타입의 환상

**5:21** · Today, anyone can buy code an application in an hour and end up with a working clickable prototype.

**5:27** · And that has changed expectations.

**5:29** · Because once people see software appear that quickly, they start to believe software can be built that quickly.

**5:35** · They see a few prompts turn into screens. They see a terminal session produce something that looks real. And to be fair, sometimes it is real enough to be useful. Sometimes that prototype is a great way to explore an idea.

**5:47** · But the problem is that stakeholders do not live in the code base. Off- that stakeholders that do not live in the code base often experience that prototype as evidence that the hard part is over.

**5:57** · They're not thinking about the parts where real battle-hardened engineers earn their keep. It's outside the happy path. Figuring out co- how to cohesively integrate a new feature set, the the work involved in clarifying requirements, the work of actually manually testing a feature set to ensure that it works as a human should expect, and that the UX isn't complete garbage.

**6:20** · They're not at all thinking about the most time-consuming bits, the human parts, the last mile, where the judgment lives.

**6:28** · This is where someone has to read the code, test the behavior, own the trade-offs, notice the missing requirements, and decide whether this thing deserves to be a part of the system.

### 공짜는 없습니다: 유지보수의 대가

**6:38** · Here's a tweet that emphasizes the point I'm trying to make here. It quotes the creator of SQLite who on the topic of pull requests says, "You say, 'Oh, it's free.' No, it's not free. What you're doing is asking me to maintain it for you, to document it for you, to test it for you, to maintain it for you for the next 25 years. That is not free." And this really struck a chord with me. I couldn't have said it better.

**7:00** · It's easy to yield a PR, but who has to own that thing? Who's responsible for the repercussions of what that means?

**7:07** · So, external pressures from stakeholders coupled with pressures of competing with slot meisters begets mucho slop-o.

### 더 빨리 머지해야 한다는 압박

**7:16** · I'm sure most of you have seen this in the wild, where the bad engineers, the ones who don't review the details, that don't refine the spec, that aren't detail-oriented, end up producing more faster.

**7:28** · The folks who pay attention to the detail and go above and beyond are the ones that might seem like they're doing less and moving slower.

### 개발자의 성과 불안과 인센티브

**7:35** · How this propagates is it yields performance anxiety, wherein team environments can pressure engineers to merge PRs faster than they can judge, leading to code being merged without full understanding.

**7:47** · Short-term thinking, getting that PR in, wins over long-term code health.

**7:52** · I've personally felt this anxiety where engineers around me were merging at an incredible pace, and I felt constant anxiety that I was not moving fast enough.

**8:00** · And I can admit that it led me to merge code that I didn't necessarily review with a level of detail that I normally do or should have.

**8:07** · I've seen horror stories of people merging code they don't fully understand or haven't even tested themselves.

**8:13** · At the end of the day, we're all human.

**8:15** · We are driven by incentive.

**8:17** · And if incentives are driving people to get PRs in, then we're going to be in for a rude awakening.

**8:24** · Rewards should be centered around producing value, elegant, well-factored, pragmatic system design, and around clarity of test and evaluation harnesses.

### 1,000줄짜리 PR의 악몽

**8:34** · There's just something that really grinds my gears about seeing a multi-thousand line PR. There's no way in hell that a human can fully understand all the important bits of a change that big.

**8:44** · It is our job as engineers to optimize for this new world, to decompose needs into its simplest chunks, which lends to understanding, understanding simpler code surfaces and controlling of our code bases.

**9:00** · AI is supposed to have been eradicating jobs, and engineers are supposed to be moving at the rate of token production.

**9:07** · So, there is a lot of pressure to be producing more faster.

**9:11** · What AI is really doing is producing more faster, more characters that eat more human time.

### 20페이지 AI 문서 문제: 검토자에게 전가된 생각

**9:18** · I've seen this happen in the most mundane ways. You give someone 10 bullets of scope, a few user journeys, something intentionally lightweight, and they come back with a 20-page document.

**9:28** · Maybe it looks polished with fancy prose, but now I have to spend hours figuring out whether there's any real thinking inside it.

**9:36** · That is AI-generated work in the worst sense. It does not clarify the problem, it expanded it.

**9:42** · It took ambiguity that should have been resolved by the person doing the work and handed it back as a larger artifact for other stakeholders to do it.

**9:51** · In code, a vague task becomes a large PR.

**9:55** · A small feature becomes a pile of files.

**9:58** · The output arrives with the shape of completion, but the real work has just moved to the reviewer.

### 생성은 저렴하지만 검토는 비쌉니다

**10:04** · And that is the part that we need to be honest about. Generation is cheap, but evaluation is expensive.

**10:11** · If AI produces more than humans can possibly evaluate, it has not accelerated the team, it has created a bottleneck.

### 트위터의 과장 광고와 랄프(Ralph) 루프

**10:20** · One thing that I find particularly annoying is Twitter.

**10:24** · You've got all these self-proclaimed experts and click-baiters summarizing some talk or promoting some truths that we've always known as if there's some novel genius idea.

**10:34** · The Ralph loop was one of those. It was made to sound like a novel agentic breakthrough, when it's just a while loop.

**10:41** · Somehow, we've completely forgotten that lines of code is a garbage metric for productivity, but then we decided that it's different than deciding the engineer who burns the most tokens must be producing the most.

**10:52** · We used to break a feature into small atomic pieces we could reason about.

**10:57** · Small enough to hold in your head and actually review.

**10:59** · Now, we type two sentences and expect a whole not fully thought out feature set back in one shot, without really understanding it is what it is we're asking for.

**11:10** · The key point I want to highlight here is that we do not forget the ground truths we've always known.

**11:16** · 60 years of software wisdom hasn't been invalidated by AI.

**11:20** · Composable code, good patterns, and solid practices remain essential.

### 코드의 형태와 설계가 여전히 중요한 이유

**11:28** · A friend recently challenged me on why I spend so much time thinking about guard rails for agents, coding conventions, architectural styles, and and constraints around how the system should be shaped.

**11:40** · His question was basically, what's the point?

**11:43** · If the agent writes the code, why should we care about what the code looks like?

**11:47** · And to an extent, I agree.

**11:50** · There will eventually be a world where much implementation detail is completely abstracted away from humans.

**11:56** · That has been the soft the direction of software from the beginning. We went from machine code to assembly, which another level of abstraction up got us to C, then Java, then languages like Ruby, where the primary design goal was programmer happiness.

**12:11** · Just like in languages we built abstractions for garbage collection and manual pointers, AI is abstracting away the imperative bits.

**12:18** · It does not remove the need to understand how a system comes together cohesively.

### 검토의 접점으로서의 다이어그램

**12:23** · This is why diagrams matter so much, not as decorative documentation after the fact, but as a way of making systems legible.

**12:31** · When a agents can generate thousands of lines of implementation detail, humans need a compressed review surface, service boundaries, data flows, state transitions, and failure modes.

**12:42** · A good diagram lets us see the shape of the system in a way code often obscures.

**12:47** · We can leave the main process or workflow as the reviewable surface with implementation details pushed to the leaves.

**12:54** · That is why I vouch for declarative code and architecture patterns that create layers humans can actually reason about.

**13:00** · The goal is not just code generation, the goal is human knowledge, human understanding, and human review.

### 인지적 과부하: 변경 전 치러야 할 세금

**13:07** · We need to optimize for that human layer.

**13:11** · Cognitive overhead is a tax every engineer has to pay before they can make a meaningful change.

**13:18** · It is the time spent figuring out where code belongs, which pattern to follow, and what proper implementation actually means.

**13:26** · AI does not remove this tax. Unless tamed, it exacerbates it.

**13:31** · An agent can generate five plausible patterns in five different styles.

**13:35** · And now the human reviewer has to reverse-engineer not just the code, but the intent behind it.

**13:41** · With proper conventions, intent is more easily grasped.

**13:46** · The answer to this is conventions, standards, documented flows, small reviewable surfaces, and clear ownership boundaries and definitions of done.

**13:55** · The more obvious the path, the less room there is for slop to hide.

### 루비온레일스(Rails)가 주는 교훈: 규약의 힘

**14:02** · I want to give special recognition here to Rails and its place in my heart.

**14:07** · Rails matters here because it shows what happens when a framework aggressively reduces decision surface.

**14:12** · When conventions reduce your overhead.

**14:15** · Rather than ending up with 10 different ways to structure the same concept, you end up with one.

**14:21** · It may not be perfect in everyone's subjective opinion, but it's understood and it works.

**14:27** · In my career, between my first and second forays with Rails, I had a gap of 4 years.

**14:33** · It was beautiful to come back after that gap to the see that the same patterns and de facto libraries were still the same patterns and de facto libraries.

**14:42** · I could hop right back into a code base and immediately understand intent without needing to parse through architecture.

**14:48** · It allows engineers to easily move between projects laterally with minimal ramp up.

**14:55** · The same can't be said about other language ecosystems. JavaScript.

**15:01** · Environments with a single correct way of doing things are superior for agentic development because agents aren't confused by dozens of competing approaches.

**15:11** · This is well supported by the official Rails doctrine.

**15:14** · It explicitly names "Optimized for programmer happiness" and "Convention over configuration" as core pillars.

**15:21** · And describes convention as a way to eliminate recurring decisions and lowering the barrier to getting started.

**15:27** · It is the reduction of cognitive overhead.

### 우리가 ORC를 만든 이유: 제약과 검토

**15:32** · Everything I've talked about today is what led us to build Ork.

**15:35** · Not only because we think the ants Not only because we think the answer is more agents, and definitely not because we think engineering judgment can be automated away.

**15:45** · We built Ork because we kept seeing the same failure pattern.

**15:48** · AI could generate code, but the surrounding discipline was still missing.

**15:52** · The planning, the review, the adversarial checks, the context management.

**15:57** · Over time, we found ourselves repeating the same human processes to fight slop.

**16:02** · Break down the work, manage context, weigh out your options, and make sure the output enters the code base in the way the team that can still reason about.

**16:11** · Ork is taking those lessons and baking them into the workflow.

**16:15** · It is not a magic box that makes correctness disappear as a human responsibility.

**16:20** · It is a system for preserving that responsibility while letting agents do more of the lift.

**16:25** · The goal is not to ship more generated code. The goal is to ship software that is still coherent, tested, maintainable, and owned after the generation happens.

**16:35** · Because the future is not vibe coding better, faster.

**16:39** · The future is orchestration with judgment.

**16:42** · Thank you all for your time, and remember, don't get sloppy.

**16:46** · \[applause\]
