---
title: "[한영자막] 평가 플랫폼 만들기가 생각보다 어려운 이유 — Braintrust"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=S3knIZq7jM8"
domain: "youtube.com"
language: "en"
description: "AI 에이전트 평가 플랫폼은 스프레드시트에 UI를 얹는 것만으로 완성되지 않습니다. Braintrust의 Hossein Niazmandi가 평가와 관측 가능성, 운영 데이터를 활용한 품질 개선 과정을 설명합니다.주요 포인트• 운영 투입 전 평가와 운영 중 관측 가능성이 모두 필요한..."
word_count: 2755
---

![](https://www.youtube.com/watch?v=S3knIZq7jM8)

AI 에이전트 평가 플랫폼은 스프레드시트에 UI를 얹는 것만으로 완성되지 않습니다. Braintrust의 Hossein Niazmandi가 평가와 관측 가능성, 운영 데이터를 활용한 품질 개선 과정을 설명합니다.주요 포인트• 운영 투입 전 평가와 운영 중 관측 가능성이 모두 필요한...

## Transcript

### Braintrust와 에이전트 품질

**0:00** · So, at a glance, Braintrust as a platform is focused around agent quality.

**0:09** · And the core idea is helping teams build and maintain confidence with the AI features or the AI agents that they're shipping.

### 평가와 관측 가능성

**0:18** · And there are two key pillars of agent quality.

**0:22** · The first is evals, which we talked about earlier. Evals is what you do before your agent reaches production.

**0:31** · This is when teams experiment, they test the behavior, and they build the confidence that they want to have before they ship to production.

**0:40** · The second pillar is observability.

**0:43** · Observability is once your agent is in production and is interfacing with real-life users, it's creating interactions, and the goal is to take that hypothesis that you built in your offline development process and then reinforce that in your production scenario through continuous monitoring.

**1:05** · Evals and observability are closely related to the same problem. One happens in production, the other one happens in development, and both is the understanding to improve agent quality.

**1:19** · Now, I won't spend much more time here.

**1:22** · Let me close that.

**1:24** · Let's talk about why we're here, which is why are evals important?

### 평가가 필요한 이유

**1:33** · You know, evals matter because LLMs by nature are non-deterministic, they are highly variable.

**1:40** · That variability is exactly what makes them so powerful. They can reason across many different domains, they can solve different kinds of problems, and they can handle a wide range of user needs.

**1:54** · But that same flexibility also creates risk.

**1:58** · Agents use LLM as their brain.

**2:02** · And agentic experiences are starting to become the primary way in which users will interact with companies.

**2:10** · So teams need confidence in their agents that they will behave reliably and produce the outcomes that they expect.

**2:19** · And without evals, companies face real risks.

**2:24** · Brand Brands become a risk if there's inconsistent behaviors, compliance if the agent says or does the wrong thing.

**2:35** · And there's a cost and maintenance risk if the systems are hard or unreliable to debug or control.

**2:44** · The goal of evals is to reduce that uncertainty before launch so that customers have a good experience and the agents behave the way that you expect them to.

### 스프레드시트만으로 충분할까요?

**2:57** · So you might be thinking, "Okay, well, evals is just a UI on a spreadsheet, right?"

**3:04** · And I guess I should ask the audience, just show of hands, how many of you have run evals and log the results into a spreadsheet? Has that happened? Okay, I see one or two. So there's no shame in that, by the way. It's actually the a good first step.

**3:20** · The important thing is that teams acknowledge that this is a real problem and they need a way to understand how agents behave based on different inputs.

**3:30** · At the simplest level, an eval system tests against uh it has three different kind of criteria. It has a way to execute agents against test inputs.

**3:43** · Second, a way to view the outputs or the scores, even if those are being logged in a spreadsheet. And third, a set of test inputs or examples that can invoke the agent.

**3:55** · An input example is whatever information is needed to start the agent run.

**4:02** · It could be a prompt, a request, or context that causes the agent to act.

**4:08** · Now, spreadsheet-based evals are not wrong.

**4:13** · However, they're often the first step for a useful version of eval workflow.

### 빙산 아래의 복잡성

**4:19** · But, of course, as you can imagine, there's more to the iceberg than just what we just talked about.

**4:26** · And if evals were only, you know, run the agent, view the output, and then score it in a spreadsheet, this talk would be over right now.

**4:35** · But, there's a lot more that happens behind the scenes or underneath the iceberg.

**4:42** · There are many supporting teams that eventually need to build better data sets, scoring systems, review process, debugging tools, and the way to connect pre-production testing with production behavior.

**4:59** · We'll touch on some of these today, and anything I don't get to, you feel free to come up afterwards and we can chat about.

**5:07** · And this is where things start to get complicated. The underlying technology is complex. LLMs are not simply deterministic.

**5:16** · Agent quality is a multi-persona problem. It's not just software engineers and AI engineers. There are PMs who used to build PRDs that are now running evals. There are SMEs who have the domain expertise of the product that you're building.

**5:32** · And evals themselves are just one part of the development and operating workflow.

**5:40** · And gone are the days where you build once with unit tests and regression tests, you ship to production, and you don't think about it. Evals are a way for you to continue hill climbing against one target, which is agent quality.

**5:55** · So, let's talk about the different stages of the the eval platforms that we see.

### 품질 개선 순환

**6:02** · And before we do that, this is the North Star for many teams. They want to build the improvement loop, which is I have a feature or application that's in production. I can observe the failure modes that happen based on dimensions that I define. I want to be able to grab those failure modes and create test cases so that I can iterate offline. So, I can improve my agent quality without introducing new regressions.

**6:28** · And then you continue iterating over time because just like in classical ML, drift becomes a real thing. The way users interact with your agents will change over time.

### 1단계: 스프레드시트

**6:41** · The way you build your agents will change over time.

**6:45** · So, what does phase one look like? There were some hands that were raised around spreadsheets and it is not There's nothing to be shameful about. This is where many people start.

**6:57** · And as the basic setup is pretty simple.

**7:00** · It's a for loop with a set of input examples and a way to execute the agent.

**7:07** · And with that, you can run the same examples that you tweak and see how the agent responds with the outputs over time.

**7:15** · The bis biggest advantage is accessibility and time.

**7:18** · You can start this with basically zero barrier to entry.

**7:23** · But the re the returns diminish pretty quickly. At this stage, you're pretty much only documenting.

**7:29** · You can't really do true experimentation and let alone do any kind type of analysis over time.

**7:38** · Common limitations are analytics are hard, they're manual, human scoring is valuable but difficult to do, collaboration is very weak, \[snorts\] and domain experts are usually boxed out of these type of results.

**7:54** · So, again, spreadsheets are a great starting place, but difficult to evolve.

**8:00** · Then someone, usually a product engineer, you know, they see this problem and they think, "Okay, I can build a nice UI, a bespoke UI to help serve to solve this problem."

### 2단계: 맞춤 UI

**8:13** · And while it might be nice at a glance, um it helps you bring in the different personas that you would otherwise not have access to. This allows PMs to now kind of get into the loop of doing evals.

**8:30** · But the limitation that you might have thought about, it continues, that the documentation, the review process, though it might visually look nicer, still collaboration becomes difficult.

**8:42** · And though iteration cycles become quicker, it is still not easy for users to persist that data and do long horizon analytics on.

**8:54** · Still just a reporting tool.

### 3단계: 함께하는 실험

**8:58** · Then the next evolution becomes, "Hey, I want my non-technical users to have an interface, where not that they just log the results, but they should be able to experiment. I want to be able to tweak a system prompt. I want to change the underlying model. I want to iterate on some parameter values."

**9:18** · So, being able to do this type of side-by-side comparison becomes the next evolution of the eval cycle that we see.

### 4단계: 운영 환경 연결

**9:26** · But there's still one primary gap, and that is that the test cases in which you use to do these kind of comparisons are still a curated set that arise in your offline e-vals. But, what happens in production? I've done my iterations here. I have a good idea of what I can expect to happen in prod, but once I ship it to the production, I'm operating in the blind. So, I have no idea what steps my agent is taking and when those failures are actually happening in my live environment.

**10:00** · And when we think kind of going back to the flywheel, when we think about what are the best systems that enable this?

**10:07** · Well, you should be able to, starting at the top, observe the failure modes, log every input output, every step of your trace execution that your agent takes, analyze, understand what went wrong. You create the dimensions of failure and success because you know the outcomes.

**10:24** · Then, grabbing those failure modes, those different scenarios where your users had poor interactions, and creating e-vals in them in your offline process, iterating on them so you can create the improvements without developing new regressions, and then shipping to production and hill climbing against this.

**10:45** · And when you think about the final outcome of this, well, you get teams that are building the flywheel.

### 크고 복잡한 에이전트 트레이스

**10:54** · You get that entire development cycle inside of your platform, but then the problem becomes you have to you have to maintain it. You own this this product that you've built.

**11:05** · And especially, this is easy to do when it comes to smaller scale or POC and demo environments, but agent traces are nasty. They are semi-structured JSON. In some cases, we see teams that are logging a movie's worth of data in each interaction, hundreds of megabytes. So, being able to query that type of data can be difficult.

**11:30** · And your typical cloud data warehouses kind of collapse under this type of volume and load.

**11:38** · And this is the same problem that we ran into. I won't spend much time talking about Brain Trust, but when you have production traces coming in, you want to be able to query that data in real time as it lands in there.

**11:54** · Because if your users are having poor experiences, you want to be able to know in real time what is happening, why are they having these poor experiences, and how can I remedy that as soon as possible.

**12:06** · You also want to be able to do long-running queries. If you think about being able to fine-tune your your agent experience, or even have humans who are doing alignment by annotating your your judges' outcomes.

**12:23** · Two different workloads.

### BTQL로 데이터 쿼리하기

**12:25** · So, we built an abstraction layer called BTQL, which is a another form of complexity, because you want an interface for people to be able to query that data.

**12:37** · So, it's not necessarily that it's just a UI or UX problem, but building an eval platform truly becomes a systems problem.

**12:50** · And there are novel set of issues when the ChatGPT boom happened a few years ago, I need to do real-time ingest.

**12:59** · I have huge payloads that are tens of megabytes, hundreds of megabytes in size sometimes, compared to traditional heartbeat observability, which are just kilobytes in size.

**13:11** · The structure and the shape of the data is different. Having deeply nested semi-structured full text is difficult to query, and the read patterns are different as well. You want to be able to aggregate in large volumes, but also be able to do snapshots of of of in-time data.

**13:34** · And building the right system should allow you to not only empower the AI engineer, but also the PMs, as well as the SMEs. And more recently, we've seen that agents have become a first-class citizen of these eval platforms, where you want to be able to use natural language in a headless experience, where you can tell your coding agent of choice, "Find me all traces in the last 24 hours where the user had a poor experience.

### 에이전트가 평가를 실행한다면

**14:08** · Run the evals for me." And because these coding agents have access to all of your underlying infrastructure and your code base, they become the mechanism to run the evals and log those results.

**14:21** · And then it becomes a question of like, "So so what? Why is this uh Why is this important?"

**14:28** · Well, the goal is everything that I've shown you so far, it requires the humans, the the engineer, the PM, to be deeply involved in this process.

**14:41** · And it can be laborious at times.

**14:45** · Our Braintrust, the way we think about this, is we want to help you operate at scale.

**14:52** · Rather than you having to think about these dimensions and of success and failure for your AI agent, Braintrust can surface these insights automatically. Because we log your tracing data into our platform, we can run inference on them, and we can tell you the unknown unknowns. Hey, what are what are scenarios in when my agent is failing silently? Or what are scenarios that my users are experiencing frustration by prompting my agent for the same request over and over again.

### 몰랐던 문제 발견하기

**15:26** · And it's a lot of things that we didn't talk about. Things like the underlying database that powers it, or having to build our back into the system to manage controls and permissions, or data masking. You know, each one of these features proves that this is not just a UI and a spreadsheet, but rather it is a a systems problem that powers it.

### 에이전트가 반복하고 사람이 결정합니다

**15:49** · And as we think about the evolution of of the improvement loop, I said this earlier where humans were doing the improvement loop, and now we see coding agents where they could iteratively make changes and suggest what kind of improvements you should be making to your application. And ultimately, the human's responsibility is to review the outcome.

**16:11** · If I have different iterations of these e-vals that are run by my coding agent, I can look at the outcome and make the decision of which version of it is the best for what I want to ship to production.
