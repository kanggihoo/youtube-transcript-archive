---
title: "[한영자막] 모든 AI 기업이 어쩌다 보니 은행을 짓고 있는 이유입니다"
author: "Tech Bridge"
site: "YouTube"
source: "https://www.youtube.com/watch?v=4JfLShdp92k"
domain: "youtube.com"
language: "en"
description: "AI 기업들이 제품을 대규모로 서비스하면서 마주한 가격 대란과 막대한 적자, 그 진짜 원인은 비즈니스 모델이 아니라 '금융 인프라'의 부재였습니다.Stigg의 공동 창업자이자 CEO인 Dor Sasson이 모든 AI 기업이 어쩌다 보니 은행식 금융 시스템을 직접 구축하게 되는 필연..."
word_count: 3630
---

![](https://www.youtube.com/watch?v=4JfLShdp92k)

AI 기업들이 제품을 대규모로 서비스하면서 마주한 가격 대란과 막대한 적자, 그 진짜 원인은 비즈니스 모델이 아니라 '금융 인프라'의 부재였습니다.Stigg의 공동 창업자이자 CEO인 Dor Sasson이 모든 AI 기업이 어쩌다 보니 은행식 금융 시스템을 직접 구축하게 되는 필연...

## Transcript

### 모든 AI 기업이 은행을 짓는 이유

**0:00** · I flew all the way over. I'm the co-founder and CEO of Stigg. I flew all the way over to make a kind of a funky statement on an AI conference, which is literally every AI company right now is accidentally building a bank.

**0:14** · And when I mean bank, I'm going to try to kind of unpack this thing not as like a weird marketing metaphor, but effectively what what is really happening right now with the AI economy and why a lot of the constructs and the things that we are seeing, using, consuming and paying for in AI are actually really behaving like constructs that we know from the banking financial systems.

**0:38** · So, cool. Thank you for for for having me.

**0:41** · And let's say get it going.

**0:44** · By the way, I'm the first talk today, so the clicker is not working. It's going to be interesting here and now that they move first. So, let me take you through a little bit of background.

### 2026년 4월의 가격 대란

**0:54** · As I was working through this talk back in April really every single code-generating product platform out there just broke under this new type of economy and there this new type of consumer behavior. And in just a you know, matters like 5 weeks everything felt like pricing emergency one after the other. And the case I want to make here is that these pricing emergencies go way beyond just emergencies from a financial commercial set of the house.

**1:27** · These really are infrastructure emergencies that are emerging because of how those systems were built to begin with. So, just to give you some perspective, we had in in April we had Anthropic basically eliminating access for open flow and other third-party agents to basically use the subscriptions plans. Then immediately we had OpenAI basically changing how the product here is being priced, bumping the price overnight 5 5x, which is quite intense.

**1:57** · And then then we had GitHub freezing and then completely eliminating access trial access free access to their Well, we have some echo here.

**2:07** · To their free plans for for for co-pilot. And effectively like all these companies all at once in a single month experienced what it means to actually sell on scale AI and what actually happens when you don't have the fundamentals in place.

### Anthropic과 OpenClaw 사례

**2:25** · So, let me take one one step farther.

**2:28** · So, let's zoom into even just one of the use cases, right? So, if you think about Anthropic and you think about the open claw use case, right? What happened was effectively Anthropic was subsidizing every consumption of every user using open claw within the claw claw max subscription. So, effectively what the customers were paying daily was, you know, dollars and cents.

**2:52** · But on the on the cost side for Anthropic, it was like 150s to even 750 subsidized, which is effectively not an economics that you can scale even for the company at at the size at the scale of Anthropic, right? So, what it seemed to be a business problem really was an infrastructure problem because Anthropic didn't have a an effective way to delineate between users who are using their APIs and users are using their subscription programs.

**3:22** · And so, they had to immediately seize and stop access, right? They had to to to react.

**3:29** · Cool. So, and this is not unique to Anthropic, guys. Like we're seeing this like I don't know if you all heard read the news most recently with a company undisclosed company burning through like half a billion of their AI cloud credits just merely having like a few employees burning through the entire organization contract.

### 연쇄적인 예산 소진 위기

**3:53** · Uh we had uh Uber saying they're basically torched down their entire uh AI usage consumption budget for the year in just a few weeks into the year. And then we had Replit giving an example of what could happen if uh a single org has three users that are basically burning down the entire credit pool for Replit for the entire org. So, really what happening here is uh this is not just an an an entropic problem.

**4:19** · And I think what's what's mutual and kind of like switching gears from the examples to the actual what's really happening here, um the problem basically with all these three examples is that the checks for what you're entitled, what you're allowed to do, whether you're an agent or a user via AI product, happened uh after uh the invoice and not before.

### 청구 후 사후 검증의 문제

**4:44** · So, basically with each and every one of those examples, you were allowed to con- assume you were allowed to use the product, you were allowed to burn tokens, and checks happened only after the invoice. So, basically the spend and the aftereffect gets reconciled only after it's too late, only after the invoice is is sent. And this is effectively bad for business, it's sticker shock, it's bad for practice of how we use the systems.

**5:08** · These systems are now mission critical, and we're basically none of these companies had in place the financial infrastructure that allows, exactly like banks, guys, to check before we draw down, before we consume, right? So, I think what what we're seeing is effectively uh really is a change in how we architect and how we ship and how we build software.

**5:32** · AI is not just changing what is value, is not just changing how we interact, who is the users, it also effectively changing what exactly is getting paid and how we actually architect for systems that can uh handle runtime, handle the complexity of usage happening before the the the invoice, before the checks, and how we actually can architect for that.

### 사전 검증과 사후 정산

**5:57** · So, I think what's interesting and what you see in front of you is basically on the left side, what we're seeing is how most teams ship this architecture today, and you can see that basically the check and the settlements are happening after after the inference, after the usage is being logged. And that's typically too late. We see situations like spikes, overspends, overages, like experiences that are bad for business, bad for your users, and quite frankly, in many cases, also bad for the vendor.

**6:27** · Because if you didn't allocate enough resources and compute to actually allow for this to happen, you you also have a margin problem potentially, right? On the right side, we're basically saying, or I'm trying to make the case for you all that with AI, with the current infrastructure and how AI is being built and sold, we actually need to enforce and and do this synchronously before we actually update the balances and reconcile and settle in in async way after after effects.

**6:57** · So, hot bath actually get checked synchronously, and everything that comes after is basically reconciled after. I think the best example, guys, is if imagine you go to the ATM, right? And you draw cash. When you draw the cash, it does the check if you're allowed to draw it doesn't happen after you get the cash. It happens before you draw the cash. And so, that's exactly the same thing.

### ATM의 원리와 인프라

**7:21** · Our industry effectively misses this layer, this financial infrastructure that allows for this type of behavior to happen naturally, right?

**7:33** · And so, obviously this sounds like a great idea to all, right? Like you're you're pitching this infrastructure, sounds like you have something to do with this.

**7:41** · But guys, this is not just me. Uh, in February, OpenAI, they have a quite a great team. The their team called financial engineering. And these guys basically, uh, uh, uh, published how they think about the architecture and what they had to build for this to work at the scale of OpenAI. And what they had to say reads very similarly to how uh, transactional systems of banks work.

### OpenAI가 구축한 금융 아키텍처

**8:06** · Basically, you have a decision waterfall that needs to consider in runtime what is the client, the user, the agent is allowed to do. And it needs to take into account many different conditions and policies of what is really allowed, right? So, are you allowed or you have access to a certain feature product? Um, what are the certain rate limitations under your plan? Um, whether you are in a trial or in a certain promotional program. Like, you need all these decisions to be calculated immediately at runtime.

**8:37** · And then, ultimately, decide can I give this user access? Can they draw down? Can they consume or not? And all those decisions really can happen after the invoice. They can't because you need to actually be able to, uh, calculate and prioritize this. So, I think we have three things to notice from here, right? The first thing is this is a single synchronous evaluation.

### 핵심 교훈 세 가지

**9:00** · It happens at the request. It doesn't happen after effect. I think the second thing is the priority is deterministic.

**9:08** · So, we know in advance what are all the different rules that apply for certain things to be consumed, right? And I think lastly, and here guys, this is my opinionated view, you can disagree. I don't think this is billing. I don't think this is necessarily, uh, this entire architecture is just related to the idea of invoicing and billing. This is a financial system that actually make decisions ahead of any invoice, ahead of any billing element. And I think we're going to see more more of this becoming a standard, uh for other products and other AI systems, as well.

**9:39** · Um really just nerding just a little bit on I'm sorry, I just skipped one slide. So, yeah, just just nerding just a little bit about um what other traits or or elements we see and are used to in banks and we take them for granted, but in AI they're not that granted, in software they're not that granted. So, just one example, right?

**10:03** · Like, if two separate parties have access to the same banking account and that banking account has like $10 and they're entitled to draw down those $10, what happens and when they both of them try to draw down at the same time, right? So, banking systems has the idea of holding, of settling. You can really like concurrency is effectively solved with banks, but with the AI and agents, it's not that case.

### 동시성과 이중 지불 문제

**10:29** · You could have whatever, like 10,000 agents trying to reach out to the same dollar pool and they're going to try to do that once and superficially it might look like they should be able to draw down because there is balance in the pool, but what happens when they all draw down from the same pool simultaneously, concurrency become an issue. So, how do you solve for that? Um this entire idea in financial systems actually called like it's a classic double double spend problem. It comes from the accounting world.

**10:58** · It's a double entry bookkeeping and as I'm sure you all are building, shipping today with AI, as the revenue scales, as your company scale, the idea of double entry accounting, double entry billing, the idea that you can solve concurrency, these things would matter as you scale and they're not so easily solved down the line. So, think about things like, um you know, can you basically introduce traits like hold and settle?

**11:25** · Think about item potency and auditability of those um requests and etc. Um Um, Another thing that I think is very, very, um, known in, in, you know, how banking systems works, but not not necessarily enough established in AI is the idea that, uh, all the different pools have different sources, right? So, in bank, you have your debit account, you have your cash account, you have your savings, right?

### 다양한 크레딧의 차감 순서

**11:55** · And if you draw down, the bank actually knows how to calculate where are you drawing down from and what does it mean. Here, you know, say I have a pool of, you know, one, you know, 1,700 credits, uh, but they're not the same, they're not alike.

**12:12** · Each one of them is sourced from a different, uh, source. So, how do you decide which which one of them do you draw down against? Do you start with the ones that were, you know, given, granted earlier? Do you start with the ones that were promotional? So, how do you really calculate what's getting drawn down to the users? I think that's that's a real problem. Most companies today try to solve it like a single integer, uh, databases, and that's not really going to work as you think forward. Um, cool.

**12:41** · Um, so, really tying the knot the knot here, I think, um, if you think about how we interact with software, it used to be flat. So, it used to be just users and organizations, and there wasn't a lot of meat in between them, right? The the the the hierarchy of how you consume software was quite flat. It was quite straightforward in terms of who seated value. But today, I think, effectively, credit pools are no longer flat.

### 엔터프라이즈 예산과 지출 한도

**13:05** · Uh, you have a lot of different hierarchies in between who consumes different credits, and also they demand different governance, different logics, allocations, budgets, spend caps. And effectively, what happens is that budgets are set at the top, where, for instance, if you're selling to the enterprise, you're maybe selling like a pre-commit annual contract. Uh C-suite or somebody who approved that seven-digit contract, they expect to see how that credit are getting drawn down along the contract life. But, they don't just want to see that they were used.

**13:39** · They want to know who actually used them, which team, which users, uh which agents, uh to what extent, and they want to have fine-grained control over that.

**13:48** · That's literally the bare bones of how more and more companies thinking about selling AI workloads and how they they effectively work in production.

**13:59** · I'm going to run through some of this.

**14:01** · Um I think this idea of like what does it mean like high cardinality graphs and dimensions, being able to slice and dice against model types, users, like all this type of uh dimensionality of uh of uh consumption is is probably interesting to to talk about, but what I actually want to expand on is ultimately those four patterns. So, as you build AI and start selling AI at scale, you're effectively like four patterns that keep repeating themselves, and they're very very much alike and and very similar to the idea of, you know, banking systems.

### 네 가지 인프라 패턴

**14:33** · I think the first one we talked about earlier is basically being able to reserve before inference and settle actuals after. Um this is like going to to be like a pattern that again and again we're seeing more and more often, and it has ramifications on how you do accounting, how you do uh basically handle all those uh different concurrencies workloads, and what have you. I think the second thing is we're seeing more and more AI companies unexcited about the idea of sending all this usage data to to somewhere else over the cloud.

**15:02** · Uh for latency reasons, for cost reasons, for uh data sovereignty reasons, uh there's a lot of good reasons for why these companies actually rather to keep the events data inside their VPC. And I think we're going to see more and more AI companies seriously considering deploying this this architecture, this ledger, this metering within their VPC, rather the the contrary of sending it over the internet.

**15:24** · Um I think for agentic checks, to think about how agents spawn, uh the idea of checking balances, when agent does something, you don't know in advance what they're ultimately going to do, how that how that task is going to basically cost. So, if you don't know the cost, you need to be able to check those balances as the agent continues to get work, and you need to be able to uh reserve an account for them in advance, and then asynchronously after effect reconcile. Um quickly um moving forward.

**15:57** · So, ultimately, if you have those systems in place, what you really gain out of it is visibility. So, it used to be given that for usage-based products, you need visibility, but I think what happens today, you know, it goes beyond just plain visibility. Um it it means that effectively, like the ability to see for a CFO, for a CIO, consumption consumption of AI workloads across different models, across different features, across different products is not just, you know, a nice-to-have. It's becoming a table stakes.

**16:28** · It becomes something that you can't do business without. And we're going to see more and more companies expect to have this off the bat before they actually do business with you. Um And so, really just giving some examples to how some of the best frontier AI companies are approaching some of this, I think you're you're seeing the patterns already there. So, I think a lot of these companies already appreciate that you're no longer just selling software in the you know, commodity way that we used to think about subscriptions and usage.

**17:00** · It's becoming more and more of a financial systems, and financial systems require some of these complex ideas that weren't were not there before AI. Um and I think just to give like one small example that I talked about earlier, but I think might have gone a little bit uh hidden.

**17:18** · Um One of the changes in April that OpenAI did is really they didn't change the pricing. All they did was change the pace in which tokens get burned. So effectively use the same model, we pay the same cost per unit, but we burn more tokens. So that effectively was a pricing change. How do you execute such a change? Because it's not just financial changes, it's an infrastructure change. You basically change the rate of how the software gets consumed.

### 인프라 차원의 요금 변경

**17:44** · So there's a lot of complexity not in terms of just how we change pricing, but also how the infrastructure underneath allows for more complex ideas into how value is getting introduced to the users.

**17:56** · And really just, you know, before wrapping up, you know, there our team likes to say, and this is something we started to say more and more often than before, it really feels like you know, there was in the in the early 2010s there was this Stripe moment where every company wanted to ship product into the internet and you need to check out. And you need to be secure and and developers need to to to to to make it easy for them to quickly get them up and running.

### AI 시대의 Stripe 모멘트

**18:20** · I feel like where we are today is those ideas of like building a bank, it's okay if you feel like, I don't know, you like wearing suit and tie, maybe you want to build a bank. But if you are building a bank, you probably want to be aware to all of these traits and elements that has to be there so you don't meet them down the line where where it get really really more complex to fix in a hindsight. And so feels like the industry really misses that Stripe moment where all these constructs just exist and it's they're so easy to use.

**18:51** · And you know, there's a lot of excitement from our team when it comes to the potential of having such systems ready and help AI companies keep shipping.

**18:59** · Um
