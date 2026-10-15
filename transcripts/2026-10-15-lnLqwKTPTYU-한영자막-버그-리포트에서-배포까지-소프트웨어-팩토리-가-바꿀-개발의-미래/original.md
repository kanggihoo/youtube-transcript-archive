---
title: "[한영자막] 버그 리포트에서 배포까지: '소프트웨어 팩토리'가 바꿀 개발의 미래"
author: "Tech Bridge"
site: "YouTube"
published: 2026-10-15T02:00:03-07:00
source: "https://www.youtube.com/watch?v=lnLqwKTPTYU"
domain: "youtube.com"
language: "en"
description: "버그 리포트와 사용자 피드백이 들어오는 순간 프로덕션 배포 코드까지 자동으로 완성되는 '소프트웨어 팩토리(Software Factory)'의 개념과 실전 구축 원칙을 Factory의 Davis Palmie가 명쾌하게 제시합니다.단순히 코드를 타이핑하던 시대에서 수많은 자율 에이전트..."
word_count: 2689
---

![](https://www.youtube.com/watch?v=lnLqwKTPTYU)

## Transcript

### 소프트웨어 팩토리의 개요

**0:00** · Hey folks, I'm Davis Palmy, a member of technical staff here at factory. Uh before this, I co-ounded Lummetric, which was an agent platform for investment teams that we took through Y Combinator and was acquired by Factory and prior to that I was a engineering lead for Slalom's innovation lab. So I've seen AI deployments both across large enterprises and more AI native orgs.

**0:27** · With that in mind, today I'm going to be talking to you about the software factory and how you can move towards an autonomous system that translates input signals into production code.

**0:42** · So, first we've moved through three distinct eras of AI engineering. First, we had tab autocomplete, next token prediction, and the engineer was still firmly in the driver's seat.

### AI 엔지니어링의 세 가지 시대

**0:58** · Then AI could generate entire files and the software engineer became a bit of a discerning copy paster. Um, but they still heavily had control over the output of the AI. And then you had agents that were more tightly coupled with the code. They could gather their own context, call tools, and debug their own output. Now, autocomplete used to feel magical, and now at best it's it's a quaint thing we remember.

**1:25** · You want to look at the speed at which AI engineering is climbing the abstraction ladder from tokens to files to context now to entire systems.

### 추상화 사다리 오르기

**1:39** · Every shift you have here is an adjustment. But each move up the abstraction ladder has made engineers more valuable, not less.

**1:51** · And so now we're at a transformational point. Engineers are going from typing code to governing agents and eventually you'll organize those agents into a system. That's your software factory. So with this the engineer's role shifts to keeping guard rails tight, catching code drift and setting the highle priorities and direction.

### 코드 작성에서 에이전트 거버넌스로

**2:17** · But meanwhile, the system is ingesting input signals like bug reports or user feedback and outputting production code.

**2:30** · So if you have AI systems that are producing more code than humans, there are some big questions that everyone is rightly asking. First, how can I prevent massive cost overruns? We've all seen the headlines about Uber's CTO blowing through the year's AI budget by April, or Microsoft clawing back clawed code licenses to try and cut down on spend.

### 비용 폭증을 막는 방법

**2:58** · At Factory, you're not locked into a single model provider. And this means you unlock the entire spectrum of cost performance with LLMs.

**3:08** · You want the maximum uh cost efficiency and the minimum effectiveness necessary for each task.

**3:17** · As our CEO likes to say, uh if your kid needs a algebra tutor, you can definitely find someone cheaper than Albert Einstein.

### 최적의 모델 선택 전략

**3:27** · Second point, how can I ensure the best access to whatever model is top right now? Well, we think that having to back the right horse is a false choice. Um, especially with the increasing effectiveness of open source models.

**3:44** · We're strong proponents of being able to choose the right tool for the right job or even now have it dynamically routed.

**3:52** · Number three, what happens to software engineers? What does the future of software engineering look like? Well, the role is obviously evolving and the line between product and engineering is blurring.

### 소프트웨어 엔지니어의 미래

**4:07** · Engineers will now build and maintain the system that's responsible for building your production code and they'll set the highle direction for the software factory.

### 조직 구조의 변화

**4:19** · And lastly, how is this going to change the organization? Well, team boundaries are also starting to blur and context needs to flow seamlessly across these boundaries.

**4:32** · Information can't be siloed. That was true for humans, but it's especially true for AI agents. Everyone across all your teams will have a shared responsibility for the pillars of the software factory.

### 코딩은 결코 병목이 아니었다

**4:47** · Now, coding was the easy part. This actually was never the bottleneck. Your context is laid out in natural language.

**4:57** · I bet if you look at your real engineering metrics, what's the median time to review a PR? How long does it take you to reproduce user bug reports or go through and debug code?

**5:11** · Who keeps your docs current with every PR and who keeps it current with every strategy meeting? Who maintains your test suites? oftentimes the testing teams and the engineering teams and the product teams are each on their own continent. If you pull your dora metric, the time from code written to time in production, I would bet dwarfs the time actually making those engineering changes.

**5:37** · The real need you have today is cohesion across all of these surfaces. Right now, docs will go stale, dead code lingers, and there are so many layers of communications between your different teams.

**5:52** · Again, this is hard for human engineers, but it is especially more pronounced for agents.

**6:00** · The necessary undertaking to build your factory is to make sure the agents can bridge all of these services and understand the nuance within your organization.

### 소프트웨어 팩토리란 무엇인가

**6:11** · So this brings us to the software factory, which is the system of agents that will take you from input signal to production deployment.

**6:22** · Your agent's not just coding anymore.

**6:25** · It's taking on customer support, product, engineering, deployment ops, and many other roles. Across these pillars, your agent should be triaging incidents, making plans, creating and updating docs, actually executing the code, reviewing it, testing it, rolling it out, and then monitoring that release.

**6:50** · Now, that's obviously a ton of work, and you don't want to jump into that all at once. For one, it's too heavy of an undertaking, but for two, your teams will not have time to build trust in this system. You want to start with something narrow and verifiable like incident triage. Let your agent read a sentry alert, pull the traces in other context, and then post in Slack. But keep it so your engineers can review this and decide what to do.

### 작게 시작하기: 인시던트 분류

**7:22** · And as more correct diagnoses roll in and in from the agent, your team can start to build trust and an understanding of this pillar. So each step in the software factory needs careful ownership and monitoring before you even think about letting the the pipeline loop. But once you can tie the output of this system back to the input signal, that's when you unlock organizational self-improvement.

**7:55** · Now we feel pretty strongly that your software factory should have a few key principles.

### 원칙 1: 모델 애그노스틱

**8:02** · First, it should be model agnostic.

**8:05** · Obviously, different models excel at different tasks and with very different cost efficiencies.

**8:13** · We found, for instance, that you can achieve the same performance on code review with GPT 5.2 as with the latest Opus models, but at half the price. And now if you look at the open- source alternatives that can slash your cost down to 10 to 30x cheaper.

**8:31** · So at factory again you have the entire interplay of speed to task efficacy to cost. Not being locked into a single lab means you unlock the entire Pareetto frontier of LLMs.

**8:46** · Now number two your deployment model should be sovereign.

### 원칙 2: 주권적 배포

**8:52** · You shouldn't have to compromise on your security architecture or your policies to try and fit your AI deployment model in.

**9:01** · Now at factory you can choose your workspace and your deployment model. We support everything from fully managed to bring your own machine to entirely airgapped.

### 원칙 3: SDLC 전반의 통합

**9:12** · And number three, your software factory needs to be integrated across the SDLC.

**9:17** · These are no longer separate uncoupled concerns. Docs changing should inform your code and vice versa. Planning goals should inform what you test for, not however many communication layers there are between strategy, product, engineering, and your testing teams.

**9:38** · Each one of these pillars supports the software factory. And weakness in one means a weakness in the entire system.

### 실전 적용: AI 기반 엔지니어링

**9:48** · So tactically in an AI native or what does this look like? Well, we typically see it as the fusion and the incremental automation of many sub teams under the umbrella of one software factory.

**10:06** · Some really common patterns we see are triaging incoming signals like sentry alerts, having the agent make diagnosis before the human can even answer the page. Proactively testing security, scanning for secrets or vulnerabilities.

**10:26** · Creating, maintaining your tests, monitoring the ones that are becoming brittle or unneeded.

**10:33** · Again, keeping docs in sync with code.

**10:35** · keeping docs in sync with your different meeting channels and then the classic reviewing code, commenting on PRs, rollouts, monitoring releases.

**10:46** · And with the agent doing all of this, the human engineer's role shifts to responding to exercising judgment and correcting the AI in such a way that it can learn from these mistakes.

**11:00** · Now everything is transitive across sub teams. An improvement to one group means an improvement to the entire system.

### O(N)에서 O(1) 복잡도로의 축소

**11:10** · So why should your enterprise care about a software factory? Well, the larger and the more fragmented you are, the more you feel the linear pain of managing teams.

**11:24** · In tech terms, your software factory should take this pain from ON to O of one conservatively.

**11:32** · You can define your guardrails, your agents, your docs, testing policies, really governance just one time and then standardize it across the organization.

**11:46** · And this standard should make sure that everyone is pulled to the highest bar, not the lowest common denominator.

**11:55** · Now also if agents can move across these surfaces then they can hold that quality bar across teams without you having to linearly scale your time to manage each one. And if agents are moving across all these services then you have one place where context can be unified and you can have executive visibility into how the entire SDLC is performing.

**12:22** · Now, just like model agnosticism removes lock in, your agents should also be surface agnostic. They need to be highly available to your teams. Regardless of what tools they use, your teams should not have to compromise on their processes or their tooling to try and fit your AI provider in. At Factory, we have agents available everywhere from remote machines to the CLI to Slack, any tool your teams use.

### 모든 도구에 연결되는 에이전트

**12:52** · And even though humans and agents may use different services, everything should share the same underlying harness and context.

**13:04** · So the undertaking of building the factory will expose tribal knowledge, manual processes, and outdated info.

**13:16** · Unblocking these is not only going to help your agents, but it's also going to help your engineering teams.

### 에이전트 준비도 8대 기둥

**13:23** · At factory, we have the concept of agent readiness and we evaluate this based on eight pillars.

**13:30** · The first is validation. Do you have guard rails like llinters and formatterers in place? Then your build system. Are your build commands and CI well documented?

**13:43** · Feedback loops. You have unit and integration tests tight and you have docs like readmes, agents.mmd files.

**13:53** · Are your dev environments cleanly reproducible such that an agent can use them? Is your code modular with clear boundaries and rules against sprawl?

**14:05** · Do you have observability? How long does it take you to find out why something went wrong? and are you proactively security scanning so that you don't have to worry about leaked secrets or vulnerabilities. Basically, the key takeaway here is that if your agents and your human engineers are going to walk the same roads, paving them well is doubly useful.

### 거버넌스와 점진적 롤아웃

**14:32** · Now, you can't govern what you can't see. And that's true for agents and human engineers. You can start with this agent readiness assessment, but no matter what, your engineers must monitor agent performance and control behavior.

**14:50** · At factory, every action is auditable.

**14:53** · It operates under your standards with role-based access control and least privilege. For example, your teams that are building this software factory need to first build trust and understanding.

**15:07** · That's why you should roll this out incrementally.

**15:11** · You want to automate the individual pillars first before you turn this system into a loop.

### 방향을 결정하는 인간의 역할

**15:18** · And again, precise execution does not prevent poor design. It never has. You still heavily need humans in the loop for architecture, for strategy, and for setting direction. Engineers will not be replaced. But judgment and prioritization now beat mechanical implementation skill.

**15:45** · Agents won't be able to handle everything. There will be guardrails to tighten code that drifts. Humans need to stand as validation gates in this factory. But just like we don't have to feed punch cards into the machine anymore, code does not have to be written by hand.

**16:04** · Your team should be able to set the strategy and their risk parameters and then let agents execute.

**16:12** · And knowing if your agents are executing well comes down to measuring the right things. Basically, you want to measure outcomes, not tokens.

### 토큰이 아닌 성과를 측정하라

**16:24** · Lines of code and tokens generated are gameable metrics. These are not actually associated with outcomes.

**16:32** · Token leaderboards at big companies just encourage proflegate spending. It's goodart's law in real time. If you decide to measure token usage, engineers are going to optimize for token usage and then it's no longer a good metric.

**16:50** · It's not about who spends the most on tokens. It's about who can get the highest leverage outcomes from that spend.

### 실제로 중요한 핵심 지표들

**16:59** · Some metrics that we like at factory are signal to production time, human intervention count, median time to repair, shelf life of code, and cost per PR. These are real tangible outcomes.

**17:18** · So agent readiness is really a precursor to effective engineering, whether it's an agent or a human that ends up in that system.

**17:29** · Your agents need the exact same careful governance as your engineers, tooling, access levels, systems for review. Don't just turn them loose in your codebase.

**17:44** · And don't token max. Measure what actually matters.

**17:49** · Your end users don't care about how much you're spending on AI. They care about feeling the dramatic improvements that will come from your software factory.

**17:59** · Thank you.
