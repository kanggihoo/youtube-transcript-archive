---
title: "[한영자막] 프롬프트 작성은 그만두세요. 이제 명세(Spec)를 작성할 때입니다."
author: "Tech Bridge"
site: "YouTube"
published: 2026-08-29T02:00:10-07:00
source: "https://www.youtube.com/watch?v=F_smvU3oqbU"
domain: "youtube.com"
language: "en"
description: "프롬프트 기반 AI 코딩의 한계를 넘어, 명세(Spec)를 메인 아티팩트로 삼아 재현 가능하고 안정적인 소프트웨어를 개발하는 '스펙 주도 개발(Spec-Driven Development)' 방법론을 소개합니다.📌 주요 내용:• 프롬프트 중심 개발 vs 스펙 중심 개발의 결정적 차..."
word_count: 3976
---

![](https://www.youtube.com/watch?v=F_smvU3oqbU)

## Transcript

**0:00** · Hi, I'm Luna Diva. I'm a Microsoft 565 MVP and I'm a cloud native architect.

**0:04** · And with my current clients, I solely work on getting development teams started improving with agentic software development and really embracing those spec-driven development practices. And for that, we use we use GitHub. We love using GitHub.

**0:18** · So, we use GitHub Enterprise, GitHub Copilot, and Spekit from GitHub.

**0:23** · And the big drawback there is GitHub is releasing so many awesome features, it almost is a day job just to keep up. So, definitely check out those release notes for those new features. They'll will be definitely be there in the near future.

**0:38** · And I want to get to Visual Studio Code to the demo part as soon as possible.

**0:41** · But before that, we have to look back a bit just just to know where we're coming from.

**0:47** · And it hasn't been that long, but prompt-first AI coding got us started.

**0:52** · It got us moving. And it was fast and it was incredible. And as I said, it really helped to get us started for AI software development.

**1:01** · But for bigger projects, for real projects, for enterprises, for bigger teams, prompts can be a fairly weak foundation.

**1:09** · Because these prompts are usually private. They're temporary, they're hard to review, and it produces something that usually builds, but sometimes completely misses the point.

**1:21** · So, the shift I want to show today is is simple. Stop treating the prompt as the main artifact and start treating the specification as that main artifact. And that is the whole session in one quote.

**1:32** · But there's so much more to explore. So, let me head over to the next slide.

**1:39** · And before I get to the demo, I will have to clarify this this mental model because this will make everything else make sense down the line.

**1:47** · Because prompt-first development looks like this.

**1:51** · You write an instruction, the model writes some code, and then you get a surprise. And a lot of the times, that's a very nice surprise, but sometimes it is not. And you spend the rest of the afternoon working out why.

**2:04** · And Spec- Spec first development looks at this differently. We start with a constitution.

**2:10** · Our unbreakable roots that are usually bigger than our project, usually bigger than our team. And this contains our information on our must-have things for our project. So, things like testable by design, our security standards, our enterprise guidelines, our team-specific rules.

**2:28** · So, everything our we want to to have that coding AI assistant to adhere to.

**2:34** · Our must-haves.

**2:36** · And then we have the spec. So, our functional specification of our application. It describes what we want to build. So, we specify all the features, the functional requirements, but we do not include anything technical. So, no technical specifications. We do not include the how. We save that for the plan. For the plan prompts. So, in the plan we keep all our specifications around deployment targets, your stack, what frameworks you want to use, the version you want to do, uh and so on and so on.

**3:04** · And then we want to split this in manageable chunks. And we do that in the task phase. So, we chunk it in a logical order that makes sense when developing it in the code phase, the implement phase.

**3:16** · And very important, and I cannot stress this enough, review everything. I mean, review everything AI puts out, but especially if you use these spec-driven development frameworks, review every single document the thing throws at you. So, check that constitution, check that specification, and check that plan. Make sure you understand what it says. Make sure you're on board. Make sure your team is on board. So, everything is on the say Everyone is on the same page. So, it actually produces something um of quality you would want down the line.

**3:49** · And there are more specs to the specs there's four steps to explore here. So, this is not an exhaustive list. These are the things to get you started. These are the things um to cover when you're going through these back driven development frameworks. So, everything from constitution to code.

**4:04** · And for the other steps, please check out that Spec Spec'd um documentation and I'll share a link on the last slide.

**4:12** · So, with this, the Spec becomes part of the repository, part of the Git history.

**4:16** · And the next time we implement a new feature, we start with this base again.

**4:20** · So, we add a new Spec feature specification and follow this process again.

**4:25** · But enough slide for now. I want to go to Visual Studio Code to actually show it uh to you in action.

**4:31** · And what we're looking at here is the thing we're going to build. So, this was a Microsoft Build 2026 session session and uh for that I created like the session planner MCP server. So, Microsoft Build of course has all these amazing sessions you can still watch online now. So, please I encourage you to do so. But during such an event, the session planner is is like your your um your agenda, right? It really dictates what you want to do or what you see that day.

**5:00** · And of course, it featured an amazing CLI we could use, but it was lacking an MCP server. So, I created the MCP server or better yet, we're going to create that during this demo today.

**5:10** · And what we're looking at is here and you see it from the branch name. This is an empty project and it's not really that empty, but to show you there's nothing special. There's the GitHub folder that just contains our GitHub Copilot instructions. We have the VS Code folder which has my own VS Code settings. So, nothing to do with this MCP server and I have this demo folder.

**5:29** · And this is just for me so you don't have to watch me type. I prepared some some of the prompts we're going to use today.

**5:37** · And then there's the Git ignore and of course this markdown. So, there's no nothing else here in this project.

**5:43** · And of course to get us started, we have to install uh Spec'd. We have the Specify CLI installed. But now we're going to open up a terminal and just copy over this very handy command, Specify in it, because we want to install SpecIt in this project. So, we do Specify in it here, and we have to specify the integration for the the AI harness, the AI tool we're using. Because it will wire up those those custom instructions based on the type of integration you choose.

**6:11** · But I grab because I'm using Copilot, I'm using Copilot here.

**6:17** · And if I ask to execute this, we have this nice Specify terminal window, and it actually says, "Well, it's not that empty. Are you sure you want to continue?" And of course, we want to continue here. And it will ask me if I want to use Bash, or more PowerShell guy, or if we want to use Python for the scripting.

**6:35** · And because I'm on Windows, it makes sense to just go with PowerShell.

**6:39** · And then it steps over, and it does it very quickly. It initializes my SpecIt project. It checks if prerequisite is installed, and goes ahead wiring up GitHub Copilot for me to use the SpecIt framework.

**6:52** · And then it has some very, of course, handy hints on the credentials, on the off tokens. But the things I want to show you was those other commands that are in here now as well. And this is Also, this is not an exhaustive list.

**7:04** · There's even more SpecIt commands we can see in our documentation.

**7:10** · And with that install, we actually got a new Specify folder here. So, in the Specify folder, and I highly encourage you to browse around, because you really have to you want to demystify this to to take away kind of the magic that SpecIt brings to the table.

**7:26** · Because it's just markdown, it's just scripting. And of course, it's very powerful, don't get me wrong. I love using SpecIt. But in the end, it's it's it's very handy to to understand that there's no funny business going on. It's just markdown and scripting.

**7:42** · \[sighs\] So, with that, I installed Specket and we're ready to um move over to our constitution. And as I said, I prepared some some prompts here. So, look at these prompts. Let me close the terminal. And I have here a project constitution for that HTTP MCP server for the uh for the build session planner. And I put some things in here. This is not like the list everyone has to use.

**8:05** · These are things that made sense building this build session planner MCP. So, I want to use grounded only because I don't want it to to think up sessions that are not there. So, very important, ground your data. I want it to be time aware. Time is a hard concept in software development.

**8:22** · So, making sure your um AI assistant understands how important time is for these sessions because if we're looking at starting soon, you don't want to get this wrong. I want you to be agent safe because well, MCP sometimes is hard to to have security to have the odd in place. So, I want to have the create a safe tool design. I want you to be HTTP safe because well, it is MCP. We can do call it out on a public endpoint. Sure it make safe as it's safe to expose there.

**8:53** · I want it to be testable by design because it's always a good idea. And I want privacy by default. Well, it isn't public session list, but still this makes sense for me currently to have in the constitution. These are the things my unbreakable rules I want my application to adhere to.

**9:12** · And now it's just as easy. And of course, because I prepared this, you don't have to see me type because preparing these prompts can be quite some work. And of course, there is AI to help you there. But to get started with that um constitution, we can just use this spec command for constitution and paste in that prompt for my constitution.

**9:34** · And now, the fun thing is with GenAI, this can take some time. And for demo purposes, it's it's hard to predict how long it will take. So, I'll just have it running here for a couple of seconds, so you can follow along what it's doing here. So, it's seeing my six principles.

**9:50** · And what it's doing with this text is integrating this in the specified folder for the constitution we um we have in there. And let me get to that. Let me stop this. We don't want to wait for this. And I'll stash this just to get this out of the way. Let me go there and stash this, so we can go to the next branch just to show you.

**10:23** · Just to show you what it is like when the constitution is generated. So, I prepared these branches, and it sometimes feels a bit like cheating, but again, watching these AI assistants, it's much more fun if you do this in uh in real life and try it out for yourself. So, if we look at uh the branch for the constitution created, so we have the constitution created here.

**10:45** · And in that memory folder now is the constitution markdown that actually has those six principles um integrated with the constitution for uh for this spec-driven development effort. So, again, we see the grounded in only time where correctness, etc., etc. We see all six here in the constitution in the specified folder created.

**11:06** · So, with that constitution created, we're now ready to move up to uh the specify phase. So, the specifying what we want our application to do, so the functional requirements. I prepared it as well, so we have the specify prompt. And if we look at that, let me close this just to have a better view.

**11:25** · So, we wanted to have an NCP server that gives an AI agent access to the Microsoft build session data. So, it explores the things we want to um this MCP server to do. We have the data modeling here. So, some source fields from the JSON we're loading in.

**11:42** · We have some MCP tools you wanted to expose. So, we want to be able to search those sessions. We want to be able to get a session. We want to look at what's happening now. All these are MCP tools we're asking the Spekit framework to create for us down the line.

**11:58** · So, this this is really the what we're going to build. So, again, this is not the how. This is no technical um implementation details. This is only what we wanted to build.

**12:08** · So, if I open up my Copilot again, we're ready for the next uh the next slash command, which is the Spekit specify. And again, it's the same recipe. We have that slash command. We paste in that's uh specification for the specify. And again, it will start going and it will start um integrating that specification, go over it, and if it needs clarification, it will either highlight that in the specification or ask those questions to you the user.

**12:36** · And and either can be like an open question or some multiple choice questions in there as well. And if we created that's that um that specify prompt. So, if we had the spec created, we can actually inspect that phase as well. So, this is the when this if I just run this command, waited a couple of minutes for it it to be done.

**13:00** · And if we look at the specification, we now have a specs folder. Uh so, let me close this. The spec is created. So, I have a specs folder here, which is the first spec I created to build now MCP.

**13:17** · And if I open that spec, again, it's very familiar. It's those same the same specifications I prompted it for, and it integrated it. It um looked at my constitution and it will change everything it needs to change to adhere to those must-haves in my constitution and follow those specifications. So, it created some nice user stories. So, we have a user story for the session search. We have a user story for the session detail retrieval, currently happening sessions, etc., etc.

**13:49** · And then, as I said, we need the plan phase as well. So, that's the last prompt I I prepared. So, for the plan phase, these are our technical choices, our technical details, our technical requirements we have for our application, for our feature.

**14:07** · So, this states things like use TypeScript. I want to use Node.js. I want to use a MCP server. I wanted to have an HTTP transport support, etc., etc. So, all these technical details, also where we want to deploy it, how we're going to configure it, those um um settings for this application, all technical details go in that plan phase. And again, it's the same recipe.

**14:33** · We're just going to prompt it. So, we have another command, which is the tasks Sorry, the plan.

**14:40** · So, we have this packet plan and we just prompt it with our plan prompt. And again, these things takes take time to to prepare, to create um and we just execute it again. So, we executed again. It will run for a couple of minutes. It will look at the constitution. It will look at our at at our um functional requirements and it will create the technical implementation details for it.

**15:06** · And after that, we're ready for the the um the plan that is created. So, if we look again, we have in our um specs folder, we actually have a couple of markdowns extra concerning those things we added during the plan phase.

**15:25** · So, we now have all these technical details is a stateless HTTP server, the technical contacts, we want these versions of TypeScript. And even if I didn't uh specify it, it will either ask me for it it will or it will fill in those versions. And that is something to be mindful, especially with those versions, it will get a version for you. So, it's probably the current version, but maybe it's not the latest version.

**15:49** · So, maybe be more specific if you want the latest version of a framework, be specific and say I want this version in your plan prompts. And after that, we're ready for the task phase. So, it's another {slash} command, so it's a have specially specked tasks.

**16:05** · And we can run it, and it will chunk up all these user stories, all these uh technical implementations from our plan, it'll adhere to our constitution, and we create manageable chunks for our uh AI assistant to integrate.

**16:23** · So, if you run that run that {slash} command, and we have our task created, we have yet another markdown. So, again, there's nothing magic going on, it is markdown as scripts. That is what it is, but it does a beautiful job in chunking these and making it really approachable for these AI assistants to to work on these uh bigger features.

**16:43** · So, what you see here, it split it into a couple of phases, which creates a couple of user stories um so, it will actually do the boilerplate. It will um get that node configuration in there. It will um create a requirement, so we have a package.json with our requirements for it the application we're going to create.

**17:03** · Uh it has a Dockerfile, so it will set everything up for the later stage, so we have foundational the any prerequisites we have to do, and again, it did a beautiful job in like making a logical uh ordering of these user stories to implement during the implement phase.

**17:22** · So, if we've when we created these tasks, so after that task phase, there are things like the spec and analyze we could do, but we're also we you could be ready for for the implementation. So, I highly encourage you to run also the intermediate steps, things like analyze, things like clarify, but if you want to, you could start implementation now. And again, that's just another flash command.

**17:47** · So, if we run this spec/spec it implement, and of course, uh it's not doing IntelliSense until now.

**17:58** · So, we have the spec it implement will actually take our tasks and convert that to um to code. And it will, if you of course I said it wants to be testable design, so it will also set up those tests, and those tests will also help him down the line to create code that actually compiles, that actually works, because it also has to test and verify if everything works.

**18:22** · And after that stage, we come to that implementation done. And what we see now is a lot of files. Uh let me go back to my files.

**18:33** · Close those prompts.

**18:35** · And what we see here is a lot of uh code. So, we have the source code here, and this is everything that was created during that implement phase. And to show you it actually works, I can start it up. And it will actually start, which is always good during the demo. And let me get though that uh Motor Cortex Protocol Inspector, so we can actually view it running.

**19:04** · So, I'm going to start a Motor Cortex Protocol Inspector, and it's just uh a node uh program, a node module you can execute on your local machine. Uh if you don't have it, it will actually download it. I already have it installed. So, it will fire it up. And I have it here.

**19:22** · Um so, here we have the MCP server, the the MCP protocol inspector. And here we have the MCP server already in place, and we can connect to it, and it actually works. And we can do list tools, and everything we we asked you to do. So, we have the search session, and get happening now to get next time something get session. And if I execute this command, you have all these beautiful fields to to search on. So, I just run the tool. Fingers crossed, it's actually says and of course it starts with the opening keynote, which was already um a month ago, but that's fine.

**19:52** · Um just to show you that it works, and that it actually created a working MCP server. What I want you to do is is try this. Try this out. Try this on a real feature. So, don't rewrite your entire workflow tomorrow. Pick one real feature you want to work on either this week, next month, next iteration cycle, something small but meaningful, and do these three things. So, write a specification before you prompt.

**20:24** · Capture what and why first, not how. And then put like two or three, maybe four, maybe five non-negotiable team rules in that constitution. So, that constitution is is like a living document that will be changed over time. You will learn, you will uh get things from the enterprise from other teams to put in there. Uh and sometimes again, it's bigger than your project or your team. So, work on that constitution.

**20:51** · Just start small. And just see how it works. And then the the third thing is just review all these things. Very, very important. I can't stress this this enough. Review everything it puts out.

**21:07** · And then implement it and use it and try it just to get a feel for it. And if you're done with the first feature, you're going to be next be ready for your next feature and implement your next feature using Spec it, which really makes sense if you're working with it.

**21:25** · And with this, I have these three links to share with you. So, I have a link to the Spec it documentation. I have a link to the working code. Uh you can actually follow along. So, you saw me go through these steps for this repository. Uh I put this on a Git repository just for you to get a feel for the code and see no funny business going on there.

**21:44** · And if you have any questions, um I want to connect after, um please uh contact me. Feel free to to find me online. So, thank you so much for being with me here for the Spec it from development. And um we'll talk soon.
