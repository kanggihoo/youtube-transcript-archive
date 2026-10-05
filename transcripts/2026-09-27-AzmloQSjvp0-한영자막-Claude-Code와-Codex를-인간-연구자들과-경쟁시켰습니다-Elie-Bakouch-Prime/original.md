---
title: "[한영자막] Claude Code와 Codex를 인간 연구자들과 경쟁시켰습니다 — Elie Bakouch, Prime Intellect"
author: "Tech Bridge"
site: "YouTube"
published: 2026-09-27T15:00:17-07:00
source: "https://www.youtube.com/watch?v=AzmloQSjvp0"
domain: "youtube.com"
language: "en"
description: "AI가 실제 연구 과제에 도전하면 인간 연구자의 기록을 넘어설 수 있을까요? Prime Intellect의 연구 엔지니어 Elie Bakouch가 Claude Code와 Codex를 Optimizer Speedrun에 투입해 그 과정을 공개했습니다.이번 영상에서는 두 AI 에이전트..."
word_count: 3181
---

![](https://www.youtube.com/watch?v=AzmloQSjvp0)

## Transcript

**0:00** · Hey, hi everyone. Thanks for being here.

**0:03** · Yeah, I'm super happy today to talk about automated AI research and especially all those like phone sale model perform at automated AI research task.

**0:16** · So I'm Ali. I work at Primal director as a research engineer and yeah, I will go through our work on on this subject.

**0:24** · So first I want to basically explain a bit why we are doing that and why we think it's super important to do that in the open. So first I think we we all agree that we've heard about like big labs saying that this bad thing called recursive self-improvement is coming very soon. So recursive self-improvement is like model training models without human intervention basically.

**0:54** · But we don't have any benchmark to basically quantify if this is true or not, right?

**1:00** · And even less we don't have like third-party benchmark by non-big labs to to to see if it's something coming soon or not.

**1:11** · And the other part is that we think that it's super important to understand all those model do research because we think that a lot of the scientific research that will come into the coming years will be based also on AI tools. So it's super important to understand how those model do research not just only AI research.

**1:32** · So we try to build kind of this environment to test the capabilities of the model to do so.

**1:40** · So it all started with Andrej Karpathy that's basically at fun by doing this video where he trained GPT-2 from scratch in like 90 minutes.

**1:53** · Like GPT-2 training takes like weeks and now in 2 years ago, I think, it only took like 19 minutes. So, what does it mean to reproduce GPT-2 in 19 minutes? It means that in 19 minutes, you achieve this target loss.

**2:09** · Um And yeah, and that's at this point when you have the same loss than um GPT-2, you consider that your model is somewhat of equal performance.

**2:21** · Um then what happened is that the community took this repo, uh this GitHub repo, and created another one called modded nanoGPT, and this effort was led by someone called uh Keller Jordan. And what happened is that they basically took this 19 minutes, then 45 minutes, and then now we can train like GPT-2 validation loss model in less than 2 minutes, which is, honestly, crazy. And it took like 2 years to to achieve this.

**2:51** · So, it's a very strong benchmark where uh a lot of very talented researcher donated them.

**2:58** · Um yeah, so we decided to take this environment of speedrun. So, really this is kind of a game. So, the goal of the game is to achieve this loss in the fewest in the shortest amount of time.

**3:13** · So, this is the nanoGPT one, and you can uh you don't have almost any constraints. The only constraint that you got is that you need to use the same validation and training data, right?

**3:25** · Um there is a new speedrun called the optimizer speedrun that was released uh a few months ago. And here it's slightly different because uh you can only change the optimizer uh related parameters. So, for instance, nanoGPT, you can change the architecture, uh do MoE, do uh attention, whatever.

**3:47** · Uh optimizer speedrun, you can only change like Adam to new shampoo, or whatever optimizer is your favorite.

**3:56** · Um yeah, and so this is a bit more researchy because it's less about optimizing the program to be as fast as possible, but more like finding the best method possible no matter the the the time you put into the computer, right?

**4:13** · So, um yeah. Why take speedrun as an environment for automated AI research? First, uh we think that it's a good evaluation.

**4:23** · We'll see later why.

**4:25** · Uh and this is kind of the main focus of this talk. But we also think it's probably a good training environment because it's a way to give the model a reward. So, the reward is positive if the model beat the speedrun and beat the last record, sorry, and the reward is zero or negative if it didn't manage to to do it. So, it's a good environment to train model. It's also quite fast like as you see previous record were around 2 minutes for the optimizer one. Each run take about like 15 to 20 minutes.

**4:59** · And yeah, and there is like clear rules, basically. And we also think it's like a good environment to make discovery. So, like kind of breakthrough in AI research because there is those clear rule that you can verify or not.

**5:16** · Yeah. So, yeah.

**5:19** · Um so, what we did so, the release was like about 2 months ago and there was this optimizer speedrun and we decided to basically compete with the community by launching two AI agents. So, Codex and Cloud Code.

**5:35** · Codex was like GPT-5.5 with XAI and Cloud Code was Opus 1.8 with XAI. Um and yeah, we decided to basically let the agent free on our cluster Uh and and just iterate on it. So, we have like V1, V2, V3 is just basically us stopping the agent and then restarting. V3 was like one or two day before the release because we saw that our agents no longer have the best record.

**6:04** · So, we were like, "Okay, take all the the human record in the last few week and just try to to improve upon it." And and and it worked.

**6:15** · Yeah. And we also have this novelty track where the goal is to uh beat the record with only novel ideas.

**6:24** · Um and we'd see that this this was more complex for the the models.

**6:31** · So, our honest is very simple. Honestly, we could have just replaced it with slash goal, but they they there was no slash goal at the time. So, we made our own goal.md. It's actually quite fun that we choose the same name.

**6:43** · And we had the goal.md and kind of agents.md that defined the rules. And we let the agent propose ideas and then it can submit a job with Sbatch on our Slurm cluster.

**6:58** · And basically, the way it works is that it can submit on nodes that are available, but only under a certain permission, which means that if someone want to use this node, uh the model just like cancel the job. It's called preemptible permission.

**7:13** · So, yeah. Then it measure the it read basically the training logs, then decide if it's a record or not. To validate a record, you need to basically pass a statistical threshold to make sure that it's just not seed optimization and it's just not random, right?

**7:29** · So, yeah, a few results from these experiments. The first one that was honestly very painful to work with is that code uh Claude Claude code keeps stopping every 9 or 10 hours and basically said, "Yeah, I cannot improve the record. It's too hard for me. There is no way to to go beyond it." And then I was just like, "Okay, continue, explore new direction, and just go again for 10 hours." And then say, "Yeah, I cannot \[laughter\] beat the record and so on."

**7:58** · So, basically 1/3 of the time the Claude code agent was either because I had no way to basically monitor it. And Codex totally the opposite. Just worked for all the all the time. And yeah, almost never idle, never asked for question, and and and very impressive in in that way.

**8:19** · Um We also give the option for the model to basically write a bunch of stuff into what we call a scratchpad, which is basically the active memory of the model.

**8:31** · Uh we observed that basically Codex writes a lot on the scratchpad. So, each plot that I will show kind of normalized by the number of active worker. So, this is not only about Codex working more. It's It's really different behavior.

**8:49** · So, yeah, you see that writes a lot more to to this scratchpad, to this memory.

**8:55** · And uh the shape of the like the the I don't know, the tone of the the each file was also super different. Like Claude was super excited about getting new record with a bunch of emoji and so on. And Codex was just like, "Here is what I do. Here is the decision I take. What I will do next." Like super robotic kind of.

**9:17** · Um Yeah, we also have this plot where basically we saw that Codex was uh spawning much more subagents than Claude.

**9:26** · Uh we saw that Codex burned much more token than Claude. So, I think in total it was like kind of billion of token. But it's like there is obviously this input input caching that make it it's not like 1 billion output token. Uh so yeah, we also see that Codex did a lot of compaction because it only had like 250k context window and Claude only

**9:51** · do it like one per hour and Codex is more like No, it's even less than one per hour for I mean one for the full run for Claude and Codex was like one what's 20 every one hour. So, yeah.

**10:07** · Um yeah, here is the main results. So, what this plots shows is that basically we So, in in a white, you see that the the human recall progression rate and in red, you see Claude. I mean it's supposed to be orange, but whatever. And in blue, you see Codex, right?

**10:29** · And you see that at almost every time uh Claude and Codex are better than the human recall and Claude is super good at the beginning, very very fast to achieve very good score.

**10:40** · Um yeah, and one thing that is super important is that the model have the ability to basically fetch the human recalls at any time and that's what Codex did uh that's what Claude did, sorry, because when I restarted it, basically fetch the new recall from human and improve upon it.

**10:58** · Um yeah, so the results is that uh I think at the time the best recall was like uh 2,990 step and we beat it by like uh uh 50 or 60 step for Claude and Codex was like 20 step above. So, it's I think it's both impressive and and yeah.

**11:20** · Um So, we So, this is like not released yet. This is something that we are working on currently. And basically the idea is that this This a cool experiment to do, but it lack of structure, right?

**11:34** · Uh if you want to do a real benchmark, you want to do uh multiple seed, you want to do uh yeah, proper uh thing where you you you you basically put all the model and earnest in the same condition, right? So, this is what we are working on right now, and basically um the idea is to do three different track. Uh one without any access to really like measure the capability of the models to do a research based on only the model weights knowledge. One with only archive paper.

**12:08** · And one with like full access, so it also have access to the the like the latest record by human.

**12:15** · And for this, we plan to do both uh the nano GPT track one, which is the original one, and the optimizer speed run where we we only launch uh we only constrain the the optimizer to be to be novel, basically.

**12:30** · Um yeah. So, I will present some results on the optimizer speed run.

**12:35** · Uh this is basically what we got. So, we let the agent iterate for 6 day, almost 5 days, let's say, and we see that uh Codex, Kimi, and Claude uh are super effective. So, for GLM, this is not finished run, right? So, the model is actually still iterating on our cluster right now.

**12:57** · But, we see that Claude is once again very good at it. And we see that surprisingly Kimi is also very competitive.

**13:04** · And kind of have this breakthrough around day uh four where he kind of beat Codex with a a new record, right? It's also interesting to see that uh Claude is much more like progressive in the way he it improve the record. And Kimi has really this step function where he kind of do a breakthrough and so on.

**13:25** · Uh so, this is an interesting plot because I mean, 6 days is quite a lot for an eval. Uh, uh, but you you can change this uh, axis by also the number of output token. And then kind of tell a different story because Claude in max mode consumes so much more token than Codex and uh, Kimi.

**13:44** · And you also see that Kimi is actually super efficient uh, for the number of token that's uh, uh, it used. So it's Kimi K 2.7 code.

**13:54** · Um, so yeah.

**13:55** · Uh, we also see that they have a different approach to uh, using the literature and papers. Um, so for instance like Claude is doing a lot of search on papers and actually Claude found a paper that no other model found and it actually lead to the best result. So it's kind of funny.

**14:17** · And uh, yeah.

**14:18** · Um, one of the main issue of all of this is that uh, when I when I launched this this agent and I think that's something important that I want you to kind of uh, remember for this this talk is that when I launched this this different agents, I was expecting them to come up with some crazy ideas on uh, optimizer that's like no one have discovered. But honestly it wasn't the case. Uh, they did some clever trick where basically they combine different papers.

**14:51** · Uh, they kind of do plus one improvement over a bunch of method. But there was really like no novel optimizer or mechanism that was uh, coming from those model. And I think that's kind of telling that even on something that is not simple but I'd say that it's kind of accessible for people, right? For like human researcher uh, spending like uh, days and weeks for the the model like cannot like find new uh, optimizer and mechanism.

**15:23** · So, we believe that there is a way to basically make it more um make it better for discovery instead of evaluation. And this is coming from uh this is very inspired from Alpha Evolve by Google and also a bunch of papers that have been released since then. It's kind of this multi-agent system that interact together. Uh bunch of generator, uh you have closed model, but you also have open-source model here that are super effective for the cost, right?

**15:54** · Uh they can suggest ideas, then you run the speed run, so you get the reward, then you have a judge that basically give a quality feedback. Can also be like the judge also have this taste. You can kind of have like the judge have a taste about the the method if it's good or not, uh if it's outside the loop.

**16:15** · And then you can uh basically decide which method you want to scale to a larger number of parameters and uh number of token.

**16:25** · Um so, this is kind of the scale part of the speed run because some a lot of method in the the speed run community, uh people are often saying that they doesn't work at large scale. So, I think it's very important to also put a scale elements in this loop. Uh and I think also that uh human are super useful here to basically judge the ID of agents, steer them steer them in the right direction, and so on.

**16:53** · Um yeah, so we didn't try it yet. I mean, we are kind of trying it right now, and uh we hope that this will lead to to to new discovery in AI research at least. And also a way is that you can define multiple speed run. So, this is the next slide. Uh if you like it's from Seb Bank slides, but if you if you don't have the reference, good for you. Means that that you're not too online.

**17:19** · But the idea is that by changing the objective and the constraints of the speedrun, you can basically create a lot of diversity and constrain the model to go into a certain direction.

**17:31** · And yeah, and make those discovery.

**17:35** · So at Timing the Lake, we're doing a bunch of stuff in this direction.

**17:39** · There is a bunch of stuff here that we I mean most of it we didn't release yet.

**17:44** · But we're working on GPU sandboxing to allow model to iterate into sandbox because you need GPU sandbox for this kind of stuff. We are working on own agents that are very efficient for like LM framework. So it means like you have a file system and you can write information, read from it. And you also do like this programmatic tool coding thing. We're also training a model to be good at it on top of like open source model.

**18:13** · And the thing that we already released is that we have the set of library and product called Verifier Primary or State Training where you can basically train, evaluate any environments on any honest and the model that you can train can be like GN512 which is very big and yeah, we have like we work a lot on making those library very efficient to to ship the best quality for our clients.

**18:39** · Yeah.

**18:41** · I mean yeah, super excited about this domain. Once again, I think it's super important to have a part of like this recursive self-improvement to happen to happen in the open because there is actually a lot of people working that are not on big labs. So you need to basically yeah, make it easy for people to understand all those model work to do research and so on. So that's kind of our goal and yeah, thanks a lot.
