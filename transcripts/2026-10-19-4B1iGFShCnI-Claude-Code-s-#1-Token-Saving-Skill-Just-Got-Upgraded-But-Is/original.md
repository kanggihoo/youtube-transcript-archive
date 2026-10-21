---
title: "Claude Code's #1 Token Saving Skill Just Got Upgraded (But Is It BS?)"
author: "Chase AI"
site: "YouTube"
published: 2026-10-19T13:58:39-07:00
source: "https://www.youtube.com/watch?v=4B1iGFShCnI"
domain: "youtube.com"
language: "en"
description: "⚡Master Claude Code + Codex: https://www.skool.com/chase-ai🔥FREE community: https://www.skool.com/chase-ai-community💻Get 1:1 help: https://chaseai.ioPonyta..."
word_count: 3471
---

![](https://www.youtube.com/watch?v=4B1iGFShCnI)

## Transcript

### Intro

**0:00** · Ponytail is one of the most popular Claude code skills on the planet right now, and for good reason. It claims that it is able to maintain Claude's performance while having it write half the code while being 26% cheaper and 41% faster. And with its version 5 update, it has just been given a full suite of new features. So, what can you expect from this new update? And more importantly, are these ponytail claims actually legit? Do these numbers hold up to independent testing?

**0:27** · Or is this just an overengineered repo that we could get rid of completely and replace with just a single line in our claw.md?

**0:38** · Furthermore, even if these numbers are true, is Ponytail actually giving us worse outputs? Well, I put all of these claims to the test across 700 different Claude Code sessions. And today, we're going to go over all of them so you can understand if Ponytail makes sense for you. So, Ponytail is approaching 170,000 stars. It just released version five.

### Ponytail, How It Works

**0:59** · And the premise of this tool is relatively simple. The idea is that Claude is naturally verbose. And if we instead give it some rules that tell it, hey, I only want you to build what is necessary, well, we're going to get outputs that are just as good, but it's going to be cheaper and it's faster. And the benchmarks and numbers that Ponytail puts forth tend to back up this claim.

**1:19** · When we look at things like lines of code, output tokens, cost, and time, well, we see huge drops across the board when we use this skill. An example Ponytail gives is when you ask your AI agent to add a date picker to the front end of the application you're building.

**1:34** · Without Ponytail, it's going to want to build this from the ground up and it's going to use 335 lines of code to do so.

**1:40** · But with Ponytail, it understands the repo. It knows that there is a browser that already has its own date picker within this project. So it just takes 10 lines of code. It's sort of this logic of using components that already exist instead of building from the ground up each and every time that sort of forms the backbone of ponytail. And under the hood, it's asking seven questions every single time you ask it to build a feature. Everything from does this need to exist all the way to can it be one line.

**2:07** · Only after it goes through all those questions will it actually create something that works and it's going to be the minimum code needed to make it work. But do these numbers ultimately hold up to scrutiny? Well, luckily for us, Ponytail actually gives us the exact tests they ran to find these numbers.

**2:25** · So, I'll show you what our benchmark results looked like. But before that, let's talk about what is new in this version 5. So, there were five big changes in this new version. Let's run through them very quickly. The first one is it just got a lot tighter. The rules, the actual words associated with that got cut down from just under,00 to 600 words. And in terms of the output, it tended to run about 10% cheaper than version 4. Number two, Ponytail now maps the whole change before it writes any code.

**2:56** · So before you write, it's telling Claw to read the task and the code it touches. It lists every place that the change is going to reach. Number three, Ponytail now has to say what it has skipped, what it didn't check, or what it thinks is risky. In version four, this was optional. So, it pretty much said, "Hey, here's the change we're going to make." Now, it's actually saying like, "Hey, here's the change we're going to make, but here's sort of the stuff I skipped or didn't think was really necessary to change." Now, change number four has to do with ponytail review and ponytail audit.

**3:25** · Before in version 4, it really just flagged over engineering. Things like bugs and security were out of scope. That is no longer the case. In version five, it's looking for bugs. It's looking at security, missing tests, speed, everything. So, it just has a much larger scope. And number five, we've added a repo map as well as a live band.

**3:46** · So this is what you literally see inside of Claude above your prompt window. So it shows you the cost, the tokens, the Asian time, the reuse, the tests, and we have the ability to essentially change whether ponytail is off, whether in light mode, full or ultra. So you can see live how much this is actually saving you. And they've implemented a repo map. So at the start of every session, it lists all your existing functions at the start. So Claude reuses them. This essentially lets it be faster in terms of looking at what it needs to change. So those are the big five changes.

**4:17** · Got stuff related to the UI, but a lot of it has to do with sort of just cutting down I think the bloat because one of the kind of knocks on this skill has been the bloat and in general in terms of the numbers it has resulted in cheaper outputs. Next I want to talk about the test and whether these numbers actually held up in real life.

**4:35** · But before we do that a quick word from today's sponsor, me. So, inside of Chase AI plus, I have just released a brand new Cloud Code master class, and it is the number one place to go from zero to AI dev, no matter your technical background. So, if you're someone who is trying to master Claude Code, but has no idea where to begin, and you don't consider yourself technical, this is where you want to be. You can find a link to it down in the pin comment. Hope to see you there.

### Testing The Benchmarks

**4:59** · So the benchmarks half the amount of code quicker faster the numbers come from certain tests and they give us these tests inside of the repo so we can take a look at it ourselves and that's exactly what I did and based on those tests these numbers held up in terms of less code ponytail 5 versus no skill at all we actually got better numbers in certain cases so they claimed it would result in 53% less code for us it was 61% it was 24% cheaper for us versus 26 35% faster versus 41 And

**5:29** · overall, it was about 11% cheaper than version 4.13.

**5:34** · So, the numbers on the surface did hold up. But even though the benchmark numbers hold up, that doesn't answer the question of do we need Ponytail to even do any of this? Is this a completely overengineered solution to a problem? If you even think it's a problem that could be solved by simply a oneliner in agents.mmd that says something like follow Yagy principles and prefer oneliner solutions. Well, I tested that.

**6:02** · So, we had ponytail run some tests and then I ran the same tests with just a single prompt inside of the agents.md instead of ponytail. It just said follow Yagy principles and Yagy just means you aren't going to need it. pretty much saying we're not going to implement features that aren't spec and prefer oneliner solutions. So 590 words of rules, hooks, a repo map, all the scaffolding of ponytail versus seven words. Who wins? Well, it turns out seven words actually cut more code.

**6:36** · Ponytail cut 60%, seven words cut 72%, and in terms of cost, ponytail cut 24%, and our sevenword prompt cut 38%.

**6:47** · So, if we are looking just at cost and we're looking just at speed and the amount of code being written, this prompt actually wins. And in fact, if you go on places like X or Reddit where they talk about ponytail, you see the sentiment a lot that ponytail is kind of nonsense. I just give it some sort of like be brief prompt and actually we're just as good.

**7:07** · Like that we don't need ponytail whatsoever. and you see numbers like this and that seems to sort of like prove that theory like this is just kind of like you know overengineered BS but when we look a little bit deeper it's a little more nuanced. I then pitted this seven-word prompt against ponytail across 24 build me x tests. So like build me a calculator, build me a dashboard, build me this calendar app across 24 different things. And here's what we saw in the sevenword prompt versus ponytail.

**7:37** · First of all, in two instances, the sevenword prompt introduced bugs that has actually lose our data. Ponytail had zero like data loss bugs in terms of leaving a test behind. Ponytail in 24 out of 24 instances left tests in our little prompt. It was only 14 out of 24. In terms of actually meeting the spec that we gave it for each test only occurred in 89% of cases for the sevenword prompt and for ponytail 95% of the time it actually met the prompt for core features 97 versus 100.

**8:09** · And then did it actually tell us what it skipped? Well only half the time with this prompt and with ponytail 70% of the time it told us that it skipped certain things. So, is this seven-word prompt thing actually as good as ponytail? Is ponytail completely overengineered? Kind of just like nonsense? I would argue not really.

**8:34** · A lot of the fluff we see with ponytail is related to these guardrails. But that doesn't answer the question of whether ponytail is actually causing claw to produce worse code. We're cutting half of the code on our outputs. And yeah, it's faster and it's cheaper, but is it still good? So that's what I attempted to find out. I gave all these versions.

**8:55** · So we had plain claw ponytail 5 and our sevenword prompt. I gave them 351 different coding jobs and each job told it to create something and then I would have a blind auditor take a look at what they created and see if it worked when we gave it like weird inputs. They pretty much all passed all the tests. I mean, it's still Opus 5.5 running in the background, but we did have all of them fail on one particular task where we told it, hey, I want you to email create something where we can email every subscriber without showing their addresses. What they were supposed to do is essentially just BCC it.

**9:25** · And in this case, plain claw failed two out of three attempts. Ponytail failed one out of three and then older ponytail as well as the seven-word prompt failed three out of three. So, in this particular instance, in all these tests, ponytail versus plain claw, like they were neck and neck. They pretty much worked just as well as one another. I then gave him an even more difficult exam with a 145 different sort of like trick input type scenarios. Plain claw knocked it out of the park, 100%, ponytail 59.5, and the seven word prompt was at 98.4.

**9:58** · So, pretty close. So, if all those tests we've run and I've shown you so far are to be believed and we take them at face value, is ponytail not an obvious install? It matches normal claw, yet now it's quicker and it's cheaper. Well, this again is where some of the nuance comes in because I think the answer is maybe probably not. So, in these tests, which is where I really think you begin to see where ponytail kind of falls behind normal claude, you start to see this scenario.

**10:29** · And the scenario is if I give Claude a prompt that is very specific in terms of its specs. Like this is a very very detailed PRD. I want you to do A B CDE E F and G. Ponytail is great. It's going to knock out those specs and it's going to do it in a very precise succinct manner. Yet if I give Claude a prompt that is a bit more ambiguous like build me a landing page.

**10:50** · I want some design, you know, some design elements. It's not as obvious what I necessarily want. And I as the user am sort of expecting Claude to fill in the gaps, which is something Opus 5.5 is really good at. You can give Opus 5.5 a pretty mediocre prompt and it just like knows what to do. It'll go out and do research. It'll figure out best practices and it will give you a ton of nice to haves. If you have Claude with ponytail, it doesn't really do that.

**11:16** · Ponytail is kind of restricting Claude in that sense where it's just going to do what you told it. And for many people, that isn't great. In fact, it's actually a huge problem and one of the best parts again of Opus 5.5, its ability to sort of like into it what you want. And I think that really comes into play when we look at it in sort of front-end design stuff. So, I had them all create a bunch of different things like landing pages, little dashboards, apps, and you start to see what is missing when we look at things like ponytail, right?

**11:44** · I had it look at plain claw, ponytail 5, a seven-word prompt, and I even did something where I had ponytail created. And then I also added, you know, make sure you polish it. I then had a grader take a look at everything that was created and it sort of divided the features into two parts.

**12:01** · The musthaves and the nice to haves. And basically playing Claude gave us 82% of like these extra nice to have things.

**12:09** · Ponytail 41%, the seven-word prompt 46, and even with this polish it prompt 63%.

**12:16** · Oh, and by the way, when I told it to polish it, ponytail ended up being more expensive. A good example is kind of what you see here when I told it to, you know, make a pricing page for this fake app flowes and I wanted to do a free pro and team version. You see here over here on the left we have plane claude. It includes things like a navbar, you know, pretty quote unquote AI slot, but there are a lot of features here like shows me like the, you know, compare plans, frequently asked questions, and it continues on and on. All it's really missing is a features section.

**12:43** · Yet that same prompt when I gave it to Ponytail 5, what did we get back? just this no navbar, no imagery, no FAQ, no call to action, no comparison table, no merely monthly or yearly toggle, right? All these things you would kind of expect to have when you give a prompt like that yet because it wasn't specified.

**13:04** · Ponytail was like, nah, we don't need to do that. We see the same sort of thing with our sevenword prompt where just like, hey, onelin claw.md, you know, follow Yagny principles, oneline solutions. And then at the end, if you're like, hey, well, what if I just tell ponytail polish it, give it give it these extra features. Well, still kind of lacking substance. We're missing all of these things and 50 cents, right? 209 lines of code versus 32 cents with plain claw, right? I think that's a huge problem.

**13:33** · And we see this pattern repeated over and over again with these sort of application and front-end design sort of problems. And so what you have to think about when you ask yourself, should I be using ponytail is like what are your use cases? Are you somebody who is always going to claude with a very detailed, very planned out product requirements document, very planned out prompt that spells out exactly what you want each and every time?

### Final Verdict

**13:57** · If that's you, well, maybe Ponytail 5 makes sense because it's going to do a great job in that like very, you know, guard rail, like very, you know, planned out scenario. But if you're like I think most people and you're kind of expecting Claude to fill in a lot of the gaps and perhaps you're working in domains where you aren't necessarily a subject matter expert and you're like here's kind of my end state. I don't know exactly how I want to get from point A to point B. I'm kind of hoping you can help me with that Claude.

**14:27** · I don't think Ponytail 5 makes a lot of sense. On top of that, and we didn't really touch on this much here, is like ponytail 5 also isn't great if we are trying to do very specific minute changes. oftentimes if you're telling it to fix like one specific problem, again we're being very surgical, it can actually cost you more and take more time by virtue of us loading all of Ponytail 5 into the context window versus just letting Claw do its thing.

**14:54** · So, you know, I think when we look at this at a in a big picture sense, like all these tests, all these things, yeah, the numbers hold up. Like what Ponytail is claiming is totally true, but there's a lot of nuance in terms of what you're actually doing. And I don't think it is reflected very well in a lot of the benchmarks that are put forward.

**15:14** · So, if you're that guy who goes into Claude and you know exactly what you want, exactly how you want it kind of done, go nuts. crush it with ponytail.

**15:24** · If that's not you, and I don't think that's most people, I don't know if it really makes sense. But like anything, I suggest you test it out for yourself at a project level. It might be the case that the things you're doing actually do make sense with ponytail. So, just test it on some projects. You don't have to install this globally. You can install it on one simple project. Let it go nuts. See what you think. But I don't think this is a onesizefitsall skill that we should just take at face value when it comes to the numbers and benchmarks and think that this is going to improve everything we do.

**15:55** · So hope that sheds some light on sort of the nuance of ponytail. I think we should always take some of these skills I think with a grain of salt that are like, "Oh, hey, I I I solved clawed code. I I I figured out what no one in Anthropic could figure out. I could figure out how to give it, you know, it's going to give us half the code. It's going to be faster. It's going to be cheaper. It's gonna use less tokens. No one Anthropic could figure it out. I I could maybe that was the case when Claude Code first came out.

**16:25** · I feel like if it was this easy to solve these problems, they probably would have done it that way.

**16:33** · That's just my take. I'm sure there's people there's always the idiot conspiracy theorist who's like, "Well, you know that you're you're paying them in tokens. Why would they ever want it to be more efficient?" Like I think that's a pretty poor argument because if that was really the case, why doesn't Codeex do it? Why doesn't any of these other models have something like this?

**16:48** · Like if it was this simple and it was this much of like a solve across the board, it would just be a part of the program. But that's just my take. So as always, let me know what you think. Make sure to check out Chase Plus if you want to get your hands on my Cloud Code Masterass. And besides that, I'll see you
