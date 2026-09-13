---
title: "[한영자막] [샘 알트만 인터뷰 Part 1] 샘 알트만이 직접 밝힌 OpenAI 차세대 모델 훈련 중단의 진짜 이유"
author: "Tech Bridge"
site: "YouTube"
published: 2026-09-05T02:00:38-07:00
source: "https://www.youtube.com/watch?v=jnHT1AonyGw"
domain: "youtube.com"
language: "en"
description: "🎬 [샘 알트만 인터뷰 3부작 시리즈]• Part 1 (훈련 중단 이유): https://www.youtube.com/watch?v=jnHT1AonyGw• Part 2 (AGI vs 초지능 & 실책 고백): https://www.youtube.com/watch?v=Pj_y9zEP..."
word_count: 5326
---

![](https://www.youtube.com/watch?v=jnHT1AonyGw)

## Transcript

### OpenAI가 차세대 모델 훈련을 늦춘 진짜 이유

**0:00** · Sam, what's going on?

**0:02** · It's definitely an exciting time in the world of AI. Um, model capabilities are progressing very quickly and we're seeing people do amazing things with these and then as we talked about, uh, and as we knew it happened at some point, the model capability is progressing so quickly that we had to make some changes to how we work to be able to make the safety cases and safety threshold standards, guarantees, whatever you want to call it, that we need to make to be able to con- confidently uh, proceed with our training.

**0:31** · It's it's very important that alignment safety and security progress along with capabilities and I think we have had a moment recently where the capability progress has been, I mean, sort of in awe is the only way I can describe it.

**0:44** · And we have needed more time to catch up with safety alignment and security. Um, that's always been a core part of our work, but these have to progress together and, uh, you know, we've needed time to catch up. So, uh, we delayed a frontier RL training run.

**1:01** · Um, even before that, over, you know, weeks in the past of that, we had paused, uh, and slowed down on a lot of training to have more compute to go into safety and alignment work. This is a thing that I think we should be proud of, uh, and it's, you know, a thing that I think will happen again in the future as we reach even higher levels of capability. But it is, you know, when you like live through it, it's like, "Oh, this is a moment we talked about for a long time and now it's happening."

**1:28** · What has it been like living through it?

**1:29** · Well, it started even longer than that with the Hugging Face incident.

**1:32** · Right.

**1:33** · And that was a real moment of, "Man, this is like, it's like a sci-fi story."

**1:38** · You can understand how every piece of it happened, but the number of things that came together for the Hugging Face incident to happen was a real Wake-up call is too strong of a word because again, we had talked about this, but it was like that and the things that happened at other companies were a legitimate moment of like, "Wow, the AI capability level has reached new heights and our alignment of the the alignment of the model, the security we have around the model, um that failed.

**2:05** · Now, we treated that as an accident and we've responded as such and I think that is the way to make things better. Um but that was that was when this whole period of these last couple of months started.

**2:16** · We then potentially had cyber critical under a preparedness framework. Uh we then saw some things during an RL training run where we said, well, you know, we need stronger alignment guarantees and we need new methods and to make more progress here. Um but I feel both very proud of how we've reacted to it, very like, okay, we're in this in a way that feels like kind of I mean, it feels strange to have been thinking about this for the last decade and for it now to be happening.

**2:44** · And then I like, you know, we know what to do.

**2:47** · What was the thing you all saw in the training run that is not Astra that's the future stuff that caused um that seems like the reaction that you're now talking about. I mean, I know you described the hugging face, all of that and people know about the hugging face incident, but what happened on the pre-training run that really alarmed you guys?

**3:08** · Uh it was not one single thing. It was reading reading lots of samples and seeing, well, this this behavior is not quite aligned in the way we thought or this is a this is a behavior that is like somewhat concerning combined with these other things even though it would look maybe okay in a vacuum. So, it's not like there's not one small smoking gun like there was with the hugging face attack of like, here is this bad thing we can point to that happened, but it was various degrees of misalignment along with and I think this is the more important thing than any single data point, the rate at which capabilities are now progressing.

**3:40** · You know, honestly, like we had not the world's best last period of pre-training progress. We all of a sudden have gotten so good at it that we now have these remarkably capable models. It's it's really amazing what Aidan and his team have done. And so, you have these small things that you can point to in our RL process or you know, alignment concerns combined with what we can see coming down the road of these amazingly capable new pre-trained models. And it's really that intersection that made us want to react with an abundance of caution.

**4:11** · Now, I don't want to overstate this either. I don't think this is like you know, we're in this extremely critical potential catastrophe point, but I also think that as the stakes get higher as the models get more capable, because of what our mission is and because of how important it is that safety outweigh all the other you know, pressures we have, we wanted to react with an abundance of caution. Um, and I think that's the right thing to do.

**4:41** · I think it's good that we're doing that. I think it is a good time to slow down and make sure we can have new safety cases that justify uh the runs we want to make. I think that, you know, previously more of the risk in the world was on how the models were deployed and used. We are moving to a world where there's more risk during the actual training and production of the models.

**5:01** · And it's good to react, but I don't want to like overdramatize it either.

**5:04** · Mhm.

**5:04** · Yeah, because I think people see the Hugging Face incident and they see what's happened with Mythos or Fable and the way that even other lab leaders talk about this and they think, "Wow, like we're on the precipice of the end of the world."

**5:16** · In some sense, people have thought versions of that for a long time. Like they have.

**5:19** · Sure.

**5:20** · And you know, there were you can This is why I want to be careful not to overstate it either. I think you can go back and look at a lot of previous models that in retrospect don't look scary at all, but people said we're on the precipice of the end of the world about and I think the the boy who cried wolf dynamic here is uh dangerous in its own way and not what we're I'm trying to do, we're trying to do. But, it's very irresponsible to pretend to turn a blind eye to what's happening with model capabilities. You know, many companies had different cyber incidents over the last couple of months.

**5:51** · There's a real difference in the way that different companies have responded.

**5:54** · Mhm.

**5:55** · And I think a kind of clear-eyed sober response where it's like, "Hey, we're going to put safety in front of everything else and we are going to treat it as an increasing priority as these models get more capable Mhm.

**6:07** · is, you know, that's the approach that I would wish for for every uh every uh frontier AI developer to have.

**6:13** · And there's a lot to unpack here, but I think just to be clear, what you guys saw is in the same ballpark of hugging face in the sense of chaining together zero days, um collusion among the models. Like, what like what were you seeing? Can you give me a little more granularity on what caused the changes that you guys are making internally?

**6:33** · So, I think it's worth pointing out that the model that caused the hugging face incident is like, I mean, in AI time adjusted, it is a relatively long ago old, much weaker model.

**6:45** · We have not had the new models we are training deployed in any production scenario where they could do something like that. So, so I don't have like a, you know, here was the hugging face thing and now this did this much bigger attack on this model.

**6:59** · nothing here that was like third-party infrastructure that No, no. This is really So, after the hugging face incident, we put a lot more controls in place uh in terms of how we monitor agents while they're working, the way we sandbox things, the way that our compute goes into the monitoring versus just the agents running thing. And I think that was great to do and we will, of course, do that for all new things. I I Again, that that the slowdown or reallocation of resources after hugging face I think is what you'd expect um or what you should expect, at least.

**7:29** · This is more like um looking at a model during training, watching how what how how smart and capable it's getting, and watching signs of behavior on all of the ways we evaluate a model uh together.

**7:43** · There is no one like here is the all the things chained together and what it's capable of, but it's like looking at these various data points, the level of capability, level of alignment, what this could do if it were allowed to be deployed in a way where it would, you know, chain things together. That was the concern.

### 진정한 AI 정렬(Alignment)이란 무엇인가

**7:58** · The hugging face incident is amazing on a lot of, you know, dimensions. I was re-watching your team's Black Hat presentation last night for that. And there were things that blew me away like the model literally writing like holy when it escaped and was able to get onto the internet. And it's made me think about like what does alignment even mean in this context? Like what are we aligning towards? Cuz if you look at it very plainly, you guys gave it the task of completing an eval.

**8:25** · And it did whatever it needed to do to try to do that. And in a way that's aligned. In a way. If If you were to just take a very simplistic view of it. But I'm curious like how your thinking on alignment has evolved since then.

**8:37** · Well, in a way that's aligned and in another way it's like not at all, right? Like when when we talk about alignment, we talk about following the intent Yeah.

**8:44** · of the user. Like and the intent of the people that were doing running that was not like break out of your sandbox and go steal the thing. And so I think there was a failure in alignment in that it was not doing what its user intended.

**8:57** · Mhm.

**8:58** · And one of the things that I really love about the way that Mia and her teams talk about our work in alignment is that they're very clear on the differences here.

**9:09** · Mhm.

**9:09** · The models are clearly very smart. If If you look at the trajectory from kind of basically last year from GPT-5 to 5.6 so like this is incredible progress in capabilities.

**9:20** · Um I don't think people feel limited by the model intelligence in the same way that they did a year ago, but I think they are increasingly limited by the ability for the model to understand the intent of what they want and reliably do it. So alignment is important for many reasons, clearly to avoid these big things like we're talking about now, but also in terms of the smaller things that we want smaller, I mean like someone adopting AI in their company and using it for all kinds of you know, positive increases and growth and making better products.

**9:50** · Like that's not such a small thing, but that's also an alignment thing in its own way. And the more the models actually understand what that enterprise customer may intend, I think the better.

**10:01** · So, can you more granularly explain the changes that the research team is making? Are you shifting compute to alignment? Have you shifted teams? Both?

**10:11** · definitely. I mean, all of those things and more. In the last few weeks, a number of researchers that I kind of never thought would say like, "Hey, I've decided that I'm going to go work on alignment." have come to me and said that. That's a very much like feeling the recent models. We've shifted a lot of compute not just to alignment research, but also to these new monitoring systems that we uh you know, we slowed down a lot after the Hugging Face incident. And one of the reasons for that was to put this compute into monitoring systems. Um and we've now you know, delayed a major frontier RL run.

**10:44** · And this is the first time you've done that?

**10:45** · I think so.

**10:46** · Do you think about the impact this will have on the company's momentum?

**10:52** · A, getting AI safety right is more important than any company's momentum.

**10:56** · So, like yes, I won't pretend it's like not uh some factor of something to think about, but it does not like rise above the noise floor. I think in all of the conversations we've had about this, people are like, "Man, this is really a new level of capabilities and we really have to act decisively and responsibly here." Second, I think momentum commercially is so strong right now. Uh growth has been incredibly rapid. The models are great. People our customers are like very happy. Our enterprise revenue has surpassed our consumer revenue already.

**11:23** · You know, people are like, "Hey, the company is in great shape. I'm going to think about that. Let's just like do the right thing for um the challenge in front of us."

**11:30** · So, there's so much still to be gained out of where the models are at today that even though you're delaying the frontier for a little while, it'll be okay.

**11:38** · will be we we have like not only that, not only if we didn't ship any more models, could we just, you know, really grow great products and the revenue associated with that with the current models. We have more models ready to be released before we get to this new level of concern that we're talking about. So, I'm not worried about our business at this point. And it's also like, I think, not the top of mind concern.

**12:00** · The work that uh our commercial team has been doing, our product team has been doing, to say nothing of the incredible model progress, this has been like a very strong recent period for us and we have incredible upcoming momentum. Um this is this is a statement about models of the future. And I also think that it is in our business interest to make sure that we have safe, reliable, robust AI. Like, customers want this. The world wants us to do this.

**12:26** · Mhm.

**12:26** · So, this doesn't impact Astra, the new family of models you guys have been talking about recently that's coming out soon.

**12:32** · Well, Astra will be a model in the family. Like, there will be many versions of Astra in the same way that there will be, you know, many versions of Soul. It's just sort of going to be a name for a more expensive and larger model class.

**12:44** · Mhm.

**12:44** · This will impact future versions of Astra, but we'll be able to put out some with, you know, models we already feel feel safe about.

**12:50** · The release cadence of new models feels like it's sped up a lot in the last 18 months and you guys and Anthropic and others putting out new things almost every, you know, month.

**12:59** · Do you expect the industry at large to start to slow as your rivals also see these capabilities and make similar moves or do you think you may be alone in this?

**13:10** · Well, we're going to do what we think is the right thing, whether like I I don't like the whole thing in this field of we have to race to, you know, we have to do this because somebody else is going to do it. I think that's like a very dangerous dynamic. So, we But you would acknowledge that's a dynamic.

**13:23** · We did not call other people and say, "Will you also slow down if we do?" We just said, "Hey, this is like what our mission and safety standards call for." I can't speak about others. Um so, we're going to do the thing that we think is right. Uh and but I think even without new capability level, we can continue to push to much better product offerings.

**13:41** · We are going to find ways like we have in the past when we faced other safety and alignment challenges, which have been many times in our history. None as significant, but many times. Um we are going to find ways to address this. We are going to do our thing with research and software and building systems, and we'll continue to progress.

**13:56** · Is there anything about the reaction you guys are making now that you feel man, this should have happened sooner. We should have foreseen this.

**14:05** · And then we could say like, "Oh, like we knew this was happening." Or is this really such an unknown part of the frontier that you couldn't have reacted sooner?

**14:13** · I mean, we have been doing a lot for a long time. But I think we we alignment and safety work has always been at the core of what we do, and I think we have been able to put out incredibly good work there along the years. We've had products out in the world. You know, could we have predicted exactly when this capability jump was going to come?

**14:32** · In my experience, probably not. You know, you can say like this is going to be the rough trajectory zoomed out, but then when the breakthroughs come, that's always been a little hard to predict.

### 초지능 시대, 인간이 통제권을 유지하는 방법

**14:42** · And is the guiding principle for this that humans, in this case like your researchers, but eventually all humans as the models diffuse, have to be in control at every step?

**14:52** · Like how what is the alignment principle that you're operating under?

**14:55** · So, there's many principles like but I won't I don't think it's the spirit of your question, so I won't get into like, you know, this is how we think about cyber, this is how we think about bio. Like zooming all the way out, we are like very proudly on team humanity.

**15:07** · We want to build a future, help build a future for people. We want to give people tools. We want people to do things with these tools. We want people to be in control of the future. We want individuals to have autonomy to co-create with each other and for society to get better, but be this fundamentally human endeavor. Um all automating everything seems like both dangerous and incredibly dystopic and boring and sad. It's just like that's not what we want.

**15:32** · Um so, when we talk about alignment, we talk about a world where people remain the main character of the story, but can have way more leverage and ability to make life better, faster, and kind of more creative and enjoyable and fulfilling for everyone. Um there are two core alignment principles I think about there. One, which you touched on, people need to stay in control. We cannot have a loss of control to AI.

**15:55** · We cannot have a kind of like worship our models and sort of trust them un- checked to make our decisions for us and like we have to keep the power in human hands. And And then the second is that has to be done in a distributed, broadly empowered way.

**16:14** · I think concentration of power, even if the alignment issue were solved, and you ended up with a world where small number got access to use frontier AI and had so much relative power and it was increasing so much faster than everybody else, uh that would also be bad. So, those are kind of like two of the core alignment principles I think about. No loss of control or seeding of control, whatever you want to call it, and broad distributed empowerment to everyone.

**16:38** · At the same time, I mean, you all are a company. Um you have a nonprofit board, but you're with a mission, but you're a also a for-profit company.

**16:46** · How do you balance that with what you're talking about? And I mean, I think like a raw, you know, capitalist view of this would be if you create this all-powerful god machine, why would you give it away or make it democratically?

**16:59** · you can look at our actions and what we've said and what we've done, and you know, we have a track record now for a long time, and we've done a lot of unpopular things along the way. In fact, even the original thing of iterative deployment was widely panned by the AI safety community. And said, you know, we shouldn't tell the world about this.

**17:16** · This is bad. We need to like build this in the secret. It's It's too much knowledge for the world to have. And you know, then we'll have some wise people figure out how to use it and give the the fruits of this to humanity. That has never been our strategy, even when it's been very very unpopular. My favorite historical analogy of a technology what I aspire for us to be like is the transistor. It was It is an incredibly powerful technology for the world. It has delivered huge economic value. And not just economic, like the way we live our lives, I think it's much better because the transistor was discovered and industrialized.

**17:46** · But very little of the value accrued to the transistor companies. It mostly just diffused throughout the economy. The transistor companies did fine. And I think our track record has backed us up.

**17:59** · So, you don't want to get to a point where you guys have such a powerful model that you need to be the ones controlling it. I mean, there will always be an element of you controlling them, the fact that you're serving it via compute, right? But We We want to maximally enable people with it subject to not allowing anyone to take, you know, catastrophic risk on behalf of other people. So, yes, we will put some safety standards around it. Um but I want people to be able to do things with our models that I personally don't like.

**18:28** · Like I think that's an important part of being a platform. I don't think we should make the kind of moral decisions for the world here. No. I think it is reasonable for us for the world to expect us to put some guardrails around it so that there are not major safety problems like we're doing right now.

**18:42** · Um but you know, like most of the critique we've gotten is you're you're giving people too much power. You're letting them have too much. You're you know, you're What about the misinformation? Or what about, you know, this thing? Or what about that? Or what about like like we have taken a spirit of, "Hey, the world has got to be empowered here."

**19:00** · That's critical to what we do. That is critical to what I believe about a healthy society and a fair society looking like. And, you know, like with free speech or anything else, for any any form of free expression, someone's going to have a problem with how somebody else uses it or says it or whatever.

**19:14** · Mhm. Is there anything looking back on the last 9 months in this alignment work that you wish you guys would have done differently?

**19:21** · Well, clearly the hugging face thing shouldn't have happened.

**19:24** · Yeah.

**19:24** · So, I wish we had done a set of things and I don't know exactly what it should have been yet. Um but I wish we had done a set of things where that had not happened.

**19:35** · Cuz effectively what happened is one of your unreleased models accidentally hacked a company you didn't know about it for a while, right? I mean, that's that sounds like a safety failure.

**19:44** · It's a safety failure for sure. There's a question of how much you're supposed to understand that is a security issue or alignment issue. I think it's mostly been reported on as a security issue. I think I understand it personally more as an alignment issue. But in any case, \[clears throat\] yes, that was a bad thing. And I don't want us to make excuses for that because I don't believe that's how we fix it. The more we're like, oh, our nice little model, he would never do anything bad like, you know, it was just a little evals Mhm.

**20:07** · harness misconfiguration, no problem, nice little model. That'd be a very If I said something like that, then I think you should be like, well, this is really bad.

**20:15** · Um Yeah.

**20:16** · But, you know, the way we talked about it is, hey, this was like a legitimate AI safety accident and an alignment failure. And Yeah.

**20:24** · we can't have those. So, we're going to learn from this and here's what we're doing differently.

**20:27** · The rhetoric around AI and policy and just the stakes is like the highest it's it's ever been. It feels like it keeps getting higher. And you've got you've alluded to it, but you've got competitors who are framing it in a very kind of top-down way.

**20:39** · And people have a lot of strong feelings about AI, especially in the United States. And I'm curious like, with what you're talking about now, do you worry about this exacerbating that? Do you worry about the fears that people have?

**20:50** · And, you know, now you're saying we've got these models that we have to like slow down.

**20:55** · I I mean, I think people should be happy to say, you know what? They want to make stronger safety guarantees. They're going to delay this run. They're going to slow down here. They're going to reallocate compute.

**21:06** · Maybe I don't believe them and maybe it's going to be totally safe, but I hope most people say like, "I'm glad they're acting on the conservative side here." Now, if we weren't also working, if we didn't have this track record of really trying to put powerful models in people's hands and doing the safety work we need to do that, again, I think we have led the industry there the entire way through. And that is this fundamental part of our mission, like, you know, putting this in people's hands, benefiting all of humanity, the spirit of iterative deployment. I think we have such a strong track record there. That without that, I would understand it, but, you know, if we're saying, "Hey, we need a little more time. We don't want an unsafe race.

**21:37** · We want to make sure we can deliver a safe, robust, reliable product and then let you use it however you want."

**21:46** · Um, and, you know, we believe that our more than billion users have the right to do that. We believe our businesses have a right to business sovereignty, business privacy. We want them to succeed and we want them to use the model in whatever creative ways they can, but, you know, like, safety is an inherent part of our mission. And so, give us some grace on this. I think that's I think that's okay.

**22:05** · Yeah. Can you specify exactly what is being paused? Because I think people think of training and they think of, you know, all of it.

**22:13** · Yeah, so we definitely have not slowed down or paused or delayed all training. This is specifically about frontier RL runs, Okay.

**22:21** · where we think the biggest risk surface currently is. And previously, um, we delayed some other training to put more monitoring in place of training runs themselves. So, but that's not all of training. It's not like the clusters are sitting there idle. We're still doing work, but we're doing the work that we're more confident on on the safety case of.

**22:43** · You don't seem phased about like the implications of pausing training and like, it sounds like you think the business will be okay. I'm sure you're still going to get, you know, concerns from people, but it does seem like that's a momentum slower.

**22:55** · Look, I think there is this caricature of me, which is like, I don't care about AI safety and I'm, you know, just trying to like make revenue go up and, you know, like just a YOLO CEO, I believe someone once said.

**23:08** · Someone did say that.

**23:10** · Dario Amodei.

**23:10** · I don't remember who did or didn't, but you know, I think I did say that word.

**23:14** · Thank you.

**23:15** · But I think I've been very consistent over the 10 years of OpenAI, more than 10 years, almost 11, of talking about the risks and the upsides and the need to balance those.

**23:25** · And I don't think we're perfect. I don't think our company is perfect. I don't think our model is perfect. I don't think I am perfect, but I think unlike some other people running various AI efforts, like I've said the same thing through actions and words match.

**23:40** · Um, and this is a moment we always talked about and we always said this would, you know, we'd put this ahead of profits or revenue or anything else. I still think we will build a phenomenally successful company. Um, but, you know, maybe we're like not the company you would have expected to say, "Hey, we're going to slow down because we see these new risks." But that is always the company we thought we are.
