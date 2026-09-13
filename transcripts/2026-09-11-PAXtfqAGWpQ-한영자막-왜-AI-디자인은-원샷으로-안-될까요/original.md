---
title: "[한영자막] 왜 AI 디자인은 원샷으로 안 될까요?"
author: "Tech Bridge"
site: "YouTube"
published: 2026-09-11T04:30:11-07:00
source: "https://www.youtube.com/watch?v=PAXtfqAGWpQ"
domain: "youtube.com"
language: "en"
description: "Claude Code, Copilot, Cursor 등 코딩 AI 위에서 동작하는 혁신적인 디자인 스킬 'Impeccable'을 개발한 Paul Bakaus가 설명하는 AI 디자인의 본질과 조향(Steering) 철학입니다.왜 AI 디자인은 원샷으로 끝낼 수 없는지, 그리고 단순한..."
word_count: 3090
---

![](https://www.youtube.com/watch?v=PAXtfqAGWpQ)

## Transcript

### Impeccable 소개와 직접 비교해보는 오프닝

**0:00** · Cool.

**0:01** · Uh, let's get this going. Welcome everyone. Thanks for coming.

**0:05** · Um, my name is Paul and uh, I'm going to try to save you from the midday slump.

**0:11** · So, let's uh, let's see if we can do that.

**0:13** · Um, okay, so this talk, this cold open of this talk will make a lot more sense if you know uh, what Impeccable is. Uh, but if you don't know what it is, it's a design it's a design skill that turns your coding harness into a better designer and hopefully you into a better designer.

**0:29** · Um, and you can try it out. It works across all harnesses, cloud code, GitHub Copilot, Cursor, Codex, etc. Um, and this talk is really about uh, my approach to how to building this tool uh, as opposed to the tool itself. Um, but let's get started with a pretty typical website. So, this is a intentionally very basic website and I want to give you that one as context to what I'm going to show you next. So, you know, it's it's a it's it's an okay website. It's not great. It's pretty bland.

**1:01** · Um, but it at least it has some color, some something. Um, so now here is um, the command make it bolder.

**1:12** · Make the workflow section bolder with Impeccable.

**1:15** · Um, so this is with Impeccable installed.

**1:19** · So, now there are it's not perfect. There are some problems with this. For example, the um, the section numbers that you have there, that's a very typical AI slop tail.

**1:30** · Uh, that uh, that GPT loves to do and I mean Claude actually loves to do as well. And it sometimes creeps in. So, I wouldn't say this is perfect by any means, but I think it's I would say bolder than before.

**1:42** · Um, now a lot of people install Impeccable, try it out uh, and then they ask me, well, I don't know, like maybe it could be placebo.

**1:51** · Maybe the model is good enough in itself, right? Uh, not sure if it actually works. Well, let's compare it to This is exactly the same project GPT 55 on extra high Um same exact prompt without impeccable.

**2:08** · So there is a slight difference I would say but you be the judge of that.

**2:13** · Um So the before and after is pretty different and I'm going to talk about why that is.

**2:20** · And um and and what the approach is.

**2:24** · So designing at the speed of adjectives and um to get the elephant out of the room they are not just adjectives they are also verbs.

**2:32** · Uh but some of them are adjectives.

### 허물어지는 직무 경계와 무너진 전통적 핸드오프

**2:37** · First off the role of the engineer and the designer are blurring. Um I've seen more people become design engineers than ever. Uh designers are moving into code, engineers are moving into design and vice versa. Some of the best comments I get from people who walk up to me and say like well impeccable gives me this shared language of design that everybody can communicate now in. But really these worlds are all colliding in my opinion and the typical handoff is kind of broken.

**3:03** · Like the the waterfall process of I start with design, maybe I start with like the what on the PM side, then it goes into design and then there's like this handoff and this critique process and then ultimately the engineer builds it. That thing is just not real anymore. I don't know about you but um I think that's starting to collapse very quickly in small and large companies.

**3:28** · And when it comes to the actual work of design I feel like there's right now kind of like two worlds that you can play in.

**3:36** · Either it's direct manipulation that's sort of like in the pixel space. Right?

### 픽셀 직접 조작 vs 완전 자율 에이전트

**3:40** · So you're in Figma and you're manipulating margins, paddings, whatever it is. Um or you're in Webflow or you're in some other tool where you're directly manipulating the final output uh or the design.

**3:53** · Now, that's fine, but then you feel like you're getting behind because everybody else is like agentic and going crazy with loops and loop maxing, right? And now you're going on the other extreme, which is simply saying, "Hey agent, please design this for me or please build this."

**4:06** · Uh, but it feels like, to me at least, there's this there's this middle ground that we haven't explored enough. Like, what is the exact level of control? How can we insert the human in the loop at the exact right time?

**4:20** · Uh, and so this this came to mind then.

**4:22** · Uh, it's a pretty popular tweet a while ago.

**4:25** · Um, so centering a diff with Opus. Yes. Uh, not a great use of Opus.

**4:32** · Uh, but, you know, it kind of kind of speaks to that problem. It's like, okay, well, when do we use which tool? When is which tool adequate to do what job?

**4:44** · In my opinion, right now for most work, the direct manipulation of padding, margins, spacing, and so on is actually at a elevation that's too low.

**4:56** · And on the other hand, um, if you go fully agentic, you get web pages like this. Now, that you would you would get this in like 2022, I would say. So, everybody here can point out the typical AI slop patterns.

### 슬롭의 진화: 보라색 그라데이션에서 'Claude 베이지'로

**5:09** · Um, but the purple gradients were actually way beyond that. There are no purple gradients anymore uh, in most frontier models. Um, now we just get this and it's kind of where's the difference, as Clod would say. Um, but uh, but it really is slop as well. It's just a moving target. So, now we have I call this Clod beige. We have these instrument serif fonts. We have italics.

**5:31** · And it's not necessarily a bad design.

**5:34** · It's just everything that comes out of Clod design looks that way.

**5:37** · And when everything looks the same, you kind of get algorithmic Uniqlo, as I call it.

**5:43** · Uh, so also not great.

### 디자인은 '원샷'으로 완성할 수 없습니다

**5:46** · Now, here's my first hot take of today's session. You cannot one-shot design.

**5:52** · Um now, many people want to and maybe we'll get there eventually. I just don't think it's possible at the current moment. Uh maybe not ever.

**6:01** · Um I think in order to build something that really looks and feels great and is effective design, you need to have something that's context context-rich, rich has been informed by what you're trying to do, what your audience is, what you're trying to build. And also, it will have to be multi-shot. You will have to iterate on your design.

**6:22** · Uh and you I mean, even if you're a solopreneur, but if you're not a solopreneur, you might have different people who have different opinions. Users have opinions.

**6:29** · I mean, design is messy. It's process.

**6:32** · And wishing it away and just saying like, "Solve this problem for me, agent."

**6:36** · will not, unfortunately, solve your problem.

**6:39** · Um Now, the other problem is if you don't know the language of design or if your stakeholders don't know the language of design, it gets really frustrating really quickly, too. So, if you've ever designed something, um you kind of know like this kind of experience. Um and then, you know, the inner feeling builds up of like, "Mm."

**6:58** · And at some point, you're like, "Ah!"

**7:02** · Uh So, really what you have to ask first is, "What's the emotional territory?

**7:07** · What should this never feel like? What's What's the reference? What's the audience?" These are all really important questions to figure out. Like, you can't go to a human design studio, even if it's the best design studio in the world. You go to design director and you say like, "You know what? I want a design for my brand."

**7:25** · And the design director nods and like, "Got it."

**7:29** · And then walks away. That doesn't make any sense. Like, they obviously have to figure out what it is that you're trying to build and what you're trying to get out of it.

**7:38** · Importantly on this example, even sort of like the 2026 version of AI slop, you know, quickly write code a page.

**7:45** · Nobody decided anything here.

**7:49** · Like you just one shot at this. Nobody decided anything on this page. This was just you mean it's maybe competent, but completely empty.

**7:58** · So my uh thesis that I make here and what I've been trying to build over the last couple months is a tool that gives you just the amount of control needed to steer your agent in the right direction with adjectives and verbs.

### 형용사와 동사로 에이전트 조향하기

**8:14** · And these are the types of words that I'm talking about. Talking about words like make this bolder and make this quieter.

**8:20** · Uh distill this. So basically simplification. Um polish this. Um make it denser or harden this.

**8:27** · Um harden for instance would mean uh make sure that this design works across the board. Maybe the performance is bad on certain devices. Maybe it's not responsive.

**8:36** · Um and so these are these are words that we use in the world of design.

**8:42** · And I noticed when seeing two people attempt the exact same task and one is an engineer who's never really touched design at all and the other one is a designer um there's a stark difference even when they use the same model and same harness everything in the output that they're getting based on the language that they use.

**8:59** · So I've been trying to put that language basically compress it into a skill uh and into a system to be able to express yourselves better.

**9:10** · And so for example, you could have like a baseline um over here, but then you make it bolder and the agent actually knows what bolder in your context means. You make it quieter, it knows what it means. Uh you distill and it knows what it means.

### 프로젝트 맥락에서 'bolder(과감함)'가 갖는 진짜 의미

**9:27** · Um but then bolder how? What does bolder mean in the context of your project?

**9:33** · That's a really important question because as you could tell at the beginning of the demo, uh in the cold open, uh when you just ask GPT or Claude or whatever, make this bolder, it doesn't know anything about what you mean. Uh now, it had has its own sense of reference of like what bolder could mean, but it will do whatever it wants, right? It will invent new colors, it will invent new gradients, it will I mean, it doesn't matter.

**9:57** · Um what it actually means in impeccable, not gradients, not glass, not neon, but actually hierarchy, scale, decisive type. So, uh things that uh don't break your design system and adequately raise the attention that the user would put on it.

**10:18** · Uh and this is an actual sentence from the the file that is loaded when you say bolder in impeccable.

**10:26** · Um show someone your work and say, "Hey, I make this bolder."

**10:30** · Uh make this bolder. If they believe you, you failed.

**10:33** · Uh this is something that we actually instruct the agent to do for themselves.

**10:37** · And then the agent often times reflects and like, "Mm, I don't know. Think I did some bad work here."

**10:45** · An adjective is a lightword.

**10:47** · And a lightword, such a German term, uh and Matt Pocock actually talked about this recently, uh who also makes some really excellent skills. And so, this is uh stolen by one of his tweets, but I really think uh um it makes a lot of sense. Um these are words that have that you basically imbue with meaning, that you infuse with meaning, and they mean something They already mean something to the model, but then you translate this into the area that you're interested in.

**11:18** · And the right altitude really shifts. Um now, I don't think you can solve any problems at that altitude. That's super important, too.

**11:28** · Uh there is still room for the very beginning. For instance, if you just want exploratory work and you just want to get something on the screen, or you just want the last amount of polish. I don't think right now, uh AI is good enough to replace humans for the last 5, 10, maybe even 20% of the work to get it from good to great.

**11:47** · Um but it does actually make it better.

### 복잡하고 지저분한 디자인 워크플로 매핑하기

**11:52** · Now, I've built tools for more than 20 years. I guess I'm dating myself here.

**11:57** · Uh but whenever I build a tool, I actually map the workflow first.

**12:00** · I think about what is the actual workflow of the target user that I'm trying to help. And the workflow of design is not linear, it's messy, has many different stages. Uh there are different people involved. And so, I kind of mapped every part of the process and thought about where what are the injection points along that route, and how can we help along that route?

**12:22** · Uh so, you start with initialization, with the shaping process of design. Uh you go over to uh crafting, to iterating, uh with all these verbs and adjectives, and then to the actual hard and polish phase. And finally, you kind of bring it back to your design system, you do some tech debt clean up, design debt clean up.

**12:40** · Um Now, here's one example of a command that I wasn't actually sure about shipping, and it's called overdrive.

**12:47** · Um I basically built this uh built this command in Impeccable that uh tries to create something completely over the top, and it was kind of like a a half of a joke, maybe.

**12:59** · Um but people absolutely are rabid about this about this thing, um and they love it. Um and so, this is just one example of I mean, this is not one shot it. Uh this is a um sort of realistic event horizon shader um that I've built for my shader library, radiant shaders. But I did actually use the overdrive command for this uh to uh overdrive it even more, uh make it more ridiculous.

**13:21** · So, sometimes I come up with these uh commands that actually not sure about, and I test them with the community and once it sticks, uh I realize, "Okay, well, there are more people are getting joy out of this."

**13:34** · Um Oh, here we go. Here we go. Okay. Um, an adjective with nothing behind is just a nicer prompt. So, you really have to tell the agent what you mean by the word that you're using. Uh, it it has so many different meanings uh, within its training materials that you really have to tell it. Um, now here's another thing.

### 자동 모드는 없다: 취향은 연구실에서 배양되지 않는 이유

**13:57** · I've gotten so many requests for an automatic way of using impeccable.

**14:02** · So many.

**14:04** · It's so frustrating. Like so at least once a week somebody tweets at me and says, like, "You know what would be cool? Just let impeccable do all the work by itself. I don't have to decide on any command anymore." That's not the point. The point is to give you a way to steer what you want to end up with. It's never going to be a tool to one-shot design.

**14:22** · That's not the intent and I'll never I mean, there's a pull request standing uh, standing out right now that I'm not going to close because of that.

**14:30** · There is no auto and there will be no auto.

**14:34** · In my opinion, and uh, this is a bit awkward maybe for some uh, of the next speakers, but I think taste cannot be amplified.

**14:42** · Uh, sorry, I think taste can be amplified. I think I call this amplified craft. Uh, and I think you can work with tools to sharpen your taste and bring out more of your taste. I really do not think it can be lab grown. Lab grown, I think it is uh, taste by definition sort of is uh, contextual, it's cultural, it's scarce, and once everybody replicates the same thing, it starts to become really muddy. And we don't think of it as taste anymore.

**15:10** · That's my opinion and I know this is like a hotly contested topic, uh, but I'm not trying to solve taste with my tools.

**15:18** · Um That's what I got. Uh, this was about finding the right level of control for design. Thank you very much. And uh I think I have time for a few questions if you have any. Thank you.
