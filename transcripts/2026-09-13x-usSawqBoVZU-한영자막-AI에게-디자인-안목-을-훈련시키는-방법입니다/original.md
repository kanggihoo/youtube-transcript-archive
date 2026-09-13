---
title: "[한영자막] AI에게 '디자인 안목'을 훈련시키는 방법입니다"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=usSawqBoVZU"
domain: "youtube.com"
language: "en"
description: "AI가 생성한 뻔하고 영혼 없는 저품질 결과물(AI 슬롭)을 끝내기 위해, Taste Labs가 200만 개 웹사이트를 분석하고 디자인 안목을 정량화하여 모델과 에이전트의 품질을 끌어올리는 연구와 실전 솔루션을 소개합니다.📌 주요 내용:• AI 슬롭의 3대 특징: 천편일률적인 반..."
word_count: 3701
---

![](https://www.youtube.com/watch?v=usSawqBoVZU)

AI가 생성한 뻔하고 영혼 없는 저품질 결과물(AI 슬롭)을 끝내기 위해, Taste Labs가 200만 개 웹사이트를 분석하고 디자인 안목을 정량화하여 모델과 에이전트의 품질을 끌어올리는 연구와 실전 솔루션을 소개합니다.📌 주요 내용:• AI 슬롭의 3대 특징: 천편일률적인 반...

## Transcript

### Taste Labs의 미션과 AI 슬롭(Slop) 문제

**0:00** · It's great to meet everyone. I'm Tais.

**0:02** · I'm the founder of Taste Labs. Uh for those of you who don't know us, we came out of stealth a few weeks ago. And our whole mission is basically how do we end AI slop? I it's my personal enemy. Um and so we really believe that to solve this problem of slop, we have to like decode subjective domains. Uh there's been so much effort being put into getting models and agents amazing at things like coding and math. uh and it's time that we put all that same effort into making them great at things like design uh and writing. And so design is this first pillar that we're starting with and it's been it's been incredibly exciting.

**0:33** · Um we work primarily in two ways. So we work a lot with the Frontier Labs on how do we evaluate their models, understand where they're breaking, understand what could be better about them, and then construct the right either post- training data or our environments to basically fix that problem. And part of this is like how do you take something as fuzzy and large as design and break it down to a level that you can identify what is best solved through each method. What are elements of design that are almost like once you kind of boil down the problem become so specific that they almost become deterministic.

**1:03** · So for example uh if you're trying to train a model to be good at selecting color palettes or have contrast or alignment those are things that if you define the problem and the context in a specific enough way uh you can get to an answer that's like pretty objective or that at least most experts would agree to. but maybe other things like uh aesthetics you naturally will see this expert disagreement and so then you want to lean on to things that are closer to to data. So anyway, we spent a lot of time thinking about all those problems. Uh but on the other side is also without even touching the model layer, right?

### 디자인에서 객관화할 수 있는 것과 주관적인 것

**1:32** · How do we actually help agents and app layer companies produce better things? And there's a lot that goes into that, right? You have these different sets of problems at the application layer because you're using an off-the-shelf model that tends to collapse in terms of style, tends to collapse with the mean. So how do we force that creativity back to the system? How do we avoid these patterns of slop which we'll talk about a lot today? Uh how do you understand like user preferences or a brand preferences preference so that you can uh maintain adherance to that style.

**1:58** · Uh so there's lots of things that actually need to be solved as context or judgment or verification at the app layer which is why we kind of work across both.

**2:10** · But maybe I'll start with more of a philosophical question of like how how do you define something that is great?

**2:15** · like how do you define greatness? And for something like math, it's easier, right? Because there's kind of one objective answer. And uh great is the same as correct. But then for something like writing or design, it's much harder, right? Like how do you define what's like a great tweet or what's a great art piece or what's a great website? Um I don't know what's the last time that you interacted with a poem or walked into a coffee shop and for some reason it kind of like hit different and it felt very special. Uh but probably it's a combination of things that it it felt very unique.

### 훌륭함의 정의와 슬롭을 정의하기 쉬운 이유

**2:45** · It felt almost a little different. It kind of called your attention. Uh it felt like there it was made with a lot of care and attention to to detail and craft and it almost had this sense of of like authenticity. Um and I think that's a lot of what AI is missing today is like how do we take uh things that are not necessarily average, right? How do we produce things that are purposely like out of distribution? Um and slop is kind of the opposite of that, right? I think it is hard to define what is great sometimes, but I think it's pretty pretty easy to define what is slop in the sense that most people would agree.

**3:12** · I think the sense of like repetition of kind of soullessness is something that all of us feel right now when using AI. And I think it's quite magical by the way that AI has gotten to a point that any human on the planet that is not even a designer that is not an engineer can click a button and suddenly make an entire PowerPoint or make a website or make a web app.

### 생성 비용은 0원, 안목을 쌓는 데는 평생

**3:31** · That's pretty cool. But it comes with consequences, right? uh it comes with consequences of suddenly now the cost of generation is basically going to zero.

**3:39** · Uh but the average person hasn't necessarily hone their taste like think about the amount of effort and work that a designer puts in throughout their life to like build up their taste, right?

**3:49** · Like there's all this process of like getting exposed to many things and learning to like spot patterns and learning to develop a point of view and like kind of do things in a in a courageous way that maybe are a little bit against the norm. learning what not to do and how to like have restraint and that's very hard like the the average person doesn't necessarily have the the time nor the skills to go and develop taste in everything let's say in design and so um I think it would be a bad case

**4:14** · scenario for us to just like be like okay the way to fix soft is for everyone to have taste because I don't think that's necessarily realistic um I think how do we how can we understand this better so that we can make even for the average person the ability to create something great and to understand maybe their own taste um easy more more more easy. So, uh that's that's a lot of what we're we're focusing on. Um so, yeah, I think this phenomenon of slop by the way is not new. Uh if you were in the internet, uh as social media emerged, you probably saw a lot of slop before that.

**4:42** · But I do think that AI has been this kind of like accelerating force, right, of like being able to create things very easily uh with a click of a button and the like thoughtlessness around it. And there's kind of these three characteristics that I I would say repeat in slop. Uh so, a repetition. So you start seeing the same thing many many many times. Um the second is lack of fit which I actually think is is very related. So fit is kind of this ability for something to feel correct for a specific context right for a specific moment in time for a specific person.

### AI 슬롭의 3가지 핵심 특징 (반복성, 적합성 부족, 낮은 의도성)

**5:08** · Uh but suddenly if you have repetition and let's say one person asks for a website for their pet shop and the other one asked for a website for their finance firm and somehow those designs converge and look the same. That's quite odd, right? like if that was in if you were actually crafting that with care that wouldn't you wouldn't converge necessarily on those things. And so this lack of fit and lack of understanding of context is actually a huge problem that like leads to slop.

**5:33** · Um and the third is maybe low intent which is probably a mix of yeah you're going to have a bunch of people prompting really quickly and maybe just wanting to oneshot something.

**5:41** · But I think there's actually this like intent interpretation piece that's missing in the systems that we're building. Like how can you help your user, right? like how can you help them better understand the intent that they have um so that you can add more color and add more context on onto what you're trying to create.

**5:57** · Okay. And I I'm a big believer by the way that you in order to fix something you first have to measure it and you first have to understand it. I think that's exactly why we're so focused on like how do we uh turn these domains into something a bit more verifiable so that we can attach a measure to it. So, uh, you'll you'll go on a little bit of a research journey with me here now, but we basically wanted to figure out, can we measure slop? Like, can we actually measure this quantitatively and spot this and what does that like look like?

### 웹사이트 200만 개 분석 결과: AI 이전부터 시작된 획일화

**6:26** · So, we analyzed over two million websites from the past like 10 years kind of like way back machine style to try to understand all the trends across like design, how is the internet changing, uh, how are how is like design changing over time. And two things were interesting. And we also, by the way, then kind of synthetically generated a set of uh designed websites. So we could kind of like compare like how does human-made sites compare to AI generated ones. And there were a few things that were interesting.

**6:53** · So one was that you already kind of saw a a bit of like a collapse uh on the internet before even AI. So you saw kind of the internet becoming more homogeneous using more similar color palettes using more similar layouts uh which is probably a function of more uh I would say this like kind of trend spreading more more more quickly let's say uh but with AI I think you saw this repetition happening a lot more and being almost more like um

**7:17** · identified kind of regardless of context so even in completely different buckets you saw patterns that were very similar so we we built this I I call this probes but basically we uh we did two things so we did this like pattern mining on all this data to understand What are features that we can extract from all these sites? What are all these characteristics that we can make more objective, right? Colors, typography, layout, audience, like how can we like distill this down into things that become almost like uh structured and then how do we uh train up these like probes? So, think of these as like baby classifiers like how do we train the ability to spot this one characteristic?

### 슬롭을 정량적으로 예측하는 소형 분류기 '프로브'

**7:50** · And for all these slop sites, we identify we started identifying like what are the probes that basically mean this site is very likely to be AI slop.

**7:59** · Um, and especially when you start combining them and you see the frequency of multiple of these happening at once, it became very likely that you could actually like measure uh and predict slop. And we saw a a super high basically ability to do that prediction, which was really cool to see. This performed better, by the way, than like most LLM as a judge methods of like asking an LLM to like judge if that uh is like great human quality versus like AI generated slop. Uh, so that was pretty cool to see.

**8:24** · I think it kind of shows this pattern that we see in AI really being uh an actual like quantitative thing that we can see in SOP. Uh which I find really cool. But obviously we don't want to stop there, right? We don't want to just measure slop. We want to also solve it. And so um there's a few I I think I mentioned this before, but like the as the cost of production basically goes to zero. I think the thing that becomes expensive and matters more than ever is judgment.

**8:50** · Um I don't even want to use the word taste here. Uh is judgment. I think is this ability to discern what's right is this ability to break down a problem so that you can actually understand it and create solutions for it. And so yes, there's a side of judgment that is human judgment that I actually think is more valuable than ever. But there's also the side of like how do we build the right tools and systems to like fix pieces of this problem, right?

**9:12** · So yeah, how do we how do we fight slop my my enemy? Um and by the way, I think there's there's a lot of conversation going around how do you fight slop at the model year? like how do we make models better? How do we make models have a higher bar? Which don't get me wrong has to be solved and we're working very hard to solve that too. But I actually think this problem of inference time is equally if not even more important because that's actually when you interact with the end user and this kind of back and forth of how do you understand this context and intent happens at that moment of inference time.

**9:42** · So I don't think that we can ignore and just make models better and not solve this otherwise soop will keep existing. Um, so maybe breaking down a few of those pieces and kind of um a few of the ways that we've thought about solving this or a few solutions that we built to solve this. But I think for example for something like repetition, one of the things that we're working on is I I've nicknamed it, I don't know if that's going to be the official name, but like the creativity API.

**10:01** · How can we create a system that almost becomes an inspiration machine for your agent so that it can produce something that's actually out of distribution instead of something that is in that same average and kind of mean that we're seeing happen with like the slop sites. Um, so this is one of the ways that practically if we can intentionally produce something that's out of distribution, you can improve this like overall uh quality. And by the way, I I don't think that this can be something just like randomness. It's not just about like turning up a temperature of a model and and kind of fingers crossed hoping for the best.

### 의도적으로 분포(Distribution)를 벗어나는 법

**10:32** · I think it's much more like how do we understand um even like what are rules or expectations in specific domains? Like let's say that you ask for a slide deck for for the pitch of your startup. Like what is a what does a good pitch deck look like? And then how do you almost like intentionally break rules uh to create things that are more creative, right? Because usually creativity isn't like randomness, isn't doing something that completely feels off for that situation. It's like you intentionally maybe diverge on a couple of things while maintaining kind of um adherance to to expectations of that category, let's say, for for others.

**11:04** · So that's one of the things we're working on. The second one on this problem of fit I think um it's interesting but brands as probably a lot of you who are designers know take so much effort to create great brands like great brands are the work of dozens of designers uh putting in a lot of like craft and thought and care. Um and so we've almost like already pre-done the work of defining what is great for that specific company and then we're not using it well.

**11:29** · So this like brand endurance I actually think is a huge problem and one of the things that can very more easily let's say like raise that bar of quality. So I I'll touch on an example on this one specifically. And then same with like intent and judgment. I think the baby classifiers was a good example.

### 에이전트가 따를 수 있는 브랜드 구조화 기술 (Brand API)

**11:43** · Um like how it how we can actually like use this to even become a gate for slop and and not let your agent uh ship slop.

**11:51** · But so the brand API is the first product that we're releasing to to the public. This is already in in beta testing with a bunch of uh our design partners. And essentially what it does is it can take let's say a brand URL and extract this into like very specific components that are good for an agent to follow. So basically how do we turn something as fuzzy as a brand into something so structured that it becomes easy to uh for your agent to follow that but also for you to judge against it right because I think the piece that we can't forget here is this judgment and verification. So yes this goes and helps your agent to produce something better.

**12:23** · Uh but how can we also add a way for you to judge okay is the agent actually staying on track? Is it actually performing well to adear to this brand or how is it failing or where is it failing? So this is the first flow I would say that we we are seeing that is really helping to improve quality. Um and what's cool is of course we're talking here about an example of a brand that already exists. But let's say you have an agent or you have an app and uh the person that is using your app actually doesn't have a brand. Let's say they're an average consumer.

**12:48** · Can we actually one of the things that we're creating is basically like a repository like an index of brands uh of pre almost like pre-created brand systems so that if they want something that feels dreamy why not retrieve a dreamy brand system that already has been thought out to be cohesive instead of doing like a generative approach the moment of that might end up not so great or might end up again in those pillars of slop. And I want to show you a real example of this in action. So um there's this company that I think is awesome called the General Intelligence Compute of New York. They have a sick website. You guys should check it out.

**13:18** · Um, but basically, if you ask Claw Design to create a slide deck uh in their branding, the the middle one is basically what it comes up with. So, the one on the left is is the original brand. Uh, this is kind of the the default. And if you kind of use this extraction actually in the process, it creates something that's way more high fidelity with the original. Um, and that even like in the details, I would say like feels right. So, this is just to show an example of it in in action.

**13:42** · Um but yeah, I think we I think all of us would agree that like human human taste and kind of the peak of human craft is always going to be like deeply valuable and that right now I think the challenge is we we are are almost even not earning the right to debate this like how can we have uh models like reach this like pinnacle of taste. I don't think it's about that at all.

**14:07** · It's like how do we first just like raise the bar? like the bar is kind of really I would say on the ground and so I think all of this work that we're putting into like how do we decompose a problem and how do we measure it is exactly so that we can at least like improve this bar of quality and I think we have to start with that that's it uh thank you very much for for the time uh this was this was awesome \[applause\]
