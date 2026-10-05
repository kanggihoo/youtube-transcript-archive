---
title: "[한영자막] 스스로 개선되는 AI 에이전트는 어떻게 만들었을까요? | Weights & Biases"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=kJj9sHyiRHI"
domain: "youtube.com"
language: "en"
description: "Weights & Biases의 AI 에이전트 ARIA가 프로덕션 실행 기록(Trace)을 분석해 스스로 버그를 찾고 수정하며 성장하는 자율 개선 시스템의 구축 방법과 평가 프레임워크를 소개합니다.📌 주요 내용:• 프로덕션 트레이스(Trace)를 오프라인 평가(Eval) 태스크로..."
word_count: 4428
---

![](https://www.youtube.com/watch?v=kJj9sHyiRHI)

Weights & Biases의 AI 에이전트 ARIA가 프로덕션 실행 기록(Trace)을 분석해 스스로 버그를 찾고 수정하며 성장하는 자율 개선 시스템의 구축 방법과 평가 프레임워크를 소개합니다.📌 주요 내용:• 프로덕션 트레이스(Trace)를 오프라인 평가(Eval) 태스크로...

## Transcript

### 도입: 에이전트 ARIA 구축

**0:00** · Okay. Hello. Thank you for showing up.

**0:03** · Uh my name is Zuban Isaola. Uh I work at Weights and Biases. I'm building the Arya agent which is something that we released to general availability on Monday. You might have seen Tim's talk uh one of the pe my peers at Weights and Biases who I work with uh on the main stage yesterday. So I'm going to do a little bit of a deep dive into how we evaluate and build the Arya agent uh and in particular uh the evaluation framework that we use and how we use Arya to sort of self-reinforce itself in the loop of doing research for itself uh and talk about some weights and biases things.

**0:32** · So yeah, this is a rip from some of the slides that I presented at Nurup's but uh I think there's some interesting things about like using uh agentic harnesses. I I imagine most people in the audience or at this conference are all excited to build agent harnesses or maybe use cloud code with skills in a variety of different packages. But there's, you know, pretty strong differences in the way that you package these AI agents if you use them with different tool calls, etc. on a variety of different benchmarks. And so inspired by that, we're doing some work at Weights and Biases to build our own agent harness to do research for you in the Weights and Bices platform.

### 자체 에이전트 하네스를 구축하는 이유

**1:00** · Um, you know, and then there's probably some other things that I don't need to convince people of as to like why we want software agents and why a software harness as opposed to like just letting the, you know, LLM run free and call tools or whatever else. Uh, but that's not for here. Uh, but one big problem presents itself, which is basically the thing that I go to bed thinking about every day, which is, you know, benchmarks, evaluations, the agents, and how you configure them are all covariant.

### 벤치마크, 평가, 에이전트의 공변성 문제

**1:24** · And so like if you're trying to apply principled evaluations to any sort of system that dynamically changes, you need to have good measurement to see how the system actually performs and you really want to see how the system performs in both your production environment and your offline environment. Uh you know if you're RL pilled from a long time ago you might think about like the sim tore gap uh which is like basically how do we translate simulation environments into the real world environments etc.

**1:46** · Uh and so there's sort of two things that I'll talk about uh and then give a live demo of which is weights and biases weave for agents which is basically in my opinion at least the best observability platform for both production and offline tracing of agents. So I use it predominantly from the offline side where I build simulation environments, run the Arya agent over them and then track them in weave and my entire team does that as well. So I can see all of our performance in offline metrics.

### 프로덕션 및 오프라인 트레이싱을 위한 Weave

**2:11** · And then the other half of my team works on the production side of things deploying the agent logging the same things in the exact same format so that I can rip those production traces into our environments and then hill climb on them or resolve our errors. And it's a pretty nice flywheel. And then obviously the other thing that I'm here to talk about is Arya, the weights and bices agent itself, which is basically the thing that we use to now build itself because it's sophisticated enough that it can actually do that offline hill climbing uh by itself. So I'm going to just jump into a super quick live demo and then we'll talk through some other slides uh about how we built the offline evaluation framework.

### 라이브 데모: ARIA의 자체 자동 연구 수행

**2:42** · So if you hop into the weights and biases platform, this is a demo project that I called Arya Researches Arya here. Uh and I'm just going to chat to Arya and ask it to basically do auto research for itself.

**2:53** · And so this is a relatively long prompt that I had it generate in actually one of these other sessions. Um but if we look at it, what it's going to do is it's going to take my codebase that is logged as a weights and biases artifact.

**3:03** · Uh which we can see over here. It's going to launch training jobs uh against this codebase which is our offline evaluation framework. It's going to review production traces that we have add new tasks to hill climb against uh and do stuff like that. And so you know this thing's going to cook for a little bit. The evaluations take a little bit of time to run. And so we'll see Arya uh basically try to write a new variant for itself. The other side of this equation, right, is the production side of things.

### 프로덕션 트레이스를 평가 태스크로 전환하기

**3:27** · And so this is a sanitized view of internal customer traces or internal traces on Arya. So we'll actually see very quickly uh that Arya will actually pop up here the exact conversation that we're running um right here. But in this trace, I'm going to use this as an opportunity to take one of these production traces that are logged in weave and put them into my offline evaluation framework so that I can hill climb on them. And so I'm just going to do that live. We'll ask, you know, for a relatively simple task. Um, this is going to be a little interesting because it's going to be slightly se self-reerential, but I'll go here.

**3:55** · I'll pop up in a new Arya tab and I'll just ask it, hey, take this trace, log it into our offline evals. I don't think spelling matters too much. And then run the candidate and production agent on it.

**4:13** · And we'll have it cook for that as well.

**4:14** · And we'll see those evaluations get logged into Weave as they're running.

**4:17** · Um, so that's basically the tight version of what I do basically every day, which is look at production traces in our weights and biases weave platform, run evaluations in our codebase, which is our offline evaluation sandbox, uh, and then deploy new versions of the agent uh, and work with my team to do that. And if we look at our production project, this is, you know, a bunch of traces that we have over the last seven weeks of our nightly uh, like CI jobs that run where we evaluate the agent in its production format and other candidate variants that we cut.

### 야간 CI 평가 파이프라인

**4:42** · And so we can see our relative performance over time. uh like you know for a while the CI broke we had Arya have to fix itself last night but you know we're getting about like 66% performance on some of the tasks etc and so we have a variety of tasks um that we train the agent to do and so now I'm just going to jump into a material version of the presentation to go a little bit deeper into the theory behind

### 시뮬레이션 환경 구축하기

**5:02** · building a simulation environment for offline hill climbing for basically building a software agent where traditionally you might expect that you are really robust if you're doing reinforcement learning but I mostly prompt engineer these days because the sophisticated models are relatively good at performing tasks at weights and biases and so we're really working on building skills for the software agent more than doing reinforcement learning but I think applying the same methodology to how you build the agent so the same robustness of how you simulate environments uh is really helpful for our work so we benchmark a

**5:30** · bite-wise identical version of the agent in our production environment and our simulated environment there's a lot of text on these slides that I had claude sort of slop out uh but you know we'll just go for the graphics um so I think the exciting part here is that both using the logging framework from weave as well as just in the way that we've design the system, our research and production code are exactly the same.

### 프로덕션과 연구 환경의 동일한 에이전트 유지

**5:47** · And in fact, there's like a 4-hour sync job that happens between production to our research environment so that we don't get any drift when you, you know, researchers are cutting new variants of the agent, new skills, etc. and doing their hill climbing. And so we have this nice little tight loop that basically mirror each other on two sides of the stack from our deployment layer and our offline benchmarking layer. Uh, and then, you know, we expose internally as a team a bunch of run eval commands to generate score trajectories.

**6:09** · And so that's what we were talking about with this like large project where we have a bunch of trajectory examples where if I click into one of these, you know, we can see like our relative scores of a variety of different metrics when it loads. Um, but essentially what we get is these super robust traces of the agent rolling out over time. And there's a lot of signal to reap from this. And I think the thesis behind this is generate a ton of traces and then decide what you're going to do with said ton of traces as you try to figure out how the agent performs. you're measuring emergent properties and then trying to align the agent in particular directions.

### 대규모 트레이스 수집과 패턴 분석

**6:40** · And so the two ways that that happens is I look manually at the tasks or like we would do in that first example I would ask Arya to review the roll out that it generated for itself or review some other rollout and decide what went wrong or what went well and try to reinforce that behavior through prompting or anything else. Uh and then you know the actual method behind the agent is relatively simple. We want to test on a variety of the different models both models offered through coreweave inference models offered through you know the foundation model players etc.

### 모델 독립적 하네스와 YAML 기반 변형 관리

**7:07** · And so we define you know a relatively agnostic software stack for how we treat compaction and how we prepare context and how we assemble UI payloads etc. And the again mental pattern behind this is to really try to make it very very simple to have lots of mutations of the exact same configuration. You want to basically YAML define different configurations of the agent to sort of get multiple parallel uh variants and then test them all and see what happens because ultimately you can have insight into how to make the problem better.

**7:34** · But if we take an adage from old reinforcement learning training or just simple model training, it's just better to run more experiments than fewer. Um and so that's the thesis behind the agent harness itself too. And so then you know we talk about like the sandbox stack behind the agent. And I think that you know there's a lot of mentions of code mode here at this conference and other things like that. And one thing that we really want to see happen because we want to build the best product for our customers is to just have a sandbox environment that they can do anything they wanted.

### 제약 없는 샌드박스 환경

**8:01** · So for example prior to yesterday I wasn't entirely certain that Arya was going to be able to do a bunch of parallel executions of itself. And so I asked it both while I was writing this presentation and preparing for this to just create the sandbox environment uh for itself to run a bunch of parallel executions of its own research loop.

**8:20** · Right. Uh, and so like having that unconstrained environment is really useful for getting the agent to do emergent things.

**8:27** · And so, you know, I I'm not really sure what the six phrases per record uh means, but I think from a theory standpoint, we want to build then a good pattern for generating these simulation environments. And so we have a relatively agnostic DAG that you might think about in a traditional machine learning context, which is like we take a configuration, which are these YAML files. We hydrate them. So we load the live data that we need to. We set up an environment and the environments and weights and biases are relatively expensive because we have lots of production data that we might want to test against or other things like that.

### 평가 파이프라인(Eval Pipeline) 아키텍처

**8:56** · These are full machine learning training logs. We might have to simulate uh GPU executions if you're doing auto research etc. That's a relatively intensive process and so you might want to parallelize that. Then you would rehydrate because oftentimes there's runtime configurations that you can't encode in a YAML specification and so you hot patch that data back into the config config. Uh and then you run the agent and running the agent is trivial.

**9:17** · You run it, as I mentioned at the beginning, in the bite-wise identical version that you have in production, and then you score it. And scoring is where I spend a lot of my time, which is basically trying to think about the robustness of how you measure results.

**9:28** · Uh, and I imagine most people here are pretty good at thinking about things like that. And I think it's really worth spending the time once you have a configuration of how to run evaluations, thinking about the robustness of our emails. uh a Slack message that I probably can't show live on the screen that I got from one of my teammates today made me very happy where he basically just spent all of yesterday thinking about the health of our evaluations and the drift between our evaluations and production. Uh and I think that kind of mental model of like you know why are things working well why are things not working well what are the gaps that we see in these two patterns is really useful.

**9:55** · Um in our case weights and biases Arya scores itself in two patterns which is normatively which gives us basically did we pass a task or not and then relativistically where we can set styles based on one variant where it asks questions to the user and one variant where it doesn't ask questions to the user and we can sort of see which one behaves better uh with a relative scoring. So a pretty traditional formulation from a reinforcement learning standpoint. And then of course if you're running this in parallel you got to tear it down because you want to start it again and you don't want to clobber your teammates's work etc.

### 평가 점수화: 절대 평가와 상대 평가

**10:23** · Uh and so we'll see what happens in this project because a bunch of my teammates are running emails right now and so we'll see how Arya performs.

**10:30** · Uh and then you know more traditionally on tasks I think the email tasks are just YAML specifications that we define as a starting condition of an environment with a bunch of user configurations as well as then an ending condition that we sort of want to get to. Uh in our case tasks are flows from users. So we simulate them in three ways. Uh we do just simple text which is like hey here's an instruction to Arya.

### YAML 기반 886개 평가 태스크

**10:51** · You might imagine that the task that it generates in this chat over here um where it's logging a specific trace from production uh into our local framework actually looks like you know just a simple question that I asked it basically which was that question of Arya doing auto research itself um we can just ask it to continue

**11:10** · um as it does that and that task is just a single question to it there's other variants of the tasks that exist as well where we simulate a language model that has a persona from a user and we ask it, hey, pretend to be this user, ask certain questions in a particular order so that we can simulate multi-turn environments and interactions with our agent. Uh, and then you just run a bunch of these. So, we have 886 tasks. We categorize them by levels. We expose them to our product team so that they can decide whether or not the tasks are good enough or they reflect things that we care about from our benchmarks, etc.

**11:38** · And then we just run them a bunch of times. Yeah. And then, you know, the ultimate thing here is that the trajectory is like the meat and the data that I live behind. And so I look at our production traces that exist in our traffic and our offline traces that exist. And I really try to exploit the behavior patterns from both of those.

### 실행 궤적(Trajectory)과 평가 플라이휠

**11:53** · And so we build tooling ourselves to understand our traces. Uh we have this like this behavior trace project etc that we run in both prod and offline.

**12:02** · And yeah that's the eval flywheel. So you know fundamentally every production miss or every production goodness as well because I think it's useful to hill climb in a positive direction uh becomes a task for our agent framework. And so we use that to sort of define the agent and make it better.

**12:17** · And these are, you know, our real scores straight from weave. So we have a bunch of different categories that we measure ourselves on. I think the agent is really good at conceptually guiding you.

**12:25** · We want to make it better at doing some error analysis for projects. You know, we try to make these as difficult as possible for the agent to really test the metal of how this thing performs.

**12:34** · And so I'll hop back to Arya now.

**12:35** · There's sort of five minutes left um with sort of a demo of what it's actually doing. So right now it's going to run a bunch of code as it's trying to rip this production trace and log it into the framework. If I hop into this uh live demo that I just triggered with that nice long prompt, you know, AR is going to tell me the research runs that it did. So we can click through some of these links. Uh I asked it to write a report using weights and biases reports from the uh run that it just had. If we scrub this, we can see that this is the most recent production trace that it just logged. It wrote itself a new task, ran it, and then scored it. And so this is like the production variant getting benchmarked on our specific task.

### 데모 결과: ARIA가 스스로 버그를 해결한 방식

**13:05** · If we look at the report that it generated, this is the demo that I asked it to do.

**13:10** · Um, so you know, it ran a real womb agent trace, turned it into a WBAF regression task. WBAF is the factory that I build, which is the weights and biases agent factory. That's the principle behind our offline benchmarking. It identified that the problem was that we weren't calling weave.log, one of our SDK calls, properly in the sandbox. It replicates the source trace, which we can click into here, uh, and then runs a bunch of variants of the agent to see how it makes itself better. And so, you know, it added a hill climb target uh which was basically like here's what to do to fix it.

**13:38** · Ran the trace and then we can see if it gives us a little explanation of exactly what happened at the end. Uh how did the prod versus candidate variant perform and you know this is now what I live in.

**13:52** · And so I think the flywheel here is exceptionally compelling for me where instead of going back to my cloud code and writing offline benchmarks and trying to think about what I want the agent to do, I'm just going to live in this platform instead and hop between my production tracing project where I'm looking at traces roll in as they come through over time where AR is, you know, building itself and then hop back into my offline evaluation project to sort of see what my team is doing, what I'm doing, and what changes I want to make.

**14:16** · what change did we make to the prod skill or to the agent variant etc. And you know to sort of like watch this thing roll out. I think a big challenge that we have is it's really easy to go like auto mode for some of these tasks where you want to just see the agent do everything. And I haven't written a line of code in maybe eight months because I just tell Claude to write all my code for me. And that's a really nice pattern, but it doesn't absolve yourself of the thought behind how we want to make improvements.

### 인간의 루프 참여와 시스템 개선 집중

**14:41** · And I think using these tools to improve themselves is very valuable because you get to spend more of your time in the gray of actually trying to think how we make this system better, right? And so if you're building an agent, I implore you to use weights and biases to both track that agent etc. Uh we have a really excellent model tracking platform as well. So some of the other demos that we've shown here are Arya training machine learning models on H200s running on Corey infrastructure and doing auto research for Karpathy's nanohat etc. or full-scale production projects.

**15:07** · But I think the exciting thing in this case for me is that I don't need to leave this platform in order to do my job now right. I have full observability from a production standpoint. I have full observability from an offline standpoint. And if we look at, you know, the things that Arya is saying, it's running lots of evaluations on my behalf to improve itself. And that auto mode that I just mentioned is really exciting because now I get to spend all of my time thinking about how I can make this system reinforce itself better. The tight little guard rails that I can put around it to make it a more useful tool for all of you and then inherently for me. Um, but yeah, that's a that's a quick demo.

**15:40** · We can we can look at the production call trace that we have here from Arya. This is the evaluation that it just ran. So if we look into like the actual trace, we'll see that, you know, already did a bunch of work. It ran this predict and score column. We have a bunch of tool calls that ran. Uh and you know, if we hop back into the chat, we'll see the actual variant that it ran. Um it looks like the candidate variant just had a tight little prompt that we injected into the system prompt or in one of the skills to sort of solve that exact SDK error uh and mitigate it.

**16:04** · And that kind of replication from production to simulation to agent then defining the improvement pattern is the thing that I really would like to leave everybody with.

### 마무리 및 요약

**16:14** · So that's coreweave Arya. Uh welcome to Weights and Biases. I hope that was an interesting talk in sort of how we decide to build uh our offline evaluation metrics, how we reap data from production and the flywheel of trying to build these agents and the things that I think about on a day-to-day basis. Uh and yeah, let's get started. Thank you all so much.
