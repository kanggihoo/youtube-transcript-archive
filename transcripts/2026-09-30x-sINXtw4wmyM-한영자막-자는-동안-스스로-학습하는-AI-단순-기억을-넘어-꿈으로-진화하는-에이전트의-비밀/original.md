---
title: "[한영자막] 자는 동안 스스로 학습하는 AI: 단순 기억을 넘어 꿈으로 진화하는 에이전트의 비밀"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=sINXtw4wmyM"
domain: "youtube.com"
language: "en"
description: "Anthropic 응용 AI 팀의 Lamis Mukta가 모델의 지능을 실제 프로덕션 제품으로 확장하기 위한 핵심 전략인 '컨텍스트 엔지니어링'과 '드리밍(Dreaming)' 패러다임을 공유합니다.세션 내 실시간 메모리 관리의 한계를 넘어, 밤새 비동기로 에이전트의 실패 패턴을 분..."
word_count: 5694
---

![](https://www.youtube.com/watch?v=sINXtw4wmyM)

Anthropic 응용 AI 팀의 Lamis Mukta가 모델의 지능을 실제 프로덕션 제품으로 확장하기 위한 핵심 전략인 '컨텍스트 엔지니어링'과 '드리밍(Dreaming)' 패러다임을 공유합니다.세션 내 실시간 메모리 관리의 한계를 넘어, 밤새 비동기로 에이전트의 실패 패턴을 분...

## Transcript

**0:00** · Hey everyone. Um, great to see you all today and hope you're all having a wonderful day so far here at AI DevCon.

**0:06** · I certainly am. Um, I hope that your context windows are not too full and you have a bit of space for a little bit more information about context. Um, by way of introduction, my name is Lamis.

**0:18** · I'm a member of technical staff at Anthropic. I work on our applied AI team and this is a team which sits between research, product and go to market. So we do a mixture of working on internal projects as well as directly with customers who are building agents at the frontier.

**0:35** · Me specifically, I work with startups and founders, many of whom I'm sure are in this room today. And I think I have the best seat in the house because these are the users that are constantly pushing us right up against the boundary of what is possible with models and products today. And as such, uh, we just get to like ride the exponential together.

**0:57** · One thing that constantly comes up uh as I'm sure you're all aware is what it really takes to take the raw model intelligence that we have today and translate that into durable scalable useful products. And one of the main levers that we have in order to do this is context engineering which will be the focus of my talk today.

**1:21** · So on this journey I want to quickly do a recap of where context engineering has gone in the past year. It's a space that's completely blown up and through that we'll kind of distill the primitives that have proven to be really useful, some stuff that has been a little bit less useful.

**1:38** · Secondly, we'll talk about what the state-of-the-art is for memory management today.

**1:43** · And thirdly, and and in particular with that, we'll talk about not just what nice theoretical principles are, but what it takes to actually build these systems in production. And then finally, we'll talk about where this will go on the path to continual learning. And in particular, touching on a paradigm called dreaming.

**2:03** · So, we've said this before and models, we release new models all the time. They are more and more intelligent. But when it comes to actually deploying these models in your agents, in your environments, in your organization, the intelligence alone is not going to compound because they need this context that helps them perform the specific tasks that you need them to.

**2:24** · In particular, a lot of this context is often kind of orthogonal to the model intelligence, right? like the newest model, we've just released one, um isn't going to necess isn't going to out of the box know exactly what it takes to succeed in your organization and with the tasks that you want them to. And so it's a really great investment to work on the context engineering part because this uh over time has the effect of multiplying the intelligence even as models get smarter. So I'm sure you'll all be familiar with these problems.

**2:55** · It's like agents not knowing their way around a codebase or knowing enough about your own user preferences. Um, and then additionally like you don't have the effect where agents are better at the task the next time they perform it.

**3:08** · So they they might not learn from their mistakes. Um, and as such you don't have this uh continual learning effect. So just to recap uh where we've got so far on this journey of context engineering at Anthropic, we like to say do the simple thing that works. And this is a timeline that's only really spanned the past year. And where we started was with these Claude MD files that we launched with Claude code.

**3:36** · And what we learned from this was that it was kind of unreasonably effective. like this markdown file that just gives the agent a couple of instructions about maybe your way around the codebase, the organization, um your own user preferences that injected into the beginning of the model's context at the beginning of a session was so good at steering it towards the things that mattered and helping it navigate and align its actions towards your preferences.

**4:02** · However, we also learned a couple of things about what doesn't work here. So when we're injecting this at the beginning at the beginning of the session into context, we obviously start to run into problems where you get problems with context bloat like what happens when this file with very important preferences gets very very long. Um how do I manage that over time?

**4:23** · And so we went back to the drawing board and thought about like ways that we could improve this separately. Though what was true was that having just a very simple markdown file which is human readable which your agent can write to which you can write to is really really effective.

**4:39** · So a second avenue that we investigated was these memory tools and this is interesting because it leans into this idea of okay what happens if we let agents autonomously manage their own memory systems. So we let them decide when they read, when they write, um, and when they update memories. And this is all happening in band, which means that it's within the context of a session.

**5:03** · So during a session, a agent is thinking about like what might be interesting to pull from memory, what might be interesting to write to memory.

**5:13** · So autonomy proved to work really well in this case. Um, and over time we've kind of developed that into systems where we're even less opinionated about what these tools need to look like. And I'll touch on that in a second.

**5:27** · So the next uh the next stop on this journey was skills, which I'm sure you've heard a bunch about today. And what this solves is this problem of the like ever growing context. So we have this really clever idea of um progressive disclosure.

**5:43** · The way I like to think about it is um actually first on skill what skills are good at it's processes where you have like a procedural workflow. So something where you have an opinion about how the process works end to end that you want the agent to follow. Um and what's very clever is that the agent only looks at this front matter a couple of sentences at the top of the file before loading the skill. But you can still load as much detail as you want into the main body of the file. So you're able to at the same time have very deep levels of detail whilst not overloading the model's context.

**6:16** · And the way I like to think about it is as if I'd had a bookshelf in my room and every time someone talks to me um I can kind of scan and look at my list of books and see if any of the titles might be relevant to the conversation and kind of pick that off the shelf and read it when I need to.

**6:32** · So, for example, if someone walked up to me and started speaking to me in French and I noticed that I have a French dictionary, I could pull that out and it would give me context kind of loaded during the conversation that would help me um without me having paid attention in like seven years of French classes at school and having that all loaded into my context already. So, this was a really really great innovation, but one bottleneck potentially with it is that it's still kind of driven by humans and agents together.

**6:59** · So you're still even if you're using your agents to write the skills with you, you're still being quite opinionated about like what things need skills.

**7:09** · So that takes me to the final step on this path which is what we perceive to be state-of-art for memory systems today. And what we have done and yeah what we think is best practice is modeling these memory systems just as file systems. So this kind of aggregates a couple of the learnings from this path. So file systems are great. you can just fill them up with markdown. Um, agents are actually just very good at using normal file system tools like bash and gp.

**7:37** · So just let them search over the file system rather than being opinionated about these specific tools that they should use to read and write to memory. Um, and then yeah that that search kind of mirrors this idea of progressive disclosure. You can index these memory systems really well so that agents can intelligently search over them. And that's where we have kind of got to so far.

**7:58** · So just to recap the key learnings from that format markdown is great um for reading memories you know allow the memories to grow large but give agents tools to quickly index and search for what's relevant. And finally like give agents autonomy when they're writing to memories.

**8:19** · And if you were to go out and build this system it would work really well. you would have the feeling of continual learning because your agents would get better at the individual um whatever individual tasks you're doing.

**8:32** · However, as with everything, this very neat idea runs into some problems when you try and scale it to production. So, we have an we have a concept for theoretically what works. And \[snorts\] when we then think about scaling these to production in environments where we have many agents collaborating at the same time where they run over very long periods of time um and where potentially

**8:58** · these like code bases get really complicated all manner of problems start to arise and we've seen these in production time and time again. So one a couple things just to like yeah spark your imagination. Think about multiple agents trying to write to a memory file at the same time. How do you manage that? Think about one agent running into a problem and deciding to like write to the organizational wildwide context which every other agent is currently reading from. Like if something was incorrect there, that would scale to all of your agents and be pretty disastrous.

**9:30** · Um, and think about when you have humans and agents collaborating on on memory context together, like how do you keep track of what's going on?

**9:39** · The final problem is that memories can go stale. Of course, something that was relevant in the past uh might not be relevant today or maybe it was written incorrectly or even maliciously injected by someone trying to uh prompt inject your agents to write bad things to memory. So, you have to have a lot of guardrails in place to make sure that these nice autonomous memory systems actually work in production.

**10:06** · And so I'm going to talk through a couple of key principles that we use when designing memory systems in production to make sure that we do get to use all of those nice effects that we've talked that we've spoken about.

**10:19** · So the very first thing is versioning.

**10:22** · So when you're designing any kind of memory system, you need to be able to store versions to keep track of what's going on to allow you to roll back should you need to if a new update isn't particularly good. Um, additionally, you probably want to think about like what context was this update based on. So, which agent session, which transcript resulted in me wanting to make this update.

**10:45** · Um, and additionally, like you might want to track like who did it, which agent, which human, etc., etc. So, this is really important. The second thing is concurrency. So, we've talked about, okay, what happens when I deploy thousands of agents all working off the same memory system?

**11:02** · And the solution that we've adopted here is to have this hashing system. So when an agent decides that it wants to write an update to a memory, it takes a hash.

**11:14** · It then drafts its edit and then before it writes the update, it takes another hash. If those two things do not match, then the agent cannot write it because it means that some update was made in the meantime. And in order to handle that, the agent ripples the memory, drafts its new update, and then tries to commit this again. So these are the kinds of just engineering practices that allow you to scale multiple agent architectures, um, scale memory to these kinds of architectures.

**11:46** · Another couple key principles. So permissioning is really important.

**11:52** · When you have large memory bases, you probably have a mixture of top level organizationalwide knowledge. It might be like your key uh like what your organization is trying to achieve or key principles about the codebase which you've really carefully cured all the way down to the level of like a scratch pad for an agent where it writes down its working memory \[snorts\] and it's very like individualized. And all the way in between you can have things for specific organizations or cross-sections.

**12:21** · And so it's really important that you have guardrails when it comes to permissioning uh these memories. So like I said, you wouldn't want one agent to just decide that it should update the organizationwide context. Probably you might want that as read only. However, for its own scratch pad, you would want it to have right access. Um and yeah, yeah, that's that's permissioning. Um, a final thing which is kind of peripheral but still really important when you design memory systems is portability.

**12:53** · So like I mentioned before, your curation of your memory systems is going to be so important like throughout the future.

**13:02** · This is really really important organization user or like work task specific context. And so \[snorts\] it's likely that if you're putting a lot of effort into curating this, you want it to be accessible across potentially multiple product surfaces um and access accessible by multiple systems.

**13:22** · So designing in a way with a clean API in which it's portable and you can access it is really important.

**13:28** · And so when you put all these things together, we have the kind of learnings we have from allowing agents to creatively manage their memory and then these production level guard rails that allow them to like reasonably use all of those principles in practice.

**13:44** · And when you do this, you get very effective results. So just sharing here a couple of learnings from what we've seen deploying these largecale memory systems in production. And for example, we see you get better accuracy. So you have this effect where the second time the agent does the task, it actually does it better with higher results because it's noted all of those memories about what went wrong.

**14:10** · Secondly, that then has second order effects on the speed and latency, sorry, speed and cost of your agents running because they're then spending fewer tokens. they can more easily oneshot these tasks because they actually know what they're doing.

**14:26** · And you'll see that across all sorts of different processes, um, agents are just able to do the task better and faster.

**14:32** · Finally, having this process where your agents are starting to autonomously write their own memories frees up capacity and context for you as product developers potentially to focus on product wins while you know that the agents are doing this kind of self-learning continual learning loop in the background. And yeah, once that infrastructure is set up really well, this this works very symbiotically.

**14:58** · Um, as ever we do then reach a new bottleneck and this specifically is about inband memory. So inband memory as I mentioned before is when agents are writing to and reading from memory within a specific session. So if you think about claude code for example um when you like spin up a new session it's it's largely like focusing on that specific context when it's reading to reading and writing from memory.

**15:27** · Um and this just architecturally or philosophically has limitations in the general like agent fleet continual learning objectives. There's two two main reasons why. First of all is that you have this inherent split of focus and resources. So you're asking an agent to complete a task, but at the same time, you're also asking it to invest in memory curation, which would help it perform better in a future run.

**15:52** · So when you put these things together, it's just a very difficult optimization problem because how much capacity should an agent put into like helping future versions of itself versus doing the task that you actually asked it to do?

**16:06** · And also there's like other effects like latency for example.

**16:10** · The second thing is that the agents just have an inherent visibility limitation.

**16:16** · So they only have the context of what's going on in their session. As such, they just won't see patterns that happen across sessions. So when you get frustrated that your agent keeps making the same mistake over sessions, it just doesn't understand how frustrating that is because it has a new context window in each of those. Secondly, when you're running multiple fleets of agents in different environments, you these single agents just don't have the context of what other failures other agents are running into. So for these two reasons, we introduce this concept of some outofband memory curation. And this helps to make these problems go away.

**16:51** · And just to introduce an analogy for why this in theory should work, I'd like you to think about a \[snorts\] school for example where you have lots of students that submit a lot of work and you also have uh teachers that market and a headteer that reviews everything.

**17:08** · This is a system that we have in the real world for good reason and it's because when you have certain individuals that have dedicated capacity for helping people learn, that's really effective. And when you also have people that have visibility over the whole fleet of agents or learners and they're able to spot patterns and then kind of steer context or let's say in this case the curriculum uh that's also really effective. So as always we kind of looked to the real world world to think about how to build these systems.

**17:37** · Uh sorry I also didn't touch on a final limitation which is that memories go stale. So you need something some pass that checks that everything that's written there is still correct.

**17:49** · And so we introduced this concept of dreaming which is like a second o second order process over memory. So if we think about how that's been constructed, we have the like actual context which agents reference and is has useful information. The memory processes which allow agents to kind of autonomously manage that context themselves.

**18:08** · And then dreaming which is a process that runs in batch and asynchronously with its own allocated resources to ensure that those memories themselves are effective up to date um and helping the agents learn over time.

**18:29** · So what does dreaming look like?

**18:32** · Essentially what we do is we take an existing memory store. So this is a collection of memories.

**18:41** · We then take a bunch of sessions or transcripts from agent interactions over a period of time and we give these together to an agent which reviews all of the transcripts, looks at the memory store and starts to identify patterns for where there could be uplift in the memories.

**19:02** · It then outputs a new memory store where there are proposed changes to the existing memory store. And what the agent is able to do, as I mentioned, is spend tokens on solving this problem of making agents learn better. Identify patterns for where agents are consistently failing and then propose

**19:22** · changes for what might make a more effective memory store such that next day when you run these agents again, they're actually feel smarter and they're running better. \[snorts\] To go back to my analogy, just to paint some pictures of like what this could look like in practice, let's imagine that the headteer reviewing all these transcripts notices that every geography student has incorrectly answered a question, they're \[snorts\] just all writing like complete garbage to this question.

**19:50** · The teacher notices that actually by kind of in this case analyzing the memory store, that entire topic is missing from the curriculum. So what the teacher was able to do is notice that pattern, look at the memory store and suggest a new change to that curriculum such that the next day when these agents run, they now have that information that they needed.

**20:10** · To give another example, the teacher might notice that um in a certain maths exam, all of the answers are wrong in the same way. Uh all of the students are outputting radians when it's meant to be degrees. I don't know if anyone else in like GCSE maths had that problem, too.

**20:25** · Uh but what they're able to do is give an instruction saying like this is how you should configure your calculators.

**20:31** · And in the case of agents that's like noticing in the transcripts that there's something wrong with the tool configuration. So you might notice that something in the tool calls keeps failing. And what's important here is that when we look at those transcripts, we're not just looking at kind of the passes of like uh responses between agent and the system or the user. We're also really scrutinizing like those tool calls and all of the other metadata that is really central to the agents performance.

**21:01** · Finally, you could also notice something that's like fleetwide or organizationwide. So, for example, like everybody's using too many m dashes and you don't like that. So, you want to add some organizationalwide or um announcement or context change that says not to do that. \[snorts\] And so, I hope that paints the picture of like why this could be really really effective.

**21:22** · And now I'll just talk about how you would go about designing such a system in production.

**21:30** · So you have some concept of your memory store which is a concept which is a collection of memories. Memories themselves might just be markdown files organized in this directory.

**21:42** · You then take a number of the transcripts and like I mentioned that is a mixture of like the back and forth passes between the agents as well as metadata on tools uh other skills they used etc.

**21:56** · And the way that we've designed it we have the orchestrator deploy a fleet of sub agents that go and analyze all those transcripts.

**22:04** · And one point worth making here is that when you design these systems, you have the ability to steer how these agents which both write memories and coordinate dreaming go about the problem. And by steering, I mean that you're able to tell them like in your specific case, these are the kinds of things I think are important and relevant. These are the kinds of things that are not important and relevant. So you do have the ability there to start to curate that memory and dreaming process to your organization specifically.

**22:35** · And the orchestrator then reviews all of the responses from the sub agents and it then decides like where there are prevalent enough patterns that it thinks this warrants a change in the memories.

**22:49** · From there it proposes individual changes to the memory store. And in our case, the way that we've designed this in production is \[snorts\] the agent will additionally give you examples of transcripts where it's noticed this pattern has happened and also some stats on like how prevalent this issue is and why this warrants actually updating uh the memory store.

**23:11** · And so all of this works really neatly.

**23:13** · you get this output and you as the individual can decide where you want to accept changes to the memory um where you want to reject them etc. And this works really effectively.

**23:28** · So together we have these two processes that run in parallel.

**23:35** · The first is memory. And these agents are using some of their uh like inbound context and inbound resources to write to memory where they think it's important. And this is neat because it means that in the actual next run, the next session, that agent will be better.

**23:54** · So there's a shorter time to kind of seeing that change. But inherently these agents have competing resources when they think about what to dedicate to memory, what to dedicate to um completing the task and additionally a lack of visibility. So on the other side we have dreaming which is this outofband process and this allows again broader visibility and dedicated capacity i.e. token spend which is specifically directed towards helping agents learn better.

**24:25** · And you might think, okay, \[snorts\] that sounds really expensive. Why would I want to chuck extra resources at this?

**24:31** · But if we kind of go back to the improvements we saw when you build effective memory stores, actually you can see a bunch of costs go down because um agents are able to oneshot things more effectively. Uh they have more information that they need in order to uh perform a task well.

**24:50** · So to summarize, at the very least, do the simple thing that works. Context management uh makes such a huge difference to your agent performance.

**25:04** · Implementing things like a Claude MD file, like skills, which I'm sure you've heard about a bunch, and allowing agents to autonomously manage these systems themselves goes a really long way. Once you think about scaling those things into architectures with many agents, agents that run over a very long time,

**25:24** · situations where you will like continue to work and develop on a workspace or a codebase over a long period of time or very complex domains, you should start thinking about adding some features or some guard rails that allow those agents to manage their memory in a way that is safe, verifiable, auditable.

**25:44** · I should also say here that whilst this kind of these kinds of practices are really effective when it comes to coding tasks for example this by no means is just specific to coding like I use memory all the time when I'm producing presentations that has context on like how I like to write things how I like my slides etc etc and that develops over time so this is really not coding specific the final thing is if you really want to

**26:10** · kind of like close the loop here think about adding an additional outofband process like dreaming as we call it to consolidate your memory and cut things that are no longer relevant, add things that agents are missing and clean up and organize memory systems.

**26:29** · So to close, I want to say that this journey that we've been on with context engineering, a lot of this stuff has only happened in this past year. This is very much an open area of research and development and one which we see huge value in the future. So we're so excited to see the kinds of things and contributions that you all make to this space. So I encourage you to keep thinking, keep learning, and keep dreaming. Thank you. \[applause\] Wonderful.

**27:02** · Thank you, Lamis. That was great. Uh do we have any questions in the room? Oh golly gosh. Uh I'll dive straight here first.

**27:12** · Thank you. Thank you for the presentation. Um do you have any memory store implementation that you would like to suggest?

**27:22** · Any memory storage implementation that you would like us Sorry, did you say papers or memory storage implementation?

**27:30** · Oh, okay. Okay. That we like that you would like to suggest to solve what problem specifically?

**27:34** · The ones.

**27:36** · Well, one thing is put things in files that I have on my laptop. Yeah. But I think I'm looking into something more enterprisey.

**27:45** · So, what kind of solution do you suggest over there?

**27:49** · Okay.

**27:49** · Yeah. So I mean maybe I was kind of koi in the talk because we're not allowed to make product call to actions but given that you asked um \[laughter\] we have uh a lot of this references the architecture that we used in our memory uh our memory infrastructure for our managed agent solutions and so when I talk about these things about productionizing um memory so everything like versioning uh hashing etc that's all available within our memory in dreaming API through claude manage agents.

**28:21** · So if you did want an out-of- box solution for this kind of thing, that is where I would point you to.

**28:29** · Um, hi. Uh, the early on you talked about guardrails and permissions.

**28:36** · \[sighs\] Um, and I think I'm sure most of us have probably read the cla code leak and the memory stuff. The dreaming stuff was definitely some of the most interesting in it. But how do you scale that at enterprise if you've got hundreds of users with different permission sets? How do you make sure dreaming follows those same guardrails?

**28:56** · If it's happening out of band and the context is different compared to say the context the agent might have when a user is using it.

**29:05** · So just to check that I understand um we have like some permissioning about what agents can access like in terms of memory and then a separate like yeah so I mean I think this these things compose quite well um because when you set up a dreaming procedure you decide exactly which session transcripts to attach and so you could build a process which mirrors whatever permissioning you have on the agents.

**29:28** · Um, so yeah, I mean if that's to say that it's not the case that when you kind of trigger a dreaming job, it just takes like everything in a certain time period. You can configure it that way. But you could also just search over whichever transcripts have the same permission set as like um whatever your memory store is and then make sure that that matches if that makes sense.

**29:52** · Hi, thank you. This was really really interesting. I I found it fascinating earlier when you were mentioning about like versioning, concurrency, durability, all the all these things. At what point are we like reinventing databases from like first principles again?

**30:08** · Um yeah, this is this is an interesting point. I still think like one of the things that I suppose for me that's something I didn't say. Um what we're trying to do here is like thread the needle like sorry find the right boundary to draw between kind of letting these agents autonomously act and then also like which things should just be kind of programmatic um things that are baked into the harness.

**30:34** · And so I think what you allude to is like first of all we were just kind of like letting these agents write in markdown files and just like commit whatever they wanted and now we're kind of seeing having seen which primitives work really well we're thinking about like kind of codifying that in the harness. And so when we think about like the hashing or the versioning, yeah, we are kind of going back to the software engineering principles that we've seen work well in the past, but in a way that kind of autonomous agents can act and like uh can in can interact with those really effectively.

**31:03** · So I think to to some extent like we sort of are merging back into those practices, but that's because we have enough signal now to know that those things should just be done in a very deterministic way and there's no need to reinvent the wheel. I hope that answers your question.

**31:18** · Perfect.

**31:19** · We're absolutely out of time. Thank you once again. Big round of applause for LameX.

**31:23** · \[applause\] \[music\]
