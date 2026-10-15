---
title: "[한영자막] 벤더 락인 없는 AI의 미래를 만드는 방법입니다"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=l3HyFh6Dg4w"
domain: "youtube.com"
language: "en"
description: "무제한 AI 예산의 시대는 끝났습니다. 특정 AI 도구나 LLM 벤더에 종속되지 않고 실질적인 ROI를 증명하며 자유롭게 교체 가능한 AI 인프라를 구축하는 핵심 전략을 소개합니다.Tailscale의 오픈소스 AI 게이트웨이 Aperture 개발을 이끄는 Remy Guercio가 ..."
word_count: 4529
---

![](https://www.youtube.com/watch?v=l3HyFh6Dg4w)

무제한 AI 예산의 시대는 끝났습니다. 특정 AI 도구나 LLM 벤더에 종속되지 않고 실질적인 ROI를 증명하며 자유롭게 교체 가능한 AI 인프라를 구축하는 핵심 전략을 소개합니다.Tailscale의 오픈소스 AI 게이트웨이 Aperture 개발을 이끄는 Remy Guercio가 ...

## Transcript

### 토큰 최대화의 시대

**0:00** · Well, hi folks.

**0:03** · Thanks for joining me here for the last talk on this stage of the AI engineer world's fair this year. So, yeah, thank you for joining me. My name's Remy.

**0:14** · I am on the strategic projects team at Tailscale and more specifically I actually work on our AI Gateway aperture and today I want to talk a little bit about you know what it means or you know what it's going to take to have an AI future without the lock. I think a lot of locking that we've seen over the last 12 months and yeah, so if we take a look real quick at the you know the last 12 months, you know, I think it can really be you know described quite a bit by the phrase

**0:42** · token maxing and I I don't mean that in the kind of you know negative sense that you might kind of hear outside of the you know kind of AI enthusiast circle. I mean that in the sort of you know, it's been a year of trying to figure out you know what we can do with million token context windows. With the ability to get context from anywhere, right? Not just you know MCP being everywhere, but you know, also having coding tools, right?

**1:07** · That are great at finding context, using the CLI, bringing that context into the model, bringing it you know bringing it into you know everything that you need and and and going from there, right? It's it's been pretty cool, right? I mean we've gotten it's really made truly agentic coding possible having all of this, right? So, yeah, it's I mean it's it's quite cool and you know, we're going to see not just agentic coding, but you know, other agentic use cases where continue to take off. Uh as we as we do this.

**1:35** · So, you know, token maxing is cool, but right it has it has problems, right? There's obvious problems, right? It's very expensive, right? It's it's it's an extremely expensive endeavor.

**1:49** · You know, I think the last 12 months are you know, have maybe been marked by hey, we have you know unlimited AI budget Uh, and that's changed here in the last few months uh in terms of, you know, what it what it means to, you know, what it means to use AI. Um, it also I mean, you know, it's expensive like just generally if you're doing it, you know, right, but it also it does incentivize what I would call like wasted tokens by default. I mean, I I work on an AI gateway. Uh, we use our AI gateway. I get to see all of the usage from the AI gateway.

**2:17** · You would not believe the number of sessions that are hundreds or thousands of messages long where nobody clears the context. They just kind of keep going. I mean, it's helpful sometimes, but, you know, it's it's it's pretty surprising. You will have, you know, tens of millions of tokens of a session uh where it's the cache is basically maxed out maxed out the entire time. Uh, it gets really expensive. Um, and the other thing is, right, so you know, this has been an exciting time, right?

### 무제한 예산의 종말

**2:45** · People are doing new things, building new things, uh but this has led to you know, in many cases very vertically integrated tool chains. Uh, Cloud Code is obviously, you know, a big one. Code X right? Everybody's kind of building up there, you know, from all the way from the model, you know, all the way all the way up at the top uh you know, building their uh you know, building their engines, building their tool chains. So, um All right, there's a lot of problems there. And so, you know, my question, right, in terms of this is uh you know, how do we address these problems?

**3:11** · In particular, how do we address the lock-in and, you know, how do we actually improve uh how we use AI such that, you know, we can use it for things that aren't just, you know, kind of essentially frontier task or where we're just kind of wasting wasting money, wasting tokens. Uh You know, that sort of thing. Um But first, I want to talk about how not to address the problem.

**3:32** · Uh, and this is a super super common thing. So, uh over the last 6 months, we've been talking to I've literally been talking to hundreds and hundreds of folks about their AI spin, their AI usage, right?

**3:43** · That's the kind of benefit of working on an AI gateway.

**3:45** · Folks come to you. They're like, "I don't know what's going on. I know we're using a lot of AI. I get, you know, uh I get an Anthropic bill every day. Uh, I get a Codex bill every day.

**3:56** · So, you know, I it's not just that, you know, I see it all the time. So, you know, what do I do? They usually come with one kind of solution in mind, and that is, "Oh, we're just going to like everybody seems to be using Claude code right now. So, we're just going to like consolidate on a single vendor. Maybe two vendors, right? Maybe two vendors."

**4:12** · So, that's they're like, "I need to get a handle on this. How do I get a handle on this? How do I get you know, oh okay, yeah, I will say everybody's going to use this, right? We're just going to use this thing." Um that is not not a great idea.

**4:25** · You know, I might seem obvious sitting here that this may be not a great idea, but you know, when you're in that panic zone of we've spent a lot of money and we don't know how exactly, and we you know, finance is talking to you, IT is being like, "What are you doing?"

**4:41** · You know, like we said to you know, use AI, but maybe not use that much AI.

**4:45** · And you know, it it's a pretty natural response to be like, "Okay, I'm going to consolidate everything down." Right?

**4:50** · Okay, well, I'm going to have a control on this. I'm going to have you know, I'm going to have control on this. Control on this.

**4:54** · Um And you know, I think this is kind of peaking at what we're going to see the next 12 months and what people are actually trying to do. At least at the, you know, kind of frontier is what I would like to call ROI maxing, right?

### ROI 극대화와 4대 핵심 계층

**5:05** · We're not going to be token maxing.

**5:07** · We're going to be ROI maxing.

**5:09** · And you know, it's it's really just a necessity, right?

**5:14** · It's not and I don't mean that when I say ROI maxing, I don't just mean cutting costs, right? I mean actually proving some sort of value to the thing that you're doing.

**5:24** · And not only that, but also kind of opening things up, right? So, if the only thing you have is like two frontier models and their entire stacked ecosystem, that's a certain cost level where you it just makes things certain things untenable, right? You can't actually expand AI usage into the company if that's the only way you can use AI. Um and so, you know, when we think about ROI maxing, we first need to kind of think about like what are the components of an internal AI deployment. I'm not talking about like a hey, we've built this new AI feature in our app. I mean, you know, internal internal to your organization.

**5:55** · And so, you know, there's four things, right? There's the LLM or LLMs, right? There's that layer.

**6:01** · Uh there's sort of the data connector layer. I mean, this is MCP for a lot of people, but in reality it's, you know, CLI or APIs or really just any way that you get data uh could be reading a file, right? Into your uh into your agentic system. Uh there's the interface. I think people kind of forget about this sometimes, but you know, it's started with the chat interface. We got TUI's, you know, we kind of got a uh we got, you know, IDEs with chat.

**6:22** · We got, you know, kind of a whiplash back from TUI's and uh you know, I'm going to do it on my go to my phone uh you know, to oh, now the you know, the hot thing is, you know, Claude tag and like I'm going to use, you know, I'm going to use just going to interface with agents via Slack, right? So, uh um you know, it's another core component and it is a component that you can break out. Uh and then the last one is sandboxes/just the environment in which the agent runs, right? So, those are your four kind of uh you know, four components really.

**6:49** · Uh and to be ROI maxing uh means to be maxing your, you know, every opportunity that you have uh for choice, to make a choice at one of those layers, right? You don't have to necessarily have a unique thing at, you know, oh, I've made my bespoke special choice at every one of those layers, but it's really important to be able to make a choice at any given layer that you need at any given time. Uh and it might be different for different teams or different folks, right? It's you know, it it it can be pretty different across the organization.

**7:19** · I don't totally imagine like an entire engineering team just coding via, you know, Slack thread.

**7:26** · Maybe fun, but I don't totally imagine that, right? Uh um but you know, the entire marketing team might be working entirely uh you know, in a Slack thread asking data questions, doing other things like that. So, it's really important to, you know, to be able to uh kind of separate these things.

**7:40** · And right, so I I work at Tailscale, right? I work on an AI gateway.

**7:44** · Uh you know, maybe no surprise that I'm here to talk a little bit about why an AI gateway uh will help you do that, can help you do that. And I don't just mean necessarily using our AI gateway. I think it's nice, but you know, just any AI gateway is the um you know, is important for this. Uh so, our AI AI gateway is uh called Aperture. And um what it does uh is right, it's maybe no surprise here, right?

### Tailscale Aperture 게이트웨이

**8:05** · But it lets you it sits in between your agents and that interface of that agent uh and you know, all of your endpoints uh as well both like LLM endpoints as and data, you know, kind of MCP endpoints, API endpoints, anything that you have uh and sits in the middle and let you both control and monitor what's happening.

**8:23** · From a that can be from a like security perspective, that can be from a cost perspective, that can be from a which we do a lot I want to learn about what somebody is doing or what an agent is doing uh perspective. It's actually really cool when you have logs uh and you can tell your agent to hey, uh I it maybe it ran out. It kind of just kind of you know, oh, it it didn't reach an answer. It just kind of spiraled out of control. Uh maybe happens less now.

**8:49** · Definitely used to happen quite a bit.

**8:50** · Happens with, you know, maybe cheaper models more often, too. Uh They're usually not great at stopping themselves, uh but they are great at analyzing where they went wrong after the fact. And so, when you have something like an AI gateway, it's really easy to point it back at what you were doing and say, what happened?

**9:06** · Why did this not Why did this not, you know, work the way I was expecting it to?

**9:10** · Uh and so, you know, if you've used an AI gateway, but how many people like have an AI gateway, have deployed an AI gateway, using AI gateway? Yeah. So, if you've used one before, you're probably used to okay, so I put all my keys on this gateway. Now I need to go create synthetic keys for everything that I have. Right? So, it's like okay, I've traded some keys for a bunch of other keys.

**9:29** · Uh we get to do something a little special.

**9:32** · So, Aperture is built on Tailscale. And if you're not familiar with Tailscale, Tailscale is an identity-based mesh network. It's built on WireGuard.

**9:41** · Uh and what you get to do with Tailscale is uh every connection that is made over a tailnet, so it's a Tailscale network, uh you know, you install the tailnet agent everywhere that you need. It can be containers, laptops, GPU servers, doesn't matter.

**9:57** · Um You install everywhere. And every connection that's now made over that tailnet uh comes with the identity of the machine or the user on the other side. So, that can be a tag, right? So, that can be like, "Hey, this is a machine ID. This is a PR review bot."

**10:10** · Right? Uh and then it would get a separate node ID underneath that says the instantiation of that PR review bot.

**10:15** · Right? So, you can do that or it can be the user, right? So, it's just me using Cloud Code on my laptop. Uh that can come with it as well. Uh in addition to if you're using something like Entra or Okta, uh we can actually sync all the groups in. Uh so, you can see the group that that person is associated with. So, something on the other side is able to see all of that.

**10:33** · We have this really cool library. It's called TSNet. It's an open-source library. You can use it to build these sorts of apps. That is what we use to build Aperture. That is what is actually happening here. So, it is able to see the uh it is able to see the identity of that user or that agent on the other side of the thing or the other side of the connection.

**10:51** · And so, you know, again, just reminder components of a you know, an internal you know, AI deployment. Uh right? So, there's the LLM side of things, there's the data side of things, the interface side of things, and the actual sandboxes uh sandbox environment in which things run uh side of things. So, um when it comes to using Aperture, uh you know, as far as LLMs go, this is pretty similar I think to you know, what you might expect from other other AI gateways, except now, you know, here I have a you know, a configured gateway.

**11:20** · Uh it's got Anthropic, OpenAI, Vercel, you know, it's got even Anthropic OAuth, uh you know, Bedrock, Codex, everything uh that you can imagine. I put all those keys on that gateway. And And now, when I want to actually connect to that LLM provider as an agent or a user, there's no I don't have there's if I had this expanded, there's there's no extra screen for create these API keys, create these identities, create this.

**11:43** · Once I connect to the once I actually connect to the gateway, it knows who I am. It knows what I am. And it's like, "Oh, you have access to these models, this provider, right? You can use GLM 5.2.

**11:54** · Uh you get this budget with GLM 5.2, right? You get unlimited budget with a cheap model, and you get an extremely narrow budget with a frontier model, right?" Those sorts of things. Uh there's no extra setting here. It's just add your add your API key and go. So, again, we've taken all the LLM a layer and we've put it into a, you know, put it into one place that you can then, you know, kind of expand out within your organization. Again, doesn't matter if you're trying to switch models or providers, you can do that. Uh the next thing is the data side of things.

### LLM 및 데이터·MCP 연동

**12:21** · So, uh in addition to, you know, being an an LLM gateway, and this is actually why I said AI gateway at the beginning. So, I know that thing was kind of nebulous, uh but I'm actually very specifically chose that term because we're both an LLM gateway and an MCP gateway, and we even do off like injection for just standard APIs and re-expose those as MCPs, too.

**12:43** · So, uh you know, kind of intentionally choosing the broader term here. Um but with this, as you can see here, uh in Aperture as an admin, you can go in and configure whatever MCP servers you want. We have kind of built-in ones where we've, you know, checked them out, make sure they're easy to easy to work with, all those sort of things. If you've ever deployed an MCP or used MCPs within your organization, you'll know that uh there's a standard, but everybody follows a different version of that standard. Uh you know, you can tell exactly when an MCP server was built by exactly how they decided to do off.

**13:16** · Uh yeah, it's it's it's a great uh you know, kind of archaeology lesson uh when you go through when you go through setting up MCP servers, but we try to make that a very simple process here, right? We've kind of gone through this.

**13:26** · Uh so, you as an admin can say, "Hey, I've configured these. These are the ones that are allowed." You can use that same identity information to say, "Hey, the marketing team, you know, they get access to Google Calendar and Gmail, but the engineering team will also get access to GitHub." Right? Uh you can even say things like, "Oh, the engineering you know, this side of the engineering team gets access right access to GitHub." Or read-only access to GitHub. You can do all all sorts of things here. And what's really nice and again, talking about decoupling is all of the authentication happens here.

**13:56** · So, if you have folks that want to use cursor or they want to use cloud code or they want to use code X or they want to use some special agent framework that they're you know, some new hot thing that they've you know, they've discovered or built or whatever.

**14:09** · Uh all they have to do is hit that endpoint. And if they're on the tailnet, everything's authenticated as them or as whatever the agent or as whatever you know, the tagged device is. Uh there's no like, "Oh, I have to go re-auth into everything and then re-auth into everything and then re-auth into this new tool." Uh we make the switching cost, right? Of like actually trying out tools and trying different workflows and different experiences a lot a lot easier with this sort of thing. It's all those little points of friction uh that lead to use cases where like you know, people just don't try new use cases. They don't try to uh you know, "Oh, maybe I should experiment.

**14:40** · Maybe I can make this cheaper. Maybe I can make this faster."

**14:44** · Um you know, next thing talking about the interface. So, uh with aperture, we actually have a built-in chat UI. Surprise. Uh you know, everybody seems to have a chat UI. We have a built-in built-in chat UI. Um however, it is built on top of APIs that you can also leverage yourself. Uh so, our whole goal with aperture is to actually provide you with the same sort of you know, tools and interfaces and they are tools to build interfaces that we can.

**15:07** · So, whether or not you want to build a slack bot or you want to build a chat UI or you want to build you know, some new thing that nobody's thought of some mobile app kind of thing, you know, a voice-only interface, right? Uh you can you can do that. The whole point is you're going to be able to do that with Aperture. We want to support all of those different different individual uh uh use cases. But again, you can see it has connectors. Those are all again set up through Aperture itself. They're not set up in the chat UI. You're just getting them uh by way by way of Aperture.

**15:36** · Uh and then the last thing, so this is uh you know, so we talk about interfaces, you know, a little bit. It's you know, it's again it's very important uh that you be able to kind of use all of that.

**15:44** · Uh actually one other thing that's coming very soon here is um uh if you've ever I don't know if anybody's ever tried to set up like OpenWebUI or you know, or like Libre like or any of the like kind of like any of the like oh, I'm going to set up like a hey, this like you know, this interface or this interface of the uh one big thing is you always lose identity information and then suddenly all of the you know, everything's coming from the UI, right? Everything's like oh, everything's just coming from the system. Uh we're actually going to be adding a full like pass-through auth.

**16:10** · Uh so, you'll be able to actually see all of the like user identities and machine identities if for some reason they're using whatever interface you have. Uh you're going to be able to set it up so that you can pass through the auth and you still get all of the same visibility that you're kind of expecting from a from an AI gateway as well. Um and then yeah, the last thing is right, this is actually the I think the area in which um folks are doing pretty good. There's actually a lot of choice already. People are trying to do this.

### 샌드박스와 가시성 확보

**16:35** · Uh I think that's because uh the definition of a sandbox, I'm sure I could pull everybody here and would have a different everybody would have a different definition of exactly what a sandbox is uh or what they need from a sandbox or what they want from a sandbox. Uh and so, you know, there's we're kind of in that let a thousand flowers bloom phase of you know, there's a sandbox provider for every sort of whim and need and you know, and want out there. Um but uh you know, and folks are doing a pretty good job of integrating them, but again, it's a really important thing.

**17:05** · We're actually going to be adding kind of an orchestration layer as well for sandboxes to a gateway. Uh again, trying to use that term AI gateway very loosely, intentionally very loosely because in order to again, kind of make the best choices for all of the different endpoints that your, you know, environments, LLMs, data connectors, all that sort of thing, you really do need to kind of have a place to sort of see them all and then a place that brings them all together such that you can then use any other one. So, right kind of a mostly universal translation layer in a way.

**17:35** · Um But yeah, so that's that's mostly that.

**17:38** · And you know, like I said as a reminder here is, you know, ROI maxing really is all about maximizing choice to prevent lock-in, right? So, you know, even if you don't use Aperture, I do highly recommend you start considering an AI gateway, you look at an AI gateway. It's It's good just beyond like actual, you know, oh, you know, I don't have to, you know, have three different providers configured or switch between them this way, you know, it's good beyond that, right? It's great for just, you know, understanding what agents are doing. Even if it's just you as an individual.

**18:08** · We have so many people who are just as an individual, they have their usage behind an an AI gateway just to have an idea as to what their agents are doing because, you know, if you're running uh very commonly uh is people are running something like Open Claw with on Tailscale and it's on their tailnet and they and it's just running in the background and they're like, "Oh my goodness, did it did something. I'm not sure what it did. It did something it was not supposed to do." With something like an AI gateway, you can actually go back and you can see and you can look and you can actually diagnose where it went wrong, what happened.

**18:38** · Um so, you know, it's it's not just lock-in, right? It's actually just experimentation and understanding is all uh is, you know, is very important to use something like a like an AI or LLM gateway. So, um that's it uh for my talk, just short and sweet. Thank you very much for attending. I know this is the the last talk in here of the day, so I hope everybody's had a really great conference. I know I love the AI Engineer World's Fair and I hope you do, too. So, thank you.
