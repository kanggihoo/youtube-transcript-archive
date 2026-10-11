---
title: "[한영자막] Uber에서 디버깅 에이전트 하네스를 구축하는 방법 — Kriti Dangi"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=6YuIp-MwPv4"
domain: "youtube.com"
language: "en"
description: "Uber의 시니어 소프트웨어 엔지니어 Kriti Dangi가 AI 디버깅 에이전트 Debug Assist의 구축 과정과 실제 운영 사례를 소개합니다. LangGraph, MCP, Claude Sonnet·Opus를 연결해 근본 원인 분석부터 수정안 검증과 PR 생성까지 처리하는 구..."
word_count: 5011
---

![](https://www.youtube.com/watch?v=6YuIp-MwPv4)

Uber의 시니어 소프트웨어 엔지니어 Kriti Dangi가 AI 디버깅 에이전트 Debug Assist의 구축 과정과 실제 운영 사례를 소개합니다. LangGraph, MCP, Claude Sonnet·Opus를 연결해 근본 원인 분석부터 수정안 검증과 PR 생성까지 처리하는 구...

## Transcript

**0:00** · So, this talk is about debug assist and \[clears throat\] AI agent for debugging that we built at Uber.

**0:07** · So, today we'll talk about why debugging is actually hard in reality.

**0:12** · How does debug assist help with it?

**0:14** · We'll also have a demo. And then we'll see a quick look at the internal architecture. And lastly, I'll share a couple of interesting numbers with you.

**0:26** · All right. So, what you have in front of you is Uber's in-app bug reporter.

**0:31** · So, all the Uber internal employees, as well as beta testers, have access to report bugs on the Uber app itself via the beta version.

**0:41** · And this is what gets captured in the system. So, let's say I'm using my app, the screen goes blank, or maybe I'm experiencing hangs, or maybe there are battery issues. I can simply just click and report a bug.

**0:54** · And for me, it looks like saying, "Oh, my screen is blank." That's it.

**0:59** · This system captures all the information alongside it.

**1:03** · For context, this product is called Wisdom internally.

**1:07** · So, along with the natural language bug description, it captures the metadata around the issue. For example, what was the app that was affected? What was the app version that was affected? What was the OS that was affected? Which city is the user experiencing the issue in?

**1:23** · Along with this, we also capture a multitude of logs like network logs, analytics logs, console logs, GraphQL logs, UI state logs, and so many more.

**1:34** · And as we can see, screenshots are also captured from the device. Um there are no security concerns here. We only capture the Uber screenshots to debug the issue later on.

**1:46** · This is another product we have at Uber.

**1:48** · It's called Healthline.

**1:50** · So, Healthline is essentially a app quality analytics tool.

**1:54** · Um similar to Wisdom, it also captures issue. However, it does that automatically. So, every time your app crashes, you experience a hang, a jitter, or any kind of performance degradation, Healthline is a system that kicks in the back end.

**2:10** · So, similar to Wisdom, it also captures the metadata. For example, what was the session ID? What was the analytics ID?

**2:18** · What was the user doing before this?

**2:20** · Along with all the logs that we just listed and many more.

**2:24** · However, unlike Wisdom, it captures the stack trace, all the whole whole crash dump as well.

**2:31** · So, we can say which code was actually causing this problem now.

**2:37** · Now, between Healthline and Wisdom, almost 50,000 issues are assigned to engineers every year. 90% of these are customer impacting, and as a result, we end up sending 12,000 pages to our engineering teams everywhere.

**2:53** · So, someone has to debug these, right?

**2:56** · Someone has to fix these.

**2:59** · Before I move on to the next slide, a quick show of hands, how many of us do not like fixing production issues?

**3:09** · I Lots of hands. I've I've touched a nerve. It is annoying when you receive that pager at 2:00 a.m. at night, and you have to sit all night and debug it, and you don't even know where to start because your brain is so foggy.

**3:22** · And that's how debugging in reality is.

**3:25** · The errors are often unclear.

**3:27** · Um, we all have received that message, "Something went wrong." And then we have to figure out what went wrong. So, we have to dig through unfamiliar code logic.

**3:36** · The context is also scattered. Um, you have to go through code, you have to go through logs, you have to go through configs, and you have to go through data. And to access that data, there are so many tools internally.

**3:49** · Speaking of code bases, code bases at Uber at Uber are vast. So, we have multiple mono repos. We operate in a mono repo architecture style, which means that many many teams are contributing to a single repo.

**4:04** · So, to figure out who caused the problem is another problem in itself.

**4:10** · And even when you do, there are still cross-team dependencies. The code might be owned by someone else. Even if it is owned in your team, you don't know all the code written by your team, right?

**4:22** · This means that an engineer at Uber takes almost 28 days to resolve an issue on an average.

**4:31** · And by and as seen in a public report done by Stripe, developers spend 40% of time debugging an issue.

**4:39** · And this is why we developed Debug Assist, which aims to improve the app quality and enhance the debugging experience of developers so that we can do what we do best, develop.

**4:53** · This is the overall pipeline that we generally follow. It is a end-to-end agentic resolution journey. It starts by discovery.

**5:01** · Discovery happens through Healthline and Wisdom, as we just saw.

**5:05** · Next, we move to the auto triage stage.

**5:07** · This is the stage which figures out what is the priority of this issue, how severe it is, and who actually owns it.

**5:15** · Who is the on-call I should be tagging here?

**5:18** · Then starts the Debug Assist actual pipeline. It does a deep root cause analysis in under 30 minutes. We'll We'll see how it does that. We'll take a deep dive here.

**5:29** · And lastly, we aim towards a resolution.

**5:32** · So, we don't just want to provide a big dump of data to the developers. We want to make it actionable. We want to resolve the issue end-to-end.

**5:43** · Now comes the fun part. This is the demo part. I hope all of you are attentive.

**5:49** · So, this is the wisdom screen that we just saw earlier, and this is a real-life example, by the way. One day, one of our Uber developers woke up, and he booked a cab to office.

**5:59** · While waiting for the Uber, he realized that his phone was burning up in his pocket. So, he filed a wisdom bug report.

**6:06** · All he said was, "Uber app is responsible for nearly 30% of my battery usage. My phone is heating up. That's it."

**6:14** · Then, he happily sat in the Uber, came to office, opened his laptop to look at the issue.

**6:20** · In those 20 minutes, Debug Assist had already created a fix without him clicking a single button.

**6:28** · All the developer had to do was review it and deploy it.

**6:32** · So, how does this magic happen in the background?

**6:36** · As you can see here, the wisdom has captured the natural language description. It has captured the screenshot of what the uh developer was seeing while booking his cab, right?

**6:47** · As well as uh a screenshot uploaded by developer, which says that, "Oh, my battery usage is being consumed by Uber." And we can clearly see it's 29%.

**6:59** · There are metadata and logs associated it uh with it as well.

**7:06** · And this is how debugging was actually assisted. So, this is the output of Debug Assist.

**7:12** · Um on the left side, we can see that Debug Assist has root caused the issue to a hot looping code path, which means that there was certain code path that was supposed to run in the background, but it was actually being treated as a foreground loop path, which led to high CPU cycle usage and high battery regression.

**7:32** · Now, along with this RCA, it also tells us that, "Oh, by the way, the app was backgrounded for 17 minutes. It was not in the foreground." And all of this rooted is rooted in evidence. So, on the right side we can see there is a evidence timeline. So, we know that the agent is not hallucinating and we are somewhat confident in our fixes.

**7:54** · And lastly, we can see the developer was pretty happy.

**8:00** · This is another example. So, there was a crash that was occurring on the Uber app due to a bad roll out. Essentially, whenever someone clicks on a push notification very very quickly, the app was crashing. This was a high severity crash, that is why it is marked as a P1, which is priority one.

**8:17** · And Debug Assist created a whole deep deep RCA for it. It pinpointed the code which was causing this and it also created a fix for it. The fix was sent to developer via a Slack message later on. And in this case, the fix was merged and deployed the same day. So, we ended up catching the crash at a 5% roll out and fixing it at the very same day.

**8:46** · Now, let's take a look at what Debug Assist actually does. How does it actually accomplish this?

**8:52** · So, as you can see the agent is built on a LangGraph pipeline. It is a mix of deterministic and LLM nodes.

**8:59** · Why LangChain, you might ask?

**9:03** · So, agents generally have a planning phase and an execution phase.

**9:08** · What LangGraph or LangChain allows us to do is bypass that planning phase.

**9:13** · We give the plan to the agent that these are the steps you have to follow every time. So, it removes certain levels of hallucination from the agent. We are not totally dependent on the LLM to come up with a good plan to fix the issue.

**9:28** · We control the plan.

**9:31** · So, it starts with a context collector node. This node essentially captures all the data that we just talked about from healthline, wisdom, all the logs, etc.

**9:40** · And this is a deterministic node. It's not an LLM node. Why not LLM in this world of AI? Because everything doesn't have to be via agents. It's simply fetching data. Um we don't want to overload the agent with a lot of context bloating. We don't want to add latencies to the agent of the APIs that we already know of. And of course, LLM cost is a huge problem these days and we don't want to bloat that as well.

**10:06** · Um also, this allows us to parse and pre-process and prune those logs. So, these logs that I'm talking about are huge. They are megabytes and megabytes and gigabytes of logs. You cannot simply dump them to an agent. You have to pre-process them in some ways.

**10:22** · Next, we move to the classification or the RCA node. This is a LLM node. As you can see, it's highlighted in blue.

**10:30** · Now, this node looks at all the data we just fed it.

**10:34** · It first tries to categorize the crash.

**10:37** · Is this even happening because of an Uber issue? Or is this a third-party library code? Is this an infrastructure issue? Is this a network issue? Do I need to create a PR to fix this?

**10:51** · Once the categorization is done, it comes up with a confidence score, as we can see. And finally, if it feels I need to get more data, it goes and queries Uber ecosystem. So, it does that via MCP connections like Jaeger logging, um Jaeger distributed tracing, logging, uh incident data, is there any ongoing incident that's generally impacting the users, etc.

**11:15** · Once that is done, it performs the RCA via sub-agents. So, we fan out multiple sub-agents in parallel and let them do RCA. And once we have that, we consolidate the results.

**11:28** · To give you example of some of the sub-agents, um one sub-agent is breadcrumb analysis. So, we give all the session data to the agent and we ask it to recreate the timeline of the user.

**11:39** · This not only helps with the good RCA, but it also helps us reproduce the issue.

**11:45** · Another agent, um, I can share with you is crash correlation agent. So, whenever a crash is occurring, can I correlate it to a particular version release? Can I confidently say that this version is experiencing the crash?

**12:01** · Similarly, the next step is a fix node.

**12:05** · Now, before I move to the fixing part, um, you might see there are certain configs given in every node and RCA node actually runs on a lower model, Sonnet, with limited number of turns. You might think that this is a complex node, but it's really not. If you think about it, it's mostly looking at the data and gathering information and summarizing it.

**12:25** · And that's why, uh, it runs on Sonnet with limited number of turns because, uh, with trial and error we figured out that if it's taking more than 20 turns, it's generally going in the wrong direction in a bad rabbit hole. And that's how you also put guardrails around your agent.

**12:41** · Let's move to the next step, which is a fixing node.

**12:44** · Now, this is the node which which needs the big brains. So, it goes through the code base of Uber and Uber code base is billions and billions of lines of code.

**12:54** · Now, it tries to figure out which module might be affected, which code path would be affected, and all the states are passed between each node. So, it has the state of the previous node as as well.

**13:03** · It has not forgotten anything.

**13:06** · Before fixing, we first try to mitigate the issue, too.

**13:11** · So, as you can see, most of the Uber issues are behind a feature flag and this node connects to a feature flag MCP.

**13:18** · It tries to correlate, is this feature flag causing this issue? And, um, mind you, in all of your phones that you're using Uber app, there are at least tens of thousands of feature flag that are active in the background.

**13:33** · So, just correlating that one crash to one of those feature flags is already a very complicated task.

**13:41** · If we have a very strong correlation, it simply goes and rolls the feature flag back and the issue is mitigated. And then you're free to fix it on your own time.

**13:51** · So, we have the fixing and the mitigation step here, which runs on Opus with a higher number of max turns.

**13:58** · Next, we go to the validation stage.

**13:59** · It's actually called basil test for legacy reasons, but it's actually a validation stage.

**14:05** · So, in this case, the agent tries to reproduce the issue either via a unit test or a mobile automated end-to-end test.

**14:12** · Some flows at Uber have a automation test that runs on simulators or emulators directly, especially for the core flows like booking a ride.

**14:21** · And this is the node that tries to validate its own fix.

**14:25** · So, you not only just give the PR to a developer and say test it, you also validate it and increase the confidence of your own fix.

**14:34** · And finally, when you are happy with the fix, we create a diff or a PR in this case. The PR is attached to the Jira, to the issues on health line, wisdom.

**14:45** · It is sent to the developer via Slack and all the information is updated internally as metadata.

**14:52** · A few core things worth pointing out here is this is the basic skeleton of the agent.

**14:59** · It never changes.

**15:01** · What changes is the skills and plugins.

**15:04** · So, each of these LLM nodes have their own skill. How to create a good PR at Uber. What are some good practices we follow for test planning. How to fix an issue in Android. Do I want to do lazy loading always? Do I want to defer something to background, etc.

**15:19** · Now, these skills and plugins are as the name suggests pluggable.

**15:25** · So the skeleton remains the same and all of this core business logic is outside the skeleton which is fetched at runtime.

**15:33** · Which means tomorrow if I want to add a new agent, it's a matter of crowd sourcing the skills.

**15:40** · Which leads me to the next slide. How did we manage to productionize an agent at Uber scale? Now running something on your local machine is one story but running it at Uber scale is another story all together.

**15:52** · So as I said, we have provided the harness to the developers. We have provided the steps to follow. We have provided the runtime environments, the dependencies, etc. All the teams have to do is bring in their own skills, own specialized skills on top of what we already provide.

**16:09** · Which also reduces the load on us because now we don't have to maintain a multitude of skills and plugins and whatnot for everyone.

**16:18** · You bring your own specialization. And we provide the harness.

**16:23** · So right now we have almost eight agents running at scale across five mono repos and all of them share a single code base.

**16:30** · All of the code is inside a Python mono repo and it is packaged as a Python binary called PEX. The PEX is uploaded to a common artifactry and every time an agent wants to run, uh it it knows its type. So according to the agent type, it fetches the correct binary. It fetches the correct Docker runtime and Docker images which provides all the dependencies and runtime environments.

**16:51** · And finally, it fetches all of its pipelines which is uh scattered across different mono repos.

**16:58** · Again, um I would like to highlight that this is a harness and even the skills and plugins for every agent is fetched at runtime. So we don't do a dump of all the marketplace plugins. Uber has a skills marketplace which is huge. There are almost 3,000 plugins right now and we can't dump the context of all the plugins to an agent. It goes crazy. So, you need to limit the agent in some way and this is how we do it using the agent type parameter.

**17:30** · Now, we don't stop at PR creation and forget about it.

**17:34** · We provide a interactive environment to the developers where they can talk to the agent and actually refine and validate the output themselves.

**17:45** · Firstly, there is a small diff fixer that we have at Uber and what it essentially allows us to do is let's say someone wants to add more unit tests. They want to refactor.

**17:55** · They want to change a variable name. So, all of these small and incremental fixes can be taken care of by the diff fixer.

**18:02** · The developer doesn't need to do anything. It's just a click of a button and a single line prompt.

**18:08** · Next up, we have the Ask AI chat. So, the developer is free to talk to Debug Assist itself.

**18:14** · Ask about the RCA, the issue and even provide corrections on top of it.

**18:20** · Now, as soon as you provide corrections, you also build a feedback loop to the agent which helps improve its own prompts and skills.

**18:30** · And lastly, we have open in your machine. Even after all of this, some people do like to open the issue in their own machines and debug it by hand.

**18:38** · Um I would also encourage you to do so.

**18:41** · Um Now, that's the same feature that I'm talking about here. So, you can open the issue in your own machine or in a remote um remote machine that we have uh from a pool of machines.

**18:52** · And the environment and everything regarding that issue is already set up for you. So, there is no installation required. It's a single click operation again.

**19:05** · Sharing some interesting impact numbers with you.

**19:09** · Uh currently, Debug Assist runs on almost 9,000 issues every month. It provides 9,000 RCAs, deep RCAs every month.

**19:18** · The RCA accuracy right now is 50% as compared to exact developer fixes. And out of the remaining 50%, almost 40% of those issues are still in the right direction. So, Debugger Assist maybe is going in the right module, but not picking the right file, or going to the right file, or not picking the right function. But still, it's in the same direction, which still helps the developers fix the issue much, much faster.

**19:46** · We have also noticed that the Jira resolution time has increased. It has almost um increased by twofold, which is a huge improvement in in itself to clear the backlog of out of SLA issues.

**19:59** · And lastly, the PR merge rate. Um back when we started this 1 year ago, the PRs that we were creating um were, let's just say, not getting merged as frequently as you would like them to.

**20:12** · So, the merge rate was only 5%.

**20:14** · And now that number has increased to almost 48%.

**20:19** · Having said that, we are not stopping here. The AI space is evolving continuously, and we aim to push these numbers further. So, we want to improve the coverage. We want to improve add more and more use cases to it. We want to improve the accuracy and push it to ideally 100%. And as a result, we hope to increase the Jira resolution further, as well as the mean time to resolve.

**20:42** · Thank you, everyone. And uh if you have any questions, please, the floor is open.

**20:51** · \[applause\] Perfect. Oh.

**20:57** · Yeah. Well, a wonderful presentation, by the way. Um I want to incorporate a lot of this into my my own workflow, so fantastic. Thank you. Um I had a few questions. Um, one was for the testing. Um, \[clears throat\] you were mentioning the the bezel test that you do, stage three.

**21:19** · Is that done via a like a a model and does it deploy, for example, multiple versions of Android and iOS as well to actually test like the new version of the app?

**21:37** · Um, that was that was one question. Uh, yeah. Um, I had another one, but anyway, yeah, that that was it.

**21:46** · Okay, thank you for that wonderful question. I'll just uh state the question for everyone again. So, we have a question that uh that that's basically asking um how do we exactly test it?

**21:56** · Every time is a new version of the app built deployed for Android and iOS uh where we want to test. Um, the answer is yes as well as no. So, in cases where you are able to repro an issue using a unit test, use that. Use the shortest and the simplest path possible, similar to how a developer would do. If you can repro the issue via a integration test or maybe a component test, use that.

**22:27** · And finally, if you are not able to repro an issue via code at all, you use the in um automation test. So, to give you an example, there was a particular issue that was occurring near an airport where the network's uh strength was quite low and the issue was only occurring when the network strength was low.

**22:50** · So, in this case, you can't really mock a network via code. It's really a question of the environment that the app is running in. So, we basically spawned uh a simulator and an emulator and that is a separate infrastructure at Uber. We have a separate team similar to if you know about browser stack or Kobiton, similar to that.

**23:12** · What they do is they create that environment. We already have all the data that we captured from the user logs. So, we know what was the network strength. We know what was the user battery. We know what the parameter flags or the feature flags the user was behind. We simply mock that information in that simulator or emulator and then we try to build the APK or the IPA file and upload it. And that goes in a iterative feedback loop and we keep doing that till it passes. However, we again like have guardrails for it.

**23:43** · There are fixed number of retries and then finally the fix is pushed to the developer. I hope that answers your question.

**23:54** · Any other questions?

**23:58** · Hey, hi. Can you please come forward?

**24:08** · Uh I have a question about the RCA tracking. So, you mentioned driving sub agents to check for the cards and I suppose there are like 10 or 20 sub agents running to get to the truth of the RCA. So, how do you control that? Do you So, you mentioned about the some agent tracing the sessions to identify the trace of user path and the other agent trying to check the which version this error is happening statistical analysis.

**24:40** · So, how many strategies have you defined and how many agents are running in parallel to go to go to the to track down the RCA?

**24:52** · Awesome. Thank you for that lovely question. I'll just take the question for everyone. The question was around we have these sub agents running in the RCA node. So, how do we keep a track of those agents? How we how do we see how many agents are running? And how do we control what they are doing?

**25:09** · Um now um we do have built-in tracing um in this agent. I didn't talk about the observability of the agent itself, even though I work in observability space. I didn't have enough time, but we do have built-in tracing um if you are aware, it's called a rise tracing, and that comes in really really handy. So, we have plugged it in with LangChain, as well as each of the LLM calls that we make. Number one, that helps us track not just sub agents, but every tool call that we make.

**25:37** · So, all the MCPs that we call, every bash command that the agent runs, everything an agent runs, we have visibility into that. Number one, um number two, how to control what each a sub agent itself does. Again, I would say the biggest contributor there is the number of max turns.

**25:58** · So, if the agent is able to perform a certain action in maybe, let's say, 20 or 30 turns, it's good. If it's taking more than that, then probably something is is wrong. Um and for example, there are specialized sub agents. Um I'll I'll just give you one more example. There is a sub agent that tries to figure out who which was the offending commit that led to this crash.

**26:21** · Now, that agent, while it can access all the Git history, uh do we want to do that? Probably not. So, we supply that agent sub agent with some additional information. For example, this was the clean version that I saw earlier, and this is the bad version. Something must have happened in between this. So, you look between this. Then, I want to look in maybe Rider module, maybe driver module, maybe Uber Eats module. So, let's just filter the history by that.

**26:47** · And you keep pruning and pruning and pruning. So, you also control the input to those sub agents.

**26:53** · Does that answer your question?

**26:55** · Oh, yes. Thank you. And that's one more. So, how many strategies do you do have you defined for each agent for one strategy? So, how many strategies have you defined? Or is it defined dynamically by the user agent?

**27:07** · Or is it deterministic?

**27:11** · Right.

**27:11** · Um so, how many strategies have we defined for sub agents? Essentially, it boils down to how many sub agents or unique sub agents do we and do we have at Uber, right?

**27:22** · Right. Um right now, the number of sub agents is pretty limited. I would say we have like um all in all 30 sub agents, 30 unique sub agents. But, we are building out something called um domain extensions, so that all the different domain owners can plug in their own sub agents here. And they have to manage their own knowledge base and own domain.

**27:46** · Because we are not the owners of domain, we are the providers of the harness. So, this number can uh by our projections is bound to shoot up to roughly 10,000 by the end of next half.
