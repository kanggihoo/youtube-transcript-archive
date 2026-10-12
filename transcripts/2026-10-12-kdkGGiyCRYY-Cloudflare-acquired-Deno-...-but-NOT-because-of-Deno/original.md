---
title: "Cloudflare acquired Deno ... but NOT because of Deno"
author: "Maximilian Schwarzmüller"
site: "YouTube"
published: 2026-10-12T06:00:27-07:00
source: "https://www.youtube.com/watch?v=kdkGGiyCRYY"
domain: "youtube.com"
language: "en"
description: "Cloudflare acquired Deno. The team, the runtime ... and celld!Join my upcoming program to build slop-free apps with AI: https://aienhanced.dev/Website: https..."
word_count: 2904
---

![](https://www.youtube.com/watch?v=kdkGGiyCRYY)

## Transcript

**0:00** · We got some old school JavaScript world news. Not primarily about AI, because Deno. Is joining Cloudflare is acquired by Cloudflare would be the proper way of putting that. Now Deno of course is that JavaScript runtime which hit 1.0 in 2020, which is an alternative to Node.js, and of course it's one of the big three if you want to put it like this.

**0:26** · Besides obviously Node.js and Bun, and now it's being acquired by Cloudflare, but. The deal is not about Deno the runtime at all.

**0:35** · Instead, Deno is not just the runtime; it is most recently all about celld.

**0:40** · Then I'll get back to that and what that is and why Cloudflare is interested in it, and take a closer look at the deal.

**0:47** · So let's take a look at the official announcement blog post posted on the Deno site, and of course, there also is one on the Cloudflare site.

**0:55** · And in that post on the Deno side, they mentioned that for years they've been working to make building server software simpler, and that they did that initially with the Deno runtime.

**1:07** · But that today they're announcing that the entire Deno team is joining Cloudflare to take the work further.

**1:13** · Our ambition has always extended beyond the runtime. I wrote about this in my JavaScript container blog post.

**1:21** · Compute, storage, and communication working together without every application assembling its own infrastructure.

**1:26** · So it's not just about the runtime; it's about infrastructure.

**1:29** · Okay, now the Deno company launched a service called Deno Deploy, which does kind of what the name implies.

**1:36** · It allows you to deploy Deno-based applications or simplify the deployment of such. Of course, you don't need to use it.

**1:43** · You could. Just put it on any VPS, but they try to simplify that, and that's the typical route most of these runtime or JavaScript framework companies tried to go down over the past.

**1:58** · Especially before AI, the typical path was launch something in open source and then try to sell some hosting service.

**2:05** · That is, for example, also not JavaScript, but also Laravel is the prime example here. I would say it's of course an amazing PHP framework, and they are making essentially all their money through their paid services.

**2:20** · Most importantly, these days, as I understand it, through Laravel Cloud.

**2:24** · So Deno tried the same thing.

**2:27** · Now this led to celld. Here it is again.

**2:31** · We'll take a look at that in a second.

**2:32** · But before we do that, there's one important thing also mentioned in this blog post.

**2:38** · We will support the Deno runtime for another year with monthly releases containing bug fixes and security updates.

**2:47** · After that year, we will end our development of the Deno runtime.

**2:51** · Deno will remain open source, and we welcome others who want to continue its development.

**2:55** · In other words, they're shutting it down, or maybe someone else takes over.

**2:59** · Of course, but the Deno runtime will disappear if things stay this way.

**3:06** · It'll be supported for one year, but thereafter it won't be a thing.

**3:10** · And of course, if it's not supported, if it doesn't get security patches, using it just won't be a good option unless you patch it yourself.

**3:17** · with AI, you could do that, but.

**3:19** · That's a pretty big statement.

**3:21** · The main thing Deno was all about until a couple of months ago is the thing they're shutting down here.

**3:28** · They're basically discontinuing, and the same, of course, unsurprisingly, is true for Deno Deploy.

**3:34** · But they're stopping it earlier.

**3:36** · They will continue operating it for six months before shutting down.

**3:40** · So Deno, the runtime, is going to disappear. That leaves us with Node.js, of course, and with Bun, and also with another important runtime workerd, the runtime that powers Cloudflare Workers, and that takes us back to celld.

**4:01** · So they built the Deno runtime.

**4:02** · They built Deno Deploy, and this led to celld.

**4:05** · And what is celld?

**4:06** · Then celld is a project for self-hosted, distributed, durable objects.

**4:13** · But actually, it's even more than that.

**4:16** · If you take a look at the celld documentation, you learn.

**4:19** · Essentially, it is self-hosted Cloudflare.

**4:22** · Not all of it, but a good chunk of it, especially all the application hosting layer or the application hosting services Cloudflare offers.

**4:31** · Because, celld, at this point already.

**4:34** · Offers support for containers D1, which is the Cloudflare SQLite database, cron triggers.

**4:42** · Workers in general and dynamic workers, which are in the end workers spun up based on dynamically generated code, code generated by a large language model, for example, KV, which is the key value store, queues, which are guess what, queues, and many other services as well, and of course also durable objects, which was the main thing they started with.

**5:03** · Now this may require some explanation.

**5:07** · And by the way, if you want to learn more about Cloudflare, I am launching a program where I teach you how to build applications with AI without the slop.

**5:16** · How I keep the slop out of my code.

**5:18** · And how I work these days, and in there I'll be using Cloudflare.

**5:23** · So as part of the course, you will learn the basics of Cloudflare.

**5:26** · That will be a mini course in that program. And whilst the registration is not open yet, but hopefully soon, you can already pre-register to get notified when it does open up.

**5:37** · So Cloudflare, of course, is a big Hosting or infrastructure company, you could say. Now it did start essentially as a proxy company or as a CDN company, but these days you can host entire applications on it, and that is pretty amazing. I have to say, it's my default go-to indeed because it's so easy, especially when you use other tools like Alchemy and so on, which I also cover in the course.

**6:01** · But that takes me a bit too far.

**6:02** · This is not about Cloudflare.

**6:03** · It is a company that allows you to host your applications, your services, or just run your nightly jobs there.

**6:11** · Whatever you want to do, it's a cloud company now.

**6:14** · Cloudflare of course is a company where you have to create an account and then potentially pay for using it. Though they have a pretty generous free tier, celld is essentially a part of Cloudflare, one of the most important parts for building applications, but self-hosted.

**6:31** · So the idea behind celld really is that you can take a VPS, let's say an EC2 instance or a Hetzner server or anything like that, and you can install celld on it.

**6:41** · And then build your own Cloudflare clone and your own workers and your own durable objects all on your VPS. And therefore, of course, you have fixed pricing, and you're not going to pay for Cloudflare.

**6:53** · And indeed, that is one of their main pitches on the celld website: that they basically tell you that you have a higher upfront cost because you're paying for the server on which you're running celld, but then it's kind of very predictable and flat until you add more servers at a certain point.

**7:10** · Whereas with Cloudflare you have that generous free tier or the five dollar paid tier, which is fixed at five dollars until a certain amount of usage, but then it can get more expensive.

**7:21** · So the benefit of celld is of course control. That you can host it on your own data centers if it's important for you that everything stays in the EU, for example, you can do that. If it needs to be nearby your company or your office, you can do that, and you have that potential pricing or that cost advantage.

**7:38** · That is the pitch of celld, and as mentioned, they do offer a broad variety of Cloudflare services already, and this is what the deal is about.

**7:48** · Now, the Deno team says that.

**7:50** · Their entire development led to celld.

**7:52** · Building on the Cloudflare Workers programming model, celld lets developers build distributed applications from the start while making the system simple to operate.

**8:00** · celld is essentially entirely based on S3, where it stores the state in which it uses for orchestrating its different workers and durable objects even across multiple service.

**8:12** · So that's pretty amazing.

**8:14** · And what excites Ryan Dahl, the creator of Deno, is that the scaling is built into the programming model, rather than infrastructure.

**8:22** · Each app has to assemble itself.

**8:24** · The idea is really that with celld and with Cloudflare, you can easily spin up more or less workers, durable objects, and so on.

**8:33** · And if you're using celld, you're just paying for one server, maybe at a certain point for two servers, but it's very predictable and very easy to scale. That is the idea, and especially horizontal scaling gets really easy, or potentially easier than with a traditional monolith on a server.

**8:53** · So that's the pitch here.

**8:54** · Now, why is Cloudflare buying that? Now, the obvious way of looking at it is, of course, that they're buying a competitor.

**9:01** · Cloudflare is selling you the same thing, so clearly they don't want an open source version of it.

**9:09** · They don't want people to run their own Cloudflare, so to say. Pretty obvious.

**9:13** · Well, what they mentioned related to that in the end in their blog post is that one problem they see with their customers.

**9:19** · So Cloudflare sees with their Cloudflare customers the problem that it's commonly claimed around the internet that we make Cloudflare Workers work differently from other cloud platforms in order to create lock-in. And it's kind of true.

**9:33** · If you're building an application and you're running it on top of Cloudflare, there is some lock-in because it's not a Node.js application that you just put onto Cloudflare.

**9:43** · It's not like Vercel or Netlify.

**9:46** · Even there, you have some restrictions regarding databases But it's not like that you can build an application with any framework and put it on Cloudflare.

**9:54** · This does not work. Instead, you have to build it for Cloudflare.

**9:58** · You have to build it for their Workers runtime. Now, with AI and with amazing frameworks like Alchemy, which I like a lot, which I use in that course.

**10:07** · That is easier than ever, I would say, but it is a decision, and of course, therefore, for some companies, it may not be the decision they want to make because if you build your entire application, your entire business potentially on top of Cloudflare, you're locked in because you have to purpose build it, as I just mentioned.

**10:24** · Now this deal makes more sense if you look at it like this. If they're not going to deprecate or shut down celld, which I'm pretty sure they won't.

**10:34** · They are essentially building something or buying something and ensuring that it gets maintained.

**10:40** · That they can show to their customers and say, "Hey, you can build on Cloudflare.

**10:44** · If you ever want to move away, you can do that with celld.

**10:48** · The same application will continue to work on your own service with celld."

**10:52** · That I think is the rationale behind the deal here.

**10:56** · That is what they're saying in the end.

**10:58** · But frankly, I believe them here because.

**11:01** · Sure, they could shut down. celld.

**11:03** · Let's be honest. In the age of AI, with modern AI agents, how long would it take for it to pop up again? A week.

**11:11** · So there is no hope in getting rid of the idea of celld or having something like celld out there in the world.

**11:20** · So that wouldn't work.

**11:21** · I think their rationale really is that they want to buy the knowledge that they want to bring their own knowledge to make celld better potentially, and to truly have as much compatibility as possible.

**11:33** · To allow people to move out of Cloudflare, betting on the fact that most people won't do it because, of course, if you're using celld, you still have to maintain the servers on which you run celld.

**11:45** · There is more for you to do, more infrastructure to manage. Cloudflare using Cloudflare is more convenient, and I think that is the bet they're making here.

**11:53** · And under that perspective, that deal makes sense to me.

**11:57** · Now, of course, it's kind of sad for Deno users, though, and that's the nice way of putting it.

**12:03** · It's kind of bad if you bet on Deno, though. I will say again, with AI migrating to Node.js or Bun, will be easier than ever.

**12:11** · It's doable, I would say, but of course, it's pretty unexpected for the runtime to suddenly be gone in a year.

**12:18** · But as sad as that is, kind of makes sense.

**12:22** · Deno never got that wide adoption. I got AI pull up some numbers here from the state of JavaScript surveys over the years, and we see in 2020 when version 1.0 of Deno was released, it was at six percent usage of the people that participated in that survey.

**12:42** · And it stayed more or less flat.

**12:45** · Of course, in the end, it climbed to twelve percent, so it doubled.

**12:50** · So yeah, nice. But that's not a lot.

**12:52** · Bun, which launched in 2022, overtook them after a year and has a higher usage. But Node.js, of course, dominates it all with ninety percent usage. And as Ryan Dahl said himself in some blog post, I think.

**13:08** · The Deno got sucked into the Node.js compatibility trap. They had to become more and more compatible, and therefore they were not able to fully follow down all their original ideas they had, because Deno started with some pretty cool ideas, where they tried to fix certain issues Node.js had, but they never were able to.

**13:32** · Fully make that work, or they had to make compromises to have that Node.js compatibility to get more adoption.

**13:40** · Because of course, it's easier to get adoption if you're like Bun, which was essentially, hey, we got full Node.js compatibility from day one.

**13:49** · Not really full compatibility, but pretty much everything you would need to port most web applications and things like that over to Bun. So switching to Bun was easier on day one than it is for Deno.

**14:03** · That's I think kind of the problem they faced and they never were able to solve.

**14:08** · And Bun, keep in mind, was acquired too by Anthropic.

**14:11** · It's basically very hard, especially now in the age of AI, to run a company that is all about a framework or a runtime and sell those hosting services you sold in the past.

**14:23** · It's doable, probably, but much harder because. Switching is easy.

**14:29** · Hosting is also made easier with AI.

**14:33** · I mean, if you want to spin up a server and run your Node.js application on it, AI of course helps with that.

**14:38** · It gives you more knowledge. AI agents can help you configure that server. So, that all gets trickier, and I think that's the reason why Bun was acquired, or one of the reasons.

**14:48** · They even stated that they never were able to get their hosting business off the ground, or even launch it, and it's pretty much the same for Deno.

**14:56** · Now that does not change though that I find celld pretty amazing and interesting.

**15:00** · I hope it'll stick around, but as mentioned, I'm pretty positive that it will.

**15:04** · And then it's a nice self-hosted alternative to Cloudflare and the Cloudflare programming model and being able to focus on your application and not on the hosting part and pick from all these nice building blocks.

**15:17** · I find that pretty intriguing, and I think a lot of developers do that.

**15:22** · If we take a look at developers building on top of Cloudflare, that growth here.

**15:28** · Doesn't look too bad. I think it's perfect for the age of AI agents.

**15:32** · They're benefiting a lot from them, and therefore, this deal, as bitter as it is for Deno fans, I guess makes a lot of sense.
