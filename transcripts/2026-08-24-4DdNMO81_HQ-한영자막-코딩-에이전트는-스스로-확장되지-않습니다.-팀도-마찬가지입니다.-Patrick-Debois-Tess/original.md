---
title: "[한영자막] 코딩 에이전트는 스스로 확장되지 않습니다. 팀도 마찬가지입니다. — Patrick Debois, Tessl"
author: "Tech Bridge"
site: "YouTube"
published: 2026-08-24T02:00:15-07:00
source: "https://www.youtube.com/watch?v=4DdNMO81_HQ"
domain: "youtube.com"
language: "en"
description: "코딩 에이전트가 팀 생산성을 키우려면, 개인이 코드를 고치는 데서 멈추지 않고 에이전트가 일하는 시스템을 개선해야 합니다.Patrick Debois가 하니스, 피드백 루프, 플랫폼 팀, 그리고 조직의 지식 축적이 왜 핵심인지 설명합니다.주요 포인트- 에이전트 코딩의 차별점은 모델 ..."
word_count: 3701
---

![](https://www.youtube.com/watch?v=4DdNMO81_HQ)

## Transcript

### 여기서는 안 된다는 말이 뜻하는 것

**0:00** · Um I'm going to talk to you maybe not on the technical side but more on the organizational side. So if you're here for any technology you can still leave if you want to.

**0:13** · So in 2009 um a lot of people were telling me the idea of continuous delivery was crazy and I feel we're in kind of the same era or kind of the same thing right now with a dark factory. It will not work here. That's what I keep hearing over and over again. Um, but what they're actually signaling to me, we're not ready yet. So, it's not the technology that can't make it work. It's not something they want be able to do eventually, but they're just not set up for this.

**0:46** · And there's been a lot of conference talks here about optimizing agents with loops and harnesses and all those pieces. And I think that's great, but eventually we'll get there, right? It's not that this is the rocket science and yes we'll have to assemble this in a good way but one day this will kind of become commodity somewhere maybe even going into one of the you know frontier labs that just offers this as a service and will kind of make this work uh and that's not going to be the differentiator um for your organization.

**1:20** · So I'm starting from there up assume we're heading towards the dark factory some kind of form of autonomous working within an organization.

**1:30** · Um what I've seen for the people adopting this within our organization including here uh where I work at TESL it changes dynamic of the way you collaborate around this and for those familiar there's like Conway's law like you know the way you organize yourselves and the tools there is a relationship on how they interact and kind of work together on this but today I'm not talking about like how you become better with your agent but it is about how will we will change your team dynamics, your platform and your organization.

**2:02** · So that's what I'll take you through enabling the team. I assume most of you somewhere work in a team and that you're not somewhere a soloreneur working. So it kind of works different than just you with your claude code and a team working together around that with claude or any of the coding agents there as well.

### 프롬프팅을 하려고 개발자가 된 게 아니라는 반발

**2:28** · The narrative that I heard a lot is well the developer eventually becomes more of a conductor and an orchestrator of agents and I think that's fair that's been an evolution that we're on on the path we're more like becoming the managers of the agent and kind of dealing with the agents.

**2:48** · Now what I've seen is that if eventually a lot of developer told me we didn't sign up for this, we didn't sign up for better prompting writing better specs.

**2:58** · We're engineers, we're technical and that creates friction like is this the role that we really want to do. There was a thing that came around which maybe is more context engineering that put a first step around like hey it's not just a prompt. We'll test the prompt. we'll kind of evaluate the prompt. We'll kind of distribute the prompt and kind of optimize the prompt. So yes, there's a little bit of engineering, but still a lot of developers kind of felt empty just working kind of with a prompt and a specification as such.

**3:33** · What I've seen is that when we started introducing hardness and loops and eventually more autonomous work within the whole organization, a new technical path opened.

**3:44** · All of a sudden, we were helping the agent with tooling, building tooling for the agent, and that kind of reignited some of the developers kind of felt that it wasn't for them. Now all of a sudden they were like, "Yes, we can do this. We have that knowledge. We're like somehow helping this even with a kind of programmatic way." So I I think that's interesting that the identity where we say abstraction abstraction abstraction technically all of a sudden the craft created some new location for more engineering stuff to go to.

**4:19** · Now when I get the question can we please help people and they're skeptical people what do I do and I also said that these are really great people to engage in creating better context for the agent because you tell them please improve please put all your knowledge to improve the result of the agent and the same with the harness.

**4:42** · So if you have those kind of more resistant people that like complained maybe about the quality that things were produced by just a vanilla kind of coding agent use almost that anger use kind of that skepticism to kind of make it better.

### 코드를 고치지 말고 시스템을 개선하세요

**5:02** · And the big mentality shift, if I would advise a a company right now for their developers, is kind of stop fixing the code that the agent kind of produced, but improve the system. I'm I'm not the only one saying this in this event, but kind of that is the difference like you kind of improve the system.

**5:24** · And I think it was Swix uh a couple of years who said it like stop building the thing but build the thing that builds the thing right so we going on that abstraction whether that is with context with harness with loops and that is kind of

**5:39** · the change that a lot of people who are still very tightly in the loop autocomp completion prompting that they kind of need to think about elevating this to the system thinking so what we're really trying to do is minimize the human touches but still with good engineering practices and some of the narrative that comes up more often in the beginning we're like oh great vibe coding a prompt and it gives a result and we can keep going where we now see well we're kind

**6:12** · of instructing it through prompts but we're also instructing this like please do it with tests please update the documentation please do this all the things that we're saying to good engineers were now asking the agents to do. So if you still have people who kind of yoloing their way into this, I think you should tell them no, stop doing this.

**6:34** · Like engineering practices still matter for you to maintain the system and also for the agent to keep getting better at this.

### 회고·계획·후속 작업의 압박

**6:46** · What I started seeing in some of the more advanced kind of teams is that their rituals of hey we're doing a planning and we're doing a retro in the team that they weren't about like hey we had issues with the code but we're saying we had issues with the system. So on the retro part is like hey the agent went over and over hit this problem. Can we fix the system? That's something you learn in the retro.

**7:13** · And on the planning side, what I started seeing is that things who were uh that were sufficiently scoped enough were easy to pick up by agents because they were well defined and what still was left for the humans were the things that weren't scoped out well.

**7:31** · So there were like a split in the planning where you said these things can straight go into agents well defined and the harness is getting better and this is conversational things that we need to decide as a team and what I find important is you there's a certain kind of cycle that developers go to yes they learn first about prompting they get better specs context harness

**7:59** · loop also the industry is learning like that But there is the lead of the team can say well stop prompting make the context reusable. Now we got that now we jump to the next. So part of the team lead is putting that pace at almost that constraint and that directive in the team where it is doesn't work where you just say go figure it out and do something on your own.

**8:27** · And one of the impacts of that is that if you start producing as a team more, the people downstream, GTM, people like that, they have a hard time keeping up. Even users have a hard time keeping up. So you need to help them also with automation. So your harness doesn't stop at your coding. It also is extended to those people as well. And the same thing with kind of requiring uh like gathering requirements. the input might not come fast enough for your team.

**8:58** · So that's another kind of piece that you need to tap into that workflow as well.

**9:05** · There's a lot of metrics that people are saying like hey is your like tokens spent and all that stuff. I started to believe in these two metrics to kind of see on how to be more productive.

**9:19** · One is you start measuring how many human touches you still do to have the agent do the right thing. That's supposed to go down the better your harness is, the better your context is, the better your guidelines are. And on the other hand, if you're going from solo to shared system, that becomes a multiplier. You fix something once, everybody gets the benefit.

### 사람의 개입 횟수와 재사용, 두 가지 지표

**9:46** · This is not the multiplier from the one person becoming the 10x person, but the one change that optimize the agents has an impact on all the people.

**9:58** · So that is kind of the pot that we're all you can start that in a team working together within your repo, sharing the context, working on harness, but what you basically want to do is you want to scale this out. So you come into the realm of the platform people, right?

### 플랫폼 팀이 새로 풀어야 할 문제

**10:14** · because they're the typical shared organization working on this. Now, the platform people, they might not be paying close attention because they're like infrastructure and cloud and working on MTP gateway and stuff like that, but there's new things like bubbling up there. They need to think about like maybe skill registries or eval systems for a context and guard rails specifically for coding agents and identities and stuff.

**10:40** · So they need maybe a little bit of a hand kind of grow into that role and that kind of central role it's hard. You need an owner to drive that program. But is it the platform team? Is it developer experience team?

**10:59** · They don't typically own any of those pieces of the infrastructure and the other people don't really do the development. So there's somewhere a blend, but you need to kind of make sure that there's an owner driving this centralized piece and not just within your team because you want to have paved roads. And that's how I see it. Reusable context across teams. Why we all inventing how we do the authentication system, right? This is a shared component. Let's put it in the registry.

**11:30** · Why are you building all your harnesses?

**11:32** · Well, if we're all using the same llinters and the same security tools, that's a reusable component. So, I think that will centralize similar to the pave path for cloud into that platform registry of reuse.

**11:47** · But if everybody can put stuff like on the internet in the repo, it becomes a sprawl and it becomes a thing like well he has a skill is maintaining it. that person is also has a similar skill and forked it not what I do like which one

### 확산을 막고 포장된 길과 비용을 보이게 만드는 법

**12:06** · do I pick so there is a kind of thing that you say there's an owner for this area and they also care about making it testable they make sure that it's modeler that other people can extend kind of the context for example or the harness that it's security scanned so you build kind of a more centralized and the fact that it's secured and kind of maintained as something instead of just something I share around in my organization.

**12:34** · Now that consensus is hard. I'm not saying this is tap versus spaces, but at times it feels like that if you have two developer teams having to have consensus on how the way they work. That requires a lot of communication and brokerage. So you probably don't end up with one thing but a catalog of three, four paved roads where they can pick off and they can still do their own but that's on the wrong budget. Right. The centralized pieces will be maintained and that is supposed to be the easy way of adoption to go there.

**13:08** · Now if they do this blindly, we also want to make sure that they know what is costs because if they visualize the cost, they might be eager to do some optimization in there, right? And that kind of is part of the platform team is making that visible. How much is this spending? How much is that kind like helping?

**13:26** · If I can reduce the number of iterations the agent has to run through that is an optimization that I can run but if I don't visualize that and I just see the end result then we don't know right so that is part of the platform team helping people and so what I'm arguing is that we should somewhere move from the solo developer to the team shared kind of

**13:51** · context and pieces to a multiplayer system in the organization and I think that's where the multiplication effect will happen right because you have this flywheel of improvements to go uh into multiple directions.

**14:07** · Now one layer higher the VP engineering says how do I enable the organization right and that is that I you know I can predict the story in your organization a hackathon a lunch and learn let's share the successes have a shared slack channel have a champions program that's all generic transformation it could have been agile that transformed like that it could have been devops it doesn't matter and on the other side we know that the strategy of just you know give licensing

### 챔피언 프로그램 없이 조직을 지원하는 법

**14:37** · and educate people do something let the thousands of flowers bloom it doesn't work so what I'm advocating is that the kind of on the organizational is that you give the team leads and the platform that mandate to start doing that work and it's not a solo developer piece

**14:56** · now finding people that help you externally is a mess yes we have all the titles the new job titles AI product engineer for a deployed engineer you know there was a whole talk on this agentic engineer AI engineer it doesn't mean anything you cannot judge whether what kind of the

### 직무명이 무의미해질 때의 채용

**15:18** · maturity of this because nobody's really that mature but it's a signal when you put a job posting out there that people might with the new intention will be looking there but it's not a validation of the skills as such right so that is challenging for people um kind of hiring people.

**15:39** · Now they come to the interview and I heard stories about uh people using AI to like uh in their ears be response to the interview person and stuff like that. I think what what I hear from most companies is they say first step is we give them an exercise and we want them to really go nuts on the eye to solve this. you know if they have help from AI

**16:06** · that's all good that shows you kind of like how much they can kind of leverage the eye to do this now after they pass this you do a walk through and you actually say please explain me what happened why is this a good idea that's where you are testing the taste and the engineering skills on why they doing this first part AI then engineering and the third thing is how do you collaborate are you willing to share.

**16:34** · Are you open or are you a solo player?

**16:36** · That's another signal that you tap into, right? But that fits into that whole thing of like making it sharable, making it reusable, making it engineering grade within an organization. Those are the people that you look for, not people who've studied ML or AI, not people who are like experts per se at the coding.

**16:56** · There's a blend on this. Now, you might not find a person who has all three, which is okay, but at least you know like, hey, they're very savvy on this piece, but then for the other piece, they need mentoring and they need tutoring. But like, don't put all the three pieces into one kind of saying like they're junior or they're senior.

**17:15** · They have like different skills on there.

**17:18** · Now the VP engineering has to defend this and they would uh have to make the case right. Well, we have x amount of licenses that we sold. We have faster delivery maybe that they can promise but hard to prove. We have quality that improved again hard to say.

**17:35** · But similar to what I said with the metrics of how effective are your agents, you can show that how much turns and how much improvement that you're making on that journey and same thing how much there is reuse. So it's an easier way to kind of show metrics than comparing productivity with and without agent coding that help you in kind of those uh discussions as well.

### 비용을 막는 대신 최적화하는 방법

**18:05** · And so when people say uh the vendors are charging completely nuts so we're going to limit the spend.

**18:14** · You shouldn't say like let's limit all the spends.

**18:18** · Your reflex should be let's optimize the spend and help them kind of reduce that uh in a good way. Whether that's as simple as saying pick the right model, educate them on the model, but also on like giving them better context and harnesses because that will make your cost go down there as well.

**18:36** · the debate on smaller and bigger teams.

**18:40** · Yes, it's nice to have like one person who can do it all. That's the ultimate dream. They can do everything.

**18:46** · Typically, they're paired with a complimentary skill. Maybe PM design and so on. Okay, then we need a backup if one of them is on holiday. So, that amounts back to three. And then maybe somebody has to care about production and tickets coming in. could be the same people if you're really productive, but yeah, you know, you lose speed on features if you're still doing bugs and that depends a little bit on your quality. And then there's the junior you want to get on the road as well to kind of make sure they're still learning what good looks like in one of those three areas.

**19:18** · So I think we're still limited in a way in an organization that we're not going to each team being a solo or one or two. Yes, a lot of experience, but I think that is the thing. Now we keep investing in actually education for that piece as well.

**19:35** · So one of the final attitudes is the dark factory with probably a dim factory. You have to see what risk you're willing to take for what features. So not all features will become autonomous but you can invest more in auditing like provenence like who changed the code verifiers that kind of check whether that code was useful and when it fails you invest in situational awareness as well.

**19:57** · So there's a whole spectrum from being a micromanager to being a autonomous approval that everything kind of is correct but you make the decision on what your risk level is and I think your mode is capturing the knowledge right the knowledge you're putting now into skills you're in your context and maybe in your harness the way you kind of restrain this your business context and for me that kind of

### 희미한 공장과 지식이라는 해자

**20:24** · brings continuous delivery actually to continuous learning And if you ask the question, how fast can we swap in swap out something new?

**20:34** · That's your reactive mode. And if you can improve that, ultimately it's not about making the whole system more reliable, but can I keep it reliable while changing more of the system?
