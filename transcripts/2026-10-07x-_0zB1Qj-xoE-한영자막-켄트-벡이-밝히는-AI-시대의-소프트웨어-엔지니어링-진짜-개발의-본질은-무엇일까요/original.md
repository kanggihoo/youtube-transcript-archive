---
title: "[한영자막] 켄트 벡이 밝히는 AI 시대의 소프트웨어 엔지니어링, 진짜 개발의 본질은 무엇일까요?"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=_0zB1Qj-xoE"
domain: "youtube.com"
language: "en"
description: "익스트림 프로그래밍(XP)과 TDD의 창시자이자 애자일 선언문의 첫 번째 서명자인 켄트 벡(Kent Beck)이 AI 시대의 소프트웨어 엔지니어링과 장인정신에 대해 이야기합니다. AI 모델이 코드의 대부분을 작성하는 시대, 개발자가 놓치지 말아야 할 진짜 본질은 무엇일까요?📌 주..."
word_count: 7165
---

![](https://www.youtube.com/watch?v=_0zB1Qj-xoE)

익스트림 프로그래밍(XP)과 TDD의 창시자이자 애자일 선언문의 첫 번째 서명자인 켄트 벡(Kent Beck)이 AI 시대의 소프트웨어 엔지니어링과 장인정신에 대해 이야기합니다. AI 모델이 코드의 대부분을 작성하는 시대, 개발자가 놓치지 말아야 할 진짜 본질은 무엇일까요?📌 주...

## Transcript

**0:00** · Uh, I've spent my career in in commercial software development.

**0:05** · Uh, I've had occasional encounters with the the military or government world.

**0:13** · Remember working on a project at Lockheed way back in the day. Does Lockheed still exist?

**0:19** · Yes. Okay, good. Um, glad I didn't sink them. Um, so some of the things that I've uh was hearing this morning were outside of my usual sphere of concerns, but much of what I heard was uh was spot-on and the the constraints are very similar.

**0:46** · And I also solved a uh a long-term puzzle. The way my brain works is I'll take a problem and I'll stick it in the back and I'll churn on that and sometimes the answer comes within minutes, sometimes it's months, sometimes it's years or even decades.

**1:04** · And uh so at the end uh I'm going to reveal a uh a refinement of an idea that I've been working on for 10 or 15 years that I think I cracked this morning as a result of listening to General Whiting.

**1:22** · Um but I'm just going to leave that out there to make sure that you pay attention to the whole thing. Is that okay? Um, by the way, uh, if anybody has questions as we go along, I'd rather have you raise your hand and ask right away, um, then sit there and and wonder about it. Asking questions is a form of leadership.

**1:45** · Um, I remember being a freshman in college and uh we had a we had an experimental discrete math class and uh Professor Ken Ross, I still remember him at the whiteboard um was not being terribly clear. And one day he was a little late coming in, this was probably three weeks in.

**2:08** · And the whole class was there and we're sitting there and just kind of the glazed eyes, everybody looking forward trying not to make contact eye contact with anybody else. And finally somebody said, "Does anybody know what's going on?" And everybody said, "No, no, we're completely completely close about what's going on."

**2:32** · And it was such a moment of \[sighs\] and then Ken Ross came in and we just blasted him just like nobody knows what's going on.

**2:45** · Stop whatever you were going to lecture about. Please don't explain what was going and it was great for everybody and he ended up writing a very popular discrete math textbook. And I would like to say that our class really had a lot of responsibility for for that happening.

**3:01** · So, um, if you have a question, comment, please, uh, please raise your hand. We have, uh, mic runners ready to go go around. So, uh, my name is Kent Beck.

**3:15** · Um, I've been coached by Jean Kim, who many of you will know that I ought to introduce myself in the following kind of way. I I don't like it but Jean says so. So I was uh I was instrumental in bringing patterns and that pattern style of thinking to software development uh programmer testing uh programmer testing frameworks like JUnit was my original invention.

**3:46** · I refined it with Eric Gamma and it was then copied a million different ways.

**3:54** · test-driven development which is uh an age-old idea. Um I recently found a book from 1957 called something like digital programming.

**4:08** · Um where the distinction between binary computers and decimal computers had not been worked out yet which I thought was like oh I I guess that must have been a question at some point. But late in that book, it talks about how do you write programs and it talks about you go to the users and you ask them for some uh check items that is give me some input

**4:37** · output pairs from your domain and we'll make sure that the computer program matches those input output items. And I thought that's that's test-driven development right there. So, I can't claim to have invented TDD, but the the I I maybe rediscovered it or something like that and and then uh and then refined it. Um extreme programming is my baby.

**5:07** · I was uh I was one of the signitories of the agile manifesto. I wasn't just one of I was the first signatory of the agile manifesto alphabetically.

**5:21** · So u and then since then I've spent a lot of time coaching high potential engineers.

**5:30** · Uh I'm um deep in the augmented development world.

**5:36** · Uh I'm working with uh one of the frontier labs which is its own set of interesting constraints. I mean it's uh it's one of the first I I I work at the at the intersection of technology and sociology and this is one of the first times when it's not a it's not a press play kind of

**6:04** · problem on how a a team that's building a frontier model or building a sequence of frontier models how they should actually work. I'm having to really think. I'm having to learn a lot which I appreciate. Um so that's my background.

**6:23** · I'm coming here to talk to you about craft and the role of craft in an augmented development world. Uh I always say augmented development uh because to me this is still a human process.

**6:38** · Uh at least so far I still have a lot to add.

**6:44** · to the decisions that the genie is making. I call it the genie because it grants your wishes, but it ends up not being what you really wanted.

**6:55** · Just as a reminder that that's that's the essential relationship here. I'm going to make some requests. I'm going to get something back. It's going to seem really cool and then at the end of it, I'm going to be a little bit disappointed.

**7:09** · So, that's how we work together. Um, I wanted to say I'm not going to bury the lead. The one thing I would like you to take away from is there's a tendency now when people talk about augmented development where they they make a statement like now that the genie they don't usually call it the genie because they're not going to be that uh cynical.

**7:39** · Now that the genie is better at coding than humans and I'm calling boulder dash on that statement that attitude that just because uh genie can create syntactically correct programs doesn't mean that they're better than a programmer or even that they actually work.

**8:08** · And one of the things I always loved as an autistic person I loved about programming is this this binary red green. Oh, that's so relaxing to be able to say this program doesn't work. I fix a bug and now it's fixed.

**8:27** · \[sighs\] And that's the programs that we get out of uh Augmented development oftent times just don't work.

**8:42** · They're plausible. Genie is really good at plausible, but actually working, no.

**8:51** · And uh we've all read these breathless uh accounts of well, we spent $10,000 in tokens and we got a working C compiler out of it.

**9:06** · How amazing is that? And then you start digging and you realize that working C compiler, hello world, doesn't actually work. Or there were a few remaining bugs and every time one of those bugs got fixed, three more bugs were introduced.

**9:27** · Um, if you dig a little bit deeper, it's it's close to a C compiler. C compilerish, but it doesn't actually efficiently compile C programs that then run, which seems to my old-fashioned way of thinking to be the criteria we ought to be using.

**9:50** · So that idea that somehow we've just replaced programmers because computers can do what programmers used to do is simply wrong. Now maybe someday it will be less wrong but today it's simply not true.

**10:06** · And that means that your relationship as a programmer or as a manager of programmers or as a purchaser of software if there's a heavy presence of the genie in the production of some software you you have to take a cynical view. You have to take an adversarial view and say, "Okay, you say this works.

**10:37** · You made yourself happy, but did you make me happy? How real is that? How hard do I have to push?" So the kinds of things that you do as a programmer to make sure that a program works by construction or that a certain class of bugs is simply not possible. Genie doesn't have those tricks.

**11:04** · So things that you used to be able to infer, trustworthiness that you used to be able to infer, you simply can't assume that that's true anymore.

**11:15** · which um now I've been through a number of cycles. One of the advantages of uh losing all this hair was I've been through enough cycles where people said, "Oh goody, we don't need programmers anymore."

**11:32** · And as programmers, it behooves us to think about why they keep trying to get rid of us kind of at a strategic level.

**11:40** · Um but also it's never been true, you know, because uh computer programmers are highly technical artifacts and we'd love for say business people to just be able to speak in a plain language to the computer so that we don't need programmers anymore. where the business people can just state their requirements in plain language and the computer will just compute it. And that of course is the highlevel description of cobalt.

**12:16** · But that cycle has been going over and over again. And here we are at the next round of that cycle, which is why I'm not worried about having a job that. And because much of my job is coaching, it turns out that young engineers make exactly the same young engineer mistakes that young engineers have been making since the time of the Romans.

**12:41** · And they can use someone who comes along and says, "Yeah, you're yes, you're kind of weird, but you're definitely not alone. And you know what? I've seen worse."

**12:54** · And uh that's a very soothing thing for a young nearly overwhelmed programmer to hear.

**13:06** · So the that word craft that's in the title of my talk is an interesting word and I have a mixed relationship with that word craft.

**13:17** · Uh I've written at least three books which can all be described as uh craft oriented. Okay, you're a programmer.

**13:32** · What is it that like how can you put your whole self into the act of programming?

**13:40** · And uh all three of those books are completely obsolete and should be thrown away at this point which is an odd thing to do feel at towards the end of a career. Um but there you have it.

**13:53** · The kinds of activities that we used to use to express craft. Careful naming careful decomposition of logic into little pieces that all compose together to create some larger effect.

**14:11** · um indentation, use of whites space, uh optimizing program structure for human understanding.

**14:25** · Those aren't decisions. Those used to be decisions that had a lot of leverage.

**14:30** · Now, they tend to have a lot of leverage over time.

**14:34** · So five years later, someone would come across some code and say, "Oh, thank goodness I can read and understand this and they would feel good about it."

**14:45** · Uh those decisions don't have the same leverage that they used to have and and that's just true. It doesn't mean that it humans don't need to understand code.

**14:58** · I think there's still a lot of leverage if I have to choose a system where the humans can read it in a system where the humans can't. I'd much rather have a system where the humans can read and understand about it. But I also have to recognize that that reading and understanding is going to happen in the context of I've got this genie. It can explain stuff to me if it's not lying to me, which is always an option. But if it's not lying to me, I'm going to be able to understand this more quickly.

**15:29** · Um, but that that detail oriented which feels so good. Oh my good. You know, I'm I'm like h how does this go together? And then I realize, oh, if I inline these things and I extract those things and I rename these ah then it all becomes clear. That moment felt really good to me and there's just not payoff for that particular moment.

**15:58** · Now craft was let me say from my perspective that word craft was hijacked by a group of people who wanted again this from my perspective wanted to go in their little cave and they wanted to be programmers and it was just them and the computer and they would craft themselves and until they were ready to be finished.

**16:32** · And so th this is the flip side of my relationship with that word craft was I really hated that. Oh no, it's not done yet because I haven't finished with my craft.

**16:45** · Well, sometimes if the cost of delay is high, an ugly program that gives you feedback is exactly the right thing to do.

**16:57** · Some other times if the cost of delay is low, this software is going to live for the next 20 years, then absolutely that Swiss watch maker get everything exactly right is going to pay off over time. But the idea that as a programmer time doesn't matter compared to your experience of programming.

**17:23** · I I just I disagree with that strongly and I didn't like what that side of programming did with that word craft.

**17:38** · But we have to recognize now that craft is going to mean something different.

**17:49** · It's still a a valid concern. It's still a valid discipline, but it's going to show up very differently. And I'll talk as I go along more about how I see that change happening.

**18:12** · So, let me draw a little bit for y'all.

**18:16** · Um, I've noticed that if you look at my GitHub, I so I've been programming augmented development like back into programming hardcore every day for maybe the last 18 months.

**18:34** · Uh, I saw Jean Kim and Steve Yagi give a a a demo and they were so excited. I thought, I have to get back into this.

**18:42** · And I gotta say, I absolutely love programming with the Genie. I've always had bigger ambitions than my technical skill could could achieve, and now I can try ridiculously ambitious projects and make a lot of progress.

**19:02** · I I didn't say accomplish them because on my GitHub you'll see that there's the name of a project and then project two, project three, project four because I kept hitting the wall. I kept getting to that place where I couldn't fix one bug without breaking something else. And then new project, new project two, new project three.

**19:30** · Now, it somehow never occurs to me to put a one by that new project.

**19:38** · I just assume this time it'll be different. This time I'll be able to actually get this thing completed. But no, I have to release over and over and over again.

**19:51** · So, here's how I I've come to think about this.

**19:59** · If we look at progress, it took me a while to get to this uh visualization. By the way, this is one of those ideas that went in the back of my head and I had to work on for a while. If we look at pro progress on features, what we what we see is it goes fast at first and then it goes slower and slower and slower and slower. And that's the like what goes into that dynamic.

**20:30** · What goes on the other axis?

**20:35** · And sometimes I call it optionality, sometimes I call it futures. So it's easy to see futures versus features. And then I knocked out one of my front teeth. And then I had to call it futures versus features. And it was a really terrible choice. But then I got the tooth replaced, so now I'm good.

**20:55** · The vicissitudes of age. So here's here's what happens. We always start with a wide variety of things that we could do, but we have no features. And then we implement something and we burn some of our features in order to realize that feature.

**21:14** · At the very least, we're going to have to maintain backwards compatibility if we add the next feature, which will constrain what we can do a little bit or we'll decide we don't like that first feature and we'll have to take it out.

**21:27** · And that again constrains a little bit what we do next. But what happens next is we burn some more futures in order to get our next feature. And then we burn some more And then eventually we get down to the point where we have no options for change at all because everything is such a big mess. And then that's when I start project two or project three or project four.

**21:59** · So now we've made a lot of progress in software development. And it used to take us a hundred people 10 years to get to this absolute zero state where we can't make any changes without breaking something else. And now with AI, I can do this in the privacy of my own office.

**22:21** · One person, one week, and I can make a complete mess.

**22:28** · So that's a big productivity enhancer to get to a project that can't be changed with far less in the way of investment.

**22:39** · But what's the alternative? What else can we do? So that's what I want to create that first feature.

**22:51** · It's always going to burn some futures there. Nothing you can do about that.

**22:55** · But now we have a moment.

**22:57** · When I was in music school, there was a story about Pablo Casal who was uh one of the greatest chists of the 20th century. And the cello is a very physical instrument. It's big. It moves a lot of air. Takes a lot of physical strength to play the cello. And Cassal's had a piece that was a long run of 16th notes on on and on and on and on.

**23:24** · And someone asked Cassaul's, "Don't you get tired playing all those 16th notes?" And he said, "No, I rest between the notes."

**23:41** · And for me as a young classical guitar major trying desperately to play fast enough. The idea that there was a between the notes was just mind-boggling.

**23:54** · Now it turns out Cassaul's never said this. The story's made up. But it's such a good story that I have to tell it.

**24:02** · But here we have a moment. We've completed a feature. The genie said, "Okay, boss."

**24:09** · You know the finger guns. Okay, boss. I finished that feature. Do you want me to implement the next thing? And we all have the opportunity to take a breath and say, huh, maybe I'm not ready. And that gives us a chance to add back some of the futures and maybe even a little bit more before we implement the next feature.

**24:39** · And then again with the finger guns. And then again we can say no, I'm going to I'm going to uh refactor what's there.

**24:50** · I'm going to eliminate some duplication.

**24:53** · I'm going to optimize some of this for um for readability. I'm going to throw away what I just did and implement it again in a different way. to see if that turns out differently.

**25:09** · There's a lot of things that you can do in that moment between features that are going to add value to the project because the economic value of a project is the sum of the features that it currently has and the futures all the options that for what it could do next.

**25:31** · I can add value by adding to the futures. And so this is the trajectory that I want to create to go back and forth between adding features and improving the futures of the project.

**25:48** · Now the challenge with this is adding features is a visible legible in that seeing like a state sense.

**25:59** · Everybody can see the progress. They want the features. The users want the features. Now they have it. Oh, thank you very much. Futures futures is harder to account for.

**26:10** · You may have added to the theoretical value of the software, but the the fact that you could make a change that you may or may not want to make seems like gilding the lily. Why didn't you just implement the next feature?

**26:28** · Well, because if I just implement the next feature, I'm going to go down to zero and everybody hates that.

**26:36** · So, this is how I think about the challenge of augmented, not just augmented development. This is the challenge of software development is balancing the investment between the next set of features and the futures which determine what it is that you can implement next.

**26:55** · with the genie involved, the whole thing ramps up. The timelines are shorter, the opportunity cost.

**27:06** · You know, if you just say, "Yeah, implement the next feature," you're going to get it really fast. Something like it maybe that works mostly.

**27:17** · And if instead you go and uh futureproof your software, you remove the sources of error.

**27:30** · It's harder to it's harder to account for that. It's not written in any spec that says and this will be easier to change in the future.

**27:40** · Nobody seems to ask for that. They're all looking for that project that gets finished.

**27:47** · Whereas for me finished like I don't want to change this software is a failure. I want to write software that inspires any number of new ideas. To me that's more valuable. But it's harder to write a spec for that. And I'll talk I I'll I'll get cynical about spec driven development before this is over. I promise. So th this is the uh this is the trajectory I'm trying to create.

**28:19** · If you step back from this as a trajectory far enough, you don't notice the back and forth, it just looks like the software is getting more features and more options at the same time.

**28:37** · If you try to as an implementer try and actually implement more features and more options at the same time, it turns out that's a bigger problem than fits even into the combined brain of the genie and the human. The more effective strategy is to go back and forth between the two.

**28:56** · We're going to make some progress, then we're going to consolidate. We're going to make some progress and we're going to consolidate. You can't wipe the knife while you're cutting.

**29:06** · You have to and wipe the knife and cut and wipe the knife. But you have to wipe the knife.

**29:12** · You know, if you went into a professional kitchen and you said, you know, you're wiping the knife and it's pretty much clean already, why don't you just stop wiping the knife? Then the chef is going to offer to use the knife on you and then wipe it. So, you know, the the commercial kitchen has developed these strategies that work out well.

**29:37** · And in software development, I mean, one of the things about extreme programming that I thought was the the biggest compliment I could have gotten was this is what really good teams look like in the wild. This isn't theoretical. This is an observation of what teams really look like. And that's that was my goal in extreme programming. If I if I said anything creative or I said anything innovative, I it was definitely a mistake and I wanted to take it out.

**30:07** · I wanted proven techniques.

**30:14** · But now we have this much more powerful tool that can go much faster that can create opportunities for feedback faster than we're prepared to gather that feedback or analyze that feedback.

**30:34** · And um the temptation is there to just let it go full speed ahead.

**30:41** · Uh and and I for me this is dangerous anytime I've tried fully agentic the dark factory the dark software factory and the dark doesn't it's not meant like dark like evil I was kind of hopeful the dark software factory like oh I get to finally write evil software and no it turns out that's not what they mean at all it's just there's no human involved There's no feedback. And that always goes off the rails. Always.

**31:14** · It It's And here's the problem. It's amazing while it's going off the rails.

**31:23** · The The crash is so entertaining, right?

**31:26** · You're like, "Wow, how did you get this much?

**31:31** · How did you do this much?" And and it's still complete crap.

**31:37** · But there it is. So the challenge for me in my personal practice, for the people that I coach, for the teams that I coach, is how do you create this space between features to go back and enhance the futures of the work that you're doing and to do that in this environment where it's so tempting to just implement the next feature, the next feature, the next feature.

**32:11** · So the comment is by pacing yourself you're giving yourself the chance to form understanding and that's exactly right. The best software that I've ever that I've worked on is software where I tried to maximize learning which threw off software as a side effect as opposed to I'm trying to produce software and sometimes accidentally I learn something because I messed up.

**32:45** · Your your habits if you're trying to maximize learning your habits look completely different. the pace looks completely different. You're not afraid to throw stuff away when it gets kind of messy. This is one of my early experiences uh working with Ward Cunningham, who was my mentor when I came straight out of school. The biggest piece of luck I ever had in my life. Ward invented the wiki.

**33:13** · Um and we had developed some code was It did what we wanted to, but it it \[snorts\] was late in the day. We felt a little bit like h I don't know. And he just reached over and turned off the computer. And I about jumped out of my skin like we implemented this stuff and it was kind of working and we only felt a little bit bad about it. How could you how could you destroy that?

**33:43** · Uh, so I was kind of huffed my way home and came in the next morning and we reimplemented everything that we had done the entire previous afternoon in about 15 minutes and it was absolutely clear and we understood it and that was that was the light bulb moment for me.

**34:02** · This is a learning process that throws off software as a side effect.

**34:08** · Whereas the temptation in the dark factory, you don't learn anything except at the end you learn how unreliable the genie really is. But we already knew that. So why is it that I need to keep learning that? I don't know.

**34:26** · So that's what I'm trying to create this trajectory where futures and features work go together in uh a little bit back and forth.

**34:40** · Now, something I've heard echoes of earlier in the day is a distinction that I want to make that it's it's coming back. This is again one of these advantages slash disadvantages of experiences. You see stuff and you go like this again. Okay.

**35:01** · And this is uh the distinction between oneshot development and iterative develop \[snorts\] sorry about that iterative development.

**35:18** · Sometimes my mouth gets a little ahead of my brain or maybe it's the other way around but here we are. Um, there is such a temptation in specdriven development to go down the path of I'm gonna write a spec and the genie is going to produce the software and if the spec is good enough, the software is going to be good enough.

**35:44** · And there's a word for that.

**35:48** · That's exactly waterfall development where it didn't work. It never worked.

**35:54** · If you go back to the original Winston Royce paper about the waterfall, there's a diagram with the waterfall and it says right there on that page, of course, this doesn't work because decisions you make later are going to inform decisions that you made earlier.

**36:15** · So the next page has waterfall going down and feedback coming up. But this the power of an image is everybody looked at that waterfall and thought, wouldn't that be awesome if I could just write a spec that was good enough and then the software would be finished? And that's what stuck. That's how careful you have to be when you're explaining things.

**36:43** · Um, what about formal methods?

**36:48** · Great question. Um, I have enjoyed, so when I was in graduate school, I wasn't in mu I was in music school and computer science school every other year.

**37:00** · Um, and I just ended on the wrong year.

**37:02** · So, I'm on stage here during the day instead of in the evening.

**37:08** · Feels good to be in a music venue, though. Um uh I was uh I was a TA for the the proof of program correctness class. So I have those patterns baked into my head and I use them informally all the time to do some data flow analysis or control flow analysis and define some invariance and so on.

**37:31** · But I hadn't done formal proofs until maybe a year ago and a friend introduced me to lean and lean with the genie and I tried it out.

**37:48** · Uh the challenge I have with formal methods is twofold.

**37:54** · One, it's still feels like a oneshot process.

**38:00** · uh I have some formal specification and I want to prove some properties of it and I do a whole bunch of work and I prove the properties. What happens if I change one element? Oh, I got to wind back and even if it's faster because I have the genie helping, it's still a drag on my ability to change.

**38:25** · And I want to encourage I want to build systems that encourage change instead of discourage change. So that's that's my my first one. And the second one is even with formal methods, there's still a gap between this mathematical model and implementation.

**38:47** · Okay, I can have some formal specification. I can derive some properties. I can prove those properties hold for this formal specification. and now I want to turn that into a running program.

**39:00** · There's still a gap in that derivation of the program from the formal specification and I I don't know how to how to bridge that. Okay, I want to turn that into CC code. I want to turn that into C++ or ARM 64. You can you can program an assembly language now.

**39:24** · It's so cool. It's so I mean that's where I started my dad and I soldering together a 6800 machine. Uh you can do that now. You can just say well okay implement this data structure and do it in x86 assembly. Chunga chunga chong ding out will come some. It's amazing.

**39:48** · Ju figuring out all the different ways I can torture the genie is just so entertaining. Okay, let me make this even harder and more awkward.

**39:59** · Um, so the the the second part of the to finish that thought about formal methods, the second part is that bridge that that gap between here's a specification and here's an implementation that matches that specification as far as I can tell is that hasn't been fully bridged.

**40:19** · Now, the good news is you can get to low defect densities with a combination of examples, automated tests, carefully chosen, and foolproofing uh of the design. If if you work at those two things pretty hard, you can get software that is trustworthy.

**40:48** · Unfortunately, the genie wants to make shortcuts.

**40:52** · It doesn't want to foolproof the design and it uh will do things that subvert the intentions of test cases.

**41:02** · Uh just you have to watch for returning constants. You have to watch for just all of the nasty things that you can imagine that a 14-year-old programmer would do just to say yeah it works boss. So it it is possible to write though trustworthy program with the with the genie. Ah so how I I got into that oneot versus uh iterative.

**41:31** · So are you making some software that has value deployed in the world that you then change and now it has more value in the world that you then change and then how now it has more value in the world. That's one paradigm versus the I'm going to write a spec and the spec's going to be so good that the software is going to be good. Oh, it's not.

**41:56** · I'm gonna write more of a spec and a bigger spec and a until the spec is big enough and complicated enough that the software is correct. And there's times to do both. If I'm writing a little app, one shot is fine.

**42:19** · If I'm writing as I am a virtual machine for a graph database with an embedded programming language, that's not good enough. It's going to have to be something where I have some software, it has some value, I see a way to improve it and so on. the

**42:38** · the the people who are getting really excited about spec driven development just reminds me it doesn't sound like they've ever had a billion users because the kinds of things that you have to do if you have a really large installed base and a lot of traffic to

**42:58** · change software like one shot and then oh no never mind let me oneshot it again that's just never going to work because you've got you have uh continuity problems, you have data migration problems.

**43:16** · You're better off assuming that you're going to be iterative all along the way.

**43:24** · Now, I said that I was going to show you an update of a of a diagram, and I'm excited because anytime I get one of these, uh, I have a puzzle and I can finally solve it, then I I'm a very happy person.

**43:43** · So us programmers I'm gonna I'm a programmer mostly and so that's the way I speak.

**44:01** · If we want to look at what we do, there's this sequence where as a programmer, you put in a certain amount of effort and then you have a new say a new feature that you can deliver to your customers and that's output.

**44:24** · And then the customers use that feature and their behavior changes.

**44:31** · After all, if we produce software and nobody's behavior changes in any kind of way, we didn't need to produce the software.

**44:41** · And that's outcome. And one of the the big changes in my life was moving to the web and being able to observe what customers actually do with the software. Before then, you had software on a CD. You'd send it out. Are people using my new features? I don't know. There was no way of knowing. So, just being able to observe outcomes was a big step forward.

**45:09** · How much of what we did was wast wasted effort because nobody used the feature at all.

**45:20** · But here's what I learned today is outcome for the customers, the people using the software leads to and I used to use the word impact but I love this word mission

**45:39** · leads to changes in our uh accomplishment of the mission and the mission is shared between the people making the program and the people using the program.

**45:55** · And here's where we get to the tyranny of metrics. People will be amazed. The Genie produced 200,000 lines of code.

**46:05** · That's a measure of effort. It has nothing to do with the mission.

**46:10** · And whether the mission is making enough money for my next yacht or I I don't have a yacht, just using that as an illustrative example, or making the country safer.

**46:25** · The fact that we've generated 200,000 lines of code is irrelevant. And 200,000 lines is not 10 times as much as 20,000 lines. From the mission perspective, it's just irrelevant. And yet it's the easiest thing to measure. And so we look for our keys under the lamp post.

**46:48** · And the genie is able to produce so much output with so little effort. It's easy to see that as productivity because a after all productivity the the very definition of productivity is the ratio of output to input.

**47:10** · And whether it's lines of code, which we've known was Boulder Dash for a very very long time and somehow it's back PR count you you anything which is a measure of effort or a measure of output is per definition not a measure of mission.

**47:36** · The problem with measuring mission is it's hard to do. Oftentimes value from the mission is uh bursty.

**47:47** · Like you don't see it until a crisis happens and then you realize that you're ready for the crisis.

**47:54** · So it's hard to measure from the the level of the mission, but that's what actually matters. So, the fact that the genie can give you a lot of effort and now I can just spin up 10 genies and now I have 10 times as much effort.

**48:15** · Yeah, but it doesn't matter.

**48:18** · Doesn't mean that we're making progress on what really matters to people. And the earlier in this cycle you measure, the more likely you are to see um Goodart's law. You know, when a measure becomes a goal, it ceases to be a measure.

**48:41** · I think Goodart was an optimist.

**48:44** · It's not just that the measure ceases to be a measure. It's that people will twist the entire system out of shape. They'll make it worse in order to get better measures.

**48:59** · So, it's not that you just you lose visibility by turning measures into goals. It's you lose progress on the mission by doing that. The later in this cycle you go, the harder it is to attribute, hey, I the mission is now 7% better and I own 075% of that.

**49:26** · You know, it's hard to say what you did versus what he did versus what she did, like which of us deserves the credit.

**49:36** · And this is the challenge.

**49:39** · Um, we had from earlier today, how do you how do you incentivize progress on the mission? And I'll close with just a few words about this. I've had the great good fortune of having a few of my ideas spread out in the world of software development.

**50:00** · And what I know about that process is uh you have to find an expression of what you're trying to accomplish, of the mission.

**50:15** · You have to find an expression of the mission that speaks to people's heads and their hearts.

**50:21** · And then you have to repeat it and repeat it and repeat it. And that repetition, that not getting bored with telling the story of how software development can be over and over again is part of the skill of leadership.

**50:42** · To tell that same story for the thousandth time as if it's brand new.

**50:48** · And then someday somebody will come to you and say to you, I have I have this great idea. and they'll tell you your idea without realizing it was you, without giving you any credit whatsoever. And that's the moment that you've succeeded as a leader. And I think we have these tools that have the capability of transforming the value we create in the world.

**51:14** · And that's the challenge is finding that those missions into which the tools fit for human purposes.

**51:25** · And I'm looking forward to finding out what comes out next, to doing my little bit to shape what that is, and to seeing what it is that you do that also shapes the future. Thank you so much for your time and attention.

**51:41** · \[applause\]
