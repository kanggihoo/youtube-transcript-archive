---
title: "[한영자막] 코드 리뷰의 종말: 데이터가 보여주는 진짜 현실입니다"
author: "Tech Bridge"
site: "YouTube"
published: 2026-10-02T15:00:14-07:00
source: "https://www.youtube.com/watch?v=-TeOEuplMrQ"
domain: "youtube.com"
language: "en"
description: "AI 코딩 에이전트 도입 이후 쏟아지는 방대한 코드 속에서, 전통적인 인간의 코드 리뷰 방식이 왜 한계에 봉착했는지 실제 산업 데이터로 분석합니다.npm 공동 창업자이자 Arize AI의 DevRel 총괄 로리 보스(Laurie Voss)가 코드 리뷰의 현재와 미래, 그리고 개발팀..."
word_count: 4912
---

![](https://www.youtube.com/watch?v=-TeOEuplMrQ)

## Transcript

### 새로운 병목: 인간의 코드 리뷰

**0:00** · Hello everybody. Thank you for following on a session about the death of the code review with a session about the death of the code review.

**0:07** · Uh who knows howululing decisions get made, but uh Swix decided it would be funny for those two to be backtoback. Uh hi. Uh I'm Lori. I'm head of developer relations at Arise AI. Uh some of you may remember me from when I used to co-ound npm Inc. These days I think about AI and how to test it. Uh I'm here to talk about a problem that everyone is seeing right now. The rise of AI agents has dramatically increased how fast developers can produce code. Uh but the speed at which humans can review code uh yeah I am having a talk right now.

**0:40** · Thank you. Very good reminder. Uh the team the speed at which humans can review code has stayed exactly the same.

**0:51** · Um and that is creating a new bottleneck that everybody is feeling. engineering teams across the industry are feeling it. Uh so what can we do about it? Some options are uh we could skip human review entirely. Uh some folks are trying that. Can we automate reviews reliably? Some folks are trying that too. Uh what we're doing going to do today, what I'm going to do for you is I'm going to look at what the industry is really doing right now uh and try to figure out what you can do uh today when you leave the room. So let's start with two numbers.

**1:22** · Uh recently three economists tracked more than a 100,000 GitHub developers uh matched them against telemetry that showed exactly when each one started using AI. Uh the developers who turned on autonomous agents wrote 741% more code but only 30% more software shipped. Uh that is the scale of the problem right there. They were writing code nearly eight times faster.

### 741% 더 많은 코드, 30% 더 늘어난 소프트웨어

**1:48** · Uh but their actual ship software only rose by a third. Uh and the authors of the study are blunt that review was the bottleneck. Um the problem is that the route to production still runs through humans. Uh and the human steps uh in particular code review uh choke everything downstream.

**2:06** · Um producing code is suddenly a whole lot cheaper. Knowing whether to trust it is still very expensive, especially if you have uh sensitive code with a blast radius. Um, how can we bring that second number down and thus bring this the amount of software that we ship back into line with the amount that we can code? Uh, let's zoom out first. Let's be clear that the problem is real.

### 코드 생성은 더 이상 병목이 아닙니다

**2:28** · Generation is no longer the bottleneck.

**2:30** · Uh, Stripe in Anthropics launch materials for Fable this year reported migrating a 50 million line Ruby codebase in a single day. Uh, which is work that they'd estimated would take over two months for a team. Um, Bun, which is now part of Anthropic, reported that they migrated over a million lines of Zigg uh to Rust in six days. Uh, and of course, all of us in this room are feeling this on a smaller scale.

**2:53** · Uh, our agents are generating whole apps and we're just sort of hitting the merge button and feeling guilty about the fact that we haven't read these code diffs and we're just sort of hoping that it works. Uh, we can't possibly keep on going like that. Um, so the obvious answer and the answer some people are trying is you just review more. You take people whose job was previously to review code as well as write code and just say review code all the time. This is your job now. Uh and that doesn't work.

### "더 열심히 검토하기"가 실패하는 이유 (Cisco 연구)

**3:22** · Uh partly because that's really boring and those people burn out really fast. Um but also the numbers say that we can't. Um the best study we have on this was done uh two decades ago at Cisco um over 10 months. They took 2 and a half thousand reviews. They took 3.2 2 million lines of code. Uh, and the study says that reviewers stop finding defects effectively if they try to read more than 400 lines of code in one sitting and their effectiveness completely falls off a cliff. Uh, if they try to review more than 450 lines of code in an hour.

**3:57** · Uh, if you do the math on that mean that means that a 10,000line agent pull request at that pace would take three or four working days to get a real human review. That is one pull request from one agent. 10,000 lines is uh absolutely, you know, absolutely an expectable number of of lines of code uh for an agent that is doing a lot of work for you. Uh and a developer can now run a dozen agents at once. Um although I'm tend to be suspicious of the people who do. Um so we can't just review harder and we're all feeling that too.

**4:29** · The people who are trying to review harder are burning themselves out. So what is the alternative?

**4:36** · Uh some people have decided to just stop reading the code entirely. Uh Peter Steinberg who is the creator of OpenClaw uh says that you shouldn't be prompting coding coding agents anymore. You should be designing the loops that prompt your agents. Uh Andre Karpathy who is one of OpenAI's founding engineers has made the same argument about taking yourself out of the loop uh because the human in the loop is holding the system back.

### 코드 읽기를 멈춰라? 루프 설계와 OpenAI의 무인 코딩 프로덕트

**4:59** · Uh but this goes beyond bold claims on Twitter. Uh in February this year, OpenAI published an account of building an internal product uh with in their words no manually written code. They started with a completely empty repository uh and agents wrote everything. Five months later they had about a million lines of code about 1500 merged pull requests uh pull requests uh and they had done used three engineers to do this. Uh even the scaffolding of the agent to review the agent and stuff like that was also written by agents.

**5:31** · What they said was humans may review pull requests but they are not required to. Uh we've pushed almost all review effort towards being handled agent to agent.

**5:43** · I think the interesting thing about the OpenAI experiment is that they did not tell us what the product did and they did not review an open they did not release an open source product saying and this is how we did it and this is how you should do it which suggests to me that there are still holes in that strategy. Um but it is one possibility.

**5:59** · If open AI says that you can do it, maybe you can do it. Um but one poss so agent open AI says that's one thing you can do. The bet there is that loop design substitutes for inspection. Uh whether you can build a loop that is good enough uh to review all of your code for you depends entirely on what the loop can see. Uh but that is an enormous caveat. What exactly can the loop see and is it reliable enough to do code reviews?

**6:24** · For years, the industry's proxy for uh reliable for quality has been whether the tests passed uh because that is what the benchmarks measured. In March this year, uh a research group called Meter, who you've probably heard about before, uh tested that proxy directly.

### 테스트 통과가 곧 머지 가능을 뜻할까? (METR 연구)

**6:42** · They hired four active maintainers of open- source projects uh from the same open source projects that Swebench tests against and they got them to look at uh PRs that had already passed SWEBench's greater. So Swebench said this pull request is is good enough to merge and they got the open source reviewers to look at exactly the same PR and say is it really good enough to merge and it was only good enough to merge about half of the time.

**7:13** · Uh, and the failures weren't about correctness because obviously the PRs were passing all of the tests. They were about code quality and they were about changes that quietly broke other code, things external to the test suite. Uh, one caveat that meter mentions is that the agents got no chance to iterate on feedback. So, a human uh, contributor obviously being told that their PR isn't going to get merged get another go at it. They can take another swing.

**7:36** · Uh but that caveat doesn't really isn't really relevant to our purposes because that's just putting a human in the loop and what we're trying to see is whether or not we can take the human out of the loop entirely.

### FrontierCode: 88% 대 29%의 충격적 격차

**7:50** · Uh Cognition, the makers of Devon, uh built a benchmark around the maintainer's actual question, which is would you merge this? Uh they called it Frontier Code and they launched it in June. Um more than 20 maintainers built 150 tasks from their own repositories, each one over 40 hours of expert work.

**8:08** · Uh Frontierbench grades behavioral correctness, regression, safety, scope, discipline, test quality, and maintainability. This is a human review rubric uh made machine checkable. Um, and what they found was that Fable 5 before it got pulled and then unpulled, uh, scores 88% on Sweetbench Pro, but only 29% on the hardest slice of, uh, Frontier code.

**8:30** · So, the same model on the same surface with the same job does 51 points less uh, less well if you're asking not does it pass the tests, but whether or not uh, you would actually merge the result. Um, and this isn't one model having a bad day. on the same set of tests uh GPT 5.5 scores under 6%. So the strongest models we have are nowhere near uh passing human review reliably.

### 차세대 프론티어 모델의 새로운 학습 신호, 머지 적합성

**8:58** · So somebody has to write down what mergeible actually means. That is it's clear that we haven't done that yet. Uh the moment they do something will happen. And Sarah Guo who is a prominent investor in AI uh wrote about it and said that solving for that solving for that benchmark a benchmark of genuine mergeability uh will be a critical turning point in the development of coding models.

**9:21** · Um in the essay where she was talking about this she made clear why models got so good so fast at generating code and that is because a compiler is a free verifier. A test suite is a free verifier and anything that you can verify cheaply you can train against until you beat it and that is what has been happening uh at the major model trainers.

**9:43** · Uh so a benchmark of mergeability if we could if we could make one wouldn't only be a measurement it would immediately become a training signal for the frontier models. uh which means maintainability, scope, discipline, regression, safe safety. The moment somebody comes up with reliable tests for those the big models will be trained on them. Uh and whoever writes today's review standard is writing next year's default model behavior. Uh we have some prior art here knowing we have seen this happen already.

**10:14** · Uh which is that in 2024 OpenAI trained a model called critic GPT to catch bugs in model written code. uh human reviewers working on it beat the model alone uh and the human alone. Um so OpenAI built a model to review the models in order to clean the training and it created a training signal that's now built into the models.

**10:35** · It made the models better almost instantly.

**10:38** · But mergeability standards are still in the future right now. We do not have a good rubric that captures everything that a human decides uh to uh consider when they are deciding whether something is mergeable. And I promised you something that you can do today. Uh so who is actually running automated review right now? Uh one company is GitHub.

### 현재 산업 현장의 자동 리뷰: GitHub Copilot과 Cursor

**11:02** · GitHub is uh Copilot's reviewer has done 60 million reviews and now accounts for more than one in five uh code reviews on all of GitHub. So machine review of pull requests is the mainstream default uh on the world's largest code host that is more than an experiment that is a large production uh a large production deployment. Uh cursor is also doing an enormous amount of code review. Cursor uh has published its reviewers architecture so we know how they're doing this.

**11:29** · Um and the details tell you what the job really is. the first version of their reviewer uh would run eight review passes over each diff uh and then shuffle the order of the reviewers uh to review the code again and again uh because the order in which it did those reviews changed the outcome of those reviews. What they were doing was filtering for false positives because a reviewer, an automated reviewer that flags something as bad when it's actually good uh is going to get ignored.

**12:00** · Um, and it's not just cursor who's doing this. There's research about it. Uh, a team at PKing University tested the same idea independently. Run several review passes. See, keep what they agree on.

**12:13** · Uh, and they found that it re raised review quality by up to 44%. Uh, the multipass trick keeps getting rediscovered because uh, false positives are the thing that kill a reviewer and it actually works. So then cursor rebuilds uh their code reviewer um so that the model reasons over the diff calls tools and decides where to dig. Um and my favorite detail from their rebuild uh was that they had to tell the model to be more suspicious of the code.

**12:40** · Uh the model tended to look at the code and say well that looks good to me so ship it. Which is exactly what a human would do in that situation. Uh they had to tell it don't trust the code by default. Assume there is something wrong with it. Um and somewhere in that sentence is a whole is a whole talk about what a good review actually is. Uh it is about being suspicious by default.

**13:01** · Um the next thing that's happening is that review is starting to fuse with repair. Cursor's reviewer now spawns a fix agent from its own finding. So it doesn't just flag the bug. Uh it writes a patch uh and it hands you back uh a diff to approve. uh you approving that diff is obviously another code is another human in the loop where we don't want humans in the loop. Um the next thing cursor wants to do is the reviewer running the code to prove its own bug report is real. Um the line between reviewing and rewriting is getting very thin indeed.

### 리뷰와 코드 수정의 결합

**13:34** · Um and GitHub and cursor are by no means the only vendors getting into this game.

### CodeRabbit, Graphite와 인간 수용률 지표

**13:38** · It is uh getting very crowded in there.

**13:41** · There's a ton of companies uh in the field. Uh, code rabbit is the largest dedicated reviewer has now reviewed over 13 million pull requests. Uh, Grapile builds a graph of your whole reposi of your whole repository so that the reviewer can see how a change lands in distant code. Uh, graphite builds its evaluation set from which of its own suggestions developers accept or reject.

**14:03** · Uh but the thing to notice uh about what every one of them is doing is that all of them are using the same metric as their definition of success which is is a human accepting my answer. Uh cursor calls it the resolution rate and it has driven it from 52% to over 70%. Um the reviewers are trained on human accept for judgment every day at scale.

**14:26** · They are training their harnesses to get better at the definition of good as defined by human acceptance. That is a preview of what the models are going to do except these companies have already shipped it. So the status quo is you can generate code automatically, you can review the code automatically, but humans still need to review the the reviews. Can you skip that part entirely? Can you get the human entirely out of the loop? Uh there are two prominent projects that I've that have tried so far that I've heard of.

### 인간을 완전히 배제할 수 있을까? 니콜라스 칼리니의 C 컴파일러

**14:53** · Um, in February this year, Anthropics Nicholas Carlini had 16 agents build a C compiler from scratch in Rust. Uh, it was able to compile the Linux kernel, uh, across about 2,000 sessions with no human in the loop. But if you read that experiment closely, uh, it's true that there was no human in the loop, uh, no human approving the code as it was written, but there was absolutely a human on the loop. the system uh that reviewed the code, the system that checked whether the code was doing what it was supposed to do, all of that uh was written by a human.

**15:25** · Um the test harness, the feedback systems, all of that stuff. Um it was automated testing with tests that took a human to write them. Um Carini's own warning when he wrote about it was that it is easy to watch the tests pass and assume that the job is done uh and that it rarely is.

**15:45** · Another very widely publicized experiment which I al which I already mentioned briefly in passing was when bun ported its entire uh runtime from zig to rust. That was about a million lines of code by agents in six days.

### Bun의 Zig→Rust 포팅과 13,044개의 unsafe 블록

**15:56** · Obviously no human read that diff. Um the gate for that experiment was the existing test suite. 99.8% of the test suite passed. Um so the test did real work. Uh, a fun fact about that experiment is that the PR uh where they uh where the agents decided that the they were done with all of the Zig code and they deleted all of the Zig code in one giant PR was flagged by another robot as this is AI slop. You can't possibly delete all of your code. Uh, which I thought was a fun aside.

**16:25** · Um, but there are some big caveats on that bun experiment. Somebody looked carefully at the ported code and it has 13,044 unsafe blocks. Uh in a comparable human written uh uh Rust code base of that size uh you would see about 74. So three orders of magnitude more unsafe memory unsafe blocks. An unsafe block is a place where the author asserts rather than proves uh that memory is being handled correctly.

**16:54** · So the test suite can certify behavior at the public interface. um it cannot certify 13,000 assertions that the test suite was never designed to look for. So they took humans out of the loop for sure. Uh but there is now no knowing what is lurking under the surface of their rust as a result.

**17:15** · So let's go back to OpenAI who have pushed this the first list because they show what skipping human review costs.

### OpenAI가 검증을 시스템으로 재구축한 방법

**17:21** · They didn't delete review, they moved it. uh codeex reviews its own changes uh then calls in more agents to review those reviews um in a loop until every agent reviewer is satisfied. OpenAI made Codeex bootable at every single change so that Codex can actually run a copy of Codeex, look at it, look at the UI, see if the bug has been fixed. Uh and they expose the whole logging stack to the agent. Um, and a line from their writeup says exactly what the Cisco study said, which is that when something failed, the fix was almost never to try harder.

**17:53** · It didn't work sometimes. Uh, and one detail that you'll recognize from your own week is that for a while on this project, they had to spend every Friday cleaning up AI slop uh by hand as humans. Um, so that eventually didn't scale and so they trained agents to look for AI slop and get rid of the AI slop.

**18:17** · uh review didn't disappear is the lesson of this of of this experiment. Uh it got rebuilt as a system and that system is built by humans.

**18:27** · So can you skip the human entirely? Uh someone who tried it for real and then changed his mind is Dexter Horthy. Uh he spent six months telling people not to review the code. He famously did that at AIE last year. Um he told people just ship, let the agent do its thing. Uh and in March this year on stage uh he took that back. Uh he said I was wrong.

### 덱스 호시의 반성: "제발 코드를 읽으세요"

**18:49** · Please please read the code. We tried not reading the code for like six months. It did not end well. We had to rip out and replace large parts of that system. That is not a benchmark. That is somebody who ran this experiment for real, tried it with real code on a real system uh and retracted his remarks. Uh OpenAI is running uh lived with the results um and reversed in public. Uh so Sarah Quo uh in the same writeup that I mentioned earlier talked about why that happens. Passing the test never told you that the change was the right change.

### 테스트 스위트가 결코 볼 수 없는 외부 맥락

**19:19** · It never told you that this module exists because there are three external users of this module. Uh it never told you that there's this cron job that nobody will admit to writing that relies on that module existing. Um there is context outside of the test suite that the tests don't uh can't find. So in everything that we've looked at so far, the human uh checkpoint is continuing to survive. It is moving around uh but it is surviving in predictable places.

### 인간 검증이 반드시 살아남는 지점

**19:50** · One is where correctness isn't cheaply checkable.

**19:54** · Another is where uh the blast radius is large. In security conscious environments, every time you tell people, oh, we can just get rid of human review, you would get an immediate no.

**20:04** · Uh wherever someone has to put their name on the result. Uh but what's happening is the human role isn't disappearing. It is moving up the stack, possibly several levels up the stack from inspecting the code directly to designing and tuning the systems that inspect the code and designing the definition of good. Which raises the obvious question, who reviews those systems? If you've built a system that does your reviews for you, how do you do the meta review of your reviewer? Um and the answer won't surprise you.

### 리뷰어를 리뷰하는 자는 누구인가? 프롬프트 인젝션 취약점

**20:31** · It is humans. uh Anthropic ships an automated security reviewer and in its readme it has a huge caveat uh which is this action is not hardened against prompt injection attacks uh and should only be re used to review trusted PRs. So anthropics code reviewer uh can be talked out of its findings by the very thing that it is reviewing. Um and that is a finding that has been reproduced.

**20:56** · In study in March this year reinforced uh that vulnerable code dressed up in an innocent commit message uh fooled an autonomous review agent in 88% of attempts. Uh the same attempts uh sent to a human reviewer uh pass only 35% of the time. So you you take the human out of the loop. uh you don't just lose a reviewer, you lose the thing that was hard to fool.

**21:19** · So automated reviews fall for confidently framed bad code and confidently framed bad code is exactly the kind of code that agents are very good at producing. They're very like this is good and I am ready uh and they uh are wrong sometimes. Um and the other problem is the field doesn't even agree yet on how to grade these graders. Uh benchmark scaffolds have been caught leaking answers. researchers disagree on how to review quality at all.

**21:45** · Um, which leaves one reviewer that you can't automate and you can't skip, which is production. Uh, once the premerge review is all machines, watching what the code actually does becomes the last reviewer standing.

### 최후의 검토자로 남은 프로덕션

**22:02** · Um, once the code ships, the test results stops being the interesting thing. The trajectory does what the system actually did step by step uh when it ran against the real world. Uh I'm not going to give a pitch for Arise here. There are enough pitches for ARISE at this conference. Uh but if you're shipping automatically reviewed code, then systems in production that review what it actually does in the wild become indispensable.

**22:27** · Um so after all that evidence, after all of that review of what the world is doing about automated code reviews, where I land is that code review isn't completely dead, but it is changing an enormous amount. uh it is being rebuilt as an engineered system. Humans are moving from being the engine that drives a code review uh reading code line by line uh to its pilots. Uh and given the numbers that we opened with that is probably the right trade.

### 코드 리뷰는 죽은 것이 아니라 재설계되고 있습니다

**22:52** · Every layer of that system, the benchmark, the classifier, the rubric, the test suite, the eval is itself unreed until somebody decides that that is their job. Um and the teams that win the next few years won't be the ones that generate the most code. They'll be the ones who can say with evidence why they trust what they shipped.

**23:12** · Uh, and I opened by promising you that I would give you with something practical that you could walk away with something that you can do today. Uh, and that is to stop reviewing PRs. Um, it is the wrong level of abstraction for 2026.

### 지금 당장 개발팀이 해야 할 일: 검증 하네스 구축

**23:25** · Your human judgment is extremely valuable, but it can be made to scale much further than it is scaling right now. uh pour your precious time into building uh a reliable review harness.

**23:38** · Codify your definitions of good, your company context, your domain knowledge, and then uh crank up the agents to work with that, you can go much faster than one-third faster. Uh if you concentrate your efforts higher up the stack of reviewers, rules, and evals. Uh I hope this look at what the industry is doing today has helped you what to helped you decide what you should do and what to expect next. Uh and thank you so much for your time and attention.

**24:08** · \[applause\]
