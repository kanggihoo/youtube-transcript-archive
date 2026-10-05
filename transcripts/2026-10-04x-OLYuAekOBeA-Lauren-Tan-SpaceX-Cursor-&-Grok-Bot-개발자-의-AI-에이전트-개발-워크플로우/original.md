---
title: "Lauren Tan(SpaceX - Cursor & Grok Bot 개발자)의 AI 에이전트 개발 워크플로우"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=OLYuAekOBeA"
domain: "youtube.com"
language: "en"
description: "Lauren Tan이 설명하는 AI 에이전트 개발 환경: 실제 앱 검증, 반복 절차의 코드화, 코드 구조와 린트 규칙, 버그 제보 재현과 환경 교정.2,500 PR은 Lauren 본인의 공개 실적이며 새 기능 2,500개를 의미하지 않습니다.원본 대담: https://www.you..."
word_count: 2197
---

![](https://www.youtube.com/watch?v=OLYuAekOBeA)

Lauren Tan이 설명하는 AI 에이전트 개발 환경: 실제 앱 검증, 반복 절차의 코드화, 코드 구조와 린트 규칙, 버그 제보 재현과 환경 교정.2,500 PR은 Lauren 본인의 공개 실적이며 새 기능 2,500개를 의미하지 않습니다.원본 대담: https://www.you...

## Transcript

### 2,500 PR보다 먼저 볼 것

**0:00** · Have you ever had the experience of handing off code to an AI, only to find yourself with even more work to verify?

**0:04** · You're told it's done, but when you open the app, the problems remain, and if you ask it to fix them, something else breaks. On X, a developer known as Laurent introduced himself as having merged 2,500 PRs into production in a single month. A PR is a request to review and incorporate code changes.

**0:22** · This number is his public track record, and it doesn't mean he created 2,500 new features. Today, we’ll look into the development environment he had in place, while listening to his full explanation from an interview with L-Foco. I also referred to the lectures Laurent uploaded himself. Laurent didn't start by assigning tasks to multiple agents from the very beginning either. In his personal projects, he had to constantly correct the course, and he analyzed the app's performance issues himself. While the agent changed the code, he was the one who checked the performance logs and memory state to relay the results.

### 사람이 대신 확인하던 일을 넘긴다

**0:52** · So, he started by building tools that allowed the agent to execute and observe things directly.

**0:58** · The "ladder of trust" mentioned in the interview also begins here. The explanation is that trust in delegating multiple tasks comes not from confident answers, but from an environment where you can verify actual results and fix things when they go wrong. Let’s listen to the part where he is asked about the most important skill. Think that the single most important skill that should be in your tool kit is verification, because without verification and for for, by the way, for those watching, don't know what that means It's this idea that you can

### 가장 중요한 스킬은 실제 앱 검증

**1:29** · give, you can sort of give your agent, uh, hands and eyes, in a way that's the analogy I like, where the agent is able to run the code, right? And actually, uh, interact with it like a normal human user would, and also do things like, you know, debug it, you know, take traces and snapshots, um, and uh, funly enough, like that was actually the first skill I built when I joined Cursor uh, that gave me a lot.

**1:54** · It doesn't end with receiving a report that the tests passed. It includes the process of opening the actual app, clicking the buttons a user would, and checking the screens and execution logs . In Laurent's lecture, he adds a " feature map" to his execution tools.

### 실행 도구와 기능 지도를 함께 준비한다

**2:23** · It's data that shows where each feature is and what happens when you click on something. You need this kind of context to find problems just by looking at small screen captures. And when the app changes, you also have to manage the map. There is also a reason for creating tools for repeated execution in advance. If you make the agent create a new script for every verification, the execution method for the same task can change every time.

**2:46** · Let’s hear how they divide fixed procedures from tasks that require judgment. To reduce, to kind of take away the judgment that would otherwise unnecessarily be used. Because with judgment, so I also think of, you know, agents and skills, and sort of like, is like a gradient.

### 반복 절차는 코드로, 판단은 에이전트에

**3:12** · You have some parts of the work that are entirely judgmentbased, right? You know, something that requires thought, you know, putting together multiple pieces of context, thinking...um, and then you have the more deterministic parts. Like I don't know, if you wanted to, uh, refactor some code, right, from one pattern to another, that's very mechanical, right? You don't...you don't need a agent to think about it and come up with it in a novel way each time, right?

**3:42** · And so that...that was really the inspiration for the CLI. And you'll see this in a lot of the other skills that I built, is like I try to extract out the deterministic parts and turn that into code and just leave only the parts that actually require judgment. If you can execute it like this and observe the results, you can continue with modifications and verification. If it’s a performance issue, you first measure, form a hypothesis, change the code, and then measure again. However, verification tools alone cannot solve every problem.

### 좋은 코드를 따라가기 쉬운 구조

**4:11** · The existing code that the agent reads and follows is also important. If exceptions or temporary workarounds are scattered here and there, similar patterns can increase in future changes . Instead of pointing out the same mistakes repeatedly in chat, you change the structure so those mistakes are hard to make. The following framework is an internal one used by Lauren's team.

**4:29** · Rather than accepting it as a public-ready tool, I recommend focusing on how they decided on the paths for adding features. apps but really really lit rules and the code base is designed in a way that there's really only one way to do something so we make use we make use of a lot of conventional patterns. So like features all go into a specific directory. Every feature has its own directory, as an example.

### 기능을 추가할 경로를 하나로 만든다

**5:00** · You know, there's like a, a...Thing that discovers features, like through a registry and like crawling the code base and stuff, like. that. This conventional pattern and the lint rules make for an environment where it's actually very hard to write bad code and that sort of frees up your own mental capacity, and the agent doesn't have to think about that anymore.

**5:30** · It’s like, oh, if I want to add a new feature, it just goes into the new feature directory. All the code goes in there, and I’m not going to append to a god file. Right? That was actually the inspiration for those feature directories, as the very first versions of Grokbot were composed of like eight god files that were at least 100 lines long.

**5:55** · P-stack is a collection of skills where Lauren organized his development experience into various workflows. It delivers the approaches and tools needed for bug investigation, feature implementation, and performance improvement. However, simply installing it doesn't automatically create a verification environment for your project. You need to have working tools and good code patterns in place to build a foundation for delegating tasks . In the latter part of the conversation, he connects that foundation to the outside of the code.

### 스킬 위에 외부 맥락을 연결한다

**6:24** · Bug reports come in through Slack or issue management tools, and if a human has to read and copy them into a chat window every time, it becomes a bottleneck again. Lauren explains the flow of modifying and verifying within the code as the "inner loop," and the flow of receiving external context as the "outer loop." Let’s look at an example of how these two flows are connected. very powerful because now all of a sudden your agents have the ability to get context for themselves.

### 제보를 받아 실제 버그인지 재현한다

**6:58** · Right? If for example, you know, either just as a simple example, like maybe you have the Slack MCP, right? Or you have your own harness that you’ve built a Slack subscription into for a particular Slack channel. Now, all of a sudden, you can tell your agents, "Okay , subscribe to this Slack channel."

**7:20** · Every time there’s a bug report, it triggers something to go off and reproduce the issue using the verification skills we've already spent time building, along with all those other skills we've set up. This gives me a lot of trust that these agents can actually go off and understand the bug, verify that it still exists on main, and confirm it wasn't something like the user's setup, their data, or maybe they didn't install a dependency.

**7:52** · Like, basically, I think, creating those two loops and connecting them is a really important part of the job these days, especially if you are thinking about how to scale yourself. A coordinator role also emerges to oversee multiple reports together. Assigning an agent to every similar report can lead to redundant fixes for the same problem.

### 작업을 늘릴수록 검토 방식도 바뀐다

**8:19** · Rolfe describes a case where, even if a bad code pattern is found, it is collected in a document rather than fixed immediately. As records accumulate, common causes or recurring issues can become visible. This means that delegating a lot of work and delegating it well are two separate matters. Then, how can a human review such a large number of changes? Rolfe uses the analogy that you cannot taste every dish in a kitchen yourself.

**8:43** · Instead, let's hear what he checks and where he reflects the results of those checks. It becomes more about sampling, right?

### 표본을 엄격히 보고 환경을 교정한다

**9:02** · And thinking about the processes in the same way that, you know, if I guess maybe this is where the the factory analogy is a bit more apt is, you know, as a quality supervisor on a factory, you can't look at every single item. You sample, right?

**9:17** · You take you, you you go in there every day and you look at the quality of the pull requests, you look at the code that the agents are writing, and you scanize it very rigorously and think about all the inefficiencies, the bad patterns that the agent are doing, and then you think about how correct. Rather than just fixing one problem and finishing, you look back to see if the environment allows the same problem to occur again.

### 설치만으로 도달할 수 있는 단계는 아니다

**9:46** · You reduce human intervention points by adjusting skills, types, and constraints. However, he does not suggest that reaching this state is easy. Let's continue to hear the conditions that Rolfe adds himself.

### 많은 시간과 노력이 필요한 환경 설계

**10:12** · I'll definitely say it. Um, it's very hard to get to this point. I don't want to sell this as, like you know, something that you can just do easily by using PAC. Like, it takes a lot of time and effort to think about your code and where you see your agents failing, and thinking very thoughtfully , intentionally, and setting ups and constraints so they do the right thing.

### 내 작업에서 사람이 기다리게 되는 지점

**10:39** · Running verifications multiple times also incurs token costs. In the conversation, questions are also raised about changes that are difficult to revert or fields that are hard to verify programmatically. Rolfe says he does not have the answer for every situation. When applying this case, those conditions must also be considered. I recommend looking for whether it stops because it is running the app, explaining feature locations, or repeatedly fixing the same code patterns. The necessary tools and structures differ at each of those points. In the conversation, Rolfe explains that domain expertise has also become more important.

**11:08** · This is because people are needed to clearly communicate what to build and to judge whether the results are correct. I encourage you to look at whether your agent is waiting for longer instructions or tools to verify results directly. That is all for this video. I will leave the links to the original discussion and Rowland's lecture in the description. If this helped you understand the tools and workflows needed when developing with AI, please subscribe and like. Thank you for watching.
