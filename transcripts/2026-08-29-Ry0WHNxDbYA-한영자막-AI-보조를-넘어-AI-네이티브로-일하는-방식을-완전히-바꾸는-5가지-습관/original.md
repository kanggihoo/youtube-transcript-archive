---
title: "[한영자막] AI 보조를 넘어 AI 네이티브로: 일하는 방식을 완전히 바꾸는 5가지 습관"
author: "Tech Bridge"
site: "YouTube"
published: 2026-08-29T16:00:02-07:00
source: "https://www.youtube.com/watch?v=Ry0WHNxDbYA"
domain: "youtube.com"
language: "en"
description: "아마존은 1년 가까이 사내 50개 일반 개발팀을 면밀히 관찰했습니다. 동일한 AI 코딩 어시스턴트를 사용했음에도, 절반은 생산성 향상이 3배 미만에 그친 반면 나머지 절반은 4.5배에서 최고 10배 이상의 폭발적인 배포 속도 향상을 기록했습니다.성과의 차이를 만든 것은 도구가 아니..."
word_count: 3780
---

![](https://www.youtube.com/watch?v=Ry0WHNxDbYA)

## Transcript

### 코딩 어시스턴트의 4단계 진화와 체감 생산성

**0:00** · My name is Clare Ligouri, and I'm a senior principal engineer at AWS. I mostly work on Kiro, our agentic coding assistant, but today I want to talk about some of the practices we've been seeing inside of Amazon in Amazon teams, where we've been seeing really exciting results of productivity increases that are step function improvements since what what we've been seeing with AI so far.

**0:26** · So, I've been working on agentic AI for over 3 years now, and I've kind of seen the evolution that's happened in our industry when it comes to coding assistance with AI. First, we had this inline code completion, helping us to write the next line, maybe the next function. We moved on to chat, asking questions about our code. Everybody started doing vibe coding sometime last year, but now we're starting to see kind of an early adopter phase of what we've been calling frontier development.

**0:58** · And completely and totally based on my own experience, I've really only felt maybe 10 to 20% more productive with all of these phases that have come before.

### 사내 파일럿에서 실제로 측정한 핵심 지표

**1:10** · But now, inside of Amazon, we've been running pilots with different teams across the company, and we have been seeing a median of 4.5x productivity improvement, and sometimes more than 10x. So, something has really changed here now that we're seeing these step function improvements in productivity.

**1:28** · And I like to define what we've been calling frontier developers inside of Amazon by three behaviors that I've been seeing. One is hands-off coding. Frontier developers write maybe 1 to 2% of the code that they produce. The rest is agents.

**1:47** · The second is that they interact with their agents infrequently. They'll aim to get their coding assistant to run for up to hours at a time without their intervention.

**1:58** · And third is that they minimize idle time. These frontier developers tend to run multiple agents in parallel churning through a backlog of tasks.

**2:09** · The first time that I saw a frontier developer team was the bedrock mantel team. Bedrock is our model hosting service hosts LLMs like Claude and GPT. And sometime last year, we knew or I say we but the bedrock team knew that they were going to need to build a new inference data plane. But they had estimated it at 30 people over 18 months.

### 30명이 18개월 할 일을 6명이 76일 만에 끝낸 비결

**2:37** · This is a big big service and it was going to take time to build the new one, migrate customers over, migrate models over. They decided to take a step back. They took six people and they built it in 76 days with Kiro.

**2:53** · So this was a huge achievement. This was the first time we've we'd seen anything of the kind inside of Amazon. So this was truly the pathfinder team that proved that it was possible to get up to 20x improvement. Now they looked at commits and I'll talk about a couple of other ways that we are measuring productivity improvements.

**3:15** · But there was one problem with this story which was that yes, it was built with six people. It was built with some of the top engineers literally in the company including two distinguished engineers. So this was not just any team of six people. These were experts in distributed systems, experts at LLMs and their architecture.

### 최고 엔지니어 6명의 성공을 일반 팀에 적용하기 어려운 이유

**3:38** · So this the story was amazing and it kind of spread like wildfire across the Amazon but it was also very unachievable for a lot of teams. There were a lot of questions about can this actually be reproduced on another team?

**3:53** · So another experiment that I want to talk about is an experimental sprint that was done in the Prime Video organization.

**4:01** · They took a 10-day sprint and they did an experiment where they put, again, six engineers in a room and they let them go wild with Kiro.

**4:11** · They brought down the project delivery time estimate from what was going to be 90 weeks down to 24 based on all of the progress they had made in this 10-day sprint.

**4:23** · And they they looked at their commit history and they looked at what did they used to do prior to this 10-day sprint and how many commits did they produce just in this 10 days.

**4:35** · And so, this sprint really proved that we can achieve, again, at least something close to what the Bedrock Mantle team had had achieved with a different set of engineers.

### 프라임 비디오의 10일 스프린트와 숨은 조건들

**4:48** · But again, there was a challenge with this story, which was it was six engineers in a room, but they had no on-call duties, limited meetings, very few distractions, which we all know are regular in the lives of an engineer.

**5:04** · And the senior engineer on the team had spent the previous 3 weeks creating very detailed, small, well-scoped tasks with detailed requirements for these six engineers to just go churn on for those 2 weeks.

**5:19** · So, this was again not necessarily real life. This was a structured sprint, a a point in time that they were able to achieve this. But again, the question is is this achievable on real teams, on day-to-day work?

**5:36** · So, Amazon stores, which encompasses amazon.com, all of our retail websites, as well as our physical stores, did a more structured pilot. They watched 50 teams that were totally normal, normal distribution of early career folks, mid-career, senior engineers, and that worked on existing systems. Nothing greenfield like the Mantle team got to build from the ground up, but existing systems with existing code bases.

### 평범한 50개 팀을 관찰하며 발견한 극명한 격차

**6:06** · And they they watched them for the better part of last year, and they found something super interesting.

**6:14** · They found that there was a big difference in the productivity gains that they saw between half of the teams and the other half.

**6:22** · And in this case, they used a productivity metric of deployment velocity to production. So, not just commits, how many commits are they producing, but how quickly are we getting changes out to customers? How How quickly are we able to ship things?

**6:38** · And they saw that for half of the teams, they achieved less than 3x increase.

**6:43** · And what they found that was the difference between seeing less than 3x productivity increase, these teams that saw a median of 4.5x, and and in some cases more than 10, was how they used the tools. 90% of these teams use Kiro among other internal tools that we have. And what they found was it wasn't about the tools, it was about the way that they worked.

### 같은 도구를 쓰는데 성과가 갈린 진짜 이유

**7:07** · The teams that achieved step function improvements intentionally changed the way that they worked, and the others simply kind of sprinkled Kiro and some of the other tools that we have on top of their existing way of working.

**7:21** · And for me at least, this was the big aha moment. That why I hadn't been feeling potentially the massive gains that product that in in productivity that AI has promised, it's about changing the way that we work.

**7:37** · So, across this pilot, they went and interviewed But, teams that were involved in the pilot as well as some of these other teams on the bedrock mantel team, on uh Prime Video, and they found five habits. And and I use the word habits very specifically because again, it's not about that one sprint. It's about doing this day-to-day. And it And what they found when they interviewed with these teams was that it really was habits that they had to build day-to-day. When we change our way of working, it's it's hard to build these habits.

### 습관 1. 에이전트 컨텍스트에 아낌없이 투자하기

**8:08** · It takes time to build these habits. So, let's go through each of these one by one.

**8:14** · Habit number one is investing in agent context. We have a lot of stuff in our head. We tend to transfer all of that stuff in our head to other people through Slack conversations, through onboarding mentors, things like that, through code reviews, through stand-ups and sprint planning, and they had to write all of that down. And the habit that they built was every time the agent makes a mistake or does something not the way that you would have done it, what am I missing in my skills files?

**8:45** · What am I missing in my steering files that the agent needed?

**8:49** · But then, as we know, across last year, we saw leaps and bounds in models' abilities and their behaviors. Uh the Sonnet 3.7 in the middle of last year had a lot of quirks that we had to put a lot of do nots in our uh in our steering files, and now we don't have to do that as much with Opus 4.5 last November, and then we've had 6 months more than 6 months of improvements since then uh with all of the new versions of models that have come out since then.

### 모델이 발전할수록 규칙을 과감히 가지치기하기

**9:17** · And so, the question, the new habit again is do I still need this in my steering files, or is this just bloating context?

**9:26** · The second one is slowing down to speed up. In almost every team that was interviewed, they reported that their productivity actually went down as they intentionally adopted a new way of working.

**9:40** · That's counterintuitive, right? You have to do intentional engineering work before you're going to see that hockey stick curve in productivity improvement.

**9:50** · Because we have to do real work in our code bases first for agents to be successful there, especially in brownfield existing code bases.

**9:58** · So they had to build that agent context up. They had to improve existing tools error messages so that the model knew what was going on when it failed. They built new tools, new MCP servers for helping that model to actually get done what it needed to get done.

**10:14** · A lot of teams ended up restructuring their code base so that agents could actually navigate it more easily. And I've even seen drastic changes like changing the programming language of the code base.

### 습관 2. 더 빨라지기 위해 먼저 속도를 늦추기

**10:25** · Um often I've seen teams struggle with Python, with JavaScript because they're untyped languages. It's hard to test.

**10:33** · There's no compiler errors. So the model kind of guesses and give it gives it back to you. And so I've seen teams moving to TypeScript. Um Rust has become very popular inside of Amazon. The compiler gives great error messages.

**10:48** · Um you don't have to do that, but I've seen a lot of teams making those intentional changes for the productivity gains that they're able to see.

**10:57** · The third one is feeding a agents, not babysitting agents. And for me, this was one of those aha moments of why we're seeing this step function improvement in productivity.

**11:08** · If you are vibe coding, if you are having a back-and-forth conversation with your agent all day long, of course you're not going to see four to five x productivity improvements because you are in the loop the entire time. You're probably sitting there for 30 seconds to a minute waiting for it to generate code and come back to you with with the code to review.

**11:32** · If you're sitting there waiting for it, then you can't go off and do other stuff. It's really difficult to run agents in parallel. It's very difficult to get to to clone yourself into multiple agents. And so, if your conversations look a bit like this on the left, then you're babysitting that agent.

**11:51** · As opposed to the right side where you're feeding it what it needs to do and how it can self-validate. And that's really the key so that agents can self-correct and only come back to you when it meets a certain quality bar, when it when it actually runs and compiles and passes tests, when it's testable, when it it actually has high coverage.

**12:11** · And of course, the next level is put all of this content into your steering files so it does it every time without you having to prompt it.

**12:21** · The fourth habit is to make intent explicit.

**12:25** · At Amazon, we practice a lot of spectrum and development. We've built that into the Kiro product, and so it's very natural for Amazon engineers to adopt it in Kiro.

**12:35** · Um what what I've typically seen with five coding as opposed to frontier engineering is giving a very high-level prompt, letting the agent generate a ton of code, and \[snorts\] then having a back-and-forth conversation saying, "Oh, that's not really what I meant. That you haven't you haven't exactly gotten the the requirements right. No, I didn't actually want to build it that way.

### 습관 3. 에이전트를 돌보지 말고 먹이를 주기

**13:00** · Here's a technical design."

**13:02** · And it is less I find less productive to iterate with the agent on code when the intent itself was incorrect.

**13:11** · So, uh often will have will I'll see Amazon engineers go through this process for for ambiguous complex features of writing the specification. And in Kiro, of course, you don't have to write this whole specification. You can have the model generate it, but it's a lot easier to to iterate with the model in kind of a back-and-forth conversation about a document than it is about code that's code changes that are spread across a code base.

**13:41** · The fifth one is shift testing left. One of the keys here is to give the agent that fast feedback loop.

### 습관 4. 코드를 짜기 전에 의도를 명확히 문서화하기

**13:49** · Because that's what lets it go off for hours at a time and self-correct. The agent is going to make mistakes, and that's fine. But if you give it the right signals, it can self-correct, and it can spend a while doing that.

**14:04** · So, I've seen teams adding linters, adding unit tests, integration tests, performance tests, security tests. These are all things we all know we should have been doing all along. This is good engineering hygiene and practices, but now the ROI is, I think, finally high enough for actually us to actually invest in it. Um one thing that I've been seeing a lot of teams do is mock out services.

**14:27** · Often with integration tests, we would test kind of end-to-end an entire system, including live services, but we've been investing a lot in in mock services that run entirely locally with deterministic responses because it lets the agent do everything locally.

**14:44** · Um doing everything on your laptop without having to spin up a bunch of other services and and connect to cloud services makes everything a lot faster because the the more that your agent can get fast feedback means the more loops that it can can do, and the more productive your own agent can be.

### 습관 5. 로컬 목(Mock)으로 테스트를 개발 앞단으로 당기기

**15:07** · So, across all of these, these are some of the habits we've seen, but of course I would be remiss if I would tell you if you adopt all of these habits, you will achieve nirvana. You will be the most productive engineering organization uh the world has ever seen. Things are still hard. We are still very much in an early adopter phase, and teams are still figuring it out.

**15:31** · So, one thing that we've been seeing across our teams just organizationally is the risk of burnout. Um I did not coin this term. I forget who did it at what conference, but FOMAT is real.

**15:43** · We've been seeing engineers staying up late late at night um trying to get that perfect prompt that's going to make their agent run for hours overnight so that they wake up in the morning with a code change ready.

**15:55** · Uh the cognitive load increases as you run these multiple agents in parallel.

**16:01** · You're constantly shifting between terminal tabs.

### 프론티어 개발의 복병: 번아웃, FOMO, 인지적 부하

**16:04** · And then we do see that reviewing AI output is often harder for some than than actually writing it, especially early in career. Uh senior engineers have all have already spent a large portion of their career reviewing others' code.

**16:20** · But early career engineers don't have that muscle yet, and so reviewing it can can feel like a lot more cognitive load uh than they're used to in actually writing it.

**16:32** · The other one is organizational change.

**16:35** · So, it's already hard to change the way we work as engineers. The way that we spend our entire day completely changes when we're frontier engineers. But also organizations have to change to enable frontier engineering teams.

**16:50** · Um one that I've seen very commonly is accepting slowing down to speed up.

**16:56** · And I've been guilty of this myself. My my fellow leaders have been guilty of of this of saying, "Well, you have the AI tools now, and the models are so amazing now.

**17:06** · Why are you not going faster?"

**17:09** · Um and that's because you have to take those 2 months to invest in your code base, to figure out the best practices for your team, to make hard habit changes on your team.

### 엔지니어뿐만 아니라 조직 전체가 바뀌어야 하는 이유

**17:22** · Um and and if you're constantly expecting shipping features every month because now we have these amazing models and we're seeing um all of these these companies on X saying how they're shipping 20 PRs a day, um we have to slow down to speed up.

**17:41** · The second one is actually going too broad in the organization too fast. I think that if we had um expected all teams in massive organizations to be frontier teams immediately, we would not have had the learnings that we had from the Pathfinder, from the from the sprint experiment, from the pilot uh teams within Amazon. And now the challenge for us is how do we scale it out?

**18:07** · And that's what 2026 is about for Amazon is how do we scale this out to more and more teams, to the next uh 2,000 teams instead of uh 50 teams. Um and so I think that when you roll it out too quickly, you have a lot of teams who don't know what they're doing. You haven't had time to find the best practices for your own organizations, the the context that your organization needs.

**18:33** · And the last one is that you're going to find new bottlenecks.

**18:36** · Previously, code writing code manually was the bottleneck. Um I find that within Amazon, we've found um the speed of decision-making becomes a new bottleneck. Um the more that you spend reviewing the decision to actually build a new product, the slower it is to build the product now because the code only takes one to two months to write.

**19:01** · Um all of the review processes associated with the launch of a product become the bottleneck. When it used to take 9 to 12 months to build a new product, it didn't matter so much in the in the overall wash of things, if it took 2 months to make the decision to build the product and then 2 months to approve the launch. But now, those are the bottlenecks. Those are the long pole. And so, you find all of these um all of these things that slow you down.

### 코딩이 빨라진 시대, 새로운 병목은 '의사결정 속도'

**19:31** · Often, I find that frontier engineering teams spend more time making decisions than they do writing code.

**19:38** · And so, the more that you can make fast decisions, especially ones that are easy to be reversed, the better.

**19:45** · So, my one big takeaway for for everyone here is that frontier engineering is about intentionally changing the way that you work. And that is difficult, that takes time, it is forming new habits and a new way of working.

**20:02** · And that goes across any engineering team as well as your organization. Um so, I encourage you to think about um how you're interacting with AI tools and how that can change to free yourself up from being in the loop.

**20:19** · Um thanks. I'm going to I'll hang out uh a little bit if anyone has questions in the back. Um but, thanks for the time today.
