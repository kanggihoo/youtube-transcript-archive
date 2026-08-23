---
title: "[한영자막] 컴파운드 엔지니어링의 시대입니다 — Kieran Klaassen, Every/Cora"
author: "Tech Bridge"
site: "YouTube"
published: 2026-08-22T02:00:29-07:00
source: "https://www.youtube.com/watch?v=m8pBazNPvZE"
domain: "youtube.com"
language: "en"
description: "코드를 직접 쓰거나 읽는 시간을 줄이면서도 더 나은 제품을 만드는 ‘컴파운드 엔지니어링’의 실제 작업 방식을 소개합니다.Kieran Klaassen이 Cora를 혼자 만들며 쌓아 온 시스템, 기억, 판단의 루프를 통해 AI 시대 엔지니어링이 어떻게 달라지는지 살펴봅니다.주요 포인트..."
word_count: 3489
---

![](https://www.youtube.com/watch?v=m8pBazNPvZE)

## Transcript

### 코드를 쓰거나 읽지 않고도 제품을 출시하기

**0:00** · I want to start with saying I haven't written a single line of code this year and maybe I haven't even looked at most of it yet. I do ship uh I have a product I built that thousands of people use and trust with their email inbox which is amazing.

**0:22** · I'm actually proud of the code I ship and I'm proud of the product I ship.

**0:29** · I've been doing this for two years and trying to extract my thinking and my taste into a system \[clears throat\] that compounds. And I'm going to share you how I do that.

**0:40** · Lots of stuff you hear is like, "Oh, you should use this the factory dark factory do that blah blah blah all the new hip cool things." Uh what I'm trying to do is not that. Today I'm going to just show you how I work and hopefully share something that you can bring to your workflow that will outlive trends and really set yourself up for success for newer models, bigger models. Uh there are two halves in this talk.

**1:07** · One is why it's so important to compound how I got here. So this is for people that maybe are not at the end of the the trajectory. It's interesting to see how to get there. And then stuff you can run yourself, you can use uh day-to-day to ship, to build, uh to research, to do knowledge work even.

**1:33** · Hello, I'm Kiran. I work at every is an AI lab for the future of work. And we ask ourselves the question, what's next? And we write about it, we teach about it, we build. And we have a studio se uh studio um where we have mostly single engineering teams that take a problem they really care about and use AI to build a product out and

**2:00** · really leverage that and compounded knowledge is a big way we do that lots of loops shipping faster and faster and core as mine is where I invented compound engineering and it's a complete AI email inbox it's agent native. So that means whatever you can do the agent can do. It runs on your desktop phone CLI insight codeex like uh MCPS and I'm rebuilding it as version two.

**2:29** · Uh so soon beta access if you want access just DM me talk to me.

### 이메일 클라이언트를 혼자 만드는 이유

**2:38** · The cool part is it's one engineer and I have support. I have design support. I have some like database hardcore engineering problem support like you need some support um but I

**2:54** · built a full email client alone and I've only started building this in January this new rebuild I use reals on the back end I love Ruby React on the front end and I own products fully so I talk to people when something goes down I'm the one responsible And it's set up like this on purpose.

**3:17** · I'm an exVP of engineer and founder and I know how to hire, grow teams, all of that stuff. But I wanted to do the opposite with Sonnet 3.5. I just felt there was something new that was unlocked. And I wanted to see how far can AI go before I actually need to grow the team. And I'm still alone with some support, which is cool. So I built Kora and this is what I learned.

**3:43** · Two years ago I started and the bottleneck by then was code. So it kept moving and my job changed over the years but first there was bad code hallucination just stuff that didn't work. I added agents I added skills just reviewing it. So okay code got good the plan was the bottleneck because I could do things but larger things. So whenever I have a good plan set out, it would do bigger things than just code changes.

**4:15** · Okay, plans got good. Um the next bottleneck was deciding what to build.

### 코드에서 계획, 판단으로 옮겨 간 병목

**4:22** · Talking with users, really understanding problems you're solving. This is why it's so good that you use your own product. You love what you're building for.

**4:32** · And that's got really good as well. the scope got bigger, AI could help writing uh plans and I kept repeating myself and that was annoying. So I figured out there needs to be some kind of memory system. So every time um I repeat myself I can say hey can you make sure to store this knowledge in some way I started with storing this in cloth MD but at some point that became too large.

**4:58** · Um, so I built a system that remembers and that's really where compound engineering came from.

**5:07** · And you see me go away from typing more towards judgment and taste. And I think implementation is mostly solved. Even though you see many people that do orchestration, dark factories, it kind of works, which is cool. But the thing that doesn't work is our judgment and our taste.

### 컴파운드 엔지니어링은 어떻게 시작됐나

**5:28** · And for me, it's really where do I turn my brain on versus when do I leverage the model and it's where you make judgments and where you add taste. So where you think, where you iterate, where you jam, where you brainstorm, I extract that into a system. And if it's extracted into the system, you can move on to bigger problems because the next time the AI will come up with a brainstorm, it will already include that thinking.

**6:00** · So you can go on for the next one.

### 사람은 시작과 끝에 있어야 하는 이유

**6:05** · And I see that one engineer with a compounding system just beats teams like full teams that use AI that don't.

**6:15** · This is my loop. It's it there's more to it than this, but this is the overview. Brainstorming, planning, working, reviewing, polishing, compounding, and repeating. And the real trick here is on both ends. It's kind of the human AI sandwich where the human is the bread and the AI is the middle part.

**6:38** · And the brain is on on the ends. So the start brainstorming where you have to decide what to work on what the problem is and really understand what you're trying to do and at the end where your taste comes in where you decide this looks very good makes me very happy or we need to raise the bar we need to do better we need to make it more snappy we need to go optimistic or whatever that is like like delight and throughout here especially in the brain on parts it's important to extract the learnings to compound.

**7:10** · So that's basically the loop.

**7:15** · You cannot run the middle if it's not set up correctly. And it's very important to be able to let go and let the machine rip overnight for many hours in parallel.

**7:29** · And the only way to be able to do that is making sure you spend time on uh on that system. So my rules, 50% should go into creating uh the feature just making sure like did it build the feature? Did it deliver the value you set out to do? But 50% of the time should go to um teaching the system for anything that it did wrong. Can we learn something? Can you teach the system something?

### 절반의 시간으로 시스템에 잘못을 가르치기

**7:55** · And this is something that is kind of hard, but it's very important because it will make the next time better.

**8:04** · One bonus is because of this extraction um I store all of this knowledge inside my repository as solution documents and people say oh but tokens and in my research it's actually more token efficient because if you have the right answers and the right solutions already within the token you don't need to do review you don't need to correct you

**8:29** · don't need to do deep research across the internet because the token's already there so it's actually more token efficient in the long term, which is cool. Less research, finding things faster.

### 저장된 해결책이 토큰 비용을 낮추는 이유

**8:41** · The real reason why this works is my brain is fixed and AI isn't or less fixed. And my philosophy is keep extracting until the complete middle runs itself and is so freaking good that it will surprise you.

**9:01** · Um let me show you how this works. Uh so I have a plugin called the compound engineering plugin that you can install in whatever tool you use codeexcloud code cursor plus 10 others and I just built this while building Kora shared it at some point and now hundreds of thousands of people use it daily. So thank you all for using it if you did.

**9:24** · I'm honored. Um, I never decided this should be something like hype. It's just me using my plug-in shipping code. Uh, you can install it wherever. Uh, you can also create your own version of this which could be just storing information in files. Uh, however you do it. But let me show you the plug-in. So, compound engineering became compound product as well.

### 플러그인과 제품을 함께 만드는 과정

**9:49** · Uh I have a lovely uh co-contributor Trevan Chowo who has a very good product sense and product background. So he brought a lot of product thinking and I think compound engineering is really for engineers, PMs, designers, even people that do knowledge work within every love to use compound engineering. It's such a uh like universal uh concept of compounding knowledge. It doesn't have to be used for engineers but that's where it came from me.

**10:18** · So the first demo is um it's it's here to activate your brain.

### 백로그를 논리 있는 아이디어 모음으로 바꾸기

**10:26** · So this is called C ideate and you can run it. And here I run it in it's maybe a little bit small but I say hey I've kora version version one I want to upgrade people to version two. Um come up with oh no actually this is look at all my open open tickets. Tell me what to do next. It's a great command. It will just go through all your issues and you can link linear open like open source issues on GitHub, Slack, intercom.

**10:53** · What it will do is it will generate uh structure from all this mess and we'll make arguments about what is good to work on versus not good to work on and the cool part is it will reason about this and the output here is a clean HTML page that you can share with the team that you can be inspired by. So this is generation of ids and the cool part is you can point it to your OKRs.

**11:19** · You can um get ideation aligned to your strategy and that's kind of how it compounds. So if you have past experiments or past learnings in your repository or a strategy document which you can create with CE strategy, it will score these ids against this knowledge already which is really cool.

**11:38** · And I've seen people dump this uh document inside claw design and say create a PowerPoint and you get a beautifully designed PowerPoint with like XY matrix of where the sweet spot is for what to do for your OKRs which is very low effort for you and very impressive to bring to your team.

**12:01** · Uh next one is a very simple one. It's called C doc review but is very useful.

### 문서에 날카로운 질문만 남기기

**12:07** · Um, if someone hands you a PRD or some kind of document, run doc review on it and it comes back with very sharp questions. I always like the questions.

**12:17** · I'm like, "Oh, that's a good question. I did not think about it." So, either you relay this to your colleague or you ask them to answer. You can then compound that knowledge after answering with C compound so that the next time um this answer is already baked in and it wouldn't ask you it would already know the answer because it's already embedded in the system. You can share this with people. You can say oh you can actually run this yourself as well. This runs anywhere. So you can do it in co-work as well.

**12:48** · It doesn't need to be in cloth code. Um it's a very simple thing that we spend a lot of effort in to make very good and it's part of our flow.

**12:58** · This my most used one u it's when the ID is too big to describe. So this was the example of Kora version one to version two. I say c brainstorm. This is a brain on command. Uh I know I need to get into into the zone. I block off time. I'm not going to multitask or anything like that. Um, and I run this. So, it pulls in compound knowledge. It looks at the difference between Kora one and two and, uh, looks at the personas I've set up.

**13:29** · So, it will see, hey, like certain people need certain things. And it will ask me questions. And it doesn't ask me a lot of questions. It's dialed in to ask you just the right amount of questions it needs to do the work. It's very easy to get 30 questions and feel, "Wow, I did so much." But in the end, the goal is not to answer questions. In the end, it's to get the absolute best work out of it. And I think other libraries might over question. H I think there's a balance uh to be found there.

**14:02** · So out comes a plan, a brainstorm document stored and compounded. And then my favorite, which is slash LFG, which is basically the loop, the the automation loop. And if you like vi coding / LFG something is great as well.

**14:20** · It will run for hours. It will do planning work review testing. Opens a PR. It will dog food. It will try fix fix things. It will then do a before and after video screenshot in the pull request. Makes it super easy for you to then see what happens last if it comes back. So this is overnight. You can do parallel. There's polish. This is the brain on again C polish. You give it the pull request and what it will do is it will show you.

### 밤새 돌아가는 루프와 완성도 끌어올리기

**14:48** · So I like to run it in cursor and on the left side I like to run this and it will tell me hey this was introduced with this LFG flow and on the right it will show the product. This is important.

**15:03** · Sometimes I don't even know what was built because I also have video recordings that I dump into LFG that it will then process and analyze and see what went wrong. So sometimes I don't even know what it was solving for. So it's a good primer to know okay this is what we are here where we are this is what it's solving this is how I solved it and you tell me what do you think and

**15:28** · this is not QA this is raising the bar like it should work if it doesn't work here your LFG flow failed um but you can see here like this works only in this example there's a mark of uh a logo mark twice which is not technically wrong but I don't want two marks on one page so in this case I can say hey there marks two marks here. Can we just make sure we only ever have one and run C compound?

**15:54** · So it will extract that knowledge, make sure next time when I do design work, it's tagged correctly, it will find that file and uh know not to do that. So that's closing the loop. You merge it and you learn something.

**16:12** · So why does compound engineering resonate with people? I think it's not a very new concept. It's just something how we do software engineering is just now instead of working with teams we use with AI. We use AI and we leverage that and AI is very good at specific things especially with large amounts of knowledge and doing the right thing especially with latest models. So, uh, if you want to do this yourself, if you don't want to use my plug-in, uh, make sure to extract, never repeat.

**16:39** · If you see yourself repeating yourself, make sure to extract it somehow. Make sure it doesn't happen again. Make sure that there is a middle that can run without you, that does the planning, working, reviewing, and it should be boring. It should just work. Uh, you should not be needed. If you're still needed in the loop, spend time on the middle. Do it manually. feel where it's off and like iterate until you can actually let it go.

**17:07** · And if if you are at a point where you just run something and it runs for three hours and it's always good, you know you're there.

### 플러그인 없이 이 방식 쓰기

**17:14** · \[sighs\] It's important to document the thinking, not the code. This is also very anti- um developery. It's like, yeah, but documentation shouldn't mean the code and like the code is the artifact itself. But I am of the opinion to generalize. You need reasoning behind why you did something. And all these traces, even though they're bad, could lead to things like, hey, something happened right at postmortem. What decision was made by whom or what agent that led to this?

**17:43** · Can we then turn that into a learning so we change that behavior for the next time? And I've seen it work very well. Uh especially with postmortems.

**17:55** · And again, every interaction, spend 50% of your time to make it better the next time. So, make sure to build this system that will remember uh instead of was this good? Make the system better and make the system know. And I know it's hard like it's just hard to do for myself. We all know we need to do it, but it's kind of awkward and it's like, h it's it works, it's great, let's just move on. But it's very important and you can see the system really go if you do that a lot.

**18:27** · So the bet is implementation is only getting cheaper and judgment is not and the future models and systems need to be set up so they have access to this judgment that we have our taste uh to have more leverage. So that is the bottleneck and remember brain at the ends really activate your brain make sure you really understand what you're doing in the start. Don't offload the thinking to the AI.

### 다음 기능을 더 쉽게 만드는 기준

**18:56** · Make sure you truly feel understand what you're doing the problem. H let the AI go and at the end raise the bar. Make sure you don't fix things. It should be very good at the end, but make sure to raise the bar because we're not shipping shitty code.

**19:13** · Um your standard should be the next feature should be easier because you ship this one. If the next feature is harder because you added complexity, which is normally how engineering works, we're flipping
