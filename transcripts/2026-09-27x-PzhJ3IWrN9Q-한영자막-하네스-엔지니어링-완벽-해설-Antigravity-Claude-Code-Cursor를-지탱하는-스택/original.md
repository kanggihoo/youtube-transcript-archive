---
title: "[한영자막] 하네스 엔지니어링 완벽 해설: Antigravity, Claude Code, Cursor를 지탱하는 스택의 비밀을 파헤칩니다"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=PzhJ3IWrN9Q"
domain: "youtube.com"
language: "en"
description: "에이전트 하네스(Agent Harness)란 무엇이며, 왜 완전 자율 코딩의 핵심 열쇠일까요? 코딩 에이전트가 한계에 부딪혔다면 문제는 모델 자체가 아니라 스택에 있을 수 있습니다.이번 영상에서는 '에이전트 하네스'라는 개념을 처음 제시한 Google 엔지니어 라이언 로포폴로(Ry..."
word_count: 6007
---

![](https://www.youtube.com/watch?v=PzhJ3IWrN9Q)

에이전트 하네스(Agent Harness)란 무엇이며, 왜 완전 자율 코딩의 핵심 열쇠일까요? 코딩 에이전트가 한계에 부딪혔다면 문제는 모델 자체가 아니라 스택에 있을 수 있습니다.이번 영상에서는 '에이전트 하네스'라는 개념을 처음 제시한 Google 엔지니어 라이언 로포폴로(Ry...

## Transcript

### 에이전트 자율성의 미래

**0:00** · How far into the future can \[music\] you peel back the ambiguity to empower your agents to have autonomy over that task?

**0:06** · So, they're taking like more cues from the context and environment that you're operating in rather than what you're just saying explicitly in the prompt.

**0:12** · That's right. I aspire to be an incredibly lazy prompter. If I have done the job to give the model the tools \[music\] and context it needs to ground itself, then I don't need to frontload that into the prompt. is very important to continually be updating what you think is possible with these lovely tools that we have.

### 에이전트 하네스(Agent Harness)란 정확히 무엇인가?

**0:30** · In this episode, we are going to dive deep into the concept of agent harnesses. Agent harness is the newest buzzword in AI. So, what exactly is it?

**0:41** · Yeah.

**0:41** · Well, in short, an AI agent is a large language model plus an agent harness. So, the harness is everything in that AI agent that isn't the LLM. So for instance, like how Gemini Flash is the model and Google Anti-Gravity is the harness.

**0:59** · Exactly

**0:59** · like that. So if you ask questions like, "Why is the sky blue?"

**1:03** · or "Tell me a joke," the model can give you words back without doing any additional research. It already has those answers. But if you ask a more complex question like, "Should I wear a raincoat?" Well, the LLM doesn't have the answer to that. It needs more information. So something, the harness needs to figure out what the weather is.

**1:23** · So almost anytime we're interacting with AI, we are actually interacting with an agent. So we ask the agent, should I wear a raincoat? The agent gives those words to the LLM, and the LLM sees those words, but it doesn't have the answer.

**1:36** · And so it gives words out that amount to go find out what the weather is. What is the weather? Find that information for me. So then the agent harness gets that weather information like it's sunny out and then the harness takes our original question, should I wear a raincoat, plus the new information about the weather from the harness that it's sunny out and gives all of that back to the LLM. And then the model can respond, no, it's 98 and sunny, you don't need a raincoat.

**2:04** · So, an agent harness is everything that is wrapped around the LLM to give the agent powers beyond just here's some text in, give me text out.

**2:14** · To dive deeper into this concept, Tilda sat down with Ryan, a Googler and also the person who coined the term agent harness.

### 라이언 로포폴로가 밝히는 '에이전트 하네스' 탄생 배경

**2:23** · Hello, I am Tilda and I'm here with Ryan Leopo.

**2:27** · Hi.

**2:28** · And we're going to talk about harnesses.

**2:30** · Um, how did harness become a term? Is it true that you're the person that coined it?

**2:35** · Uh yeah, we did a ton of work on trying to how to get these coding agents to be fully autonomous and there were a ton of neat things we did around the coding agent to make that possible. Uh published some great work on it in February of this year and it kind of has taken the industry by storm. So excited to go into it with you all in detail today.

**2:53** · Yeah, absolutely. I read your essay on leveraging codecs in an agent first world and I think it's fascinating and anybody who cares about the future of software engineering must read it. You make a really compelling case for not writing any code manually.

**3:09** · Yeah, I've been uh trying my best not to do so and I don't think I've actually opened an editor at all since around May of last year. Uh holding strong here at Google.

**3:19** · It's been uh eight weeks here for me.

**3:22** · Amazing. I have to admit that not reading code that I'm going to put to production scares me a little bit, but you make a very compelling case for it.

**3:31** · So, um, that engineers are just going to be writing specs in natural language and that's all we'll be doing. So, what was the most surprising thing you've learned putting this into practice?

**3:39** · It is very much the case, I think, that you have to take models getting better and better over time as a given. uh but even as the models get better and better I think I have come to understand that they won't necessarily become better at better at knowing what I want by default. So the whole idea with harness engineering is to do that context and environment curation around the model so that it more naturally every time it boots up comes to understand what it is exactly that I want.

**4:08** · And as the models get better and better and smarter and smarter and follow instructions more and more, it allows them to do more and more complex things, the more I ground them in what good looks like for me.

**4:20** · M so they're taking like more cues from the context and environment that you're operating in rather than what you're just saying explicitly in the prompt.

**4:26** · That's right. I aspire to be an incredibly lazy prompter. uh because if I have done the job to give the model the tools and context it needs to ground itself then I don't need to frontload that into the prompt.

**4:40** · One thing that struck me about your essay was that you advocate for putting the kinds of engineering best practices that you might use when scaling up in terms of number of engineers working on a project like llinters like well- definfined coding conventions. Um which of those best practices do you feel like have worked best for an agent first workflow?

**4:59** · to be honest, all of them. Uh, I really want to try to push the bounds on autonomy as much as possible. And I think there's sort of like the spectrum of interventions that we can put in place with the models. The most simplest, smooth brain, stupidest one I can think of is like literally just try my prompt again without changing anything else to see if I get better results. But, you know, that does not scale to my teammates. It doesn't scale across my time.

### 시프트 레프트(Shift Left): 에이전트를 위한 컨텍스트 자동화

**5:26** · So I can think about putting these interventions further and further to the left in the software engineering process. I can add docs. I can add some a agents.mmd that points at those docs or I can add a static verifier and a test. Maybe those static verifiers themselves will introduce prompts to the agent uh and onward and onward and onward eventually uh if we are lucky or not so lucky uh into evals that uh we can upstream to our good folks in deep mind in order to help uh make Gemini the best.

**5:58** · Amazing. And by shifting can you define a little bit what you mean by shifting left?

**6:04** · Yeah.

**6:04** · So I want the interventions that we give to the model and its environment and its tools to be as cheap as possible to implement. And for these uh agents who crave text, who operate on text, providing them more text uh in increasingly more sophisticated and automated ways is what I mean by shifting it to the left. So you know appending some text to my prompt.

**6:25** · This is as basically far to the right as we can go. uh and giving the model tools and the ability to reason through its own documentation corpus that we give it would be increasingly further to the left to give the model the means to go discover that context for itself.

**6:46** · What are some emerging new best practices like for example self-healing observability agentic loops that might not have been possible before the technology got as good as it is now?

**6:55** · Yeah, it is uh is very cool that simple tools that already lean into the best practices that you and I already use for software engineering are able to be leveraged by these agents in increasingly creative ways. And one reason that is the way it is is because best practice tools are very well represented in the training data.

**7:17** · If I can collapse an observability problem into something that I have used my entire career with something shaped like PromQL and online observability techniques. Well, that's something the model is going to know how to do well.

**7:32** · It composes super nicely. We move the collection and aggregation of observability data into a best-in-class tool for it. We give the model something that composes really nicely with a CLI that is able to move reasoning into determinism and give it essentially a very easy access to context in a dense format that it's going to know what to do with.

**7:55** · Uh and we can sort of use that pattern all over the place to take your highcale best desires for you know software engineering and just go do them because code is very cheap to produce right now. uh I can see the agent fail in a particular way. One one thing I added uh the other day is I like the idea of structuring my markdown with the links embedded not as part of the inline flow of the pros but as sort of like an anchor kept close to it.

**8:23** · And I do that to make it really efficient for the agent to read the actual pros text in the documentation. But the link itself I write some tests for that it's close uh to that text. So, you know, my named anchor is in the end of the paragraph or the list that it's associated to. And this is some gross code that I have vibed up that sort of keeps context efficient. It keeps the text human readable for me so it's easy for us to review.

**8:49** · And I have solved this problem for forever that's maybe slightly idiosyncratic to my preferences, but also good for my agents and my team.

**8:58** · So, you're solving for like the loss in the middle problem or and also human readability at the same time.

**9:03** · That's right. That's right. you know, because I'm not writing any of the code, I do require it to be pretty readable.

**9:10** · So, I can sort of peek under the covers of the agents execution because looking at the end produce artifact is how I want to treat agents whether they're producing code or Google Docs or uh Google Sheets, right? I want to look at the end artifact, say, is this reasonable? And if it's not reasonable, I do need to have some way of backing out to why, right? What nonsense went into the production of this unreasonable Google sheet that I need to whack the agent on the head to make sure it does not make that same mistake again?

**9:40** · \[gasps and snorts\] Whack the agents on the head. I love it.

**9:43** · So, you wrote this essay in February of 2026 and it is now September 2026. And one thing that you said you didn't know at the time is like how is this system going to evolve in the long term?

**9:55** · Yeah, the if I were to like kind of say like what challenge I have been trying to solve with harness engineering this whole time, it has been do agents cohhere over long time horizons. I am a big believer that all the work that we do in human organizations is very much an iterative sort of process, right? We have not oneshotted the Google business, right?

**10:19** · \[laughter\] uh it has taken very many years to build it to where it is and the contributions of many over a very iterative process and to have agents be full-blown participants in that production of work essentially means we need to keep realigning the things they produce to sort of the golden thread of what the organization considers to be good. And basically all of harness engineering is an increasingly sophisticated set of tricks to bring the agent back to baseline. Whether that's small PRs that are easy to review.

### 에이전트는 긴 시간 지평에서도 일관성을 유지할 수 있을까?

**10:50** · And if the small PRs are easy to review, well then it should be easy to operationalize agents to do some of that reviewing which means we can narrow the state space of those small PRs which lets us go longer horizon with less human intervention.

**11:05** · And this is sort of what is meant by increasing the size of the loop that you are using agents for. How much confidence do you have that in a small change you can get something reasonable?

**11:16** · Can you stack those small changes end to end in order to get something reasonable over a longer arc? And then what would it mean for me as a supervisor of the system to try something more ambitious to do a bigger loop?

**11:28** · Oh wow. So starting with something small and working iteratively from there to give your agents more and more autonomy making bigger and bigger changes as you scale up.

**11:37** · That's right. And eventually you can get to the point where you know things like wholesale language migrations are tractable because you have put enough guardrails in place to know that bunch of changes stacked end to end are good. You can trust the code that's being produced which means you can apply that trust and autonomy in a novel direction.

**11:58** · As I was sort of working on these various autonomous software engineers and engineering managers, it was very cool to see different individuals contribute to these agents because I you could like kind of watch building out the stats of like your your like RPG character, right?

**12:19** · I get a new person on the team who is a react architect and boom like the attention that they pay is able to bump out the stats in frontend architecture and performance and this is something that I don't normally bring to the table here. So um curating a diverse team like this and having them all contribute to a central leverage producer of work actually means you can get a quite well-rounded agent that has the best of everyone as a result.

**12:43** · Wow, that's amazing. like like you're hiring for a team, but you get to specify exactly what skills you need and then the agent just brings those to the table.

**12:50** · That's right. And moving it back to harness engineering being a set of tricks to refine that golden thread of execution, I need the agent to both be a back-end architect and a front-end performance expert because I don't know what task I'm going to do. M and you would think around sitting in sprint planning in the beginning of the week divvying up work based on who has the expertise. But if you only have agents doing the work, they need to figure out which expertise they need to activate.

**13:22** · And this is why having the agent classify what work it's going to do and use that to dynamically discover what context it needs to pull in is part of what it means to have high autonomy.

**13:32** · Because if you're not paying attention to the code that is produced in great detail, that also means you probably don't want to be super in the weeds on prompting and identifying tasks and pointing the agent in the right direction in the first place, which is again another thing that's going to let us expand that loop.

**13:47** · Yeah, it sounds like you're also like expanding the autonomy you're giving them as far as business logic, like giving them more and more ambiguous problems to solve the same way you would with growing an engineer from a junior engineer to a senior engineer across the span of their career.

**14:00** · That's right. That's right. sort of sort of touching on this I think it's very interesting to think about the sorts of skills that you know are now applicable with using agents as the execution force between producing code and I do think about it in terms of that that sort of loop size right how far into the future can you peel back the ambiguity to empower your agents to have autonomy over that task and in the same way I

**14:26** · want staff engineers solving problems for the organization six months out I want from junior to senior to staff engineers. With agents, think about how far into advance they can unblock their agentic team.

**14:37** · No, bring it back to the bigger picture. I was wondering if you have advice for like your average engineer and how much they need to know about harness engineering or whether it might make sense for them to build their own harness.

**14:47** · I have never built a harness. Uh I think this is sort of a a big misnomer uh with what I term harness engineering. I have always kept the anti-gravity like thing in your agentic system as fixed. Take the best model you can as soon as it comes out. Try to have high ambition with it. Be actively discarding all your priors on what is possible because the world moves very quickly these days.

**15:16** · Try and have high ambition. Observe when the agent fails to do a good job.

**15:21** · interrogate it and yourself on why and then try to use the fact that code is very cheap to produce, pros is very cheap to produce to refine the environment around the agent to just try your best to disallow these divergences from good behavior. And the more and more you do this, the more tools you give to the agent, the more rich documentation, the more you help the agent navigate that documentation and just in time find the right things, the

**15:49** · more and more complex tasks it should be able to accomplish the less you have to keep your hand on the wheel and tools and context is a thing that is very very core to the agent. All harnesses expose essentially a file read, a GP, and an arbitrary command execution tool.

**16:07** · Which means if you focus all of your efforts on improving quality on tools and context, you can freely adopt the newest models as they come out and you'll be constantly acrewing leverage into a bit of the system that will never become obsolete, which is a big challenge with these agents. You can very much over scaffold around them, which constrains them unnecessarily as they get better.

**16:31** · and gets you into sort of sunk cost fallacy around not wanting to throw this stuff away.

**16:38** · Yeah, I can certainly relate to that.

**16:40** · \[laughter\] Oh, this is amazing. I'm so glad you've joined us at Google. Do you want to tell us a little bit about why and what you've been working on?

### Google Cloud를 운영하는 에이전트 구축하기

**16:47** · Yeah, so I am working on Google Cloud. Uh I am trying to build uh the best agents to help you operate your cloud.

**16:56** · And the reason I find this to be so exciting is my entire motivation working in AI has been to chase after deployment. Uh it's my belief that today we have what's called capability overhang where the models are so so good beyond what we are able to extract from them in terms of useful work today.

**17:14** · So the goal for me as an applied engineer is to chase after gobbling up as much of that capability overhang as I can which means trying to increase the ambition and spaces in which we deploy this thing and put it into places where it just doesn't exist so far. And Google cloud I think is this very wide and deep hole of very complex systems. It is essentially a very large computer. \[snorts\] And part of having an agent be successful is to give it a computer.

**17:46** · And I want to make Google Cloud the best computer for agents such that they can operate it exceedingly well and to help customers do that on their own in the process.

**17:55** · There is no cloud. It's just someone else's computer.

**17:58** · That's right. That's right. \[laughter\] That's right. We want to give we want to give \[clears throat\] the agents a big somebody else's computer.

**18:04** · Amazing. \[laughter\] Um, \[clears throat\] do you have any last words of advice or any hot takes you want to share with our audience?

**18:13** · It's very important to continually be updating what you think is possible with these lovely tools that we have. The pace of AI progress is so fast and you want to make sure that your experience with them and the expertise that you are building with yourself and your teams is one that will continue to make sense as the agents and their harnesses continue to improve. Which means focusing on these two sort of extensible interfaces around tools and context is the way to do that.

**18:44** · Agents will always need context in order to do that last mile adaptation into what you think good is. And as you can continue to shift that knowledge right left shift it to the left \[laughter\] uh in terms of increasingly capable tools which act as a form of memory and enforcement of what you think good looks like. You'll continually be amazed as the models are able to do more and more interesting things for you over time.

**19:16** · Thank you so much and thank you for tuning in.

**19:18** · Thank you.

**19:19** · So, now that Tilda and Ryan have talked about the concepts behind an agent harness, we know that a lot of you are developers who want to see the code and get hands-on, dive a little deeper. So, let's look at how Billy customizes his own agent harness for specific tasks by weighing design decisions like looping and memory. And we'll also look at the differences between linear and closed loop patterns.

### 코드 심층 분석: 나만의 에이전트 하네스 구축하기

**19:44** · An engineering mentor of mine always said, you can just use the framework, but a great engineer will really understand the framework. Building a harness yourself is how you understand what's happening under the hood when things break. Agent harnesses are the ways that we're able to push on our models and get the most out of them. If we look at a model on its own, an unharnessed model, it can know about tools, but it has no way to execute anything. And we know that many models have been fine-tuned for tool use.

**20:13** · So, they can take actions like interacting with files, making API calls, managing their context and memory. But on their own, the model doesn't have a way to interact with the environment. Let's take a look at some code. I've got here. If I run this code, the the model can only output the text saying that it should inspect the file. The harness needs to do the work of connecting that intent to the action.

**20:41** · So, the goal of that connection is to optimize a model to do what we want and maybe we want it to be coding or writing or researching. And agent harnesses are the way to do that. Now, there isn't one best harness to rule them all. There isn't one best solution here, and that's kind of what we're exploring right now in this problem space of agent harnesses. What's important in one problem might not matter in others. So, with each harness, there are a few things you can make decisions about looping. How many times will it loop?

**21:16** · Tools. What tools should it use? When should it use them? How should it use them? and memory. How important is memory for the workflow and when do you want to retrieve it? So, we're going to take a look at three different harnesses here. And the first pattern I want to show is a linear harness with no looping.

**21:39** · So, the \[clears throat\] this is going to be able to inspect a file, output a recommendation, and exit or just out the answer if it didn't need to look at that file. Um, just returning there. Uh, and it's always going to go through this same exact flow. This is great if you need some level of determinism. You want it to be able to do the same thing each time. So, let's just run this one as well. Let's actually run it.

**22:08** · And we'll give this a second to output the result. So, we we went through this file. we outputed uh the result synthesizing the information from the file and the analysis that we wanted it to do. Um but this is always going to go through that same exact flow each time. Read the tool once output the response and then ends.

**22:33** · Now another pattern which is super common in code editing and more is this kind of closed loop. So just kind of continuously running over and over until there's an exit state. So if I want to do something that's working on code, making edits to that code, I want to use this kind of closed loop harness. I wanted to run until the problem is resolved. So here we're going to basically apply a code edit change and then after that change, we're going to run the tests.

### 선형(Linear) vs 폐루프(Closed Loop) 에이전트 패턴

**23:01** · So until the tests pass, we will not be returning or I think here we'll return after maybe five iterations. But this is going to let us change the code, then run the test suite, capture that failure output, not just see did it pass or not. We're going to see why it failed and feed that error back into memory and loop through it until we can get those tests to pass.

**23:25** · And then a final one I want to look at today is just something with more safety guardrails. you know, if we want to build something from scratch, but don't want to implement all of this functionality one at a time, you might reach for a tool like ADK, um, the agent development kit by Google. And this allows us to build something more advanced with more guard rails with memory compaction built in, and you don't have to code all those features yourselves, but you still have a lot more customization than using something out of the box.

**23:54** · So even here I've got this block destructive commands function and I'm making sure I don't do any dangerous commands like removing files, dropping my database, pushing to GitHub before taking an action like running some kind of code. So here we're able to kind of m work with um an agent tool, give it a lot of customization without having to use something purely out of the box.

**24:24** · So right now the most popular agent harnesses are tools like Google integravity, cloud code, cursor and everyone's going to say like this is the best thing right now and all of these tools are fantastic but what are they the best for? What are they fantastic for and a lot of them are great for using a computer in a specific way using memory in a specific way solving problems in specific ways but you might need something opinionated for the problems you're trying to solve.

**24:50** · And what makes these tools work so well and feel really smooth when working on your computer or writing code isn't the model themselves. The models are really smart.

**25:01** · It's the harness engineering around the models. They are smartly designed with engineering principles and all the right tools to write software effectively right now. All right, back to Smitha and Luke. That was an excellent deep dive into agent harnesses, but there's a lot of cool things happening in the AI space right now. And I know Smitha, you've got a lot of other things that you'd like to share. So let's talk about those.

**25:26** · Your coding agent doesn't need a smarter model. It needs a better stack. Whenever developers feel like their coding agents are hitting a wall, the first reflex is to just jump to a heavier foundational model. But once you work with AI workflows day in and day out, you realize that the model is only one piece of the puzzle. A truly high-erforming agentic devstack comes down to three connected layers. Number one is the model, number two is the harness, and number three is the knowledge. When all three click into place, everything changes.

### 고성능 에이전트 개발 스택의 3가지 핵심 계층

**25:58** · Today, I'm walking you through the three tools that I've been loving this week, one for each layer of that stack. So, layer number one is the model layer. And my daily driver this week has been Gemini 3.8 Flash. Now, your initial reaction might be, why flash? Why wouldn't you want something with, you know, the heaviest reasoning pure? Um, and here's the secret to agentic workflows. Agents don't work like traditional single turn prompt boxes.

**26:26** · They run in continuous loops. So, an agent might inspect a directory, update a function, execute unit tests, and then repeat that sequence 20, 40, or even 60 times just to finish one task. So when you have something that uses that many sequential hops, speed and cost compound dramatically. So a fast cost effective model isn't a downgrade. It is the exact thing that makes realtime agentic loops practical and responsive.

### Gemini 3.8 Flash가 에이전트에 최적인 이유

**26:56** · Because Flash is so lightweight, it turns through dozens of iterations effortlessly. It keeps me in the complete loop without running up a massive bill. And once you have a fast model, you need a dynamic structure orchestrating it. That brings us to layer number two, which is the harness. The tool I'm using here is anti-gravity, specifically their boost command. In one sentence, boost is a slash command that transforms a single model into a coordinated team.

### Google Antigravity Boost 활용법

**27:25** · So instead of relying on one agent to do everything sequentially, boost actually spins up an orchestrator. It delegates specialized sub agents in parallel and also it finishes with an independent verification pass that thoroughly audits the work before anything touches your codebase. Here's how to get the most out of it. First off, you don't need to use it for everyday tasks.

**27:48** · So, for example, if you're just working on standard features or you're adding a UI component or navigating a code base, the default agent is snappy and efficient, but you want to save boost for deeply intricate engineering challenges. So, for example, this table right here shows you a really good use case on when boost is super useful. So the following uh table actually compares three execution modes in anti-gravity and it shows you how boost can actually change things around.

**28:21** · So you want to save boost for the deeply intricate engineering challenges that are described in this table right here which tells you exactly when you want to use boost. That leads us to our third and final piece which is layer number three, the knowledge layer. With layer number one and two, you've got a fast model and you've got a coordinated harness. But now what happens when you want your agent to try and configure, for example, your cloud infrastructure?

### Google Skills로 에이전트에 전문 지식 제공하기

**28:47** · How does it know how to do that? That's exactly where Google skills comes in. So this repository actually recently crossed 19,000 stars on GitHub. It's still early and actively evolving, which means the contribution window is wide open right now if you want to get involved. To put it simply, a skill is a curated domain knowledge that your coding agent loads on demand. So \[snorts\] it's not just an MCP server. It is not a heavy plug-in.

**29:14** · It's clean, precise context that is given to your agent that stops your agents from guessing and actually informs them on how to do things. So this repository contains over 100 different skills across Google Cloud, Firebase, Flutter, Maps, and many more. And also installation is super simple. All you have to do is run this single command to install all of these skills.

**29:39** · And best of all, because it's completely harness agnostic, whether you're running cloud code, codeex, or Google anti-gravity, they can all pull from this exact repository. As you look at your own workflow this week, think beyond just changing models. Use things like Gemini 3.8 Flash to power rapid highfrequency loops.

**30:01** · You can make use of anti-gravity boost to do complex tasks with anti-gravity and then also to give your agents specialized knowledge to do things on Google as well as flutter maps and many more. You can make use of Google skills.

**30:21** · Smither that was really terrific. I'm going to be jumping back into anti-gravity this afternoon to work on a project. So I will definitely be installing those Google cloud skills. So thank you for sharing those tips. You're welcome.
