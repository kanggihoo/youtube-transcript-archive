---
title: "에이전트 PR을 사람이 전부 리뷰하지 않아도 되는 기준 — 맷 포콕의 자동 체크·자동 리뷰·사람 리뷰 3겹"
author: "AgentOS"
site: "YouTube"
published: 2026-10-03T19:38:39-07:00
source: "https://www.youtube.com/watch?v=wi3tZ-c48YU"
domain: "youtube.com"
language: "en"
description: "타임라인0:00 인트로 — 에이전트 PR이 쌓이면 리뷰가 막힌다1:10 슬롭 캐논과 브레이크 3겹3:18 첫 번째 겹, 자동 체크는 싸지만 거짓말을 한다4:41 에이전트가 쓴 테스트의 거짓말 세 가지8:13 딥 모듈 — 속이기 어려운 코드베이스 설계11:43 코딩 표준은 리뷰 에이..."
word_count: 5757
---

![](https://www.youtube.com/watch?v=wi3tZ-c48YU)

## Transcript

### 인트로 — 에이전트 PR이 쌓이면 리뷰가 막힌다

**0:00** · Thanks to agents, code is being produced faster than ever. But when that code comes up as a PR, a human eventually has to read it to merge it.

**0:06** · The creation speed has multiplied, but the review speed remains the same, so many teams have PRs just piling up in the queue. There is a presentation that tackles this problem head-on. It's an AI Engineer Conference talk uploaded to YouTube in late September titled " Fixing the PR Bottleneck." The speaker is Matt Pocock. He is famous for his TypeScript course "Total TypeScript," and he currently teaches how to develop with agents at AI Heroes. The collection of skills he released on GitHub is also widely used among developers. This channel has introduced his talks twice before. After watching this presentation, you can take away three things.

**0:34** · How tests written by agents lie, which agent should be given coding rules, and what the criteria are for a human not needing to read every PR. At the end of the presentation, Matt also reveals two new skills. I will include clips of the speaker throughout the video. I’ll display the Korean subtitles as well. Matt first brings up the term "software factory." It’s one of the most common buzzwords in the industry these days.

**0:54** · The software factory he defines is a factory where the entity initiating work is not a human, but the system itself. For example, if an error occurs in a service, instead of a person seeing the notification and creating an issue, a classification agent receives it first and decides whether to fix it immediately or reproduce it first. The human is only contacted when necessary.

**1:07** · It's not just errors that create work.

**1:08** · Databases also generate work. Maybe you have PlanetScale hooked up so it gives you query reports on the slow queries on your database. Maybe that then triggers a different, um, thing of your software factory. All of this is not humans triggering it; deterministic code triggering, right? And so these accelerate your software factory. They push more code through it, but then you need brakes, right? If you just have permanent acceleration pushing stuff through your factory, you're going to end up with a slop cannon, right?

### 슬롭 캐논과 브레이크 3겹

**1:38** · You're just going to end up with a ton of slop, crappy PRs that you're not going to be able to touch or review or even freaking look at. So you need brakes. These are mechanisms that slow down, that increase quality, that make sure that your codebase doesn't turn into a software entropy nightmare, because code is the environment your agent operates in. And if you have bad code in your codebase, that is going to beget more bad code. And so I'm going to talk about these three brakes in this talk and talk about how we can use them to counterintuitively go faster.

**2:13** · So automated checks. These are the deterministic checks in your repo that we've had for thousands of years, or you know, since the 50s. Deterministic checks where we have linting and tests and type checking and co-quality metrics. All of these things going together, and they all work the same every time. Layed on top of that, we have automated review. So we have agents who look at our code and say, ok , you know, these are for the things that the test didn't catch, or this is looking at the structure of the code base in general.

**2:41** · And then on top of that, the third layer, the final layer, is human review, so people looking at the PR. And these three layers form this kind of cake that we end up with when we get to human review. And so more speed, of course, means more PR, and so the goal here is to make human review faster by leaning on those first two phases, and we got to stop the slop .

**3:05** · That's the first principle here, which is: if you raise the quality of the code that you're shipping, you're going to end up doing less human review because it's just going to be better work, and so you're going to end up needing to make few interventions. The first layer is automated checks. These are the checks that machines run consistently every time you upload code . Things like linting for syntax or style, tests to verify the code works as intended, and type checks to ensure the value types are correct. When they all pass, a green checkmark appears on GitHub, and we usually feel reassured by that. The first thing the Webflow team points out about this layer is the cost. Automated checks are cheap.

### 첫 번째 겹, 자동 체크는 싸지만 거짓말을 한다

**3:35** · So automated checks. Now, automated checks are cheap. That's the cool thing about them is that they don't cost tokens like automated review does. They don't cost human effort. They just cost CPU cycles. So these are, for instance, you know, you run your tests on every code change. Maybe Those tests do incur tokens because, let's say, an agent, uh , creates a bug and the test catch it.

**4:00** · Then you need to spend some tokens to go and fix it. But those are tokens pretty well spent in my opinion. So checks are cheap. That means you can layer on loads and loads and loads of them on your repos, and you're probably not using enough of them or not being creative enough with your use. But checks can lie. Does a green C mean that the code is ready for merge? No, it does not. And so, we've always needed on top of these checks some extra layer to figure out if there's anything catastrophically wrong with the code before we ship it.

**4:31** · And so, all of the other phases, the human review and automated review, these are lie detectors. These are for finding lies in the automated checks. What does it mean for a test to lie? Tests are essentially code that verifies whether other code works correctly. But if the verification method is flawed, it might just give you a green light without actually checking anything. Here's an analogy. It’s like saying you’ve verified your weight by just reading a number from your notebook instead of actually stepping on the scale. Or, when testing a fire alarm, it’s like replacing it with a dummy that never goes off and feeling relieved that it's quiet today.

### 에이전트가 쓴 테스트의 거짓말 세 가지

**5:02** · The former is a test that just repeats the values in the code, and the latter is a misuse of the " mocking" technique, where real components are swapped with fakes. I found three types of these lies in the tests my own agents actually wrote. I'm showing this first because it demonstrates how bad things can get with automated tests. The first is tautological tests. A test that just reasserts the implementation. Opus 5 got addicted to these. I don't quite understand why.

**5:31** · It would have, for instance, an X post character limit of 280. Can anyone guess the test that was written to test this behavior? Right?

**5:41** · You've probably seen this a thousand times. This is real code from agents or from stuff that I found my agents doing . It said, expect X post character limit to be 280. So the implementation looked like that, and the test essentially reasserted the implementation. That is a tautological test. And tautological tests are bad because they're extremely structure-sensitive. They're very sensitive to the actual internal workings of the system. So it means I cannot change that constant without a test failing.

**6:12** · I also cannot rename that constant without a test failing. It’s so tightly tied into the structure of my system. And I found another one which is even more egregious, I would say. This is an incredible, uh, test.

**6:29** · What it's doing here is it's essentially testing whether two things in the UI appear in the right order. So it's checking that the pitch detail page, or rather the video section, comes after the content plan. What it does is it doesn't render it to a screen; it just reads the actual file, the module, into its own memory.

**6:47** · And then it's finds the right thing: finds content plan, finds videos, and then it expects the videos to be after it in the source material, which is crazy if you think about it, cuz I can just, like, change the way the source material looks and this test will fail.

**7:05** · It's too sensitive to the structure of my code base. So that's another way that automated checks can fail, and there are also or sorry, automated checks can lie. There are also tests that literally cannot fail, and this will feel familiar to you if you've abused mocking in the past or abused various things. For instance, here we have a use audio boost function, and this use audio boost function, uh, its internals use the Audio Context API in the DOM.

**7:33** · Don't worry if you don't know any of this, but what we're doing here is we're just stubbing it out with some fake methods. And it turns out that Audio Context has some complicated error modes, and it will fail if you use it under strange conditions. And so just doing this means our test cannot fail using those modes, and we're going to hit strange errors in production that our tests can't fix.

**7:52** · And so the question is then: if you can cheat on automated checks if you know and even in good faith ways as well the AI isn't trying to write bad tests here; it's just taking our instructions and writing tests are too executing.

### 딥 모듈 — 속이기 어려운 코드베이스 설계

**8:14** · The solution proposed here is "deep modules." It's a concept from the book "A Philosophy of Software Design" by Stanford professor John Ousterhout. A good module is simple to use on the outside while hiding complex behavior on the inside. It’s easy to understand if you think of a car. The driver's seat only has a steering wheel and two pedals, while the engine and transmission work in complex ways behind them. When testing driving skills, you only need to check the steering wheel and pedals; even if you change the engine, the test method remains the same. Tests are exactly the same. Tests that only hit the simple interface don't break even if you change the internal implementation. The "lying" tests we saw earlier were all messing with the internal implementation.

**8:42** · So, the first method I suggest to make automated checks harder to cheat is not about testing, but about codebase design. How do we make automated checks harder to cheat? If we can do that, then we can increase the quality of those checks, which means increases our quality bar. And the first thing I really like about this is codebase design. So you can actually design your way out of these bad checks . So what is good codebased design look like? I've talked about this before in previous AI engineer talks I've given, which are deep modules.

**9:12** · These are modules that hide complex behavior behind simple interfaces. This is a John Ousterhout idea from A Philosophy of Software Design. If we look at these two modules, we have A, which has a large implementation hiding behind a tiny little interface at the top. Okay.

**9:30** · And then B is a large interface. Lots of functions you can call. And those functions individually don't do very much. Does that make sense? Yeah. Now, if you have a deep module like A here, you're going to have fewer structure-sensitive tests because you're hiding more of the implementation behind that interface.

**9:50** · If you're just testing at that interface, you're going to get better tests. And so your job here is to force the agent to use that little interface instead of reaching into the implementation to test these weird implementation......details. So, I've got a skill for this. You can have the weirdest, crappiest codebase that you've ever set your eyes on, and you can...Run this skill on it, and it will make it better. What this essentially does is give you opportunities for deepening modules, and it kind of looks like this.

**10:22** · Raise your hands if you've used this skill. By the way, not sure how many of my folks are in this room. Yeah. Okay. It's really freaking nice.

**10:30** · Essentially, it gives you an HTML document. I'll get out of the way here of all the different, um, potential opportunities it sees. So, we can see here we have a before and an after, where we're sort of like reducing duplication. We're creating a nice, deep, testable module. And then you can go ahead and implement that. And attached to this, there's also this kind of language that I've put together for describing modules. Because if you ever try and read up about how to structure a codebase, you're going to find 20 different approaches, and they're all going to be called DDD.

**10:59** · And what you need is a consistent language that you can use in your team to talk about this stuff. And so I have a little codebase design skill that defines what locality is, defines what leverage is, and defines what a seam is . I was using seams before they were cool. And what locality means is kind of how well-located together all of the code is. How can you make a small change in one module and have it ripple out?

**11:28** · And also, leverage is what you get when you have a deep module, because the caller, the person who's actually calling that module, gets a lot of value from calling a simple function. Both of those are very good in code bases and good for agents to it turns out. Once you have good standards, you need to make the agent follow them.

### 코딩 표준은 리뷰 에이전트에게

**11:46** · Usually, people write a bunch of coding rules in files like Claude.md or agent.md. Because the agent reads these files first whenever it starts a task.

**11:52** · But for an agent, is there a limit to what it can hold in its "mind" at once?

**11:55** · Yes, there's a limit called the context window. In terms of a kitchen, it's the size of the countertop. If you tell a chef to cook while also following a 30- line hygiene checklist, the counter gets crowded, and both the cooking and the checks end up sloppy. I see many people doing the exact opposite here.

**12:07** · So, how can we actually get the agent to follow these standards? But I'm sort of describing all of these highuting coding standards. But how do we actually make sure the agent does them?

**12:19** · Right? How do you make sure the agent creates deep modules and creates good tests and doesn't write these crap totological ones or structure sensitive tests? Well, I do think most people get this wrong. And my first piece of advice is don't put coding standards in your implement agent. Ok, let me explain this. If you imagine the implementer agent kind of looks like this where this is all of the things the agent needs to be able to do in its single context window.

**12:50** · It needs to be able to explore like to look for the code that it's going to change. It then needs to actually change it. So make the updates to the files in the green.

**13:00** · And then it needs some budget for actually debugging the thing. So for running those uh automated checks for actually checking and verifying that it works. Now this is quite a lot of work it turns out. And if you try to impose your coding standards on it as well, it's going to perform worse. So implementation is overloaded. That's the mental model I want you to have.

**13:24** · And so can we find a way to impose those coding standards in a way that isn't so overloaded? Well, this is my effort. This is my code review skill.

**13:33** · and it receives a diff and it reads a file inside the repository called coding standards which you can write, you can customise, and then it checks if the code follows those standards. So if we look at the reviewer agent here, it also crucially runs it as a subagent so it's got its own context window to handle this. It's got its own budget.

**13:54** · This one needs to do some exploration, right? Because sure, it receives the diff so it knows exactly where it's located, where the code is, but it should probably do a bit of exploration just so it has the wider context and understands the code, but it doesn't need to do any implementation, doesn't need to do any debugging. So, while implementation is overloaded, review is actually underloaded. So, it doesn't have that many jobs to do.

**14:19** · This means you can pile a bunch of coding standards onto it and it will do a much better job than if you try to do it with the implementer. So I think of this—and this is uncomfortable, right , because we all want to be able to just get good code out the first time —but I think of this as a two-part process for writing good code: which is implement, where you make it work, and then code review, where you actually make it good and impose your coding standards.

**14:45** · And for, you know, the retro developers among us, this is essentially a red-green-refactor approach. We use one context window to make it okay—to do the red-green— and then we do another context window to refactor it. That's at least how it works in my head and it's been very successful for me. This means that when you have coding standards, you don't put them in the global scope. You don't put them in agents.md, or then they sort of drown out your implementation and it may not work.

**15:13** · And that way the code review...So, should we build our own review agent? There are many services today that automatically leave review comments when a PR is opened.

### 리뷰어는 코멘트 대신 커밋한다

**15:25** · Things like Cursor's Bugbot or CodeRabbit. Since you can use them right away just by installing them, many teams solve automated reviews this way. But Mapo's thinking here is a little different. They're going beyond the issue of choosing a service and suggesting we change what the review agent actually does. Mapo has been hearing this a lot lately, too. I've got another idea here, which is that I've been talking to lots of people today. Lots of people saying, you know, I've been talking about review, automated review, increasing efficiency , you know, fixing the PR bottleneck.

**15:50** · So many folks say, "Oh yeah, we just use a third-party service.""We use Cursor Bugbot.""We use CodeRabbit or something like that." I think that I've I've really tried to make a generic code review skill in the past that finds all the bugs and does security review and that kind of thing. It turns out it's really really hard because you either make it too general and it just gives you false positives that aren't actually relevant to your use case or you make it too specific. you say, "OK, find all the Typescript stuff and then Rust people can't use it." So, I would say don't outsource automated review.

**16:25** · Build your own. Build up your own coding standards over time. Share them across your team. And if you have an opportunity to impose coding standards, if you've got some docs sitting around that no one reads, this is the place to put them in. And also when you have this automated reviewer, a really natural inclination for lots of people is to say, "Oh yeah, my code review agent." What it does is it reads the code and then it comments on the PR. Uh so what your code review agent is doing in that case is it's providing more work for the human reviewer.

**16:56** · The human reviewer then has to read all of these verbose comments and figure out, ok, do we implement this? Do we implement that ? The reviewer should commit. It should make fixes. So it should actually change the things that it finds because then when the human comes around you're reviewing a really nice artifact. If it finds anything that it has any questions over then of course it can comment. But the default should be commits. Stop trying to one shot good code.

**17:23** · Stop trying to make the implementer agent the only thing that you do and go I'm going to force it amazing. It takes a little bit of thinking out there, but once you realize it, The last part is the human review. What Mapok brings here is a term for decision-making from Amazon. One-way doors and two-way doors, a metaphor famously used by Jeff Bezos in his shareholder letter. A two-way door is a decision you can walk back out of if it's not right, while a one-way door is a decision you can't return from once you've passed through. Most PRs are two-way doors. Because if a problem arises after a merge, you can just revert it.

### 한쪽 문, 양쪽 문 — PR 스킬

**17:54** · So, human time should be spent on one-way doors. The new skill Mapok is building is to have these criteria written directly into the body of the PR. The PR, having gone through automated checks and automated reviews, now reaches the human. So, okay. With all of that process, we've run our automated checks. We now run our automated review to make sure the automated checks aren't lying.

**18:12** · 그렇다면 어떻게 사람 의 검토 관점 에서 PR 의 품질 을 극대화 할 수 있을까요?

**18:16** · 어떻게 하면 최상의 결과물 을 만들어 낼 수 있을까요?

**18:19** · 그래서 우리 에겐 인간 친화적 인 PR 이 필요 합니다. 이것은 현재 저장소 에 추가 되고 있는 새로운 기술 로, 아직 작업 중 입니다. 조만간 PR 기술 이라는 이름 으로 공개 할 예정 입니다.

**18:29** · 오랫동안 고민해 온 주제 이기도 하죠. 아직 업계 표준 이 무엇 인지 확실히 정의 된 것은 없으니까요. PR 의 규모 를 키우는 가장 좋은 방법 은 모두 가 가진 최고의 아이디어 를 가져 오는 것이라는 걸 깨달았 습니다.

**18:40** · 그건 아주 좋은 일 이죠.

**18:43** · 그렇다면 좋은 PR 본문 은 어떤 모습 일까요? 어떻게 이 기술 을 스스로 재현 할 수 있을까요? 첫 번째 원칙 은 어떤 검토 는 다른 것 보다 더 중요 하다는 점 입니다. 모든 검토 가 필수적인 것은 아니 니까요, 그렇죠? 이걸 이해 하고 나면 정말 중요한 검토 에 에너지 를 집중할 수 있다는 걸 알게 됩니다.

**19:05** · 하지만 그걸 어떻게 분류 할 수 있을까요? AWS 용어 를 빌려 PR 을 일방 통행 문 인지 양방 통행 문 인지 생각해 보면 됩니다. 대부분 의 PR 은 양방 통행 문일 것 입니다. PR 을 병합 해도 나중에 언제든 되돌릴 수 있으니까요. 토목

**19:23** · 엔지니어 와 달리 소프트웨어 엔지니어 로서 누리는 엄청난 혜택 이죠. 토목 엔지니어 에게는 대부분 일방 통행 문 이잖아요, 그렇죠? 무언가 잘못 되면 다리 가 무너질 수도 있으니까요. 하지만 양방 통행 문 이라면 변경 사항 을 쉽게 되돌릴 수 있다는 뜻 입니다. 그런데 이건 어쩌면...생각 보다 더 미묘한 차이 가 있을지도 모릅니다. 아주 간단한 변경 이라도 실수 로 6 만 명 에게 이메일 을 발송 하게 된다면, 그건 일방 통행 문 이 됩니다.

**19:49** · 그런 건 아주 세 심하게 검토 해야 하죠. 비용 이 많이 드는 마이그레이션 이나 데이터 손실 이 수반 된다면, 그 역시 일방 통행 문 입니다. 그런 PR 은 철저 하게 검토 해야 합니다. 또한 이와 관련 하여 PR 의 영향 범위 도 이해해야 합니다. 무엇이 잘못 될 수 있을까요? 만약 문제 가 생긴 다면, 얼마나 심각 할까요?

**20:06** · 그래서 저는 모든 PR 하단 에 병합 위험 이라는 멋진 요약 을 덧붙이 곤 합니다. 이게 양방 통행 문 이라는 걸 확인할 수 있죠. 영향 범위 가 제한적 이라는 뜻 입니다.

**20:17** · 그래서 아주 좋다고 판단 할 수 있죠. 여기 에 큰 주의 를 기울일 필요 는 없습니다.

**20:21** · 그냥 가볍게 검토 만 하면 되니까요. 그게 정말 중요 합니다. The second element to include in a PR body is what exactly this PR changes. Mafo opts for pictures instead of text here. It's an idea borrowed from a skill released by Dex at Human Layer, who builds agent development tools, showing changes with pseudo-code and diagrams instead of long explanations. So, how can we show what a PR does at a glance? Next, we need to understand what the PR is even doing, right? And I've tried lots of different ways of figuring this out.

### PR이 무엇을 하는지 보여 주기

**20:47** · And the best thing I've come up with is using pseudo code. Now, a huge point of gratitude here to the "show me" skill from the Human Layer skills repo by Dex Halty; it's a phenomenal skill that essentially dispenses with most text and shows things to you in images and diagrams instead. This makes it a lot easier to grasp actually what's changing and why it's changing.

**21:11** · So you get the kind of standard sort of set of like mermaid diagrams and UML for, you know, this is a sort of sequence of things that happened. You also just get these lovely simple ones like this. For instance, we can look at this and go, " Okay, we're working in a CLI." We can see a new command has been added. And we've got two new things, little flags up the top here. Just little summaries like this. It really does make a massive difference. Overstate. So trying to make understanding the "why" as fast as possible. The final topic is the perspective on reviews.

### 같은 지적을 두 번 하지 않기 — retro 스킬

**21:43** · Development teams have a culture called a retrospective. It’s a time to finish a cycle, look back at what went well and what didn't, and decide what to change next. Let's say a teacher corrects the same spelling mistake in a student's notebook with a red pen every time. The number of corrections piles up, but the mistakes don't decrease. If you write that rule at the front of the notebook, those mistakes stop happening . Mafo's third principle is that reviewing PRs created by agents is the same. When a human reviews, they shouldn't just look at the code, but also at the system that created that code.

**22:10** · And I think a third principle here is something you should be thinking about whenever you do human review because we're not doing like...

**22:20** · Because our processes now are so sort of streamlined and we're all collaborating around these same skill files, these same steering files. We're all building an environment for our agents to operate in together. You should think of the process that produces your code as just as important as the code itself. In other words, when you do a human review, you're not just reviewing the code, you're reviewing the system that creates it.

**22:48** · And the theory here is that you never want to write the same comment twice, right? You never want to catch the agent doing the same thing over two PRs . And so, what's the mechanism by which you can make your human review matter?

**23:02** · Well, this is a new skill. This is called retro. retro for retrospective.

**23:07** · You essentially take a session that you've done. It can either be like a single um agent session or it can be a PR plus the session or you can just get it to look at ok look at all of the PRs that we've done over the last week. All of the reviews, pull them all in. Let's do a retrospective on them. And it will suggest automated checks and coding standards to make the next one better.

**23:30** · So this is the compounding effect where you essentially by doing human review you're making the quality of the next human review higher and you're sort of saving less work from yourself next time. And retro is a really smart skill . It adds a bunch of stuff. So obviously it suggests automated checks.

**23:46** · It suggests updates to codingstandards.md. It does other smart stuff too. So it looks at navigation pointers. How easily did the agent find its information? Can we provide a pointer inside agents.md to help it out next time? It looks at tool economy.

**24:02** · Are there different tools that we're using in the session that can, you know , could be made more token efficient?

**24:07** · It's amazing how many things this catches actually cuz those are often really hard to debug from the outside.

**24:13** · It just looks at bloat as well. So, are there bloated steering files? Are there bloated skills that contribute to these bad results? Can we make them more organised? So that's the goal is to make human review faster. We do that by layering up automated checks. We laying up automated review and we make the human review as painless as simple and as kind of optional as we need it to.

**24:37** · You really don't need to review every single PR. Let me summarize. In an era where agents pour out PRs, the reason human review becomes a bottleneck isn't because humans are slow. It's because the quality of the PRs reaching humans is too low. That's why McPhee suggests building layers to filter things out before they reach humans, rather than just finding ways for humans to read faster. Design the codebase so that tests cannot lie, give coding rules to a review agent rather than the implementation agent, and have that review agent fix and commit directly instead of just leaving comments. And humans should spend their irreplaceable time on the important parts, moving any repeated feedback into rule files or automated checks.

### 마무리

**25:08** · By doing this, today's review will make the next one a little easier. The PR skill was still under development at the time of the announcement, and the Mapfo skill collection is set to be released as version 1.3 this week. I'll leave the link in the description box. Subscribing and liking really helps me make these videos.
