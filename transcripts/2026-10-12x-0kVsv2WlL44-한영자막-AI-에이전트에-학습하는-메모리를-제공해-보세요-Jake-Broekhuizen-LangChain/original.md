---
title: "[한영자막] AI 에이전트에 학습하는 메모리를 제공해 보세요 — Jake Broekhuizen, LangChain"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=0kVsv2WlL44"
domain: "youtube.com"
language: "en"
description: "AI 에이전트가 같은 실수를 반복한다면 실행 기록을 쌓는 것만으로는 부족합니다. LangChain Labs 리드 Jake Broekhuizen이 경험을 다음 실행에 반영하는 에이전트 메모리의 구조를 설명합니다.주요 포인트• 관찰 가능성과 학습의 차이: 로그가 지속적인 컨텍스트로 바..."
word_count: 3265
---

![](https://www.youtube.com/watch?v=0kVsv2WlL44)

AI 에이전트가 같은 실수를 반복한다면 실행 기록을 쌓는 것만으로는 부족합니다. LangChain Labs 리드 Jake Broekhuizen이 경험을 다음 실행에 반영하는 에이전트 메모리의 구조를 설명합니다.주요 포인트• 관찰 가능성과 학습의 차이: 로그가 지속적인 컨텍스트로 바...

## Transcript

### 에이전트에 메모리 제공하기

**0:00** · And today I want to talk to you about a topic that I have uh been speaking a lot about with with our team and and with a lot of teams that I speak with who are building agents and that's how to give your agents memory.

**0:11** · Whether you're building a coding agent, a support agent, a uh a research agent, most teams arrive at the general same instinct that it should get better from one run to the next.

### 다음 실행은 더 나아져야 합니다

**0:25** · So let me give you an example to hold on to for the rest of this talk today.

### 금융 도우미의 말투 문제

**0:28** · Recently, my my the the lab team at Langchain have been working with a company in the financial services sector who's building a uh spending, budgeting and non-investment advice agent.

**0:40** · Given the highly regulated nature of the financial services sector, obviously you would imagine that it would need to follow some strict tone guidelines. And so the way that it speaks and and the and its vocabulary and the way that it interacts with different users is obviously the the tell on whether or not it's following and abiding by the correct tone.

**1:01** · It will derive the way that it generates this tone from the context and from the memories and from the references that it has to its rules and policies.

**1:11** · And you can imagine in some contexts and actually in some contexts that we experience its tone would slip and so it would move from being advisory and helpful to actually pointed and directive saying things like users in your similar situation would generally set a spending cap and it would actually say oh well actually it looks like you need to cancel some subscriptions and move some money into savings. The company that we're working with thought that this is a violation of tone and there were similar instances of this too. And so to correct that, the review process is manual.

**1:40** · You have to have someone understand the traces and understand where its tone slipped, make those changes to the context that it needs to reference when it's giving its tone and then make sure that there are no regressions as well. Obviously, that that doesn't scale or rather is challenging to scale. And so the system should be or or the system around the agent should be a place where it can continuously learn and benefit from its interactions and its experiences. And that's the version of memory that I want to talk about today together.

### 관찰과 학습은 다릅니다

**2:12** · I want to start with the tension that I think a lot of teams have run into. I think all of us here today, the reason why we're at this conference is we're curious. We're building agents.

**2:20** · I think we've gotten very good at observing them, but observing them and then turning those observations and those agent experiences into lessons for future runs are obviously very different things.

**2:32** · And so that's where memory and so that's where memory comes into play.

### 늘어나는 추적 기록

**2:38** · Agents are producing more signal and more traces than ever before. And this is going to be something that's obviously that will obviously increase as more agents are built. That's fantastic for us because every run produces a trace and that trace is stored somewhere. That's incredibly useful. means that we can understand the tools that were called, the reasoning that the agent made as it was on its way to making its decision, the artifacts that it referenced.

**3:03** · Observability is obviously a critical foundation for building very reliable, very reliable agents. But I think the challenge really is after the trace is stored or after the log or after the transcript of what the agent did is stored.

### 로그를 신호로 바꾸기

**3:17** · If the future context that that agent references never changes, then a misguided skill or instruction will mean that the agent the mistake that the agent makes today will still persist in future runs.

**3:30** · The goal or the system that we want to work towards is where a trace stops just being a log and becomes a source of signal. Memory agents that are observable tell you what happened.

**3:42** · Agents that are adaptive are able to change are able to change and guide themselves on the following runs. So, I've mentioned memory. I think it'll really help to sort of define what I mean when I say the durable context that an agent references that will guide future runs.

### 메모리란 무엇인가요

**4:00** · A trace, a transcript, or a log is evidence of what happened. It only becomes memory when that lesson is converted into durable context that the agent can reference on future runs.

### 의미·일화·절차 메모리

**4:14** · Now, you'll see six things on this slide behind me. Facts, preferences, patterns, previous examples, skills, and instructions.

**4:23** · I think that it's helpful to group them into three distinct buckets. A taxonomy that we borrow from cognitive science and actually that applies a lot when we're talking about agents that are language based.

**4:36** · First, there's what the agent knows.

**4:37** · This is often referred to as semantic memory. This includes things like the facts and the preferences that guide the way that it responds.

**4:48** · Oops. Then there's the then there's what the agent has experienced. This is the episodic memory. This is the learned patterns that it's seen, past interactions and examples.

**5:00** · And finally, there's how the agent should behave. This is also known as procedural memory and that's the instructions, the skills that you're all probably very familiar with and the rules that guide how it should how it should behave. Procedural memory is where actually most of the visible gains come from. So in that financial assistant that I uh the example that I gave at the beginning, tone changes that we wanted to to promote to the agent and and make it follow came in the form of updating its procedural memory.

### 행동을 바꾸는 절차 메모리

**5:27** · We weren't giving it a new fact or we weren't telling it not to use a banned word. We were giving it a rule to follow as it engages with its users. That's the procedural memory that guides our agent.

### 작업 메모리와 장기 메모리

**5:44** · Another distinction that that I want to make, and I think this is very important when thinking about the general agent uh agent memory paradigm, is the separation between working memory or short-term memory and long-term memory.

**5:56** · Working memory is what the agent is referencing in its current run. So these might be things like intermediate scratch pads. It might be tool results.

**6:03** · It might be the files retrieved as part of its operation.

**6:07** · Everything that it needs to do to perform its current job.

**6:12** · Long-term memory is what exists typically in some data structure or some store somewhere else that has instructions and skills and things that it needs to reference as part of uh future turns and and continuous behavior.

**6:27** · Different agent harnesses will leverage and inject long-term memory in different ways, whether you're building your own SDK or or using a variety of different popular agent frameworks.

**6:38** · Some inject it directly into the prompt.

**6:40** · Some will use tools to retrieve that.

**6:42** · Some will some will pull it directly from a store.

**6:46** · Some load it through files or some change the runtime state. The imp the implementation can vary but the distinction is really important. Some of the memory or some of the context that an agent references is temporary while some of it is durable and longterm and is useful to guide future runs. And I think that distinction is really important when we think about traces and logs and artifacts that the agent produces as it runs.

**7:11** · A trace isn't just a record of the final output. It's a record of how our working memory changed over the course of the run. Some part of that should stay as history. Some part of that should become durable long-term context.

**7:29** · And so that's what gives or or that's what lends itself to this really helpful mental model that I have or that I and and the team at Langchain and generally I think is is a very useful uh way to sort of think about the relationship between working or short-term memory and long-term memory. It's a readwrite cycle. And so you might have heard of sleeptime compute or dreaming.

### 읽기·쓰기 순환

**7:47** · Those terms refer to the way that memory is updated or pulled from long-term into short-term whilst the agent is doing work or actually in some cases while the agent is also not doing work. That's the sleeptime compute.

**8:05** · If we start somewhere at the beginning of an agent run, it needs to read relevant context from long-term memory into its short-term memory. So, this is anything this is anything important for the current run that it has. It might be skills, it might be instructions. Uh you've probably seen progressive disclosure with agents that actually pull in the relevant skills for a certain task. That's that phase moving from long-term memory into short-term memory.

**8:29** · Then when the agent runs, it produces a trace. This evidence is really important to us because now we can understand how it retrieved context, the the uh the tool calls that it made or the decisions or the sub agents or anything that's part of its working job.

**8:44** · As I mentioned, most evidence should stay as history. If we turned everything that was from a if we turned all of that evidence into long-term memory, then it would make the agent struggle and it would make it harder to reason over future tasks. And so what I think is really interesting is the filter step.

### 무엇을 기억할지 결정하기

**9:00** · How do you how do you decide what is useful signal and what should become durable long-term context and how do you decide what should stay as history? Once you've made that and we'll get into that in a moment. Once you've made that decision, that is that signal is then written back into durable long-term context.

**9:17** · So in the case of our financial assistant that was be measured and not pointed or not directive so that it can update the way that it behaves on future turns. And that's the core loop. Memory informs the run. The run makes the evidence. We filter that evidence to make signal and then we use that signal to update memory. If you can build that flywheel, then we trend towards a place where we can build very reliable and very powerful agents that just feel like they get better with time.

### 기록·분석·갱신

**9:47** · And so once we have that mental model, I think you know an even more simple way to break this down or to to abstract this away is is capturing what happened, analyzing what might matter and then updating the context so that future runs can use this. The implementations around how different how how different people building different frameworks are still evolving. But this three-part shape is a really useful starting point.

### LangSmith와 Context Hub

**10:13** · One implementation of this and I won't I won't claim it's the only implementation but just just to kind of like put some concrete structure to what I'm talking about is the way that we do this with Langmith.

**10:24** · The capture step to be able to understand and see the trajectory and the things that the agent did is where our observability comes in.

**10:33** · You're able to see the tool calls.

**10:34** · You're able to see the way that the agents called sub agents. You're you're able to see the context that was retrieved.

**10:40** · The analyze step in the middle is something new that I'm really excited about, but basically it is that intelligent process that's doing the background analysis and doing the background work to extract signal from traces based on the things that matter to you and then promoting that signal to the memory store or the point of reference that the agent will use for future runs and that is Langmith's context hub.

**10:59** · So you can imagine now if there is a place where this analysis can be done signal can be extracted a remote store where you can now go and update what's in that so that the agent can pull that down the next time it runs that is what lang context hub does and the abstract loop it maps cleanly you capture the experience you extract the signal and then you store that durable context for future runs

### 금융 도우미에 적용하기

**11:27** · to kind of put that in some more detail and And also to frame it in the uh in the the context of the financial assistant that I was speaking about at the beginning and and sort of the way that we we built this loop. When that agent runs, its context is loaded from the context sub.

**11:42** · And so that might include its instructions, its skills, relevant markdown files that matter to it, policies and rules. when it functions or when we invoke that agent, then a trace is produced that shows us the uh failed tool calls or user corrections or in this case it flagged where our tone strayed from what we wanted it to be. engine then looks for patterns and then identifies where

**12:07** · different static skill markdown files that are based in Contexthub need to be changed or promoted and it'll make that change and then the next time our agent runs we're able to actually go and and understand and see that its tone changes when it interacts with engages with users.

### 교훈 1: 대부분은 이력으로

**12:28** · So some things that I and my team have currently uh or or kind of always think about when when designing memory and and this should also as well ideally guide the the way that you design and build some of these abstractions is that agents produce so much we call it exhaust or we call it kind of like feedback. Not everything should become a memory update. And actually the devil is in the details around what should become one as as we've sort of discussed over the course of this presentation.

**12:55** · It's understanding and deciding what matters to you. You know, most trace data actually should stay as history, as referenceable history. Some some might become data sets to do offline evaluations and things like that. A small a small segment of that or or subset should end up becoming what changes your agent's memory. Now, this second one is sort of like a gotcha that I I ran into a lot. I think that you sort of tread the fine line of trying to build a system that's optimized but then also one that has a memory store or updates available to it in the hot path.

### 교훈 2: 캐시와 실행 경로

**13:26** · And what I found was uh for particularly for longunning background agents, right? Imagine if you have an agent that's running over long time horizons and you make some memory updates in the beginning of its operation, but because of the runtime state and because of the way that it's accessing memory, you don't actually access that or that's not available to it for future runs. And so, you know, understanding what you can cache, what you can't cache to be able to make sure that memory updates are available for future runs, very important.

**13:52** · Uh, and sort of I I was banging my head on a wall for a while while trying to sort of understand why my behavior wasn't changing. And I needed to recognize and think about that second principle.

### 교훈 3: 중요한 규칙은 사람 검토

**14:05** · And then the third one as well, I think that uh open core and you know Hermes agent and and a lot of agents that are becoming widely popular that sort of do this self update process, right? I think that it's another really important consideration of like what do you make self-updatable as opposed to what do you make something that needs human review?

**14:23** · And so if we're talking about procedural memory with instructions and policies and tone guidelines, those are probably going to drive about 75% of the behavior of my agent. And so that actually probably should have some level of human in the loop and human interaction. You should have some way to surface the changes that you make to the parts of the agent's memory that are procedural before actually committing those and and putting those in the in the in the agent sort of like hot reload path.

**14:50** · So protecting important behavior with emails is I guess another really important uh third third kind of like level to this that I find really important.

### 경험을 다음 실행의 개선으로

**14:59** · And so I want to come back to this initial refrain. the next run should be better. Memory allows us to do this. The the word memory is thrown around a lot.

**15:08** · I think in the context of building agents and working with harnesses and working with like providing context to your agent, memory really does give us the ability to do this. And it's more than just a place to store information.

**15:20** · It's how experience becomes context.

**15:23** · And then that context is how our next runs get the chance to improve.
