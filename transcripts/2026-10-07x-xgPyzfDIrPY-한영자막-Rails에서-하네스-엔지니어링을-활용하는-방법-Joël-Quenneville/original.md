---
title: "[한영자막] Rails에서 하네스 엔지니어링을 활용하는 방법 — Joël Quenneville"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=xgPyzfDIrPY"
domain: "youtube.com"
language: "en"
description: "AI가 코드를 빠르게 작성해도 리뷰와 수정에 이틀이 걸린다면 무엇을 바꿔야 할까요?Joël Quenneville이 Rails에서 에이전트 루프, RuboCop, 제너레이터와 리뷰 스킬을 활용해 AI 코드의 최소 품질을 높이는 하네스 엔지니어링을 설명합니다.주요 포인트• 에이전트 루..."
word_count: 5266
---

![](https://www.youtube.com/watch?v=xgPyzfDIrPY)

AI가 코드를 빠르게 작성해도 리뷰와 수정에 이틀이 걸린다면 무엇을 바꿔야 할까요?Joël Quenneville이 Rails에서 에이전트 루프, RuboCop, 제너레이터와 리뷰 스킬을 활용해 AI 코드의 최소 품질을 높이는 하네스 엔지니어링을 설명합니다.주요 포인트• 에이전트 루...

## Transcript

**0:00** · of this year, I started looking into more seriously uh writing most of my code using an LLM.

**0:10** · And I had this really vivid memory of picking up a feature that was scoped at about 2 days worth of work and sort of working with it with the agent, scoping it down, getting all the details right, and then letting it run. About an hour in, we basically have something that works. And this is amazing, right?

**0:36** · I spent one hour to do two days worth of work. This is going to change everything.

**0:42** · Now, there are a few issues with the internal quality. So, I'm going to polish it up, then put it for review.

**0:50** · I'm gonna look like a hero to the team.

**0:54** · Well, lunchtime comes and I've done a few rounds of polish and it's it's getting better, but we're not quite done yet.

**1:03** · About a half a day has been spent here and spending a half day for two days worth of work. Still a pretty good win.

**1:12** · Well, evening comes and I'm still not done. I've done multiple rounds of review. I've done a lot of cleanup. It's getting better, but it's not quite there. But still, one day of work for two days worth of scoped work, that's that's something.

**1:31** · So the next day, jump back into it. And now I'm on a race against the clock because every hour I spend polishing, I'm seeing my leverage sort of diminish.

**1:43** · And by evening, I finally limp over the finish line. I got it. I did two days worth of work in two days.

**1:54** · That's really frustrating.

**1:56** · What went wrong? Where did the promise of AI fall through?

**2:03** · The problem is I spent one hour building code and then two days playing whack-a-ole with this, you might call it slop that the AI generated for me.

**2:16** · So, I don't want to do this. I have a couple of options I could do. One, after that first hour, just put the PR up for review. Let my colleagues deal with a the quality problem. Now, I get to look like a hero. I spent one hour to do two days worth of work, and I've just shifted that burden onto everyone else.

**2:36** · Don't do that. If you do that, you're a bad person.

**2:41** · Alternatively, what I'd like to do is to raise the floor on what the AI gives me so that I'm not spending two days reviewing it. I'm spending an hour. So, how might I do that?

**2:55** · Maybe I can do some better prompting.

**2:58** · Sounds like all the pros are playing with agents.md. Maybe put some ro rules in there and that's going to help me write better code.

**3:07** · And that will work to a certain extent, but I'm afraid to say that that's a trap. There is a ceiling here. And to understand why, we're going to have to dig a little bit into the question, what is an agent?

**3:23** · So, let's say that we want to write the program FSBuzz and we want an LLM to write that for us.

**3:32** · The most basic way we could do that is do a raw API call to in this case Anthropics API and we say hey here's a spec write the code that will make that spec pass and because we're rubists we're going to write that a little bit in Ruby. Write a little bit of a Ruby wrapper around that because it looks clean.

**3:55** · Now what we've just done here is actually kind of special. So I want to really focus on that. This wrapper is not just convenience. It's a thing called an agent harness. That is some code that wraps calls to an LLM model.

**4:12** · And that really matters because on its own, a model can't do anything. It's just a brain in a jar. You put text in, you get text out.

**4:23** · A harness, on the other hand, look, it's reading a file from disk. It's writing a file from disk. This is code. This is Ruby. We can add anything that we want around that model call. And that's really powerful.

**4:39** · So, we've got our harness. Let's run it.

**4:41** · See how it goes.

**4:44** · And the agent creates something that looks like this. It's correctish.

**4:50** · There's a bug. That divisible by 15 line will never trigger because the divisible by three line will always run first.

**4:59** · So, how do we prevent that?

**5:02** · Maybe through better prompting or maybe better better prompting.

**5:12** · The reason we fall into this is, I think, because we're coming at the problem with a bit of a naive mental model of what an agent is. We think of it as a black box. Put a prompt in, get code out. If you want better code out, you need better prompt in.

**5:31** · And this technique really hit the ceiling. Uh it's a mental model that kind of comes from the chat GPT era. But modern day agents are actually quite a bit more sophisticated than this. And to understand why, I want us to pause and think, if I had given you that same prompt that I gave to the agent at the beginning, how would you have solved that by hand? Would you have tried to just from your mind make something that passes the spec?

**5:58** · Maybe. There's some really good developers in this room. But most of you probably would have run the spec and then if you had missed an edge case, you would have fixed it. Run the spec again, see it pass. So why not do that with the agent? Now remember, a model can't run code on its own. So we could run it ourselves, pass the results into the prompt, and that works. But now we've put ourselves in the role of human plumbing. We're just doing that loop.

**6:32** · And that's a waste of our time. That's a mechanistic sort of thing. Ideally, we would want something else to do this automatically. And this is where the harness comes in. Remember, it's just Ruby. We can put anything we want there, including a loop.

**6:49** · So this is that exact same pattern from the previous slide just automated in a loop in Ruby.

**6:59** · And what we've done here is what's sometimes called an agentic loop. Uh so now we don't just have prompt into a model into code but a prompt comes in to the harness. The harness might decide to go back and forth with the model. It can go query stuff in the environment. It can take action within the environment and then it can decide to loop again. It can do multiple calls to the model and it can keep going until it hits some sort of exit condition.

**7:27** · And this is really powerful because a loop allows an agent to respond to failure. It means that the agent is now self-healing and that the first generation doesn't have to be perfect. We don't have to try to oneshot this. It's okay if our agent writes that mostly good code that we saw for fsbuzz because it will run the tests, self-correct, and on the second or the third or the fourth generation give us the correct answer all without human intervention.

**7:57** · The loop plus the tests are what are going to steer the agent to the right choice.

**8:05** · The loop that we built is hardcoded to work with tests, but a generic version of this loop is at the heart of all the commercial harnesses that we use. Things like cursor, claude code, or codeex.

**8:19** · For the rest of this talk, I want to focus on these commercial harnesses and ways that we can lean into the fact that they are a loop to move away from that prompt and prey model and to use that knowledge to raise the floor on the sorts of Rails code that we can write.

**8:33** · This sort of thing is often termed harness engineering and that's going to be the heart of this talk.

**8:39** · So how can we raise the floor on rails?

**8:44** · Consider this sloppy Ruby right here. We would like the agent to not write stuff like this. So what do we do?

**8:59** · My general recommendation is that agents.mmd is not the place for your style guide. The problem is that agents.md is really just another form of prompt and prey. What the harness will do is it will take your agents.mmd and prepend it to the front of your prompt. It's a convenience so that you don't have to type it out every time. But it's not really that much different than typing your rules in every prompt that you do.

**9:29** · Also, this is probabilistic. The agent may or may not follow every rule in your agents.mmd. And as your context gets fuller and fuller, the odds of it not following it go up. So, what might be the more might call it agentic way or harness engineering approach that we might take?

**9:48** · Well, as with the testing, I'm going to pause and ask you, how would you solve this problem by hand, writing this sort of sloppy Ruby code? Well, teams have been solving this for years. PreAI, we've used a llinter. We've used tools like Rubocop.

**10:06** · So, we could write Rubocop and have it run and pass that into our prompt and do that loop and that's good. But now we're in the role of human plumbing again.

**10:18** · How might we wire this into a commercial harness? Because you can't open up the source of cloud code and wire in Rubocop.

**10:27** · Here's a really simple way. Just add a line into your agents.mmd. Add that directive there and say after changing Ruby files, run rubocop.

**10:37** · Now, this is still probabilistic, but look how much smaller your agents.MD is. We've taken all of that knowledge, all of that judgment that used to live in agents. MD, moved it into something deterministic. Rubocop owns your style guide. The only thing that's in agent MD is the directive to run it. But we can do better. If we want to get to 100%. We can lean into something called hooks.

**11:05** · Now, these vary from one harness to another. And the harnesses are constantly iterating on this stuff. So the exact code on this slide doesn't really matter so much as the idea.

**11:17** · A hook is a life cycle event that you can write code that will run when that event happens. So in this case, uh the stop event is what Claude will emit when it's trying to exit that agentic loop.

**11:32** · And what it's going to do is it's going to call this code here. When it wants to exit, I'm going to make it run rubocmp.

**11:40** · And if Rubocop fails, I'm going to say you're not allowed to exit. You must run again. And then it's going to run again and try to fix its problems.

**11:50** · And you might think, okay, cops can solve style problems. That's okay. But that doesn't really raise the floor that much. The bar is still down here. I'd encourage you all to be really ambitious because lots of quality problems have copshaped verifications.

**12:07** · Consider an agent that is making this multi-tenant bug all the time. It's forgetting to scope your finders in an appropriate way.

**12:17** · We could have a custom cop that looks like this that will catch that bug. And if this looks intimidating to you, remember that we have LLMs now. We can generate this in 2 minutes.

**12:33** · This one here is kind of fancy. It's generic. It allows you to configure it using config like this. Um, and it works pretty well. So, anytime you're feeling frustrated by something that LLM does and you want it to stop that behavior, ask yourself, is there a way to catch that using a cop? And be creative. Be ambitious.

**12:57** · That said, there are some problems that genuinely aren't very well lender shaped. And one that really bothers me are migrations.

**13:07** · Rails migrations have this very particular file name and agents see that they try to mimic it but they don't really understand what's driving it and so they often get it wrong.

**13:19** · So how might we prevent the agent from getting that wrong?

**13:23** · Maybe we try to dump the algorithm and pros in our agents.mmd.

**13:29** · It's just more prompt and pray.

**13:33** · Instead, I'm gonna ask you again. How do you solve this by hand? How does every developer in this room not make a mistake when typing out that number?

**13:43** · And the answer is, I don't type that number. You don't type that number. We use Rails generators for this. So, why not have the model do it? We could put a directive in our agents.mmd that says always create migrations with Rails generate migration.

**14:00** · much better than trying to copy the algorithm in pros in a markdown file.

**14:07** · And I found that this works maybe 90% of the time, but we can do better. If we want to get to 100%, we could lean on hooks. Again, this one here triggers every time that Claude tries to write a new file. And instead of inlining my code, it just calls out to a Ruby script I've written.

**14:27** · That Ruby script says, "Claude, if you try to write to the DB migrate directory, you're blocked. You're not allowed to write new files to DB migrate."

**14:36** · And then it does something interesting.

**14:38** · It gives a denial reason. It says, "Instead of writing here, I want you to run the generator." And that's important because agents have a goal. And if they know they need a migration to do the goal that you gave them and you block them, they're going to try to find a way to hack around it. And they're really good by giving it an error message and making its easy path the right thing to do.

**15:06** · That significantly reduces the chance of it trying to hack around your block and instead pushes them in the direction of doing the correct thing because agents want to take the easy path.

**15:17** · And again, we can be ambitious here.

**15:21** · Think of all of the sorts of things that you might want to capture in variance about your code, patterns that could be captured in a generator. Do you have a directory where you want all new controllers to inherit from a base class, but it's different than the existing patterns in your app, so the LLM is getting it wrong. Or maybe you want to ensure that every controller comes with a policy object for authorization.

**15:47** · put that in generators.

**15:49** · If anybody was at Rachel's talk here yesterday, uh she went in depth on all the really cool things you can do with generators. Uh if you missed it, I definitely recommend that you catch that when the recordings come out.

**16:10** · out of a sort of agentic system out of the LLM and into deterministic tools.

**16:16** · And somehow when we did that, even though there's less intelligence involved, the system as a whole got smarter, more consistent.

**16:27** · And that's a really interesting property.

**16:30** · That said, there are times where we're going to hit the limits of that. There are times where some quality things are harder to catch deterministically. We need a curistic and we might want to lean on something more LLM shaped. So how might we do that?

**16:46** · Again, maybe this is the time to pull out agents.mmd.

**16:51** · But again, that's just more prompt and prey. And I found that putting code heruristics in agents.mmd has a particularly poor track record, at least in my code basis. So what can we do instead?

**17:05** · I really like leaning on LLM review skills. Your harness probably ships with a built-in review, and that works pretty well. You can build your own, but if you do that, I recommend that you make them narrower. Don't just try to dump a bunch of like random programming wisdom into a skill file. Instead, focus it on a particular theory of what good code is.

**17:27** · In my case, I built three skills that are based on how I tend to review PRs.

**17:33** · Sort of three phases. A very broad structural review. does the solution kind of map well to the problem? A more method-th by method review and then a final sort of polish phase where I look at whether uh code is readable and well documented.

**17:50** · So we want to use this, we're going to have the LM write its code and then we're going to invoke these skills to get the review on it. And that works, but it puts us in the human plumbing role again.

**18:02** · Instead, we want to think about how to get the harness to automate that.

**18:07** · Now, we're going to want to make sure that we're running these skills in sub aents. That helps with bias. And anytime we're now starting to talk about agents talking to other agents, we're now in the world of orchestration.

**18:20** · This is not real orchestration, but it's kind of simulating it and it's good enough for this sort of thing. It's just a little skill. you would you would invoke it manually and it says hey do the work I told you and then run the sub agent in this way run this other sub aent in this way do this thing you're done five lines

**18:40** · if you're looking to do something that's closer to real orchestration uh you can do that in cloud code using their dynamic workflow or ultraode uh I know some of the other harnesses have built-in things and there are also some third party tools you can use now some of you might be seeing this and like wanting to raise your hand being like, "Wait a minute. You just told us that putting heristics into agents.mmd is just prompt and prey. How is putting them in a skill any different? Didn't you just move it around?"

**19:14** · And here's where a distinction comes up that's really important. The challenge with prompt and prey with agents.mmd is that when you ask an LLM to build a program for you, you're sort of giving it a instructions up front and asking it to pluck a program for the like entire universe of possible programs and you're saying give me a program that meets all of these qualifications.

**19:38** · And that's a pretty tall order.

**19:42** · You're trying to steer the program by giving it instructions, but you're steering from behind the starting line.

**19:49** · Instead, I find it's better to steer from the middle of the path.

**19:55** · It's much easier to say, "Hey, here are some heruristics, and instead of applying them forward to the universe of all possible programs, let's apply them backwards to a concrete program I've already generated." It's much easier to find violations in a program I've written now than for all possible programs I could generate in the future.

**20:16** · But I want to take these ideas and put them into a little bit more perspective.

**20:20** · There's a mental model that I really like that comes from Brigita Bookler and she imagines various mechanisms for steering agents to sort of fit in this 2x two quadrant system.

**20:31** · you have uh mechanisms that can either steer by feed forward that is uh before generation happens or through feed back uh after generation has happened and those mechanisms can either be deterministic computational or they can be LLMs they're inferial uh ruble cop that we used is a feedback computational mechanism generators are a feed forward mechanism

**21:02** · And aentic review falls in that feedback inferial quadrant.

**21:07** · Now you might be wondering, we looked at three examples, but there are four quadrants. What is in that feed forward inferial quadrant?

**21:17** · It's our good old friends prompting and agents.d quadrant is a really valid part of the story when it comes to steering your agents. It's just not the only one.

**21:30** · In general, I find it's good to move judgment out of that feed forward inferial quadrant and into the other three. Personally, I like to have my agents in D be a very thin almost routing layer rather than be a dump of my brain.

**21:46** · So, let's get creative. What else could we put on this quadrant as Rails developers? Well, we already saw rubocop, but some other things we could put on here are reek fogg code climate for just broad heristics on code quality. Uh security scanners fall in that tests ways that allow an agent to verify their work. So maybe looking at logs or opening up a browser with playright.

**22:13** · Um in addition to generators in the feed forward, we could also have things like setup scripts or templates. I'm a huge fan of templates. uh we don't have time to dig into them but uh come see me afterwards and talk about them because I've done really fun things with that.

**22:31** · All sorts of uh agentic review and agentic uh driven analysis happens in our inferential feedback quadrant.

**22:41** · And then finally uh our inferential feed forward quadrant. Uh we've got our prompts but we've also got things like static docs or nearby source code. If you went to Kinsey's talk earlier, uh she went really deep on some of the things you can do to use source code as a steering mechanism.

**23:01** · Now, you might see all this and be really excited to add it all to your app. And let me give you a word of warning.

**23:08** · That is goodart's law. When a measure becomes a target, it ceases to be a good measure. And that's a thing that was developed for managing humans, but it also applies to agents.

**23:19** · I found that when I constrain my agents too tightly, that's when they start trying to hack around things. So, especially if you're using something like code climate to give them a max score on something, if you put that too tight, your agents are going to find a way to satisfy your score in a way that's not going to satisfy you. So, give them a little bit of breathing room and you'll get better results.

**23:44** · There's a technique that I'm a huge fan of uh domain specific scripts that I want to dig into a little bit.

**23:51** · I've been recently working on a project where we are importing a bunch of documents, having to process them, having to connect them to other pieces of data in our system and then internally publish them. And I've been using this domain specific script approach to try to level up what an AI can do in that context.

**24:13** · The problem is that the automation rate for processing those documents is only about 5%.

**24:29** · And unfortunately, it doesn't give me any good results. It misses the big picture. It sees snippets of a database here, a bit of a document there, uh some source code even here. But every time I ask it questions or ask it to find root causes and yes, there are multiple uh it doesn't give me a clear picture and it actually gives me contradictory answers.

**24:50** · So, how can I make it better?

**24:53** · As a human, I can bring order to that chaos because I have a mental model.

**24:59** · What's happening here is we are working with a funnel, a leaky funnel.

**25:05** · Data moves from one step to another and it can fail out for all sorts of reasons at various stages. So, I wrote a script that classifies all of the documents in a given population based off how far they went down the pipeline, where they dropped out. And then I pointed the LLM at this script and said, "All right, now try to find the root cause." And wow, it got so much better. And that's for a few reasons. Uh, number one, having stable definitions means that its populations are now comparable.

**25:36** · It used to not even have a consistent definition of what counted as successfully exited the pipeline. And so anytime two agents were trying to come up with a story, they conflicted.

**25:49** · Secondly, it now has a higher level language to think of when it's reasoning. It used to just be trying to find patterns between oh this column on this table or this bit of line in a code but now it's thinking in terms of buckets and bales and pipelines and exit points.

**26:09** · I gave it a richer set of primitives for thinking and communicating about the work I wanted it to do.

**26:16** · And finally, the categorization itself is just really helpful. Uh if it's doing an investigation, starting from a particular bucket of uh documents that have failed for the similarish reason is a great way to start digging deeper.

**26:31** · But this is not just for agents. Having a domain specific script is really good for humans, too. You may even have noticed that that's true for all of the other things I've shared. Having better generators, having better rubocops, those are all good for agents, but they make the developer experience better, too. And that's especially true for domain specific scripts. We set out to raise the floor for the LLM, but at the same time, we raise the floor for all of the developers on our team.

**26:59** · I'm incredibly bullish on domain specific scripts in particular because they help address a sort of blind spot that's often in the heads of all of the developers on our team. It's all tacet knowledge.

**27:16** · So I took the output of my script and I pointed it to a visualizer and then I get something that's really nice like this. A visualization of exactly the state of my pipeline at any given point of time. And I can see where things are failing, where I need to zoom in, and where it's worth investigating.

**27:36** · And this sort of thing is really easy to do in Rails because we have rake. We even have Rails shebang scripts. We can write sort of scripts on the side and then get access to all of the goodies that we need from Rails the framework.

**27:52** · So, we've seen a lot of different ways that we can use to have our harness uh raise the floor by reading signals from around it and by steering it. But this has to happen in a environment of continuous improvement.

**28:09** · We had all of these different mechanisms and you might be tempted to bring them all into your app at once and I would recommend against that. Instead, try to drive it with lived pain. Anytime you have to correct an LLM, ask yourself, how could this be the last time? How could I give the harness the tools so that the agent can self-correct next time without a human needing to go in and tell it what to do?

**28:35** · Anytime you find yourself in this human plumbing loop, try to get yourself out of it. Can the LLM get direct access to a tool and read or write something itself?

**28:47** · A few questions you might want to use to improve your harness. Where did I have to intervene? What signals were missing?

**28:54** · Was there anything I had to manually copy back and forth? Is there anything in my agents MD that could have been better done deterministically?

**29:02** · Did the conversation degrade? Could it have been split into multiple conversations?

**29:08** · Are there any mistakes that happen multiple times?

**29:12** · And if you're like me, asking all these questions is a lot of work and I'm sometimes lazy when I'm a developer. So, I packaged it up into a retro skill. I run this on a long session after I've interacted with an LLM and it analyzes my history and suggests automations that I can do. This is up on my GitHub if you want to see it. Uh JoelQskills, but it's possible that you already have this in your repo today. I don't know if anybody here uses uh Matt Poke's uh skills.

**29:44** · Uh he just recently, I think last week, released a skill that does the same thing, also named Retro. So, it's possible that if you use his skills, you already have this in your repo today and you can do this after your next AI session.

**30:00** · So, going back to myself back in January, frustrated at the end of that first day wondering where is all my leverage going, what would I tell myself about how to do things better?

**30:13** · Well, the first thing is I need to change my mindset, my mental model for what is happening for an agent. No more prompt and prey. Instead, remember that an agent is a loop and that leaning into that loop allows it to self-correct and to write better code without human intervention.

**30:32** · Secondly, anytime I run into a mistake, don't just fix the mistake. Don't just prompt for a better uh fix, but instead try to fix the system so that the next time it doesn't make that mistake again.

**30:46** · That's at the heart of harness engineering and it's how I raise the floor on my code and it's how you all can raise the floor on your
