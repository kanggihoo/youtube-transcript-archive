---
title: "[한영자막] AI 에이전트로 생산성 10배 높이는 비결: 대다수 기업이 실패하는 진짜 이유"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=sXCppYzX-0g"
domain: "youtube.com"
language: "en"
description: "Ruby on Rails 창시자이자 37signals의 CTO인 DHH(David Heinemeier Hansson)가 Lex Fridman 팟캐스트에서 밝히는 AI 에이전트 시대의 소프트웨어 개발 혁신과 생산성 10배 달성의 비결입니다.수만 명의 개발자를 보유한 대기업들이 AI ..."
word_count: 1583
---

![](https://www.youtube.com/watch?v=sXCppYzX-0g)

Ruby on Rails 창시자이자 37signals의 CTO인 DHH(David Heinemeier Hansson)가 Lex Fridman 팟캐스트에서 밝히는 AI 에이전트 시대의 소프트웨어 개발 혁신과 생산성 10배 달성의 비결입니다.수만 명의 개발자를 보유한 대기업들이 AI ...

## Transcript

**0:00** · Can you tell me the intuition you have I seem to just stepping back and observing the different apps that we all rely on.

**0:07** · I don't know, Adobe Photoshop, all this kind of stuff. There seems to be the progress on development there has not accelerated.

**0:14** · So, why is it what lessons can you draw from Basecamp like well-established huge user base?

**0:20** · Why aren't we seeing like super rapid increase in like new updates, features, all this kind of stuff in these well-established apps?

**0:29** · Multiple reasons. I'll start with the first one that's the most critical. As soon as you're having human teams work together on something, the bottleneck is rarely implementation. It's human bandwidth and communication. When you have a product manager and a couple of designers and a VP above them and a \[gasps\] CTO above them and everyone wants to be part of the shaping process because we're all justifying why we're here, that's where all the productivity goes to die.

**1:04** · The revelation I've had working on Amachi the last 3 months is that to get that magical 10x, 100x, in a few rare cases a 1,000x productivity boost, you have to interact with the agents directly. And you cannot intermediate that bandwidth with another human because it's simply too slow. And on the one hand that's a bit of a bummer. I mean, I like humans and it's great to work together.

**1:41** · But it also means we need to temper our expectations with what these agents can do if it's humans driving it and you have three layers of approval and all the other machinery of a large corporation, the implementation part is only a small segment of it.

**1:59** · The other thing I'd say is that most organizations don't know what they want. They don't know how to make it better. They're not bottlenecked on implementation. They're bottlenecked on ideas. They're bottlenecked on vision. They're bottlenecked on taste. And if you don't have those element in excess of your implementational capacity, it doesn't help. So, you can make a lot of shitty ideas come true.

**2:29** · Then what? Are you going to ship that?

**2:31** · That sounds like I don't know, something coming out of Microsoft. That's not what we're trying to replicate here. That process is not actually because we already had this. If you step back for a moment and think of the towering organizations we we have who have had tens of thousands of programmers at their disposal.

**2:51** · I mean, I'm picking on Microsoft here. I love Microsoft sometime. But, I'll pick on them in this case because they have had endless resources, endless programming capacity for decades, right?

**3:03** · This is what's showing us that just being able to write a lot of code does not produce great compelling software. Now, the other thing is we've had this capacity for about 6 months.

**3:17** · That's not very long in human life cycle capacity of internal what's going on. And I think it's actually funny that the critique of AI is why isn't it going faster? Mhm. What are you talking about? We've not had any other form of progress that has moved us fast as AI. And you're impatient because in the last 3 months we haven't rewritten the whole world and made it a utopia of software goodness.

**3:44** · You're basically saying everybody should be switching to Linux now. One of the arguments is like we can rewrite all the software that's not available in Linux in Linux.

**3:52** · Linux has been the love of my life for many years, but one of the reasons I'm still attached to Windows and now uh Mac is uh because of video editing, Premiere. We're going to fix that, but So, the question is, who's going to build Premiere and Photoshop for Linux? And it feels like one person can now. 100% one person can. And so, and I'm I'm allowed to be impatient. In fact, me or anyone else, impatience is the first step of doing it yourself, right?

**4:25** · Correct.

**4:25** · And there's a community of tens of thousands of people that use Adobe Premiere or DaVinci, all these non-linear video editors, that know the frustrations. Everybody shares them. You can look at Reddit, you can look at the forums. Everybody knows it. Uh I don't know what it is. Maybe the management, maybe the meetings, all these things you've always discussed is the uh the the bureaucracy that's in inside companies that's slowing everything down, the development of features. But it feels like they're if you just let some of the developers loose with a bunch of agents, you can fix all that.

**4:57** · But again, based on everything you're saying, maybe the way to do that is to start over from scratch. Maybe through open source or somebody launches a new company that within large companies now it's hard to to really accelerate into the agentic era by letting developers just build. This is the classic innovator's dilemma.

**5:21** · These companies have gotten so good, so established at the old way, and therefore their entire structure, management layers, processes are tuned for a time that no longer exists. But, you can't pivot that. These are supertankers. It just doesn't happen. This is why we're finally getting this upset into the technology industry.

**5:50** · For a while, I was very upset about the duopoly between Apple and Google on mobile because it felt like mobile was the most important computing platform that we had, and I could not see a path to unseat either Google or Apple sitting on top of that controlling everything, taking their toll booth money. But, the game has changed. This is no longer the most important platform.

**6:17** · Mobile phones are important, but there's also a lot of other form factors coming, whether it's glasses, or it's ear pieces, or whatever else have you. It's all in play now. But, the computing platforms themselves are in play for the first time in probably 40 years if you look at the desktop. Linux has been around since '91.

**6:40** · It's not taken off or taken over on the desktop. It's taken over everything else. All the devices you have on your desk, your fridge, your toaster, everything runs Linux except for your computer. Now, funnily enough, your Android is actually Linux, but wrapped so sufficiently that you can't really recognize it.

**7:02** · But, now there's an opening, and the opening is exactly as you say it. If there's a piece of software you depended on that bound you to Windows, it is completely within reach for you personally to start rewriting it. And maybe you won't get to 100% coverage, but this is the old joke about Microsoft Office.

**7:24** · I only use 5%. Yeah, well, we all use a different 5%. Well, what if we all just build our own 5%?

**7:31** · What if I just took the functionality that I need and just did that? That is a completely different challenge, and one agents are incredibly capable of doing right now today. And I've done it a lot of times over. So, one of the amazing things I found with the latest agent to gauge is I have become a polyglot programmer.

**7:54** · Something I was absolutely not before. I was a Ruby programmer first and foremost, and then I dabbled a little bit in bash Yeah.

**8:02** · when I had to.

**8:03** · And in the last 2 months, I've written C++. I've written three applications that have shipped in Amacha Quattro. I wrote a writing app. I was using this app called Typora, which is a very nice app, which in itself is based on another app called iA Writer, which was my real love on the Mac Mhm.

**8:23** · for a clean simple markdown writing environment. That's where I write all my essays.

**8:29** · Mhm.

**8:30** · And then I moved to Linux, and I couldn't get iA Writer. So, I moved over to this other tool called Typora. It was a piece of shareware, and it had a lot of features I just didn't need. And about 6 weeks, 7 weeks ago, I thought, "Do you know what? I only need 5% of Typora, which is already a basic app."

**8:49** · I literally told the agent to get going, that I wanted it written in C++ and QT, because that would fit well with the aesthetic of what I was building with Quattro. And in I think about 20 minutes, it had the first version. I started using it, and it wasn't quite right. Within 2 days, I'd given up Typora, and I wrote and have written all of my essays since that moment in Amacha Write.
