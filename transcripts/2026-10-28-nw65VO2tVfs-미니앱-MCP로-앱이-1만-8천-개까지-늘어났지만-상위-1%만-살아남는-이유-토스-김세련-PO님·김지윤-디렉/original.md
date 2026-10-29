---
title: "미니앱 MCP로 앱이 1만 8천 개까지 늘어났지만 상위 1%만 살아남는 이유 (토스 김세련 PO님·김지윤 디렉터님)"
author: "빌더 조쉬 Builder Josh"
site: "YouTube"
published: 2026-10-28T02:22:58-07:00
source: "https://www.youtube.com/watch?v=nw65VO2tVfs"
domain: "youtube.com"
language: "en"
description: "🎙️ HOW I AI 팟캐스트 출연 기업 모집우리 회사가 AI로 일하는 방식을 인터뷰로 남겨 드립니다.👉 출연 문의: https://howiai.tv🔗 토스 앱인토스토스 안에서 설치 없이 쓰는 미니앱을 누구나 출시할 수 있는 플랫폼입니다.👉🏻 앱인토스 홈페이지: https..."
word_count: 8786
---

![](https://www.youtube.com/watch?v=nw65VO2tVfs)

## Transcript

### 하이라이트

**0:00** · It’s an app that makes shaved ice in 3D to tell your fortune. So, we consider even these small ideas to be great apps, and the optimal gas station app is just an app that finds the cheapest gas station for you. But that’s all there is to the functionality. They are really simple apps, but both provide different value in terms of utility and fun.

**0:19** · Services that provide very clear value will definitely survive.

**0:22** · Now, there are over 15,000 mini apps that have gone live. What we call a good or decent app is an app that users actually use. But that’s less than 1% of them. To make your service succeed, meet your users and try to improve it, because they say the one who stays until the end wins. If you just build a great service, we will pour in users for you without you needing to do any marketing.

### 오프닝: 앱인토스 김세련 PO·김지윤 디렉터

**0:46** · Yes.

**0:46** · Hello. Dear subscribers. Today on the How-Why podcast, we have invited PO Kim Se-ryeon and Director Kim Ji-yoon, who are currently building products at App in Toss. Let’s have a fun conversation together today. It would be great if you could introduce yourselves to our subscribers. Could our PO please start with an introduction? Yes.

**1:09** · I’m Kim Se-ryeon, working as a Product Owner at App in Toss. I’ve had a diverse career; I was in startups , briefly in the entertainment industry , and worked at consulting firms before joining Toss in 2021 to build products.

**1:27** · How long have you been with App in Toss , and what has your work been like so far? I started from the very beginning as the first PO when the App in Toss project launched. So, I think it’s been almost two years since I’ve been working on App in Toss. What I do now is, since tools are needed to create services in App in Toss...Because you need to know how to develop them. I build the tools needed for that development and also work on creating the platform so that developed services run properly within Toss.

**1:58** · I see, I understand. Thank you.

**2:00** · Director Kim Ji-yoon, could you also introduce yourself?

**2:03** · Ah, yes. I’m Kim Ji-yoon, and I’m a Design Director in the Product Part. Before Toss, I was a UI designer at Samsung Electronics, a product manager at 29CM, and I have been with Toss since 2019.

**2:18** · I worked as a brand designer for about four years, then transitioned to product design, and now I’m working as a director in the product design department.

**2:27** · That’s impressive. Yes. To start, I'll ask a very simple question, as there may still be some people who don't know about App in Toss. Could you please introduce App in Toss in a single sentence for those hearing about it for the first time? Please go ahead.

### 앱인토스는 토스가 만든 앱스토어

**2:39** · Yes.

**2:39** · Yes.

**2:39** · You can think of App in Toss as an app store created by Toss. For those who code or build services, you can think of App in Toss as a place to launch your service, and for existing Toss users, you can understand it as a place where you can use non-financial services within Toss.

**3:04** · What is the background behind the creation of App in Toss? Why was App in Toss created? It started with some deep thought at Toss. Toss has built a reputation as a financial super app, where people think of Toss whenever they think of financial services. But for Toss to look beyond that, we realized we needed to become an everyday super app. However, while Toss is good at building financial services, it takes a lot of time to build non-financial services well. So, we decided to build the App in Toss platform with the idea of opening a playground and simply inviting those who are already doing it well.

**3:34** · Mm. So, it seems like it's been a little over a year since its launch. Right? How many apps have been launched so far, and how is it going? It's been about a year and a half, and now over 15,000 mini-apps are live. So, there are about 15,000 mini-apps currently live on the Toss app.

### 미니앱은 지금 몇 개, 어디서 찾나

**4:01** · That is truly impressive. How are so many apps included, and how do you even search for them all? But Ah, it’s not easy. If you search for them, only a few might show up. All 15,000 don't appear at once.

**4:11** · Oh, I see. I personally experienced App in Toss through push notifications and things like that.

**4:18** · Is there a separate gateway or something to find them first? A very simple question, but how can I discover App in Toss from within the app? Oh, when you go to Toss, if you look at the fifth tab, which we call the 'O-tab,' you can see many of these mini-apps displayed there. We don't just show the same mini-apps to everyone; we personalize them to recommend ones that we think each user will find useful.

**4:42** · So , by doing that If you go to the fifth tab, you can think of it as a place where you can discover mini-apps that are useful for you.

**4:53** · That’s wonderful. Yes. Great. I’d like to start by talking about the history; it seems like there was a rather long period of closed beta. And then there was the open beta, and now we are in the official launch phase, so it would be great if you could share some stories from the early days.

### 클로즈드 베타가 길었던 이유

**5:10** · Yes.

**5:10** · There were various reasons why the closed beta had to be long, because when we tell Toss users that we have such a variety of mini-apps, we need to have a lot of services, like a storefront, to be able to recommend them. In the beginning, we had a very strong desire to have many makers create their own services and launch them on our platform. So, why would people want to build services on our side? Why would they? How can we get them to build them?

**5:39** · I think we really agonized over these questions a lot. But it didn't turn out as well as we thought it would.

**5:46** · It was really difficult to get the number of mini-apps to grow from a few dozen to a few hundred.

**5:52** · So, because we spent so much time on this, the closed beta got a bit long, and during that time, we kept asking ourselves, "Why would makers choose to build and release this on Toss instead of somewhere else?" We really thought about this a lot. At the time, we identified two things: one is that even now, when you upload a service to the Google Play Store or App Store, it takes a long time because of the review process. So, one concern was how we could reduce the time it takes for people to deploy their ideas.

**6:26** · And second, we had tools, like SDKs, for development, and we thought that if we could make those easier to use, people would be able to build things much faster, so we decided to help with that. So we worked on these two things, and the tipping point came late last year—I'm not sure if you remember, but Claude released their "Artifacts" feature at the end of last year.

### 티핑 포인트: Claude Opus가 준 희망과 절망

**6:51** · Yes. Of course.

**6:52** · This was both a hope and a despair for us.

**6:55** · Oh. The hopeful part was that back then , at the end of last year, products like Replit that allowed you to build services via "vibe coding" were very popular in the market, and it felt like you had to use those services for vibe coding to actually work well. I mean, with just the base models—like GPT or just Claude—I wasn't really satisfied with the results when I tried to build those services. But when Artifacts came out, it built things perfectly without needing those other tools, and we thought, "We made such a great decision to start this business."

**7:27** · We saw a glimmer of hope that because people could now build services so easily with vibe coding, we would soon have not just 100 or 200, but thousands of them coming in.

**7:38** · The despair was, like I mentioned earlier, that it was so difficult for us to create those 200 or 300 items. So we wondered how we could make development easier. Yes, we even built something like Lovable. Internally. Yes. So, we put a huge amount of effort into building an internal app builder where you could input an idea for a mini-app you wanted, and it would create the service for you.

### 직접 만든 앱 빌더 대신 모델 위에 올라타다

**8:03** · But then, seeing the quality of Opus, we realized there was no point in releasing it.

**8:08** · Opus was just ahead of the game.

**8:10** · Perhaps.

**8:11** · We just felt it. We knew that if we tried to compete with those big models, we would never win, and that the moment we tried to compete , we would fall behind.

**8:20** · So, we just gave up on the release.

**8:22** · Ah.

**8:22** · So we couldn't even launch it, and we just scrapped it.

**8:25** · That’s a real shame.

**8:27** · Our internal engineers worked so hard for several months, but in the end, it never saw the light of day, and we just killed the product. I really sympathize with that. What I mean by sympathy is, I also released a few AI wrapper services. But in the end, the model always wins. I’m curious about the answer you found.

**8:46** · Right. So we decided not to compete with the model, but to jump on board and ride the speed of the model's growth instead.

**8:54** · That’s ultimately wise. Yes. But design tools are similar, too. We have an internal app builder like Figma that uses the Toss Design System, but now everyone implements via MCP, and no one draws with that tool anymore.

### 디자인 툴도 이제 MCP로

**9:08** · Ah.

**9:09** · So, while that tool still exists, it might disappear or might not, but it has become useless. It was completely the same vibe. After we killed those AI wrapper services, we made exactly two decisions.

### 문서의 독자를 사람에서 기계로: Machine Readable·MCP

**9:23** · Like I said earlier, we needed to jump on board. So, not only all guide documents, but all development documents and tools we created were made to be machine-readable, not just human-readable. Since we were going to build AI services via coding from then on, we reconfigured everything we had made for human readability so that any AI or model could read it, understand immediately what we wanted to build, and use it; our target user from then on was the machine, not the human.

**9:58** · Meaning, let’s make products in a state that machines can thoroughly understand. Like this.

**10:03** · For example, previously, many SaaS companies always created developer documents—so-called "docs"—to be human-readable. Does making them " AI-readable" mean the format is different? What is it like? Ah, we usually connect things like MCP, right?

**10:19** · All the information should be in those skills. When a machine attempts live coding, or when AI does live coding, instead of just compiling documents for humans to read to improve readability, we started creating very dense guide documents that tell the AI exactly what to read and for what purpose. Ah.

**10:40** · So instead of just telling the AI to go to a link and read, we structured all the information so that a machine could read and understand it immediately.

**10:52** · Hmm.

**10:54** · Since it's obvious that users will connect via MCP to build things, you decided that if you just prepare the foundation for that, the models will be able to build things much better on their own later. Ah.

**11:06** · Yes.

**11:06** · So we did that, and secondly, as you mentioned, we organized all the agents for creating mini-apps for Evintoss. We replaced the information within them with docs designed for machines, along with the development tools they need to build services, or things like our admin panels. We replaced all of that, like registering for studies, with MCP. Hmm.

**11:37** · Since people are going to make AI do everything anyway, they aren't going to read the guide documents no matter how well we write them.

**11:44** · It’s like that kind of vibe. It’s the feeling that maybe we don’t even need a UI. Exactly. What I said throughout the first half of the year was that no matter what UI or admin panel we build, or documentation like developer centers, people won't read it and they won't visit. So our products should disappear. Ah.

**12:02** · Our products should just operate in units that AI can use, and we no longer need to build UIs like consoles or admin panels. My philosophy was to make everything in a format that AI can use. Because people are lazy, they'll just give permissions to Chrome and let it handle everything via MCP anyway. They'll likely do everything—logging into admin panels and entering information—locally on their own ends .

**12:32** · So, with the philosophy of making everything accessible to agents, we replaced all those skills and MCPs.

**12:39** · Hmm. That’s a brilliant decision. It seems you decided that because it’s the most convenient usability for the user, and did that create any momentum?

### 몇백 개에서 몇천 개로, 박수가 매일이 되다

**12:48** · Ah, yes. It was huge.

**12:49** · Oh, really? Yeah.

**12:52** · Right

**12:52** · after we launched the Apps, and we started offering the MCP, that was the tipping point. What used to be a few hundred, even with our best efforts , suddenly started becoming a few thousand.

**13:04** · So, it was no longer, "Why aren't they coming in?" The worry of how to get people to build more minis felt like a distant past.

**13:13** · Instead, the concern shifted to how we were going to handle the tidal wave of minis coming in.

**13:18** · Hmm.

**13:19** · That was our moment of both hope and despair.

**13:23** · What was the atmosphere like? I imagine it was great at first, but could you explain how you gradually felt that hope and despair?

**13:31** · Oh, at first, it was just wonderful.

**13:33** · Because we hit a momentum of, say, 1,000. For example, if we hit 5,000, we’d blow out candles on a cake and cheer and clap.

**13:40** · Really?

**13:41** · We made it. We’d pat ourselves on the back, saying we really should have started this business earlier, and how glad we were that we did it.

**13:49** · But at some point, the frequency of those celebrations became too high.

**13:55** · We’d clap for 500, then for 1,000, and soon we were clapping every single day.

**13:59** · Because we were hitting 1,000 a day, and so on. Yes.

**14:01** · Yeah.

**14:01** · So, that was the moment when the applause stopped giving us a dopamine hit, and the despair arrived right at that same moment. I mean, the services have to run within Toss, under the Toss name, within our ecosystem.

**14:19** · So, if a service doesn't function properly, or if there's some kind of risk—like something provocative, or malicious services— like violent or explicit content, right ?

**14:30** · We can't have that happening.

**14:31** · Right.

**14:31** · So, how do we manage that? The despair of how to prevent that in advance came immediately after. I feel like you must have been incredibly stressed back then. Exactly.

**14:41** · It’s not just about prevention; with limited exposure space, how do you showcase tens of thousands of them in such a narrow space?

**14:48** · That was also a huge dilemma.

**14:50** · It was an issue we hadn't anticipated.

**14:52** · We thought we’d have time to prepare.

**14:56** · Me too. As I run my own business, I, too, feel how quickly the world changes and how fast markets can be created. So , in the end, you stayed up all night wondering, "How should we operate this?

**15:10** · " While you were establishing operational guidelines and dealing with all those concerns, surely some great users must have emerged, and I’m curious about how you supported them.

### 메이커를 움직인 첫 유저와 마케팅 도구

**15:24** · There are some people who are particularly hardworking. So, we ended up going out to interview those people. When we asked what made them work so hard, they said that usually, when you launch a service on the App Store or a marketplace, you have to do a lot of marketing to gather early users. You have to post it on your own social media or run advertisements.

**15:47** · Since we are still an early-stage platform, they saw users actually coming in after they built and uploaded their services. Just as we get a dopamine hit from seeing viewer counts on content, they got a dopamine hit from seeing users interact with their services, so they kept making two or three more and refining them.

**16:03** · So what we thought about back then was that, ultimately, why makers keep polishing and working hard on their services is because it gives them that "dopamine hit" of seeing their product getting traction, so we thought a lot about how we could help bring users to these mini apps.

**16:25** · Then, how did Toss help them gather those early users? Well, we created a lot of marketing tools. We made it possible for them to send things like push notifications, and we thought about how to expose them better on our interface. Yes, for the interface. Our

**16:48** · team created many slots to showcase detailed pages so that they could better guide users, and we wondered, with Toss having so many users, how can we help makers market their services so that they get chosen? I think we provided many marketing tools to help solve that perspective. Separately from that, since we feature them on the main tab, we provide recommendations after they use a specific mini app.

**17:13** · Since the inflow depends on how well we make these recommendations, we are refining the recommendation model 30 or 40 times to create a better logic. Building logic on how to provide better recommendations. That must be a difficult task.

**17:29** · Yes. Our ML team is working very hard on it.

**17:33** · But ultimately, even if you provide recommendations, the messages and things like that that appear there are very important, right? I'm sure you refine those a lot as well. Something like that.

**17:42** · Right. Right.

**17:43** · It's basically the same thing as a marketing message, isn't it?

**17:46** · Yes.

**17:46** · It seems like Toss really wouldn't function without machine learning, because there is a banner-like feature at the top as soon as you enter the main Toss screen. We call this the " Intelligence" space.

**17:59** · And you have to explain the text used for that "Intelligence" space, right?

**18:03** · We use AI to automatically generate almost all of those marketing phrases. Yes. That Beyond that, for things like recommendations, we have so much internal data. So, we use that to refine everything; when we want to advertise or market a mini-app, our internal models automatically create the content and handle the targeting.

**18:32** · You must really need a highly sophisticated system. It sounds incredibly difficult to build because it requires constant testing, self-learning, and continuous optimization. If we go back to the growth process, with 15,000 cases currently, I’m sure there were some useful apps and many useless ones created in the process; how did you experience that in the early stages?

### 좋은 앱은 1%도 안 된다

**18:58** · I find it hard to predict—does it follow the 80/20 rule, or is it a mix of decent ones and unusable ones? How did you experience that back-and-forth?

**19:18** · There was a sort of unspoken golden rule in the industry, jokingly saying that 1%are decent services and the other 99%are services people don't use.

**19:31** · Right.

**19:31** · But when we checked the data, we realized even 1%was a huge overestimate . It wasn't even 1%.

**19:38** · I see. Yes. To us, a good app—a decent app—is one that users actually use. Exactly. But that was less than 1% . Our first realization was that among the 20,000-plus services, there were even fewer that users actually found worth using.

**19:56** · Oh.

**19:56** · That was a very sad point for us.

### 만드는 비용이 0에 가까워지자 쏟아진 복제 앱

**19:59** · Did you look at the metrics for all those apps? I assume you looked at things like average retention or ad revenue.

**20:06** · Yes, we did.

**20:07** · Why, why is that? Why?

**20:10** · Like I said, we made it too easy to create those services. Because the cost of creating one is now so low.

**20:17** · Right. It’s converging to zero now.

**20:19** · Yes.

**20:20** · Usually, when copycats are made or ideas are launched, the cost of creating those copycats seems to have dropped significantly as technology evolved through the Industrial Revolution and the dot-com era.

**20:34** · Hmm.

**20:35** · Even in the past, when making a copy, one would lead to one. Or maybe two or three would be created. But now, Hundreds are...

**20:41** · Not even hundreds. Suddenly, tens of thousands are created. Ah, That's right. Exactly. So it seems like the same services kept popping up everywhere. And these days, once a trend starts, tons of copycat services emerge.

**20:57** · The rumor spreads in an instant. For example, recently, with viral fake deliveries, you saw how many popped up. You can think of it as cases like that keep happening.

**21:08** · Yes.

**21:08** · Seeing what’s at the top, It's like content trends; when " Dujongku" is popular, everyone makes a "Dujongku," or when "Wakbu" is trending , everyone makes a "Wakbu"—they just keep appearing exactly like that.

**21:22** · Because cloning is so easy.

**21:23** · Yes.

**21:24** · I was actually shocked by the data; when "Wakbu" was trending, there was a service that let you smash them through interaction. Yes. Yes. Dozens of them popped up within just a few weeks. So, Ah, this is the new normal of our time.

**21:42** · That is a fact. Yes, that's right.

**21:46** · It must be a real struggle, so I think we're at the stage where we can talk about how to select them and how to, let's say, break that so-called vicious cycle. I'm sure there were a lot of meetings. What kind of decisions did you make at the beginning?

### 출시·추천·부스팅 3단계

**22:04** · It would be great if Ji-woo could explain it.

**22:06** · Sure. Shall we talk about it? Well, we ended up categorizing the mini-apps into three stages, and I think we all discussed how to go about it together.

**22:19** · In any case, with 15,000 of them, we couldn't guarantee absolute exposure for everyone. We couldn't expose all 15,000 to 50,000 apps, so we tried various exposure logic; for example, if it's "Wakbu," when you search, the best-made one, or the one created first with the most users, should appear at the top, right? But we weren't prepared for that, so at first...

**22:44** · Even that exposure logic wasn't implemented, which led to situations where we were losing out. So, we worked on fixing the overall internal exposure logic, and I think we all agreed that better-made mini-apps should receive more exposure. Then, what is a well-made mini-app? How are we going to create the criteria for that? Hmm. That’s when the concept of "Boosting Mini-Apps" emerged, with the idea of giving more exposure to well-made ones.

**23:16** · So, since our base philosophy is a world where anyone can be a maker, it's true that anyone who builds something can launch a mini app. And if certain metrics—like our UX standards, actual usage data, or review performance—are met, it automatically becomes a recommended mini app. However, our editors actually try out every single mini app. So, a person tries them out and...

**23:41** · We've shifted to a system where we select the truly great ones as " boosting mini apps" and give them the best exposure placements.

**23:48** · So, those that are automatically promoted to recommended mini apps are then manually reviewed by a person to be boosted? Is that free? Or is it a paid service? How does it work? It's free. You just need to make a good service. Oh, really? I see. So I just need to make it well, right?

**24:05** · Exactly.

**24:06** · I see.

**24:07** · How do I make it well?

**24:10** · That's a trade secret, but...

**24:14** · Thinking about what makes a good app.

**24:16** · What is the minimum quality we expect?

**24:19** · We, the team behind the mini app business, have debated this every single day, as you mentioned, really thinking it through. So, looking at things like the recommended mini apps here, you can see metrics like actual usage data included. But ultimately, it comes down to: whether I have users or not, or if I do have them, how do I make them keep using my service? Hmm.

**24:47** · We initially approached it thinking, " It must have a pretty design," but we couldn't define what a "pretty design" actually is. And, every service has such different characteristics. There are services that are fun to use once and never again, and services that need to be used monthly, and so on.

**25:04** · It wasn't easy to judge if something was good or bad by applying a single standard to all metrics. So, eventually , whatever the service is, if you’ve provided value to the user, it really needs to be meaningful. And the user must continue to perceive it as good. We decided that focusing on that perspective was the right approach.

**25:26** · What are some generally meaningful metrics? Well, retention would obviously be one, and there's ad click-through rates like CPC, and so on . But what are the main "good" metrics you suggest to users?

### 지표는 카테고리 300개마다 다르다

**25:43** · Retention is ultimately the most important, but we do look at different metrics based on the category. For example, if it's a SIM card purchase service, honestly, how many times a year do you travel? Maybe two or three times? Then it's a service used three times a year.

**25:58** · Airbnb is like that too.

**25:59** · Right.

**25:59** · But you can't just force those apps to focus on retention. You can't really do that, right? So, we’ve divided them into about 300 categories, and each category has different metrics .

**26:10** · For games, for instance, time spent is naturally important; for other categories, the number of visitors might matter, or perhaps just the purchase conversion rate, so we’ve broken them down by category.

**26:20** · Ah, I see. So that means you use different logic to recommend mini apps depending on those categories. That’s fantastic. Uh.

### 좋은 앱 사례: 오늘의 행운빙수·최저가 주유소

**26:26** · Then, are there any examples of good apps? Could you show us some examples of good apps? I'd like to show you something quite modest. I want to give people some encouragement, so, as I said, we try out all the apps ourselves , and I found an app called "Today’s Lucky Shaved Ice." I discovered it while using it. It’s an app where you make shaved ice in 3D, and it gives you a fortune. So, looking at it, I thought , "Oh, this is so cute.""It tells my fortune when I make shaved ice." We actually had a lot of fun using it, saying things like that. So we consider these modest ideas to be good apps as well.

**26:55** · Also, in the case of "Lowest Price Gas Station," it's just an app that finds the cheapest gas station.

**27:02** · But that’s it.

**27:03** · That’s the only function. It just marks the price on a map and shows you where the station is. It’s a really simple app, but we internally see both of these as providing different values in terms of utility and fun, and we were thinking that it would be great if more apps like that were created.

### UX 원칙 ① 로그인·알림 동의는 최소로

**27:23** · Ah, services that provide very clear value will definitely survive. But at the same time, when you look at them, they don't look bad at all. Is there something we might call a principle for these things? I think things like that would be very important. We talked about this beforehand—I heard you provide guidelines for things like UX principles. Could you introduce those as well?

**27:44** · We’ve been writing a series on these UX principles in our developer center and blog. About these UX principles.

**27:49** · There are about five of them, and you can consider it a featured mini app if it meets all five. Even though calling them "principles" makes them sound very grand, these five are basically, "Is it comfortable when I use it?" You can think of it as being written based on that criterion. The first principle is "Keep logins and notification requests to a minimum," though many mini apps are built otherwise. They force you to log in as soon as you enter. But back then, did we already have the "One-Key" feature?

**28:20** · We did.

**28:20** · Yes.

**28:20** · Yes. But I think it was a time when it was less well-known. So, from a maker's perspective, it was natural to think, "They've entered the app, so I should make them log in," which led to that, but since our app's biggest advantage is use without installation, telling them to log in as soon as they enter just makes them drop off immediately.

**28:38** · In fact, looking at our metrics, we found that half the users drop off if we force a login. So, even from the developers 'perspective, the principle is that it's better not to force a login than to have them leave as soon as they arrive. Actually, what's inside Toss includes things like addresses, emails, and gender. But most services don't really need that kind of information. So, since we can implement everything using the "unknown key," a user identifier we created, our principle is to use login only when absolutely necessary.

**29:05** · So, it sounds like you guide them not to require login at first and to collect users with the unknown key, but then, besides that key, don't builders want to own personal information to do things like push marketing? Is there a way to resolve that?

**29:24** · Yes.

**29:24** · As soon as a user enters, we provide a user identification key called the "unknown key." We've changed everything so that you can send push notifications and do everything else with that. So, if you want to obtain personal information, signing up or logging in is a heavy action, but let's say you need to enter a shipping address while using a service. If you agree to have the information I already have filled in automatically, it feels much less burdensome, right?

**29:54** · We've created tools like a personal information provision kit that can map to that unknown key in that way.

**30:03** · So, when I build a service, things like agreeing to terms or forcing sign-ups. Collecting personal information is difficult for builders to implement and is a burdensome action for users, but with mini-apps, both sides can feel a bit less pressure. It's easy to implement, and it's less burdensome for me to use as well. I feel this while recording this podcast, but the makers who create these have really great metacognition.

**30:34** · I think that's why things turn out this way. The fact that they quickly realize what others would find uncomfortable and execute changes based on that is quite fascinating. Yes.

### UX 원칙 ② 전면 광고는 시점을 알리고 맥락에

**30:44** · Could we look at the next one as well?

**30:46** · Oh, sure. So, the second principle, though it may sound obvious, is to inform the user of the timing before showing full-screen ads. I'll share some examples of this later on. So, the idea for interstitial ads is to be mindful of the timing, because when we use an app and it's just flooded with ads, we don't really want to use it anymore. From a user's perspective, this is obvious, but I've also tried making mini-apps myself. But to generate revenue, you feel like you have to include a lot of ads. I end up adding a lot of ads, too.

**31:13** · But if you flood the screen with ads before the user even knows what the app is or what its value and features are, they won't want to use it, so in the long run...

**31:27** · Since ads generate revenue only when they are viewed by many users, flooding the app with them actually weakens long-term revenue. From a creator's standpoint, I believe spamming ads is a path to poor revenue, so the principle is to show ads at the right time and in a way that doesn't hurt the user experience. So, this...

**31:50** · What is the "right time"? Right. I've brought some examples because you might think that if an app has ads, it's automatically a bad app based on these principles. But it doesn't mean you should remove ads; it means you should place them in the right context and at the right time. There was this mini-app called "Necker Photo." After you finish shooting, it shows an option to "watch an ad to save the video." However, saving photos is free. Looking at it, it's very clear that you just need to watch an ad to save the video.

**32:16** · I wanted to point out that placing ads in context like this is actually much more efficient.

**32:27** · Also, with the cheapest gas station app I showed you earlier, if you show an ad on the very first screen, you won't be able to see the prices. So, once you click on a gas station, there's an ad banner inside. For the user, it's a very natural context where they can just think, "Oh, there's an ad," and move on. It becomes a good ad context for everyone involved. The principle is : "Don't obscure the core action."

**32:50** · Hmm. Hmm, that's great. But I think there's a certain point to consider. There are banner ads and such, but looking at things like interstitial ads ...

### 수익 높은 전면 광고는? 광고 인텔리전스

**33:00** · From a maker's perspective, you want to show interstitial ads quickly to maximize exposure and revenue, so I think it would be a dilemma to think about restricting them to certain pages . Of course, choosing the right context is important, but how would you guide us on handling those larger, high-revenue interstitial ads?

**33:22** · Hmm. That is actually one of the major challenges I am currently working on solving.

**33:26** · Oh, I see. Yes.

**33:28** · Yeah. I haven't fully solved it yet, and it's a problem I'll need to keep working on.

**33:32** · Basically, at this stage, we are providing some data to our users. For instance, we show that people tend to dislike it after seeing ads a certain number of times. We provide guidance on the relationship between CPM and ad impressions, which actually varies significantly depending on the service and where the ads are placed. So, for now, we're at a stage where we suggest, "We don't know the answer either, but try to find some hints using this data.

**33:58** · " In the advertising industry these days, publishers are making many attempts to maximize their ad revenue, not just by deciding when to show ads themselves, but by analyzing their service and taking a more technical approach to determine when, what type of ad, and to whom it should be displayed.

**34:17** · So, in the long term, rather than having builders or makers struggle to optimize their ad revenue through trial and error, we want to solve it by having a platform like ours determine when and what type of ad should be shown to whom.

**34:34** · I see, so you are considering "ad intelligence." That sounds like a great direction.

### UX 원칙 ③–⑤ 일관된 디자인, 기대한 대로 보여 주기

**34:40** · This is very interesting. It seems there are other factors like consistent design or progress indicators; when I was preparing for this, I looked at both good and bad examples, and they were quite different. Could you show us some of those as well? Sure. Oh, okay. Regarding consistent design, many people might think, "I'm not good at making pretty designs."

**35:05** · But "consistent" here means providing a consistent experience for the user. For example, if a button is red on one screen and then blue on the next, it’s confusing right from the start. It means minimizing such inconsistencies, and I brought this as an example, but since most designs are done by AI these days...

**35:26** · That, that.

**35:27** · Look at that over there, the thing on the side of the card in the middle of the screen. The half-moon shape. Oh, it’s really frustrating.

**35:37** · It’s a typical AI design pattern; it’s not actually meaningful, but that's what I got when I asked it to design like an AI.

**35:46** · So you realized it yourself.

**35:48** · Yes.

**35:48** · I've seen so many apps like this, but when you design with AI, it inevitably learns from averages, so it can't design with the context in mind.

**36:02** · And if you ask it to build an app with five specific features, the AI, having learned from static screens, just crams all five of them into one single screen instead of creating a flow. So, everything ends up squashed in there like that. To prevent these issues, we’re working on upgrading and integrating a design agent into our MCP , and we are making preparations for that. So, yeah.

**36:25** · A consistent design doesn't mean making things look pretty; it's a principle of designing navigation, buttons, and back functions so they work exactly as expected. Now, points 4 and 5 are quite similar, but I believe good UX is showing the user an outcome that matches their expectations . It’s not just about things needing to be beautiful. Or that things must flow like water. Rather than that, it’s just showing what the user expects. I think that’s the best UX.

**36:55** · For example, if you press a "get" button, it should download or receive the item. But if an ad pops up when you press "get," the user thinks, "Wait, I pressed' get ', so why did an ad appear ?" They might leave and lose the intention to use the app again. We’ve actually experimented a lot with the Toss app, too. You know those app-tech services where you earn Toss points? We ran many experiments to see if changing the button from just "get points" to " watch an ad to get points" would cause a drop-off, but it didn't actually lead to a decline.

**37:22** · Rather, I think it actually resulted in better UX because users explicitly recognize that they will receive points for watching an ad.

**37:31** · It provides predictability.

**37:32** · Yes. Exactly. Exactly. That’s why, in our Toss app design guide, we include a mandatory instruction to clearly state that an ad will appear if the user proceeds.

**37:42** · I see, that makes sense. I was actually thinking the opposite—do some apps really not mention that? But it turns out there were quite a few apps out there that deviated from common sense. I think that’s the background for why this came up.

**37:55** · One of our second points of frustration is exactly this. We’ve really only used services built by experts, haven't we? So we expect common-sense services and we expect to use common-sense services.

**38:07** · Yes.

**38:09** · But as you explained, AI-generated services produced far too many outcomes that didn't make common sense.

**38:18** · That can happen. That can happen. Since the AI is building them. Yes. It might not necessarily be a human-made problem .

**38:24** · Perhaps the greed to build it too quickly and release it early is what actually causes that.

**38:28** · I also wonder if we're just mass-producing forms. What do you want to do moving forward? I'd like to talk about who we want to see return and who we think will survive in the AI era.

### AI 시대에 잘 될 메이커

**38:41** · Yeah.

**38:41** · Looking at the services we've introduced or the ones we thought were quite good, the ones that were really fun and high-quality, there are definitely people who professionally created such services or worked in similar fields. But surprisingly, those who identified a real-world problem or a daily inconvenience and thought, "I want to solve this," ended up producing better results.

**39:11** · For example, looking at services like Geunlo or the makers we've met, they come from completely unexpected backgrounds, some even being teachers. Yeah.

**39:26** · I feel strongly that those who turn the specific pain points they feel in their daily lives into value will continue to do well in the future. And when you look at why those people continue, it’s because a service only gains true value when the value of the solution to the inconvenience is delivered to the user.

**39:45** · Those who find joy in that value and keep going— rather than those who just build, abandon, and build again—are the ones who try repeatedly until the user is satisfied, and I think they will ultimately succeed.

**40:03** · I really think so. Unexpectedly, we have over 15,000 services, but the proportion of people who look at the data, refine their service, and re-release it is quite small.

**40:14** · Uh.

**40:14** · So, putting it out there and just neglecting it.

**40:16** · Neglecting it, yes. That percentage is higher than you’d think. So, to make your service truly successful, you need to meet users and keep improving it, because as they say, the one who stays the longest wins. I believe those who do that will end up getting good results.

**40:32** · Hmm. Selecting those kinds of people is really important, then. And it seems crucial to create more case studies showing that those people are the ones who succeed. As for the sense of crisis I feel, it’s the fear that AI models will eventually surpass us in things like creativity and quality. So I’m still pondering how I can become more rare and how I can maintain my originality.

### AI 시대에 희소해지는 것: 진정성

**41:01** · Do you have any thoughts or opinions on that? I understand your question as " how to become more rare," but from what I’ve felt, regarding these mini-apps, even just last month, 700 editors were used. We use dozens of them every single day.

**41:18** · But now, whenever something is fun, or even a small idea seems truly useful, you can really feel that the creator made it because they genuinely wanted to. Ah, those kinds of things.

**41:30** · Yeah.

**41:30** · Actually, in this AI era, there are just too many fakes. Fakes created by AI. But even when watching Instagram Reels, the ones with real people are funnier, more interesting, and more memorable than AI-generated ones. So, in the same way, with these mini-apps, you can tell if the person really made it because they enjoyed it. That sincerity—the feeling that they built it because they truly thought it was a problem worth solving—is becoming increasingly rare. You can feel when something is made with genuine sincerity.

**41:58** · Hmm. Yeah.

**42:00** · It might sound a bit abstract, but since maintaining that kind of sincerity is so difficult, I think it will eventually become even more rare.

**42:08** · That’s a fair point. So, what kind of outcome do you think will happen if many of those rare people gather together?

### 앞으로: 더 작아지는 서비스와 알리페이식 미니앱

**42:13** · I think there are two things. First, from the perspective of the Toss app— or rather, from our perspective as the platform provider— The amount of time users spend on Toss will increase overwhelmingly.

**42:28** · Hmm. That's one thing. If services that are fun and high-quality keep gathering , people will eventually come to view and experience them. So, there’s that provider’s perspective: that the time spent on Toss will increase significantly.

**42:44** · And second, which is something we’ve been talking about, services will eventually get smaller and smaller. The unit of a meaningful service—the service I want to use—will get smaller. Instead of just using what I’ve always used, I’ll shift to services that solve my specific problems in the moment, and it will be more about AI or machine learning suggesting things to me rather than me searching for them myself. Hmm.

**43:15** · Then, within the limited time I have, the number of services I experience— even if it's just 30 mini-apps or services I use daily now—will likely grow to hundreds in the future.

**43:26** · So, in that way, the number of services users interact with will become incredibly diverse.

**43:32** · Hmm, I think that would be the result.

**43:35** · That could be the case.

**43:36** · We have some veterans in this industry.

**43:40** · If we talk about the industry big shots , Alibaba in China has been running a mini-app business, and WeChat is also doing this mini-app business as well.

**43:50** · There are these veterans who have been doing these so-called mini-programs for about ten years now. Yes, yes, on those platforms. They take the specific, distinct features we want to use and break them down into really small units , so a large platform like Alipay, which knows my information, understands it as if I'm talking to it, and just executes a third-party mini-app for me.

**44:19** · For example, it's like this: I want to place a Siren Order at Starbucks right now. So, I could just go into the Siren Order service myself and make the payment for that action, right? But instead, a service like Alipay could just suggest, "You always seem to drink an Americano at 7 o'clock, should I order one for you?" and I just press a button.

**44:43** · If I press "order," it already has my payment method registered in Alipay. So , just like that, because a coffee ordering service like Starbucks is integrated as a mini-app, it just finishes the whole process, from ordering to payment, right there. This way, users can use services efficiently within the limited time they have.

**45:06** · And for those who are building these mini-apps or creating content, as long as they make them well and integrate them smoothly with the platform, they can keep producing the results they want.

**45:17** · That is so true. Yes. As we are about to wrap up this podcast recording, I'd like to ask how you plan to further develop the Toss app, or if there's anything you'd like to promote, please feel free to share before we close.

### 앱인토스의 다음, 메이커가 얻는 것

**45:34** · Since we are in finance, the Toss app typically approaches new technologies or paradigms by first creating a small playground called a "sandbox" before the regulations or full infrastructure are properly established, letting people play within it, and eventually using those results to form processes, laws, or policies.

**45:58** · In this era of AI-driven chaos, we want to provide the best possible playground for builders who want to be makers, where they can freely test their creations and see the results for themselves.

**46:19** · So, if there are people who have their own ideas and thoughts, and want to execute them quickly to see the results , why not try building them as a mini-app and putting them on Toss? And to make that happen, we need to build a great playground. That’s the kind of thing we're thinking about.

**46:34** · Right.

**46:34** · That's great. I think we need to be a bit more direct, so what's the benefit of building an app on Toss? Can you make money? Or can you gather users and do something? What is there? First of all, If you just build a great service, we will pour in the users for you, so you won't even need to do marketing.

**46:50** · Oh, that’s fantastic.

**46:51** · Yes.

**46:51** · I think that’s one thing. And although it’s work for the future, we are working hard on figuring out how to monetize the value of the space appropriately once users come and use the service properly, turning that space value into revenue. So, please just make a great service. We’ll take care of the rest.

**47:12** · Yes.

**47:12** · Oh, I’m really looking forward to it. I’ll also try my best to become a "factory manager" starting today. Yes. I won't just churn them out , but I plan to work hard and build one today with a clear principle. Yes. I don't want to contribute a thousand other things; I want to contribute one well-made piece. Yes. Yes. So, we’ve had a fun conversation with the Toss app team today, and I hope you’ve all been inspired.

**47:34** · Many builders and makers are watching our podcast channel, and I believe you’ve heard many great stories, so since we shared such good content today, I hope you’ll check out the Toss app. The link is in the description, so I would appreciate it if you could check it out. Alright, that wraps up today’s recording. Thank you, everyone. Thank you.
