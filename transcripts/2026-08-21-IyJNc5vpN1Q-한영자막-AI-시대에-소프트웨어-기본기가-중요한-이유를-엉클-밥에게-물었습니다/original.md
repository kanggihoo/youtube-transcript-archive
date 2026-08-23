---
title: "[한영자막] AI 시대에 소프트웨어 기본기가 중요한 이유를 엉클 밥에게 물었습니다"
author: "Tech Bridge"
site: "YouTube"
published: 2026-08-21T02:00:31-07:00
source: "https://www.youtube.com/watch?v=IyJNc5vpN1Q"
domain: "youtube.com"
language: "en"
description: "'클린 코드(Clean Code)'의 저자 로버트 C. 마틴(Uncle Bob)이 AI 에이전트 시대에 소프트웨어 기본기가 왜 여전히 중요한지, 그리고 에이전트를 실전 개발에서 안전하게 활용하는 자동화 검증 파이프라인에 대해 맷 포콕과 심층 라이브 대담을 나눴습니다.📌 주요 내용..."
word_count: 10421
---

![](https://www.youtube.com/watch?v=IyJNc5vpN1Q)

## Transcript

**0:00** · I've got a treat for you today. I've got someone who I've been wanting to speak to for a while. Someone who has been really into um I mean software for as long as I've been a developer, much longer than I've been a developer, and someone who's now making his mark on the agent space. We have uh Uncle Bob Martin live and in his bathrobe ready to throw down. \[laughter\] Uncle Bob, hello. Welcome.

**0:26** · Hello and thank you. \[laughter\] Good to be here.

**0:30** · It's great. It's great to have you. It's great to have you. Um, for folks who don't know the bathrobe thing specifically, we should probably caveat that. What's What's going on there? And why is the bathrobe become a important part of your character?

**0:43** · I I it happened I think two years ago. I was on my front porch in my bathrobe. It was 6:00 in the morning and and I started thinking about how awful SQL was because of all the SQL injections and what you know makes no sense to have a textual language as your database access um for security reasons. And I I was in my bathroom at the time and I just pulled out my phone and I ranted and that became the morning bathrobe rant.

**1:12** · Apparently it was popular so I did it a few more times. So, is this the mood that you've come here today in? Is this is this the uncle \[laughter\] Uncle Bob and it's early in the morning. I haven't had my coffee and just don't bother me. \[laughter\] 6 in the morning thinking about sequel, man. 6 in the morning. Come on.

**1:30** · I'm done with this now. It's actually 10 in the morning. \[laughter\] The bathroom off. I had coffee. I'm on my first Diet Coke, so I'm fine.

**1:40** · Very good. Okay. Well, now the polo shirt is out. Um what's what's the Uncle Bob's story like for there are probably some folks most of my folks are developers but some of my folks are not developers as well in this audience. How do we introduce Uncle Bob the phenomenon that is Uncle Bob to especially non-developers.

**1:59** · Phenomenon. I don't know about that. Um I'm a programmer. I've been a programmer for a very long time over half a century at this point. uh started it. My first program was in 1964 and I was 12. \[laughter\] The program was was uh a little model computer that my mother had bought me for my 12th birthday and programmed it by putting little white tubes on pegs.

**2:31** · It was essentially a three-bit finite state machine, but it fascinated the hell out of me at the age of 12.

**2:38** · Okay. So, you're 12 years old. How do we get to uh 50 years later, Uncle Bob doing his thing now?

**2:44** · Yeah, a little more than 50. Um, let's see. Well, I I you know, I just started learning as much as I could about programming. My father bought me a book about Forran, a book about Cobalt, book about PL1. I read them all. Had no machines to execute anything on, so I wrote programs on paper and executed them in my head. got a job uh um writing a little bit of code at the age of 16.

**3:11** · Um but that was a temporary thing. Then I got a real job at the age of 18 and I've been a programmer ever since.

**3:17** · So you've been in the trenches for a long time and you wrote rather an important book I think.

**3:23** · A few I one of them I think was important. I've written a few more but uh yeah one of them seemed to take off. That was a nice one.

**3:30** · Yeah. and um uh the cleanliness of code if I remember correctly or yeah clean.

**3:37** · Yeah. Yeah. Yeah.

**3:38** · Here's the second edition. This is this is the second edition. But you know I mean it's it's maybe the most um certainly when I have conversations about good books. It's it's uh for software engineering. It's the one that most often gets quoted back at me. Like it is incredibly popular, incredibly influential. So, and that's why I'm interested to talk to you today because you've had this big influence in like the pre-ai era and you've been working in the pre-AII era for almost as long as it's existed virtually.

**4:09** · Now, how have things changed for you, Uncle Bob, now that AI is out there and is a thing? Um, so this took me a little by surprise around December of of last year, Christmas time, and I'm just fiddling around and I'd already been playing with, you know, Chachi PT and a little bit of Gac and a little bit of this and a little bit of that. And I hadn't been real impressed.

**4:41** · Uh, and then I went through a period where I thought, well, maybe these things are a little more interesting than I thought. And I I got an agent.

**4:50** · First agent I got I think was um Grock early Grock. It was an early Grock one and I just asked it to write me some code and it did a kind of a poor job but it wrote the code and I was in the middle of a project at the time. So I said, "Well, maybe this thing can help me with this project." And I started having it work with me on the project and I was cleaning up after it all the time just, you know, it was always making a mess. It was always leaving little dog doo behind.

**5:17** · And I thought, you know, it's it's interesting because it's fast, but it's frustrating because it makes me slow.

**5:31** · Yep.

**5:31** · And then I started thinking, well, wait a minute, because it's fast, it can do things that I cannot. So in the uh very early 2000s there were a couple of innovations that that caught me. I thought oo these are good ideas but they were completely impractical. One of them was called um uh crap. Um it was uh it's an acronym.

**5:58** · What can I say? But it's it was a way to take uh code coverage. So you would you would run code coverage, test coverage over your code and you'd also measure the cyclatic complexity of every function and you would mix those two in a complicated formula and out would come a score and the score was a measure of how crappy your function was. And uh way back in the early 2000s, I thought this is a great idea. And I ran it over a big project I was working on.

**6:29** · And yeah, there was a bunch of crappy functions, but then it took me forever to go through every one of those functions and try and fix them and rewrite the tests and but and it was all working. So I didn't think I really could afford to do that. So although it was interesting, I kind of set it aside. And another one of those um innovations was called mutation testing.

**6:52** · And this this one really caught my attention, too, because in mutation testing, you you have a little a little program that runs through your source code and flips negative signs to positive signs and less than signs to greater signs and equal signs to not equal signs and other things as well.

**7:10** · And for each of those flips, it runs your entire test suite and expects the test suite to fail because obviously they changed something significant. And if it doesn't fail, well, that's a surviving mutant and it must be killed.

**7:25** · Now, I ran this again over that same project right around the year 2000. And I had to run it overnight because the test suite ran for four minutes and I was running it maybe several hundred times. Uh, but it came up with a bunch of surviving mutants which I was able to fix. But once again, it was impractical.

**7:45** · I could not put that as part of a a normal build scenario. And so I'm sitting there last December or maybe it was January by this time and I'm thinking,"Well, wait a minute. These guys are fast and they don't care how boring the work is and they will do what I tell them to do.

**8:04** · So why don't you run crap over everything you've just done and it would run crap and then it would it would clean up the code." And I was watching it do this. I think, well, that's pretty cool. And why don't you run mutation testing, too? and it would run the mutation testing. Maybe it took it 30 minutes instead of an overnight run and then it would plug all the holes and make sure there were tests covering everything. I thought, you know, this might be a way to clean up the dog dew.

**8:32** · These things leave a lot of deus and fluff behind, but maybe this is a good way to clean up all the dog. So I I continued were on this path of adding more tools and continuing to work with these agents and I got them to a place where they were doing a pretty good job. So nowadays my nowadays my principle is, you know, I will set the agents working.

**8:56** · I will have them run these tools and I'm going to work very hard to get it into a situation where I don't have to look at the code at all.

**9:06** · I can trust what they do. And now I do other things to verify that the code is still decent. You know, I will look at the crap scores and make sure that they're low. And I will I will do spot checks on the code from time to time. And I have a whole bunch of other tests that I run. But overall, that's my goal.

**9:23** · If these things are fast and and they are, and if I can constrain them to do a good job, then I am not going to impose my slowness upon them. And my bonus is reviewing the code or inspecting the code at some kind of level of detail. They are fast with code. I am slow with code. So I'm going to let them have the code and I'm going to deal with the stuff around that to make sure it's all okay. So far so good.

**9:55** · So your goal is to start pulling yourself away from the code, away from human review to construct this scaffolding around the code so that you don't have to interact with it much yourself and so that the agent is constrained as much as possible in as tight a straight jacket as possible so that it can't make a mistake.

**10:18** · I think there's so there's an assumption there that I want to touch on first which is that the word dog do right doesn't sound good in in a British accent dog do you know so so what's why is why is dog do bad why is bad code bad like why why do we care about that because these things are so fast and they can move so quickly why do we care why are we bothering with all of this harness can't we push through until the bugs just disappear.

**10:52** · One of the things I noticed really early on, like Decemberish time frame, was that I would be I'd be working with the the uh like this little Grock agent and I'd have it do something and it would leave all this mess around and instead of cleaning the mess, I would have it do the next thing and it would leave even more mess around and then I would have it do the next thing. And I noticed it slowing down and I noticed it having having uh difficulty.

**11:16** · It would it would get into a mode where it would change one thing but inadvertently break another and then it would have to fix that but inadvertently break another.

**11:27** · Started going around in circles and I thought okay these agents they may be they may be fast and they be may be relatively smart but they are as subject as humans are to messy code. Now maybe not as subject maybe there's a difference in threshold but the threshold is still there. The code can get messy enough that the agents cannot deal with it any any longer and then they'll just start to spin and make a mess even worse and and be unable I've actually had them just give up.

**11:59** · One agent one time said I just can't deal with this anymore. parap I'm paraphrasing it didn't use those words but that was obviously what was going on.

**12:11** · Yeah.

**12:11** · So your response to that then is how can I clean up the crap? And I think when most people encounter that, they start loading the agent with instructions, right? They start saying, "Okay, I'm going to pour in information into the agent that's doing the implementation, right? I'm going to pile in on claw.md or agents.mmd and every time I see something bad, I'm going to use an instruction instead of what you're doing where it's a deterministic mechanism."

**12:40** · So you're using automated checks whereas a lot of other people are using in my terminology steering right they're trying to steer it. So why didn't you are you doing any steering or like how does that work in your mindset?

**12:55** · So initially I started with that I said you know I my early prompts were here's how you do test-driven development. Here's how you do clean code. Here's what your code should look like. You should follow all these rules. And you know, you come up with eventually a document that's five or 10 pages long describing all the good things about code. I I suppose I could have fed the whole dog on book into it.

**13:18** · Mhm.

**13:18** · But what I noticed was that the agents, the the models, whatever you want to call them, um they treat those rules in the uh Pirates of the Caribbean sense. They're more like guidelines. you know, might follow that.

**13:36** · Can I just can I just credit you? That's exactly the metaphor that came into my head as well. So, I'm glad we're aligned there. \[laughter\] Yeah. Well, so they they definitely will soften and there's technical reasons behind this. I did a not not a lot of research, but some research into why the models behave this way. And it turns out that there's this phenomenon known as lost in the middle.

**13:58** · So as the context window builds up inside the model, the stuff at the very beginning and the stuff at the very end have more prominence than the stuff in the middle uh for technical reasons. But once again, the the agent will ignore the stuff in the middle. And anything you say at the very beginning is going to get shoved into the middle if it's long, right?

**14:26** · So maybe the first three sentences you put at the beginning will remain as priority, but the 50th and the 80th sentence in there, they're gone. They're just in the middle somewhere. And the poor agent is trying to deal with this massive context that's ever growing, ever growing. And it's trying to pull the important bits out and the stuff in the middle is just gone. So deterministic tools don't disappear that way.

**14:56** · The the key that I think with agents, and this is really hard to do, the key with agents is to trim that initial prompt down to its absolute minimum so that you can get as much of it as possible into its priority.

**15:12** · Yeah.

**15:12** · Right. And then do deterministic tools after the fact.

**15:16** · Totally. I refer to this as like the smart zone and the dumb zone of the uh context window. It's not my term. That's Dex's term. I install it and it's very very good which is especially at the early part of the context window like the first 150k tokens. It's pretty smart but then as you go along then the attention relationships in the transformer get really strained. It's really diluted. It's like everyone's shouting. Each token is shouting in a crowded room and the room's getting more crowded, right? You can't hear the signal for the noise. That that's that totally rings true for me.

**15:45** · So you've got then you sort of rejected steering and you sort of started going back to some old techniques in automated checks. Now it sounds like then because those checks don't go into the context window in the same way that steering instructions do, you can kind of just layer those on, right? And layer them up and up and up.

**16:07** · So if you're using a language with strong types and like tests and like how does that picture look to you? Is there ever too much when it comes to automated checks?

**16:18** · That's one of the things that I'm working very hard to figure out. Obviously, there has to be a case where there's too much, right? You eventually you will slow the agents down to the point where they're slower than humans. And at that point, you've lost the game.

**16:31** · Why do it?

**16:33** · Um, but as long as you can keep the margin of productivity higher than a human, you're still you're still ahead of the game. And and from what I've seen so far, I you know, I can get that margin, you know, like a factor of two or three or four, right? They they'll still go pretty fast. Now, I'm I'm slowing them down a lot. When when uh when you use these deterministic tools, what you are really doing is you're putting them into a loop. Lots of people like to talk about loops nowadays.

**17:02** · You're putting them into a loop and you're saying, "Okay, you must you must change the code until this tool says that it's okay." And now the agent is going around and around and around.

**17:13** · Okay, I've got to do this. I've got to do that. I've got to I've got to add more tests over here. I've got to cut the cyclatic complexity. I've got to split these functions apart. Got to do all this work. And it takes it a while to do all that until it gets it into conformance. So you're you're you are sacrificing productivity for higher quality.

**17:33** · And at some point that's got to give way, but I haven't found the end point of that yet.

**17:39** · So now I'm in the midst of trying to get multiple agents talking to each other and handing off to each other so that one guy does one thing and the next one reviews it and the next one tests it and the next one hardens it and so on and there's communication overhead like crazy in that and yet it's still faster by a large token than a human.

**18:01** · Let's talk about that. Let's talk about multi- aent systems because that's I find that super fascinating. I have always had a bit of a and I think this might be something something where we differ which is I've always had a bit of a suspicion of like people who say uh you know I've I've got rid of all my workforce I now have a hundred agents every one of them has a different role they all talk to each other they've got their own email accounts all that all that rubbish you know um and so for me

**18:29** · what's always worked but okay I sort of make an exception when it comes to implementation and then view right and I think the benefit there is not having two very specialized agents it's having okay you do the implementation and it's kind of like a red green refactor approach which is the implement all it

**18:48** · has to do is just like write the bad tests and then make it work it doesn't have to make it beautiful and then the reviewer comes in it doesn't have to do the exploration because it's already got the diff from the implementer it knows exactly what it's reviewing and then you can pile in quite a lot more steering instructions in there because the task is much less constrained. So I'm really interested in your take on that on like what the implementer does, what the reviewer does and what these other hardener agents. I've not experimented with that. Give me more on that.

**19:17** · So there's two advantages to having multiple agents like this. The one is that you can run them in parallel. So you could have, you know, three coders running at the same time. And my little laptop can support a lot more than three. Um, the other advantage is that when you focus the agents down to a single task, you're keeping the context window under control. The lost in the middle problem becomes much less of a problem.

**19:44** · So, you can pile a few more, not a lot more, but a few more rules up at the top and they'll tend to follow them better. You can also uh set up a a system where the agents um are born, do the task and die so that the next one comes in with a clean context window.

**20:03** · \[clears throat\] So those are the advantages. The disadvantages are that the startup times are high, right? So an agent takes, you know, 10 15 seconds to even start up uh and then it's got to figure out its whole context all over again. So there's that that particular startup time as well. I like to focus the task as much as I can. So I will run a specifier. The job of the specifier is to take a a human written document and turn it into a uh a girkin and a QA a QA uh procedure.

**20:37** · Girkin is you know given when then stuff. It's a high level acceptance test. Uh, and a QA procedure is a essentially a system test. You know, you run the system through the UI with a with a QA procedure. And I have them write it from a human's point of view. You are a human. You are operating this system at the UI. You must prove that the system works.

**21:04** · And I will produce those two documents, Girkin documents, QA documents. And then those feed into a coder. The coder's job is to write unit tests. and the code that implements the described uh story and uh also get the girkin working.

**21:20** · So it has to do that and then that gets fed over once that's working the coder will work on that for a little while that gets fed into a cleaner and the cleaner's job is to run crap analysis and just general code review clean up whatever mess the implement made because the implement will have made a horrible mess by that point and then I have it go from there to a hardener the hardener is the guy who runs the mutation testing and he's absolutely merciless right?

**21:53** · \[laughter\] It's going to mutate it and it's going to have 100% coverage and every equal sign and every less it's going to do that work which takes a good long time.

**22:06** · uh and it pops out the end and then it goes into a QA agent and the QA agent takes the the written QA document, turns it into an executable script that manipulates the system and comes up with a deterministic result. And and if you can get through all of that, you've got a pretty pretty working program. I' I've had a lot of success with this. it uh if I if I give it a task that takes a single agent five minutes to complete with questionable results.

**22:39** · Uh this will take it about an hour.

**22:44** · It'll take about an hour to go through all that which is still a benefit because you know a person would take about a half a day. So maybe I've got a, you know, a factor of four, factor of five improvement in productivity and very high quality, much more quality than the human would ever put into it.

**23:00** · And it's not only that, but you're you're saving productivity or or you're spending productivity early to gain it later, right? This is an investment in your own codebase. Yeah. What I found really interesting about that is this is something I've been thinking about recently is it's not only the context window that you're manipulating.

**23:16** · You're also there's this idea of a trajectory of a context window, right, of a session where if you get the agent to do one thing and you steer it in a certain way, then everything that follows in that same session, that same context window will continue following that trajectory.

**23:35** · So if you get it to say, "Okay, maybe we should test the UI here." Then every single time it will test the UI again, no matter how many changes you get it to make, and the only way to clear the trajectory is to clear the context window, right? So if you're an implement agent and you're just trying to get it working, then your trajectory is kind of it's not quite as harsh as the one who's trying to make sure you have a 100% coverage. And I found that really interesting. Is that something you does that click with your mental model as well?

**24:03** · Yeah, it certainly does. there's a a pretty well-known effect with these models and it happens with people who aren't programmers, right? So, you're talking to a model about um oh, I don't know what what's the best coffee to have and how do you how do you brew it nicely? And you're having this nice little conversation with the agent about this or with the model about this and then somebody walks by and they happen to be talking about the latest soap opera that they saw on television and that gets into the context window. You didn't put it there.

**24:34** · This guy walking by put it in there. But then from that point on all the coffee references have to do with the soap opera, right? The the the model doesn't know. It can't differentiate. So your idea of trajectory is pretty good, right? As long as you can keep the direction of the model unconfused. It knows the direction it's going in. Everything in the context window is consistent.

**25:00** · then it's not going to have these crazy hallucinations that that people often deal with or even just mis even just misalignment right like halluc I think hallucination is always a danger right like whether it's you know hallucination context you gave it whatever like it's an sort of an accepted danger and your approach of this kind of gauntlet of different agents slamming horrendous stuff is sort of a is a great way of taking out of that. So, okay, you've talked a lot about the implementation phase, and we can get back to that later, too.

**25:30** · What I'm also interested in is what planning do you do up front and especially how are you thinking about the internal structure of your code bases? Because having a good test suite, right, I mean, I'm interested in what you think here.

**25:49** · Having a good test suite is good, right?

**25:51** · Having mutation testing, all that stuff is good. But if you've got badly designed APIs, if you've got badly shaped modules, how does that interact with all of this automated checks and stuff like how much are you thinking about that?

**26:06** · So up to the last month or so, what I was doing there was doing that part manually. So I would I would have the agents build me up a nice thing and then I would interrogate the agents. And this was manual but but still using the agents, right? I'd interrogate the agents. What's the structure here? How how does this module interrelate with that module? What are the modules after all? And how do they talk to each other?

**26:34** · I would ask those questions. And then I would get scared to death because the answers were horribly frightening. And then I would design a module structure and I would tell the agent, okay, here's how the modules should really be partitioned and here's how you should communicate with them. And I would give them an implementation plan that they would then implement.

**26:55** · Now, that's a that's a tough one. So I also had my agents build me an architecture viewer. So I can pop up on the screen a nice little UML diagram essentially nice little UML diagram that shows me the modular structure of the system and where the dependencies run and I can click on a module and I can see inside it to the sub modules and I can click on the sub modules and it'll actually pop the code up on on the screen for me. So I can I can drill down as much as I want and view the system architecture at any level.

**27:25** · That was really useful to me and I I've made good use of that. I've also put together a another deterministic tool where I can define which module should depend on which, which one should not depend on which, how the dependency should flow.

**27:44** · That goes into a nice tight little specification file that the agents cannot violate. There's another little checker that runs at the end and if they violate it, they've got to fix it somehow. Usually by inverting a dependency or inserting an interface or splitting a module in half or something like that and it will it will um keep my rules um from being violated.

**28:09** · I'm working now to see if I can automate that and I'm having not a lot of luck \[laughter\] so far.

**28:17** · I'm \[sighs\] basically in exactly the same boat as you, which is you just get so much leverage by having well-designed modules, right? Could you explain what that leverage is? Why is why is having a good structure for these modules important?

**28:33** · Well, it's the same argument that we had for the dirty code versus clean code. Anything that is well partitioned with well disciplined interfaces between it is something a human can grasp because we compartmentalize in our minds. Well, so do the models. So do the agents. Maybe at a slightly different threshold.

**28:52** · I don't know about that yet. But they work far better if they can focus on a module and if that module has a trajectory, right? Using your term so that the mo that the model does not get confused by the topics inside that module. Okay, I'm using the word model and module. I want \[laughter\] clear.

**29:15** · We get it. We get it.

**29:16** · But that that's important. And it's the same argument. It's the coffee and soap op opera argument. If you load up a module with every bit of stuff under the of under the sun, the the poor agent is going to wonder what the heck am I doing in here? How do I do anything in here?

**29:35** · If you compartmentalize nicely, works pretty well, just like a human.

**29:40** · So, you're getting and you're probably getting better value out of your test suite as well because that's what I always think is like, okay, I suppose here's here's another question for you that's related to this. I think of and I have to say I'm a huge fan of um a huge fan of your work but I'm also a huge fan of John Aster's work.

**29:56** · Yeah.

**29:57** · Where um I mean who isn't a great guy. You you probably got his book around somewhere.

**30:02** · Um and his concept of deep modules is something I find really fascinating which is you have an you can have bad modules which is kind of shallow modules right that have a wide interface and not much hidden inside them. And you can also have deep modules which have a small interface and then a deep um lots of hidden information inside them. And it occurs to me that that is really good with models because they can read the interface without having to understand the implementation.

**30:29** · Does that sort of chime with you? And is that how you're approaching things as well? Yeah, absolutely does.

**30:34** · The models pay attention to interface names. They they pay attention to the structure. It can allow them to not read the code beneath them, which is both a danger and and an advantage. Yeah, as long as the code is consistent, you're okay. Um, they also pay attention to the tests. They read tests to understand what the system does. Um, so yeah, anything you can do that helps the structure of the code will help the models understand that code.

**31:01** · By the way, in this book, there is a long debate between me and John Osarov in the appendix, and it it was a lot of fun. He and I had a blast. Well, I don't know how much fun he had, but I had a lot of fun.

**31:15** · I watched I watched the entire thing. I saw you guys interviewed um on a really great uh uh YouTube discussion where he talked about it and I I I just loved it and I that's kind of the reason I wanted you to come on actually because I I just enjoyed that so much. Um okay, there's a few different ways I could go now. Um, okay. Is there in your book anything that you would change or update now?

**31:43** · Because specifically, I'm thinking about some advice like um create small functions, let's say, and keep functions small. Um, is there is there anything that you're sort of because we've been talking a lot about how things have not changed, right? How gauntlets like this have always been good. we've just never had the labor available to actually push through them. Right? These ideas have been good for a long time. We're just sort of modifying them in a different way.

**32:10** · But is there anything that we just need to and this is I suppose a wide question. Is there anything that we need to throw out that's just like done or is there anything that's I don't like asking this question because it puts a lot of pressure on you, but do you have an answer for that one?

**32:24** · So, um thresholds for one thing. Uh it seems to me that the the agents can deal with different levels of complexity than humans. They have a a much better short-term memory. I mean a huge short-term memory and a perfectly accurate short-term memory. So one of the things that I do is I widen the um the allowed size of a function and I do that by adjusting the crap score. So for a human I would keep crap numbers below four, right?

**32:54** · But for the agents, I've set this at six and I'm thinking maybe I'll push it to eight. Um I'm trying to find where the threshold is and it's not an easy threshold to find. But what what does that look like in terms of four to eight? Like what's the or 4 to 12? What's the difference there? Like is it like a 20 line 100 line function?

**33:13** · Um so it really boils down to the cyclatic complexity which is the number of pathways through the function. And uh if you've got a 100% coverage, then a crap score of six means that there are six pathways through the through the function. They're all covered with tests. So that's really the goal of crap, right? Get it all covered with tests and then limit the cyclatic complexity. Um and you know, I've had a number of debates with the agents, and by the way, you can't trust any debate you have with an agent, but I still have them anyway.

**33:41** · Uh and they they seem to think that, oh yeah, you know, six is probably pretty good. Well, you know, I don't really trust them, but okay. Um, but I, you know, I think there's a threshold difference there. There's another another factor. In my books, I talk about disciplines. One of them was was test-driven development. I'm a big advocate of test-driven development, but that's a human discipline that's done because humans are wired a certain way.

**34:12** · I cannot and will not enforce that on the agents. I don't think it makes any sense to make an agent write a single line of a test and then write a single line of the production code and then the next line of the test. I don't think that makes any sense. For a human, it does. At least for me. I a huge benefit for my work. But for the agents, I don't think so.

**34:37** · So I allow the agents to behave more like John Asterhout would write a function and then write the test for that function. and then write the next function and write the test for that function. I allow them to do that. Even when I have told them to do test-driven development at high discipline, they always fall back on doing that. They always end up doing that. So I figure that's probably okay.

**35:02** · So the bottom line there is it's probably a mistake to impose a human discipline on an agent. It is not a mistake to impose human values on the agent, but there may be thresholds that we need to change, but the disciplines themselves, the behaviors, I don't think it's wise to impose those.

**35:23** · That's a lovely way of phrasing it. I really like that. So, it's it's a short-term memory thing, right? Because TDD is great when you have very low short-term memory, like humans, right?

**35:32** · You have enough short-term memory to write the test and then enough short-term memory, just enough to make the test pass, right? you can go out and get a coffee or something. So, okay, that was great. Thank you.

**35:46** · You're welcome. In the \[laughter\] Okay, we've talked a lot about building the thing, right? Right. \[clears throat\] And building the implementation, right, and doing module architecture and that sort of thing. What do you do before you kick things off to your specifier? How much planning are you doing before you actually go into this gauntlet loop?

**36:06** · Because like putting the wrong work in a gauntlet is super wasteful, right? How do you think about that?

**36:15** · Well, so the temptation is to specify, you know, get the human to specify, specify, specify, specify and then give it to the agent. This is a very old temptation. It was a temptation we underwent in the 70s. It led us to the waterfall uh process and all of that.

**36:36** · and and the agile revolution was the answer to that or the answer back to that. I don't know how how well we're doing with the agile revolution either, but but it was the it was a way to say, "Wait a minute, all this heavy upfront planning makes a mess of everything because what comes out at the end doesn't look anything like the plan and never has." Well, the temptation with agents is to do the same thing, right?

**37:03** · Okay, we're going to plan plan. Then we'll give it to the agent. And I have tried this. In fact, I've been in the middle of trying this just this week.

**37:12** · And it's it's always a disaster. It and it's always the same outcome, right? The you make all these plans and then as the agents are running, you the human realize that they can't follow that plan because you didn't think of everything and they're not as wise as you are. So they're running halfcocked off on some nonsense that you have to stop, back up, rewrite the plan, and then start them over again. And so I've given up on that. I said, "Okay, wait a minute.

**37:44** · Let's try the agile approach now." And I don't know how this is going to work out. It might not work out all that well, but but let's try the agile approach. Let's just let them do a story or two, and then we'll look at the architecture at the end, and we maybe I'll have to manually get involved. and s you know sort a few things out and then a few more stories and so on. That might be a better approach. We we may never uh escape that manual organizing step at the end.

**38:12** · Although I'm trying to figure out a way to do it, but I don't know I don't know if that's possible.

**38:19** · I think of it like you've got this huge chunk of labor that needs to happen, right? In the old days, this was building the thing, right? and building the thing would take days, weeks, months maybe. Um, now that has shrunk, right?

**38:32** · But the planning up front and then the review is still the same, right? We're expected to do these faster iteration cycles as devs, but the stuff that was actually quite hard is still kind of the same and takes the same amount of time.

**38:47** · Building the thing wrong or sorry, building the wrong thing is something that you can still do. And I totally agree that there's like this sort of a lot of folks are doing this kind of plan maxing thing where they're just, you know, they take their spec and they they think about their spec, they run their spec through seven different agents or something and then they um, you know, they get back a better plan that they then go and implement or something. How like that sound not sound good?

**39:13** · The agents love to write plans. Oh my goodness, they love it. And they will embellish the plans and the plans will be gorgeous and beautiful and spell out all kinds of details. \[laughter\] Yeah. And then they fall apart at the end.

**39:27** · Um so yeah, I I think you can see it in the industry right now. There's this movement towards specri development. Uh and my my uh impression there is that that's probably not going to work. My experiments did not work particularly well. Um, and I'm thinking now maybe we should once again look at the agile ideas and maybe the idea of do a little bit, get some feedback, do a little bit more, get some feedback, reorganize, do a little bit more feedback, reorganize.

**39:59** · I used to tell this story back when I was doing agile lectures.

**40:04** · If if it cost you $1 to make a change to a house, including the initial laying of the foundation, the initial roof, everything, every change you gave to the contractor would cost you a dollar. How would you build that house? Would you hire an architect and pay thousands of dollars to the architect to come up with the perfect plan that they then paid a dollar to the contractor so that he could build in one shot?

**40:33** · Or would you walk up to the contractor and say, "I want the foundation here. Make it that shape." Oh, no. \[clears throat\] That's bad. Okay, let's change that foundation. Let's do a little put the kitchen over here. Put the living room there. THERE'S $2. OH, HECK NO. Let's change those around. That's let's let the kids walk through the oh the traffic pattern is crappy. Move the stairs \[laughter\] or whatever. Um obviously the ladder is probably better and that's what we are looking at right now. It costs a dollar.

**41:04** · Well maybe two, maybe five. But the the cost of change has plummeted to as close to zero as I think we're ever going to get it. And well, that's that's a prediction I'll probably lose. But still, right, the cost of change has has gone so far down that why would you do this upfront planning? Because that's expensive.

**41:31** · Why wouldn't you just fiddle fiddle fiddle fiddle until it looks right?

**41:36** · \[laughter\] Yes, I I 100% agree. I couldn't agree more. the the thing I the thing I have I think I have a massive issue with the spec driven development label because what is spec driven development right like you can have like 10 different interpretations of it and every time you

**41:53** · pass information to an agent right is prompt engineering spec driven development right like it kind of is you know you don't you know you would say to your you know if in the old days you would have like your mate over the other side your colleague and you would say you just fix that uh loading issue in the in the header or something is that specri development right?

**42:09** · Like is that a specification that I've given him you know and it seems like every time I say okay do a little bit of upfront alignment first that approach then gets called spectrum development but for me I think the difference is are you persisting your specifications right are you returning to those specifications so what's your attitude there like do you do you keep like a list of all of your specs in the repo or do you like what's going on there?

**42:38** · No, I do not. Um the the specifications are ephemeris. They go away. Uh they change a lot. I fiddle with them and you know that that goes away. There is no equivalent to source code. You know, we humans wrote the source code. So that was that was the final specification.

**42:58** · Well, that doesn't exist anymore. There is still source code, but we humans aren't the ones writing it. And a lot of people feel that lack. There has to be a human thing that defines everything up front. Well, I mean, in the end, even what the agents produce was produced by humans.

**43:18** · The the thing that I've be been doing lately is this. Instead of creating a specification that defines what I want or defines what I have even, I look at the end result and say, well, that is the specification. So, I've got a bunch of tools out there. I've got like the crap tool, right? Runs for closure. It runs for Java. It runs for Go. I wrote a few of them, right? I have my agents write them. I've got the mutation tester. I've got my my agent harness.

**43:50** · You know, I've got all these things up there. What I tell people is don't download those. I wrote them for me. What you should do is point your agents at them, have the agents look at them, and then build one for you. \[laughter\] Yeah. I think that's a far better way of specifying the essence of something and then customizing it to your to your particular need.

**44:14** · Yep.

**44:14** · It's what I always find weird about agents is that if you send them something, they read it, right? Which is very different to humans, right? Very, \[laughter\] you know, you can maybe get a 20% hit rate if you send someone a massive specification and 20% is maybe a bit generous. 5% maybe if you pass, you know, a spec to an agent, they're probably going to read it, right?

**44:36** · The opposite side of that is the things that the agents write, the humans don't read.

**44:41** · Yes.

**44:41** · Exactly. Yeah. Exactly. So, they're expecting \[laughter\] thought of it like that. They're expecting us to read everything they write and we just don't. God, that's funny. It's so one-sided. You know, long term, I'm interested in how human relationships differ or get different because we're so used to communicating with agents, right? I dictate to my agent. So, it's like I'm just sort of talking to a friend or something. I'm really interested in sort of how life imitates art over time and stuff. I don't know. That's fascinating to me.

**45:11** · So, okay. And I think I'm going to ask you maybe the final question, and it's a sort of fairly beefy one.

**45:18** · Um, if that's all right. Finalish. Um, I'm gonna go John Aster out again. Yeah, because John has a great definition for different types of programming, right?

**45:29** · You've got the tactical programming. Are you going to get it?

**45:33** · I I just have to You've mentioned it too many times. I've got to got to pull this book down.

**45:38** · Uh, it's it's here somewhere.

**45:41** · Where's mine? I've got mine.

**45:42** · Oh, good. Okay. All right.

**45:43** · There you go. I've got mine.

**45:44** · Oh, there it is. Yep.

**45:45** · I got it.

**45:46** · Okay.

**45:46** · Done. um tactical versus strategic programming. Yeah.

**45:51** · So tactical is the sergeant on the ground, the person kind of fighting the battle.

**45:56** · The strategic stuff is the general kind of the person directing the course of the war.

**46:01** · Now I think we both agree that's a good framing, right, for different types of programming. And agents are really good at tactical, really bad at strategic.

**46:10** · Yeah.

**46:10** · Now, for people who are just starting out and AI has now eaten all of the tactical stuff, how do they learn to do strategic programming? Because I think a lot of people here, that's kind of what they want from you, Bob. They want, please just give me your brain so that I can inject into it, understand why mutation testing is so good, tell me how to explain these modules. Like, that's what they want, I think. So that's your job now is to give people your brain. How how how did they learn that stuff?

**46:43** · Okay.

**46:43** · So, um I get this question a lot. I don't have perfect answers to it because I really don't know. But but here's how I would think about this. Here's here's how I do think about this. First of all, the um the way a programmer should learn whether it's in university or somewhere else, right? It should be to write code.

**47:04** · You should you should be writing code, right, for a year. I don't know how long, but you should be writing code so that you know what the agents are dealing with.

**47:14** · The next thing that I think should happen is that when you get hired into a company where that company is making heavy use of agents, you, the young young person just coming out of training, should be treated like an agent. the uh the the guy who's running the you know maybe the lead engineer or whoever the guy who's got bunch of agents running and he's being strategic.

**47:39** · He should look at you as an agent and he should give you the same kind of tasks that the agents have and subject you to the same kind of deterministic tools that the agent have agents have to use. And you should spend several months in that state being horribly unproductive but learning a hell of a lot. And by the time you've gone through that gauntlet, maybe you can be trusted to run an agent of your own.

**48:09** · I don't know. It's going to be something like that. You cannot lose the code entirely.

**48:17** · I used to tell people um 10 years ago used to tell people um if you've never written assembly language, you should spend the weekend writing assembly language just so that you know what's really going on behind the scenes because if if all you're doing is writing Java all day long, you live in a fantasy world. There is still magic yet that you don't understand.

**48:40** · Spend a weekend doing assembly language and you will finally understand what's really going on. And I I think that remains true. Somehow during this educational pathway, you've got to go from the basics binary all the way through assembly language, some basic code like C, some higher level code like Python or something, and then deal with uh agent kind of work and deterministic tools and finally be able to strategically run an agent under supervision.

**49:14** · Yeah, I don't know how better to say that.

**49:17** · It's so hard though, right? Because there's two there's two things going on there, right? Like there's the agent is a kind of abstraction layer, right, over the code. And so you got the code and then it's interesting you were talking about an abstraction layer like a sort of um module viewer, right? Like I think that's super interesting. That's a really good way to learn getting these kind of abstractions over the code so when you dive in you understand it more deeply.

**49:41** · But if you have someone who's just like sitting on your books just doing tactical work, surely as a company you're going to look at that and go, "Why are we hiring this person when we've got, you know, we've got Uncle Bob's swarm of five hardeners and stuff that can beat it, you know, a fraction of the cost, right?

**50:00** · I'm I just I I'm so Okay. what what like resources or books can or approaches or sorry there's one more question here which is \[laughter\] I'm I'm I'm trying to like work out how people get this information because the feedback loop on strategic programming is so long right or traditionally it has been very long so you you can often

**50:27** · like people who just like quit jobs after six months or something they might never learn strategic programming right because their mistakes are maybe nine months away, you know, so they just never see their their own mistakes. But I think with agents, you can, right, because it's sped up so much, you can actually get more feedback on your mistakes sooner. And I suppose what I'm interested in is how did you know that your agents were making mistakes back in December when you were looking at them and going, "This is dog do." How did you identify that?

**51:00** · Um, early on, I was just looking at the code and seeing the dog do. That wasn't the important part. The important part was the next step where I watched them thrash. I could see the agents struggle and I recognized the struggle since I have been through that struggle. Right?

**51:16** · And that's one of the issues is the novice would come in and not recognize the struggle.

**51:22** · Now, how do you learn that? How do you learn? You know, I learned it the hard way. School of hard knocks. How do you learn that as a young person coming in?

**51:30** · How do you recognize that? There is a wealth of information about this. Um the the old books, the ones that nobody reads because they're old. Uh the old books on this topic are terrific, right? you go to the works by Tom DeMarco or or the works by Ed Yordan or you know go go read you know um \[laughter\] gez I can't think of the names right now but pragmatic \[snorts\] programmer you know yeah the pragmatic programmer um the the

**52:05** · there's a lot there's a lot of these older books they're very good um that if you if you study them when you're young you will get they feel for what this higher level strategic play is. You'll have to filter out some of the archaic stuff because a lot of these books were written in the 70s or the 80s, right? But that's when these lessons were learned.

**52:30** · And so I, you know, that's that's where I would go initially. I would go to those books and learn that stuff that way. And then, of course, you're going to have to learn it by feeling it.

**52:40** · Yeah. That's why I think they ought to play play uh agents for a few months so they can learn what that's really like.

**52:47** · Become the agent. Have the agent delegate to you. Yeah. You become a sub agent of the agent. I like that. \[laughter\] So, okay. I do have one more question. It's I suppose a short one.

**52:58** · Um which is sounds like then software fundamentals still matter, right?

**53:06** · Yeah.

**53:06** · And why is that?

**53:09** · And what do you say to the people who say that they don't matter?

**53:15** · Why is that? Um software fundamentals matter for the reason they have always mattered. The let's see who said this. It was um uh Dystra I think who said it. I'm I'm going to get this wrong, but software is the most complicated thing that humans have ever attempted to do.

**53:41** · More complicated than you know any other task that we've tried. Software is the most complicated thing. And therefore, the fundamentals are the are way of organizing that complexity into a form that can be conceived not just by humans, but by our models as well. Since our models are modeled after humans after all. So the fundamentals still apply because that's the way we organize complexity to be conceived or be to be conceived of.

**54:14** · There are folks right now who think that the fundamentals don't matter. They will learn and they will learn that the hard way and and it won't take very long. Might take longer than I think it'll take because the agents are pretty good. But I've watched them hit the hit the uh wall. So I know that wall is there and I don't want to hit that again.

**54:36** · It's a very interesting interesting set of parallels that we're in at the moment. We you had mentioned the the abstraction layer, right? And you know we're we're now at a at a level where we're above the compiler. We used to our our our abstraction layer used to be the compiler. Before that it was assembly language. Before that it was binary. And now it's up here at this level of the model. At every one of those steps up up the abstraction layer.

**55:04** · The people at the at the lower step complaint said, "Oh, this is going to ruin everything.

**55:12** · We're not even going to have jobs anymore. It's become so easy that five-year-olds will be able to write the code." And you know, back then they were still talking about like binary at every step. It's the same. And and so we're at this next step and the people down here are saying, "Oh, it's going to ruin everything." No, it's not. The same rules apply. All the same fundamentals exist for all the same reasons.

**55:37** · The rules you throw away are the ones you're going to pick up off the floor in a year and dust off and remember why you need them.

**55:47** · \[laughter\] Yeah, thank you so much, Bob. There's a there's a great quote from I think Plato where he says that writing is going to make people stupider, right? So, people have had that same abstraction argument since, you know, the Greeks, right?

**56:03** · Ridiculous.

**56:06** · I think everyone uh watching, how many folks have we got on this stream? Uh we've got 1,500 people watching. Incredible. Uh I think we can all agree that was a fantastic conversation. Um, Bob, thank you so much. Um, hold up your book one more time so folks can uh can get it. Let's see. \[laughter\] Clean code. And I think what it's 11:00 a.m. now your time. Back to the bathrobe.

**56:30** · Yeah. Yeah, it is. \[laughter\] Perfect. So, folks, thank you so much. I'm going to end the stream here. Me and Bob are going to stay on for a
