---
title: "[한영자막] AI 네이티브 조직은 스킬로 움직입니다: 구조화 및 확장 전략"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=0qySk1fcf6k"
domain: "youtube.com"
language: "en"
description: "AI 네이티브 조직의 성패를 가르는 핵심은 바로 '스킬(Skills)'의 체계적인 구조화와 전사적 거버넌스에 있습니다.QuantumBlack의 Imad Touil이 마이크로서비스 설계 원칙을 에이전트 스킬에 적용하여 기술 부채를 방지하고 생산성을 극대화하는 실전 전략을 공유합니다...."
word_count: 4444
---

![](https://www.youtube.com/watch?v=0qySk1fcf6k)

AI 네이티브 조직의 성패를 가르는 핵심은 바로 '스킬(Skills)'의 체계적인 구조화와 전사적 거버넌스에 있습니다.QuantumBlack의 Imad Touil이 마이크로서비스 설계 원칙을 에이전트 스킬에 적용하여 기술 부채를 방지하고 생산성을 극대화하는 실전 전략을 공유합니다....

## Transcript

### 스킬 사용에 관한 3가지 질문과 거버넌스의 현실

**0:00** · Thank you for joining me today.

**0:02** · My name is Imad Touil. I'm a distinguished engineer at Quantum Black.

**0:07** · And today talk I want to really cover the how AI native organizations runs on skills. But before I really get started, I just want to do like a quick exercise of show of hands. Can you raise your hand if you have already created and using skills?

**0:23** · Amazing.

**0:24** · Now, can you keep your hand up if you are using and sharing it within your teams?

**0:29** · Great. Now, keep your hands up if you have governed maintained skills across your organization.

**0:37** · Amazing. I see a few hands. But that is what is this talk is about. Today I'm really looking to break down why this is really critical, how is important, and how actually you can adopt it across organization.

**0:48** · But before I get started, what I really want to cover is actually the Agentic software stack.

**0:54** · So, the Agentic software stack has two loops. So, the first loop is all you know, right? It's the coding agent or the coding agent harness, right?

**1:01** · And there you have like some core components. You will have your context manager, the tool and MCPs, memories and states and skills loader, right?

**1:09** · But then there's an outer loop, which is your workflows, right?

**1:13** · Those has skills, sub agents, MCP servers that you use, and some hooks sometimes you need them.

### 에이전틱 스택: 내부 루프와 외부 루프

**1:20** · To have this running properly, you will need some enablement components at the bottom. So, what you would have is an environment sandbox, you would have your MCP gateway to manage and simplify all of the MCP tools across your organization, a model gateway to again manage and optimize for all of your LLMs either like you know, open source like running locally or frontier models, and also a graph knowledge graph that abstracts your IT core systems, your code base, your skills registry, and at the end workflow marketplace.

**1:53** · And then you have your context layer, right? The context layer will bring all of what is needed to get the task done.

**1:58** · So, this is the project instruction.

**2:00** · Think about it as the cloud code MD file, the agent MD file. Your chosen MCP schema is actually to understand which tool to use and when.

**2:07** · Your memory, right? Conversation history with the end user, the human is in the loop. And finally, the retrieved contents that you can pull from either like files, your code base, etc.

**2:19** · Now, what I want to really focus on today is the workflow, right? And I think this is where we kind of like think um is kind of a pretty simple um workflow in day-to-day when you start trying to actually create an end-to-end product software delivery life cycle in the organization.

**2:35** · In reality, we all have seen the four steps. Specify to define what you want to build, the design or plan to plan, you know, what what's our looking to build. Then you go to the tasks, you break it down into tasks.

### 명세·계획·작업·구현이 단 한 단계에 불과한 이유

**2:48** · And then finally, you start implementing, right? I think this looks familiar. I think this is how most of our coding agents actually are kind of shaped today.

**2:56** · In reality, that is not how it is composed and at scale when you look at the organization complexity.

**3:03** · This is just one step in the journey.

**3:05** · This is like building a product increment.

**3:08** · When you really look at the overall end-to-end life cycle of something that a business want to build to capture the value out of it all the way to ship it to the client.

**3:17** · You will start first of all by defining your product strategy. What to build and how to build it, right? You set the define the the success metrics, you identify and you break down your plan, roadmap for your products. And to do this, you may need a lot of insights, right? So, then you do like your market research, you do the competitive analysis, you bring this as an input with some customer interviews.

**3:38** · Then you go to the discovery side, right? So, then you start discovering, okay, now I understand what to build.

**3:43** · I'm going to break this down into like some problem statements, find the solution, validate the solution, and then probably like experiment and then create user stories.

**3:52** · And before we start building, in reality, you actually need to prepare your data, right? In some cases, you will need actually to clean up your data catalog that will support the build of your products, or maybe adjust some of the endpoints connection and integration to your core systems that will help you actually build your products.

### 엔터프라이즈 전체 수명주기(SDLC)의 구성 요소

**4:11** · And this is where the data product delivery comes. So, you build your data pipeline, you validated your data quality, and you put your catalog your catalog \[cough and clears throat\] data assets ready for development. Then, we kind of like go back to the product increment. That is where we will start.

**4:27** · But then, building a product in every organization that I have been serving for the past 18 years in my career, I can see that in one organization we'll find like different SDLCs kind of like you know, scattered across organization.

**4:41** · Some of it is actually for a mobile application, others is a different departments or different platform. Some of it is internal platform that is for your employees, others actually customer facing. So, it is not like a one workflow that can actually build anything you want for your organization.

**4:56** · When you figure out like what to build and how to build it, you need to run it.

**4:59** · Then, we come to the platform engineering ops, right? That is again when you have your provisioned infrastructure, thinking about how you you build your your infrastructure as code modules, etc.

**5:10** · And then, you launch your products.

**5:11** · And the moment you launch it, then you start kind of like the journey of optimizing the performance of your products, trying to look forward like any incidents to resolve.

**5:20** · And then, you start the loop again, right?

**5:23** · So, at scale, when you look at really building a digital platform, not like a very simple products that you can, you know, solo build and deploy, the landscape is way complex than expected. And what you're looking at here is literally like probably 10-20% of what it is. And it's really different from organization to organization.

### 단일 워크플로우로 해결할 수 없는 복잡한 조직 구조

**5:40** · Now, going back to the uh the the stack, right? When you look at the workflow, there's like four core components.

**5:47** · The first one is hooks.

**5:49** · MCP services and sub agents. Those are kind of like given, but it doesn't really bring the right kind of like structured value to your workflows, right? That's why skills is one of the critical components in your workflows.

**6:01** · Hooks basically what it does, it just kind of like pre kind of like trigger on events to to do something along your workflow. The MCP service we all know that, you know, you might need an MCP tool, but tell me like who actually build a lot of MCPs?

**6:14** · We just use MCPs tools that is actually provided by the tool that we used to use before, right? So, we don't really own those. The sub agent is just to minimize the context window. We just delegate to sub agent to execute a specific task where it is needed. So, at the end of the day, we'll find all of your know-how is actually at the skills level. And if you don't have the right structure of your skills, then you're not really having a deterministic a workflow. And one thing to mention is workflows, think about them as harness blueprints that actually shape the behavior of your coding harness, for example, in the runtime.

### 조직의 실제 노하우가 살아 숨 쉬는 곳: 스킬

**6:50** · Now, looking at the rise of skills adoption, right? So, just 8 months ago, Intropic published the first article about skills, right?

**6:59** · 2 months later, we had the standard, an open standard that there is adopted and starts a lot of agent harnesses starts adopting this new standard.

**7:08** · Around February um this year, we have seen most of the actually agents adopted this. Even though we don't see them, right? If you pay attention when the the the agent is thinking, you can see that it's pulling skills um as it's going and doing the task.

**7:23** · The other indication here that you need to pay attention to is actually the number of skills that was created, right? This is just like a little bit of a snapshot that I did across some public GitHub repos, some public skills registries, right? There's way more than this publicly and within your organizations, right? So, the the the creation of skills and the demand is rising. But we need to understand why.

**7:46** · In the latest skills bench, comparing the latest models against like you know, running the same task against software engineering and cyber security without skills.

**7:56** · It did well, right? Cuz what that's what is expected and it's going to continue to be improving day after day, right?

**8:02** · But then when we applied skills that are more deterministic, the outcome was clearly higher than than without it.

**8:11** · Now, if you think about now like how like the anatomy of skills and how you actually design and implement skills in your organization. This is not like a new problem that you are trying to solve here, right? We have solved this with the microservice kind of movement, right? So microservices need to have all of these design principles, right? This is like a software kind of like you know, problem that we used to solve.

### 마이크로서비스 설계 원칙을 스킬에 적용하기

**8:30** · It's It's similar. So skills need to be reusable, right? Need to be modular.

**8:35** · Need to be disco- like you can discover your skills. So if you are sitting in one team and you need a skill, you actually can automatically discover and capture these skills.

**8:42** · It's possible that you can actually use skills across workflows, but also you can use skills across harnesses. Again, everyone adopted the same standard. So if I'm having a skill on cloud code and I want to move it to cursor, it's going to just work.

**8:55** · Specialized skills, that is where the value. You should not build like a one skill like a monolith. Again, it should be specialized to define one tasks specifically.

**9:03** · Composable skills that you need to be designed in a way that you actually can compose so you don't have duplication across your skills when you try trying to run them that conflicts each other.

**9:12** · Consistent, that is actually one of the key items of skills is actually consistency and deterministic. And finally, cost efficient. And for cost I can go for an another hour talk, but it's basically the skills comes to solve a key problem around the context window, right? It's actually putting with the disclosure progressive disclosure pattern, the right skills, the right amount of skills in the right time to solve the right problem. And that's reduce the token usage.

### 점진적 공개(Progressive Disclosure)와 토큰 비용 절감

**9:37** · This define a new unit, right? This makes your know-how in your organization executable, portable, and cheap.

**9:45** · On the right-hand side, you just a very simple example of data retention policy, right? When it comes to regulation, you need to understand and make sure to instruct your agents why you manipulating, for example, um your customer data.

**9:58** · You should make sure that this data manipulated according to the regulation, right?

**10:03** · And that bring me to the next example.

**10:07** · On the left-hand side, you can see that there's like a Think about like a a catalog of skills.

**10:13** · And then the right-hand side is your harness, and the output is on the right-hand side, right? So, the composable skills at the regulation level, you have the skill that I just showed earlier, which is the retention policy, but you will need disclosure standards. You will need the GDPR rules that need to be respected. You will need the filling templates, right? So, all of this kind of think about it like defining how any data, any feature that is built across your web, mobile, um like you know, different applications across organizations is really respecting these rules.

**10:41** · And this gets pulled automatically by on the run time by the regulatory disclosure review workflow.

**10:49** · And the outcome is expected. It's deterministic. You have an audit an audit reports that you can actually store. You have um specific uh identification of if there's anything to improve, and that this kind of like loop back to improve your your code base.

### 규제 준수 스킬 조합과 결정론적 감사 리포트

**11:08** · However, if you don't govern skills, we will start creating new class of technical debt.

**11:13** · Right?

**11:14** · First of all, you will find out that you are having a lot of duplication in your organization.

**11:18** · So, if teams are not collaborating and everyone is Think about it, using the same technology stack, the same infrastructure, you for sure building the same skills over and over again without sharing them.

**11:30** · Quality. If you don't test and make sure that you're maintaining and you're validating your skills, not against your test, but also against the latest models that comes, right? Then the quality start degrading over time.

**11:43** · You should be able to discover your skills. In In reality, without a governance, you cannot really discover it. Think about it as the the backstage, the IDP, right? It's It's come to solve a problem where, okay, I need to understand who owns this microservice back in the days, right? I don't need to talk to anybody, just need to tap into the service catalog and immediately find who actually owns it. That is brings the ownership parts. If you don't have an owner, then no one will be able to maintain, scale, do skills.

**12:10** · Composability is not something that comes by default. You need to have a governance way to to align what you're building and how to design it. It's Think about the domain-driven approaches we've been taking also for for for many years, right? It's similar to how you shape your skills catalog.

### 거버넌스 없는 스킬이 새로운 기술 부채가 되는 이유

**12:24** · Security. Again, some of uh all of us, like we experiment with the public skills, right? But when you think about it, some skills may have some prompt injection and skills actually does have scripts because that's the deterministic part of it. It can run a specific script for a specific task. So, if you don't have, again, a pipeline that check your security, you may be pulling something that is insecure.

**12:46** · And permissions. Not every skills is actually something that's anyone in the organization should access. Some skills may have some business logic that is very sensitive, right? So, the access control is is also crucial at this stage.

**13:00** · Now, how to bring this to your organization? First of all, you need to allow at the individual level to create, test, improve, and use the skills.

**13:09** · Again, it shouldn't be random, it should be structured way. There's a different tools out there, you just need to decide which tool actually you want to agree on, and you use that mechanism at the individual level. The moment you create a skills, you need to be sharing this with your team, right? Your team starts collab- collaborating to improve the skills. And think about it, you're building the same technology stack, you're building the same products. So, it's going to evolve really quickly.

**13:31** · But then you move on to a very critical point, which is the centralized platform.

**13:36** · That is where all of what I've been covering so far come to play. You need a centralized platform that have a catalog with metadata in it that actually can discover skills and could be searchable.

### 중앙 집중형 스킬 플랫폼의 핵심 요구사항

**13:47** · You can have an MCP that's actually plugs to this catalog, search for this skill, and a CLI to pull the skills back to your either your IDE if you're locally or to your sandbox in your factory. Then you have the dependencies. You need to understand the dependencies between the skills as well. You have the versioning and and life cycle. So, you understand which version of the skills is actually the latest. And a very good example when I'm using, for example, building a functionality, I can the agents automatically capture that there is a latest version of the skill and pull it, right?

**14:18** · So, this versioning help also to pull the the right latest changes from the skills registry.

**14:24** · Access control, again, as I said, if you don't know who is accessing what, that is a huge gap. And finally, evaluation observability.

**14:33** · And then all of this is actually play around a governance. And this is where technology stop solving the problem, right? So, you figure out all of this, all good. Now, who's going to govern this?

**14:43** · And that is where the you know, it really depend how your organization is structured today. That is where you should have your architects, your engineer leads, infra leads, etc. and cyber leads actually sitting down owning part of those domains and making sure that these skills when it gets updated is actually according to the policies you want to adhere within your organization and drive this change.

### 거버넌스 체계와 도메인별 오너십 분배

**15:04** · And finally, when you get this right, what you will have, you would have at the organization level all of your teams pulling from one centralized place high-quality skills, executing them, and pulling them back to to the centralized platform if it is improved.

**15:19** · Now, what I want to bring this cuz it's a little bit of a in clear view. So, what I created I created a simulation, right?

**15:25** · So, think about this. This is your organization today, right? And what I have here I have just a random teams. I have 15 teams created. Um 5 to 12 like per team. Uh you have skills uh per engineers contribution. You have the average skills utilization. Kind of like an average like how much time uh skills are being pulled per day. The duplication occurs the team kind of as a ratio and the skills quality and security ratio.

**15:52** · Now, if I run this across 6 months, what's really happening? And think about it. This is already happening within your organization.

**15:59** · These teams are creating and using the skills, right? But we don't have visibility.

**16:04** · And skills again they're tightly coupled to your productivity uplift.

**16:09** · If for example, the example that I showed earlier on the regulation, if we don't have a skill about the regulation, that is someone is vibe coding back and forth and trying to figure out exactly how to steer the engineer to implement it properly, right? That is burning more tokens from one side cost-wise, but also the productivity is spending more time rather than getting in one shot the right answer.

### 15개 개발팀의 6개월 스킬 운영 시뮬레이션 결과

**16:29** · And the quality and security is similar.

**16:31** · If you don't have clear, you know, skills defined and maintained, you will have a low quality in your implementation because then it's up to the human to to decide this and different the in the maturity from team to team, you can see the difference.

**16:44** · And that is why I for example if I look just randomly at this this is like you can see the productivity of these teams are kind of a medium, right? If I look at this one, is a is a bit of like I don't know is low medium productivity, quality, and security. Also medium, but when it came to the cost is really high.

**17:02** · Okay.

**17:03** · Now, let's actually say, "Okay, how this looks like if I governed all of the my skills in my in my organizations?"

**17:11** · What's going to happen is of course some of them will split, right? And this is reality. It's going to be perfect um as we expect.

**17:18** · But at least what you will see, you will see actually some common ground across all three of your teams. The moment you govern, you publish one skill, the next engineer trying to build a new skill, the coordinate agent harness will identify the skill that is already available and pull it, right? So you you almost solve all of the issues that that I covered about governance.

**17:40** · And one last point is when it came to skills, it's just one component of your workflows, as I said, right? So that doesn't mean if you figure out skills, that says you're good. No, you need to apply the same kind of like approach and solution for your whole workflows. And you may think to apply this again. If you think about it's like if you have a a centralized platform that have all of your workflows, right?

### 스킬을 넘어 전체 워크플로우로 확장하기

**18:02** · From one side you're centralizing the workflows, which is also having the skills, but also if the next engineer came and want to I don't know, like provision infrastructure, they can tap into a workflow and build that workflow with the required skills and run it and test it. Again, if it's something you need to be improved in the workflow, you can easily push it back to the centralized platform for your organization to use.

**18:28** · Now, before I wrap up, um what I want to leave you with is this is just the start the beginning. You see like this just we're talking about 6 to 8 months. What's coming next and I would invite you to already explore is skills registry, right? You should have one if not already. And the good news is all of the players that's been solving the IDP problem like internal developer portal, they already start centralizing this capability, right? So if you don't have it today, maybe in couple of months you will see it coming. But also there's a lot of tools that's actually solving this specific problem.

**19:00** · Secondly, skills evaluation. There's still kind of like a discussion on what is the right approach to to to you know, to to evaluate skills. The easy thing that I found so far very valuable is actually test like you you then static test your or evaluate your skills against the Intropix best practices, right? If the skill is not invoked properly, if the skill is not structured properly, there's a high chance that it's not going to be high quality.

### 스킬 레지스트리, 정적 평가(Eval), 자동 진화 스킬

**19:24** · And finally is auto evolving. And again, this is what everyone kind of like is is the next hype right now. Like, yeah, I can create like a an a closed loop that can evolve automatically my skills. So what, right? If you automatically start this machine, the impact will be way more than it is today because what I shared earlier is going to be just maintaining auto evolving skills without that governance in place that actually put the guardrails for your organization.

**19:51** · And at this point, I would leave you here. Thank you so much for your listening and looking forward. If you have any question, I will be in the leadership lounge. Feel free to grab me.

**19:59** · Thank you so much.
