---
title: "This Is The BEST AI Coding Editor"
author: "Mehul Mohan"
site: "YouTube"
source: "https://www.youtube.com/watch?v=Mq2C9fgN7Cw"
domain: "youtube.com"
language: "en"
description: "Make sure you leave a like and subscribe to the channel!Download Zed IDE here for free: https://zed.dev/Chapters00:00 Introduction01:00 Zed IDE First look01:..."
word_count: 5088
---

![](https://www.youtube.com/watch?v=Mq2C9fgN7Cw)

Make sure you leave a like and subscribe to the channel!Download Zed IDE here for free: https://zed.dev/Chapters00:00 Introduction01:00 Zed IDE First look01:...

## Transcript

### Introduction

**0:00** · In this video, I want to give you a complete breakdown of a Rust based extremely fast, performant, and snappy editor called Zed, how it works, how the AI inside it works, and how you can configure it to work with basically any AI provider. This is the best editor I have used in a long time, and I've been personally using them for at least a couple of weeks in my own projects, and let me show you some of my best tips and tricks that you can use inside Zed today. There's a lot to cover, so let's get into it.

**0:28** · All right, so let's take a look at Zed IDE, which says it's a minimal code editor crafted for speed and collaboration with humans and AI.

**0:36** · Now, I have been using Zed for some time now, and there are a lot of good things about Zed, which probably other editors should borrow. For example, performance, speed, snappiness, and an interesting way of organizing AI agents inside the editor and workspaces. So, there's a lot to discuss. Let's get into it and figure out everything about this editor as of today. So, once you download Zed and set it up for the first time, you will land up, which would look something like this, but not exactly.

### Zed IDE First look

**1:03** · So, let me show you what exactly this is, how do you get this view, and what's going on over here. So, first things first that you have to understand is when you press command shift P, this panel appears, which is sort of like your way to do anything and everything inside Zed, open settings menu, open extensions, all of that. Now, of course, you will find those things buried over here somewhere.

**1:24** · For example, if you want to open like extensions, themes, you can still do it from here, or you can remember the shortcuts, but what I ideally want to do is just remember a single thing and now type anything I want over here and just reach to that. So, that's exactly what I'm going to do here. I'm going to press command shift P, or this will be control shift P if you're on Windows, and I'm going to write extensions first of all. Right, so you see this Zed extensions over here. Open this, and you will see all the extensions that are available here.

### Setting up extensions

**1:52** · Now, let me show you what I have right now that makes Zed look like this. So, this comes down to a couple of things.

**1:58** · Let me show you in the installed section. So, this HTML and terminal are, you know, basically language servers in order for you to get help with whatever language you're working on. If you look for extensions like TypeScript or even Python, you're going to see that this is built into Zed.

**2:14** · So, some common things like Python, Rust, TypeScript, which are like popular languages, they are automatically available into Zed, and other things can be brought in with extensions. So, anyway, going back to the installed section, you're going to see that I have added material icons theme, which is an official theme from Zed itself, which is something I like because if you don't use this, let's say if I uninstall this, you're going to see that by default extensions look like this, right? These folders and these icons on the folders themselves look like this.

**2:40** · Now, even though like this is fine for somebody who has been using Zed from starting, but I'm somebody who's coming from VS Code, and I've used material icons a lot. So, I'm going to go ahead and install this back. And one thing I like about Zed is that everything is super fast. For example, when you're opening these files, you know, any of these files, they just open instantly, syntax highlighting happens instantly, and as you can see, I just installed a Git Ignore extension from the pop-up, and that would have also appeared over here, Git Firefly, directly. Right? You can also verify the amount of downloads an extension has.

**3:09** · I generally prefer if an extension has at least a few hundred thousand downloads, so that I'm not just downloading something arbitrary. But what you have to do, first things first, is install material icons. I also have this One Dark Pro extension, which is a port of VS Code One Dark Pro. If you know, I used to use this theme a lot on VS Code. So, this is something I like. I think I'm using One Dark Pro Max. I was actually seeing, you know, which extension is actually which theme is actually good. So, you can also like quickly see, navigate through what's going on. I think by default Ayu Dark is the one that is installed.

### Setting up custom theme

**3:41** · But if you want, if you like any other one as well.

**3:46** · I think One Dark Pro Max and Glass are sort of similar, but I think, yeah, right now I I One Dark Pro Max, which is like totally dark at this point, right?

**3:54** · Which is something I prefer. And then I have this comments highlighter as well, which is something I like because, you know, what this basically does is, let's say you have something like this, and now you try to do comments like, you know, here, for example, or to do, or, you know, if you're just doing a star, this is important. So, this sort of like highlights the comments that you're making into different colors, which is something just a personal preference, but this is something that I like. So, anyway, this is a little bit about the extension space, and you can look into all the extensions, as well.

**4:20** · If you go to not install, you're going to see that there is a list of extensions, Dockerfile, SQL, PHP, and you don't have to install manually everything right now.

### Zed extension auto-recommend

**4:30** · Z would also try to recommend you as you start working with those file systems. For example, let's say I create an example.php file over here. And this should be PHP.

**4:41** · See, the moment I added example.php, I got this pop-up, "Do you want to install the recommended PHP extension?" And I'm going to install this, and yes, the moment I do that, you're going to see that now Z is properly highlighting syntax highlighting PHP extensions. The next thing which is important is if you press command shift P again, and if we go to settings over here, and if you open the settings file, there are two files, basically. First is the settings.json, and second is the settings UI directly, which you see over here as a pop-over sort of, right?

### Zed Settings

**5:13** · This is more or less the same as in settings.json, but with some sane defaults available to you. So, you're going to see that the themes that we just installed, including the you know, the icon theme, as well as the editor theme, that's available over here. And if you want to increase, for example, UI font size, you can do it from here. For example, if I want to increase the sidebar size, and so on. Maybe I should for this for the video, so at least it's clear to you guys.

**5:39** · But generally, like, you know, 16 is good enough for me when I'm doing day-to-day work. But for the sake of this tutorial, I can just make it 20.

**5:46** · You'll see there are a bunch of more options, and you'll see that this is actually LSP power, right? So, you have a language server provider, which will suggest you what sort of options are here, so that you can also use it directly if you want to customize this, or if you want to just edit it directly, you can just open the settings over here and edit it over here. One thing you will find the moment you open Zed is that they sort of make the sidebar on the right, and they make their AI agent dock on the left and over here. So, you're going to see something like this as a view, you know, so I was just playing around with this.

### Customising Zed Layout

**6:19** · I'll just archive these threads for now.

**6:21** · But, you're going to see your view is something like this, right? Now, I personally I'm not a huge fan of file sidebar on the right. This is a completely a preference thing, but I've used this for my whole life on the left side, and I know there are advantages and disadvantages. People say, you know, when you're closing your sidebar, it sort of does not disrupt your coding, but I mean, who is coding now manually?

**6:44** · Most of us are actually just doing code reviews, and AI agents are coding, so I would still want this to be my view. So, you can just right click on any of them, click on this dock left.

**6:55** · I'm going to right click on them, click on this dock right, and I'm going to bring this sidebar on the right as well.

**7:00** · And I'm going to explain you what this AI agent and all this stuff is.

**7:04** · But, let's just get up with basics first. When you log in for the first time, you'll also see the ability to sign in inside Zed. Now, you can do that to access some of the features of Zed, but you can also completely operate Zed signed out. You don't have to create an account, you don't have to sign in. All right, so now, one thing which I forgot to show you is that inside the settings, if you see, I also have this base key map as VS Code, right? Because I'm coming from VS Code.

**7:30** · This could be anything else of your choice over here. If you If you use like Atom or TextMate or JetBrains or any of them, you can just choose that.

**7:39** · What this basically means is that create the same sort of shortcuts. For example, I'm super used to opening the terminal with control and the tilde symbol, which is the key on the left of one.

**7:49** · So, the same shortcut works here as well and a bunch of more shortcuts as well.

**7:53** · So, you see over here, this is something that you can use to open terminal and operate over here. So, you can even launch your AI agents here, but I'll show you a better way of working with the AI agents inside Zed. So, let's hold on for a second there and close this.

### AI Agent Panel

**8:08** · And now we're going to come to the important part, which is how do you work with AI in Zed?

**8:14** · And this is probably the smoothest AI experience that I've found across all the IDEs. To be honest, better than VS Code, Cursor, and even a bunch of other plugins that you can add in VS Code. So, let me show you what I mean by that. So, you're going to see inside Zed, you will have these icons, agent panel, and then threads sidebar. These two are important icons, right? When you're working with agents. And this could be on the left side if you have docked it on the left, which is the default behavior. But like I showed you, I just changed that to the right. So, you can bring them on the right.

**8:43** · Now, let me explain you what this agent panel exactly is. So, when you open this for the first time, you're going to see that you have an option here of Zed agent.

**8:51** · And if you open it, you will have Zed agent, terminal, maybe a couple of external agents as well. I've just added Claude and Codex for now.

**8:58** · But you can click on this plus add more agents, and you will land into an ACP registry. So, you can install any one of them from a huge list of these ACPs which are available on Zed. So, it's not just Claude or Codex. That is just the ones that I have a subscription active subscription for right now. But you can even have Kilo. You can have Grok Build.

### ACP Registry

**9:19** · You can have Gemini. You can have Factory Droid. You can have any of these AI agents, even Cursor. Right? So, Cursor also has its own coding agent.

**9:27** · First of all, it has access to open code. For example, if you're using any of the free models or any of the models which, you know, your AI harness only open code supports, you can just click a button and you can bring it immediately inside Zed.

**9:40** · So, that means you get the best of IDE experience while having an AI system which is spread across multiple harnesses.

**9:47** · So, you can have open code over here and you're going to get the whole experience over here. So, let me show you how this works. So, on open code I have open router. Let's say I select Kimi K2.7 code, which is the one that I recently created a video on as well. In the build mode for now and I just sent it hello.

**10:02** · Right, so I'm going to allow this for now and you can see I got the thinking process and I got the response. This is now running through open code, which is apparently using my open router credentials.

**10:13** · And the harness is also open code, but I am getting the whole experience inside Zed, which is my primary IDE. Super cool. Now, what's even cooler is look at this. The moment you click on this thread sidebar, you will actually see the ability to create multiple agent threads. This is what Zed calls it, which is agent thread. And these agent threads are super interesting because they work in the following way.

### AI Threads

**10:36** · First thing is that you can have the Zed agent itself, which is their native integration, which comes with their subscription, which comes with a bunch of models that you can select, you know, you can configure over here. Like you can use Zed models directly, you can start a 14-day trial and you know, just use the models which Zed is directly providing.

**10:53** · But an amazing thing about Zed IDE is that they are not vendor locking you at all for AI because look at this. They basically give you every single model provider access that you possibly can imagine, including ChatGPT subscription, including OpenAI, Ollama. You know, if you want to run local models, you can even do that, which is pretty cool. Right, so they have external agents, they have LLM providers and then they have their own internal Zed thing, right? So, how Zed organizes AI is in the following ways.

### Working with AI

**11:22** · First is of course ACP, which is agent client protocol, which we have just seen.

**11:26** · That basically means that you get the ability to use Claude, open code, code X, you know, kilo code, all these sort of AI harnesses directly inside Zed.

**11:40** · The second way is through an LLM key.

**11:44** · So, if you give Zed your open router key, let's say, or you give it your Anthropic key, or you know, your code X key or whatever, then it can use its own harness combined with the LLM key that you have provided and just provide you with the AI.

**12:01** · And third, and interestingly, what is actually super important for you to use Anthropic-like models is the terminal agents. Now, this is super interesting because what this means is that you are effectively just starting a terminal and you're starting Claude or code X or, you know, bunch of these agents like Pi, for example, or, you know, amp, for example, and you start them inside terminals and they still somewhat get the same sort of support of features that you will see inside Zed.

**12:31** · Let me show you how this terminal agents work and ACPN all of these agents work one by one.

**12:38** · So, I'm going to go back and I'm going to select a new thread over here and I'm going to select a terminal agent, right?

**12:44** · And I'm going to start Claude over here.

**12:47** · Let's say if I send it hello over here and I start a new agent, but I start a Claude agent, you're going to see that Zed indeed provides me an experience like of, you know, the one that I that we just saw with open code, but this thing over here is routing Claude's traffic over ACP instead of terminal agent, right? And we know that from June 15th onwards, Claude's traffic over ACP contributes to your $100 or whatever plan limit that is included inside as credits in your plan, right?

**13:16** · So, if you have a Claude max plan, you are not getting the subscription subsidy inside ACP usage. You're only getting that when you're using terminal agents. So, it's super important that if you have a Claude subscription, you preferably start terminal threads and not the agent threads that I just showed you. And the interesting thing about this is that you can mix and match all of them.

**13:42** · Imagine that you can literally start a thread on one thread on code X CLI, which would use ACB and again your subscription.

**13:50** · So, it should not be an issue. You can parallelly start another terminal thread, which will you know, obviously require you to install and launch Claude manually. But, the interesting thing is that Claude is linked with whatever you're doing over here as well. For example, I can ask it, "Can you Can you tell me where the ENV file is?"

**14:10** · Let's say if I ask Claude this. You're going to see first of all, it automatically updates the title so that it's easier to relocate. You can also update this manually if you want. And second of all, you see that these links over here, Z is able to parse them and if you click on them, they'll directly open inside your workspace. So, there is no additional software or thing that you need. So, there are a few integrations that Z's team is doing all the time with the terminal agents as well.

**14:32** · But, one thing that I actually liked a lot about the ACB agents, the agents which is bringing which it is bringing like this or even the Z's native agents, is that for example, let's say I give it a task, "Can you Let me zoom in a little so that you guys can see at least what's going on. Can you replace Gatsby in this project with Prisma?"

### Follow AI cursor

**14:54** · Right? Let's say I give this task to GPT 5.5, hit enter. You can click on this, this follow code X ACB, right? So, this is a pretty cool feature that I found out. Which now, what you'll be able to see is that as code X is working inside your code base, like locating files, making changes, updating stuff, it will follow code X cursor in a way, right?

**15:15** · So, it's not doing a lot of things right now, but once it starts updating the code, you'll actually be able to see in real time what code X is doing inside your code base. So, it's asking me for some permission. I don't want to do that because I don't want to do this task in the first place. I'll just stop it for now.

**15:29** · But, I was just showing you an example of like how powerful this is. Now, for example, this follow Codex ACP or follow, you know, Cloud Code ACP, whatever. This would not be available if you have a terminal agent because obviously like it's with terminals, the context is sort of like hidden inside the terminal itself, like what the agent is doing. But, it's the same idea, right?

**15:47** · So, the idea is that if you have let's the Codex subscription and a Cloud Code subscription, like a $20 Cloud Code, $20 Codex, you can spin up these bunch of terminal threads directly from here, while at the same time you can use Codex CLI or maybe like add your ChatGPT subscription in order to get access to the interesting features and things that Zed has to offer. Now, another super interesting thing that Zed offers is, you know, once you have done with the Git, once your agent has done with the changes, you can just do a Git branch diff, right?

### Working with Git

**16:17** · And the moment you do that, let me close this.

**16:21** · You're going to see that you can basically review the changes like this.

**16:25** · And you can ask the AI agent to do the review as well on the side.

**16:29** · I'm just going to stop it for now. But, this is like super handy, and this is something that is literally your only job sort of left if you're using frontier models to make sure that AI is not shipping any any sort of rogue code or bad practice which you don't want in the production. All right, this brings us to our next feature that is again one of my favorite features, which is the ability to spin up work trees from the UI itself super quick. So, let's say I'm evaluating three options, right?

### Working with worktrees

**16:57** · I'm evaluating Kysely for SQL for query builder, I'm evaluating Prisma, and I'm evaluating raw SQL, right? What I can do is I can click on this main over here. So, this is my main work tree. This is the name of the branch where I am on.

**17:13** · So, I can click on this new work tree, and look at this. Within a second, it just gave me a new work tree, did not ask me like what what what should be the name, did not ask me what should be the path. But if you actually look inside terminal, you're going to see that it creates sort of like a work trees folder inside your root directory where you're supposedly working.

**17:31** · And it'll just clone the project instantly there.

**17:34** · Now the advantage here, why you would want to use work trees, for example, let's say I start a new thread in fresh bureau, which is this new workspace, this work tree that it has created, right?

**17:47** · What I'm going to do is I'm going to create, um, let's say a new terminal agent for now.

**17:54** · We're going to use cloud only. Let's say I ask it, "Can you shift from Kaisley to Prisma, right? In one."

**18:03** · Let's say by this time I create I go back to my main work tree and the agent is working in the background, right? So this is still happening over here. You don't have to worry about this. I can go back to my work tree, which was the main one. I'll create a new work tree based on master. Over here, I will start another agent another agent thread rather inside this dusky arbor, which is the new workspace name again. I'm going to start this. I'm going to say, "Can you shift Kaisley to, let's say, drizzle, you know?

**18:34** · And again, like I can just hop between the workspaces as I need and I can create another one.

**18:41** · And I can launch another thread and let's say this time I'm feeling a little lucky. So instead of like terminal thread, I'll just go with code xc cli and I'll ask it, "Can you shift this to raw SQL instead of Kaisley? Let's let it just instead of Kaisley. So I just have a firewall installed, which you see, you know, every now and then, inside my system, which sort of like blocks if there is any unknown request going up.

**19:06** · But anyway, so you can see now I have these three sort of like terminal agents and these these are like empty so I can just probably close them.

**19:18** · So I have this one in running in vivid corner.

**19:23** · Vivid corner which is running inside code X. This one is running inside cloud code and this one is also running inside cloud code and the code X one I can also like follow along like what it's good doing if I want to.

**19:36** · Right? So this is super cool because see I am actually working on the same code base checked out across multiple branches and all of this is happening with a click of a button. So this work tree generally the feedback that I have seen is that people say it's super hard to figure out like what a work tree is or you know how do you work with in the first place and you know it's too cumbersome. This is something that I also used to say but this is a breeze if you're working with a system like said which can just spin up a work tree instantly.

**20:05** · Now you see like you know we are getting these errors because PM PM install is not run in this directory uh because it's a work tree so it did not bring in the getting node files. So you can do that or your agent can do that as it's discovering this.

**20:22** · But the idea is that this is super interesting and super easy way of just working with work trees. Once you're done you can also just trash out these work trees if you want or you can just manually delete it as well and it'll automatically synchronize right? And you can do the same thing with branches over here as well if you don't want to use CLI you can just switch branches or stash your changes over here and you know restore them pop them again uh using the UI that is there. Once you're done with these AI threads I also suggest you to just archive them.

### Cleaning worktrees

**20:50** · So that's to just keep your space a little cleaner. But yeah this is a super fun way and interesting way of building software right? While retaining all the benefits that you get inside an IDE and using an agentic development system that you can use to spin up multiple models and harnesses and providers. Whatever you want to do, it's absolutely possible in Zed's configuration. And you know, generally speaking, the best thing about this whole thing is that the IDE itself is super fast. You will not feel that it's slowing you down, the operations are slow.

### Final thoughts

**21:21** · You can just click around, you can just navigate super quickly across the code base.

**21:27** · Everything is just super snappy and super fast. You have sort of like Git blames built inside the editor itself.

**21:33** · So, this comes by default. I did not install any plugin. You're going to see that this just comes by default. So, yeah, all in all, what I just showed you are a bunch of popular and important features, but you feel press this command shift P, you're going to see that there are a bunch of more things that you can explore, probably a lot more than what I can cover in this video.

**21:49** · But, this AI tutorial and you know, just setting up your editor properly like the theme, icons, extensions is something that I feel is a little bit important so that you as a developer get into the feel and these AI agents and threads and parallel agents that you're able to run and work trees that you're able to fork with a click of a button and manage Git setup, this is super convenient and super helpful. In fact, once you sign in into Zed that I just showed you the first time, you also get this ability to collab with your teammates in real time.

**22:23** · So, you can just do sort of like calls using voice and edit the code base together using Zed's infrastructure, which is what requires, you know, you to create a free account. And you know, you can just create a channel over here and ask people to join, which I'll not do for now. But, yeah, a bunch of interesting things including a built-in debugger as well. If you want to set breakpoints, for example, and if you're running like Node, for example, with a debugger on, you can just debug inside Zed itself and do programming like old times. So, instead of your agent debugging it for you, you can do it yourself as well.

**22:53** · So, yeah, that's pretty much it for this video. I hoped you liked and learned more about how you can configure Zed properly and use this in the best possible way. Once again, thanks to Zed for sponsoring this part of the video. It's an amazing tool and something that I've been using for the last 2 weeks, literally as my daily driver for doing code reviews.

**23:14** · And building software myself, do check out Zed. All the links are in the description and I'm going to see you in the next video very soon.
