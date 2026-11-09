---
title: "AI Agents Still Can't Maintain Your Codebase"
author: "Perfology"
site: "YouTube"
published: 2026-10-31T06:30:02-07:00
source: "https://www.youtube.com/watch?v=ntO2eQ2iu6o"
domain: "youtube.com"
language: "en"
description: "AI coding agents can write thousands of lines of code. But can they maintain a software codebase without destroying its architecture?Dex Horthy, CEO of Human..."
word_count: 3846
---

![](https://www.youtube.com/watch?v=ntO2eQ2iu6o)

## Transcript

**0:00** · Uh, it's funny, this is actually uh, this talk was going to have a much longer title, uh, but then I found out it was 10 minutes and not 25, so uh, yes. State of the software factory. What's going on?

**0:10** · What's happening?

**0:12** · Uh, raise your hand if you're writing 100% of your code with AI.

**0:16** · Okay, good. Some of you got the memo, the rest of you, you know, you'll get there. Leave your hand up if you're trying pretty hard to read all of that code.

**0:25** · Maybe not every single line, but you're trying. Okay, good.

**0:28** · Um, all right, my least favorite part.

**0:30** · Engine did a good job. Uh, I yap about coding agents on YouTube a lot. I think we have over like a million views, probably 1.5 now. Uh, I'll post a link at the end. You don't have to screenshot this. I'll put it up for longer later, but we have a list of everything we've ever written or said about coding agents and agentic AI and 12-factor agents and context engineering and all that stuff. Uh, I am the CEO and co-founder of a company called Human Layer. We build a multi multi-agent coding sorry, we build a multiplayer coding agent workspace. Uh, and our goal is to help everyone be awesome at agentic coding and make it accessible to everybody.

**0:59** · Uh, we are building building blocks for software factory builders.

**1:04** · Uh, and we're really focused on an area that I think is underserved is hard problems in complex code bases. You have hundreds of engineers, you have hundreds of repos. A lot of out-of-the-box coding systems, you have to do a lot of stuff to actually get them working in that environment. Um, and I think like anyone can really build it's it's not trivial, but you can build a ticket to PR or slack message to PR pipeline for the small stuff. Our our focus is really like, how do we as engineers and teams collaborate meaningfully on the big stuff? Cuz we're all trying to get this AI coding thing working.

**1:35** · Uh, and there's a ton of hype and noise and FOMO on the internet that we have to cut through. There was this whole loops thing last summer of like just build loops, don't even prompt anymore.

**1:45** · Uh, at the same time there was a report that came out in May that you know, since uh, January when we all picked up Opus 4.5 and decided this stuff was good enough, uh, code review uh, quality is way down. A lot of PRs just skipping review, longer comments, more comments, uh incidents per PR is way up. Bugs for developers way up. Um a lot of people will say it's Do you think this is a skill issue? Raise your hand if you think that's a skill issue.

**2:11** · Okay, we've got a couple. Nice. Uh I think the data says otherwise, that data and more data. Um I want to do We talk about software factory a lot. I want to do like a quick little history here. Uh cuz software factory is not an AI thing.

**2:22** · This has been around since 1968, uh the same the same year that we invented the word software engineering.

**2:27** · Um I'm going to zoom to 2022 just to show you that most of what you see about software factories in AI is actually kind of like the same thing we've been doing as engineers for decades.

**2:38** · Um so, your standard circa 2022 software factory.

**2:42** · You've got a team. You've got some engineers. You probably got some product managers. You have GMs or a CEO or someone who's kind of like driving the vision.

**2:50** · And you come up with stuff to build, and you put it in a tracker, whether that's linear or Jira or beads or whatever it is.

**2:56** · Uh And then someone pulls things off the list, and they go build the thing. And they maybe do some automated testing and unit tests and integration testing. They might pull it up in a browser or poke it with curl or whatever the manual testing steps are.

**3:07** · Make a pull request. And then we run this battery of checks, you know, the the the top-of-the-line software factory was doing, you know, hundreds of CI checks and security scans and all of this. Maybe a human pulls it down and tests it. Probably a human reviews the code before it goes in.

**3:20** · If anything is wrong, we loop it back to the builder. If it's ready to go, we send it to prod. We have some fancy rollouts and feature flags and canary systems to like safely get it out to all our users. At which point they use it, and they do what users love to do. Uh they file feature requests. Uh they complain. They tell us what's broken.

**3:36** · And then that goes back to the team, back onto the queue. Uh at a certain point we decide, you know what would be great?

**3:42** · What if we had a monitoring system that could wake up our engineers at 3:00 in the morning when something breaks?

**3:47** · Uh the getting woken up part sucks if you're the person, but technically it is nice to be able to fix your site cuz it's down at 3:00 in the morning.

**3:54** · Um but this is our software factory.

**3:56** · Um And then we get to the agentic software factory. Not much changes here.

**4:00** · We take this thing we had before.

**4:02** · Um and then we do this hype cycle on it and everyone has one and yes, yeah, I know you did Who has a little ticket to PR agent in their company that they're super proud of?

**4:12** · Um no. You should get one. They're cool.

**4:14** · Everyone Everyone has one. You're falling behind.

**4:17** · Uh no.

**4:19** · Uh Okay, so you take this thing and you do The person building the thing becomes agent builds the thing.

**4:25** · Um so instead of a human going and doing the code, the agent does the thing. And this part now takes minutes or hours, but this part over here still takes hours or days.

**4:33** · Uh and so we bring in more agentic stuff. We have, you know, agentic code review, agentic regression testing, and that makes the review part faster. You catch all the small stuff, uh but it may still be the bottleneck.

**4:43** · Um which brings us to uh this funny idea called the Lights Out Software Factory, uh where we just say, "You know what?

**4:51** · I don't I'm tired of reviewing code.

**4:52** · This too much. I'm burned out. Uh all the senior engineers hate it. What if we just didn't review the code anymore?

**4:57** · What if we just let it go in?"

**4:59** · Uh and like theoretically, if you invest into all this other stuff, you could like probably get uh uh close to a place where where this would actually work.

**5:08** · Um there's some challenges though. I think my core thesis here, and like I'll share some data on this, but like unattended models will not improve or maintain your code base quality over time. And whenever seen like slop in a pull request that someone tried to merge, someone tried to get back, yeah.

**5:23** · A lot of slop. Um models got really, really good in 2026 at like solving problems and doing interesting things. I don't think they got very good at improving code base quality. You could tell them to go improve it, but then you have to know what to tell them to do, and that means you have to understand the code base, which means it's not unattended. You're paying attention.

**5:39** · Um there's at least one good benchmark that proves this, um but you probably have this vibe, and if you go catch this talk from June, I gave sort of a intuition-based explanation of like how we do RL and how how the benchmarks are shaped that might incentivize sort of cheating. Uh just trying to get the test to pass without really like rewarding good architecture.

**6:00** · Um because the cost of bad architecture is measured measured in months and years. And to do reinforcement learning, you need an oracle. You need a verifier.

**6:06** · You need something to say, "Is this code maintainable or not?" And maintainability has no fast oracle.

**6:11** · There's no way to know We don't find out that the code was ugly until 2 months later when someone again is paged at 3:00 in the morning trying to figure out how this made it into the codebase.

**6:20** · Um which brings me to a really cool benchmark called Slop Code Bench, um published out of a lab in the University of Wisconsin, uh in the US. And uh they basically, instead of telling the model the whole problem to solve up front, it gives the model the challenges. It discloses like parts of the challenge in bits and makes it write the code and then do another feature and then do another feature, which maps much more closely to how everyone in this room builds software.

**6:44** · You don't design the whole thing up front, ship it, and never never touch it again. You're constantly iterating and evolving and adding things. Uh when they launched this, GPT-5.5 was the best model on the market. It got a 14.8%.

**6:56** · So, when you see terminal bench scores and everyone's getting 95% of this saying coding is solved, there is a small lab in the US came up with a university came up with a benchmark that is full very much unsaturated. Um there's a post I can share that is uh a bunch of data. You can go check it out.

**7:12** · Um the labs actually admitted this. Um uh Anthropic did a postmortem. They're like, "Yeah, we had a security issue uh cuz we had a bunch of uh like messy code that accumulated over time." To which the benchmark creator, of course, pointed out that there was a benchmark that would prove that models create sloppy code over time. Uh and even Astra and Fable, you know, we in I remember in the Opus 4 days, uh or maybe even Sonic 3.5, you would write the code and it'd be a little sloppy and you would say, "Uh you know what? The code is slop, but that'll be GPT-7's problem."

**7:44** · Folks, we're at GPT-6, and I don't think we've gotten that much better at this.

**7:48** · Um I think there's a lot of reports that like they're getting better at random things like video game slop and and computer use and like uh blender demos or whatever, but that the coding workflows, there's like we're people are online begging like, "Please, someone produce RL tasks about a abstraction and centralization cuz these models still can't do it.

**8:09** · Do you remember this guy?

**8:11** · Steve, what is it What is Steve famous for?

**8:15** · Gas town, uh which apparently is only good for building other gas towns.

**8:19** · Uh but only did he build gas town, he went around the internet telling people for a year that if you're still trying to read the code, you are going to fall behind. You're not going to make it.

**8:29** · Uh and here he is it last week. Um yeah, if you don't pay attention to the models, they're going to write slop code. They're going to build something so complex that they themselves can't debug it. Uh so even Steve's come around.

**8:40** · Um and here's the numbers, by the way, on Astra and uh Sol X high. Astra is one percentage point or 1.5 percentage points higher than GPT 5.5. So we are getting better at writing maintainable code or being able to maintain the code we wrote, but not as fast as some people would have you have you believe.

**8:57** · Um so if unattended model code gets worse over time, then for now we should probably read the code, which leads us to what I like to call uh well, they told me I couldn't call it this, but 12-factor factories.

**9:08** · Uh I will come up with a better title than that.

**9:11** · Uh but we got 12-ish great practices for software factories.

**9:15** · Um number one is plan before you build.

**9:17** · Uh 20 minutes to 30 minutes up front can save you hours during review.

**9:21** · Um so we take our software factory. This is a team This is the thing teams figured out before AI. It's if it takes hours or days to build something, and if it takes hours or days to review something, then we better get together as a team and talk about it before we start building, and talk about the architecture, and do what's some kind of sprint planning or refinement or whatever it is, talk to people on the team, and figure it out in the hopes in the hopes that we can carve off some time at review time, reduce the chance we have to rework all this stuff.

**9:51** · Um don't overplan, though. You can easily put too much time planning. I think of this is like if you YOLO a two-sentence prompt, there's probably a 50% chance you're going to be doing more prompting later. You're going to have to like rework some stuff. If you handwrite a detailed spec for 10 for 5 hours, maybe there's only a 10% chance that you have You you do a little bit of polish at the end.

**10:10** · Uh or you can go write all the code by hand for 20 hours Uh uh and then there's a 0% chance well there's a 0% chance you have to rework it because of something the agent did.

**10:18** · Uh you might still have to fix stuff. Uh this is why we had code review before.

**10:22** · Uh and I think of this in terms of expected pain, right? How how likely will you have to change something and how painful is that change? I'm not arguing with a with with my coding agent in the in the middle of building. Uh sorry, in the middle of planning uh about what color the button's going to be cuz I know I can go change that later. That's not going to be hard. As you got to find your way up and down this curve depending on the task and depending on the code base and depending on the problem you're trying to solve, but planning is about eliminating expected pain.

**10:48** · Um you should align visually. Um we published a skill called Show Me. Uh there's a bunch of examples of like this is built into Human Layer, but you can go get the open source as well.

**10:56** · Uh find ways to let the model give you information in a way that doesn't make you have to read like walls and walls of like agentic paragraphs and prose. Uh talk about how you're going to break down your stack PR's and what how what order you're going to make the changes in.

**11:10** · Uh this is open source, you can go get it today. It's probably up to like 20k installs at this point.

**11:14** · Um help agents test their work. This one's easy. Give them a browser, let them run the app, let them use curl, let them record videos, whatever it is, like give them back pressure.

**11:21** · Um if you are anyone here writing in TypeScript?

**11:24** · Yeah, okay, cool. Uh go get this repo right now. This is Dylan Mulroy. There's about 100 anti-slop rules. He literally just like went through and cataloged every anti-pattern that agents put in the TypeScript code base and built excellent rules for them.

**11:38** · Um there's also a bunch of stuff in the Slop Code Bench paper that you can steal. Um you should feed user feedback into the factory instead of like reading support tickets and then turning them into Jira tickets, you should just uh read the support ticket and the PR that the agent made for you. For incidents, when you get paged at 3:00 in the morning, like have have the pager alert come with the PR the agent thinks will fix it.

**11:58** · Even if you can only merge 50% of those, that's a huge difference in your throughput and you know, you wake up, you merge the PR, you go back to bed.

**12:04** · Um let models experiment. Uh give them feature flagging tooling so that they can experiment and say, "Hey, here's three versions of this feature." Uh models of course they're not good at UI.

**12:13** · They I mean they can make beautiful UIs, but they can't really see them in the way that you and I see them. But if you want to test UIs, give three UIs to all of your users and figure out which one people can figure out. This is how you give people back your models back pressure for UI.

**12:26** · Um I think loops are basically a combination of forward pressure and back pressure. This idea of loops was a little mystical. I think if you disentangle it into like how do you kick off new work? What triggers cause new work to happen? And then how do you give the agent like feedback while it's working so it can hill climb an outcome without having to go to a human? That's like the core of loops, I think. It's how do you get more stuff to start whether it's schedules or automations or web hooks.

**12:51** · And then you should compound over time.

**12:52** · I think it's only nine. It's not even close to 12. But anyways, compound over time, learn from past sessions, go read what your engineer go analyze the sessions of your team, figure out what they're struggling with, figure out how to get that into your skills or your memory or whatever it is.

**13:05** · Um I think this has some interesting implications for tooling. I think the new software forge. You know, has anyone Does anyone remember the days when we used to send get patches around on like email lists?

**13:16** · I think I think Linus still does this to build the Linux kernel, uh but almost everybody now uses GitHub. Uh and so we have a centralized the the protocol is is decentralized, but we have a centralized place to do this.

**13:25** · Um and now there's other parts of the SDLC that I think are first class. So you have session traces, you have architecture docs, the the AI native version of this get mailing list thing is like I'm talking to my agent and I copy something out and I paste it into slack or teams. My my teammate reads it, they paste it into their agent, they get an answer, they paste it back to me. I paste that into my agent. Hopefully we only have to do one round of that.

**13:48** · Uh but this is the idea of like we need a place where sessions and plans and prompts and all this stuff kind of lives in in a centralized sort of system of record. This is kind of my vision. I think this ends up I'm about to speed up a little bit, but uh \[sighs\] I know I know it's already really fast.

**14:05** · Uh we'll I guess it only got a bunch of resources. We go deeper on this in some days like an hour long deep dive on just this slide. Angie says take my time.

**14:13** · Uh Um so you have the compute layer, which you can buy or build. Um where, you know, you can Oh, we have some spare pods in our Kubernetes cluster.

**14:23** · And uh and and we're just going to run agents there, or you can go buy Daytona or E2B or whatever it is. Um you have your dev environment. How do you get your language set up, your runtime, your preview environments? Do I need to connect to internal services in our VPC in order to even run a dev environment so an agent can test its work? You have, of course, the harness, which you can buy or build. There's a ton of options here.

**14:43** · Um and then there's a control plane uh where you like, how do I dispatch work?

**14:47** · How do I collaborate on sessions and plans? Each of these layers you can buy or build. Um Human Layer we're kind of working very closely in this control plane. We're going to open source We also have a custom harness that we really like. We're going to open source it in the next couple weeks. Um Uh basically, Human Layer is a shared collaborative workspace. I can see everything my team is working on. I can jump into a teammate session. I can invite people to code prompt to my session. Not even in the cloud, like it can be running on my laptop and I can pull somebody into my cloud code session. It's got sort of a Google Docs notion-shaped uh artifact collaboration built into the session view.

**15:19** · Uh and then every agent running anywhere, as it's writing code, the diffs are streaming to the cloud. So, we can do code review uh without waiting for pull request. And it's been architected like this. We've been building this for a year, basically, uh mostly in secret uh so that we can do these really interesting building blocks stuff. This cool architecture uh Again, come find me in the hallway. I'll I'll we can go deeper on this. Um come say hi. I'm Dex. Uh There is a list uh humanlayer.dev/resources for everything.

**15:45** · It's kind of chronological uh and broken into eras of like, hey, we learned a new thing and we kind of like revised our thinking on some stuff. Um so, thank you. If you want to meet this week, shoot me an email. Uh go check out the resources. Thank you all so much for your energy.

**16:02** · \[applause\]
