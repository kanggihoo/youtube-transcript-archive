---
title: "클로드 코드 팀은 이제 코드를 안 읽습니다 | REVIEW.md와 7개 리뷰 레이어"
author: "개발동생"
site: "YouTube"
published: 2026-10-25T01:42:21-07:00
source: "https://www.youtube.com/watch?v=J6MsYjDB93k"
domain: "youtube.com"
language: "en"
description: "이 영상은 길벗출판사로부터 도서를 협찬받아 제작했습니다.「AI 자율학습 클로드 코드·코덱스 CLI 완전 활용법」 10권 증정 이벤트는 고정 댓글에서 참여하실 수 있습니다.Claude Code 팀은 코드 읽기의 대부분을 AI 에이전트에게 맡기고, 조건을 충족한 저위험 PR은 사람 승..."
word_count: 3970
---

![](https://www.youtube.com/watch?v=J6MsYjDB93k)

## Transcript

### 인트로, Claude Code 팀이 공개한 코드 리뷰 방식

**0:00** · Think of REVIEW.md as a file the Claude Code team uses to tell AI reviewers how to review.

**0:07** · The Claude Code team hands most of the code reading to AI agents, and for low-risk PRs that meet certain conditions, they even skip human approval.

**0:17** · By the team's own figures, from June to September, merged PRs more than doubled, and the share that had to be reverted after merging dropped by about 40%, they say.

**0:27** · So today, we'll look at the 7 code review layers the Claude Code team runs, and we'll also consider how to bring this into our own projects.

### 리뷰 시간과 배포 품질을 같이 봐야 하는 이유

**0:36** · What matters here is how much less time human developers spend on code review.

**0:41** · But if the review burden went down, only for outages to rise after deploying and fixing them to take more time, it's hard to say you actually saved time.

**0:52** · So the Claude Code team looks at both the review burden and the quality after deployment.

### 한 번의 리뷰로는 다 잡을 수 없는 이유

**0:59** · To reduce this burden, the Claude Code team split the process from code verification to recovery into 7 layers in total.

**1:08** · No single review can catch everything.

**1:12** · Because each verification layer catches and misses different problems.

### 7개 레이어 한눈에 보기

**1:17** · First, before opening a PR, the agent runs its own work and verifies the results itself.

**1:23** · At the PR stage, there's AI code review, plus a separate security review and required CI checks.

**1:31** · Then, based on the risk of each change, they decide whether to add human approval.

**1:37** · And before a PR actually merges into main, it's also checked against the latest code one last time to make sure nothing breaks.

**1:45** · And finally, the post-deployment stage matters too.

**1:48** · Even after deploying, you need to keep watching for problems and build a system that recovers quickly when things go wrong.

**1:54** · That's really important.

**1:55** · So with this map in mind, let's quickly go through it, starting with the first layer.

### 레이어 1, PR을 만들기 전 검증

**2:00** · The first layer is before you create a PR.

**2:03** · In traditional development, once the code was written and a developer opened a PR, a teammate would review that PR and leave comments. That was the norm.

**2:14** · Now that we develop with AI, just like getting spell-check in real time as you write, you can keep reviews running as you code.

**2:24** · First, have Claude Code verify its work.

**2:27** · For example, have it run tests and builds, and visually check the results itself.

**2:34** · For frontend work, it can compare the design mockup and the result by taking screenshots itself.

**2:40** · Instead of just saying "Done," checking what it actually ran and what results it got is what matters more.

**2:49** · Next, you have a separate subagent, one with its own context window, review the code diff.

**2:58** · With a different view from the main agent, it takes a fresh look at the code.

**3:03** · If the same comment keeps coming up, instead of telling Claude Code "fix it, fix it" each time, it's really important to make sure recurring mistakes don't keep happening.

**3:16** · For example, to CLAUDE.md and your skills, you keep adding these standards, and anything you can catch mechanically, you'd also move into lint rules.

### REVIEW.md, AI 리뷰어에게 기준 알려주기

**3:28** · Next is the REVIEW.md file.

**3:31** · Even if you run reviews frequently, with no project-specific review standards, you can end up with more and more trivial nitpicks.

**3:40** · So the file that defines what your project considers important is REVIEW.md.

**3:48** · If the CLAUDE.md we already use covers your project's tech and working standards, then REVIEW.md is the file that, during code review, specifies what to flag and what to skip.

**4:00** · Think of it that way.

**4:02** · For example, if you're building a payment module, you'd need to prevent duplicate charges, and for a module that handles permissions, whether users can access others' data is what matters.

**4:14** · So how many minor nitpicks to allow, whether to skip certain paths in review, and what evidence to give when flagging something can all go in here.

**4:23** · Instead of just going by a function name and saying it looks risky, you can have it show the actual file, line number, and the conditions under which the problem occurs.

### REVIEW.md가 적용되는 곳과 로컬에서 쓰는 법

**4:34** · That said, REVIEW.md isn't defined as an open standard yet.

**4:40** · For now, Claude Code's GitHub-connected code review feature does use REVIEW.md.

**4:45** · But when you run code review locally with Claude Code using the /code-review feature, it doesn't apply yet.

**4:54** · So if you want the same standards locally, as shown on screen, you can ask it to read REVIEW.md directly and then review the code diff.

### 길벗 도서 협찬과 10권 증정 이벤트

**5:04** · Let me pause here for a quick ad before we move on.

**5:08** · Once again, this video's book sponsor is Gilbut Publishing.

**5:12** · And so you can benefit too, I've brought another giveaway of 10 copies of the book.

**5:18** · The book I'm introducing today, written by Janjaemi Coding, is "AI Self-Study: The Complete Guide to Claude Code &amp; Codex CLI."

**5:27** · What sets this book apart? The top two coding agents, Claude Code and Codex, can be compared in one book. That's the big difference.

**5:35** · For those just starting out with AI, it covers how the two tools differ, how to choose between them, and core features like instructions, permissions, skills, and hooks, well laid out to learn step by step.

**5:46** · And for those already familiar with them, like what I'm showing you in this video, it covers harnesses for building repeatable workflows and even loop engineering.

**5:56** · I use both Claude Code and Codex myself, so it was great to see both tools together in a single book.

**6:03** · Now, here's how to join the giveaway.

**6:06** · Between Claude Code and Codex, which one do you use, or which one would you like to use?

**6:11** · Leave a comment.

**6:12** · I'll pin a comment with the entry link, so just click it and submit your entry.

**6:19** · I hope many of you take part.

### 레이어 2, 모든 PR에 AI 코드 리뷰

**6:20** · The second is the stage where you add AI code review to every single PR.

**6:25** · Earlier, I mentioned using REVIEW.md to write down your review standards.

**6:29** · But even with standards in REVIEW.md, without knowing the intent of this change, the review can go way off track.

**6:40** · So letting the review agent see not just the code diff but also the existing code and the intent in the PR is really important.

**6:48** · I once posted a video on INTENT.md, and said clarifying intent before coding is really important.

**6:56** · The Claude Code team has a reviewer agent that finds bugs and an agent that checks whether each finding is a real problem, and they keep the two separate.

**7:06** · So instead of counting review comments, finding real, well-grounded problems is what you should focus on.

**7:14** · You can also add agents to your project to handle PR reviews.

**7:18** · Claude Code offers managed review, Codex has a built-in code review agent, or, purely for code review, there are services like CodeRabbit.

**7:29** · Of these, I use Codex and CodeRabbit a lot.

### 레이어 3, 보안 리뷰

**7:33** · Now on to the third layer.

**7:35** · The third is the security review layer.

**7:37** · Even if the previous review layer checked that features work as intended, security still needs reviewing.

**7:44** · For example, a user could access another user's data, or an external command could end up running on your server.

**7:52** · Problems like that can happen.

**7:54** · So on top of regular code review, a layer focused purely on security review gets added as well.

**8:01** · Claude Code has this built in, too.

**8:04** · In the Claude Code CLI, locally, you can use /security-review to run a security review.

**8:12** · Or, when a PR comes in, at the CI stage, a GitHub Action that runs security review automatically can be hooked up as well.

**8:20** · But what runs automatically in CI uses an API key and is billed per use, so you'll be charged separately for it.

### 구독 요금제로 보안 리뷰 돌리기(맥 미니 실행 머신)

**8:28** · So I hooked up my existing subscription plan and set things up so I can use it, with my Mac mini that runs 24 hours a day, and registered it as a GitHub Actions runner machine.

**8:40** · And for the PRs I open, Claude Code on my Mac mini runs its security review on them. That's how I set it up.

**8:48** · But it's hard to guarantee that these results alone will catch 100% of all security issues.

**8:55** · Still, adding a security review layer to every PR as one more step is meaningful.

### 레이어 4, 필수 CI

**9:00** · The fourth layer is required CI checks.

**9:04** · Required CI means checks like lint, type checks, tests, and builds, things you can judge by running them, run on every PR, and if one fails, you can't merge.

**9:14** · That's the blocking policy you add.

**9:17** · And the AI code review layer from earlier and the security review layer can't just end at comments.

**9:25** · Directly fixing the issue the AI flagged, or, if the AI review was a false positive, explaining why you didn't fix it in a comment reply is really important.

**9:36** · Even these comments you leave can later be used for your review agent as an eval set that keeps improving it.

**9:45** · I'll get into how to use these later in a bit more detail, so please watch until the end.

**9:51** · On GitHub, things like branch protection rules can be set up.

**9:55** · You can require the status checks I mentioned to pass, and if unresolved review threads remain, you can set a policy blocking the merge.

### 레이어 5, 위험도에 따른 사람 승인

**10:05** · So the fifth is the human approval layer.

**10:08** · Put simply, compare a change that edits one line of text on screen with one that changes how much customers get charged, meaning the payment calculation code.

**10:17** · If something goes wrong, the damage is on a very different scale.

**10:21** · So here, the Claude Code team uses a separate classifier agent.

**10:25** · This classifier reads the changes and sorts them by risk level.

**10:31** · If the risk is low, the PR merges without any human approval.

**10:35** · If the risk is medium, it also needs 1 human approval, and if the risk is high, you add a policy requiring 2 human approvals.

**10:45** · The number of people required here can include the person who created the PR.

**10:50** · So if the person who gave the AI the task has personally checked the code diff and verification results, then for medium-risk changes where 1 person's review is enough, it can merge without a teammate's review.

**11:02** · That's how the policy works.

**11:04** · But when it comes to granting reviewer permissions, you can't just give them to anyone.

**11:09** · So when applying this to your team, people who know the codebase well, who can judge the verification results, and who can respond quickly if something goes wrong, should be the ones you give it to.

**11:22** · Where a human needs to review, swapping in AI review isn't right either.

**11:26** · On a team I used to lead, I ran a similar review policy.

**11:30** · When a PR went up, the AI reviewer would leave a full code review, and once every review was fully handled, meaning resolved, you could merge. That was our policy.

**11:40** · So the key isn't pulling in a teammate for every single PR, it's identifying which PRs need a teammate's judgment.

**11:47** · Building that system is crucial.

### 레이어 6, 머지 큐와 기능 플래그

**11:49** · In the sixth layer, you use a merge queue.

**11:53** · Even if two PRs each pass their checks, combining the two can cause new problems, so when merging into the latest main, the diffs of both PRs are combined and checked once more, and only when that passes can it actually be merged into main.

**12:12** · And when deploying, the Claude Code team also uses feature flags, they say.

**12:16** · Simply put, it's a small switch in code that turns a specific feature in the app on and off.

**12:21** · That's what it means.

**12:22** · So you deploy the code, but set a flag so only certain accounts can use it.

**12:28** · The Claude Code team usually, when shipping a new feature, first sets a flag so only internal team members can use it and deploys it that way.

**12:35** · Team members actually use it first and verify whether there are any problems.

**12:40** · So in your project too, with feature flags like this, you can try it internally first, check that there are no problems, and gradually widen who can use it.

**12:51** · With feature flags, when you deploy code and when users get the feature can be split, which is a big advantage, I'd say.

**13:00** · And the Claude Code team splits releases into separate channels.

**13:04** · When a new version comes out, it goes to the latest channel first, and the stable channel follows after that.

**13:12** · Feature flags decide who gets to use which feature, and release channels control which version you get.

### 레이어 7, 빠른 감지와 복구

**13:20** · And the seventh and final layer is the post-deployment stage.

**13:25** · When something goes wrong after deploying, it's about building a system that lets you recover quickly.

**13:31** · We've stacked up many verification layers, but in reality, catching every problem perfectly during verification is nearly impossible.

**13:40** · So after deployment, the Claude Code team has the person who built the feature and whoever's on incident duty, the on-call engineer, both keep watching things after the deploy.

**13:52** · The on-call engineer, on incident duty, is on shift for a set period, gets outage alerts, and if there's a problem, quickly handles the initial response.

**14:04** · And the feature flags I mentioned earlier can act as an emergency switch here.

**14:08** · You can quickly turn the flag off and disable the feature.

**14:14** · Of course, flags alone won't solve every problem.

**14:17** · You may have to fully revert to an earlier version or deploy a new version that properly fixes the problem.

**14:23** · So really, rather than finding a way to recover after a problem has already happened, deciding how to recover before you merge matters more, I'd say.

### 사고를 AI 리뷰어의 기출 문제집으로

**14:34** · And just because you've recovered, it's not all over.

**14:37** · Figuring out which verification layer should have caught the problem in the first place, looking back like that is crucial.

**14:45** · So when an incident happens, the Claude Code team takes the incident records and history and turns them into a bank of past exam questions for the AI reviewer.

**14:54** · They collect PRs that caused outages or got reverted, along with the fixes, and together with developers who know that code well, they pin down the actual bug and where it is in the code, and keep adding it to an eval dataset.

**15:08** · That's the process.

**15:09** · And they make the AI reviewer go through this question bank again and again, every single day.

**15:15** · For example, when the prompt, model, or tools change, the AI reviewer's behavior itself can change.

**15:22** · Even then, by having it solve the existing question bank and making sure every problem still gets solved, you can maintain the AI reviewer's review quality, check whether it now catches bugs it used to miss, and whether bugs it caught before are still being caught this time.

**15:40** · If the REVIEW.md I mentioned earlier is the review standard the AI follows when reviewing, then this eval dataset is the AI reviewer's exam on how well it finds real problems.

### 리뷰 답글로 불필요한 지적 줄이기

**15:53** · Earlier I said that when you resolve review comments, you should leave a note on why you resolved them, remember?

**16:01** · If you use the reply history on review comments, that can also serve as an eval dataset.

**16:07** · Whether the AI's point was accepted and fixed, whether the review itself was a false positive, or whether it was intended behavior and the review was wrong, you can check all of that.

**16:18** · So by separating these out in the eval dataset, you can also check whether it keeps making unnecessary comments.

### 리뷰가 끝나도록 만드는 규칙

**16:26** · So the priorities in review are: first, actually catching bugs, and second, cutting unnecessary fixes.

**16:34** · To cut down on unnecessary reviews, so that reviews don't go on forever, after a few rounds of review, have it focus on the new code diff, and not repeat points it already made.

**16:47** · That's a good way to design it.

**16:49** · The Claude Code team kept reducing this repetition, and the rate of passing with just one review went up from 65% to 78%, they say.

**16:58** · So in the end, the reviewing AI itself also needs to be something you verify.

**17:03** · That's how we should see it.

### 그래도 사람이 판단해야 하는 일

**17:05** · But one thing that doesn't change is this: no matter how much we keep improving the AI reviewer, it's really hard to completely eliminate the need for human judgment.

**17:15** · For example, whether we really need to build this, and how far to implement it, deciding that is a call a human has to make.

**17:22** · And code like payments or deployment, where problems cause big damage, ultimately needs a human to check it to some extent.

**17:29** · And for architecture or code structure others will refer to later, whether the design is right is something we developers need to check ourselves.

**17:37** · And checking what the AI verified is ultimately a human's job too.

**17:42** · Rather than just reading "All tests passed" and stopping there, you should understand what was checked and what couldn't be.

**17:51** · And if that scope is unclear, you should be able to ask a teammate for another full review.

### 리뷰로 배우던 기회 지키기, 시각화와 맥락 공유

**17:57** · And with AI taking over reviews, one more thing has shrunk: teammates looking at my code have far fewer chances to learn from it.

**18:06** · In fact, code review used to be about finding bugs in teammates' code, but also about seeing what changed and how it connects to our system and learning from it.

**18:17** · With Claude Code, you can pick a module you're about to change and ask it to explain it based on the current code.

**18:25** · And you can have it build a small visualization artifact so you can quickly understand the structure of the code.

**18:31** · It's an efficient way to use it.

**18:33** · I'll put a prompt on screen for reference.

**18:36** · For example, if this is a feature that calculates order totals, where requests come in and which functions they pass through is visualized so you see it at a glance.

**18:45** · The key is not to glance at the diagram, think you get it, and move on.

**18:48** · Claude Code's explanation and the code behind it, check them side by side, and confirm for yourself which part you'll change.

**18:56** · Going a step further, for example, you could post in your team's Slack channel what you worked on, what the goal was, and what changed.

**19:04** · Sharing things like that can be a really good move.

**19:08** · That way, each other's work context can be seen by everyone, which is a huge advantage.

### 우리 프로젝트에 도입하는 4단계

**19:14** · If you want to try adopting this now, it's honestly hard to build it all perfectly from the start.

**19:21** · So I recommend starting small at first.

**19:24** · My first recommendation: in your PR template, Testing, Risk, How to revert, start by adding these three fields.

**19:34** · What you verified, how far the impact goes if something breaks, and finally, how to revert it. You write those down.

**19:40** · Second, add AI code review to every PR, and one more layer on top of that, a security review layer.

**19:49** · And in the CI stage, required CI checks should be added too.

**19:53** · But if CI automation is still a burden, first run these small steps locally, then move the checks you keep repeating, one at a time, into the PR automation stage.

**20:04** · Third, looking at actual AI review comments, you keep refining your project's own standards.

**20:10** · Standards for the reviewer go into the REVIEW.md file, and problems that can be checked repeatedly and mechanically can go into tests or lint rules.

**20:21** · For the human approval layer too, rather than loosening it too much from the start, start out somewhat strict, and once these review layers stabilize, based on operating results, loosen it bit by bit. I'd recommend that.

**20:35** · And fourth, even after deployment, if you find a problem, designing a system that lets you recover quickly is really important too.

### 마무리

**20:43** · AI agents keep getting better, and will generate even more code and run on their own for long periods.

**20:49** · So not just for generating code but for reviewing it too, our whole approach needs to be a bit different from before, I think.

**20:57** · I hope this video was helpful to you too.

**21:00** · I'll be back in the next video with even better info.
