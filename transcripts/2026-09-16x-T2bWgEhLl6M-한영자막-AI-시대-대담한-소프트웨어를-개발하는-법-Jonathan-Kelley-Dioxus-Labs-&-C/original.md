---
title: "[한영자막] AI 시대, 대담한 소프트웨어를 개발하는 법 — Jonathan Kelley (Dioxus Labs & Cognition)"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=T2bWgEhLl6M"
domain: "youtube.com"
language: "en"
description: "AI 코딩 에이전트가 발전하면서 소프트웨어 개발의 패러다임이 완전히 바뀌고 있습니다. Dioxus Labs 창립자 Jonathan Kelley가 수만 줄의 코드를 쏟아내며 겪은 실패와, 코딩 에이전트 시대를 맞아 Rust가 최고의 무기로 거듭난 실전 인사이트를 공유합니다.📌 주요..."
word_count: 3449
---

![](https://www.youtube.com/watch?v=T2bWgEhLl6M)

AI 코딩 에이전트가 발전하면서 소프트웨어 개발의 패러다임이 완전히 바뀌고 있습니다. Dioxus Labs 창립자 Jonathan Kelley가 수만 줄의 코드를 쏟아내며 겪은 실패와, 코딩 에이전트 시대를 맞아 Rust가 최고의 무기로 거듭난 실전 인사이트를 공유합니다.📌 주요...

## Transcript

### 5년 전, Dioxus의 첫 커밋

**0:00** · Hello, my name is Jonathan Kelly and today we're going to talk about what it means to build ambitious software in the age of AI.

**0:10** · Five years ago, I made the first commit ever to a project called Diosis. I used the last summer I had as an undergraduate and instead of getting an internship at Google or doing research in AI like many of my friends at the time, I spent it exploring an idea I had for a crossplatform app framework written in the Rust programming language.

**0:31** · In 2021, Rust was still pretty niche, but the ecosystem was growing, the tooling was improving, and the pitch of native performance, a solid type system, and simple cross compilation really sold me. It's extremely nerdy.

**0:47** · The idea for Diosis was straightforward.

**0:50** · What if we had an crossplatform app framework? Instead of waiting through dozens of tool chains, programming languages, and idees, what if we simply wrote our all of our apps in Rust using HTML and CSS as the markup language?

**1:06** · This was back in the day 2021 where React Native was janky, Flutter was too slow, and neither performed well with native APIs. On the flip, with Rust, we could build native abstractly with no VM, no IPC, no JavaScript. And if we used a little bit of HTML and CSS for the UI and take some inspiration from React for the reactivity, we could reuse vast amounts of web components and web tooling. The goal was an extremely powerful app framework that was still quite familiar to the average developer.

**1:41** · Sounds easy, right? Well, as they say, we choose to build an app framework from scratch, not because it's easy, but because we thought it would be easy.

**1:50** · In reality, trying to challenge React Native and Flutter is extremely ambitious. In 2021, there were very few off-the-shelf components you could use to build Dioxis. Everything from reactivity to font rendering to hot reloading and application bundling had to be built from scratch. There's nothing we could use. For us, tasks like building a web browser were just necessary steps along the way.

**2:17** · Now today in 2026, Diosis has achieved and far surpassed its original mission.

**2:23** · We support all the features we originally set out to build from crossplatform support to native rendering to Rust hot reload and bundle splitting. We've basically reinvented and improved the entire app development stack.

### 현재 Dioxus 프로젝트의 현주소

**2:38** · Users can ship a powerful full stack web application in the exact same codebase sharing components as their iOS and Android apps.

**2:48** · The Daxis project now has nearly 37,000 stars on GitHub with millions of downloads. Apps built in Dioxis are rolled AC rolled out across the globe with a cumulative estimate of over 200 million end users. Users have built things like AI assistance, software for voting, data science tools, and even collision avoidance system for satellites in space.

**3:13** · We've put a ton of effort into making Dioxis as userfriendly as possible.

**3:26** · apps are written in Rust. They are structurally very simple. You rarely need to drop into platform specific code. Because all Rust projects are alike, it's very easy for developers to dive into a new project. You can completely skip annoying build system setup. All you need is a main.r.

**3:47** · One of the most ambitious goals we had for Dioxis was to ship our own lightweight but fully featured HTML and CSS rendering engine called Blitz. We extracted the browser grade CSS engine out of Firefox, built our own HTML DOM, and developed a hybrid GPU rendering pipeline.

**4:05** · Compared to Electron apps, which are RAM and storage hogs, Blitz apps are lightweight, coming in at less than 5 megabytes bundle sizes and consume less than 50 megabytes of RAM at runtime. And they're pretty cool. You can write your own custom components, spinning cubes, you can customize the browser however you want. It's a very cool project.

### 경량 웹 렌더러 Blitz와 초고속 핫 리로드 Subsecond

**4:23** · We also worked on a tool called subsecond uh which is our generic hot reload engine for Rust C and C++.

**4:30** · Subsecond watches your code for edits, recompiles parts of the code that changed and patches the running app in place all in 100 100 milliseconds. This was an incredibly difficult technical challenge and is the only hot reload engine for native compiled code to have such wide language and runtime support.

**4:47** · It works on every major operating system and even the web is compiled into web assembly. No one has done this before because these projects we've worked on along the way over the past 5 years are incredibly ambitious and are the result of a tiny but quality read every line of code by with our own two eyes and maintain a frequent but ambitious release cadence.

**5:15** · The most amazing thing, every line of code in Diosis until very recently has been painstakingly written by hand.

**5:24** · Why do I say recently? Well, if you aren't aware, software engineering and development has taken a massive turn in the past six months. AI coding agents got really, really good. And specifically, they got really good at Rust. Our team, a bunch of cracked Rust engineers, has been quite skeptical of AI for a long time. We had not felt the AGI, so to speak. And we definitely weren't using AI in our day-to-day work.

**6:01** · surprise to us. So, we were finally excited.

### 코딩 에이전트가 Rust를 마스터한 순간

**6:06** · With this newfound excitement, we started building. Our team maxed out our cloud code subscriptions, turned out tens of thousands of lines of Rust, and built all sorts of features we had long wished to have. Unfortunately, very little of the code cleared our quality bar of should we merge this in.

**6:23** · Thousands of lines of new features, bug fixes, and integrations we had wanted for years sat there and draft and continued to sit there and draft. We definitely did not know how to properly wield these tools, and it was way too easy to become what we call a slop cannon.

**6:42** · Um, so we reflected a bit and studied what worked and what didn't.

**6:48** · One thing we realized over all these years, we had put a ton of effort into making Diosis extremely developer friendly, easy to read, easy to write, good tools, good error messages. The coding agents generally don't care about this. We tried to make Rust easel with Dioxis still fortunately because Rust is harder to write. The coding agents deal with the development burden for you.

### 어려운 언어 Rust가 에이전트 시대의 최대 무기가 된 이유

**7:14** · They handle the edge cases and they fight the borrow checker saving you from the cognitive burden of writing Rust apps. The learning curve which we fought to reduce is now a feature.

**7:27** · So throughout the process of adopting the coding tools to work on Dioxis we learned a wide array of lessons.

**7:36** · Many of the thing the coding agents do really well today and many things they just aren't there yet. So the next couple slides I want to talk about some of the things we learned and what it means to to build ambitious software projects in the age of agent coding.

**7:52** · Um it's important to talk about first what it means to build an ambitious software project. Um there's many different types of software out there.

**8:02** · Depends on what you ship every day. Um you might be doing research and the quality of your code isn't the most important thing. And you might be doing prototyping code and and iterating fast, moving quickly is important. You might be building applications which people don't see the code internally. They just see what it looks like on the outside.

**8:21** · But for us and for Diosis, we care about a few different things.

**8:28** · Primarily, of course, we care that our code works all the time and that if it breaks, we can easily fix it. I think this is something people don't think about enough these days that you need to continue to build easily maintainable code and like the velocity that you ship lays down on this substrate that you've built and \[clears throat\] if the substrate isn't good nothing you build on top is going to be good

**8:53** · shipping features really long it extends into the far future there's dozens of features we still have yet to build for Dioxis And we want to shipping fast, adding new features, and then also making sure you don't break things and that in a patch release, you're not like breaking APIs that millions of people rely on.

**9:24** · For a project that people build their businesses on, there's also a high bar for releases. We need to maintain uh high quality of our documentation, of our examples, of our tests, of our benchmarks. If it if anything is out of place, people figure it out pretty quickly.

**9:44** · So, we really do like coding agents as a a form of an excellent assistant for very hard technical problems. Coding agents bring a level of patience and massive knowledge that is very hard to muster as an individual working on a very large software project.

**10:02** · Many problems in Dioxis are knowledge problems. Our team can't feasibly know every detail about every build system, every runtime, every operating system, every programming language, every api, every quirk. Fortunately, this is exactly where the coding agents excel.

### 끈기 있는 스페셜리스트로서의 코딩 에이전트

**10:19** · They can quickly quickly sift through thousands of pages of documentation, read all the bespoke APIs, dig into binaries, reverse engineer APIs. They have so much more patience than an individual developer does. We were able to implement things like Cotlin and Swift plugins for Dioxis deeply integrated into our build system, which is a really hard feature if you know React Natives turbo modules. These things took many years of development to get right by people writing them by hand.

**10:50** · We were able to ship this in like two to three weeks with coding agents and we probably could have gone faster.

**10:56** · I think the implementation was done in like the first day and we spent two weeks building test cases and testing on real devices.

**11:03** · And in Blitz, the thing on the right, our custom web engine, web agents have accelerated debugging hard CSS styling and layout issues for us. The agents know the CSS spec exceptionally well.

**11:15** · You might be writing a line of code that's trying to resolve some sort of painting or layout issue and the agents can instantly recall exactly how Google Chrome and Safari do it. Can tell you the right way of handling it for your problem and you don't have to go open the the WebKit source code that's nested deep somewhere in Apple's Git repositories.

**11:36** · We're able to invest time in doing things the right way, not the hacky way.

**11:42** · which interestingly is a turn in compared to how we used to do it. We would always gauge a project based on its complexity and tend to take shortcuts as humans to ship things faster but not at a high quality bar. So coding agents give us the ability to maintain quality and do things the right way which is very interesting.

**12:02** · Um a less sexy application of coding agents for ambitious projects is actually doing the extremely mundane tasks. Uh our team is very small. We have three core engineers working on Dioxis. Uh any time that we spend like verifying the tarball extracts into the right directory structure is like time wasted from us thinking about the architecture and the the hard problems of our software. Um Dioxis is a large project and it's been a challenge to maintain a high quality bar across the entire codebase across every release.

**12:32** · In one release we might add an extension for a new editor like zed. We might not be able to test that editor every time we do a patch release. And it might be easy to break that. Applying agents to the problem actually lets us automate many of these like hard tedious tasks that would have taken like countless hours before.

### 에이전트에게 맡겨야 할 지루하고 번거로운 작업들

**12:51** · And then for us like the code is the product. People download the code, they build on the code, users interact with our APIs, they read our docs, and they build on our architecture. So any laziness in the the quality of the code, the SDKs that we ship to users translates directly into a worse developer experience and people either getting upset, their businesses being stalled, or them turning off the product.

**13:15** · So coding agents have been excellent at maintaining uh tasks like verifying release checklists, backporting bug fixes onto stable releases, and ensuring our docs and documents are of extremely high quality.

**13:29** · We still do write a lot of docu comments ourselves, but it's very easy to give the agent a task of making sure everything is documented properly.

**13:36** · Everything has an example and everything actually is documenting the thing that it says in the way that it says. Um, as humans, you know, you'll go edit the code, but you won't edit the comment.

**13:47** · So, a lot of your comments will actually be out of date over time and things get very confusing. Um, and if you just look at the numbers, we've shipped more patch releases in our most recent DAX version than we ever had before. So, we've been able to maintain weekly or multiple times a week release cadence for a large ambitious piece of software in a way that we would be scared to do a release earlier.

**14:09** · Um, one thing I'm not 100% convinced yet, uh, we have found varying levels of success is using AI to write tests or at least blindly writing tests. Um, one place we've struggled with Diosis is testing. It can be very hard to test foundational software, especially like end to end for complex systems. It's hard to test that your extension installs into zed and works the way you want it to do with literally opening zed and like using the extension.

**14:36** · Um, the coding agents struggle here too to an extent. Uh, they also are, you know, have a tendency to write kind of sloppy tests. you'll give it a constructor and then it will go test the constructor and that's not a very interesting test. Um they can easily write tests for any given API but much like humans they fail to write the right tests. So we still find ourselves enumerating test conditions manually um crafting test APIs ourselves and handling test runners.

**15:07** · Um, but it is sometimes a great sounding board to come up with the test ideas for a particular thing you're trying to to make sure has coverage and then enumerating the the edge conditions. Um, but one place that we have actually really enjoyed using coding agents to do testing is building test harnesses.

**15:22** · So fuzzing is a critical part of building like production grade software which means taking your application and putting it under millions of different inputs and quite often adversarial inputs. basically like malformed inputs or uh ways of using the software that users should not be using the software but they they can use the software and coding agents are excellent at building these harnesses.

### AI 테스트의 한계와 퍼징(Fuzzing) 하네스의 승리

**15:50** · Um one thing we've found that code extra code architecture is still an art um coding agents enable you to ship at an exceptionally high velocity and I mentioned this earlier. If the substrate on which your coding agents code lands is bad, their contributions will be bad as well. Unlike a human engineer, coding agents aren't typically afraid to voluntarily go on a huge refactor of a system or redesign the architecture when a feature doesn't quite fit. They'll typically just ship.

### 코드 아키텍처는 여전히 예술의 영역이다

**16:18** · Most of our development time is actually now spent thinking about software architecture, about what features we'll want in the future, and how the system will evolve.

**16:27** · Just like human engineers can write spaghetti code, so can the agents, but now just faster.

**16:34** · However, I will say with fable level tools, the actual code quality itself is so high, provided you properly communicate your intent, that proper software architecture will probably take the vast majority of time in the future.

**16:47** · Actual code writing, not so much.

**16:50** · Um, one thing we do for Dioxis, which maybe you guys still do, maybe you don't, uh, is we review every PR line by line. Um, we definitely use AI review to spot bugs ahead of time, but we still do like to read the code that we ship. We we receive lots and lots of PRs from strangers. Actually, uh, Daxis is a big open source project. Uh, and not every PR is made the same. Uh we find that users can be quite bad at communicating their intent to the models. Contributors don't usually think deeply about how the codebase should evolve over time.

### 코드를 쓰는 것보다 읽고 설계하는 능력이 중요한 이유

**17:21** · They just want their bug fix or their feature in. Uh and many solutions are glued in place. So we're we're not quite at the point where the coding agents can read our minds. Uh and thus we're still limited by the medium of text. And as ridiculous as it sounds, prompt engineering is quite real. The quality of an implementation can be very much dependent on the the prompt that you give the model. But in a sense, nothing really has changed. Reading code has always been more important than writing code.

**17:49** · Um maybe not at the beginning, but eventually as the project evolves, uh it does. So my closing thoughts on on using coding agents to build ambitious software is that code is now cheap, but quality is not. Um the the job of a software engineer has never really been about putting lines of code on the screen. It's it's been about architecting elegant solutions to complex problems to thinking 10 steps ahead about how a system will evolve about retaining flexibility in the face of changing requirements.

**18:20** · These facts have not changed and the bar for software engineering is higher than ever.

**18:29** · Uh if you would like to work on the tools of the next generation of software, Cognition, the people who have acquired Dioxis are hiring. Uh the Daxis team joined Cognition to be part of the future and hopefully you will too. Thank you.

**18:42** · \[applause\]
